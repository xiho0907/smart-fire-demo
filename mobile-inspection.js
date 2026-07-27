(() => {
  "use strict";

  const routeTypes = {
    inspection: "fire_check",
    "facility-check": "facility_check",
    evacuation: "evacuation",
    maintenance: "maintenance"
  };
  const typeRoutes = Object.fromEntries(Object.entries(routeTypes).map(([route, type]) => [type, route]));
  const typeMeta = {
    fire_check: { title: "防火检查", icon: "clipboard-check", prefix: "FC", period: "2026年7月", tone: "blue" },
    facility_check: { title: "消防设施检查", icon: "layers-3", prefix: "XF", period: "2026年7月", tone: "blue" },
    evacuation: { title: "安全疏散检查", icon: "log-in", prefix: "SS", period: "2026年7月", tone: "green" },
    maintenance: { title: "消防设施维保", icon: "settings", prefix: "WB", period: "2026年7月", tone: "indigo" }
  };
  const points = ["1号楼1层大厅", "1号楼2层走廊", "2号楼1层配电间", "2号楼3层仓库", "3号楼2层东侧防火分区", "4号楼1层消防控制室", "地下1层消防水泵房", "室外消防车道"];
  const fireItems = [
    "消防安全责任制和岗位职责落实情况", "消防安全制度及操作规程执行情况", "消防控制室值班和记录情况", "防火巡查及隐患整改落实情况",
    "疏散通道、安全出口畅通情况", "消防车通道及登高场地管理情况", "安全疏散指示标志和应急照明情况", "防火门、防火卷帘完好情况",
    "灭火器配置及有效期情况", "室内外消火栓完整好用情况", "自动喷水灭火系统运行情况", "火灾自动报警系统运行情况",
    "防排烟系统运行情况", "消防水源和消防泵房运行情况", "重点部位巡查记录情况", "用火、用电、用气管理情况",
    "员工消防培训和演练情况", "其他消防安全管理情况"
  ];
  const facilityItems = [
    "防排烟系统", "消防水源及供水设施", "消防专用电话", "火灾自动报警系统", "自动喷水灭火系统", "室内消火栓系统", "室外消火栓系统", "气体灭火系统", "泡沫灭火系统", "防火分隔设施",
    "应急照明系统", "疏散指示系统", "消防应急广播", "消防电梯", "消防电源及配电", "灭火器材", "消防控制室设备", "可燃气体报警系统", "电气火灾监控系统", "消防车道和登高场地"
  ];
  const evacuationItems = ["疏散通道、安全出口和疏散门", "常闭式/常开式防火门", "应急照明和疏散指示标志", "栅栏和防盗设施", "疏散指示图和辅助器材"];
  const maintenanceGroups = [
    ["A-防排烟系统", ["送风阀", "排烟阀", "送风机", "排烟风机"]], ["B-消防水源", ["消防水池", "高位水箱", "稳压泵", "水泵接合器"]],
    ["C-火灾报警", ["报警控制器", "感烟探测器", "感温探测器", "手动报警按钮"]], ["D-自动喷水灭火", ["报警阀组", "水流指示器", "末端试水装置", "喷头"]],
    ["E-消火栓系统", ["室内消火栓", "室外消火栓", "消防水泵", "管网阀门"]], ["F-应急广播", ["广播主机", "功率放大器", "扬声器", "联动控制"]],
    ["G-消防电话", ["电话主机", "固定分机", "电话插孔", "通话线路"]], ["H-防火分隔", ["防火门", "防火卷帘", "防火窗", "挡烟垂壁"]],
    ["I-气体灭火", ["灭火控制器", "储瓶装置", "喷嘴", "紧急启停按钮"]], ["J-消防电源", ["主电源", "备用电源", "配电柜", "线路绝缘"]],
    ["K-应急照明", ["应急照明灯", "疏散指示灯", "集中电源", "控制器"]], ["L-消防电梯", ["迫降功能", "专用电话", "排水设施", "前室设施"]],
    ["M-电气火灾监控", ["监控主机", "剩余电流探测器", "温度探测器", "通信线路"]], ["N-可燃气体报警", ["报警主机", "气体探测器", "联动阀门", "通风联动"]],
    ["P-泡沫灭火", ["泡沫液储罐", "比例混合器", "泡沫产生器", "系统管网"]], ["Q-消防控制室", ["图形显示装置", "联动控制盘", "打印记录", "设备接地"]],
    ["R-消防车道", ["消防车道", "消防登高操作场地"]], ["S-移动灭火器材", ["手提式灭火器", "推车式灭火器"]],
    ["Z-其他消防器材", ["消防水枪", "消防水带", "灭火毯", "消防锹", "消防斧", "消防镐", "消防扳手"]]
  ];

  let deps;
  let store;
  let initialStore;
  let draft = null;
  const ui = { hazardFilter: "all", abnormalFilter: "all", maintenanceStep: 1 };

  const clone = (value) => JSON.parse(JSON.stringify(value));
  const itemModel = (name, index, group = "") => ({ id: `i${index + 1}`, code: group ? `${group.charAt(0)}${index + 1}` : String(index + 1), group, name, result: "unchecked", note: "", point: "", photos: [], handlingMode: "", rectificationNote: "", rectificationPhotos: [], hazardId: "" });
  const maintenanceItems = () => maintenanceGroups.flatMap(([group, names]) => names.map((name) => ({ group, name }))).map((entry, index) => itemModel(entry.name, index, entry.group));
  const itemDefinitions = (type) => type === "fire_check" ? fireItems.map((name, index) => itemModel(name, index)) : type === "facility_check" ? facilityItems.map((name, index) => itemModel(name, index)) : type === "evacuation" ? evacuationItems.map((name, index) => itemModel(name, index)) : maintenanceItems();
  const stamp = () => deps.nowText();

  function createTask(type, id, state, month, operator = "") {
    const meta = typeMeta[type];
    const task = { id, type, no: `${meta.prefix}-2026-${month}-001`, title: `2026年${Number(month)}月${meta.title}`, period: `2026年${Number(month)}月`, state, operator, startedAt: state === "pending" ? "" : `2026-${month}-15 09:00:00`, completedAt: state === "completed" ? `2026-${month}-15 15:20:00` : "", items: itemDefinitions(type), maintenanceInfo: { company: "", creditCode: "", person: "", reportNo: "", attachments: [] } };
    if (state === "processing") {
      task.items.slice(0, type === "maintenance" ? 6 : 3).forEach((item, index) => { item.result = index === 2 ? "abnormal" : "normal"; item.note = index === 2 ? "现场检查发现状态异常，待进一步处理。" : "现场检查正常。"; item.point = index === 2 ? points[2] : ""; item.photos = index === 2 ? [""] : []; item.handlingMode = index === 2 ? "hazard" : ""; });
    }
    if (state === "completed") {
      task.items.forEach((item) => { item.result = "normal"; item.note = "现场检查结果正常。"; });
      const abnormal = task.items[Math.min(3, task.items.length - 1)];
      abnormal.result = "abnormal"; abnormal.note = "检查时发现局部设施异常。"; abnormal.point = points[1]; abnormal.handlingMode = "onsite"; abnormal.rectificationNote = "已现场调整并复核正常。";
    }
    return task;
  }

  function buildInitialStore() {
    const tasks = [];
    Object.keys(typeMeta).forEach((type) => {
      tasks.push(createTask(type, `${type}-current`, type === "fire_check" ? "pending" : "processing", "07"));
      tasks.push(createTask(type, `${type}-history`, "completed", "05", "张三"));
    });
    return {
      tasks,
      hazards: [
        { id: "hz1", no: "HZ-20260713-001", source: "智能终端", level: "major", category: "消防设施", state: "rectifying", description: "消防水泵房水压不足，影响全楼消防供水系统正常运行", point: "地下1层消防水泵房", photos: [], assignee: "李明", deadline: "2026-07-22", createdAt: "2026-07-13 10:23:00", rectificationNote: "", rectificationPhotos: [], reviewResult: "", history: [{ action: "assign", operator: "Admin", time: "2026-07-13 10:35:00", note: "已指派李明负责整改。" }] },
        { id: "hz2", no: "HZ-20260715-001", source: "防火检查", level: "general", category: "消防设施", state: "pending", description: "2号楼3层走廊灭火器压力不足，无法正常使用", point: "2号楼3层仓库", photos: [], assignee: "待分配", deadline: "2026-07-24", createdAt: "2026-07-15 14:08:00", rectificationNote: "", rectificationPhotos: [], reviewResult: "", history: [] },
        { id: "hz3", no: "HZ-20260716-002", source: "手动上报", level: "general", category: "用火用电", state: "review", description: "1号楼活动室角落堆积废旧纸箱，靠近电源插座", point: "1号楼1层大厅", photos: [], assignee: "王晨", deadline: "2026-07-23", createdAt: "2026-07-16 16:20:00", rectificationNote: "废旧纸箱已清理，插座周边恢复安全距离。", rectificationPhotos: [], reviewResult: "", history: [{ action: "rectify", operator: "王晨", time: "2026-07-17 09:18:00", note: "已提交整改结果。" }] },
        { id: "hz4", no: "HZ-20260701-002", source: "防火检查", level: "general", category: "安全疏散", state: "closed", description: "1号楼3层疏散通道堆放杂物", point: "1号楼2层走廊", photos: [], assignee: "赵凯", deadline: "2026-07-05", createdAt: "2026-07-01 11:06:00", rectificationNote: "现场杂物已全部清理。", rectificationPhotos: [], reviewResult: "pass", closedAt: "2026-07-05 10:12:00", history: [{ action: "close", operator: "Admin", time: "2026-07-05 10:12:00", note: "审定通过并销号。" }] }
      ]
    };
  }

  function init(nextDeps) {
    deps = nextDeps;
    initialStore = buildInitialStore();
    store = clone(initialStore);
    document.addEventListener("change", handleChange);
    document.addEventListener("input", handleInput);
  }

  function reset() {
    store = clone(initialStore);
    ui.hazardFilter = "all"; ui.abnormalFilter = "all"; ui.maintenanceStep = 1;
  }

  const taskById = (id) => store.tasks.find((task) => task.id === id);
  const hazardById = (id) => store.hazards.find((hazard) => hazard.id === id);
  const typeTasks = (type) => store.tasks.filter((task) => task.type === type);
  const taskCounts = (task) => ({ normal: task.items.filter((item) => item.result === "normal").length, abnormal: task.items.filter((item) => item.result === "abnormal").length, unchecked: task.items.filter((item) => item.result === "unchecked").length });
  const stateLabel = (state) => ({ pending: "待检查", processing: "检查中", completed: "已完成" }[state] || state);
  const stateTone = (state) => ({ pending: "pending", processing: "processing", completed: "closed" }[state] || "pending");
  const hazardStateLabel = (state) => ({ pending: "待分配", rectifying: "整改中", review: "待审定", closed: "已销号" }[state]);
  const hazardOpenCount = () => store.hazards.filter((item) => item.state !== "closed").length;

  function badge(featureId) {
    if (featureId === "hazard") return hazardOpenCount();
    return 0;
  }

  function metrics() {
    const inspection = typeTasks("fire_check")[0];
    const counts = taskCounts(inspection);
    return {
      hazardOpen: hazardOpenCount(),
      inspectionProgress: `${inspection.items.length - counts.unchecked}/${inspection.items.length}`,
      inspectionCompleted: inspection.state === "completed" ? "1/1" : "0/1"
    };
  }

  function canRender(screen) { return Boolean(routeTypes[screen] || screen === "hazard"); }

  function render(parts) {
    const [screen, sub, id] = parts;
    deps.setBottomNav("", false);
    if (screen === "hazard") return renderHazardRoute(sub, id);
    const type = routeTypes[screen];
    if (!sub) return renderTaskList(type);
    if (sub === "execute") return renderTaskExecute(taskById(id));
    if (sub === "detail" || sub === "result") return renderTaskDetail(taskById(id), sub === "result");
    if (sub === "abnormal") return renderAbnormalList(type);
    renderTaskList(type);
  }

  function renderHome() {
    const { fireAlarms, warnings, faults } = deps.existingData();
    const openFire = fireAlarms.find((item) => !["reset", "false"].includes(item.state));
    const openWarning = warnings.find((item) => item.state !== "recovered");
    const openFault = faults.find((item) => item.state !== "recovered");
    const alert = openFire ? { title: openFire.title, meta: `${openFire.location} · ${openFire.time.slice(11, 16)}`, note: openFire.note, route: `fire/${openFire.id}`, icon: "siren", tone: "fire" } : openWarning ? { title: openWarning.title, meta: `${openWarning.point} · ${openWarning.updated.slice(11, 16)}`, note: openWarning.note, route: `warning/${openWarning.id}`, icon: "triangle-alert", tone: "warning" } : { title: openFault?.title || "当前无待处理事件", meta: openFault ? `${openFault.point} · ${openFault.updated.slice(11, 16)}` : "设备运行状态稳定", note: openFault?.note || "所有重点消防设备运行正常。", route: openFault ? `fault/${openFault.id}` : "applications", icon: openFault ? "wrench" : "circle-check", tone: openFault ? "fault" : "normal" };
    const inspection = typeTasks("fire_check")[0];
    const done = taskCounts(inspection);
    const hazards = store.hazards.filter((item) => item.state !== "closed").slice(0, 3);
    const today = new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric", weekday: "long" }).format(new Date());
    deps.renderHeader("首页", "", "", deps.notificationHeaderButton("home"));
    deps.setBottomNav("home");
    deps.appMain.innerHTML = `<div class="inspection-home">
      <section class="institution-band"><small>${deps.esc(today)} · 晴 32°C</small><h2>XX市阳光养老院</h2><p>消防安全机构端</p></section>
      <div class="suite-section-title"><h2>智能告警</h2><button type="button" data-route="notifications">查看全部</button></div>
      <button class="home-alert-card ${alert.tone}" type="button" data-route="${alert.route}"><span><i data-lucide="${alert.icon}"></i></span><div><strong>${deps.esc(alert.title)}</strong><small>${deps.esc(alert.meta)}</small><p>${deps.esc(alert.note)}</p></div><i data-lucide="chevron-right"></i></button>
      <div class="suite-section-title"><h2>与我相关待办</h2></div>
      <div class="home-todo-grid">
        ${homeTodo("防火巡查", "待巡查 12 · 已完成 5", "去巡查", "user-round-check", "patrol")}
        ${homeTodo("消控室值班", "当前班次值班中", "进入值班", "monitor", "duty")}
        ${homeTodo("防火检查", `${inspection.items.length - done.unchecked}/${inspection.items.length} 项已检查`, "去检查", "clipboard-check", `inspection/execute/${inspection.id}`)}
        ${homeTodo("隐患整改", `${hazardOpenCount()} 项待闭环`, "去处理", "triangle-alert", "hazard")}
      </div>
      <div class="suite-section-title"><h2>待处理隐患 <b>${hazardOpenCount()}</b></h2><button type="button" data-route="hazard">查看全部</button></div>
      <div class="suite-card-list">${hazards.map(hazardCard).join("")}</div>
      <div class="suite-section-title"><h2>快捷入口</h2></div>
      <div class="home-quick-grid"><button type="button" data-route="hazard/new"><i data-lucide="circle-plus"></i><span>上报隐患</span></button><button type="button" data-suite-placeholder="巡查 NFC 打卡"><i data-lucide="scan-line"></i><span>NFC打卡</span></button><button type="button" data-suite-placeholder="巡查扫码"><i data-lucide="qr-code"></i><span>扫码</span></button></div>
    </div>`;
  }

  function homeTodo(title, meta, action, icon, route) {
    const attr = route === "patrol" ? `data-suite-placeholder="防火巡查"` : `data-route="${route}"`;
    return `<article class="home-todo-card"><span class="suite-icon"><i data-lucide="${icon}"></i></span><div><strong>${title}</strong><small>${meta}</small></div><button type="button" ${attr}>${action}</button></article>`;
  }

  function renderTaskList(type) {
    const meta = typeMeta[type];
    const tasks = typeTasks(type);
    const abnormal = tasks.flatMap((task) => task.items.map((item) => ({ task, item }))).filter(({ item }) => item.result === "abnormal");
    deps.renderHeader(meta.title, "月度任务与历史记录", "applications");
    deps.appMain.innerHTML = `<div class="suite-page">
      ${type !== "maintenance" ? `<button class="abnormal-summary" type="button" data-route="${typeRoutes[type]}/abnormal"><i data-lucide="triangle-alert"></i><span><strong>${abnormal.length}</strong><small>异常项目</small></span><span><strong>${abnormal.filter(({ item }) => item.handlingMode === "onsite").length}</strong><small>已当场整改</small></span><span><strong>${abnormal.filter(({ item }) => item.hazardId).length}</strong><small>转为隐患</small></span><i data-lucide="chevron-right"></i></button>` : ""}
      <div class="suite-year-heading"><strong>2026年</strong><span>${tasks.length} 次任务</span></div>
      <div class="suite-card-list">${tasks.map(taskCard).join("")}</div>
    </div>`;
  }

  function taskCard(task) {
    const counts = taskCounts(task);
    const route = typeRoutes[task.type];
    const target = task.state === "completed" ? `${route}/detail/${task.id}` : `${route}/execute/${task.id}`;
    return `<button class="suite-task-card" type="button" data-route="${target}"><div><strong>${deps.esc(task.title)}</strong><span class="state-pill ${stateTone(task.state)}">${stateLabel(task.state)}</span></div><p>${deps.esc(task.no)}${task.operator ? ` · ${deps.esc(task.operator)}` : ""}</p><div class="suite-task-stats"><span><b>${counts.normal}</b>正常</span><span><b>${counts.abnormal}</b>异常</span><span><b>${counts.unchecked}</b>未检查</span></div></button>`;
  }

  function renderTaskExecute(task) {
    if (!task) return deps.go("applications");
    const meta = typeMeta[task.type];
    const route = typeRoutes[task.type];
    if (task.state === "pending") { task.state = "processing"; task.startedAt = stamp(); }
    deps.renderHeader(`${meta.title} - ${task.period}`, "执行任务", route);
    if (task.type === "maintenance") return renderMaintenance(task);
    const counts = taskCounts(task);
    deps.appMain.innerHTML = `<div class="suite-page suite-execute-page">${progressHeader(task, counts)}${checklist(task)}</div>${executeActions(task)}`;
  }

  function progressHeader(task, counts) {
    const done = task.items.length - counts.unchecked;
    return `<section class="suite-progress"><div><strong>${done}/${task.items.length}</strong><span>已完成</span></div><div class="suite-progress-track"><i style="width:${Math.round(done / task.items.length * 100)}%"></i></div><p><span>正常 ${counts.normal}</span><span>异常 ${counts.abnormal}</span><span>未检查 ${counts.unchecked}</span></p></section>`;
  }

  function checklist(task) {
    let group = "";
    return `<div class="suite-checklist">${task.items.map((item) => {
      const heading = item.group && item.group !== group ? (group = item.group, `<h3>${deps.esc(item.group)}</h3>`) : "";
      return `${heading}<button class="suite-check-item ${item.result}" type="button" data-check-item="${item.id}" data-task-id="${task.id}"><span>${deps.esc(item.code)}</span><div><strong>${deps.esc(item.name)}</strong><small>${item.result === "normal" ? "检查结果正常" : item.result === "abnormal" ? deps.esc(item.note || "已记录异常") : "点击填写检查结果"}</small></div><b>${item.result === "normal" ? "正常" : item.result === "abnormal" ? "异常" : "未检查"}</b><i data-lucide="chevron-right"></i></button>`;
    }).join("")}</div>`;
  }

  function executeActions(task) {
    const complete = taskCounts(task).unchecked === 0;
    return `<div class="fixed-actions"><button type="button" data-suite-action="save-task" data-task-id="${task.id}">暂存</button><button class="primary" type="button" data-suite-action="submit-task" data-task-id="${task.id}" ${complete ? "" : "disabled"}>提交检查</button></div>`;
  }

  function renderMaintenance(task) {
    const counts = taskCounts(task);
    const step = ui.maintenanceStep;
    const info = task.maintenanceInfo;
    const panel = step === 1 ? `<section class="suite-form-card"><h2>基本信息填写</h2>${textField("维保公司名称", "company", info.company, true)}${textField("统一社会信用代码", "creditCode", info.creditCode)}${textField("维保人员姓名", "person", info.person, true)}${textField("维保报告编号", "reportNo", info.reportNo, true)}</section>` : step === 2 ? `${progressHeader(task, counts)}${checklist(task)}` : `<section class="suite-form-card"><h2>报告上传</h2><p class="suite-hint">支持 PDF、JPG、PNG、WebP、XLS、XLSX，最多 10 个，单个不超过 20 MB。</p><div class="attachment-list">${info.attachments.map((file, index) => `<span><i data-lucide="file-text"></i><b>${deps.esc(file.name)}</b><small>${formatSize(file.size)}</small><button type="button" data-remove-attachment="${index}" data-task-id="${task.id}"><i data-lucide="x"></i></button></span>`).join("")}</div><button class="suite-upload-command" type="button" data-attachment-source><i data-lucide="paperclip"></i>选择报告附件</button><input hidden type="file" data-maintenance-attachments data-task-id="${task.id}" accept=".pdf,.jpg,.jpeg,.png,.webp,.xls,.xlsx" multiple /></section>`;
    deps.appMain.innerHTML = `<div class="suite-page suite-execute-page"><div class="suite-steps">${["基本信息", "维保内容", "报告上传"].map((label, index) => `<button type="button" class="${step === index + 1 ? "active" : ""}" data-maintenance-step="${index + 1}"><b>${index + 1}</b><span>${label}</span></button>`).join("")}</div>${panel}</div><div class="fixed-actions"><button type="button" data-suite-action="save-task" data-task-id="${task.id}">暂存</button>${step > 1 ? `<button type="button" data-maintenance-step="${step - 1}">上一步</button>` : ""}<button class="primary" type="button" data-maintenance-next="${step}" data-task-id="${task.id}">${step === 3 ? "提交维保" : "下一步"}</button></div>`;
  }

  function textField(label, key, value, required = false) { return `<label class="form-field"><span class="form-label">${label}${required ? " <em>必填</em>" : ""}</span><input type="text" value="${deps.esc(value)}" data-maintenance-field="${key}" /></label>`; }

  function renderTaskDetail(task, resultPage = false) {
    if (!task) return deps.go("applications");
    const meta = typeMeta[task.type];
    const route = typeRoutes[task.type];
    const counts = taskCounts(task);
    deps.renderHeader(resultPage ? "检查结果" : `${meta.title}详情`, task.period, route);
    deps.appMain.innerHTML = `<div class="suite-page"><section class="suite-result-card"><i data-lucide="${task.state === "completed" ? "circle-check" : "clipboard-list"}"></i><div><strong>${deps.esc(task.title)}</strong><small>${task.state === "completed" ? `由 ${deps.esc(task.operator || "Admin")} 于 ${deps.esc(task.completedAt)} 提交` : "当前任务执行结果"}</small></div><span class="state-pill ${stateTone(task.state)}">${stateLabel(task.state)}</span></section>${progressHeader(task, counts)}<div class="suite-checklist readonly">${task.items.map((item) => `<article class="suite-check-item ${item.result}"><span>${deps.esc(item.code)}</span><div><strong>${deps.esc(item.name)}</strong><small>${deps.esc(item.note || (item.result === "normal" ? "检查结果正常" : "无补充说明"))}</small>${item.hazardId ? `<button type="button" data-route="hazard/detail/${item.hazardId}">查看关联隐患</button>` : ""}</div><b>${item.result === "normal" ? "正常" : item.result === "abnormal" ? "异常" : "未检查"}</b></article>`).join("")}</div></div>`;
  }

  function renderAbnormalList(type) {
    const route = typeRoutes[type];
    const rows = typeTasks(type).flatMap((task) => task.items.map((item) => ({ task, item }))).filter(({ item }) => item.result === "abnormal").filter(({ item }) => ui.abnormalFilter === "all" || (ui.abnormalFilter === "onsite" ? item.handlingMode === "onsite" : Boolean(item.hazardId)));
    deps.renderHeader("异常项目", typeMeta[type].title, route);
    deps.appMain.innerHTML = `<div class="suite-page"><div class="suite-filter-tabs">${[["all", "全部"], ["onsite", "已整改"], ["hazard", "转隐患"]].map(([key, label]) => `<button type="button" class="${ui.abnormalFilter === key ? "active" : ""}" data-abnormal-filter="${key}">${label}</button>`).join("")}</div><div class="suite-card-list">${rows.map(({ task, item }) => `<article class="hazard-card-suite"><div><span class="hazard-level general">异常</span><b>${deps.esc(task.period)}</b></div><h3>${deps.esc(item.name)}</h3><p>${deps.esc(item.point || "未填写点位")} · ${deps.esc(item.note)}</p>${item.hazardId ? `<button type="button" data-route="hazard/detail/${item.hazardId}">查看隐患</button>` : `<span class="state-pill closed">已当场整改</span>`}</article>`).join("") || emptyState("暂无异常项目")}</div></div>`;
  }

  function renderHazardRoute(sub, id) {
    if (!sub) return renderHazardList();
    if (sub === "new") return renderHazardNew();
    if (sub === "detail") return renderHazardDetail(hazardById(id));
    renderHazardList();
  }

  function renderHazardList() {
    const records = store.hazards.filter((item) => ui.hazardFilter === "all" || item.state === ui.hazardFilter);
    deps.renderHeader("隐患整改", `${hazardOpenCount()} 项待闭环`, "applications");
    deps.appMain.innerHTML = `<div class="suite-page suite-hazard-page"><div class="suite-filter-tabs scroll">${[["all", "全部"], ["pending", "待分配"], ["rectifying", "整改中"], ["review", "待审定"], ["closed", "已销号"]].map(([key, label]) => `<button type="button" class="${ui.hazardFilter === key ? "active" : ""}" data-hazard-filter="${key}">${label}</button>`).join("")}</div><div class="suite-hazard-stats"><span><b>${store.hazards.length}</b>总隐患</span><span><b>${store.hazards.filter((item) => item.state !== "closed" && item.deadline < "2026-07-27").length}</b>已超期</span><span><b>${hazardOpenCount()}</b>待闭环</span></div><div class="suite-card-list">${records.map(hazardCard).join("") || emptyState("当前筛选下暂无隐患")}</div></div><div class="fixed-actions"><button class="primary" type="button" data-route="hazard/new">上报隐患</button></div>`;
  }

  function hazardCard(item) {
    return `<button class="hazard-card-suite" type="button" data-route="hazard/detail/${item.id}"><div><span class="hazard-level ${item.level}">${item.level === "major" ? "重大隐患" : "一般隐患"}</span><b>${deps.esc(item.no)}</b><span class="state-pill ${item.state}">${hazardStateLabel(item.state)}</span></div><h3>${deps.esc(item.description)}</h3><p>${deps.esc(item.source)} · ${deps.esc(item.category)} · ${deps.esc(item.point)}</p><small>${item.assignee} · 期限 ${item.deadline}</small></button>`;
  }

  function renderHazardNew() {
    deps.renderHeader("手动上报隐患", "现场发现隐患", "hazard");
    deps.appMain.innerHTML = `<form class="suite-page suite-form-page" id="hazardNewForm"><section class="suite-form-card"><h2>隐患信息</h2><label class="form-field"><span class="form-label">隐患描述 <em>必填</em></span><textarea name="description" placeholder="请描述隐患位置、程度和影响"></textarea></label><label class="form-field"><span class="form-label">隐患等级 <em>必填</em></span><select name="level"><option value="general">一般隐患</option><option value="major">重大隐患</option></select></label><label class="form-field"><span class="form-label">隐患要素类型 <em>必填</em></span><select name="category"><option value="">请选择</option>${["消防设施", "安全疏散", "用火用电", "消防管理", "建筑防火", "其他"].map((item) => `<option>${item}</option>`).join("")}</select></label><label class="form-field"><span class="form-label">隐患点位 <em>必填</em></span><select name="point"><option value="">请选择</option>${points.map((item) => `<option>${item}</option>`).join("")}</select></label><label class="form-field"><span class="form-label">整改期限 <em>必填</em></span><input name="deadline" type="date" value="2026-08-03" /></label>${pagePhotoField("hazard-new", [], 9)}</section></form><div class="fixed-actions"><button type="button" data-route="hazard">取消</button><button class="primary" type="button" data-suite-action="submit-hazard">提交上报</button></div>`;
  }

  function renderHazardDetail(item) {
    if (!item) return deps.go("hazard");
    const action = item.state === "pending" ? `<button class="primary" type="button" data-hazard-action="assign" data-hazard-id="${item.id}">分配负责人</button>` : item.state === "rectifying" ? `<button class="primary" type="button" data-hazard-action="rectify" data-hazard-id="${item.id}">上报整改</button>` : item.state === "review" ? `<button type="button" data-hazard-action="reject" data-hazard-id="${item.id}">退回整改</button><button class="primary" type="button" data-hazard-action="approve" data-hazard-id="${item.id}">审定通过</button>` : "";
    deps.renderHeader("隐患详情", item.no, "hazard");
    deps.appMain.innerHTML = `<div class="suite-page"><section class="hazard-detail-hero ${item.level}"><div><span>${item.level === "major" ? "重大隐患" : "一般隐患"}</span><b>${hazardStateLabel(item.state)}</b></div><h2>${deps.esc(item.description)}</h2><p>${deps.esc(item.point)}</p></section><section class="suite-form-card"><h2>隐患信息</h2><div class="suite-info-grid"><span><small>来源</small><b>${deps.esc(item.source)}</b></span><span><small>类别</small><b>${deps.esc(item.category)}</b></span><span><small>负责人</small><b>${deps.esc(item.assignee)}</b></span><span><small>整改期限</small><b>${deps.esc(item.deadline)}</b></span></div>${item.rectificationNote ? `<div class="note-box">整改说明：${deps.esc(item.rectificationNote)}</div>` : ""}</section><section class="suite-form-card"><h2>处理记录</h2><div class="timeline">${[...item.history].reverse().map((row) => `<div class="timeline-item"><span class="timeline-dot"></span><div><strong>${deps.esc(row.note)}</strong><time>${deps.esc(row.time)} · ${deps.esc(row.operator)}</time></div></div>`).join("") || `<p class="suite-hint">暂无处理记录</p>`}</div></section></div>${action ? `<div class="fixed-actions">${action}</div>` : ""}`;
  }

  function openCheckSheet(task, item) {
    draft = { kind: "check", taskId: task.id, itemId: item.id, result: item.result === "unchecked" ? "normal" : item.result, evidence: [...item.photos].filter(Boolean), rectification: [...item.rectificationPhotos].filter(Boolean) };
    deps.openSheet({ eyebrow: typeMeta[task.type].title, title: item.name, submitText: "确认检查结果", body: checkSheetBody(item), onSubmit: submitCheckSheet });
  }

  function checkSheetBody(item) {
    const result = draft.result;
    return `<div class="result-segment"><label><input type="radio" name="suiteCheckResult" value="normal" ${result === "normal" ? "checked" : ""}/><span>正常</span></label><label><input type="radio" name="suiteCheckResult" value="abnormal" ${result === "abnormal" ? "checked" : ""}/><span>异常</span></label></div><div id="suiteCheckFields">${result === "abnormal" ? abnormalFields(item) : normalFields(item)}</div>`;
  }

  function normalFields(item) { return `<label class="form-field"><span class="form-label">检查说明 <em>选填</em></span><textarea id="suiteCheckNote" placeholder="可补充现场检查情况">${deps.esc(item.note)}</textarea></label>${draftPhotoField("evidence", draft.evidence, 2, "现场照片")}`; }
  function abnormalFields(item) { return `<label class="form-field"><span class="form-label">异常备注 <em>必填</em></span><textarea id="suiteCheckNote" placeholder="请描述异常情况">${deps.esc(item.note)}</textarea></label><label class="form-field"><span class="form-label">异常点位 <em>必填</em></span><select id="suiteCheckPoint"><option value="">请选择</option>${points.map((point) => `<option ${point === item.point ? "selected" : ""}>${point}</option>`).join("")}</select></label>${draftPhotoField("evidence", draft.evidence, 2, "异常照片（必填）")}<label class="form-field"><span class="form-label">处理方式</span><select id="suiteHandlingMode"><option value="onsite" ${item.handlingMode !== "hazard" ? "selected" : ""}>当场整改</option><option value="hazard" ${item.handlingMode === "hazard" ? "selected" : ""}>转为隐患</option></select></label><div id="suiteOnsiteFields" ${item.handlingMode === "hazard" ? "hidden" : ""}><label class="form-field"><span class="form-label">整改备注 <em>必填</em></span><textarea id="suiteRectificationNote">${deps.esc(item.rectificationNote)}</textarea></label>${draftPhotoField("rectification", draft.rectification, 2, "整改照片（必填）")}</div><div id="suiteHazardFields" ${item.handlingMode === "hazard" ? "" : "hidden"}><label class="form-field"><span class="form-label">隐患等级 <em>必填</em></span><select id="suiteHazardLevel"><option value="general">一般隐患</option><option value="major">重大隐患</option></select></label><label class="form-field"><span class="form-label">隐患要素类型 <em>必填</em></span><select id="suiteHazardCategory"><option value="">请选择</option>${["消防设施", "安全疏散", "用火用电", "消防管理", "建筑防火", "其他"].map((value) => `<option>${value}</option>`).join("")}</select></label><label class="form-field"><span class="form-label">整改期限</span><input id="suiteHazardDeadline" type="date" value="2026-08-03" /></label></div>`; }

  function draftPhotoField(bucket, photos, max, label) { return `<div class="form-field"><span class="form-label">${label} <em>最多 ${max} 张</em></span><div class="photo-source-grid"><button type="button" data-suite-photo-source="camera" data-photo-bucket="${bucket}"><i data-lucide="camera"></i>拍照</button><button type="button" data-suite-photo-source="gallery" data-photo-bucket="${bucket}"><i data-lucide="images"></i>图库</button></div><input hidden type="file" data-suite-photo-input data-photo-bucket="${bucket}" accept="image/*" capture="environment"/><input hidden type="file" data-suite-photo-input data-photo-bucket="${bucket}" accept="image/jpeg,image/png,image/webp" multiple/><div class="photo-preview-grid" data-draft-photo-grid="${bucket}">${photoPreviews(bucket, photos)}</div></div>`; }
  function photoPreviews(bucket, photos) { return photos.map((photo, index) => `<span class="photo-preview"><img src="${photo}" alt="照片 ${index + 1}"/><button type="button" data-remove-draft-photo="${index}" data-photo-bucket="${bucket}"><i data-lucide="x"></i></button></span>`).join(""); }

  function submitCheckSheet() {
    const task = taskById(draft.taskId); const item = task?.items.find((row) => row.id === draft.itemId); if (!item) return;
    const result = document.querySelector("input[name=suiteCheckResult]:checked")?.value || "normal";
    const note = document.querySelector("#suiteCheckNote")?.value.trim() || "";
    if (result === "normal") { item.result = "normal"; item.note = note; item.photos = [...draft.evidence]; item.point = ""; item.handlingMode = ""; item.rectificationNote = ""; item.rectificationPhotos = []; }
    else {
      const point = document.querySelector("#suiteCheckPoint")?.value || ""; const mode = document.querySelector("#suiteHandlingMode")?.value || "onsite";
      if (!note) return deps.showToast("请填写异常备注"); if (!point) return deps.showToast("请选择异常点位"); if (!draft.evidence.length) return deps.showToast("请上传异常照片");
      item.result = "abnormal"; item.note = note; item.point = point; item.photos = [...draft.evidence]; item.handlingMode = mode;
      if (mode === "onsite") { const fixNote = document.querySelector("#suiteRectificationNote")?.value.trim() || ""; if (!fixNote) return deps.showToast("请填写整改备注"); if (!draft.rectification.length) return deps.showToast("请上传整改照片"); item.rectificationNote = fixNote; item.rectificationPhotos = [...draft.rectification]; item.hazardId = ""; }
      else { const level = document.querySelector("#suiteHazardLevel")?.value; const category = document.querySelector("#suiteHazardCategory")?.value; const deadline = document.querySelector("#suiteHazardDeadline")?.value; if (!category) return deps.showToast("请选择隐患要素类型"); const hazard = createHazard({ source: typeMeta[task.type].title, level, category, description: `${item.name}：${note}`, point, photos: item.photos, deadline }); item.hazardId = hazard.id; item.rectificationNote = ""; item.rectificationPhotos = []; }
    }
    deps.closeSheet(); renderTaskExecute(task); deps.refreshIcons(); deps.showToast(result === "normal" ? "已标记为正常" : item.handlingMode === "hazard" ? "异常已转为隐患" : "异常及当场整改已记录");
  }

  function createHazard(values) {
    const sequence = store.hazards.length + 1; const id = `hz${Date.now()}`;
    const hazard = { id, no: `HZ-20260727-${String(sequence).padStart(3, "0")}`, source: values.source, level: values.level || "general", category: values.category, state: "pending", description: values.description, point: values.point, photos: [...(values.photos || [])], assignee: "待分配", deadline: values.deadline || "2026-08-03", createdAt: stamp(), rectificationNote: "", rectificationPhotos: [], reviewResult: "", history: [{ action: "create", operator: "Admin", time: stamp(), note: `由${values.source}生成隐患。` }] };
    store.hazards.unshift(hazard); return hazard;
  }

  function openHazardAction(item, action) {
    draft = { kind: "hazard", hazardId: item.id, action, photos: [] };
    if (action === "assign") return deps.openSheet({ eyebrow: "隐患整改", title: "分配整改负责人", submitText: "确认分配", body: `<label class="form-field"><span class="form-label">整改负责人 <em>必填</em></span><select id="hazardAssignee"><option value="">请选择</option>${deps.assignees.map((name) => `<option>${name}</option>`).join("")}</select></label><label class="form-field"><span class="form-label">整改期限</span><input id="hazardDeadline" type="date" value="${item.deadline}"/></label>`, onSubmit: submitHazardAction });
    if (action === "rectify") return deps.openSheet({ eyebrow: "隐患整改", title: "上报整改结果", submitText: "提交审定", body: `<label class="form-field"><span class="form-label">整改说明 <em>必填</em></span><textarea id="hazardActionNote"></textarea></label>${draftPhotoField("hazard-action", draft.photos, 9, "整改照片（至少 1 张）")}`, onSubmit: submitHazardAction });
    return deps.openSheet({ eyebrow: "隐患审定", title: action === "approve" ? "确认审定通过" : "退回整改", submitText: action === "approve" ? "通过并销号" : "确认退回", danger: action === "reject", body: `<label class="form-field"><span class="form-label">审定说明 <em>${action === "reject" ? "必填" : "选填"}</em></span><textarea id="hazardActionNote" placeholder="请输入审定意见"></textarea></label>`, onSubmit: submitHazardAction });
  }

  function submitHazardAction() {
    const item = hazardById(draft.hazardId); if (!item) return;
    const note = document.querySelector("#hazardActionNote")?.value.trim() || "";
    if (draft.action === "assign") { const assignee = document.querySelector("#hazardAssignee")?.value; if (!assignee) return deps.showToast("请选择整改负责人"); item.assignee = assignee; item.deadline = document.querySelector("#hazardDeadline")?.value || item.deadline; item.state = "rectifying"; item.history.push({ action: "assign", operator: "Admin", time: stamp(), note: `已分配给${assignee}整改。` }); }
    if (draft.action === "rectify") { if (!note) return deps.showToast("请填写整改说明"); if (!draft.photos.length) return deps.showToast("请上传整改照片"); item.rectificationNote = note; item.rectificationPhotos = [...draft.photos]; item.state = "review"; item.history.push({ action: "rectify", operator: "Admin", time: stamp(), note: "已提交整改结果，等待审定。" }); }
    if (draft.action === "approve") { item.state = "closed"; item.closedAt = stamp(); item.reviewResult = "pass"; item.history.push({ action: "close", operator: "Admin", time: stamp(), note: note || "审定通过并销号。" }); }
    if (draft.action === "reject") { if (!note) return deps.showToast("请填写退回原因"); item.state = "rectifying"; item.reviewResult = "reject"; item.history.push({ action: "reject", operator: "Admin", time: stamp(), note }); }
    deps.closeSheet(); renderHazardDetail(item); deps.refreshIcons(); deps.showToast("隐患状态已更新");
  }

  function handleClick(event) {
    const placeholder = event.target.closest("[data-suite-placeholder]"); if (placeholder) { deps.showToast(`${placeholder.dataset.suitePlaceholder}暂未开放`); return true; }
    const itemButton = event.target.closest("[data-check-item]"); if (itemButton) { const task = taskById(itemButton.dataset.taskId); const item = task?.items.find((row) => row.id === itemButton.dataset.checkItem); if (task && item) openCheckSheet(task, item); return true; }
    const action = event.target.closest("[data-suite-action]"); if (action) { suiteAction(action); return true; }
    const filter = event.target.closest("[data-hazard-filter]"); if (filter) { ui.hazardFilter = filter.dataset.hazardFilter; renderHazardList(); deps.refreshIcons(); return true; }
    const abnormalFilter = event.target.closest("[data-abnormal-filter]"); if (abnormalFilter) { ui.abnormalFilter = abnormalFilter.dataset.abnormalFilter; renderAbnormalList(routeTypes[deps.routeParts()[0]]); deps.refreshIcons(); return true; }
    const maintenanceStep = event.target.closest("[data-maintenance-step]"); if (maintenanceStep) { ui.maintenanceStep = Number(maintenanceStep.dataset.maintenanceStep); renderTaskExecute(taskById(deps.routeParts()[2])); deps.refreshIcons(); return true; }
    const maintenanceNext = event.target.closest("[data-maintenance-next]"); if (maintenanceNext) { maintenanceNextAction(maintenanceNext); return true; }
    const attachmentSource = event.target.closest("[data-attachment-source]"); if (attachmentSource) { document.querySelector("[data-maintenance-attachments]")?.click(); return true; }
    const removeAttachment = event.target.closest("[data-remove-attachment]"); if (removeAttachment) { taskById(removeAttachment.dataset.taskId)?.maintenanceInfo.attachments.splice(Number(removeAttachment.dataset.removeAttachment), 1); renderTaskExecute(taskById(removeAttachment.dataset.taskId)); deps.refreshIcons(); return true; }
    const photoSource = event.target.closest("[data-suite-photo-source]"); if (photoSource) { const bucket = photoSource.dataset.photoBucket; const camera = photoSource.dataset.suitePhotoSource === "camera"; document.querySelectorAll(`[data-suite-photo-input][data-photo-bucket="${bucket}"]`)[camera ? 0 : 1]?.click(); return true; }
    const pagePhotoSource = event.target.closest("[data-page-photo-source]"); if (pagePhotoSource) { const camera = pagePhotoSource.dataset.pagePhotoSource === "camera"; document.querySelectorAll("[data-page-photo-input]")[camera ? 0 : 1]?.click(); return true; }
    const removeDraft = event.target.closest("[data-remove-draft-photo]"); if (removeDraft) { const bucket = removeDraft.dataset.photoBucket; const photos = draftBucket(bucket); photos.splice(Number(removeDraft.dataset.removeDraftPhoto), 1); if (bucket === "page") refreshPagePhotos(); else refreshDraftGrid(bucket); return true; }
    const hazardAction = event.target.closest("[data-hazard-action]"); if (hazardAction) { openHazardAction(hazardById(hazardAction.dataset.hazardId), hazardAction.dataset.hazardAction); return true; }
    return false;
  }

  function suiteAction(button) {
    const task = taskById(button.dataset.taskId);
    if (button.dataset.suiteAction === "save-task") return deps.showToast("当前进度已暂存在页面内存中");
    if (button.dataset.suiteAction === "submit-task") { if (taskCounts(task).unchecked) return deps.showToast("请完成全部检查项后提交"); task.state = "completed"; task.operator = "Admin"; task.completedAt = stamp(); deps.go(`${typeRoutes[task.type]}/result/${task.id}`); deps.showToast("检查任务已提交"); return; }
    if (button.dataset.suiteAction === "submit-hazard") submitNewHazard();
  }

  function maintenanceNextAction(button) {
    const task = taskById(button.dataset.taskId); const info = task.maintenanceInfo; const step = Number(button.dataset.maintenanceNext);
    if (step === 1) { if (!info.company.trim() || !info.person.trim() || !info.reportNo.trim()) return deps.showToast("请填写维保公司、维保人员和报告编号"); ui.maintenanceStep = 2; }
    else if (step === 2) { if (taskCounts(task).unchecked) return deps.showToast("请完成全部维保项目"); ui.maintenanceStep = 3; }
    else { if (!info.attachments.length) return deps.showToast("请至少上传一份维保报告"); task.state = "completed"; task.operator = "Admin"; task.completedAt = stamp(); return deps.go(`maintenance/result/${task.id}`); }
    renderTaskExecute(task); deps.refreshIcons();
  }

  function submitNewHazard() {
    const form = document.querySelector("#hazardNewForm"); const data = new FormData(form); const photos = draft?.kind === "page-photos" ? draft.photos : [];
    if (!data.get("description")?.trim()) return deps.showToast("请填写隐患描述"); if (!data.get("category")) return deps.showToast("请选择隐患要素类型"); if (!data.get("point")) return deps.showToast("请选择隐患点位"); if (!photos.length) return deps.showToast("请至少上传一张现场照片");
    createHazard({ source: "手动上报", level: data.get("level"), category: data.get("category"), description: data.get("description").trim(), point: data.get("point"), photos, deadline: data.get("deadline") }); draft = null; deps.go("hazard"); deps.showToast("隐患已上报");
  }

  function handleInput(event) {
    if (event.target.matches("[data-maintenance-field]")) { const task = taskById(deps.routeParts()[2]); if (task) task.maintenanceInfo[event.target.dataset.maintenanceField] = event.target.value; }
  }

  async function handleChange(event) {
    if (event.target.name === "suiteCheckResult") { draft.result = event.target.value; const task = taskById(draft.taskId); const item = task.items.find((row) => row.id === draft.itemId); document.querySelector("#suiteCheckFields").innerHTML = draft.result === "abnormal" ? abnormalFields(item) : normalFields(item); deps.refreshIcons(document.querySelector("#sheetLayer")); return; }
    if (event.target.id === "suiteHandlingMode") { document.querySelector("#suiteOnsiteFields").hidden = event.target.value !== "onsite"; document.querySelector("#suiteHazardFields").hidden = event.target.value !== "hazard"; return; }
    if (event.target.matches("[data-suite-photo-input]")) { await readImageFiles(event.target.files, draftBucket(event.target.dataset.photoBucket), event.target.dataset.photoBucket, 2); event.target.value = ""; return; }
    if (event.target.matches("[data-maintenance-attachments]")) { const task = taskById(event.target.dataset.taskId); const valid = [...event.target.files].filter((file) => file.size <= 20 * 1024 * 1024 && /\.(pdf|jpe?g|png|webp|xlsx?)$/i.test(file.name)); if (valid.length !== event.target.files.length) deps.showToast("已忽略格式不支持或超过 20 MB 的文件"); task.maintenanceInfo.attachments.push(...valid.slice(0, 10 - task.maintenanceInfo.attachments.length).map((file) => ({ name: file.name, type: file.type, size: file.size }))); event.target.value = ""; renderTaskExecute(task); deps.refreshIcons(); return; }
    if (event.target.matches("[data-page-photo-input]")) { if (!draft || draft.kind !== "page-photos") draft = { kind: "page-photos", photos: [] }; await readImageFiles(event.target.files, draft.photos, "page", 9); event.target.value = ""; refreshPagePhotos(); }
  }

  function draftBucket(bucket) { if (!draft) draft = {}; if (bucket === "hazard-action" || bucket === "page") return draft.photos || (draft.photos = []); return draft[bucket] || (draft[bucket] = []); }
  async function readImageFiles(files, target, bucket, max) { for (const file of [...files].slice(0, Math.max(0, max - target.length))) { if (!/^image\/(jpeg|png|webp)$/.test(file.type)) { deps.showToast(`${file.name} 格式不支持`); continue; } if (file.size > 10 * 1024 * 1024) { deps.showToast(`${file.name} 超过 10 MB`); continue; } target.push(await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file); })); } refreshDraftGrid(bucket); }
  function refreshDraftGrid(bucket) { const grid = document.querySelector(`[data-draft-photo-grid="${bucket}"]`); if (grid) { grid.innerHTML = photoPreviews(bucket, draftBucket(bucket)); deps.refreshIcons(grid); } }
  function pagePhotoField(id, photos, max) { draft = { kind: "page-photos", photos: [...photos] }; return `<div class="form-field"><span class="form-label">现场照片 <em>至少 1 张，最多 ${max} 张</em></span><div class="photo-source-grid"><button type="button" data-page-photo-source="camera"><i data-lucide="camera"></i>拍照</button><button type="button" data-page-photo-source="gallery"><i data-lucide="images"></i>图库</button></div><input hidden type="file" data-page-photo-input accept="image/*" capture="environment"/><input hidden type="file" data-page-photo-input accept="image/jpeg,image/png,image/webp" multiple/><div class="photo-preview-grid" id="pagePhotoGrid">${photoPreviews("page", photos)}</div></div>`; }
  function refreshPagePhotos() { const grid = document.querySelector("#pagePhotoGrid"); if (grid) { grid.innerHTML = photoPreviews("page", draft.photos); deps.refreshIcons(grid); } }
  function formatSize(bytes) { return bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`; }
  function emptyState(text) { return `<div class="suite-empty"><i data-lucide="inbox"></i><span>${text}</span></div>`; }

  window.InspectionApp = { init, reset, badge, metrics, canRender, render, renderHome, handleClick };
})();
