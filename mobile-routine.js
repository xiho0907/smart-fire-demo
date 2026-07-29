(() => {
  "use strict";

  const typeMeta = {
    "fire-use": {
      title: "用火检查", prefix: "YH", icon: "flame", mode: "inspection",
      items: [
        "室内活动区域、廊道禁止吸烟和烧香",
        "不得违规使用明火和取暖设备",
        "艾灸、拔罐等使用明火时应有专人看护",
        "施工动火应办理审批并由持证人员实施",
        "作业前后应清理可燃物并全程看护"
      ]
    },
    electricity: {
      title: "用电检查", prefix: "YD", icon: "zap", mode: "inspection",
      items: ["不得随意乱接电线", "不得擅自增加大功率用电设备"]
    },
    gas: {
      title: "用气检查", prefix: "YQ", icon: "gauge", mode: "inspection",
      items: [
        "使用合格燃气器具和气瓶并遵守安全用气规则",
        "安装可燃气体探测器和自动切断装置",
        "大容量液化石油气容器应设置在建筑外专用房间"
      ]
    },
    renovation: {
      title: "装修装饰检查", prefix: "ZX", icon: "briefcase", mode: "inspection",
      items: [
        "装修依法审批且不得擅自停用消防设施",
        "装修使用符合要求的不燃、难燃材料",
        "窗帘、地毯和家具燃烧性能符合规范",
        "活动装饰物远离用电设备并及时拆除",
        "内外保温和屋面保温材料符合消防要求"
      ]
    },
    duct: {
      title: "油烟管道清洗", prefix: "YY", icon: "panels-top-left", mode: "attachment",
      requirements: ["油烟管道定期清洗维护", "清洗记录完整保存备查", "清洗后完成安全检查确认"]
    },
    "hot-work": {
      title: "动火作业", prefix: "DH", icon: "wrench", mode: "attachment",
      requirements: ["依法办理动火审批手续", "作业前清除周围可燃物", "由持证人员实施", "指定专人全程看护"]
    }
  };

  const locations = ["1号楼1层大厅", "1号楼2层走廊", "1号楼2层厨房", "2号楼1层配电间", "2号楼3层仓库", "3号楼2层活动室", "消防控制室", "消防水泵房"];
  const patrolPointNames = ["消防控制室", "1号楼1层大厅", "1号楼2层走廊", "1号楼2层厨房", "1号楼3层活动室", "2号楼1层配电间", "2号楼2层护理区", "2号楼3层仓库", "地下1层消防水泵房", "室外消防车道", "东侧安全出口", "西侧安全出口"];
  const patrolCheckNames = ["疏散通道及安全出口保持畅通", "消防设施、器材完好有效", "用火、用电、用气现场无异常"];
  const slotDefinitions = [
    ["s1", "06:00-12:00"], ["s2", "12:00-18:00"], ["s3", "18:00-22:00"],
    ["s4", "22:00-00:00"], ["s5", "次日00:00-02:00"], ["s6", "次日02:00-04:00"]
  ];

  let deps;
  let store;
  let initialStore;
  let draft = null;
  const clone = (value) => JSON.parse(JSON.stringify(value));
  const stamp = () => deps.nowText();

  const checkItem = (name, index, state = "unchecked") => ({
    id: `i${index + 1}`, code: String(index + 1), name, result: state,
    note: state === "normal" ? "现场检查正常。" : "", point: "", photos: [], handlingMode: "",
    rectificationNote: "", rectificationPhotos: [], hazardId: ""
  });

  function taskModel(route, id, state, month, history = false) {
    const meta = typeMeta[route];
    const task = {
      id, route, type: route.replace(/-/g, "_"), mode: meta.mode,
      no: `${meta.prefix}-2026-${month}-001`, title: `2026年${Number(month)}月${meta.title}`,
      period: `2026年${Number(month)}月`, state, checkedAt: history ? `2026-${month}-15 10:20:00` : "",
      assistant: history ? "李明" : "", note: history ? "本月检查记录已完成归档。" : "",
      operator: history ? "Admin" : "", completedAt: history ? `2026-${month}-15 11:08:00` : "",
      items: meta.mode === "inspection" ? meta.items.map((name, index) => checkItem(name, index, history ? "normal" : "unchecked")) : [],
      attachments: history ? [{ name: `${meta.title}-2026${month}.pdf`, type: "application/pdf", size: 1864000 }] : []
    };
    if (!history && meta.mode === "inspection" && route === "fire-use") {
      task.state = "processing";
      task.items[0].result = "normal";
      task.items[0].note = "现场未发现违规吸烟和烧香情况。";
    }
    return task;
  }

  function patrolPoint(name, index, state = "pending") {
    return {
      id: `p${index + 1}`, name, state, verifiedMethod: state === "completed" ? "nfc" : "",
      inspector: state === "completed" ? "Admin" : "", assistant: "", note: "",
      submittedAt: state === "completed" ? "2026-07-29 10:18:00" : "",
      items: patrolCheckNames.map((item, itemIndex) => checkItem(item, itemIndex, state === "completed" ? "normal" : "unchecked"))
    };
  }

  function patrolDay(date, history = false) {
    const states = history ? ["completed", "completed", "completed", "completed", "completed", "completed"] : ["completed", "active", "pending", "partial", "overdue", "completed"];
    return {
      date,
      slots: slotDefinitions.map(([id, timeRange], slotIndex) => {
        const state = states[slotIndex];
        const completedCount = state === "completed" ? 12 : state === "active" ? 5 : state === "partial" ? 8 : state === "overdue" ? 7 : 0;
        return { id, timeRange, state, points: patrolPointNames.map((name, index) => patrolPoint(name, index, index < completedCount ? "completed" : state === "overdue" ? "overdue" : "pending")) };
      })
    };
  }

  function buildStore() {
    const tasks = [];
    Object.keys(typeMeta).forEach((route) => {
      tasks.push(taskModel(route, `${route}-current`, route === "fire-use" ? "processing" : "pending", "07"));
      tasks.push(taskModel(route, `${route}-history`, "completed", "06", true));
    });
    return { tasks, patrolDays: [patrolDay("2026-07-29"), patrolDay("2026-07-28", true), patrolDay("2026-07-27", true)] };
  }

  function init(nextDeps) {
    deps = nextDeps;
    initialStore = buildStore();
    store = clone(initialStore);
    document.addEventListener("input", handleInput);
    document.addEventListener("change", handleChange);
  }

  function reset() { store = clone(initialStore); draft = null; }
  function canRender(screen) { return screen === "patrol" || Boolean(typeMeta[screen]); }
  function metrics() {
    const day = store.patrolDays[0];
    const completed = day.slots.reduce((sum, slot) => sum + slotCompleted(slot), 0);
    return { patrolCompleted: completed, patrolTotal: 72, patrolPending: 72 - completed, patrolRate: Math.round(completed / 72 * 100) };
  }
  const taskById = (id) => store.tasks.find((task) => task.id === id);
  const tasksByRoute = (route) => store.tasks.filter((task) => task.route === route);
  const counts = (task) => ({ normal: task.items.filter((item) => item.result === "normal").length, abnormal: task.items.filter((item) => item.result === "abnormal").length, unchecked: task.items.filter((item) => item.result === "unchecked").length });
  const stateText = (state) => ({ pending: "待检查", processing: "检查中", completed: "已完成" }[state] || state);
  const patrolStateText = (state) => ({ pending: "未开始", active: "进行中", partial: "部分完成", completed: "已完成", overdue: "已逾期" }[state] || state);
  const patrolStateTone = (state) => ({ pending: "pending", active: "processing", partial: "processing", completed: "closed", overdue: "danger" }[state] || "pending");

  function render(parts) {
    deps.setBottomNav("", false);
    const [screen, sub, id] = parts;
    if (screen === "patrol") return renderPatrol(parts);
    if (!sub) return renderTaskList(screen);
    if (sub === "execute") return renderTaskExecute(taskById(id));
    if (sub === "detail" || sub === "result") return renderTaskDetail(taskById(id), sub === "result");
    if (sub === "abnormal") return renderAbnormalList(screen);
    renderTaskList(screen);
  }

  function renderTaskList(route) {
    const meta = typeMeta[route];
    const tasks = tasksByRoute(route);
    const abnormal = tasks.flatMap((task) => task.items.map((item) => ({ task, item }))).filter(({ item }) => item.result === "abnormal");
    deps.renderHeader(meta.title, "月度任务与历史记录", "applications");
    deps.appMain.innerHTML = `<div class="suite-page routine-page">
      ${meta.mode === "inspection" ? `<button class="abnormal-summary" type="button" data-route="${route}/abnormal"><i data-lucide="triangle-alert"></i><span><strong>${abnormal.length}</strong><small>异常项目</small></span><span><strong>${abnormal.filter(({ item }) => item.handlingMode === "onsite").length}</strong><small>当场整改</small></span><span><strong>${abnormal.filter(({ item }) => item.hazardId).length}</strong><small>转为隐患</small></span><i data-lucide="chevron-right"></i></button>` : attachmentOverview(meta)}
      <div class="suite-year-heading"><strong>2026年</strong><span>${tasks.length} 条记录</span></div>
      <div class="suite-card-list">${tasks.map(taskCard).join("")}</div>
    </div>`;
  }

  function attachmentOverview(meta) {
    return `<section class="routine-guide"><span><i data-lucide="${meta.icon}"></i></span><div><strong>${meta.title}资料记录</strong><p>${meta.requirements.join("；")}</p></div></section>`;
  }

  function taskCard(task) {
    const meta = typeMeta[task.route];
    const target = task.state === "completed" ? `${task.route}/detail/${task.id}` : `${task.route}/execute/${task.id}`;
    const summary = task.mode === "attachment" ? `<div class="routine-file-summary"><span><i data-lucide="paperclip"></i>${task.attachments.length} 个附件</span><span>${task.checkedAt || "尚未填写记录"}</span></div>` : (() => { const c = counts(task); return `<div class="suite-task-stats"><span><b>${c.normal}</b>正常</span><span><b>${c.abnormal}</b>异常</span><span><b>${c.unchecked}</b>未检查</span></div>`; })();
    return `<button class="suite-task-card" type="button" data-route="${target}"><div><strong>${deps.esc(task.title)}</strong><span class="state-pill ${task.state === "completed" ? "closed" : task.state === "processing" ? "processing" : "pending"}">${stateText(task.state)}</span></div><p>${deps.esc(task.no)}${task.operator ? ` · ${deps.esc(task.operator)}` : ""}</p>${summary}</button>`;
  }

  function renderTaskExecute(task) {
    if (!task) return deps.go("applications");
    if (task.state === "pending") task.state = "processing";
    const meta = typeMeta[task.route];
    deps.renderHeader(`${meta.title} - ${task.period}`, task.mode === "attachment" ? "填写资料记录" : "执行检查", task.route);
    if (task.mode === "attachment") return renderAttachmentExecute(task);
    const c = counts(task);
    deps.appMain.innerHTML = `<div class="suite-page suite-execute-page routine-page">${recordFields(task)}${progress(task, c)}${checklist(task)}</div>${taskActions(task, c.unchecked === 0)}`;
  }

  function recordFields(task, readonly = false) {
    const attr = readonly ? "disabled" : "";
    return `<section class="suite-form-card routine-meta-form"><h2>检查信息</h2><label class="form-field"><span class="form-label">检查时间 <em>必填</em></span><input type="datetime-local" data-routine-field="checkedAt" data-task-id="${task.id}" value="${deps.esc(toDateTimeLocal(task.checkedAt))}" ${attr}/></label><label class="form-field"><span class="form-label">协助检查人 <em>选填</em></span><select data-routine-field="assistant" data-task-id="${task.id}" ${attr}><option value="">请选择</option>${deps.assignees.map((name) => `<option ${task.assistant === name ? "selected" : ""}>${deps.esc(name)}</option>`).join("")}</select></label><label class="form-field"><span class="form-label">备注说明 <em>选填</em></span><textarea data-routine-field="note" data-task-id="${task.id}" ${attr}>${deps.esc(task.note)}</textarea></label></section>`;
  }

  function progress(task, c) {
    const done = task.items.length - c.unchecked;
    return `<section class="suite-progress"><div><strong>${done}/${task.items.length}</strong><span>已完成</span></div><div class="suite-progress-track"><i style="width:${task.items.length ? Math.round(done / task.items.length * 100) : 0}%"></i></div><p><span>正常 ${c.normal}</span><span>异常 ${c.abnormal}</span><span>未检查 ${c.unchecked}</span></p></section>`;
  }

  function checklist(task, readonly = false, patrolContext = "") {
    return `<div class="suite-checklist ${readonly ? "readonly" : ""}">${task.items.map((item) => {
      const tag = item.result === "normal" ? "正常" : item.result === "abnormal" ? "异常" : "未检查";
      const action = readonly ? "article" : "button";
      return `<${action} class="suite-check-item ${item.result}" ${readonly ? "" : `type="button" data-routine-check-item="${item.id}" data-routine-owner="${task.id}" data-routine-patrol="${patrolContext}"`}><span>${item.code}</span><div><strong>${deps.esc(item.name)}</strong><small>${deps.esc(item.note || (item.result === "unchecked" ? "点击填写检查结果" : "检查结果正常"))}</small>${item.hazardId ? `<button type="button" data-route="hazard/detail/${item.hazardId}">查看关联隐患</button>` : ""}</div><b>${tag}</b>${readonly ? "" : `<i data-lucide="chevron-right"></i>`}</${action}>`;
    }).join("")}</div>`;
  }

  function taskActions(task, complete) {
    return `<div class="fixed-actions"><button type="button" data-routine-action="save-task" data-task-id="${task.id}">暂存</button><button class="primary" type="button" data-routine-action="submit-task" data-task-id="${task.id}" ${complete ? "" : "disabled"}>提交检查</button></div>`;
  }

  function renderAttachmentExecute(task) {
    const meta = typeMeta[task.route];
    const total = task.attachments.reduce((sum, file) => sum + file.size, 0);
    deps.appMain.innerHTML = `<div class="suite-page suite-execute-page routine-page">${recordFields(task)}<section class="suite-form-card"><h2>记录要求</h2><div class="routine-requirements">${meta.requirements.map((item) => `<p><i data-lucide="circle-check"></i>${deps.esc(item)}</p>`).join("")}</div></section><section class="suite-form-card"><h2>附件资料 <small>${task.attachments.length} 个 · ${formatSize(total)}</small></h2><p class="suite-hint">支持 PNG、JPG、PDF，单个不超过 20 MB，总大小不超过 100 MB。</p><div class="attachment-list">${task.attachments.map((file, index) => `<span><i data-lucide="file-text"></i><b>${deps.esc(file.name)}</b><small>${formatSize(file.size)}</small><button type="button" data-routine-remove-file="${index}" data-task-id="${task.id}" aria-label="删除附件"><i data-lucide="x"></i></button></span>`).join("")}</div><button class="suite-upload-command" type="button" data-routine-file-source data-task-id="${task.id}"><i data-lucide="paperclip"></i>选择附件</button><input hidden type="file" data-routine-file-input data-task-id="${task.id}" accept=".pdf,.jpg,.jpeg,.png" multiple /></section></div><div class="fixed-actions"><button type="button" data-routine-action="save-task" data-task-id="${task.id}">暂存</button><button class="primary" type="button" data-routine-action="submit-attachment" data-task-id="${task.id}" ${task.attachments.length ? "" : "disabled"}>提交记录</button></div>`;
  }

  function renderTaskDetail(task, resultPage = false) {
    if (!task) return deps.go("applications");
    const meta = typeMeta[task.route];
    deps.renderHeader(resultPage ? "提交成功" : `${meta.title}详情`, task.period, task.route);
    const content = task.mode === "attachment" ? `<section class="suite-form-card"><h2>归档附件</h2><div class="attachment-list readonly">${task.attachments.map((file) => `<span><i data-lucide="file-text"></i><b>${deps.esc(file.name)}</b><small>${formatSize(file.size)}</small></span>`).join("")}</div></section>` : `${progress(task, counts(task))}${checklist(task, true)}`;
    deps.appMain.innerHTML = `<div class="suite-page routine-page"><section class="suite-result-card"><i data-lucide="circle-check"></i><div><strong>${deps.esc(task.title)}</strong><small>由 ${deps.esc(task.operator || "Admin")} 于 ${deps.esc(task.completedAt || stamp())} 提交</small></div><span class="state-pill closed">已完成</span></section>${recordFields(task, true)}${content}</div>`;
  }

  function renderAbnormalList(route) {
    const rows = tasksByRoute(route).flatMap((task) => task.items.map((item) => ({ task, item }))).filter(({ item }) => item.result === "abnormal");
    deps.renderHeader("异常项目", typeMeta[route].title, route);
    deps.appMain.innerHTML = `<div class="suite-page routine-page"><div class="suite-card-list">${rows.map(({ task, item }) => `<article class="hazard-card-suite"><div><span class="hazard-level general">异常</span><b>${deps.esc(task.period)}</b></div><h3>${deps.esc(item.name)}</h3><p>${deps.esc(item.point)} · ${deps.esc(item.note)}</p>${item.hazardId ? `<button type="button" data-route="hazard/detail/${item.hazardId}">查看关联隐患</button>` : `<span class="state-pill closed">已当场整改</span>`}</article>`).join("") || empty("暂无异常项目")}</div></div>`;
  }

  function renderPatrol(parts) {
    const [, sub, a, b, c] = parts;
    if (!sub) return renderPatrolHome(store.patrolDays[0]);
    if (sub === "history") return renderPatrolHistory();
    if (sub === "day") return renderPatrolHome(dayByDate(a), true);
    if (sub === "slot") return renderPatrolSlot(dayByDate(a), b);
    if (sub === "verify") return renderPatrolVerify(dayByDate(a), b, c);
    if (sub === "check") return renderPatrolCheck(dayByDate(a), b, c);
    if (sub === "quick") return renderPatrolQuick(a);
    renderPatrolHome(store.patrolDays[0]);
  }

  const dayByDate = (date) => store.patrolDays.find((day) => day.date === date) || store.patrolDays[0];
  const slotById = (day, id) => day?.slots.find((slot) => slot.id === id);
  const pointById = (slot, id) => slot?.points.find((point) => point.id === id);
  const slotCompleted = (slot) => slot.points.filter((point) => point.state === "completed").length;

  function renderPatrolHome(day, history = false) {
    if (!day) return deps.go("applications");
    const completedPoints = day.slots.reduce((sum, slot) => sum + slotCompleted(slot), 0);
    deps.renderHeader(history ? "巡查历史详情" : "每日防火巡查", day.date, history ? "patrol/history" : "applications", history ? "" : `<button type="button" data-route="patrol/history">历史</button>`);
    deps.appMain.innerHTML = `<div class="suite-page patrol-page"><section class="patrol-overview"><div><small>${history ? "历史巡查" : "今日巡查"}</small><strong>${completedPoints}/72</strong><span>点位已完成</span></div><div class="patrol-overview-ring" style="--progress:${Math.round(completedPoints / 72 * 100)}"><b>${Math.round(completedPoints / 72 * 100)}%</b></div></section><div class="suite-year-heading"><strong>巡查时段</strong><span>共 6 个时段</span></div><div class="patrol-slot-list">${day.slots.map((slot) => slotCard(day, slot)).join("")}</div></div>`;
  }

  function slotCard(day, slot) {
    const done = slotCompleted(slot);
    return `<button class="patrol-slot-card ${slot.state}" type="button" data-route="patrol/slot/${day.date}/${slot.id}"><span class="patrol-slot-icon"><i data-lucide="${slot.state === "completed" ? "circle-check" : slot.state === "overdue" ? "circle-alert" : "clock-3"}"></i></span><div><strong>${slot.timeRange}</strong><small>${done}/12 个点位已完成</small><i><b style="width:${Math.round(done / 12 * 100)}%"></b></i></div><span class="state-pill ${patrolStateTone(slot.state)}">${patrolStateText(slot.state)}</span><i data-lucide="chevron-right"></i></button>`;
  }

  function renderPatrolHistory() {
    deps.renderHeader("巡查历史", "按日期查看巡查记录", "patrol");
    deps.appMain.innerHTML = `<div class="suite-page patrol-page"><div class="suite-card-list">${store.patrolDays.map((day) => { const done = day.slots.reduce((sum, slot) => sum + slotCompleted(slot), 0); return `<button class="patrol-history-card" type="button" data-route="patrol/day/${day.date}"><span><i data-lucide="calendar-days"></i></span><div><strong>${day.date}</strong><small>完成 ${done}/72 个点位 · ${day.slots.filter((slot) => slot.state === "completed").length}/6 个时段</small></div><i data-lucide="chevron-right"></i></button>`; }).join("")}</div></div>`;
  }

  function renderPatrolSlot(day, slotId) {
    const slot = slotById(day, slotId);
    if (!slot) return deps.go("patrol");
    const readonly = day !== store.patrolDays[0] || slot.state === "overdue";
    deps.renderHeader("巡查点位", `${day.date} · ${slot.timeRange}`, day === store.patrolDays[0] ? "patrol" : `patrol/day/${day.date}`);
    deps.appMain.innerHTML = `<div class="suite-page patrol-page">${slot.state === "overdue" ? `<div class="patrol-overdue-banner"><i data-lucide="circle-alert"></i><div><strong>该时段已逾期</strong><span>未完成点位仅供查看，不能补录。</span></div></div>` : ""}<section class="suite-progress"><div><strong>${slotCompleted(slot)}/12</strong><span>点位完成</span></div><div class="suite-progress-track"><i style="width:${Math.round(slotCompleted(slot) / 12 * 100)}%"></i></div><p><span>${patrolStateText(slot.state)}</span><span>${slot.timeRange}</span></p></section><div class="patrol-point-list">${slot.points.map((point) => pointCard(day, slot, point, readonly)).join("")}</div></div>`;
  }

  function pointCard(day, slot, point, readonly) {
    const route = point.state === "completed" ? `patrol/check/${day.date}/${slot.id}/${point.id}` : readonly ? "" : `patrol/verify/${day.date}/${slot.id}/${point.id}`;
    return `<${route ? "button" : "article"} class="patrol-point-card ${point.state}" ${route ? `type="button" data-route="${route}"` : ""}><span>${point.id.slice(1)}</span><div><strong>${deps.esc(point.name)}</strong><small>${point.state === "completed" ? `${point.verifiedMethod === "qr" ? "扫码" : "NFC"}验证 · ${point.submittedAt.slice(11, 16)}` : point.state === "overdue" ? "未在规定时段完成" : "等待现场验证"}</small></div><b>${point.state === "completed" ? "已完成" : point.state === "overdue" ? "已逾期" : "去巡查"}</b>${route ? `<i data-lucide="chevron-right"></i>` : ""}</${route ? "button" : "article"}>`;
  }

  function renderPatrolVerify(day, slotId, pointId, preferred = "") {
    const slot = slotById(day, slotId); const point = pointById(slot, pointId);
    if (!point || point.state === "completed") return deps.go(`patrol/slot/${day.date}/${slotId}`);
    deps.renderHeader("点位验证", point.name, `patrol/slot/${day.date}/${slotId}`);
    deps.appMain.innerHTML = `<div class="suite-page patrol-page patrol-verify-page"><section class="patrol-verify-zone"><span><i data-lucide="scan-line"></i></span><h2>${deps.esc(point.name)}</h2><p>到达现场后选择验证方式，验证成功即可填写巡查结果。</p><dl><div><dt>巡查时段</dt><dd>${slot.timeRange}</dd></div><div><dt>点位编号</dt><dd>${point.id.toUpperCase()}</dd></div></dl></section><div class="patrol-verify-actions"><button type="button" data-patrol-verify="nfc" data-day="${day.date}" data-slot="${slot.id}" data-point="${point.id}"><i data-lucide="smartphone-nfc"></i><span><b>NFC 验证</b><small>模拟贴近点位标签</small></span></button><button type="button" data-patrol-verify="qr" data-day="${day.date}" data-slot="${slot.id}" data-point="${point.id}"><i data-lucide="qr-code"></i><span><b>扫码验证</b><small>模拟扫描点位二维码</small></span></button></div>${preferred ? `<p class="suite-hint center">已从${preferred === "nfc" ? "NFC" : "扫码"}快捷入口进入</p>` : ""}</div>`;
  }

  function renderPatrolQuick(method) {
    const day = store.patrolDays[0];
    const slot = day.slots.find((item) => ["active", "partial", "pending"].includes(item.state) && item.points.some((point) => point.state === "pending"));
    const point = slot?.points.find((item) => item.state === "pending");
    if (!point) return renderPatrolHome(day);
    renderPatrolVerify(day, slot.id, point.id, method);
  }

  function renderPatrolCheck(day, slotId, pointId) {
    const slot = slotById(day, slotId); const point = pointById(slot, pointId);
    if (!point) return deps.go("patrol");
    const readonly = point.state === "completed" || slot.state === "overdue";
    deps.renderHeader(readonly ? "巡查记录详情" : "填写巡查结果", `${point.name} · ${slot.timeRange}`, `patrol/slot/${day.date}/${slot.id}`);
    const owner = { id: `patrol:${day.date}:${slot.id}:${point.id}`, items: point.items };
    deps.appMain.innerHTML = `<div class="suite-page suite-execute-page patrol-page">${readonly ? `<section class="suite-result-card"><i data-lucide="circle-check"></i><div><strong>点位巡查已完成</strong><small>${point.inspector || "Admin"} · ${point.submittedAt || "-"}</small></div><span class="state-pill closed">已完成</span></section>` : ""}<section class="suite-form-card"><h2>巡查信息</h2><div class="suite-info-grid"><span><small>巡查点位</small><b>${deps.esc(point.name)}</b></span><span><small>验证方式</small><b>${point.verifiedMethod === "qr" ? "扫码" : "NFC"}</b></span></div><label class="form-field"><span class="form-label">检查人</span><input value="${deps.esc(point.inspector || "Admin")}" disabled /></label><label class="form-field"><span class="form-label">协助检查人 <em>选填</em></span><select data-patrol-field="assistant" data-patrol-owner="${owner.id}" ${readonly ? "disabled" : ""}><option value="">请选择</option>${deps.assignees.map((name) => `<option ${point.assistant === name ? "selected" : ""}>${deps.esc(name)}</option>`).join("")}</select></label><label class="form-field"><span class="form-label">备注说明 <em>选填</em></span><textarea data-patrol-field="note" data-patrol-owner="${owner.id}" ${readonly ? "disabled" : ""}>${deps.esc(point.note)}</textarea></label></section>${progress(owner, counts(owner))}${checklist(owner, readonly, owner.id)}</div>${readonly ? "" : `<div class="fixed-actions"><button type="button" data-patrol-action="save" data-patrol-owner="${owner.id}">暂存</button><button class="primary" type="button" data-patrol-action="submit" data-patrol-owner="${owner.id}" ${counts(owner).unchecked ? "disabled" : ""}>提交巡查</button></div>`}`;
  }

  function openCheckSheet(owner, item, context) {
    draft = { kind: "routine-check", ownerId: owner.id, itemId: item.id, context, result: item.result === "unchecked" ? "normal" : item.result, evidence: [...item.photos].filter(Boolean), rectification: [...item.rectificationPhotos].filter(Boolean) };
    const title = context ? "防火巡查" : typeMeta[owner.route].title;
    deps.openSheet({ eyebrow: title, title: item.name, submitText: "确认检查结果", body: sheetBody(item), onSubmit: submitCheckSheet });
  }

  function sheetBody(item) {
    return `<div class="result-segment"><label><input type="radio" name="routineCheckResult" value="normal" ${draft.result === "normal" ? "checked" : ""}/><span>正常</span></label><label><input type="radio" name="routineCheckResult" value="abnormal" ${draft.result === "abnormal" ? "checked" : ""}/><span>异常</span></label></div><div id="routineCheckFields">${draft.result === "abnormal" ? abnormalFields(item) : normalFields(item)}</div>`;
  }

  const normalFields = (item) => `<label class="form-field"><span class="form-label">检查说明 <em>选填</em></span><textarea id="routineCheckNote" placeholder="可补充现场检查情况">${deps.esc(item.note)}</textarea></label>${photoField("evidence", draft.evidence, 2, "现场照片（选填）")}`;
  const abnormalFields = (item) => `<label class="form-field"><span class="form-label">异常备注 <em>必填</em></span><textarea id="routineCheckNote" placeholder="请描述异常情况">${deps.esc(item.note)}</textarea></label><label class="form-field"><span class="form-label">异常点位 <em>必填</em></span><select id="routineCheckPoint"><option value="">请选择</option>${locations.map((point) => `<option ${item.point === point ? "selected" : ""}>${point}</option>`).join("")}</select></label>${photoField("evidence", draft.evidence, 2, "异常照片（必填）")}<label class="form-field"><span class="form-label">处理方式 <em>必填</em></span><select id="routineHandlingMode"><option value="onsite" ${item.handlingMode !== "hazard" ? "selected" : ""}>当场整改</option><option value="hazard" ${item.handlingMode === "hazard" ? "selected" : ""}>转为隐患</option></select></label><div id="routineOnsite" ${item.handlingMode === "hazard" ? "hidden" : ""}><label class="form-field"><span class="form-label">整改说明 <em>必填</em></span><textarea id="routineRectificationNote">${deps.esc(item.rectificationNote)}</textarea></label>${photoField("rectification", draft.rectification, 2, "整改照片（必填）")}</div><div id="routineHazard" ${item.handlingMode === "hazard" ? "" : "hidden"}><label class="form-field"><span class="form-label">隐患等级 <em>必填</em></span><select id="routineHazardLevel"><option value="general">一般隐患</option><option value="major">重大隐患</option></select></label><label class="form-field"><span class="form-label">隐患要素类型 <em>必填</em></span><select id="routineHazardCategory"><option value="">请选择</option><option>消防设施</option><option>安全疏散</option><option>用火用电</option><option>消防管理</option><option>建筑防火</option><option>其他</option></select></label><label class="form-field"><span class="form-label">整改期限</span><input id="routineHazardDeadline" type="date" value="2026-08-05"/></label></div>`;

  function photoField(bucket, photos, max, label) {
    return `<div class="form-field"><span class="form-label">${label} <em>最多 ${max} 张</em></span><div class="photo-source-grid"><button type="button" data-routine-photo-source="camera" data-routine-photo-bucket="${bucket}"><i data-lucide="camera"></i>拍照</button><button type="button" data-routine-photo-source="gallery" data-routine-photo-bucket="${bucket}"><i data-lucide="images"></i>图库</button></div><input hidden type="file" data-routine-photo-input data-routine-photo-bucket="${bucket}" accept="image/*" capture="environment"/><input hidden type="file" data-routine-photo-input data-routine-photo-bucket="${bucket}" accept="image/jpeg,image/png,image/webp" multiple/><div class="photo-preview-grid" data-routine-photo-grid="${bucket}">${photoPreviews(bucket, photos)}</div></div>`;
  }

  const photoPreviews = (bucket, photos) => photos.map((photo, index) => `<span class="photo-preview"><img src="${photo}" alt="照片 ${index + 1}"/><button type="button" data-routine-remove-photo="${index}" data-routine-photo-bucket="${bucket}"><i data-lucide="x"></i></button></span>`).join("");
  const draftPhotos = (bucket) => bucket === "rectification" ? draft.rectification : draft.evidence;

  function submitCheckSheet() {
    const resolved = resolveOwner(draft.ownerId, draft.context); const owner = resolved.owner;
    const item = owner?.items.find((row) => row.id === draft.itemId); if (!item) return;
    const result = document.querySelector("input[name=routineCheckResult]:checked")?.value || "normal";
    const note = document.querySelector("#routineCheckNote")?.value.trim() || "";
    if (result === "normal") {
      Object.assign(item, { result: "normal", note, photos: [...draft.evidence], point: "", handlingMode: "", rectificationNote: "", rectificationPhotos: [], hazardId: "" });
    } else {
      const point = document.querySelector("#routineCheckPoint")?.value || ""; const mode = document.querySelector("#routineHandlingMode")?.value || "onsite";
      if (!note) return deps.showToast("请填写异常备注");
      if (!point) return deps.showToast("请选择异常点位");
      if (!draft.evidence.length) return deps.showToast("请上传异常照片");
      Object.assign(item, { result: "abnormal", note, point, photos: [...draft.evidence], handlingMode: mode });
      if (mode === "onsite") {
        const fix = document.querySelector("#routineRectificationNote")?.value.trim() || "";
        if (!fix) return deps.showToast("请填写整改说明");
        if (!draft.rectification.length) return deps.showToast("请上传整改照片");
        Object.assign(item, { rectificationNote: fix, rectificationPhotos: [...draft.rectification], hazardId: "" });
      } else {
        const category = document.querySelector("#routineHazardCategory")?.value || "";
        if (!category) return deps.showToast("请选择隐患要素类型");
        const source = draft.context ? "防火巡查" : typeMeta[owner.route].title;
        const originRoute = draft.context ? `patrol/check/${resolved.day.date}/${resolved.slot.id}/${resolved.point.id}` : `${owner.route}/execute/${owner.id}`;
        const hazard = window.InspectionApp?.createHazard({ source, level: document.querySelector("#routineHazardLevel")?.value, category, description: `${item.name}：${note}`, point, photos: item.photos, deadline: document.querySelector("#routineHazardDeadline")?.value, reporter: "Admin", reportedAt: stamp(), originTaskId: owner.id, originItemId: item.id, originRoute });
        if (!hazard) return deps.showToast("隐患模块尚未初始化");
        Object.assign(item, { hazardId: hazard.id, rectificationNote: "", rectificationPhotos: [] });
      }
    }
    deps.closeSheet();
    rerenderOwner(resolved);
    deps.refreshIcons();
    deps.showToast(result === "normal" ? "已标记为正常" : item.hazardId ? "异常已转为隐患" : "异常及整改结果已记录");
  }

  function resolveOwner(id, context) {
    if (!context) return { owner: taskById(id), context: "" };
    const [, date, slotId, pointId] = id.split(":");
    const day = dayByDate(date); const slot = slotById(day, slotId); const point = pointById(slot, pointId);
    return { owner: { id, items: point.items }, context, day, slot, point };
  }

  function rerenderOwner(resolved) {
    if (resolved.context) renderPatrolCheck(resolved.day, resolved.slot.id, resolved.point.id);
    else renderTaskExecute(resolved.owner);
  }

  function handleClick(event) {
    const itemButton = event.target.closest("[data-routine-check-item]");
    if (itemButton) {
      const resolved = resolveOwner(itemButton.dataset.routineOwner, itemButton.dataset.routinePatrol);
      const item = resolved.owner?.items.find((row) => row.id === itemButton.dataset.routineCheckItem);
      if (item) openCheckSheet(resolved.owner, item, itemButton.dataset.routinePatrol);
      return true;
    }
    const action = event.target.closest("[data-routine-action]");
    if (action) { submitTaskAction(action); return true; }
    const source = event.target.closest("[data-routine-file-source]");
    if (source) { document.querySelector(`[data-routine-file-input][data-task-id="${source.dataset.taskId}"]`)?.click(); return true; }
    const removeFile = event.target.closest("[data-routine-remove-file]");
    if (removeFile) { const task = taskById(removeFile.dataset.taskId); task?.attachments.splice(Number(removeFile.dataset.routineRemoveFile), 1); renderTaskExecute(task); deps.refreshIcons(); return true; }
    const photoSource = event.target.closest("[data-routine-photo-source]");
    if (photoSource) { const bucket = photoSource.dataset.routinePhotoBucket; const camera = photoSource.dataset.routinePhotoSource === "camera"; document.querySelectorAll(`[data-routine-photo-input][data-routine-photo-bucket="${bucket}"]`)[camera ? 0 : 1]?.click(); return true; }
    const removePhoto = event.target.closest("[data-routine-remove-photo]");
    if (removePhoto) { const bucket = removePhoto.dataset.routinePhotoBucket; draftPhotos(bucket).splice(Number(removePhoto.dataset.routineRemovePhoto), 1); refreshPhotoGrid(bucket); return true; }
    const verify = event.target.closest("[data-patrol-verify]");
    if (verify) { const day = dayByDate(verify.dataset.day); const slot = slotById(day, verify.dataset.slot); const point = pointById(slot, verify.dataset.point); point.verifiedMethod = verify.dataset.patrolVerify; point.inspector = "Admin"; deps.showToast(`${verify.dataset.patrolVerify === "nfc" ? "NFC" : "扫码"}验证成功`); setTimeout(() => deps.go(`patrol/check/${day.date}/${slot.id}/${point.id}`), 350); return true; }
    const patrolAction = event.target.closest("[data-patrol-action]");
    if (patrolAction) { submitPatrolAction(patrolAction); return true; }
    return false;
  }

  function submitTaskAction(button) {
    const task = taskById(button.dataset.taskId); if (!task) return;
    if (button.dataset.routineAction === "save-task") return deps.showToast("当前进度已暂存在页面内存中");
    if (!task.checkedAt) return deps.showToast("请选择检查时间");
    if (button.dataset.routineAction === "submit-task" && counts(task).unchecked) return deps.showToast("请完成全部检查项后提交");
    if (button.dataset.routineAction === "submit-attachment" && !task.attachments.length) return deps.showToast("请至少上传一个附件");
    task.state = "completed"; task.operator = "Admin"; task.completedAt = stamp();
    deps.go(`${task.route}/result/${task.id}`); deps.showToast("记录已提交");
  }

  function submitPatrolAction(button) {
    const resolved = resolveOwner(button.dataset.patrolOwner, button.dataset.patrolOwner);
    if (button.dataset.patrolAction === "save") return deps.showToast("巡查进度已暂存");
    if (counts(resolved.owner).unchecked) return deps.showToast("请完成全部巡查项后提交");
    resolved.point.state = "completed"; resolved.point.inspector ||= "Admin"; resolved.point.submittedAt = stamp();
    const done = slotCompleted(resolved.slot);
    resolved.slot.state = done === 12 ? "completed" : done > 0 ? "partial" : "active";
    deps.go(`patrol/slot/${resolved.day.date}/${resolved.slot.id}`); deps.showToast("点位巡查已提交");
  }

  function handleInput(event) {
    if (event.target.matches("[data-routine-field]")) {
      const task = taskById(event.target.dataset.taskId); if (!task) return;
      const field = event.target.dataset.routineField;
      task[field] = field === "checkedAt" ? fromDateTimeLocal(event.target.value) : event.target.value;
    }
    if (event.target.matches("[data-patrol-field]")) {
      const resolved = resolveOwner(event.target.dataset.patrolOwner, event.target.dataset.patrolOwner);
      if (resolved.point) resolved.point[event.target.dataset.patrolField] = event.target.value;
    }
  }

  async function handleChange(event) {
    if (event.target.name === "routineCheckResult") {
      draft.result = event.target.value;
      const resolved = resolveOwner(draft.ownerId, draft.context);
      const item = resolved.owner.items.find((row) => row.id === draft.itemId);
      document.querySelector("#routineCheckFields").innerHTML = draft.result === "abnormal" ? abnormalFields(item) : normalFields(item);
      deps.refreshIcons(document.querySelector("#sheetLayer")); return;
    }
    if (event.target.id === "routineHandlingMode") {
      document.querySelector("#routineOnsite").hidden = event.target.value !== "onsite";
      document.querySelector("#routineHazard").hidden = event.target.value !== "hazard"; return;
    }
    if (event.target.matches("[data-routine-photo-input]")) {
      const bucket = event.target.dataset.routinePhotoBucket; await readImages(event.target.files, draftPhotos(bucket), 2); event.target.value = ""; refreshPhotoGrid(bucket); return;
    }
    if (event.target.matches("[data-routine-file-input]")) {
      const task = taskById(event.target.dataset.taskId); const maxTotal = 100 * 1024 * 1024; let total = task.attachments.reduce((sum, file) => sum + file.size, 0);
      for (const file of [...event.target.files]) {
        if (!/\.(pdf|jpe?g|png)$/i.test(file.name)) { deps.showToast(`${file.name} 格式不支持`); continue; }
        if (file.size > 20 * 1024 * 1024) { deps.showToast(`${file.name} 超过 20 MB`); continue; }
        if (total + file.size > maxTotal) { deps.showToast("附件总大小不能超过 100 MB"); break; }
        task.attachments.push({ name: file.name, type: file.type, size: file.size }); total += file.size;
      }
      event.target.value = ""; renderTaskExecute(task); deps.refreshIcons();
    }
  }

  async function readImages(files, target, max) {
    for (const file of [...files].slice(0, Math.max(0, max - target.length))) {
      if (!/^image\/(jpeg|png|webp)$/.test(file.type)) { deps.showToast(`${file.name} 格式不支持`); continue; }
      if (file.size > 10 * 1024 * 1024) { deps.showToast(`${file.name} 超过 10 MB`); continue; }
      target.push(await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file); }));
    }
  }

  function refreshPhotoGrid(bucket) { const grid = document.querySelector(`[data-routine-photo-grid="${bucket}"]`); if (grid) { grid.innerHTML = photoPreviews(bucket, draftPhotos(bucket)); deps.refreshIcons(grid); } }
  function formatSize(bytes) { return bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`; }
  function toDateTimeLocal(value) { return value ? value.replace(" ", "T").slice(0, 16) : ""; }
  function fromDateTimeLocal(value) { return value ? `${value.replace("T", " ")}:00` : ""; }
  function empty(text) { return `<div class="suite-empty"><i data-lucide="inbox"></i><span>${text}</span></div>`; }

  window.RoutineApp = { init, reset, metrics, canRender, render, handleClick };
})();
