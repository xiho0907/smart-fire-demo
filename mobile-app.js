const currentUser = "Admin";
const assignees = ["李明", "王晨", "赵凯", "陈峰"];

const featureApps = [
  { id: "patrol", label: "防火巡查", icon: "user-round-check", tone: "" },
  { id: "inspection", label: "防火检查", icon: "clipboard-check", tone: "" },
  { id: "duty", label: "消控室值班", icon: "monitor", tone: "orange", route: "duty" },
  { id: "hazard", label: "隐患整改", icon: "triangle-alert", tone: "red", badge: 5 },
  { id: "facility-check", label: "消防设施检查", icon: "layers-3", tone: "" },
  { id: "maintenance", label: "消防设施维保", icon: "settings", tone: "" },
  { id: "evacuation", label: "安全疏散检查", icon: "log-in", tone: "green" },
  { id: "fire-use", label: "用火检查", icon: "flame", tone: "orange" },
  { id: "electricity", label: "用电检查", icon: "zap", tone: "" },
  { id: "gas", label: "用气检查", icon: "gauge", tone: "" },
  { id: "duct", label: "油烟管道清洗", icon: "panels-top-left", tone: "indigo" },
  { id: "hot-work", label: "动火作业", icon: "wrench", tone: "orange" },
  { id: "renovation", label: "装修装饰检查", icon: "briefcase", tone: "green" },
  { id: "fire", label: "火警告警", icon: "siren", tone: "red", route: "fire" },
  { id: "warning", label: "设备预警", icon: "triangle-alert", tone: "orange", route: "warning" },
  { id: "video", label: "视频监控", icon: "video", tone: "indigo", route: "video" },
  { id: "fault", label: "设备故障", icon: "wrench", tone: "orange", route: "fault" }
];

const fireAlarms = [
  {
    id: "fa1", no: "ALM-FIRE-20260724-0072", level: 1, title: "可视化红外火焰报警",
    location: "危化品暂存间", device: "红外火灾摄像头-01", serial: "DS-FL-03A821",
    eventType: "TMA / flame", channel: "CH 03 / R-03", time: "2026-07-24 09:38:16",
    temperature: 86.4, threshold: 70, state: "pending", operator: "待指派",
    note: "设备检测到明火与持续高温，请立即确认现场警情。", media: true,
    assignedAt: "", assignmentWindowMinutes: 0, assignmentDeadlineAt: "", operationHistory: []
  },
  {
    id: "fa2", no: "ALM-FIRE-20260724-0069", level: 1, title: "配电柜温升火警",
    location: "配电设备间", device: "红外火灾摄像头-03", serial: "DS-FL-05B219",
    eventType: "TMA / riseTemperature", channel: "CH 05 / R-01", time: "2026-07-24 08:26:44",
    temperature: 78.6, threshold: 65, state: "processing", operator: "李明",
    note: "已确认真实警情，现场人员正在执行断电和灭火处置。", media: true,
    assignedAt: "2026-07-24T08:27:05+08:00", assignmentWindowMinutes: 1, assignmentDeadlineAt: "2026-07-24T08:28:05+08:00",
    operationHistory: [
      { action: "dispose", operator: "李明", time: "2026-07-24 08:31:20", description: "已切断配电柜电源，使用灭火器控制明火，继续观察温度变化。", photos: [] },
      { action: "confirm", operator: "李明", time: "2026-07-24 08:28:02", description: "视频及现场核查确认配电柜内部起火。", photos: [] }
    ]
  },
  {
    id: "fa3", no: "ALM-FIRE-20260724-0064", level: 2, title: "厨房排烟口高温报警",
    location: "餐饮后厨", device: "红外火灾摄像头-06", serial: "DS-FL-06B108",
    eventType: "TMA / highTemperature", channel: "CH 06 / R-02", time: "2026-07-24 07:08:21",
    temperature: 66.8, threshold: 60, state: "confirmed", operator: "王晨",
    note: "警情已确认，已通知后厨停止用火并安排现场核查。", media: true,
    assignedAt: "2026-07-24T07:08:45+08:00", assignmentWindowMinutes: 3, assignmentDeadlineAt: "2026-07-24T07:11:45+08:00",
    operationHistory: [{ action: "confirm", operator: "王晨", time: "2026-07-24 07:10:12", description: "排烟管道温度持续升高，按真实警情处置。", photos: [] }]
  },
  {
    id: "fa4", no: "ALM-FIRE-20260723-0058", level: 2, title: "消防主机火警上报",
    location: "一层东区走廊", device: "用户信息传输装置-01", serial: "UT-01-C7812",
    eventType: "fireAlarm / zone12", channel: "回路 03 / 点位 012", time: "2026-07-23 15:36:09",
    temperature: null, threshold: null, state: "reset", operator: "赵凯",
    note: "现场处置完成，消防主机与传输装置均已复位。", media: false,
    assignedAt: "", assignmentWindowMinutes: 0, assignmentDeadlineAt: "",
    operationHistory: [
      { action: "reset", operator: "赵凯", time: "2026-07-23 15:48:20", description: "现场复核无复燃风险，主机和传输装置复位成功。", photos: [] },
      { action: "dispose", operator: "赵凯", time: "2026-07-23 15:42:06", description: "清除走廊纸箱并使用灭火器完成处置。", photos: [] },
      { action: "confirm", operator: "赵凯", time: "2026-07-23 15:37:20", description: "现场确认纸箱冒烟，按真实警情处置。", photos: [] }
    ]
  },
  {
    id: "fa5", no: "ALM-FIRE-20260723-0051", level: 2, title: "锅炉房火焰识别报警",
    location: "锅炉房燃气阀组", device: "红外火灾摄像头-04", serial: "DS-FL-04C507",
    eventType: "TMA / flame", channel: "CH 04 / R-02", time: "2026-07-23 13:12:47",
    temperature: 61.3, threshold: 70, state: "false", operator: "李明",
    note: "视频复核为锅炉正常点火反光，已按误报消警。", media: true,
    assignedAt: "", assignmentWindowMinutes: 0, assignmentDeadlineAt: "",
    operationHistory: [{ action: "false", operator: "李明", time: "2026-07-23 13:15:22", description: "锅炉点火阶段反光触发识别，现场无异常。", photos: [] }]
  }
];

const warnings = [
  { id: "tw1", no: "WRN-20260724-0118", risk: "medium", type: "power", title: "配电回路温度接近阈值", device: "智能用电采集终端-05", serial: "PW-05-A2361", point: "厨房动力配电箱", value: "68.2°C", threshold: "≥ 70.0°C", firstTime: "2026-07-24 09:31:08", updated: "2026-07-24 09:42:58", state: "pending", assignee: "待指派", assignedAt: "", assignmentWindowMinutes: 0, assignmentDeadlineAt: "", checkedAt: "", recoveredAt: "", note: "回路温度持续上升，请核查负载与线路温升。", handlingHistory: [] },
  { id: "tw2", no: "WRN-20260724-0117", risk: "high", type: "gas", title: "可燃气体浓度持续升高", device: "可燃气体探测器-05", serial: "GD-05-F8016", point: "锅炉房燃气阀组", value: "18% LEL", threshold: "≥ 20% LEL", firstTime: "2026-07-24 09:29:41", updated: "2026-07-24 09:43:02", state: "pending", assignee: "待指派", assignedAt: "", assignmentWindowMinutes: 0, assignmentDeadlineAt: "", checkedAt: "", recoveredAt: "", note: "浓度接近预警阈值，请立即核查现场通风和燃气管路。", handlingHistory: [] },
  { id: "tw3", no: "WRN-20260724-0113", risk: "medium", type: "level", title: "液位终端电池电量偏低", device: "无线远程液位终端-03", serial: "WL-03-B8042", point: "生活水泵房消防水箱", value: "电量 18%", threshold: "≤ 20%", firstTime: "2026-07-24 08:52:16", updated: "2026-07-24 09:41:37", state: "checking", assignee: "王晨", assignedAt: "2026-07-24T08:55:00+08:00", assignmentWindowMinutes: 10, assignmentDeadlineAt: "2026-07-24T09:05:00+08:00", checkedAt: "2026-07-24 08:57:12", recoveredAt: "", note: "已安排核查终端电池和近期上报频率。", handlingHistory: [{ action: "start_check", operator: "王晨", time: "2026-07-24 08:57:12", note: "已开始核查终端电池和近期上报频率。" }, { action: "assign", operator: "Admin", time: "2026-07-24 08:55:00", note: "指派王晨核查，接单时限 10 分钟。" }] },
  { id: "tw4", no: "WRN-20260724-0109", risk: "high", type: "pressure", title: "喷淋管网压力低于下限", device: "无线远程压力终端-09", serial: "WP-09-D7921", point: "低区喷淋末端", value: "0.28 MPa", threshold: "< 0.30 MPa", firstTime: "2026-07-24 08:36:55", updated: "2026-07-24 09:42:29", state: "pending", assignee: "待指派", assignedAt: "", assignmentWindowMinutes: 0, assignmentDeadlineAt: "", checkedAt: "", recoveredAt: "", note: "管网压力低于设定下限，请核查阀门和泵组状态。", handlingHistory: [] },
  { id: "tw5", no: "WRN-20260723-0098", risk: "medium", type: "camera", title: "视频监测网络质量偏低", device: "室外通道监测-02", serial: "DS-PS-02D531", point: "北门消防通道", value: "信号 78%", threshold: "< 60%", firstTime: "2026-07-23 17:18:30", updated: "2026-07-23 18:56:14", state: "recovered", assignee: "陈峰", assignedAt: "2026-07-23T17:20:00+08:00", assignmentWindowMinutes: 15, assignmentDeadlineAt: "2026-07-23T17:35:00+08:00", checkedAt: "2026-07-23 17:24:18", recoveredAt: "2026-07-23 18:56:14", note: "交换机端口网络抖动已恢复，视频连续回传正常。", handlingHistory: [{ action: "recover", operator: "陈峰", time: "2026-07-23 18:56:14", note: "网络信号恢复至 78%，视频回传正常。" }] },
  { id: "tw6", no: "WRN-20260723-0086", risk: "medium", type: "camera", title: "火焰探测器镜头遮挡", device: "红外火灾摄像头-07", serial: "DS-FL-07B219", point: "室外危废暂存区", value: "遮挡 0%", threshold: "≥ 50%", firstTime: "2026-07-23 15:42:07", updated: "2026-07-23 16:08:22", state: "recovered", assignee: "赵凯", assignedAt: "2026-07-23T15:44:00+08:00", assignmentWindowMinutes: 5, assignmentDeadlineAt: "2026-07-23T15:49:00+08:00", checkedAt: "2026-07-23 15:46:31", recoveredAt: "2026-07-23 16:08:22", note: "已清洁镜头，遮挡检测恢复正常。", handlingHistory: [{ action: "recover", operator: "赵凯", time: "2026-07-23 16:08:22", note: "完成镜头清洁，遮挡率恢复为 0%。" }] },
  { id: "tw7", no: "WRN-20260723-0074", risk: "low", type: "transmitter", title: "用户信息传输装置备电欠压", device: "用户信息传输装置-01", serial: "UT-01-C7812", point: "消防控制室", value: "备电 23.6 V", threshold: "< 22.0 V", firstTime: "2026-07-23 12:14:33", updated: "2026-07-23 12:28:46", state: "recovered", assignee: "李明", assignedAt: "2026-07-23T12:16:00+08:00", assignmentWindowMinutes: 10, assignmentDeadlineAt: "2026-07-23T12:26:00+08:00", checkedAt: "2026-07-23 12:18:07", recoveredAt: "2026-07-23 12:28:46", note: "充电回路恢复，备用电源电压正常。", handlingHistory: [{ action: "recover", operator: "李明", time: "2026-07-23 12:28:46", note: "备电电压恢复至 23.6 V。" }] }
];

const videoModules = {
  offduty: {
    title: "脱岗监测", icon: "users-round", capability: "双人值守检测在线",
    channels: [
      { id: "od01", name: "消控室全景", device: "双人值守-01", code: "CH 01", status: "2 人在岗" },
      { id: "od02", name: "主岗特写", device: "双人值守-02", code: "CH 02", status: "1 人在岗" },
      { id: "od03", name: "副岗特写", device: "双人值守-03", code: "CH 03", status: "人员不足" }
    ],
    records: [
      { id: "vod01", time: "2026-07-24 09:33:12", title: "消防控制室人数不足", eventType: "offDuty", device: "双人值守-03", point: "消防控制室", requiredCount: 2, detectedCountAtTrigger: 1, currentDetectedCount: 1, state: "pending", owner: "待复核", reviewedAt: "", recoveredAt: "", completedAt: "", resolution: "", falseAlarmReason: "", handlingNote: "" },
      { id: "vod02", time: "2026-07-24 08:12:40", title: "副岗人员短时离岗", eventType: "offDuty", device: "双人值守-01", point: "消防控制室", requiredCount: 2, detectedCountAtTrigger: 1, currentDetectedCount: 2, state: "recovered_pending", owner: "Admin", reviewedAt: "2026-07-24 08:14:02", recoveredAt: "2026-07-24 08:17:31", recoveryStableSince: "2026-07-24 08:17:31", completedAt: "", resolution: "", falseAlarmReason: "", handlingNote: "" },
      { id: "vod03", time: "2026-07-23 16:42:09", title: "主岗短时脱岗", eventType: "offDuty", device: "双人值守-02", point: "消防控制室", requiredCount: 2, detectedCountAtTrigger: 1, currentDetectedCount: 2, state: "closed", owner: "王晨", reviewedAt: "2026-07-23 16:43:20", recoveredAt: "2026-07-23 16:44:31", completedAt: "2026-07-23 16:45:42", resolution: "returned", falseAlarmReason: "", handlingNote: "副岗人员已返回，视频确认双人持续在岗。" }
    ]
  },
  passage: {
    title: "消防通道监测", icon: "traffic-cone", capability: "通道占用识别在线",
    channels: [
      { id: "ps08", name: "东侧消防通道", device: "通道监测-08", code: "CH 08", status: "车辆持续占用" },
      { id: "ps02", name: "北门消防通道", device: "通道监测-02", code: "CH 02", status: "通道畅通" },
      { id: "ps12", name: "西侧装卸通道", device: "通道监测-12", code: "CH 12", status: "通道畅通" }
    ],
    records: [
      { id: "vps01", time: "2026-07-24 09:31:03", title: "消防通道车辆拥堵", eventType: "channelOccupy", device: "通道监测-08", point: "东侧消防通道", duration: "00:04:13", state: "active", owner: "待处置", completedAt: "", handlingNote: "", operationHistory: [] },
      { id: "vps02", time: "2026-07-23 17:55:12", title: "消防通道物品滞留", eventType: "fireEscapeDetection", device: "通道监测-12", point: "西侧装卸通道", duration: "00:31:05", state: "closed", owner: "赵凯", completedAt: "2026-07-23 18:26:45", handlingNote: "现场货物已全部移出消防通道，视频复核确认道路恢复畅通。", operationHistory: [{ action: "confirm_clear", operator: "赵凯", time: "2026-07-23 18:26:45", description: "现场货物已全部移出消防通道，视频复核确认道路恢复畅通。", photos: [] }] }
    ]
  },
  flame: {
    title: "红外火灾监控", icon: "flame", capability: "火焰与温升检测在线",
    channels: [
      { id: "fl01", name: "危化品暂存间", device: "红外火灾摄像头-01", code: "CH 03", status: "火焰 / 高温" },
      { id: "fl03", name: "配电设备间", device: "红外火灾摄像头-03", code: "CH 05", status: "温度正常" },
      { id: "fl04", name: "锅炉房燃气阀组", device: "红外火灾摄像头-04", code: "CH 04", status: "温度正常" }
    ],
    records: [
      { id: "vfl01", fireAlarmId: "fa1", time: "2026-07-24 09:38:16", title: "可视化红外火焰报警", eventType: "TMA / flame", device: "红外火灾摄像头-01", point: "危化品暂存间", duration: "00:01:12", state: "active", owner: "待指派" },
      { id: "vfl02", fireAlarmId: "fa2", time: "2026-07-24 08:26:44", title: "配电柜温升火警", eventType: "TMA / riseTemperature", device: "红外火灾摄像头-03", point: "配电设备间", duration: "00:18:32", state: "processing", owner: "李明" }
    ]
  }
};

const faults = [
  { id: "tf1", no: "FLT-20260724-0036", title: "消防通道摄像头离线", faultType: "设备离线", code: "ISUP_HEARTBEAT_LOST", device: "通道监测-02", serial: "DS-PS-02D531", point: "北门消防通道", source: "ISUP 设备心跳", firstTime: "2026-07-24 09:06:14", updated: "2026-07-24 09:42:44", state: "pending", assignee: "待指派", assignedAt: "", assignmentWindowMinutes: 0, assignmentDeadlineAt: "", handledAt: "", recoveredAt: "", note: "设备心跳已中断 36 分钟。", deviceStatus: { online: false, heartbeat: false, reporting: false, lastReport: "2026-07-24 09:06:14" }, handlingHistory: [] },
  { id: "tf2", no: "FLT-20260724-0032", title: "液位表数据上报中断", faultType: "数据异常", code: "DATA_REPORT_TIMEOUT", device: "消防水池液位表-01", serial: "NB-LV-01C208", point: "地下消防水池", source: "NB-IoT 数据上报", firstTime: "2026-07-24 08:35:20", updated: "2026-07-24 09:40:08", state: "processing", assignee: "陈峰", assignedAt: "2026-07-24T08:42:00+08:00", assignmentWindowMinutes: 240, assignmentDeadlineAt: "2026-07-24T12:42:00+08:00", handledAt: "", recoveredAt: "", note: "已安排现场检查仪表供电及运营商网络。", deviceStatus: { online: true, heartbeat: true, reporting: false, lastReport: "2026-07-24 08:35:20" }, handlingHistory: [{ action: "assign", operator: "Admin", operatorSide: "机构端", time: "2026-07-24 08:42:00", note: "指派陈峰处理，接单时限 4 小时。" }] },
  { id: "tf3", no: "FLT-20260724-0027", title: "压力表电池电压过低", faultType: "低电量", code: "BATTERY_LOW", device: "消火栓压力表-06", serial: "NB-PR-06A119", point: "三层西区消火栓", source: "设备状态上报", firstTime: "2026-07-24 07:18:33", updated: "2026-07-24 09:28:05", state: "handled", assignee: "赵凯", assignedAt: "2026-07-24T07:22:10+08:00", assignmentWindowMinutes: 240, assignmentDeadlineAt: "2026-07-24T11:22:10+08:00", handledAt: "2026-07-24 08:46:05", deviceRecoveredAt: "2026-07-24 09:28:05", recoveredAt: "", note: "已更换电池，等待设备状态稳定后人工确认恢复。", deviceStatus: { online: true, heartbeat: true, reporting: true, lastReport: "2026-07-24 09:28:05" }, handlingHistory: [{ action: "mark_handled", operator: "Admin", operatorSide: "机构端", time: "2026-07-24 08:46:05", note: "已更换仪表电池并重新安装，设备已开始上报。" }, { action: "assign", operator: "Admin", operatorSide: "机构端", time: "2026-07-24 07:22:10", note: "指派赵凯处理，接单时限 4 小时。" }] },
  { id: "tf4", no: "FLT-20260723-0014", title: "红外摄像头存储异常", faultType: "存储异常", code: "STORAGE_WRITE_ERROR", device: "红外火灾摄像头-04", serial: "DS-FL-04C507", point: "锅炉房燃气阀组", source: "设备存储状态上报", firstTime: "2026-07-23 08:18:33", updated: "2026-07-23 08:46:05", state: "recovered", assignee: "陈峰", assignedAt: "2026-07-23T08:24:10+08:00", assignmentWindowMinutes: 240, assignmentDeadlineAt: "2026-07-23T12:24:10+08:00", handledAt: "2026-07-23 08:40:12", recoveredAt: "2026-07-23 08:46:05", note: "更换存储卡并完成格式化，抓拍及录像写入测试正常。", deviceStatus: { online: true, heartbeat: true, reporting: true, lastReport: "2026-07-23 08:45:48" }, handlingHistory: [{ action: "confirm_recovery", operator: "Admin", operatorSide: "机构端", time: "2026-07-23 08:46:05", note: "设备在线、心跳及数据上报均正常，确认恢复。" }, { action: "mark_handled", operator: "陈峰", operatorSide: "机构端", time: "2026-07-23 08:40:12", note: "已更换存储卡并完成格式化。" }] }
];

const appNotifications = [
  { id: "nt1", category: "fire", event: "created", title: "一级火警待确认", summary: "危化品暂存间检测到明火与持续高温，请立即确认现场警情。", time: "2026-07-24 09:38:16", read: false, targetRoute: "fire/fa1" },
  { id: "nt2", category: "warning", event: "created", title: "可燃气体浓度持续升高", summary: "锅炉房浓度已达到 18% LEL，接近预警阈值。", time: "2026-07-24 09:29:41", read: false, targetRoute: "warning/tw2" },
  { id: "nt3", category: "fault", event: "created", title: "消防通道摄像头离线", summary: "北门消防通道摄像头心跳中断，请尽快安排处理。", time: "2026-07-24 09:06:14", read: false, targetRoute: "fault/tf1" },
  { id: "nt4", category: "fault", event: "status_changed", title: "设备状态已恢复", summary: "消火栓压力表已恢复在线、心跳及数据上报，等待人工确认。", time: "2026-07-24 09:28:05", read: false, targetRoute: "fault/tf3" },
  { id: "nt5", category: "warning", event: "assigned", title: "预警核查任务已指派", summary: "液位终端电池电量偏低已指派王晨核查。", time: "2026-07-24 08:55:00", read: true, targetRoute: "warning/tw3" },
  { id: "nt6", category: "fire", event: "status_changed", title: "火警处置状态更新", summary: "配电柜温升火警已确认，现场正在断电和灭火处置。", time: "2026-07-24 08:31:20", read: true, targetRoute: "fire/fa2" },
  { id: "nt7", category: "fault", event: "assigned", title: "故障处理任务已指派", summary: "液位表数据上报中断已指派陈峰处理。", time: "2026-07-24 08:42:00", read: true, targetRoute: "fault/tf2" },
  { id: "nt8", category: "fire", event: "closed", title: "火警已完成闭环", summary: "一层东区走廊火警处置完成，设备已复位。", time: "2026-07-23 15:48:20", read: true, targetRoute: "fire/fa4" }
];

const initialDutyState = {
  selectedPersonId: "admin",
  requiredHeadcount: 2,
  scenario: "normal",
  demoTimeMode: "handover_0600",
  currentShiftId: "night",
  lastCompletedAt: "2026-07-23 08:02:14",
  people: [
    { id: "admin", name: "Admin", clockInAt: "", clockInMethod: "", clockOutAt: "", clockOutMethod: "" },
    { id: "wang", name: "王晨", clockInAt: "", clockInMethod: "", clockOutAt: "", clockOutMethod: "" },
    { id: "li", name: "李明", clockInAt: "2026-07-23 17:52:18", clockInMethod: "NFC", clockOutAt: "", clockOutMethod: "" },
    { id: "zhao", name: "赵凯", clockInAt: "2026-07-23 17:55:06", clockInMethod: "二维码", clockOutAt: "", clockOutMethod: "" }
  ],
  activeOnDutyIds: ["li", "zhao"],
  shiftDefinitions: {
    day: { id: "day", label: "白班 08:00-18:00", start: "08:00", end: "18:00", clockStart: "06:00", clockEnd: "11:00", handoverStart: "06:00" },
    night: { id: "night", label: "夜班 18:00-次日08:00", start: "18:00", end: "次日08:00", clockStart: "16:00", clockEnd: "21:00", handoverStart: "16:00" }
  },
  shifts: {
    outgoing: { id: "night", label: "夜班 18:00-次日08:00" },
    incoming: { id: "day", label: "白班 08:00-18:00", clockWindow: "06:00-11:00" }
  },
  handover: {
    state: "waiting_arrival",
    outgoingShiftId: "night",
    incomingShiftId: "day",
    windowStartedAt: "2026-07-27 06:00:00",
    dataSinceAt: "2026-07-23 08:02:14",
    outgoingIds: ["li", "zhao"],
    incomingIds: [],
    preparedBy: "",
    preparedAt: "",
    outgoingConfirmedIds: [],
    incomingConfirmedIds: [],
    skippedOutgoingIds: [],
    skippedIncomingIds: [],
    exceptions: [],
    categoryRevisions: { fire: 0, warning: 0, device: 0, manual: 0, equipment_check: 1 },
    categoryConfirmations: {
      fire: { outgoingIds: [], incomingIds: [] },
      warning: { outgoingIds: [], incomingIds: [] },
      device: { outgoingIds: [], incomingIds: [] },
      manual: { outgoingIds: [], incomingIds: [] },
      equipment_check: { outgoingIds: [], incomingIds: [] }
    },
    items: [],
    checks: [
      { id: "check-1", group: "火灾报警控制器检查", title: "自检功能是否正常", result: "normal" },
      { id: "check-2", group: "火灾报警控制器检查", title: "消音功能是否正常", result: "normal" },
      { id: "check-3", group: "火灾报警控制器检查", title: "信号输入、输出模块状态", result: "normal" },
      { id: "check-4", group: "应急广播系统检查", title: "扬声器外观及工作状态", result: "normal" },
      { id: "check-5", group: "消防专用电话检查", title: "主机、分机及插孔外观正常", result: "normal" }
    ],
    confirmations: [],
    completedAt: ""
  },
  clockRecords: [
    { id: "dc1", type: "下班打卡", person: "王晨", personId: "wang", shift: "白班 08:00-18:00", method: "NFC", time: "2026-07-23 18:03:16", result: "正常" },
    { id: "dc2", type: "上班打卡", person: "王晨", personId: "wang", shift: "白班 08:00-18:00", method: "二维码", time: "2026-07-23 07:56:42", result: "正常" },
    { id: "dc3", type: "下班打卡", person: "李明", personId: "li", shift: "夜班 18:00-次日08:00", method: "NFC", time: "2026-07-22 08:01:08", result: "正常" }
  ],
  dutyRecords: [
    { id: "dl1", title: "夜间设备状态复核", person: "李明", personId: "li", time: "2026-07-23 23:18:20", note: "消防主机、用户信息传输装置及消防水系统运行正常。", photos: [], recordType: "manual" },
    { id: "dl2", title: "值班情况记录", person: "王晨", personId: "wang", time: "2026-07-23 15:42:16", note: "完成重点部位视频轮巡，未发现消防通道占用。", photos: [], recordType: "manual" }
  ],
  handoverRecords: [
    { id: "dr1", time: "2026-07-23 08:02:14", status: "completed", outgoingNames: ["赵凯", "陈峰"], incomingNames: ["王晨", "李明"], confirmations: [{ personId: "zhao", name: "赵凯", side: "outgoing", time: "2026-07-23 07:58:12" }, { personId: "chen", name: "陈峰", side: "outgoing", time: "2026-07-23 07:59:08" }, { personId: "wang", name: "王晨", side: "incoming", time: "2026-07-23 08:01:20" }, { personId: "li", name: "李明", side: "incoming", time: "2026-07-23 08:02:14" }], items: [{ id: "old-1", category: "fire", title: "当班无未闭环火警", meta: "已核对", result: "normal", note: "" }, { id: "old-2", category: "warning", title: "设备预警已完成核查", meta: "1 条已恢复", result: "normal", note: "" }, { id: "old-3", category: "device", title: "主要消防设备运行正常", meta: "在线 12 台", result: "normal", note: "" }] }
  ]
};

const dutyState = cloneData(initialDutyState);

let notificationSequence = appNotifications.length;

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

const initialModuleState = {
  fire: cloneData(fireAlarms),
  warning: cloneData(warnings),
  fault: cloneData(faults),
  offduty: cloneData(videoModules.offduty.records),
  passage: cloneData(videoModules.passage.records)
};

const state = {
  fireFilter: "open", warningFilter: "open", faultFilter: "open", videoModule: "offduty",
  videoChannels: { offduty: "od03", passage: "ps08", flame: "fl01" },
  notificationReadFilter: "all", notificationTypeFilter: "all", notificationBackRoute: "applications",
  detailReturnRoute: "", detailTargetRoute: "", pushNotificationId: "", notificationsEnabled: false,
  sheetSubmit: null, sheetPhotos: [], sheetPhotoLimit: 6, toastTimer: null, pushTimer: null,
  dutyRecordDateOffset: 0
};

const fireStateLabels = { pending: "待确认", confirmed: "已确认", processing: "处置中", reset: "已复位", false: "误报消警" };
const warningStateLabels = { pending: "待核查", checking: "核查中", recovered: "已恢复" };
const faultStateLabels = { pending: "待处理", processing: "处理中", handled: "已处理待恢复", recovered: "已恢复" };
const videoStateLabels = { pending: "待复核", processing: "处置中", recovered_pending: "待确认返岗", active: "待处置", closed: "已消警" };
const fireActionLabels = { assign: "人员指派", confirm: "确认警情", false: "误报消警", dispose: "警情处置", reset: "设备复位" };
const warningTypeMeta = {
  power: ["智能用电", "zap"], gas: ["可燃气体", "wind"], level: ["远程液位", "waves"],
  pressure: ["远程压力", "gauge"], camera: ["视频监测", "cctv"], transmitter: ["信息传输装置", "radio-tower"]
};
const notificationCategoryMeta = {
  fire: { label: "火警", icon: "siren", tone: "fire" },
  warning: { label: "预警", icon: "triangle-alert", tone: "warning" },
  fault: { label: "故障", icon: "wrench", tone: "fault" }
};

const appHeader = document.querySelector("#appHeader");
const appMain = document.querySelector("#appMain");
const bottomNav = document.querySelector("#bottomNav");
const previewControlTrigger = document.querySelector("#previewControlTrigger");
const previewControlMenu = document.querySelector("#previewControlMenu");
const deviceShellToggle = document.querySelector("#deviceShellToggle");
const newNotificationToggle = document.querySelector("#newNotificationToggle");
const dutyPersonSelect = document.querySelector("#dutyPersonSelect");
const dutyHeadcountSelect = document.querySelector("#dutyHeadcountSelect");
const dutyTimeModeSelect = document.querySelector("#dutyTimeModeSelect");
const mobileApp = document.querySelector("#mobileApp");
const pushBanner = document.querySelector("#pushBanner");
const pushBannerOpen = document.querySelector("#pushBannerOpen");
const sheetBody = document.querySelector("#sheetBody");

function esc(value = "") {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function refreshIcons(root = document) {
  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 2 }, nameAttr: "data-lucide", root });
}

function showToast(message) {
  const toast = document.querySelector("#appToast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function nowText() {
  const parts = new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).formatToParts(new Date());
  const get = (type) => parts.find((item) => item.type === type)?.value || "";
  return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}:${get("second")}`;
}

function shortDate(value) {
  if (!value) return "--";
  const date = new Date(value.includes("T") ? value : value.replace(" ", "T") + "+08:00");
  if (Number.isNaN(date.getTime())) return value.slice(5, 16);
  return new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false }).format(date).replaceAll("/", "-");
}

function assignmentDeadline(minutes) {
  return new Date(Date.now() + Number(minutes) * 60000).toISOString();
}

function isOverdue(item) {
  return Boolean(item.assignmentDeadlineAt && item.state !== "reset" && item.state !== "false" && item.state !== "recovered" && new Date(item.assignmentDeadlineAt).getTime() < Date.now());
}

function routeParts() {
  return (location.hash.replace(/^#\/?/, "") || "applications").split("/").filter(Boolean);
}

function go(route) {
  location.hash = `#/${route}`;
}

function currentRoute() {
  return routeParts().join("/") || "applications";
}

function unreadNotificationCount() {
  return appNotifications.filter((item) => !item.read).length;
}

function notificationHeaderButton(from) {
  const unread = unreadNotificationCount();
  return `<button class="icon-control header-notification" type="button" data-notification-entry="${from}" aria-label="消息通知" title="消息通知"><i data-lucide="bell"></i>${unread ? `<b>${unread > 99 ? "99+" : unread}</b>` : ""}</button>`;
}

function detailBackRoute(defaultRoute, targetRoute) {
  return state.detailTargetRoute === targetRoute && state.detailReturnRoute ? state.detailReturnRoute : defaultRoute;
}

function hidePushBanner() {
  window.clearTimeout(state.pushTimer);
  state.pushTimer = null;
  state.pushNotificationId = "";
  pushBanner.classList.remove("show");
  pushBanner.hidden = true;
}

function showForegroundNotification(notification) {
  const meta = notificationCategoryMeta[notification.category];
  state.pushNotificationId = notification.id;
  pushBannerOpen.dataset.pushNotification = notification.id;
  pushBannerOpen.innerHTML = `<span class="push-banner-icon ${meta.tone}"><i data-lucide="${meta.icon}"></i></span><span class="push-banner-copy"><small>${meta.label}通知</small><strong>${esc(notification.title)}</strong><span>${esc(notification.summary)}</span></span>`;
  pushBanner.hidden = false;
  refreshIcons(pushBanner);
  requestAnimationFrame(() => pushBanner.classList.add("show"));
  window.clearTimeout(state.pushTimer);
  state.pushTimer = window.setTimeout(hidePushBanner, 3400);
}

function publishNotification(category, event, title, summary, targetRoute) {
  const notification = {
    id: `nt${Date.now()}-${++notificationSequence}`,
    category, event, title, summary, time: nowText(), read: false, targetRoute
  };
  appNotifications.unshift(notification);
  if (state.notificationsEnabled) showForegroundNotification(notification);
  return notification;
}

function openNotificationTarget(notification, returnRoute) {
  if (!notification) return;
  notification.read = true;
  const sameTarget = currentRoute() === notification.targetRoute;
  if (!sameTarget) {
    state.detailReturnRoute = returnRoute;
    state.detailTargetRoute = notification.targetRoute;
  }
  hidePushBanner();
  if (sameTarget) render();
  else go(notification.targetRoute);
}

function renderHeader(title, subtitle = "", backRoute = "", actions = "") {
  appHeader.className = `app-header ${backRoute ? "" : "app-center-header"}`;
  appHeader.innerHTML = `${backRoute ? `<button class="header-back" type="button" data-route="${backRoute}" aria-label="返回"><i data-lucide="chevron-left"></i></button>` : ""}
    <div class="app-header-title"><h1>${esc(title)}</h1>${subtitle ? `<small>${esc(subtitle)}</small>` : ""}</div>${actions ? `<div class="app-header-actions">${actions}</div>` : ""}`;
}

function setBottomNav(active, visible = true) {
  bottomNav.hidden = !visible;
  bottomNav.querySelectorAll("button").forEach((button) => button.classList.toggle("active", button.dataset.nav === active));
  appMain.classList.toggle("detail-main", !visible);
}

function setDeviceShell(enabled, persist = true) {
  document.body.classList.toggle("device-shell-enabled", enabled);
  deviceShellToggle.checked = enabled;
  if (persist) {
    try { localStorage.setItem("fire-app-device-shell", enabled ? "on" : "off"); } catch { /* Preview state can remain session-only. */ }
  }
  requestAnimationFrame(() => {
    const canvas = document.querySelector("#videoCanvas") || document.querySelector("#videoDetailCanvas");
    if (canvas) drawVideoScene(canvas, state.videoModule);
  });
}

function closePreviewControls() {
  previewControlMenu.hidden = true;
  previewControlTrigger.setAttribute("aria-expanded", "false");
}

function lockScrollBoundary(element) {
  let touchX = 0;
  let touchY = 0;

  element.addEventListener("touchstart", (event) => {
    if (event.touches.length !== 1) return;
    touchX = event.touches[0].clientX;
    touchY = event.touches[0].clientY;
  }, { passive: true });

  element.addEventListener("touchmove", (event) => {
    if (event.touches.length !== 1) return;
    const touch = event.touches[0];
    const deltaX = touch.clientX - touchX;
    const deltaY = touch.clientY - touchY;
    touchX = touch.clientX;
    touchY = touch.clientY;
    if (Math.abs(deltaY) <= Math.abs(deltaX)) return;

    const maxScrollTop = Math.max(0, element.scrollHeight - element.clientHeight);
    const cannotScroll = maxScrollTop <= 1;
    const pullingPastTop = element.scrollTop <= 0 && deltaY > 0;
    const pullingPastBottom = element.scrollTop >= maxScrollTop - 1 && deltaY < 0;
    if (cannotScroll || pullingPastTop || pullingPastBottom) event.preventDefault();
  }, { passive: false });

  element.addEventListener("wheel", (event) => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    const maxScrollTop = Math.max(0, element.scrollHeight - element.clientHeight);
    const cannotScroll = maxScrollTop <= 1;
    const scrollingPastTop = element.scrollTop <= 0 && event.deltaY < 0;
    const scrollingPastBottom = element.scrollTop >= maxScrollTop - 1 && event.deltaY > 0;
    if (cannotScroll || scrollingPastTop || scrollingPastBottom) event.preventDefault();
  }, { passive: false });
}

function initializePreviewControls() {
  let shellEnabled = true;
  try { shellEnabled = localStorage.getItem("fire-app-device-shell") !== "off"; } catch { shellEnabled = true; }
  setDeviceShell(shellEnabled, false);
  state.notificationsEnabled = false;
  newNotificationToggle.checked = false;
  dutyPersonSelect.value = dutyState.selectedPersonId;
  dutyHeadcountSelect.value = String(dutyState.requiredHeadcount);
  dutyTimeModeSelect.value = dutyState.demoTimeMode;
  refreshAllDutyHandoverCategories(false);
}

function restoreRecords(target, initialRecords) {
  target.splice(0, target.length, ...cloneData(initialRecords));
}

function resetModuleState(module) {
  const labels = {
    fire: "火警告警", warning: "设备预警", fault: "设备故障",
    offduty: "脱岗监测", passage: "消防通道监测", duty: "消控室值班"
  };
  if (module === "fire") {
    restoreRecords(fireAlarms, initialModuleState.fire);
    state.fireFilter = "open";
    refreshDutyHandoverCategory("fire");
  } else if (module === "warning") {
    restoreRecords(warnings, initialModuleState.warning);
    state.warningFilter = "open";
    refreshDutyHandoverCategory("warning");
  } else if (module === "fault") {
    restoreRecords(faults, initialModuleState.fault);
    state.faultFilter = "open";
    refreshDutyHandoverCategory("device");
  } else if (module === "offduty") {
    restoreRecords(videoModules.offduty.records, initialModuleState.offduty);
  } else if (module === "passage") {
    restoreRecords(videoModules.passage.records, initialModuleState.passage);
  } else if (module === "duty") {
    Object.keys(dutyState).forEach((key) => delete dutyState[key]);
    Object.assign(dutyState, cloneData(initialDutyState));
    state.dutyRecordDateOffset = 0;
    dutyPersonSelect.value = dutyState.selectedPersonId;
    dutyHeadcountSelect.value = String(dutyState.requiredHeadcount);
    dutyTimeModeSelect.value = dutyState.demoTimeMode;
    refreshAllDutyHandoverCategories(false);
  } else return;
  closePreviewControls();
  render();
  showToast(`${labels[module]}状态已初始化`);
}

function initializeUnattendedDutyScenario() {
  Object.keys(dutyState).forEach((key) => delete dutyState[key]);
  Object.assign(dutyState, cloneData(initialDutyState));
  dutyState.scenario = "unattended";
  dutyState.activeOnDutyIds = [];
  dutyState.handover.outgoingIds = [];
  dutyState.handover.state = "waiting_arrival";
  dutyState.people.forEach((person) => {
    person.clockInAt = "";
    person.clockInMethod = "";
    person.clockOutAt = "";
    person.clockOutMethod = "";
  });
  dutyState.selectedPersonId = "admin";
  dutyPersonSelect.value = "admin";
  dutyHeadcountSelect.value = String(dutyState.requiredHeadcount);
  dutyTimeModeSelect.value = dutyState.demoTimeMode;
  refreshAllDutyHandoverCategories(false);
  closePreviewControls();
  render();
  showToast("已切换为当前无人交班场景");
}

function fireOpenCount() { return fireAlarms.filter((item) => !["reset", "false"].includes(item.state)).length; }
function warningOpenCount() { return warnings.filter((item) => item.state !== "recovered").length; }
function faultOpenCount() { return faults.filter((item) => item.state !== "recovered").length; }

function renderApplications() {
  renderHeader("应用中心", "", "", notificationHeaderButton("applications"));
  setBottomNav("applications");
  appMain.innerHTML = `<div class="application-page">
    <div class="search-box"><i data-lucide="search"></i><input id="appSearch" type="search" placeholder="搜索功能..." autocomplete="off" /></div>
    <div class="section-heading"><h2>常用功能</h2><span>共 ${featureApps.length} 项</span></div>
    <div class="feature-grid" id="featureGrid">${featureApps.map((item) => {
      const badge = item.id === "fire" ? fireOpenCount() : item.id === "warning" ? warningOpenCount() : item.id === "fault" ? faultOpenCount() : item.badge;
      return `<button class="feature-item" type="button" data-feature="${item.id}" data-label="${item.label}">
        <span class="feature-icon ${item.tone}"><i data-lucide="${item.icon}"></i>${badge ? `<b class="entry-badge">${badge}</b>` : ""}</span><span>${item.label}</span>
      </button>`;
    }).join("")}</div>
    <div class="empty-search" id="appSearchEmpty" hidden>没有找到相关功能</div>
    <div class="section-heading"><h2>本月数据</h2><span>数据更新至今日</span></div>
    <div class="monthly-grid"><div class="monthly-card"><strong>85%</strong><span>巡查完成率</span></div><div class="monthly-card"><strong>1/1</strong><span>检查完成率</span></div><div class="monthly-card"><strong>5</strong><span>待处理隐患</span></div><div class="monthly-card"><strong>12天</strong><span>本月值班</span></div></div>
  </div>`;
}

function renderHome() {
  renderHeader("首页", "", "", notificationHeaderButton("home"));
  setBottomNav("home");
  appMain.innerHTML = "";
}

function renderProfile() {
  renderHeader("我的");
  setBottomNav("profile");
  appMain.innerHTML = "";
}

function dutyDateInfo(offset = 0) {
  const target = new Date();
  target.setDate(target.getDate() + offset);
  const parts = new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(target);
  const get = (type) => parts.find((item) => item.type === type)?.value || "";
  const weekday = new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", weekday: "long" }).format(target);
  return { date: `${get("year")}-${get("month")}-${get("day")}`, label: `${get("month")}月${get("day")}日`, weekday };
}

function dutyShift(id) {
  return dutyState.shiftDefinitions[id] || dutyState.shiftDefinitions.day;
}

function dutyShiftPair(outgoingId, incomingId) {
  const outgoing = dutyShift(outgoingId);
  const incoming = dutyShift(incomingId);
  dutyState.shifts = {
    outgoing: { id: outgoing.id, label: outgoing.label, clockWindow: `${outgoing.clockStart}-${outgoing.clockEnd}` },
    incoming: { id: incoming.id, label: incoming.label, clockWindow: `${incoming.clockStart}-${incoming.clockEnd}` }
  };
}

function emptyDutyCategoryConfirmations() {
  return Object.fromEntries(["fire", "warning", "device", "manual", "equipment_check"].map((category) => [category, { outgoingIds: [], incomingIds: [] }]));
}

function freshDutyHandover(outgoingShiftId, incomingShiftId, outgoingIds = []) {
  const incoming = dutyShift(incomingShiftId);
  return {
    state: "waiting_arrival",
    outgoingShiftId,
    incomingShiftId,
    windowStartedAt: `${dutyDateInfo().date} ${incoming.handoverStart}:00`,
    dataSinceAt: dutyState.lastCompletedAt,
    outgoingIds: [...outgoingIds],
    incomingIds: [],
    preparedBy: "",
    preparedAt: "",
    outgoingConfirmedIds: [],
    incomingConfirmedIds: [],
    skippedOutgoingIds: [],
    skippedIncomingIds: [],
    exceptions: [],
    categoryRevisions: { fire: 0, warning: 0, device: 0, manual: 0, equipment_check: 1 },
    categoryConfirmations: emptyDutyCategoryConfirmations(),
    items: [],
    checks: cloneData(initialDutyState.handover.checks),
    confirmations: [],
    completedAt: ""
  };
}

function resetDutyAttendance(activeIds, clockTime) {
  dutyState.people.forEach((person) => {
    const active = activeIds.includes(person.id);
    person.clockInAt = active ? `${dutyDateInfo().date} ${clockTime}:00` : "";
    person.clockInMethod = active ? "NFC" : "";
    person.clockOutAt = "";
    person.clockOutMethod = "";
  });
}

function applyDutyTimeMode(mode) {
  const previousActiveIds = [...dutyState.activeOnDutyIds];
  const previousShiftId = dutyState.currentShiftId;
  dutyState.demoTimeMode = mode;
  dutyState.scenario = "normal";
  if (mode === "on_duty") {
    dutyState.currentShiftId = "day";
    dutyState.activeOnDutyIds = previousShiftId === "day" && previousActiveIds.length ? previousActiveIds : ["admin", "wang"];
    resetDutyAttendance(dutyState.activeOnDutyIds, "07:56");
    dutyShiftPair("day", "night");
    dutyState.handover = freshDutyHandover("day", "night", []);
    dutyState.handover.state = "completed";
    dutyState.handover.completedAt = dutyState.lastCompletedAt;
  } else {
    const outgoingShiftId = mode === "handover_1600" ? "day" : "night";
    const incomingShiftId = outgoingShiftId === "day" ? "night" : "day";
    const fallbackIds = outgoingShiftId === "day" ? ["admin", "wang"] : ["li", "zhao"];
    const outgoingIds = previousShiftId === outgoingShiftId && previousActiveIds.length ? previousActiveIds : fallbackIds;
    dutyState.currentShiftId = outgoingShiftId;
    dutyState.activeOnDutyIds = [...outgoingIds];
    resetDutyAttendance(outgoingIds, outgoingShiftId === "day" ? "07:56" : "17:52");
    dutyShiftPair(outgoingShiftId, incomingShiftId);
    dutyState.handover = freshDutyHandover(outgoingShiftId, incomingShiftId, outgoingIds);
    refreshAllDutyHandoverCategories(false);
    syncDutyHandoverState();
  }
  dutyTimeModeSelect.value = mode;
}

function latestDutySourceTime(item, fallback = "") {
  const history = [...(item.operationHistory || []), ...(item.handlingHistory || [])].map((entry) => entry.time).filter(Boolean);
  return [fallback, ...history].filter(Boolean).sort((a, b) => b.localeCompare(a))[0] || "";
}

function buildDutyHandoverItems(category) {
  const since = dutyState.handover.dataSinceAt || "";
  if (category === "fire") return fireAlarms.filter((item) => latestDutySourceTime(item, item.time) >= since || !["reset", "false"].includes(item.state)).map((item) => ({ id: `fire-${item.id}`, category, title: item.title, meta: `${item.location} · ${item.device}`, note: item.note, status: fireStateLabels[item.state], result: ["reset", "false"].includes(item.state) ? "normal" : "abnormal", targetRoute: `fire/${item.id}`, sourceTime: latestDutySourceTime(item, item.time) }));
  if (category === "warning") return warnings.filter((item) => latestDutySourceTime(item, item.updated || item.firstTime) >= since || item.state !== "recovered").map((item) => ({ id: `warning-${item.id}`, category, title: item.title, meta: `${item.point} · ${item.device}`, note: item.note, status: warningStateLabels[item.state], result: item.state === "recovered" ? "normal" : "abnormal", targetRoute: `warning/${item.id}`, sourceTime: latestDutySourceTime(item, item.updated || item.firstTime) }));
  if (category === "device") return faults.filter((item) => latestDutySourceTime(item, item.updated || item.firstTime) >= since || item.state !== "recovered").map((item) => ({ id: `device-${item.id}`, category, title: item.title, meta: `${item.point} · ${item.device}`, note: item.note, status: faultStateLabels[item.state], result: item.state === "recovered" ? "normal" : "abnormal", targetRoute: `fault/${item.id}`, sourceTime: latestDutySourceTime(item, item.updated || item.firstTime) }));
  if (category === "manual") return dutyState.dutyRecords.filter((item) => item.recordType === "manual" && item.time >= since).map((item) => ({ id: `manual-${item.id}`, category, title: item.title, meta: `${item.person} · ${item.time.slice(5, 16)}`, note: item.note, status: "已记录", result: "normal", targetRoute: `duty/logs/${item.id}`, sourceTime: item.time }));
  return [];
}

function categoryConfirmation(category, side) {
  return dutyState.handover.categoryConfirmations?.[category]?.[`${side}Ids`] || [];
}

function dutyCategoryConfirmed(person, category) {
  const role = dutyPersonRole(person);
  return ["outgoing", "incoming"].includes(role) && categoryConfirmation(category, role).includes(person.id);
}

function refreshDutyHandoverCategory(category, notify = true) {
  const handover = dutyState.handover;
  if (handover.state === "completed" || !["fire", "warning", "device", "manual"].includes(category)) return false;
  const nextItems = buildDutyHandoverItems(category);
  const currentItems = handover.items.filter((item) => item.category === category);
  const signature = (items) => JSON.stringify(items.map((item) => [item.id, item.status, item.note, item.sourceTime]));
  handover.items = [...handover.items.filter((item) => item.category !== category), ...nextItems];
  if (signature(currentItems) === signature(nextItems)) return false;
  handover.categoryRevisions[category] = (handover.categoryRevisions[category] || 0) + 1;
  const outgoingAffected = [...categoryConfirmation(category, "outgoing")];
  const incomingAffected = [...categoryConfirmation(category, "incoming")];
  handover.categoryConfirmations[category] = { outgoingIds: [], incomingIds: [] };
  if (outgoingAffected.length || incomingAffected.length) {
    handover.outgoingConfirmedIds = handover.outgoingConfirmedIds.filter((id) => !outgoingAffected.includes(id));
    handover.incomingConfirmedIds = handover.incomingConfirmedIds.filter((id) => !incomingAffected.includes(id));
    handover.confirmations = handover.confirmations.filter((entry) => !(entry.side === "outgoing" ? outgoingAffected : incomingAffected).includes(entry.personId));
    handover.state = handover.outgoingIds.length ? "outgoing_confirming" : "incoming_confirming";
    if (notify) showToast(`${dutyCategoryMeta[category].label}数据已更新，请重新确认`);
  }
  return true;
}

function refreshAllDutyHandoverCategories(notify = false) {
  ["fire", "warning", "device", "manual"].forEach((category) => refreshDutyHandoverCategory(category, notify));
}

function selectedDutyPerson() {
  return dutyState.people.find((person) => person.id === dutyState.selectedPersonId) || dutyState.people[0];
}

function dutyPersonById(id) {
  return dutyState.people.find((person) => person.id === id);
}

function dutyPeople(side) {
  const ids = side === "outgoing" ? dutyState.handover.outgoingIds : dutyState.handover.incomingIds;
  return ids.map(dutyPersonById).filter(Boolean);
}

function dutyPersonRole(person) {
  if (dutyState.handover.outgoingIds.includes(person.id)) return "outgoing";
  if (dutyState.activeOnDutyIds.includes(person.id)) return "on_duty";
  if (dutyState.handover.incomingIds.includes(person.id)) return "incoming";
  return "available";
}

function dutyPersonConfirmed(person) {
  const role = dutyPersonRole(person);
  const ids = role === "outgoing" ? dutyState.handover.outgoingConfirmedIds : dutyState.handover.incomingConfirmedIds;
  return ids.includes(person.id);
}

function allSideConfirmed(side) {
  const handover = dutyState.handover;
  const participantIds = side === "outgoing" ? handover.outgoingIds : handover.incomingIds;
  const confirmedIds = side === "outgoing" ? handover.outgoingConfirmedIds : handover.incomingConfirmedIds;
  const skippedIds = side === "outgoing" ? handover.skippedOutgoingIds : handover.skippedIncomingIds;
  return participantIds.every((id) => confirmedIds.includes(id) || skippedIds.includes(id));
}

function syncDutyHandoverState() {
  const handover = dutyState.handover;
  if (handover.state === "completed") return;
  if (!handover.outgoingIds.length) {
    if (!handover.exceptions.some((item) => item.type === "force_takeover")) handover.state = "waiting_arrival";
    return;
  }
  const staffingForced = handover.exceptions.some((item) => item.type === "force_handover" && item.reason === "understaffed");
  if (!allSideConfirmed("outgoing")) return void (handover.state = "outgoing_confirming");
  handover.state = handover.incomingIds.length && (handover.incomingIds.length >= dutyState.requiredHeadcount || staffingForced) ? "incoming_confirming" : "waiting_arrival";
}

function dutyHomeMeta(person) {
  syncDutyHandoverState();
  const role = dutyPersonRole(person);
  const confirmed = dutyPersonConfirmed(person);
  if (role === "available") {
    return { eyebrow: "开始上班", title: "打卡上班，完成岗前检查", description: "与交班人员完成交接班流程", button: "立即上班打卡", route: "duty/clock-in", steps: [false, false, false], active: 0 };
  }
  if (role === "incoming") {
    if (dutyState.handover.state === "completed") return { eyebrow: "值班中", title: "交接班已完成", description: "本班次值守工作正在进行", button: "新增值班记录", action: "add_record", steps: [true, true, true], active: 2 };
    return { eyebrow: "交接班", title: confirmed ? "已完成接班确认" : "当前处于待接班状态", description: confirmed ? "等待其他接班人员完成确认" : "请核对交接事项并完成接班确认", button: "进入交接班", route: "duty/handover", steps: [true, confirmed, false], active: confirmed ? 2 : 1 };
  }
  if (role === "on_duty") return { eyebrow: "值班中", title: "本班次正在值守", description: "可记录火警、预警及设备运行情况", button: "查看交接记录", route: "duty/handover-records", steps: [true, true, true], active: 2 };
  if (person.clockOutAt) return { eyebrow: "交班完成", title: "下班打卡已完成", description: "本次交接和值班记录已保存", button: "返回应用中心", route: "applications", steps: [true, true, true], active: 2 };
  if (dutyState.handover.state === "completed") return { eyebrow: "交接完成", title: "可以进行下班打卡", description: "接班人员已接收本次交接事项", button: "打卡下班", route: "duty/clock-out", steps: [true, true, false], active: 2 };
  return { eyebrow: "交接班", title: confirmed ? "已完成交班确认" : "当前处于待交班状态", description: confirmed ? "等待其他人员完成交接确认" : "请确认本班次事项并提交交班", button: "进入交接班", route: "duty/handover", steps: [true, confirmed, false], active: 1 };
}

function dutyPersonStatus(person) {
  const role = dutyPersonRole(person);
  const handover = dutyState.handover;
  if (person.clockOutAt) return ["已下班", "done"];
  if (role === "available") return ["未打卡", "pending"];
  if (role === "on_duty") return ["值班中", "active"];
  const skipped = role === "outgoing" ? handover.skippedOutgoingIds.includes(person.id) : handover.skippedIncomingIds.includes(person.id);
  if (skipped) return ["未确认", "skipped"];
  if (dutyPersonConfirmed(person)) return [role === "outgoing" ? "已确认交班" : "已确认接班", "done"];
  if (handover.state === "completed" && role === "outgoing") return ["待下班", "pending"];
  return [role === "outgoing" ? "待交班" : "待接班", "pending"];
}

function dutyPeopleGroup(side, title, shift) {
  const people = dutyPeople(side);
  return `<section class="duty-team-group"><div class="duty-team-title"><div><small>${title}</small><strong>${shift}</strong></div><b>${side === "incoming" ? "接班" : "交班"}</b></div><div class="duty-person-grid">${people.map((person) => {
    const [label, tone] = dutyPersonStatus(person);
    return `<article class="duty-person ${person.id === dutyState.selectedPersonId ? "selected" : ""}"><span>${esc(person.name.slice(0, 1))}</span><div><strong>${esc(person.name)}</strong><small>${person.clockInAt ? `到岗 ${person.clockInAt.slice(11, 16)}` : "尚未到岗"}</small></div><b class="${tone}">${label}</b></article>`;
  }).join("") || `<div class="duty-team-empty">当前暂无人员</div>`}</div></section>`;
}

function renderDutyHome() {
  syncDutyHandoverState();
  const dateInfo = dutyDateInfo();
  const person = selectedDutyPerson();
  const role = dutyPersonRole(person);
  const stage = dutyHomeMeta(person);
  const isOutgoing = role === "outgoing";
  const stepLabels = isOutgoing ? ["上班打卡", "交接班", "下班打卡"] : ["上班打卡", "交接班", "值班中"];
  const primary = stage.route ? `data-route="${stage.route}"` : stage.action ? `data-duty-action="${stage.action}"` : "disabled";
  const roleLabels = { available: "未打卡", incoming: "接班方", outgoing: "交班方", on_duty: "值班中" };
  const clockRoute = role === "available" ? "duty/clock-in" : role === "outgoing" && dutyState.handover.state === "completed" && !person.clockOutAt ? "duty/clock-out" : "";
  const clockedPeople = ["outgoing", "on_duty"].includes(role) ? dutyState.activeOnDutyIds.map(dutyPersonById).filter(Boolean) : dutyPeople("incoming");
  const clockedNames = clockedPeople.map((item) => item.name).join("、") || "暂无打卡人员";
  const shift = role === "outgoing" ? dutyState.shifts.outgoing : role === "incoming" || (role === "available" && dutyState.demoTimeMode !== "on_duty") ? dutyState.shifts.incoming : dutyShift(dutyState.currentShiftId);
  renderHeader("消控室值班", `${person.name} · ${roleLabels[role]}`, "applications");
  setBottomNav("", false);
  appMain.innerHTML = `<div class="duty-page">
    <section class="duty-shift-card"><div class="duty-card-heading"><span><i></i>${role === "available" ? "最近班次信息" : "值班中"}</span><b>${esc(shift.label)}</b></div><div class="duty-shift-content"><div><h2>${dateInfo.date}</h2><p>${dateInfo.weekday} · ${esc(clockedNames)}</p></div><span class="duty-shift-icon"><i data-lucide="shield-check"></i></span></div></section>
    <section class="duty-workflow-card"><small>${stage.eyebrow}</small><h2>${stage.title}</h2><p>${stage.description}</p><div class="duty-steps">${stepLabels.map((label, index) => `<div class="duty-step ${stage.steps[index] ? "done" : index === stage.active ? "active" : ""}"><span>${stage.steps[index] ? `<i data-lucide="check"></i>` : index + 1}</span><b>${label}</b></div>`).join("")}</div><button class="duty-primary-action" type="button" ${primary}>${stage.button}<i data-lucide="arrow-right"></i></button></section>
    <section class="duty-shortcuts"><button type="button" ${clockRoute ? `data-route="${clockRoute}"` : "disabled"}><span class="orange"><i data-lucide="calendar-check"></i></span><b>打卡</b></button><button type="button" data-route="duty/handover" ${role === "available" ? "disabled" : ""}><span class="blue"><i data-lucide="handshake"></i></span><b>交接班</b></button><button type="button" data-route="duty/logs"><span class="indigo"><i data-lucide="clipboard-list"></i></span><b>值班记录</b></button><button type="button" data-route="duty/handover-records"><span class="green"><i data-lucide="file-check-2"></i></span><b>交接记录</b></button></section>
    ${role === "available" || person.clockOutAt ? "" : `<section class="duty-summary-section"><div class="section-heading"><h2>本班次摘要</h2><span>实时业务数据</span></div><div class="duty-summary-list"><article><span class="red"><i data-lucide="siren"></i></span><div><strong>火警告警</strong><small>${fireOpenCount()} 条未闭环火警</small></div><b>${fireOpenCount()}</b></article><article><span class="orange"><i data-lucide="triangle-alert"></i></span><div><strong>设备预警</strong><small>${warningOpenCount()} 条预警待处理</small></div><b>${warningOpenCount()}</b></article><article><span class="green"><i data-lucide="monitor-check"></i></span><div><strong>设备运行</strong><small>${faultOpenCount()} 台设备存在故障</small></div><b class="${faultOpenCount() ? "" : "normal"}">${faultOpenCount() || "正常"}</b></article></div><button class="duty-add-record" type="button" data-duty-action="add_record"><i data-lucide="plus"></i>新增值班记录</button></section>`}
  </div>`;
}

function renderDutyClock(type) {
  const person = selectedDutyPerson();
  const isClockIn = type === "clock-in";
  const recordTime = isClockIn ? person.clockInAt : person.clockOutAt;
  const method = isClockIn ? person.clockInMethod : person.clockOutMethod;
  const role = dutyPersonRole(person);
  const roleAllowed = isClockIn ? role === "available" : role === "outgoing";
  const flowAllowed = isClockIn || dutyState.handover.state === "completed";
  const canClock = roleAllowed && flowAllowed && !recordTime;
  const targetShift = isClockIn ? (dutyState.demoTimeMode === "on_duty" ? dutyShift(dutyState.currentShiftId) : dutyShift(dutyState.handover.incomingShiftId)) : dutyShift(dutyState.handover.outgoingShiftId);
  renderHeader(isClockIn ? "上班打卡" : "下班打卡", person.name, "duty");
  setBottomNav("", false);
  appMain.innerHTML = `<div class="duty-clock-page">
    <section class="duty-clock-hero ${recordTime ? "success" : ""}"><small>${dutyDateInfo().date} · ${dutyDateInfo().weekday}</small><strong>${recordTime ? recordTime.slice(11, 16) : targetShift.start}</strong><span>${targetShift.label}</span><p>最早打卡时间 ${targetShift.clockStart}　最晚打卡时间 ${targetShift.clockEnd}</p></section>
    ${recordTime ? `<section class="duty-clock-result"><span><i data-lucide="circle-check-big"></i></span><h2>打卡成功</h2><p>${esc(person.name)}已完成${isClockIn ? "上班" : "下班"}打卡</p><dl><div><dt>打卡时间</dt><dd>${recordTime}</dd></div><div><dt>打卡方式</dt><dd>${esc(method)}打卡</dd></div><div><dt>班次</dt><dd>${targetShift.label}</dd></div></dl><button type="button" data-route="duty">返回首页</button></section>` : `<section class="duty-clock-panel"><button class="duty-nfc-zone" type="button" data-duty-clock-method="NFC" data-clock-type="${type}" ${canClock ? "" : "disabled"}><span><i data-lucide="radio-tower"></i></span><strong>使用手机贴至 NFC 打卡处</strong><small>点击模拟手机感应打卡</small></button><div class="duty-clock-methods"><button type="button" data-duty-clock-method="NFC" data-clock-type="${type}" ${canClock ? "" : "disabled"}><i data-lucide="smartphone-nfc"></i><span>NFC 打卡</span></button><button type="button" data-duty-clock-method="二维码" data-clock-type="${type}" ${canClock ? "" : "disabled"}><i data-lucide="scan-line"></i><span>扫码打卡</span></button></div>${!roleAllowed ? `<div class="duty-clock-blocked"><i data-lucide="info"></i>当前人员不能执行该打卡操作</div>` : !flowAllowed ? `<div class="duty-clock-blocked"><i data-lucide="lock-keyhole"></i>完成交接班后才能下班打卡</div>` : ""}</section>`}
  </div>`;
}

function completeDutyClock(type, method) {
  const person = selectedDutyPerson();
  const isClockIn = type === "clock-in";
  const role = dutyPersonRole(person);
  if ((isClockIn && role !== "available") || (!isClockIn && role !== "outgoing")) return showToast("当前人员不能执行该打卡操作");
  if (!isClockIn && dutyState.handover.state !== "completed") return showToast("完成交接班后才能下班打卡");
  const field = isClockIn ? "clockInAt" : "clockOutAt";
  if (person[field]) return showToast("当前人员已完成本次打卡");
  const time = nowText();
  person[field] = time;
  person[isClockIn ? "clockInMethod" : "clockOutMethod"] = method;
  const targetShift = isClockIn ? (dutyState.demoTimeMode === "on_duty" ? dutyShift(dutyState.currentShiftId) : dutyShift(dutyState.handover.incomingShiftId)) : dutyShift(dutyState.handover.outgoingShiftId);
  dutyState.clockRecords.unshift({ id: `dc-${Date.now()}`, type: isClockIn ? "上班打卡" : "下班打卡", person: person.name, personId: person.id, shift: targetShift.label, method, time, result: "正常" });
  if (isClockIn) {
    if (dutyState.handover.state === "completed") {
      if (!dutyState.activeOnDutyIds.includes(person.id)) dutyState.activeOnDutyIds.push(person.id);
    } else if (!dutyState.handover.incomingIds.includes(person.id)) {
      dutyState.handover.incomingIds.push(person.id);
    }
    syncDutyHandoverState();
  }
  render();
  showToast(`${person.name}${isClockIn ? "上班" : "下班"}打卡成功`);
}

const dutyCategoryMeta = {
  fire: { label: "火警告警", icon: "siren", tone: "red" },
  warning: { label: "设备预警", icon: "triangle-alert", tone: "orange" },
  device: { label: "设备运行状态", icon: "monitor-check", tone: "green" },
  manual: { label: "手工值班记录", icon: "clipboard-list", tone: "indigo" }
};

const dutyConfirmationCategories = [...Object.keys(dutyCategoryMeta), "equipment_check"];

function renderDutyHandover() {
  syncDutyHandoverState();
  const person = selectedDutyPerson();
  const role = dutyPersonRole(person);
  const handover = dutyState.handover;
  if (dutyState.demoTimeMode === "on_duty" && handover.state === "completed" && !handover.outgoingIds.length) {
    renderHeader("交接班", `${dutyShift(dutyState.currentShiftId).label} · 值班中`, "duty");
    setBottomNav("", false);
    appMain.innerHTML = `<div class="duty-handover-page"><div class="duty-flow-notice duty-flow-normal"><i data-lucide="shield-check"></i><div><strong>当前未到交接时间</strong><span>本班次正在值守，到下一班最早打卡时间后自动开启新一轮交接。</span></div></div><section class="duty-window-card"><small>下一轮交接</small><strong>${dutyState.currentShiftId === "day" ? "16:00 白班转夜班" : "06:00 夜班转白班"}</strong><p>交接开启后，当前在岗人员自动成为交班方。</p></section><button class="duty-complete-action" type="button" data-route="duty">返回值班首页</button></div>`;
    return;
  }
  if (handover.state === "completed") return renderDutyHandoverComplete();
  const confirmed = dutyPersonConfirmed(person);
  const canConfirm = !confirmed && ((role === "outgoing" && handover.state === "outgoing_confirming") || (role === "incoming" && handover.state === "incoming_confirming"));
  const canPrepareChecks = canConfirm && !handover.preparedBy && (role === "outgoing" || !handover.outgoingIds.length);
  const editableChecks = canPrepareChecks || (canConfirm && handover.preparedBy === person.id);
  const itemGroups = Object.keys(dutyCategoryMeta).map((category) => {
    const meta = dutyCategoryMeta[category];
    const items = handover.items.filter((item) => item.category === category);
    const categoryChecked = dutyCategoryConfirmed(person, category);
    return `<section class="duty-handover-group"><header><span class="${meta.tone}"><i data-lucide="${meta.icon}"></i></span><div><strong>${meta.label}</strong><small>系统自动同步 · ${items.length} 条</small></div><b class="duty-category-version">V${handover.categoryRevisions[category]}</b></header><div class="duty-handover-items">${items.map((item) => `<article class="duty-handover-item duty-auto-item"><div class="duty-item-heading"><div><strong>${esc(item.title)}</strong><small>${esc(item.meta)}</small></div><b class="duty-item-result ${item.result}">${esc(item.status)}</b></div>${item.note ? `<p>${esc(item.note)}</p>` : ""}</article>`).join("") || `<div class="duty-category-empty">本班次暂无${meta.label}，且无跨班未闭环事项</div>`}</div><label class="duty-category-ack"><input type="checkbox" data-duty-category-ack="${category}" ${categoryChecked ? "checked" : ""} ${canConfirm && !categoryChecked ? "" : "disabled"}><span><i data-lucide="check"></i></span><b>${categoryChecked ? "本人已确认该分类" : role === "incoming" ? "确认已查看并接收该分类" : "确认该分类数据无遗漏"}</b></label></section>`;
  }).join("");
  const equipmentChecked = dutyCategoryConfirmed(person, "equipment_check");
  const checkGroups = [...new Set(handover.checks.map((item) => item.group))].map((group) => `<div class="duty-check-group"><strong>${esc(group)}</strong>${handover.checks.filter((item) => item.group === group).map((item) => `<div class="duty-check-row"><span>${esc(item.title)}</span>${editableChecks ? `<label><input type="radio" name="check-${item.id}" value="normal" ${item.result === "normal" ? "checked" : ""}>正常</label><label><input type="radio" name="check-${item.id}" value="abnormal" ${item.result === "abnormal" ? "checked" : ""}>异常</label>` : `<b class="${item.result}">${item.result === "normal" ? "正常" : "异常"}</b>`}</div>`).join("")}</div>`).join("");
  const confirmedCount = handover.outgoingConfirmedIds.length + handover.incomingConfirmedIds.length;
  const participantCount = handover.outgoingIds.length + handover.incomingIds.length;
  const notice = !handover.incomingIds.length ? `<div class="duty-flow-notice"><i data-lucide="user-round-x"></i><div><strong>当前无人接班</strong><span>交班方可先确认交接数据，但至少一名接班人员到岗并完成接班后才能下班。</span></div></div>` : handover.incomingIds.length < dutyState.requiredHeadcount ? `<div class="duty-flow-notice"><i data-lucide="users-round"></i><div><strong>接班人数不足</strong><span>当前已打卡 ${handover.incomingIds.length}/${dutyState.requiredHeadcount} 人，交班方确认风险后可按实际到岗人数交接。</span></div></div>` : role === "incoming" && handover.state === "outgoing_confirming" ? `<div class="duty-flow-notice"><i data-lucide="hourglass"></i><div><strong>交班方尚未完成确认</strong><span>请耐心等待，无法继续时可进入“有异议”。</span></div></div>` : "";
  const exceptionAllowed = (role === "incoming" && handover.state !== "completed") || (role === "outgoing" && (handover.incomingIds.length < dutyState.requiredHeadcount || handover.state === "incoming_confirming"));
  const exceptionLabel = role === "outgoing" && !handover.incomingIds.length ? "无人接班" : role === "incoming" && handover.state === "incoming_confirming" ? "重新交班" : "有异议";
  renderHeader("交接班", `${person.name} · ${role === "incoming" ? "接班方" : role === "outgoing" ? "交班方" : "当前人员"}`, "duty");
  setBottomNav("", false);
  appMain.innerHTML = `<div class="duty-handover-page">
    <div class="duty-handover-teams">${dutyPeopleGroup("outgoing", "交班班次", dutyState.shifts.outgoing.label)}${dutyPeopleGroup("incoming", "接班班次", dutyState.shifts.incoming.label)}</div>
    ${notice}
    <div class="duty-section-label"><i></i>交接事项 <span>${confirmedCount}/${participantCount} 人已确认</span></div>
    ${itemGroups}
    <section class="duty-handover-group duty-device-checks"><header><span class="green"><i data-lucide="clipboard-check"></i></span><div><strong>消防设备检查</strong><small>${editableChecks ? "请填写本次检查结果" : "交班方检查结果"}</small></div><b class="duty-category-version">V${handover.categoryRevisions.equipment_check}</b></header>${checkGroups}<label class="duty-category-ack"><input type="checkbox" data-duty-category-ack="equipment_check" ${equipmentChecked ? "checked" : ""} ${canConfirm && !equipmentChecked ? "" : "disabled"}><span><i data-lucide="check"></i></span><b>${equipmentChecked ? "本人已确认设备检查" : role === "incoming" ? "确认已查看设备检查结果" : "确认设备检查结果"}</b></label></section>
    <section class="duty-exception-panel"><button type="button" data-route="duty/objection" ${exceptionAllowed ? "" : "disabled"}>${exceptionLabel}<i data-lucide="chevron-right"></i></button></section>
    <div class="duty-handover-submit"><button type="button" data-duty-confirm-handover ${canConfirm ? "" : "disabled"}>${confirmed ? `我已完成${role === "outgoing" ? "交班" : "接班"}确认` : !canConfirm ? "当前等待其他人员确认" : role === "incoming" ? "确认接收事项" : "确认交接事项"}</button></div>
  </div>`;
}

function confirmDutyHandover() {
  const person = selectedDutyPerson();
  const role = dutyPersonRole(person);
  const handover = dutyState.handover;
  const canConfirm = (role === "outgoing" && handover.state === "outgoing_confirming") || (role === "incoming" && handover.state === "incoming_confirming");
  if (!canConfirm || dutyPersonConfirmed(person)) return showToast("当前无需重复确认");
  const acknowledgements = [...document.querySelectorAll("[data-duty-category-ack]")];
  if (acknowledgements.length !== dutyConfirmationCategories.length || acknowledgements.some((input) => !input.checked)) return showToast("请确认全部交接分类");
  const editingChecks = !handover.preparedBy || handover.preparedBy === person.id;
  if (editingChecks && (role === "outgoing" || !handover.outgoingIds.length)) {
    for (const check of handover.checks) check.result = document.querySelector(`input[name="check-${check.id}"]:checked`)?.value || check.result;
    handover.preparedBy = person.id;
    handover.preparedAt = nowText();
  }
  const time = nowText();
  dutyConfirmationCategories.forEach((category) => {
    const ids = handover.categoryConfirmations[category][`${role}Ids`];
    if (!ids.includes(person.id)) ids.push(person.id);
  });
  const confirmedIds = role === "outgoing" ? handover.outgoingConfirmedIds : handover.incomingConfirmedIds;
  if (!confirmedIds.includes(person.id)) confirmedIds.push(person.id);
  handover.confirmations.push({ personId: person.id, name: person.name, side: role, time });
  syncDutyHandoverState();
  completeDutyHandoverIfReady(time);
  render();
  showToast(handover.state === "completed" ? "交接班已全部完成" : `${person.name}已完成${role === "outgoing" ? "交班" : "接班"}确认`);
}

function completeDutyHandoverIfReady(time = nowText()) {
  const handover = dutyState.handover;
  if (!handover.incomingIds.length || !allSideConfirmed("outgoing") || !allSideConfirmed("incoming")) return false;
  handover.state = "completed";
  handover.completedAt = time;
  dutyState.activeOnDutyIds = [...handover.incomingIds];
  dutyState.currentShiftId = handover.incomingShiftId;
  dutyState.lastCompletedAt = time;
  dutyState.demoTimeMode = "on_duty";
  dutyTimeModeSelect.value = "on_duty";
  const record = { id: `dr-${Date.now()}`, time, status: "completed", outgoingNames: dutyPeople("outgoing").map((item) => item.name), incomingNames: dutyPeople("incoming").map((item) => item.name), confirmations: cloneData(handover.confirmations), categoryRevisions: cloneData(handover.categoryRevisions), categoryConfirmations: cloneData(handover.categoryConfirmations), items: cloneData(handover.items), checks: cloneData(handover.checks), exceptions: cloneData(handover.exceptions.filter((item) => item.type !== "restart")), skippedOutgoingIds: [...handover.skippedOutgoingIds], skippedIncomingIds: [...handover.skippedIncomingIds] };
  dutyState.handoverRecords.unshift(record);
  dutyState.dutyRecords.unshift({ id: `dl-${Date.now()}`, title: "交接班完成", person: "系统记录", personId: "system", time, note: `交班人员 ${record.outgoingNames.join("、") || "无"}，接班人员 ${record.incomingNames.join("、")}。`, photos: [], recordType: "system" });
  return true;
}

function dutyExceptionMessages(record = dutyState.handover) {
  return (record.exceptions || []).filter((item) => item.type !== "restart").map((item) => item.message);
}

function renderDutyHandoverComplete() {
  const person = selectedDutyPerson();
  const role = dutyPersonRole(person);
  const handover = dutyState.handover;
  const exceptionMessages = dutyExceptionMessages();
  renderHeader("交接班", "交接班全部完成", "duty");
  setBottomNav("", false);
  appMain.innerHTML = `<div class="duty-complete-page"><section class="duty-complete-hero"><i data-lucide="circle-check-big"></i><h1>交接班全部完成</h1></section><section class="duty-complete-card"><div class="duty-record-people"><div><small>交班人</small><strong>${dutyPeople("outgoing").map((item) => item.name).join("、") || "当前无人交班"}</strong></div><i data-lucide="arrow-right"></i><div><small>接班人</small><strong>${dutyPeople("incoming").map((item) => item.name).join("、")}</strong></div></div><dl><div><dt>交班时间</dt><dd>${handover.preparedAt || handover.completedAt}</dd></div><div><dt>接班时间</dt><dd>${handover.completedAt}</dd></div></dl>${exceptionMessages.length ? `<div class="duty-complete-exceptions"><strong>交接异议</strong>${exceptionMessages.map((item) => `<p>${esc(item)}</p>`).join("")}</div>` : ""}</section><div class="duty-section-label"><i></i>交接事项</div>${Object.keys(dutyCategoryMeta).map((category) => { const meta = dutyCategoryMeta[category]; const items = handover.items.filter((item) => item.category === category); return `<section class="duty-complete-items"><h3><i data-lucide="${meta.icon}"></i>${meta.label}</h3>${items.map((item) => `<div><span>${esc(item.title)}</span><b class="${item.result}">${esc(item.status || (item.result === "normal" ? "正常" : "异常"))}</b></div>`).join("") || `<div><span>本班次无相关记录</span><b class="normal">已确认</b></div>`}</section>`; }).join("")}<button class="duty-complete-action" type="button" data-route="${role === "outgoing" && !person.clockOutAt ? "duty/clock-out" : "duty"}">${role === "outgoing" && !person.clockOutAt ? "打卡下班" : "返回首页"}</button></div>`;
}

function dutyActionSheet(action) {
  if (action === "add_record") {
    const person = selectedDutyPerson();
    if (dutyPersonRole(person) === "available" || person.clockOutAt) return showToast("当前人员不在值班状态");
    state.sheetPhotoLimit = 9;
    openSheet({ eyebrow: "值班记录", title: "新增值班记录", submitText: "提交", body: `<label class="form-field"><span class="form-label">记录内容 <em>必填</em></span><textarea id="dutyRecordNote" placeholder="请描述值班期间发现的问题或需要记录的事项。"></textarea></label>${uploadField()}`, onSubmit: () => {
      const note = document.querySelector("#dutyRecordNote").value.trim();
      if (!note) return showToast("请填写值班记录内容");
      dutyState.dutyRecords.unshift({ id: `dl-${Date.now()}`, title: `值班记录（${person.name}）`, person: person.name, personId: person.id, time: nowText(), note, photos: [...state.sheetPhotos], recordType: "manual" });
      refreshDutyHandoverCategory("manual");
      closeSheet();
      render();
      showToast("值班记录已保存");
    }});
  }
}

function renderDutyObjection() {
  const person = selectedDutyPerson();
  const role = dutyPersonRole(person);
  const handover = dutyState.handover;
  let action = "";
  let title = "当前没有可处理的交接异议";
  let description = "请返回交接班页面继续当前流程。";
  let button = "返回交接班";
  if (role === "incoming" && handover.state === "incoming_confirming") {
    action = "restart"; title = "接班人员不认可交接信息"; description = "交接信息有误，确认后将重新退回交班信息确认。"; button = "确认退回交班";
  } else if (role === "incoming" && (!handover.outgoingIds.length || !allSideConfirmed("outgoing"))) {
    action = "force_takeover"; title = "交班人员无法确认交接信息"; description = "上一班次人员无法完成交班确认，无法正常交班。"; button = "确认强制接班";
  } else if (role === "outgoing" && !handover.incomingIds.length) {
    title = "当前无人接班"; description = "下一班尚无人员完成上班打卡，请联系负责人协调人员到岗。至少一名接班人员完成接班前，本班人员不能下班。";
  } else if (role === "outgoing" && handover.incomingIds.length < dutyState.requiredHeadcount) {
    action = "force_handover_understaffed"; title = "接班人数不足"; description = `当前接班人数 ${handover.incomingIds.length}/${dutyState.requiredHeadcount}，无法满足定岗人数。`; button = "确认强制交班";
  } else if (role === "outgoing" && handover.state === "incoming_confirming" && !allSideConfirmed("incoming")) {
    action = "force_handover"; title = "接班人员无法确认交接信息"; description = "下一班次人员无法完成接班确认，无法正常接班。"; button = "确认强制交班";
  }
  renderHeader("有异议", "异常交接处理", "duty/handover");
  setBottomNav("", false);
  appMain.innerHTML = `<div class="duty-objection-page"><section class="duty-objection-summary"><span><i data-lucide="user-round-x"></i></span><div><strong>${esc(title)}</strong><p>${esc(description)}</p></div></section>${action ? `<section class="duty-objection-card"><div><span><i data-lucide="user-round-x"></i></span><div><h2>${esc(title)}</h2><p>${esc(description)} 请确认后继续当前交接流程。</p></div></div><div class="duty-risk-box"><strong><i data-lucide="triangle-alert"></i>风险提示</strong><p>强制操作将跳过对方未完成的确认，您需要自行检查设备状态。</p></div><label class="duty-risk-check"><input id="dutyRiskAck" type="checkbox"><span><i data-lucide="check"></i></span>我已知晓风险，确认进行${button.replace("确认", "")}操作</label></section><button class="duty-objection-submit" type="button" data-duty-objection-confirm="${action}">${button}</button>` : `<button class="duty-objection-submit neutral" type="button" data-route="duty/handover">${button}</button>`}</div>`;
}

function confirmDutyObjection(action) {
  if (!document.querySelector("#dutyRiskAck")?.checked) return showToast("请先确认已知晓风险");
  const person = selectedDutyPerson();
  const handover = dutyState.handover;
  const time = nowText();
  if (action === "restart") {
    handover.outgoingConfirmedIds = [];
    handover.incomingConfirmedIds = [];
    handover.skippedOutgoingIds = [];
    handover.skippedIncomingIds = [];
    handover.confirmations = [];
    handover.preparedBy = "";
    handover.preparedAt = "";
    handover.categoryConfirmations = emptyDutyCategoryConfirmations();
    handover.exceptions = [{ type: "restart", operatorId: person.id, affectedPersonIds: [], time, message: `${person.name}退回交接信息，双方重新确认。` }];
    handover.state = handover.outgoingIds.length ? "outgoing_confirming" : "waiting_arrival";
  } else if (action === "force_takeover") {
    const missing = handover.outgoingIds.filter((id) => !handover.outgoingConfirmedIds.includes(id));
    handover.skippedOutgoingIds = [...new Set([...handover.skippedOutgoingIds, ...missing])];
    const names = missing.map(dutyPersonById).filter(Boolean).map((item) => item.name).join("、") || "当前无人交班";
    handover.exceptions.push({ type: "force_takeover", operatorId: person.id, affectedPersonIds: missing, time, message: `交班人员（${names}）未确认交班信息，已由${person.name}强制接班。` });
    handover.state = "incoming_confirming";
  } else {
    const understaffed = action === "force_handover_understaffed";
    if (understaffed && !handover.incomingIds.length) return showToast("当前无人接班，不能结束本班值守");
    const missing = understaffed ? [] : handover.incomingIds.filter((id) => !handover.incomingConfirmedIds.includes(id));
    handover.skippedIncomingIds = [...new Set([...handover.skippedIncomingIds, ...missing])];
    const names = missing.map(dutyPersonById).filter(Boolean).map((item) => item.name).join("、");
    const message = understaffed ? `接班人数不足定岗人数，已由${person.name}确认按实际到岗人员交班。` : `接班人员（${names}）未确认接班信息，已由${person.name}强制交班。`;
    handover.exceptions.push({ type: "force_handover", reason: understaffed ? "understaffed" : "unconfirmed", operatorId: person.id, affectedPersonIds: missing, time, message });
    if (understaffed) handover.state = "outgoing_confirming";
  }
  completeDutyHandoverIfReady(time);
  go("duty/handover");
  showToast(action === "restart" ? "交接已退回，请重新确认" : "强制交接条件已确认");
}

function dutyBusinessRecords() {
  const fireRecords = fireAlarms.map((item) => ({ id: `fire-${item.id}`, businessId: item.id, recordType: "fire", title: `设备告警 · ${item.device}`, person: item.operator, time: item.operationHistory?.[0]?.time || item.time, note: `${item.title} · ${fireStateLabels[item.state]}`, targetRoute: `fire/${item.id}`, source: item }));
  const warningRecords = warnings.map((item) => ({ id: `warning-${item.id}`, businessId: item.id, recordType: "warning", title: `设备预警 · ${item.device}`, person: item.assignee, time: item.handlingHistory?.[0]?.time || item.updated || item.firstTime, note: `${item.title} · ${warningStateLabels[item.state]}`, targetRoute: `warning/${item.id}`, source: item }));
  const faultRecords = faults.map((item) => ({ id: `device-${item.id}`, businessId: item.id, recordType: "device", title: `设备运行 · ${item.device}`, person: item.assignee, time: item.handlingHistory?.[0]?.time || item.updated || item.firstTime, note: `${item.title} · ${faultStateLabels[item.state]}`, targetRoute: `fault/${item.id}`, source: item }));
  return [...fireRecords, ...warningRecords, ...faultRecords, ...dutyState.dutyRecords];
}

function renderDutyRecords(kind, id = "") {
  const config = {
    logs: { title: "值班记录", subtitle: "火警、预警、设备运行及手工记录", icon: "clipboard-list", records: dutyBusinessRecords() },
    "handover-records": { title: "交接记录", subtitle: "已完成交接档案", icon: "file-check-2", records: dutyState.handoverRecords }
  }[kind];
  if (!config) return go("duty");
  const record = id ? config.records.find((item) => item.id === id) : null;
  if (id) return renderDutyRecordDetail(kind, record);
  const date = dutyDateInfo(state.dutyRecordDateOffset);
  const records = config.records.filter((item) => item.time.startsWith(date.date)).sort((a, b) => b.time.localeCompare(a.time));
  renderHeader(config.title, config.subtitle, "duty");
  setBottomNav("", false);
  const cards = records.map((item) => {
    if (kind === "logs") {
      const meta = { fire: ["siren", "red"], warning: ["triangle-alert", "orange"], device: ["monitor-check", "green"], manual: ["clipboard-list", "indigo"], system: ["handshake", "blue"] }[item.recordType] || ["clipboard-list", "indigo"];
      return `<button class="duty-record-card" type="button" data-route="duty/${kind}/${item.id}"><span class="duty-record-icon ${meta[1]}"><i data-lucide="${meta[0]}"></i></span><div><h3>${esc(item.title)}</h3><p>${esc(item.person || "系统自动")} · ${item.time.slice(11)}</p><small>${esc(item.note)}</small></div>${item.photos?.length ? `<b class="duty-record-photo-count"><i data-lucide="image"></i>${item.photos.length}</b>` : ""}</button>`;
    }
    const exceptionCount = (item.exceptions || []).filter((entry) => entry.type !== "restart").length;
    return `<button class="duty-record-card" type="button" data-route="duty/${kind}/${item.id}"><span class="duty-record-icon green"><i data-lucide="handshake"></i></span><div><h3>${item.outgoingNames.join("、") || "无人交班"} → ${item.incomingNames.join("、")}</h3><p>${item.time.slice(11)} · ${item.confirmations.length} 人确认</p><small>${exceptionCount ? `${exceptionCount} 条交接异议` : "双方已完成全部交接确认"}</small></div><b class="duty-record-state ${exceptionCount ? "pending" : "done"}">${exceptionCount ? "强制完成" : "已交接"}</b></button>`;
  }).join("");
  const summary = kind === "logs" ? `<div class="duty-record-overview"><small>今日值班汇总</small><div><span><strong>${records.filter((item) => item.recordType === "fire").length}</strong>火警告警</span><span><strong>${records.filter((item) => item.recordType === "warning").length}</strong>设备预警</span><span><strong>${records.filter((item) => item.recordType === "device").length}</strong>设备运行</span></div></div>` : "";
  appMain.innerHTML = `<div class="duty-record-page"><div class="duty-date-nav"><button type="button" data-duty-date-shift="-1" aria-label="前一天"><i data-lucide="chevron-left"></i></button><div><strong>${date.label}</strong><span>${date.weekday}</span></div><button type="button" data-duty-date-shift="1" aria-label="后一天" ${state.dutyRecordDateOffset >= 0 ? "disabled" : ""}><i data-lucide="chevron-right"></i></button></div>${summary}<div class="duty-section-label"><i></i>${config.title}<span>${records.length} 条</span></div><div class="duty-record-list">${cards || `<div class="duty-record-empty"><i data-lucide="calendar-x"></i><strong>当天暂无记录</strong><span>可切换日期查看历史数据</span></div>`}</div></div>`;
}

function renderDutyRecordDetail(kind, record) {
  if (!record) return go(`duty/${kind}`);
  const title = kind === "logs" ? "值班记录详情" : "查看交接项";
  renderHeader(title, record.time, `duty/${kind}`);
  setBottomNav("", false);
  let body = "";
  if (kind === "logs") {
    if (["fire", "warning", "device"].includes(record.recordType)) {
      const labels = { fire: "设备告警", warning: "设备预警", device: "设备运行" };
      const states = { fire: fireStateLabels[record.source.state], warning: warningStateLabels[record.source.state], device: faultStateLabels[record.source.state] };
      body = `<section class="duty-detail-card align-left"><span class="duty-detail-icon indigo"><i data-lucide="${record.recordType === "fire" ? "siren" : record.recordType === "warning" ? "triangle-alert" : "monitor-check"}"></i></span><h2>${esc(labels[record.recordType])}</h2><p>${record.time}</p><div class="duty-detail-note">${esc(record.note)}</div><dl><div><dt>当前状态</dt><dd>${esc(states[record.recordType])}</dd></div><div><dt>记录来源</dt><dd>业务模块自动同步</dd></div></dl><button class="duty-linked-record" type="button" data-route="${record.targetRoute}">查看关联记录<i data-lucide="chevron-right"></i></button></section>`;
    } else body = `<section class="duty-detail-card align-left"><span class="duty-detail-icon indigo"><i data-lucide="clipboard-list"></i></span><h2>${esc(record.title)}</h2><p>${esc(record.person)} · ${record.time}</p><div class="duty-detail-note">${esc(record.note)}</div>${record.photos?.length ? `<div class="photo-history">${record.photos.map((photo) => `<button type="button" data-photo-view="${photo}"><img src="${photo}" alt="值班记录照片" /></button>`).join("")}</div>` : `<div class="duty-no-photo">未上传现场照片</div>`}</section>`;
  } else {
    const exceptions = (record.exceptions || []).filter((item) => item.type !== "restart");
    body = `<section class="duty-detail-card align-left"><span class="duty-detail-icon green"><i data-lucide="handshake"></i></span><h2>交接班已完成</h2><p>${record.time}</p><div class="duty-record-people"><div><small>交班人员</small><strong>${record.outgoingNames.join("、") || "当前无人交班"}</strong></div><i data-lucide="arrow-right"></i><div><small>接班人员</small><strong>${record.incomingNames.join("、")}</strong></div></div>${exceptions.length ? `<div class="duty-complete-exceptions"><strong>交接异议</strong>${exceptions.map((item) => `<p>${esc(item.message)}</p>`).join("")}</div>` : ""}</section><section class="duty-detail-section"><h3>人员确认时间</h3>${record.confirmations.map((item) => `<div class="duty-confirm-row"><span>${esc(item.name)}</span><b>${item.side === "outgoing" ? "交班" : "接班"}</b><time>${item.time.slice(11)}</time></div>`).join("")}</section><section class="duty-detail-section"><h3>交接事项</h3>${record.items.map((item) => `<article class="duty-detail-item"><div><strong>${esc(item.title)}</strong><small>${esc(item.meta)}</small></div><b class="${item.result}">${esc(item.status || (item.result === "normal" ? "正常" : "异常"))}</b>${item.note ? `<p>${esc(item.note)}</p>` : ""}</article>`).join("")}</section>${record.checks?.length ? `<section class="duty-detail-section"><h3>消防设备检查</h3>${record.checks.map((item) => `<div class="duty-confirm-row"><span>${esc(item.title)}</span><b>${item.result === "normal" ? "正常" : "异常"}</b><time>${esc(item.group)}</time></div>`).join("")}</section>` : ""}`;
  }
  appMain.innerHTML = `<div class="duty-record-detail">${body}</div>`;
}

function renderNotifications() {
  const unread = unreadNotificationCount();
  const records = [...appNotifications]
    .filter((item) => state.notificationReadFilter === "all" || !item.read)
    .filter((item) => state.notificationTypeFilter === "all" || item.category === state.notificationTypeFilter)
    .sort((a, b) => b.time.localeCompare(a.time));
  const readAll = `<button class="icon-control" type="button" data-notifications-read-all aria-label="全部已读" title="全部已读" ${unread ? "" : "disabled"}><i data-lucide="check-check"></i></button>`;
  renderHeader("消息通知", `${unread} 条未读`, state.notificationBackRoute || "applications", readAll);
  setBottomNav("", false);
  appMain.innerHTML = `<div class="notification-page">
    <section class="notification-overview"><span class="notification-overview-icon"><i data-lucide="bell-ring"></i></span><div><small>机构消息中心</small><h2>${unread ? `${unread} 条通知待查看` : "所有通知均已查看"}</h2></div></section>
    <div class="notification-status-switch" role="group" aria-label="通知状态"><button type="button" data-notification-read-filter="all" class="${state.notificationReadFilter === "all" ? "active" : ""}">全部</button><button type="button" data-notification-read-filter="unread" class="${state.notificationReadFilter === "unread" ? "active" : ""}">未读 ${unread}</button></div>
    <div class="filter-row notification-type-filter">${[["all", "全部类型"], ["fire", "火警"], ["warning", "预警"], ["fault", "故障"]].map(([value, label]) => `<button class="filter-chip ${state.notificationTypeFilter === value ? "active" : ""}" type="button" data-notification-type-filter="${value}">${label}</button>`).join("")}</div>
    <div class="notification-list">${records.map((item) => {
      const meta = notificationCategoryMeta[item.category];
      return `<button class="notification-item ${item.read ? "" : "unread"}" type="button" data-notification-id="${item.id}"><span class="notification-icon ${meta.tone}"><i data-lucide="${meta.icon}"></i></span><span class="notification-content"><span class="notification-heading"><strong>${esc(item.title)}</strong>${item.read ? "" : `<i class="notification-unread-dot"></i>`}</span><span class="notification-summary">${esc(item.summary)}</span><span class="notification-meta"><em>${meta.label}</em><time>${item.time.slice(5, 16)}</time></span></span><i class="notification-chevron" data-lucide="chevron-right"></i></button>`;
    }).join("") || `<div class="notification-empty"><i data-lucide="inbox"></i><strong>暂无符合条件的通知</strong><span>可以切换状态或类型查看其他消息</span></div>`}</div>
  </div>`;
}

function renderFireList() {
  renderHeader("火警告警", "设备火警统一处置", "applications");
  setBottomNav("", false);
  const records = fireAlarms.filter((item) => state.fireFilter === "all" || (state.fireFilter === "open" ? !["reset", "false"].includes(item.state) : ["reset", "false"].includes(item.state)));
  appMain.innerHTML = `<section class="hero-band fire"><small>今日设备火警</small><h2>${fireOpenCount()} 条待处置</h2><div class="hero-stats"><div><strong>${fireAlarms.filter((item) => item.level === 1).length}</strong><span>一级火警</span></div><div><strong>${fireAlarms.filter((item) => item.state === "processing").length}</strong><span>处置中</span></div><div><strong>${fireAlarms.filter((item) => ["reset", "false"].includes(item.state)).length}</strong><span>已闭环</span></div></div></section>
    <div class="filter-row"><button class="filter-chip ${state.fireFilter === "open" ? "active" : ""}" data-fire-filter="open">待处理</button><button class="filter-chip ${state.fireFilter === "closed" ? "active" : ""}" data-fire-filter="closed">已完成</button><button class="filter-chip ${state.fireFilter === "all" ? "active" : ""}" data-fire-filter="all">全部</button></div>
    <div class="record-list">${records.map((item) => `<button class="record-card" type="button" data-route="fire/${item.id}"><div class="record-card-head"><span class="severity-mark ${item.level === 2 ? "orange" : ""}"><i data-lucide="${item.level === 1 ? "siren" : "flame"}"></i></span><div><h3>${esc(item.title)}</h3><p>${esc(item.location)} · ${esc(item.device)}</p></div><span class="state-pill ${item.state}">${fireStateLabels[item.state]}</span></div><div class="record-card-meta"><span><i data-lucide="clock-3"></i>${item.time.slice(5,16)}</span><span>${item.operator}</span></div></button>`).join("") || `<div class="empty-search">当前筛选下暂无记录</div>`}</div>`;
}

function historyHtml(history = []) {
  if (!history.length) return `<div class="note-box">暂无人工操作记录</div>`;
  return `<div class="timeline">${history.map((item) => `<div class="timeline-item"><span class="timeline-dot"></span><div><strong>${fireActionLabels[item.action] || (item.action === "confirm_clear" ? "确认通道畅通" : item.action)}</strong><time>${esc(item.time)} · ${esc(item.operator)}</time><p>${esc(item.description || item.note || "")}</p>${item.photos?.length ? `<div class="photo-history">${item.photos.map((photo) => `<button type="button" data-photo-view="${photo}"><img src="${photo}" alt="处置照片" /></button>`).join("")}</div>` : ""}</div></div>`).join("")}</div>`;
}

function fireActions(alarm) {
  if (["reset", "false"].includes(alarm.state)) return "";
  const assign = `<button type="button" data-fire-action="assign" data-id="${alarm.id}">人员指派</button>`;
  if (alarm.state === "pending") return `<div class="fixed-actions">${assign}<button class="danger" type="button" data-fire-action="false" data-id="${alarm.id}">误报消警</button><button class="primary" type="button" data-fire-action="confirm" data-id="${alarm.id}">确认警情</button></div>`;
  if (alarm.state === "confirmed") return `<div class="fixed-actions">${assign}<button class="primary" type="button" data-fire-action="dispose" data-id="${alarm.id}">警情处置</button></div>`;
  return `<div class="fixed-actions">${assign}<button class="primary" type="button" data-fire-action="reset" data-id="${alarm.id}">设备复位</button></div>`;
}

function renderFireDetail(id) {
  const alarm = fireAlarms.find((item) => item.id === id);
  if (!alarm) return go("fire");
  renderHeader("火警详情", alarm.no, detailBackRoute("fire", `fire/${alarm.id}`));
  setBottomNav("", false);
  const deadline = alarm.assignmentDeadlineAt ? `接单截止 ${shortDate(alarm.assignmentDeadlineAt)}${isOverdue(alarm) ? " · 已超时" : ""}` : "尚未指派处置人员";
  appMain.innerHTML = `<div class="detail-page"><section class="detail-summary"><div class="detail-summary-head"><span> ${alarm.level} 级火警</span><span class="state-pill ${alarm.state}">${fireStateLabels[alarm.state]}</span></div><h2>${esc(alarm.title)}</h2><p>${esc(alarm.location)} · ${esc(alarm.device)}</p><div class="deadline ${isOverdue(alarm) ? "overdue" : ""}"><i data-lucide="timer"></i>${deadline}</div></section>
    <section class="detail-section"><h3><i data-lucide="clipboard-list"></i>报警信息</h3><div class="info-grid"><div><span>发生时间</span><strong>${alarm.time}</strong></div><div><span>处置人员</span><strong>${alarm.operator}</strong></div><div><span>事件类型</span><strong>${alarm.eventType}</strong></div><div><span>设备通道</span><strong>${alarm.channel}</strong></div><div><span>当前温度</span><strong>${alarm.temperature == null ? "--" : `${alarm.temperature}°C`}</strong></div><div><span>报警阈值</span><strong>${alarm.threshold == null ? "--" : `${alarm.threshold}°C`}</strong></div></div></section>
    <section class="detail-section"><h3><i data-lucide="camera"></i>现场证据</h3>${alarm.media ? `<div class="evidence-grid"><div class="evidence-frame"><span>可见光抓拍 · ${alarm.time.slice(11)}</span></div><div class="evidence-frame thermal"><span>热成像 · 最高 ${alarm.temperature}°C</span></div></div>` : `<div class="note-box">消防主机数据事件无设备抓拍，可在处置时补充现场照片。</div>`}</section>
    <section class="detail-section"><h3><i data-lucide="message-square-text"></i>警情说明</h3><div class="note-box">${esc(alarm.note)}</div></section>
    <section class="detail-section"><h3><i data-lucide="history"></i>操作历史</h3>${historyHtml(alarm.operationHistory)}</section></div>${fireActions(alarm)}`;
}

function warningRiskLabel(risk) {
  return { high: "高风险", medium: "中风险", low: "低风险" }[risk] || "预警";
}

function renderWarningList() {
  renderHeader("设备预警", "设备运行风险核查", "applications");
  setBottomNav("", false);
  const records = warnings.filter((item) => state.warningFilter === "all" || (state.warningFilter === "open" ? item.state !== "recovered" : item.state === "recovered"));
  appMain.innerHTML = `<section class="hero-band warning"><small>当前设备运行风险</small><h2>${warningOpenCount()} 条预警待闭环</h2><div class="hero-stats"><div><strong>${warnings.filter((item) => item.risk === "high" && item.state !== "recovered").length}</strong><span>高风险</span></div><div><strong>${warnings.filter((item) => item.state === "pending").length}</strong><span>待核查</span></div><div><strong>${warnings.filter((item) => item.state === "checking").length}</strong><span>核查中</span></div></div></section>
    <div class="filter-row"><button class="filter-chip ${state.warningFilter === "open" ? "active" : ""}" data-warning-filter="open">待处理</button><button class="filter-chip ${state.warningFilter === "closed" ? "active" : ""}" data-warning-filter="closed">已恢复</button><button class="filter-chip ${state.warningFilter === "all" ? "active" : ""}" data-warning-filter="all">全部</button></div>
    <div class="record-list">${records.map((item) => `<button class="record-card" type="button" data-route="warning/${item.id}"><div class="record-card-head"><span class="severity-mark ${item.risk === "high" ? "" : item.risk === "medium" ? "orange" : "blue"}"><i data-lucide="${warningTypeMeta[item.type]?.[1] || "triangle-alert"}"></i></span><div><h3>${esc(item.title)}</h3><p>${esc(item.point)} · ${esc(item.device)}</p></div><span class="state-pill ${item.state}">${warningStateLabels[item.state]}</span></div><div class="warning-reading"><span>${warningRiskLabel(item.risk)}</span><strong>${esc(item.value)}</strong><small>阈值 ${esc(item.threshold)}</small></div><div class="record-card-meta"><span><i data-lucide="clock-3"></i>${item.firstTime.slice(5,16)}</span><span>${item.assignee}</span></div></button>`).join("") || `<div class="empty-search">当前筛选下暂无记录</div>`}</div>`;
}

function warningTimeline(warning) {
  const items = [{ title: "预警上报", time: warning.firstTime, note: `当前值 ${warning.value}，预警阈值 ${warning.threshold}。` }, ...warning.handlingHistory.map((item) => ({ title: { assign: "人员指派", start_check: "开始核查", recover: "确认恢复" }[item.action], time: item.time, note: `${item.operator}：${item.note}` }))];
  return `<div class="timeline">${items.sort((a, b) => a.time.localeCompare(b.time)).map((item) => `<div class="timeline-item"><span class="timeline-dot"></span><div><strong>${item.title}</strong><time>${item.time}</time><p>${esc(item.note)}</p></div></div>`).join("")}</div>`;
}

function warningActions(warning) {
  if (warning.state === "recovered") return "";
  if (warning.state === "checking") return `<div class="fixed-actions"><button type="button" data-warning-action="assign" data-id="${warning.id}">重新指派</button><button class="primary" type="button" data-warning-action="recover" data-id="${warning.id}">确认恢复</button></div>`;
  return `<div class="fixed-actions"><button type="button" data-warning-action="assign" data-id="${warning.id}">人员指派</button><button class="primary" type="button" data-warning-action="check" data-id="${warning.id}">开始核查</button></div>`;
}

function renderWarningDetail(id) {
  const warning = warnings.find((item) => item.id === id);
  if (!warning) return go("warning");
  renderHeader("预警详情", warning.no, detailBackRoute("warning", `warning/${warning.id}`));
  setBottomNav("", false);
  const deadline = warning.assignmentDeadlineAt ? `接单截止 ${shortDate(warning.assignmentDeadlineAt)}${isOverdue(warning) ? " · 已超时" : ""}` : "尚未指派核查人员";
  appMain.innerHTML = `<div class="detail-page"><section class="detail-summary warning"><div class="detail-summary-head"><span>${warningRiskLabel(warning.risk)} · ${warningTypeMeta[warning.type]?.[0] || "设备预警"}</span><span class="state-pill ${warning.state}">${warningStateLabels[warning.state]}</span></div><h2>${esc(warning.title)}</h2><p>${esc(warning.point)} · ${esc(warning.device)}</p><div class="deadline ${isOverdue(warning) ? "overdue" : ""}"><i data-lucide="timer"></i>${deadline}</div></section>
    <section class="detail-section"><h3><i data-lucide="gauge"></i>实时预警数据</h3><div class="warning-metric"><div><span>当前值</span><strong>${esc(warning.value)}</strong></div><div><span>预警阈值</span><strong>${esc(warning.threshold)}</strong></div></div></section>
    <section class="detail-section"><h3><i data-lucide="clipboard-list"></i>预警信息</h3><div class="info-grid"><div><span>预警编号</span><strong>${warning.no}</strong></div><div><span>风险等级</span><strong>${warningRiskLabel(warning.risk)}</strong></div><div><span>首次发生</span><strong>${warning.firstTime}</strong></div><div><span>最近更新</span><strong>${warning.updated}</strong></div><div><span>设备编号</span><strong>${warning.serial}</strong></div><div><span>核查人员</span><strong>${warning.assignee}</strong></div></div></section>
    <section class="detail-section"><h3><i data-lucide="message-square-text"></i>当前说明</h3><div class="note-box">${esc(warning.note)}</div></section>
    <section class="detail-section"><h3><i data-lucide="history"></i>核查时间线</h3>${warningTimeline(warning)}</section></div>${warningActions(warning)}`;
}

function warningAction(warning, action) {
  if (action === "assign") return assignmentSheet(warning, "warning");
  if (action === "check") {
    if (warning.assignee === "待指派") {
      assignmentSheet(warning, "warning");
      return showToast("请先指派预警核查人员");
    }
    warning.state = "checking";
    warning.checkedAt = nowText();
    warning.note = "已开始核查设备状态、当前读数和现场环境。";
    warning.handlingHistory.push({ action: "start_check", operator: currentUser, time: warning.checkedAt, note: warning.note });
    publishNotification("warning", "status_changed", "预警已开始核查", `${warning.title}由${currentUser}开始核查。`, `warning/${warning.id}`);
    refreshDutyHandoverCategory("warning");
    render();
    return showToast("预警已进入核查流程");
  }
  if (action === "recover") {
    openSheet({ eyebrow: "预警核查记录", title: "确认设备恢复", submitText: "提交并完成闭环", body: `${eventSummary(warning.title, `${warning.point} · ${warning.no}`, "circle-check")}<div class="warning-metric compact"><div><span>当前值</span><strong>${esc(warning.value)}</strong></div><div><span>预警阈值</span><strong>${esc(warning.threshold)}</strong></div></div><label class="form-field"><span class="form-label">恢复说明 <em>必填</em></span><textarea id="warningNote" placeholder="请说明现场核查、处理措施和设备恢复情况。"></textarea></label>`, onSubmit: () => {
      const note = document.querySelector("#warningNote").value.trim();
      if (!note) return showToast("请填写恢复说明");
      warning.state = "recovered";
      warning.recoveredAt = nowText();
      warning.updated = warning.recoveredAt;
      warning.note = note;
      warning.handlingHistory.push({ action: "recover", operator: currentUser, time: warning.recoveredAt, note });
      publishNotification("warning", "closed", "设备预警已恢复", `${warning.title}已完成核查并闭环。`, `warning/${warning.id}`);
      refreshDutyHandoverCategory("warning");
      closeSheet(); render(); showToast("设备预警已恢复并闭环");
    }});
  }
}

function eventSummary(title, meta, icon = "siren") {
  return `<div class="form-event"><i data-lucide="${icon}"></i><div><strong>${esc(title)}</strong><span>${esc(meta)}</span></div></div>`;
}

function openSheet({ eyebrow = "操作记录", title, submitText, danger = false, body, onSubmit }) {
  state.sheetPhotos = [];
  state.sheetSubmit = onSubmit;
  document.querySelector("#sheetEyebrow").textContent = eyebrow;
  document.querySelector("#sheetTitle").textContent = title;
  sheetBody.innerHTML = body;
  sheetBody.scrollTop = 0;
  const submit = document.querySelector("#sheetSubmit");
  submit.textContent = submitText;
  submit.className = `primary-command ${danger ? "danger" : ""}`;
  document.querySelector("#sheetLayer").hidden = false;
  document.body.style.overflow = "hidden";
  refreshIcons(document.querySelector("#sheetLayer"));
}

function closeSheet() {
  document.querySelector("#sheetLayer").hidden = true;
  document.body.style.overflow = "";
  state.sheetSubmit = null;
  state.sheetPhotos = [];
  state.sheetPhotoLimit = 6;
}

function uploadField() {
  return `<div class="form-field"><span class="form-label">现场照片 <em>选填，最多 ${state.sheetPhotoLimit} 张</em></span><div class="photo-source-grid"><button type="button" data-photo-source="camera"><i data-lucide="camera"></i><span>拍照</span></button><button type="button" data-photo-source="gallery"><i data-lucide="images"></i><span>从相册选择</span></button></div><input class="photo-source-input" id="sheetCameraPhotos" data-photo-input type="file" accept="image/*" capture="environment" /><input class="photo-source-input" id="sheetGalleryPhotos" data-photo-input type="file" accept="image/jpeg,image/png,image/webp" multiple /><small class="field-hint">JPG、PNG、WebP，单张不超过 10 MB</small><span class="photo-preview-grid" id="sheetPhotoPreview"></span></div>`;
}

function renderSheetPhotos() {
  const wrap = document.querySelector("#sheetPhotoPreview");
  if (!wrap) return;
  wrap.innerHTML = state.sheetPhotos.map((photo, index) => `<span class="photo-preview"><img src="${photo}" alt="待上传照片 ${index + 1}" /><button type="button" data-photo-remove="${index}" aria-label="删除照片"><i data-lucide="x"></i></button></span>`).join("");
  document.querySelectorAll("[data-photo-source]").forEach((button) => { button.disabled = state.sheetPhotos.length >= state.sheetPhotoLimit; });
  refreshIcons(wrap);
}

function assignmentSheet(item, type) {
  const isFire = type === "fire";
  const isWarning = type === "warning";
  const options = isFire ? [[1, "1 分钟"], [3, "3 分钟"], [5, "5 分钟"]] : isWarning ? [[5, "5 分钟"], [10, "10 分钟"], [15, "15 分钟"]] : [[30, "30 分钟"], [240, "4 小时"], [1440, "24 小时"]];
  const defaultValue = isFire ? 1 : isWarning ? 5 : 240;
  const meta = isFire ? `${item.location} · ${item.no}` : `${item.point} · ${item.no}`;
  openSheet({
    eyebrow: isFire ? "火警任务" : isWarning ? "预警核查任务" : "设备故障任务", title: isFire ? "指派火警处置人员" : isWarning ? "指派预警核查人员" : "指派设备处理人员", submitText: "确认指派",
    body: `${eventSummary(item.title, meta, isFire ? "siren" : isWarning ? "triangle-alert" : "wrench")}<label class="form-field"><span class="form-label">${isWarning ? "核查" : "处置"}人员 <em>必选</em></span><select id="assignPerson"><option value="">请选择人员</option>${assignees.map((name) => `<option>${name}</option>`).join("")}</select></label>
      <label class="form-field"><span class="form-label">接单时限</span><select id="assignWindow">${options.map(([value, label]) => `<option value="${value}" ${value === defaultValue ? "selected" : ""}>${label}</option>`).join("")}</select><span class="deadline-preview"><i data-lucide="timer"></i><span id="deadlinePreview">预计截止 ${shortDate(assignmentDeadline(defaultValue))}</span></span><small class="field-hint">超过接单时限需升级通知消防主管，当前演示版不发送真实通知。</small></label>
      <label class="form-field"><span class="form-label">任务要求</span><textarea id="assignNote">${isFire ? "请立即查看现场图片与前后录像，确认后第一时间反馈警情。" : isWarning ? "请核查设备状态、当前读数和预警阈值，并及时反馈核查结果。" : "请检查设备供电、网络与数据上报状态，处理后及时反馈。"}</textarea></label>`,
    onSubmit: () => {
      const person = document.querySelector("#assignPerson").value;
      const minutes = Number(document.querySelector("#assignWindow").value);
      const note = document.querySelector("#assignNote").value.trim();
      if (!person) return showToast("请选择处置人员");
      item.assignee = person;
      if (isFire) item.operator = person;
      item.assignedAt = new Date().toISOString();
      item.assignmentWindowMinutes = minutes;
      item.assignmentDeadlineAt = assignmentDeadline(minutes);
      if (isFire) item.operationHistory.unshift({ action: "assign", operator: currentUser, time: nowText(), description: `指派${person}处置；${note}`, photos: [] });
      else if (isWarning) item.handlingHistory.unshift({ action: "assign", operator: currentUser, time: nowText(), note: `指派${person}核查；${note}` });
      else {
        if (item.state === "pending") item.state = "processing";
        item.handlingHistory.unshift({ action: "assign", operator: currentUser, operatorSide: "机构端", time: nowText(), note: `指派${person}处理；${note}` });
      }
      const category = isFire ? "fire" : isWarning ? "warning" : "fault";
      const taskName = isFire ? "火警处置任务" : isWarning ? "预警核查任务" : "故障处理任务";
      const windowLabel = options.find(([value]) => value === minutes)?.[1] || `${minutes} 分钟`;
      publishNotification(category, "assigned", `${taskName}已指派`, `${item.title}已指派给${person}，接单时限：${windowLabel}。`, `${category}/${item.id}`);
      refreshDutyHandoverCategory(isFire ? "fire" : isWarning ? "warning" : "device");
      closeSheet(); render(); showToast(`已指派给${person}`);
    }
  });
}

function fireActionSheet(alarm, action) {
  const config = {
    confirm: ["确认警情", "确认并进入已确认", "请说明现场核实情况和警情依据。", false],
    false: ["误报消警", "确认误报并消警", "请说明误报原因和现场核实结果。", true],
    dispose: ["警情处置", "提交处置结果", "请填写已采取的灭火、疏散或断电措施。", false],
    reset: ["设备复位", "确认设备复位", "请说明现场复核和设备复位结果。", false]
  }[action];
  openSheet({
    eyebrow: "火警操作记录", title: config[0], submitText: config[1], danger: config[3],
    body: `${eventSummary(alarm.title, `${alarm.location} · ${alarm.no}`)}<label class="form-field"><span class="form-label">处置说明 <em>必填</em></span><textarea id="actionDescription" placeholder="${config[2]}"></textarea><small class="field-hint">说明将写入本次操作历史。</small></label>${uploadField()}`,
    onSubmit: () => {
      const description = document.querySelector("#actionDescription").value.trim();
      if (!description) return showToast("请填写处置说明");
      const nextState = { confirm: "confirmed", false: "false", dispose: "processing", reset: "reset" }[action];
      alarm.state = nextState;
      alarm.operator = currentUser;
      alarm.note = description;
      alarm.operationHistory.unshift({ action, operator: currentUser, time: nowText(), description, photos: [...state.sheetPhotos] });
      const closed = ["false", "reset"].includes(action);
      publishNotification("fire", closed ? "closed" : "status_changed", `${config[0]}已提交`, `${alarm.title}：${description}`, `fire/${alarm.id}`);
      refreshDutyHandoverCategory("fire");
      closeSheet(); render(); showToast(`${config[0]}已提交`);
    }
  });
}

function renderVideoList() {
  const module = videoModules[state.videoModule];
  const channel = module.channels.find((item) => item.id === state.videoChannels[state.videoModule]) || module.channels[0];
  renderHeader("视频监控", module.capability, "applications");
  setBottomNav("", false);
  appMain.innerHTML = `<section class="hero-band video"><small>视频智能分析</small><h2>${module.title}</h2><div class="hero-stats"><div><strong>${module.channels.length}</strong><span>监控通道</span></div><div><strong>${module.records.filter((item) => !["closed"].includes(item.state)).length}</strong><span>当前事件</span></div><div><strong>100%</strong><span>视频在线率</span></div></div></section>
    <div class="module-tabs">${Object.entries(videoModules).map(([key, item]) => `<button class="module-tab ${state.videoModule === key ? "active" : ""}" type="button" data-video-module="${key}"><i data-lucide="${item.icon}"></i><span>${item.title}<small>${item.records.filter((record) => record.state !== "closed").length} 条事件</small></span></button>`).join("")}</div>
    <div class="channel-strip">${module.channels.map((item) => `<button class="channel-chip ${item.id === channel.id ? "active" : ""}" type="button" data-video-channel="${item.id}"><strong>${item.name}</strong><small>${item.code} · ${item.status}</small></button>`).join("")}</div>
    <section class="monitor-panel"><div class="monitor-top"><strong>${channel.name} · ${channel.device}</strong><span><i class="live-dot"></i>LIVE</span></div><div class="video-canvas-wrap"><canvas id="videoCanvas"></canvas><span class="video-overlay">${state.videoModule === "flame" ? "最高温 86.4°C" : "2026-07-24 09:43:08"}</span></div><div class="monitor-controls"><button type="button" data-video-control="snapshot"><i data-lucide="camera"></i>抓拍</button><button type="button" data-video-control="playback"><i data-lucide="play"></i>录像回看</button><button type="button" data-video-control="refresh"><i data-lucide="refresh-cw"></i>刷新</button></div></section>
    <div class="section-heading" style="padding:0 14px;margin-bottom:8px"><h2>事件记录</h2><span>${module.records.length} 条</span></div>
    <div class="record-list">${module.records.map((item) => `<button class="record-card" type="button" data-route="video/${state.videoModule}/${item.id}"><div class="record-card-head"><span class="severity-mark ${state.videoModule === "offduty" ? "orange" : state.videoModule === "passage" ? "blue" : ""}"><i data-lucide="${module.icon}"></i></span><div><h3>${item.title}</h3><p>${item.point} · ${item.device}</p></div><span class="state-pill ${item.state}">${state.videoModule === "flame" ? (item.state === "active" ? "火警" : "处置中") : videoStateLabels[item.state]}</span></div><div class="record-card-meta"><span><i data-lucide="clock-3"></i>${item.time.slice(5,16)}</span><span>${item.owner}</span></div></button>`).join("")}</div>`;
  requestAnimationFrame(() => drawVideoScene(document.querySelector("#videoCanvas"), state.videoModule));
}

function videoRecord(moduleKey, id) { return videoModules[moduleKey]?.records.find((item) => item.id === id); }

function offDutyTimeline(record) {
  const items = [{ title: "预警上报", time: record.time, note: `检测人数 ${record.detectedCountAtTrigger} 人，低于要求 ${record.requiredCount} 人并持续 60 秒。` }];
  if (record.reviewedAt) items.push({ title: "开始复核", time: record.reviewedAt, note: `${record.owner}开始视频复核。` });
  if (record.recoveredAt) items.push({ title: "人数恢复", time: record.recoveredAt, note: `当前 ${record.currentDetectedCount} 人，已连续稳定 60 秒。` });
  if (record.completedAt) items.push({ title: "人工消警", time: record.completedAt, note: record.handlingNote });
  return `<div class="timeline">${items.map((item) => `<div class="timeline-item"><span class="timeline-dot"></span><div><strong>${item.title}</strong><time>${item.time}</time><p>${esc(item.note)}</p></div></div>`).join("")}</div>`;
}

function renderVideoDetail(moduleKey, id) {
  const module = videoModules[moduleKey];
  const record = videoRecord(moduleKey, id);
  if (!module || !record) return go("video");
  state.videoModule = moduleKey;
  renderHeader("事件详情", record.time, "video");
  setBottomNav("", false);
  const isOffDuty = moduleKey === "offduty";
  const isPassage = moduleKey === "passage";
  const status = moduleKey === "flame" ? (record.state === "active" ? "火警" : "处置中") : videoStateLabels[record.state];
  const metric = isOffDuty ? `<div><span>要求人数</span><strong>${record.requiredCount} 人</strong></div><div><span>触发人数</span><strong>${record.detectedCountAtTrigger} 人</strong></div><div><span>当前人数</span><strong>${record.currentDetectedCount} 人</strong></div><div><span>触发规则</span><strong>人数不足持续 60 秒</strong></div>` : `<div><span>事件类型</span><strong>${record.eventType}</strong></div><div><span>持续时间</span><strong>${record.duration}</strong></div><div><span>处置人员</span><strong>${record.owner}</strong></div><div><span>完成时间</span><strong>${record.completedAt || "--"}</strong></div>`;
  const timeline = isOffDuty ? offDutyTimeline(record) : isPassage ? historyHtml(record.operationHistory) : `<div class="note-box">红外火灾事件与设备火警共用处置记录，请进入关联火警详情查看。</div>`;
  let actions = "";
  if (isOffDuty && record.state === "pending") actions = `<div class="fixed-actions"><button class="primary" type="button" data-offduty-action="review" data-id="${record.id}">开始复核</button></div>`;
  if (isOffDuty && ["processing", "recovered_pending"].includes(record.state)) actions = `<div class="fixed-actions"><button type="button" data-offduty-action="false" data-id="${record.id}">误报消警</button><button class="primary" type="button" data-offduty-action="returned" data-id="${record.id}" ${record.state !== "recovered_pending" ? "disabled" : ""}>人员返岗确认</button></div>`;
  if (isPassage && record.state === "active") actions = `<div class="fixed-actions"><button class="primary" type="button" data-passage-action="${record.id}">确认通道畅通</button></div>`;
  if (moduleKey === "flame") actions = `<div class="fixed-actions"><button class="danger" type="button" data-route="fire/${record.fireAlarmId}">进入火警处置</button></div>`;
  appMain.innerHTML = `<div class="detail-page"><section class="detail-summary video"><div class="detail-summary-head"><span>${module.title}</span><span class="state-pill ${record.state}">${status}</span></div><h2>${record.title}</h2><p>${record.point} · ${record.device}</p><div class="deadline"><i data-lucide="clock-3"></i>${record.time}</div></section>
    <section class="detail-section"><h3><i data-lucide="video"></i>事件录像</h3><div class="video-canvas-wrap" style="border-radius:6px;overflow:hidden"><canvas id="videoDetailCanvas"></canvas><span class="video-overlay">事件抓拍</span></div></section>
    <section class="detail-section"><h3><i data-lucide="clipboard-list"></i>事件信息</h3><div class="info-grid">${metric}</div>${isOffDuty && record.state === "processing" ? `<div class="note-box" style="margin-top:14px">当前人数仍未达到要求，人员返岗确认暂不可用。</div>` : ""}</section>
    ${record.handlingNote ? `<section class="detail-section"><h3><i data-lucide="message-square-text"></i>处置结论</h3><div class="note-box">${esc(record.handlingNote)}</div></section>` : ""}
    <section class="detail-section"><h3><i data-lucide="history"></i>事件时间线</h3>${timeline}</section></div>${actions}`;
  requestAnimationFrame(() => drawVideoScene(document.querySelector("#videoDetailCanvas"), moduleKey));
}

function faultDeviceHealthy(fault) {
  return fault.deviceStatus.online && fault.deviceStatus.heartbeat && fault.deviceStatus.reporting;
}

function renderFaultList() {
  renderHeader("设备故障", "设备运行维护记录", "applications");
  setBottomNav("", false);
  const records = faults.filter((item) => state.faultFilter === "all" || (state.faultFilter === "open" ? item.state !== "recovered" : item.state === "recovered"));
  appMain.innerHTML = `<section class="hero-band fault"><small>当前设备运行状态</small><h2>${faultOpenCount()} 条故障待闭环</h2><div class="hero-stats"><div><strong>${faults.filter((item) => item.state === "pending").length}</strong><span>待处理</span></div><div><strong>${faults.filter((item) => item.state === "processing").length}</strong><span>处理中</span></div><div><strong>${faults.filter((item) => item.state === "handled").length}</strong><span>待确认恢复</span></div></div></section>
    <div class="filter-row"><button class="filter-chip ${state.faultFilter === "open" ? "active" : ""}" data-fault-filter="open">待处理</button><button class="filter-chip ${state.faultFilter === "closed" ? "active" : ""}" data-fault-filter="closed">已恢复</button><button class="filter-chip ${state.faultFilter === "all" ? "active" : ""}" data-fault-filter="all">全部</button></div>
    <div class="record-list">${records.map((item) => `<button class="record-card" type="button" data-route="fault/${item.id}"><div class="record-card-head"><span class="severity-mark ${item.state === "handled" ? "blue" : "orange"}"><i data-lucide="wrench"></i></span><div><h3>${item.title}</h3><p>${item.point} · ${item.device}</p></div><span class="state-pill ${item.state}">${faultStateLabels[item.state]}</span></div><div class="record-card-meta"><span><i data-lucide="${faultDeviceHealthy(item) ? "wifi" : "wifi-off"}"></i>${faultDeviceHealthy(item) ? "设备运行正常" : "设备状态异常"}</span><span>${item.assignee}</span></div></button>`).join("") || `<div class="empty-search">当前筛选下暂无记录</div>`}</div>`;
}

function faultTimeline(fault) {
  const base = [{ title: "故障上报", time: fault.firstTime, note: `${fault.source}触发${fault.faultType}故障。` }];
  const history = [...fault.handlingHistory].reverse().map((item) => ({
    title: { assign: "人员指派", mark_handled: "标记处理", confirm_recovery: "人工确认恢复" }[item.action],
    time: item.time, note: `${item.operatorSide || "机构端"} · ${item.operator}：${item.note}`
  }));
  if (fault.deviceRecoveredAt) history.push({ title: "设备状态恢复", time: fault.deviceRecoveredAt, note: "设备在线、心跳与数据上报恢复正常。" });
  const sorted = [...base, ...history].sort((a, b) => a.time.localeCompare(b.time));
  return `<div class="timeline">${sorted.map((item) => `<div class="timeline-item"><span class="timeline-dot"></span><div><strong>${item.title}</strong><time>${item.time}</time><p>${esc(item.note)}</p></div></div>`).join("")}</div>`;
}

function faultActions(fault) {
  if (fault.state === "recovered") return "";
  if (fault.state === "handled") return `<div class="fixed-actions"><button type="button" data-fault-action="status" data-id="${fault.id}">查看设备状态</button><button class="primary" type="button" data-fault-action="recover" data-id="${fault.id}" ${faultDeviceHealthy(fault) ? "" : "disabled"}>确认恢复</button></div>`;
  return `<div class="fixed-actions"><button type="button" data-fault-action="assign" data-id="${fault.id}">人员指派</button><button class="primary" type="button" data-fault-action="handle" data-id="${fault.id}">标记处理</button></div>`;
}

function renderFaultDetail(id) {
  const fault = faults.find((item) => item.id === id);
  if (!fault) return go("fault");
  renderHeader("故障详情", fault.no, detailBackRoute("fault", `fault/${fault.id}`));
  setBottomNav("", false);
  const healthy = faultDeviceHealthy(fault);
  const deadline = fault.assignmentDeadlineAt ? `接单截止 ${shortDate(fault.assignmentDeadlineAt)}${isOverdue(fault) ? " · 已超时" : ""}` : "尚未指派处理人员";
  const abnormal = [!fault.deviceStatus.online && "设备离线", !fault.deviceStatus.heartbeat && "心跳异常", !fault.deviceStatus.reporting && "数据未上报"].filter(Boolean).join("、");
  appMain.innerHTML = `<div class="detail-page"><section class="detail-summary fault"><div class="detail-summary-head"><span>${fault.faultType}</span><span class="state-pill ${fault.state}">${faultStateLabels[fault.state]}</span></div><h2>${fault.title}</h2><p>${fault.point} · ${fault.device}</p><div class="deadline ${isOverdue(fault) ? "overdue" : ""}"><i data-lucide="timer"></i>${deadline}</div></section>
    <section class="detail-section"><h3><i data-lucide="radio-tower"></i>设备实时状态</h3><div class="device-status"><span class="device-status-icon ${healthy ? "" : "bad"}"><i data-lucide="${healthy ? "circle-check" : "triangle-alert"}"></i></span><div><strong>${healthy ? "设备运行正常" : abnormal}</strong><span>最近上报 ${fault.deviceStatus.lastReport}</span></div><b class="${healthy ? "" : "bad"}">${healthy ? "可确认" : "异常"}</b></div>${fault.state === "handled" && !healthy ? `<small class="field-hint">设备在线、心跳和数据上报均恢复正常后，才能确认恢复。</small>` : ""}</section>
    <section class="detail-section"><h3><i data-lucide="clipboard-list"></i>故障信息</h3><div class="info-grid"><div><span>故障编号</span><strong>${fault.no}</strong></div><div><span>故障代码</span><strong>${fault.code}</strong></div><div><span>首次发生</span><strong>${fault.firstTime}</strong></div><div><span>最近上报</span><strong>${fault.updated}</strong></div><div><span>处理人员</span><strong>${fault.assignee}</strong></div><div><span>数据来源</span><strong>${fault.source}</strong></div></div></section>
    <section class="detail-section"><h3><i data-lucide="message-square-text"></i>当前说明</h3><div class="note-box">${esc(fault.note)}</div></section>
    <section class="detail-section"><h3><i data-lucide="history"></i>处理时间线</h3>${faultTimeline(fault)}</section></div>${faultActions(fault)}`;
}

function faultActionSheet(fault, action) {
  if (action === "status") return showToast(faultDeviceHealthy(fault) ? "设备在线、心跳与数据上报均正常" : "设备状态仍有异常，暂不能确认恢复");
  if (action === "handle") {
    openSheet({ eyebrow: "故障处理记录", title: "标记处理", submitText: "提交处理结果", body: `${eventSummary(fault.title, `${fault.point} · ${fault.no}`, "wrench")}<label class="form-field"><span class="form-label">处理备注 <em>必填</em></span><textarea id="faultNote" placeholder="请说明检查内容、处理措施和当前设备情况。"></textarea><small class="field-hint">提交后进入“已处理待恢复”，不会直接闭环。</small></label>`, onSubmit: () => {
      const note = document.querySelector("#faultNote").value.trim();
      if (!note) return showToast("请填写处理备注");
      fault.state = "handled"; fault.handledAt = nowText(); fault.note = note;
      fault.handlingHistory.unshift({ action: "mark_handled", operator: currentUser, operatorSide: "机构端", time: fault.handledAt, note });
      publishNotification("fault", "status_changed", "设备故障已标记处理", `${fault.title}已处理，等待设备状态恢复。`, `fault/${fault.id}`);
      refreshDutyHandoverCategory("device");
      closeSheet(); render(); showToast("已标记处理，等待设备恢复确认");
    }});
  }
  if (action === "recover") {
    if (!faultDeviceHealthy(fault)) return showToast("设备状态尚未恢复正常");
    openSheet({ eyebrow: "设备恢复验证", title: "确认设备恢复", submitText: "确认恢复并闭环", body: `${eventSummary(fault.title, `${fault.device} · ${fault.serial}`, "circle-check")}<div class="device-status"><span class="device-status-icon"><i data-lucide="circle-check"></i></span><div><strong>设备状态验证通过</strong><span>在线正常 · 心跳正常 · 数据上报正常</span></div><b>正常</b></div><small class="field-hint">确认后该故障将进入“已恢复”，本次处理正式闭环。</small>`, onSubmit: () => {
      fault.state = "recovered"; fault.recoveredAt = nowText(); fault.note = "设备在线、心跳与数据上报均正常，已人工确认恢复。";
      fault.handlingHistory.unshift({ action: "confirm_recovery", operator: currentUser, operatorSide: "机构端", time: fault.recoveredAt, note: fault.note });
      publishNotification("fault", "closed", "设备故障已恢复", `${fault.title}已人工确认恢复并完成闭环。`, `fault/${fault.id}`);
      refreshDutyHandoverCategory("device");
      closeSheet(); render(); showToast("设备故障已确认恢复");
    }});
  }
}

function passageActionSheet(record) {
  openSheet({ eyebrow: "消防通道处置", title: "确认通道畅通", submitText: "提交并完成处置", body: `${eventSummary(record.title, `${record.point} · ${record.device}`, "traffic-cone")}<label class="form-field"><span class="form-label">处置说明 <em>必填</em></span><textarea id="passageNote" placeholder="例如：车辆已驶离，现场确认消防通道无障碍物。"></textarea></label>${uploadField()}`, onSubmit: () => {
    const note = document.querySelector("#passageNote").value.trim();
    if (!note) return showToast("请填写处置说明");
    record.state = "closed"; record.owner = currentUser; record.completedAt = nowText(); record.handlingNote = note;
    record.operationHistory.unshift({ action: "confirm_clear", operator: currentUser, time: record.completedAt, description: note, photos: [...state.sheetPhotos] });
    closeSheet(); render(); showToast("消防通道已确认恢复畅通");
  }});
}

function offDutyAction(record, action) {
  if (action === "review") {
    record.state = "processing"; record.owner = currentUser; record.reviewedAt = nowText(); render(); showToast("已开始视频复核"); return;
  }
  const isFalse = action === "false";
  openSheet({ eyebrow: "脱岗预警复核", title: isFalse ? "误报消警" : "人员返岗确认", submitText: isFalse ? "确认误报并消警" : "确认返岗并消警", danger: isFalse,
    body: `${eventSummary(record.title, `${record.point} · ${record.device}`, "users-round")}${isFalse ? `<label class="form-field"><span class="form-label">误报原因 <em>必选</em></span><span class="reason-grid">${["遮挡", "识别错误", "交接班", "其他"].map((reason) => `<label><input type="radio" name="falseReason" value="${reason}" /><span>${reason}</span></label>`).join("")}</span></label>` : `<div class="device-status"><span class="device-status-icon"><i data-lucide="users-round"></i></span><div><strong>当前 ${record.currentDetectedCount} 人在岗</strong><span>达到要求人数并已连续稳定 60 秒</span></div><b>可确认</b></div>`}<label class="form-field"><span class="form-label">处置说明 <em>必填</em></span><textarea id="offDutyNote" placeholder="请填写视频复核和现场确认情况。"></textarea></label>`,
    onSubmit: () => {
      const note = document.querySelector("#offDutyNote").value.trim();
      const reason = document.querySelector('input[name="falseReason"]:checked')?.value || "";
      if (isFalse && !reason) return showToast("请选择误报原因");
      if (!note) return showToast("请填写处置说明");
      record.state = "closed"; record.completedAt = nowText(); record.owner = currentUser; record.resolution = isFalse ? "false_alarm" : "returned"; record.falseAlarmReason = reason; record.handlingNote = isFalse ? `${reason}：${note}` : note;
      closeSheet(); render(); showToast(isFalse ? "误报预警已消警" : "人员返岗已确认消警");
    }
  });
}

function playbackSheet() {
  const module = videoModules[state.videoModule];
  openSheet({ eyebrow: "录像检索", title: `${module.title}录像回看`, submitText: "完成", body: `<label class="form-field"><span class="form-label">录像通道</span><select>${module.channels.map((item) => `<option>${item.name} · ${item.code}</option>`).join("")}</select></label><div class="playback-box"><div class="playback-screen"><i data-lucide="play-circle"></i></div><input type="range" min="0" max="100" value="36" /><div class="playback-time"><span>09:00:00</span><span>10:00:00</span></div></div><small class="field-hint">演示录像连续，拖动进度条可模拟定位时间。</small>`, onSubmit: closeSheet });
}

function drawVideoScene(canvas, type) {
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, rect.width * ratio); canvas.height = Math.max(1, rect.height * ratio);
  const ctx = canvas.getContext("2d"); ctx.scale(ratio, ratio);
  const w = rect.width, h = rect.height;
  const gradient = ctx.createLinearGradient(0, 0, w, h);
  gradient.addColorStop(0, type === "flame" ? "#32115c" : "#718894"); gradient.addColorStop(1, type === "flame" ? "#071d4b" : "#263942");
  ctx.fillStyle = gradient; ctx.fillRect(0, 0, w, h);
  if (type === "passage") {
    ctx.fillStyle = "#687278"; ctx.fillRect(0, h * .55, w, h * .45);
    ctx.strokeStyle = "#d7bd44"; ctx.lineWidth = 3; ctx.setLineDash([18, 12]); ctx.beginPath(); ctx.moveTo(0, h * .78); ctx.lineTo(w, h * .78); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = "#b7483d"; ctx.fillRect(w * .48, h * .48, w * .3, h * .22); ctx.fillStyle = "#1e2930"; ctx.beginPath(); ctx.arc(w * .55, h * .72, 10, 0, Math.PI * 2); ctx.arc(w * .72, h * .72, 10, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#ffbf35"; ctx.lineWidth = 2; ctx.strokeRect(w * .43, h * .42, w * .4, h * .36);
  } else {
    ctx.fillStyle = type === "flame" ? "#311061" : "#40535d"; ctx.fillRect(w * .08, h * .18, w * .34, h * .62); ctx.fillRect(w * .63, h * .12, w * .27, h * .7);
    if (type === "flame") {
      const heat = ctx.createRadialGradient(w * .62, h * .58, 2, w * .62, h * .58, h * .34); heat.addColorStop(0, "#fff56b"); heat.addColorStop(.2, "#ff6b17"); heat.addColorStop(.48, "#b10d48"); heat.addColorStop(1, "rgba(49,8,91,0)"); ctx.fillStyle = heat; ctx.fillRect(0, 0, w, h);
    } else {
      [[.32,.48],[.64,.48]].forEach(([x,y]) => { ctx.fillStyle = "#18242a"; ctx.beginPath(); ctx.arc(w*x,h*y,10,0,Math.PI*2); ctx.fill(); ctx.fillRect(w*x-8,h*y+9,16,31); ctx.strokeStyle="#45e4ff"; ctx.lineWidth=1.5; ctx.strokeRect(w*x-16,h*y-18,32,61); });
    }
  }
  ctx.fillStyle = "rgba(0,0,0,.5)"; ctx.fillRect(8, 8, 92, 20); ctx.fillStyle = "#fff"; ctx.font = "10px sans-serif"; ctx.fillText(type === "flame" ? "THERMAL CH 03" : "CAMERA LIVE", 15, 22);
}

function render() {
  closePreviewControls();
  if (!document.querySelector("#sheetLayer").hidden) closeSheet();
  document.querySelector("#photoLightbox").hidden = true;
  const parts = routeParts();
  const [screen, sub, id] = parts;
  if (screen === "home") renderHome();
  else if (screen === "profile") renderProfile();
  else if (screen === "notifications") renderNotifications();
  else if (screen === "duty" && ["clock-in", "clock-out"].includes(sub)) renderDutyClock(sub);
  else if (screen === "duty" && sub === "objection") renderDutyObjection();
  else if (screen === "duty" && sub === "handover") renderDutyHandover();
  else if (screen === "duty" && sub) renderDutyRecords(sub, id);
  else if (screen === "duty") renderDutyHome();
  else if (screen === "fire" && sub) renderFireDetail(sub);
  else if (screen === "fire") renderFireList();
  else if (screen === "warning" && sub) renderWarningDetail(sub);
  else if (screen === "warning") renderWarningList();
  else if (screen === "video" && sub && id) renderVideoDetail(sub, id);
  else if (screen === "video") renderVideoList();
  else if (screen === "fault" && sub) renderFaultDetail(sub);
  else if (screen === "fault") renderFaultList();
  else renderApplications();
  refreshIcons();
  mobileApp.scrollTop = 0;
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".preview-controls")) closePreviewControls();
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    if (routeButton.dataset.route !== "notifications") {
      state.detailReturnRoute = "";
      state.detailTargetRoute = "";
    }
    go(routeButton.dataset.route);
    return;
  }

  const navButton = event.target.closest("[data-nav]");
  if (navButton) {
    state.detailReturnRoute = "";
    state.detailTargetRoute = "";
    go(navButton.dataset.nav);
    return;
  }

  const resetStateButton = event.target.closest("[data-reset-state]");
  if (resetStateButton) {
    resetModuleState(resetStateButton.dataset.resetState);
    return;
  }

  if (event.target.closest("[data-duty-scenario=\"unattended\"]")) {
    initializeUnattendedDutyScenario();
    return;
  }

  const notificationEntry = event.target.closest("[data-notification-entry]");
  if (notificationEntry) {
    state.notificationBackRoute = notificationEntry.dataset.notificationEntry || "applications";
    state.detailReturnRoute = "";
    state.detailTargetRoute = "";
    go("notifications");
    return;
  }

  const notificationItem = event.target.closest("[data-notification-id]");
  if (notificationItem) {
    openNotificationTarget(appNotifications.find((item) => item.id === notificationItem.dataset.notificationId), "notifications");
    return;
  }

  const notificationReadFilter = event.target.closest("[data-notification-read-filter]");
  if (notificationReadFilter) {
    state.notificationReadFilter = notificationReadFilter.dataset.notificationReadFilter;
    render();
    return;
  }

  const notificationTypeFilter = event.target.closest("[data-notification-type-filter]");
  if (notificationTypeFilter) {
    state.notificationTypeFilter = notificationTypeFilter.dataset.notificationTypeFilter;
    render();
    return;
  }

  if (event.target.closest("[data-notifications-read-all]")) {
    appNotifications.forEach((item) => { item.read = true; });
    render();
    showToast("所有通知已标记为已读");
    return;
  }

  const pushNotification = event.target.closest("[data-push-notification]");
  if (pushNotification) {
    const notification = appNotifications.find((item) => item.id === pushNotification.dataset.pushNotification);
    openNotificationTarget(notification, currentRoute());
    return;
  }

  if (event.target.closest("[data-push-close]")) {
    hidePushBanner();
    return;
  }

  const dutyAction = event.target.closest("[data-duty-action]");
  if (dutyAction) {
    dutyActionSheet(dutyAction.dataset.dutyAction);
    return;
  }

  const dutyClockMethod = event.target.closest("[data-duty-clock-method]");
  if (dutyClockMethod) {
    completeDutyClock(dutyClockMethod.dataset.clockType, dutyClockMethod.dataset.dutyClockMethod);
    return;
  }

  if (event.target.closest("[data-duty-confirm-handover]")) {
    confirmDutyHandover();
    return;
  }

  const dutyObjectionConfirm = event.target.closest("[data-duty-objection-confirm]");
  if (dutyObjectionConfirm) {
    confirmDutyObjection(dutyObjectionConfirm.dataset.dutyObjectionConfirm);
    return;
  }

  const dutyDateShift = event.target.closest("[data-duty-date-shift]");
  if (dutyDateShift) {
    state.dutyRecordDateOffset = Math.min(0, state.dutyRecordDateOffset + Number(dutyDateShift.dataset.dutyDateShift));
    render();
    return;
  }

  const feature = event.target.closest("[data-feature]");
  if (feature) {
    const item = featureApps.find((entry) => entry.id === feature.dataset.feature);
    if (item?.route) go(item.route); else showToast(`${item?.label || "该功能"}暂未开放`);
    return;
  }

  const fireFilter = event.target.closest("[data-fire-filter]");
  if (fireFilter) { state.fireFilter = fireFilter.dataset.fireFilter; render(); return; }
  const warningFilter = event.target.closest("[data-warning-filter]");
  if (warningFilter) { state.warningFilter = warningFilter.dataset.warningFilter; render(); return; }
  const faultFilter = event.target.closest("[data-fault-filter]");
  if (faultFilter) { state.faultFilter = faultFilter.dataset.faultFilter; render(); return; }

  const fireAction = event.target.closest("[data-fire-action]");
  if (fireAction) {
    const alarm = fireAlarms.find((item) => item.id === fireAction.dataset.id);
    if (alarm) fireAction.dataset.fireAction === "assign" ? assignmentSheet(alarm, "fire") : fireActionSheet(alarm, fireAction.dataset.fireAction);
    return;
  }

  const warningActionButton = event.target.closest("[data-warning-action]");
  if (warningActionButton) {
    const warning = warnings.find((item) => item.id === warningActionButton.dataset.id);
    if (warning) warningAction(warning, warningActionButton.dataset.warningAction);
    return;
  }

  const videoModule = event.target.closest("[data-video-module]");
  if (videoModule) { state.videoModule = videoModule.dataset.videoModule; render(); return; }
  const videoChannel = event.target.closest("[data-video-channel]");
  if (videoChannel) { state.videoChannels[state.videoModule] = videoChannel.dataset.videoChannel; render(); return; }
  const videoControl = event.target.closest("[data-video-control]");
  if (videoControl) {
    const action = videoControl.dataset.videoControl;
    if (action === "playback") playbackSheet();
    if (action === "refresh") { drawVideoScene(document.querySelector("#videoCanvas"), state.videoModule); showToast("实时画面已刷新"); }
    if (action === "snapshot") {
      const canvas = document.querySelector("#videoCanvas");
      if (canvas) {
        const link = document.createElement("a"); link.download = `${state.videoModule}-snapshot.png`; link.href = canvas.toDataURL("image/png"); link.click(); showToast("当前画面已抓拍");
      }
    }
    return;
  }

  const offDuty = event.target.closest("[data-offduty-action]");
  if (offDuty) {
    const record = videoModules.offduty.records.find((item) => item.id === offDuty.dataset.id);
    if (record) offDutyAction(record, offDuty.dataset.offdutyAction);
    return;
  }
  const passage = event.target.closest("[data-passage-action]");
  if (passage) {
    const record = videoModules.passage.records.find((item) => item.id === passage.dataset.passageAction);
    if (record) passageActionSheet(record);
    return;
  }

  const faultAction = event.target.closest("[data-fault-action]");
  if (faultAction) {
    const fault = faults.find((item) => item.id === faultAction.dataset.id);
    if (fault) faultAction.dataset.faultAction === "assign" ? assignmentSheet(fault, "fault") : faultActionSheet(fault, faultAction.dataset.faultAction);
    return;
  }

  const photoSource = event.target.closest("[data-photo-source]");
  if (photoSource) {
    const inputId = photoSource.dataset.photoSource === "camera" ? "sheetCameraPhotos" : "sheetGalleryPhotos";
    document.querySelector(`#${inputId}`)?.click();
    return;
  }
  const removePhoto = event.target.closest("[data-photo-remove]");
  if (removePhoto) { state.sheetPhotos.splice(Number(removePhoto.dataset.photoRemove), 1); renderSheetPhotos(); return; }
  const viewPhoto = event.target.closest("[data-photo-view]");
  if (viewPhoto) {
    document.querySelector("#lightboxImage").src = viewPhoto.dataset.photoView;
    document.querySelector("#photoLightbox").hidden = false;
    return;
  }
  if (event.target.closest("[data-lightbox-close]")) { document.querySelector("#photoLightbox").hidden = true; return; }
  if (event.target.closest("[data-sheet-close]")) { closeSheet(); return; }
  if (event.target.closest("[data-placeholder]")) showToast("该功能本期暂未开放");
});

document.addEventListener("input", (event) => {
  if (event.target.id === "appSearch") {
    const keyword = event.target.value.trim().toLowerCase();
    let visible = 0;
    document.querySelectorAll("#featureGrid .feature-item").forEach((item) => {
      const match = !keyword || item.dataset.label.toLowerCase().includes(keyword);
      item.hidden = !match;
      if (match) visible += 1;
    });
    document.querySelector("#appSearchEmpty").hidden = visible !== 0;
  }
  if (event.target.id === "assignWindow") {
    const preview = document.querySelector("#deadlinePreview");
    if (preview) preview.textContent = `预计截止 ${shortDate(assignmentDeadline(Number(event.target.value)))}`;
  }
});

document.addEventListener("change", async (event) => {
  if (!event.target.matches("[data-photo-input]")) return;
  const files = [...event.target.files];
  if (state.sheetPhotos.length + files.length > state.sheetPhotoLimit) { showToast(`最多只能上传 ${state.sheetPhotoLimit} 张照片`); event.target.value = ""; return; }
  for (const file of files) {
    if (!/^image\/(jpeg|png|webp)$/.test(file.type)) { showToast(`${file.name} 格式不支持`); continue; }
    if (file.size > 10 * 1024 * 1024) { showToast(`${file.name} 超过 10 MB`); continue; }
    const dataUrl = await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file); });
    state.sheetPhotos.push(dataUrl);
  }
  event.target.value = "";
  renderSheetPhotos();
});

document.querySelector("#sheetForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (state.sheetSubmit) state.sheetSubmit();
});

lockScrollBoundary(mobileApp);
lockScrollBoundary(sheetBody);

previewControlTrigger.addEventListener("click", () => {
  const willOpen = previewControlMenu.hidden;
  previewControlMenu.hidden = !willOpen;
  previewControlTrigger.setAttribute("aria-expanded", String(willOpen));
});

deviceShellToggle.addEventListener("change", () => setDeviceShell(deviceShellToggle.checked));
newNotificationToggle.addEventListener("change", () => {
  state.notificationsEnabled = newNotificationToggle.checked;
  if (state.notificationsEnabled) {
    const latestUnread = appNotifications.find((item) => !item.read) || appNotifications[0];
    if (latestUnread) showForegroundNotification(latestUnread);
  } else hidePushBanner();
});
dutyPersonSelect.addEventListener("change", () => {
  dutyState.selectedPersonId = dutyPersonSelect.value;
  closePreviewControls();
  if (currentRoute().startsWith("duty")) render();
  showToast(`已切换为${selectedDutyPerson().name}视角`);
});
dutyHeadcountSelect.addEventListener("change", () => {
  dutyState.requiredHeadcount = Number(dutyHeadcountSelect.value);
  syncDutyHandoverState();
  closePreviewControls();
  if (currentRoute().startsWith("duty")) render();
  showToast(`班次定岗人数已调整为 ${dutyState.requiredHeadcount} 人`);
});
dutyTimeModeSelect.addEventListener("change", () => {
  applyDutyTimeMode(dutyTimeModeSelect.value);
  closePreviewControls();
  if (currentRoute().startsWith("duty")) render();
  const labels = { on_duty: "值班中", handover_0600: "06:00 夜班转白班", handover_1600: "16:00 白班转夜班" };
  showToast(`已切换为${labels[dutyState.demoTimeMode]}场景`);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !previewControlMenu.hidden) closePreviewControls();
});

window.addEventListener("hashchange", render);
window.addEventListener("resize", () => {
  const canvas = document.querySelector("#videoCanvas") || document.querySelector("#videoDetailCanvas");
  if (canvas) drawVideoScene(canvas, state.videoModule);
});

initializePreviewControls();
if (!location.hash) history.replaceState(null, "", "#/applications");
render();
