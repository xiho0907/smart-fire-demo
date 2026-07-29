const alerts = [
  {
    id: "flame",
    category: "flame",
    level: 1,
    title: "高温与火焰报警",
    shortTitle: "检测到火焰与高温",
    location: "危化品暂存间",
    device: "红外火焰-01",
    serial: "DS-FL-03A821",
    eventType: "TMA / flame",
    channel: "CH 03 / R-03",
    time: "19:42:16",
    dateTime: "2026-07-23 19:42:16",
    duration: "00:01:12",
    state: "pending",
    owner: "待分派",
    currentTemp: 86.4,
    threshold: 70.0,
    summary: "检测区域 R-03 · 最高温点已超过阈值 16.4°C",
    callback: "EHOME_ISAPI_ALARM",
  },
  {
    id: "passage",
    category: "passage",
    level: 2,
    title: "消防通道车辆占用",
    shortTitle: "车辆持续占用消防通道",
    location: "东侧消防通道",
    device: "通道检测-08",
    serial: "DS-PS-08D114",
    eventType: "channelOccupy",
    channel: "CH 08 / R-02",
    time: "19:41:03",
    dateTime: "2026-07-23 19:41:03",
    duration: "00:02:13",
    state: "pending",
    owner: "待分派",
    summary: "检测区域 R-02 · 车辆占用消防通道超过 120 秒",
    callback: "EHOME_ISAPI_ALARM",
  },
  {
    id: "offduty",
    category: "offduty",
    level: 2,
    title: "消控室岗位无人值守",
    shortTitle: "主岗持续未检测到人员",
    location: "消控室主岗",
    device: "离岗检测-01",
    serial: "DS-OD-01C772",
    eventType: "offDuty",
    channel: "CH 01 / R-01",
    time: "19:40:31",
    dateTime: "2026-07-23 19:40:31",
    duration: "00:06:48",
    state: "pending",
    owner: "待分派",
    summary: "检测区域 R-01 · 岗位持续 06:48 未检测到值守人员",
    callback: "EHOME_ISAPI_ALARM",
  },
  {
    id: "flame-2",
    category: "flame",
    level: 1,
    title: "温升异常预警",
    shortTitle: "设备间温度快速上升",
    location: "配电设备间",
    device: "红外火焰-03",
    serial: "DS-FL-05B219",
    eventType: "TMA / riseTemperature",
    channel: "CH 05 / R-01",
    time: "18:26:44",
    dateTime: "2026-07-23 18:26:44",
    duration: "00:18:32",
    state: "processing",
    owner: "李明",
    currentTemp: 63.8,
    threshold: 65.0,
    summary: "检测区域 R-01 · 温升速率异常，现场人员核查中",
    callback: "EHOME_ISAPI_ALARM",
  },
  {
    id: "passage-2",
    category: "passage",
    level: 2,
    title: "消防通道物品滞留",
    shortTitle: "货物占用消防通道",
    location: "西侧装卸通道",
    device: "通道检测-12",
    serial: "DS-PS-12D302",
    eventType: "fireEscapeDetection",
    channel: "CH 12 / R-04",
    time: "17:55:12",
    dateTime: "2026-07-23 17:55:12",
    duration: "00:31:05",
    state: "processing",
    owner: "赵凯",
    summary: "检测区域 R-04 · 滞留物已通知现场清理",
    callback: "EHOME_ISAPI_ALARM",
  },
  {
    id: "offduty-2",
    category: "offduty",
    level: 3,
    title: "消控室短时离岗",
    shortTitle: "副岗短时未检测到人员",
    location: "消控室副岗",
    device: "离岗检测-02",
    serial: "DS-OD-02C916",
    eventType: "offDuty",
    channel: "CH 02 / R-01",
    time: "16:42:09",
    dateTime: "2026-07-23 16:42:09",
    duration: "00:02:25",
    state: "closed",
    owner: "王晨",
    summary: "值班人员已返回岗位，事件已闭环",
    callback: "EHOME_ISAPI_ALARM",
  },
  {
    id: "passage-3",
    category: "passage",
    level: 2,
    title: "消防通道车辆占用",
    shortTitle: "临停车辆占用消防通道",
    location: "北门消防通道",
    device: "通道检测-02",
    serial: "DS-PS-02D531",
    eventType: "channelOccupy",
    channel: "CH 02 / R-02",
    time: "15:08:37",
    dateTime: "2026-07-23 15:08:37",
    duration: "00:04:16",
    state: "closed",
    owner: "赵凯",
    summary: "车辆已驶离，现场复核通道恢复畅通",
    callback: "EHOME_ISAPI_ALARM",
  },
  {
    id: "flame-3",
    category: "flame",
    level: 3,
    title: "高温预警",
    shortTitle: "厨房排烟口温度偏高",
    location: "餐饮后厨",
    device: "红外火焰-06",
    serial: "DS-FL-06B108",
    eventType: "TMA / highTemperature",
    channel: "CH 06 / R-02",
    time: "13:21:55",
    dateTime: "2026-07-23 13:21:55",
    duration: "00:07:42",
    state: "closed",
    owner: "李明",
    currentTemp: 58.1,
    threshold: 60.0,
    summary: "排烟系统开启后温度恢复正常",
    callback: "EHOME_ISAPI_ALARM",
  },
];

const devices = [
  { id: "d1", category: "offduty", name: "消控室离岗检测-01", serial: "DS-OD-01C772", point: "消控室主岗", zone: "消防控制室", type: "人员在离岗检测", capability: "isSupportOffDuty", network: "98%", heartbeat: "19:43:05", online: true, firmware: "V5.8.12" },
  { id: "d2", category: "offduty", name: "消控室离岗检测-02", serial: "DS-OD-02C916", point: "消控室副岗", zone: "消防控制室", type: "人员在离岗检测", capability: "isSupportOffDuty", network: "96%", heartbeat: "19:43:02", online: true, firmware: "V5.8.12" },
  { id: "d3", category: "passage", name: "东侧通道检测-08", serial: "DS-PS-08D114", point: "东侧消防通道", zone: "室外东区", type: "室外通道检测", capability: "isSupportChannelOccupy", network: "91%", heartbeat: "19:43:06", online: true, firmware: "V5.7.18" },
  { id: "d4", category: "passage", name: "北门通道检测-02", serial: "DS-PS-02D531", point: "北门消防通道", zone: "园区北门", type: "室外通道检测", capability: "isSupportFireEscapeDetection", network: "54%", heartbeat: "18:56:14", online: false, firmware: "V5.7.18" },
  { id: "d5", category: "flame", name: "红外火焰探测-01", serial: "DS-FL-03A821", point: "危化品暂存间", zone: "仓储一区", type: "可视化红外火焰探测", capability: "TMA / flame", network: "97%", heartbeat: "19:43:06", online: true, firmware: "V5.6.35" },
  { id: "d6", category: "flame", name: "红外火焰探测-03", serial: "DS-FL-05B219", point: "配电设备间", zone: "动力中心", type: "可视化红外火焰探测", capability: "TMA / riseTemperature", network: "95%", heartbeat: "19:43:04", online: true, firmware: "V5.6.35" },
];

const terminals = [
  { id: "t01", type: "power", name: "智能用电采集终端-01", serial: "PW-01-A1028", point: "一层总配电箱", zone: "配电区域", area: "配电房", reading: "总功率 38.6 kW", detail: "漏电 12 mA · 温度 36.2°C", signal: 98, network: "4G", status: "normal", updated: "19:43:06" },
  { id: "t02", type: "power", name: "智能用电采集终端-05", serial: "PW-05-A2361", point: "厨房动力配电箱", zone: "配电区域", area: "餐饮后厨", reading: "回路温度 68.2°C", detail: "阈值 70.0°C · 功率 21.4 kW", signal: 91, network: "4G", status: "warning", updated: "19:42:58" },
  { id: "t03", type: "transmitter", name: "用户信息传输装置-01", serial: "UT-01-C7812", point: "消防控制室", zone: "消防控制室", area: "主机柜", reading: "主电正常 · 12 路接入", detail: "最近上报 19:43:05", signal: 100, network: "以太网", status: "normal", updated: "19:43:05" },
  { id: "t04", type: "level", name: "无线远程液位终端-01", serial: "WL-01-B6107", point: "地下消防水池", zone: "消防水源", area: "泵房 B1", reading: "液位 82%", detail: "有效水深 3.28 m", signal: 88, network: "NB-IoT", status: "normal", updated: "19:42:48" },
  { id: "t05", type: "level", name: "无线远程液位终端-04", serial: "WL-04-B9230", point: "屋顶高位水箱", zone: "消防水源", area: "屋面设备区", reading: "设备未上报", detail: "离线时长 03:12:26", signal: 0, network: "NB-IoT", status: "offline", updated: "16:30:42" },
  { id: "t06", type: "pressure", name: "无线远程压力终端-03", serial: "WP-03-D3088", point: "高区喷淋管网", zone: "消防管网", area: "八层管井", reading: "压力 0.42 MPa", detail: "阈值 0.30 - 0.60 MPa", signal: 94, network: "NB-IoT", status: "normal", updated: "19:42:51" },
  { id: "t07", type: "pressure", name: "无线远程压力终端-07", serial: "WP-07-D6713", point: "室外消火栓管网", zone: "消防管网", area: "园区东侧", reading: "压力 0.36 MPa", detail: "24 h 波动 ±0.03 MPa", signal: 86, network: "NB-IoT", status: "normal", updated: "19:42:40" },
  { id: "t08", type: "gas", name: "可燃气体探测器-02", serial: "GD-02-F4509", point: "厨房燃气间", zone: "重点防护区", area: "餐饮后厨", reading: "浓度 0% LEL", detail: "设备自检正常", signal: 100, network: "RS-485", status: "normal", updated: "19:43:04" },
  { id: "t09", type: "gas", name: "可燃气体探测器-05", serial: "GD-05-F8016", point: "锅炉房燃气阀组", zone: "重点防护区", area: "动力中心", reading: "浓度 18% LEL", detail: "预警阈值 20% LEL", signal: 100, network: "RS-485", status: "warning", updated: "19:43:02" },
  { id: "t10", type: "offduty", name: "人员在离岗监测-01", serial: "DS-OD-01C772", point: "消控室主岗", zone: "消防控制室", area: "消防控制室", reading: "岗位无人 06:48", detail: "CH 01 · offDuty", signal: 96, network: "以太网", status: "alarm", updated: "19:40:31", alertId: "offduty" },
  { id: "t11", type: "passage", name: "室外通道监测-08", serial: "DS-PS-08D114", point: "东侧消防通道", zone: "室外通道", area: "园区东侧", reading: "车辆占用 02:13", detail: "CH 08 · channelOccupy", signal: 91, network: "以太网", status: "alarm", updated: "19:41:03", alertId: "passage" },
  { id: "t12", type: "flame", name: "可视化红外火焰探测-01", serial: "DS-FL-03A821", point: "危化品暂存间", zone: "重点防护区", area: "仓储一区", reading: "86.4°C · 检测到火焰", detail: "CH 03 · TMA / flame", signal: 97, network: "以太网", status: "alarm", updated: "19:42:16", alertId: "flame" },
  { id: "t13", type: "transmitter", name: "用户信息传输装置-02", serial: "UT-02-C3958", point: "消防控制室备用机柜", zone: "消防控制室", area: "备用机柜", reading: "主电正常 · 数据上报正常", detail: "备电回路已完成检查", signal: 100, network: "以太网", status: "normal", updated: "19:43:07" },
  { id: "t14", type: "passage", name: "室外通道监测-02", serial: "DS-PS-02D531", point: "北门消防通道", zone: "室外通道", area: "园区北门", reading: "设备未上报", detail: "ISUP 心跳中断", signal: 0, network: "以太网", status: "offline", updated: "18:56:14" },
];

const fireAlarms = [
  { id: "fa1", no: "ALM-FIRE-20260723-0068", level: 1, title: "可视化红外火焰报警", location: "危化品暂存间", device: "红外火焰探测-01", serial: "DS-FL-03A821", eventType: "TMA / flame", channel: "CH 03 / R-03", time: "2026-07-23 19:42:16", duration: "00:01:12", temperature: 86.4, threshold: 70.0, state: "pending", stage: 0, operator: "待确认", note: "设备检测到明火与持续高温，请立即确认现场警情。" },
  { id: "fa2", no: "ALM-FIRE-20260723-0067", level: 1, title: "配电柜温升火警", location: "配电设备间", device: "红外火焰探测-03", serial: "DS-FL-05B219", eventType: "TMA / riseTemperature", channel: "CH 05 / R-01", time: "2026-07-23 18:26:44", duration: "00:18:32", temperature: 78.6, threshold: 65.0, state: "processing", stage: 2, operator: "李明", note: "已确认真实警情，现场人员正在执行断电和灭火处置。" },
  { id: "fa3", no: "ALM-FIRE-20260723-0062", level: 2, title: "厨房排烟口高温报警", location: "餐饮后厨", device: "红外火焰探测-06", serial: "DS-FL-06B108", eventType: "TMA / highTemperature", channel: "CH 06 / R-02", time: "2026-07-23 17:08:21", duration: "00:04:38", temperature: 66.8, threshold: 60.0, state: "confirmed", stage: 1, operator: "王晨", note: "警情已确认，已通知餐饮后厨停止用火并安排现场核查。" },
  { id: "fa4", no: "ALM-FIRE-20260723-0058", level: 2, title: "消防主机火警上报", location: "一层东区走廊", device: "用户信息传输装置-01", serial: "UT-01-C7812", eventType: "fireAlarm / zone12", channel: "回路 03 / 点位 012", time: "2026-07-23 15:36:09", duration: "00:09:17", temperature: null, threshold: null, media: false, reportData: { hostState: "火警", protocol: "ISUP / EHome", loop: "03", point: "012", eventCode: "fireAlarm", eventState: "active" }, state: "reset", stage: 3, operator: "赵凯", note: "消防主机上报 03 回路 012 点位火警，处置完成后主机与传输装置均已复位。" },
  { id: "fa5", no: "ALM-FIRE-20260723-0051", level: 2, title: "锅炉房火焰识别报警", location: "锅炉房燃气阀组", device: "红外火焰探测-04", serial: "DS-FL-04C507", eventType: "TMA / flame", channel: "CH 04 / R-02", time: "2026-07-23 13:12:47", duration: "00:02:06", temperature: 61.3, threshold: 70.0, state: "false", stage: 3, operator: "李明", note: "视频复核为锅炉正常点火反光，已按误报消警并留存影像。" },
  { id: "fa6", no: "ALM-FIRE-20260723-0046", level: 2, title: "库房异常热源报警", location: "物资库房 A 区", device: "红外火焰探测-02", serial: "DS-FL-02A416", eventType: "TMA / highTemperature", channel: "CH 02 / R-04", time: "2026-07-23 10:48:03", duration: "00:03:41", temperature: 72.5, threshold: 68.0, state: "pending", stage: 0, operator: "待确认", note: "检测区域出现持续异常热源，等待值班人员确认警情。" },
];

fireAlarms.forEach((alarm) => {
  alarm.operationHistory = [];
  alarm.assignedAt = "";
  alarm.assignmentWindowMinutes = 0;
  alarm.assignmentDeadlineAt = "";
});

const terminalWarnings = [
  { id: "tw1", no: "WRN-20260723-0118", risk: "medium", type: "power", title: "配电回路温度接近阈值", device: "智能用电采集终端-05", serial: "PW-05-A2361", point: "厨房动力配电箱", value: "68.2°C", threshold: "≥ 70.0°C", firstTime: "19:31:08", updated: "19:42:58", state: "pending", assignee: "待指派" },
  { id: "tw2", no: "WRN-20260723-0117", risk: "high", type: "gas", title: "可燃气体浓度持续升高", device: "可燃气体探测器-05", serial: "GD-05-F8016", point: "锅炉房燃气阀组", value: "18% LEL", threshold: "≥ 20% LEL", firstTime: "19:29:41", updated: "19:43:02", state: "pending", assignee: "待指派" },
  { id: "tw3", no: "WRN-20260723-0113", risk: "medium", type: "level", title: "液位终端电池电量偏低", device: "无线远程液位终端-03", serial: "WL-03-B8042", point: "生活水泵房消防水箱", value: "电量 18%", threshold: "≤ 20%", firstTime: "18:52:16", updated: "19:41:37", state: "checking", assignee: "王晨" },
  { id: "tw4", no: "WRN-20260723-0109", risk: "high", type: "pressure", title: "喷淋管网压力低于下限", device: "无线远程压力终端-09", serial: "WP-09-D7921", point: "低区喷淋末端", value: "0.28 MPa", threshold: "< 0.30 MPa", firstTime: "18:36:55", updated: "19:42:29", state: "pending", assignee: "待指派" },
  { id: "tw5", no: "WRN-20260723-0098", risk: "medium", type: "camera", title: "视频监测网络质量偏低", device: "室外通道监测-02", serial: "DS-PS-02D531", point: "北门消防通道", value: "信号 54%", threshold: "< 60%", firstTime: "17:18:30", updated: "18:56:14", state: "recovered", assignee: "陈峰" },
  { id: "tw6", no: "WRN-20260723-0086", risk: "medium", type: "camera", title: "火焰探测器镜头遮挡", device: "红外火焰探测-07", serial: "DS-FL-07B219", point: "室外危废暂存区", value: "遮挡 62%", threshold: "≥ 50%", firstTime: "15:42:07", updated: "16:08:22", state: "recovered", assignee: "赵凯" },
  { id: "tw7", no: "WRN-20260723-0074", risk: "low", type: "transmitter", title: "用户信息传输装置备电欠压", device: "用户信息传输装置-01", serial: "UT-01-C7812", point: "消防控制室", value: "备电 21.8 V", threshold: "< 22.0 V", firstTime: "12:14:33", updated: "12:28:46", state: "recovered", assignee: "李明" },
];

const terminalFaults = [
  { id: "tf1", no: "FLT-20260723-0031", terminalId: "t05", type: "level", faultType: "通信中断", faultCode: "DEV_OFFLINE", title: "液位终端连续心跳超时", device: "无线远程液位终端-04", serial: "WL-04-B9230", point: "屋顶高位水箱", source: "NB-IoT 心跳检测", firstTime: "2026-07-23 16:30:42", updated: "2026-07-23 19:43:08", duration: "03:12:26", state: "pending", assignee: "待指派", assignedAt: "", repairedAt: "", note: "设备连续多个心跳周期未上报，等待指派运维人员现场核查。" },
  { id: "tf2", no: "FLT-20260723-0030", terminalId: "t13", type: "transmitter", faultType: "备电故障", faultCode: "BACKUP_POWER_FAULT", title: "用户信息传输装置备电异常", device: "用户信息传输装置-02", serial: "UT-02-C3958", point: "消防控制室备用机柜", source: "传输装置状态上报", firstTime: "2026-07-23 18:46:17", updated: "2026-07-23 19:42:51", duration: "00:56:34", state: "handled", assignee: "陈峰", assignedAt: "2026-07-23 18:58:12", handledAt: "2026-07-23 19:38:26", conditionRecoveredAt: "2026-07-23 19:42:10", repairedAt: "", note: "已完成备用电池组与充电回路检查，设备主电及数据传输已恢复，等待确认设备稳定运行。" },
  { id: "tf9", no: "FLT-20260723-0032", terminalId: "t13", type: "transmitter", faultType: "上报延迟", faultCode: "REPORT_DELAY", title: "传输装置状态上报延迟", device: "用户信息传输装置-02", serial: "UT-02-C3958", point: "消防控制室备用机柜", source: "传输链路质量监测", firstTime: "2026-07-23 19:04:32", updated: "2026-07-23 19:43:02", duration: "00:38:30", state: "processing", assignee: "王晨", assignedAt: "2026-07-23 19:08:15", handledAt: "", repairedAt: "", note: "部分状态数据上报延迟，正在检查平台链路和设备网络配置。" },
  { id: "tf3", no: "FLT-20260723-0029", terminalId: "t14", type: "passage", faultType: "设备离线", faultCode: "ISUP_HEARTBEAT_LOST", title: "消防通道摄像头离线", device: "室外通道监测-02", serial: "DS-PS-02D531", point: "北门消防通道", source: "ISUP 设备心跳", firstTime: "2026-07-23 18:56:14", updated: "2026-07-23 19:42:44", duration: "00:46:30", state: "processing", assignee: "赵凯", assignedAt: "2026-07-23 19:02:35", repairedAt: "", note: "已指派现场巡查人员检查摄像头供电及园区交换机端口。" },
  { id: "tf4", no: "FLT-20260723-0027", terminalId: null, type: "power", faultType: "回路通信异常", faultCode: "METER_CHANNEL_TIMEOUT", title: "用电采集回路通信异常", device: "智能用电采集终端-09", serial: "PW-09-A6842", point: "锅炉房动力配电箱", source: "RS-485 采集状态", firstTime: "2026-07-23 15:18:09", updated: "2026-07-23 15:42:36", duration: "00:24:27", state: "repaired", assignee: "陈峰", assignedAt: "2026-07-23 15:23:18", repairedAt: "2026-07-23 15:42:36", note: "重新紧固采集回路接线后通信恢复，连续数据上报正常。" },
  { id: "tf5", no: "FLT-20260723-0024", terminalId: null, type: "pressure", faultType: "传感器异常", faultCode: "SENSOR_ZERO_DRIFT", title: "压力传感器零点漂移", device: "无线远程压力终端-05", serial: "WP-05-D4406", point: "消防泵房出水总管", source: "压力终端设备自检", firstTime: "2026-07-23 13:06:25", updated: "2026-07-23 13:38:14", duration: "00:31:49", state: "repaired", assignee: "李明", assignedAt: "2026-07-23 13:12:40", repairedAt: "2026-07-23 13:38:14", note: "完成压力传感器零点校准，与机械压力表比对读数正常。" },
  { id: "tf6", no: "FLT-20260723-0021", terminalId: null, type: "gas", faultType: "自检失败", faultCode: "GAS_SENSOR_SELFTEST_FAIL", title: "气敏传感器自检失败", device: "可燃气体探测器-03", serial: "GD-03-F2167", point: "厨房燃气总阀间", source: "探测器自检上报", firstTime: "2026-07-23 11:22:48", updated: "2026-07-23 11:51:20", duration: "00:28:32", state: "repaired", assignee: "王晨", assignedAt: "2026-07-23 11:28:05", repairedAt: "2026-07-23 11:51:20", note: "清洁传感器并重新执行自检，浓度读数与设备状态恢复正常。" },
  { id: "tf7", no: "FLT-20260723-0018", terminalId: null, type: "offduty", faultType: "视频丢失", faultCode: "VIDEO_SIGNAL_LOST", title: "双人值守监控视频流中断", device: "人员在离岗监测-03", serial: "DS-OD-03C284", point: "消防控制室副岗", source: "视频通道状态检测", firstTime: "2026-07-23 09:47:16", updated: "2026-07-23 10:03:52", duration: "00:16:36", state: "repaired", assignee: "赵凯", assignedAt: "2026-07-23 09:50:21", repairedAt: "2026-07-23 10:03:52", note: "重启摄像头编码通道后视频流恢复，双人值守识别服务运行正常。" },
  { id: "tf8", no: "FLT-20260723-0014", terminalId: null, type: "flame", faultType: "存储异常", faultCode: "STORAGE_WRITE_ERROR", title: "红外火焰探测器存储写入异常", device: "可视化红外火焰探测器-04", serial: "DS-FL-04C507", point: "锅炉房燃气阀组", source: "设备存储状态上报", firstTime: "2026-07-23 08:18:33", updated: "2026-07-23 08:46:05", duration: "00:27:32", state: "repaired", assignee: "陈峰", assignedAt: "2026-07-23 08:24:10", repairedAt: "2026-07-23 08:46:05", note: "更换存储卡并完成格式化，抓拍及录像写入测试正常。" },
];

terminalFaults.forEach((fault) => {
  const previousState = fault.state;
  fault.state = previousState === "repaired" ? "recovered" : previousState;
  fault.assignmentWindowMinutes = 0;
  fault.assignmentDeadlineAt = "";
  fault.handledAt = fault.handledAt || (previousState === "repaired" ? fault.repairedAt : "");
  fault.conditionRecoveredAt = fault.conditionRecoveredAt || (previousState === "repaired" ? fault.repairedAt : "");
  fault.recoveredAt = previousState === "repaired" ? fault.repairedAt : "";
  fault.handledBy = fault.handledAt ? fault.assignee : "";
  fault.handlingHistory = [];
  if (fault.assignedAt) {
    fault.handlingHistory.push({ action: "assign", operator: fault.assignee, time: fault.assignedAt, note: `指派${fault.assignee}负责设备故障处理。` });
  }
  if (fault.handledAt) {
    fault.handlingHistory.push({ action: "mark_handled", operator: fault.assignee, time: fault.handledAt, note: fault.note });
  }
  if (fault.recoveredAt) {
    fault.handlingHistory.push({ action: "confirm_recovery", operator: fault.assignee, time: fault.recoveredAt, note: "已核对设备在线状态、心跳和数据上报，确认恢复正常。" });
  }
});

terminalWarnings.forEach((warning) => {
  const completedDemo = {
    tw5: {
      assignedAt: "2026-07-23 17:22:06",
      checkingStartedAt: "2026-07-23 17:25:18",
      recoveredAt: "2026-07-23 18:56:14",
      riskReason: "视频监测链路信号质量连续低于 60%，可能造成画面卡顿或事件识别延迟。",
      handlingNote: "现场检查摄像头供电和园区交换机端口，重新压接网线后信号质量恢复稳定。",
    },
    tw6: {
      assignedAt: "2026-07-23 15:45:32",
      checkingStartedAt: "2026-07-23 15:48:09",
      recoveredAt: "2026-07-23 16:08:22",
      riskReason: "镜头遮挡比例达到 62%，超过 50% 预警阈值，可能影响火焰与高温目标识别。",
      handlingNote: "清理镜头表面灰尘并调整防护罩，复核可见光和热成像画面均恢复清晰。",
    },
    tw7: {
      assignedAt: "2026-07-23 12:16:04",
      checkingStartedAt: "2026-07-23 12:18:36",
      recoveredAt: "2026-07-23 12:28:46",
      riskReason: "备电电压低于 22.0 V，持续欠压可能导致断电后设备无法维持正常上报。",
      handlingNote: "检查备用电池组接线并恢复充电，备电电压回升且连续上报正常。",
    },
  }[warning.id];
  const checkingDemo = warning.id === "tw3" ? {
    assignedAt: "2026-07-23 18:56:03",
    checkingStartedAt: "2026-07-23 18:58:21",
    riskReason: "终端电池电量低于 20%，可能影响液位数据持续上报。",
  } : null;
  warning.assignedAt = completedDemo?.assignedAt || checkingDemo?.assignedAt || "";
  warning.checkingStartedAt = completedDemo?.checkingStartedAt || checkingDemo?.checkingStartedAt || "";
  warning.recoveredAt = completedDemo?.recoveredAt || "";
  warning.handledBy = warning.state === "recovered" ? warning.assignee : "";
  warning.riskReason = completedDemo?.riskReason || checkingDemo?.riskReason || `${warning.title}，监测值 ${warning.value} 已触发预警规则 ${warning.threshold}，需核查设备和现场状态。`;
  warning.handlingNote = completedDemo?.handlingNote || "";
  warning.handlingHistory = [
    { action: "created", operator: "系统", time: `2026-07-23 ${warning.firstTime}`, note: `监测值 ${warning.value} 触发预警阈值 ${warning.threshold}，系统生成设备预警。` },
  ];
  if (warning.assignedAt) warning.handlingHistory.push({ action: "assign", operator: "Admin", time: warning.assignedAt, note: `指派${warning.assignee}负责预警核查。` });
  if (warning.checkingStartedAt) warning.handlingHistory.push({ action: "start_check", operator: warning.assignee, time: warning.checkingStartedAt, note: "已接收任务并开始核查设备数据与现场状态。" });
  if (warning.recoveredAt) warning.handlingHistory.push({ action: "confirm_recovery", operator: warning.assignee, time: warning.recoveredAt, note: warning.handlingNote });
  warning.assignmentWindowMinutes = 0;
  warning.assignmentDeadlineAt = "";
});

const videoMonitoringModules = {
  offduty: {
    title: "双人值守监测",
    capability: "双人值守检测在线",
    category: "offduty",
    icon: "users",
    devices: 4,
    activeLabel: "当前脱岗预警",
    today: 6,
    summaryNote: "持续 06:48",
    todayNote: "已消警 4 条",
    recordTitle: "脱岗预警记录",
    recordSubtitle: "抓拍、录像和脱岗消警结果全程留痕",
    primaryAction: "查看并复核",
    channels: [
      { id: "od01", name: "消防控制室全景", device: "双人值守-01", point: "消防控制室", channel: "CH 01", status: "warning", statusLabel: "1 / 2 人在岗", active: true },
      { id: "od02", name: "消防控制室主岗", device: "双人值守-02", point: "消控室主岗", channel: "CH 02", status: "normal", statusLabel: "双人在岗", active: false },
      { id: "od03", name: "消防控制室副岗", device: "双人值守-03", point: "消控室副岗", channel: "CH 03", status: "normal", statusLabel: "双人在岗", active: false },
      { id: "od04", name: "消防主机操作席", device: "双人值守-04", point: "消防控制室", channel: "CH 04", status: "normal", statusLabel: "设备在线", active: false },
    ],
    event: {
      title: "双人值守人数不足",
      level: "脱岗预警",
      state: "待复核",
      description: "消防控制室当前仅识别到 1 名值守人员，请核实副岗人员状态。",
      eventType: "offDuty",
      metricLabel: "在岗人数",
      metricValue: "1 / 2 人",
      time: "19:40:31",
      owner: "待处置",
      note: "请先复核抓拍与前后录像，再根据人员返岗或识别误报完成消警。",
      liveSummary: "副岗连续 06:48 未检测到值守人员",
      sceneState: "当前 1 / 2 人在岗",
      sceneClass: "warning",
      sceneIcon: "user-round-x",
      closed: false,
    },
    records: [
      {
        id: "vod01", channelId: "od01", time: "2026-07-23 19:40:31", title: "双人值守人数不足", eventType: "offDuty", device: "双人值守-01", point: "消防控制室", duration: "00:06:48", owner: "待处置", state: "pending",
        requiredCount: 2, detectedCountAtTrigger: 1, currentDetectedCount: 1, triggerThresholdSeconds: 60, recoveryStableSeconds: 60,
        underCountStartedAt: "2026-07-23 19:39:31", triggeredAt: "2026-07-23 19:40:31", reviewedAt: "", recoveredAt: "", recoveryStableSince: "", completedAt: "", resolution: "", falseAlarmReason: "", handlingNote: "",
      },
      {
        id: "vod05", channelId: "od03", time: "2026-07-23 18:20:40", title: "副岗人员脱岗", eventType: "offDuty", device: "双人值守-03", point: "消防控制室", duration: "00:03:12", owner: "Admin", state: "recovered_pending",
        requiredCount: 2, detectedCountAtTrigger: 1, currentDetectedCount: 2, triggerThresholdSeconds: 60, recoveryStableSeconds: 60,
        underCountStartedAt: "2026-07-23 18:19:40", triggeredAt: "2026-07-23 18:20:40", reviewedAt: "2026-07-23 18:21:02", recoveredAt: "2026-07-23 18:22:52", recoveryStableSince: "2026-07-23 18:22:52", completedAt: "", resolution: "", falseAlarmReason: "", handlingNote: "",
      },
      {
        id: "vod02", channelId: "od03", time: "2026-07-23 16:42:09", title: "副岗短时脱岗", eventType: "offDuty", device: "双人值守-03", point: "消防控制室", duration: "00:02:25", owner: "王晨", state: "closed",
        requiredCount: 2, detectedCountAtTrigger: 1, currentDetectedCount: 2, triggerThresholdSeconds: 60, recoveryStableSeconds: 60,
        underCountStartedAt: "2026-07-23 16:41:09", triggeredAt: "2026-07-23 16:42:09", reviewedAt: "2026-07-23 16:42:38", recoveredAt: "2026-07-23 16:43:34", recoveryStableSince: "2026-07-23 16:43:34", completedAt: "2026-07-23 16:45:02", resolution: "returned", falseAlarmReason: "", handlingNote: "视频复核确认副岗人员已返回，双人值守状态持续稳定。",
      },
      {
        id: "vod03", channelId: "od02", time: "2026-07-23 11:18:36", title: "主岗短时脱岗", eventType: "offDuty", device: "双人值守-02", point: "消防控制室", duration: "00:01:17", owner: "李明", state: "closed",
        requiredCount: 2, detectedCountAtTrigger: 1, currentDetectedCount: 2, triggerThresholdSeconds: 60, recoveryStableSeconds: 60,
        underCountStartedAt: "2026-07-23 11:17:36", triggeredAt: "2026-07-23 11:18:36", reviewedAt: "2026-07-23 11:18:44", recoveredAt: "2026-07-23 11:18:53", recoveryStableSince: "2026-07-23 11:18:53", completedAt: "2026-07-23 11:19:58", resolution: "returned", falseAlarmReason: "", handlingNote: "主岗人员已返回值守区域，核对实时画面后完成消警。",
      },
      {
        id: "vod04", channelId: "od01", time: "2026-07-23 08:03:14", title: "交接班人数不足", eventType: "staffCount", device: "双人值守-01", point: "消防控制室", duration: "00:01:46", owner: "赵凯", state: "closed",
        requiredCount: 2, detectedCountAtTrigger: 1, currentDetectedCount: 1, triggerThresholdSeconds: 60, recoveryStableSeconds: 60,
        underCountStartedAt: "2026-07-23 08:02:14", triggeredAt: "2026-07-23 08:03:14", reviewedAt: "2026-07-23 08:03:28", recoveredAt: "", recoveryStableSince: "", completedAt: "2026-07-23 08:04:00", resolution: "false_alarm", falseAlarmReason: "交接班", handlingNote: "交接班人员短时处于识别区域外，核对排班与录像后按误报消警。",
      },
    ],
  },
  passage: {
    title: "消防通道监测",
    capability: "通道占用检测在线",
    category: "passage",
    icon: "traffic-cone",
    devices: 5,
    activeLabel: "当前拥堵预警",
    today: 4,
    summaryNote: "车辆占用 02:13",
    todayNote: "已恢复 3 条",
    recordTitle: "通道占用预警记录",
    recordSubtitle: "保留占用目标、事件抓拍、人工处置和闭环结果",
    primaryAction: "查看并处置",
    channels: [
      { id: "ps08", name: "东侧消防通道", device: "通道监测-08", point: "园区东侧", channel: "CH 08", status: "warning", statusLabel: "车辆持续占用", active: true },
      { id: "ps02", name: "北门消防通道", device: "通道监测-02", point: "园区北门", channel: "CH 02", status: "normal", statusLabel: "通道畅通", active: false },
      { id: "ps12", name: "西侧装卸通道", device: "通道监测-12", point: "园区西侧", channel: "CH 12", status: "normal", statusLabel: "通道畅通", active: false },
      { id: "ps15", name: "南门疏散通道", device: "通道监测-15", point: "园区南门", channel: "CH 15", status: "normal", statusLabel: "通道畅通", active: false },
      { id: "ps18", name: "地下车库出口", device: "通道监测-18", point: "地下一层", channel: "CH 18", status: "normal", statusLabel: "通道畅通", active: false },
    ],
    event: {
      title: "消防通道车辆拥堵",
      level: "拥堵预警",
      state: "待处理",
      description: "车辆持续占用东侧消防通道超过 120 秒，已影响消防车辆通行。",
      eventType: "channelOccupy",
      metricLabel: "占用时长",
      metricValue: "00:02:13",
      time: "19:41:03",
      owner: "待处置",
      note: "请根据事件抓拍、前后录像和现场实际情况完成处置。",
      liveSummary: "检测区域 R-02 内车辆持续占用消防通道",
      sceneState: "车辆占用 02:13",
      sceneClass: "warning",
      sceneIcon: "traffic-cone",
      closed: false,
    },
    records: [
      {
        id: "vps01", channelId: "ps08", time: "2026-07-23 19:41:03", title: "消防通道车辆拥堵", eventType: "channelOccupy", device: "通道监测-08", point: "东侧消防通道", duration: "00:02:13", owner: "待处置", state: "pending",
        detectionState: "occupied", occupiedTarget: "vehicle", detectedObjectLabel: "车辆", lastDetectedAt: "2026-07-23 19:41:03", triggerThresholdSeconds: 120, clearStableSeconds: 60, reviewedAt: "", clearDetectedAt: "", clearStableSince: "", resolution: "", falseAlarmReason: "", completedAt: "", handlingNote: "", operationHistory: [],
      },
      {
        id: "vps02", channelId: "ps12", time: "2026-07-23 17:55:12", title: "消防通道物品滞留", eventType: "fireEscapeDetection", device: "通道监测-12", point: "西侧装卸通道", duration: "00:31:05", owner: "赵凯", state: "closed",
        detectionState: "clear", occupiedTarget: "object", detectedObjectLabel: "卸货物品", lastDetectedAt: "2026-07-23 18:24:58", triggerThresholdSeconds: 60, clearStableSeconds: 60, reviewedAt: "2026-07-23 18:18:12", clearDetectedAt: "2026-07-23 18:24:58", clearStableSince: "2026-07-23 18:24:58", resolution: "cleared", falseAlarmReason: "", completedAt: "2026-07-23 18:26:45", handlingNote: "现场货物已全部移出消防通道，视频复核确认道路恢复畅通。",
        operationHistory: [{ action: "confirm_clear", operator: "赵凯", time: "2026-07-23 18:26:45", description: "现场货物已全部移出消防通道，视频复核确认道路恢复畅通。", photos: [] }, { action: "detection_clear", operator: "系统", time: "2026-07-23 18:24:58", description: "设备识别通道已畅通，开始计算稳定时间。", photos: [] }, { action: "start_review", operator: "赵凯", time: "2026-07-23 18:18:12", description: "开始核对事件抓拍与前后录像。", photos: [] }],
      },
      {
        id: "vps03", channelId: "ps02", time: "2026-07-23 15:08:37", title: "临停车辆占用通道", eventType: "channelOccupy", device: "通道监测-02", point: "北门消防通道", duration: "00:04:16", owner: "陈峰", state: "closed",
        detectionState: "occupied", occupiedTarget: "vehicle", detectedObjectLabel: "临停车辆", lastDetectedAt: "2026-07-23 15:08:37", triggerThresholdSeconds: 60, clearStableSeconds: 60, reviewedAt: "2026-07-23 15:09:02", clearDetectedAt: "", clearStableSince: "", resolution: "false_alarm", falseAlarmReason: "非消防通道区域", completedAt: "2026-07-23 15:13:21", handlingNote: "识别区域包含临时停车位，现场核对未占用消防通道。",
        operationHistory: [{ action: "false_alarm", operator: "陈峰", time: "2026-07-23 15:13:21", description: "非消防通道区域：识别区域包含临时停车位，现场核对未占用消防通道。", photos: [] }, { action: "start_review", operator: "陈峰", time: "2026-07-23 15:09:02", description: "开始核对事件抓拍与前后录像。", photos: [] }],
      },
      {
        id: "vps04", channelId: "ps12", time: "2026-07-23 09:26:18", title: "卸货车辆短时占用", eventType: "channelOccupy", device: "通道监测-12", point: "西侧装卸通道", duration: "00:03:42", owner: "王晨", state: "closed",
        detectionState: "clear", occupiedTarget: "vehicle", detectedObjectLabel: "卸货车辆", lastDetectedAt: "2026-07-23 09:28:52", triggerThresholdSeconds: 60, clearStableSeconds: 60, reviewedAt: "2026-07-23 09:26:40", clearDetectedAt: "2026-07-23 09:28:52", clearStableSince: "2026-07-23 09:28:52", resolution: "cleared", falseAlarmReason: "", completedAt: "2026-07-23 09:30:28", handlingNote: "卸货车辆已驶离，通道标线范围内无障碍物，确认恢复通行。",
        operationHistory: [{ action: "confirm_clear", operator: "王晨", time: "2026-07-23 09:30:28", description: "卸货车辆已驶离，通道标线范围内无障碍物，确认恢复通行。", photos: [] }, { action: "detection_clear", operator: "系统", time: "2026-07-23 09:28:52", description: "设备识别通道已畅通，开始计算稳定时间。", photos: [] }, { action: "start_review", operator: "王晨", time: "2026-07-23 09:26:40", description: "开始核对事件抓拍与前后录像。", photos: [] }],
      },
    ],
  },
  flame: {
    title: "红外火灾监控摄像头",
    capability: "火焰与温度检测在线",
    category: "flame",
    icon: "scan-thermal",
    devices: 6,
    activeLabel: "当前火灾告警",
    today: 5,
    summaryNote: "最高温 86.4°C",
    todayNote: "已闭环 4 条",
    recordTitle: "火灾告警记录",
    recordSubtitle: "可见光、热成像、告警前后录像和处置结果统一留存",
    primaryAction: "查看火灾告警",
    channels: [
      { id: "fl01", name: "危化品暂存间", device: "红外火灾摄像头-01", point: "仓储一区", channel: "CH 03", status: "warning", statusLabel: "火焰 / 高温", active: true },
      { id: "fl03", name: "配电设备间", device: "红外火灾摄像头-03", point: "动力中心", channel: "CH 05", status: "normal", statusLabel: "温度正常", active: false },
      { id: "fl04", name: "锅炉房燃气阀组", device: "红外火灾摄像头-04", point: "动力中心", channel: "CH 04", status: "normal", statusLabel: "温度正常", active: false },
      { id: "fl06", name: "厨房排烟口", device: "红外火灾摄像头-06", point: "餐饮后厨", channel: "CH 06", status: "normal", statusLabel: "温度正常", active: false },
      { id: "fl07", name: "室外危废暂存区", device: "红外火灾摄像头-07", point: "室外东区", channel: "CH 07", status: "normal", statusLabel: "温度正常", active: false },
      { id: "fl09", name: "物资库房 A 区", device: "红外火灾摄像头-09", point: "仓储二区", channel: "CH 09", status: "normal", statusLabel: "温度正常", active: false },
    ],
    event: {
      title: "检测到火焰与持续高温",
      level: "一级火警",
      state: "待确认",
      description: "危化品暂存间检测到明火特征，最高温度已超过报警阈值 16.4°C。",
      eventType: "TMA / flame",
      metricLabel: "最高温度",
      metricValue: "86.4°C",
      time: "19:42:16",
      owner: "待指派",
      note: "进入火灾告警详情可查看抓拍、前后录像并完成确认和处置。",
      liveSummary: "检测区域 R-03 · 最高温 86.4°C · 阈值 70.0°C",
      sceneState: "火焰 / 86.4°C",
      sceneClass: "danger",
      sceneIcon: "flame",
      closed: false,
    },
    records: [
      { id: "vfl01", fireAlarmId: "fa1", time: "2026-07-23 19:42:16", title: "可视化红外火焰报警", eventType: "TMA / flame", device: "红外火灾摄像头-01", point: "危化品暂存间", duration: "00:01:12", owner: "待指派", state: "active" },
      { id: "vfl02", fireAlarmId: "fa2", time: "2026-07-23 18:26:44", title: "配电柜温升火警", eventType: "TMA / riseTemperature", device: "红外火灾摄像头-03", point: "配电设备间", duration: "00:18:32", owner: "李明", state: "processing" },
      { id: "vfl03", fireAlarmId: "fa3", time: "2026-07-23 17:08:21", title: "厨房排烟口高温报警", eventType: "TMA / highTemperature", device: "红外火灾摄像头-06", point: "餐饮后厨", duration: "00:04:38", owner: "王晨", state: "closed" },
      { id: "vfl04", fireAlarmId: "fa5", time: "2026-07-23 13:12:47", title: "锅炉房火焰识别报警", eventType: "TMA / flame", device: "红外火灾摄像头-04", point: "锅炉房燃气阀组", duration: "00:02:06", owner: "李明", state: "closed" },
    ],
  },
};

const categoryMeta = {
  flame: { icon: "flame", className: "red", label: "火焰 / 高温" },
  passage: { icon: "traffic-cone", className: "amber", label: "通道占用" },
  offduty: { icon: "user-round-x", className: "purple", label: "人员离岗" },
};

const terminalTypeMeta = {
  power: { label: "智能用电采集终端", icon: "zap", className: "blue" },
  transmitter: { label: "用户信息传输装置", icon: "radio-tower", className: "cyan" },
  level: { label: "无线远程液位采集终端", icon: "waves", className: "cyan" },
  pressure: { label: "无线远程压力采集终端", icon: "gauge", className: "blue" },
  gas: { label: "可燃气体探测器", icon: "wind", className: "amber" },
  offduty: { label: "人员在离岗监测", icon: "user-round-x", className: "purple" },
  passage: { label: "室外通道监测", icon: "traffic-cone", className: "amber" },
  flame: { label: "可视化红外火焰探测器", icon: "flame", className: "red" },
};

const terminalTypeProfiles = {
  power: { model: "EC-PW200", firmware: "V2.4.8", protocol: "MQTT / 4G", power: "AC 220V", interval: "60 秒", threshold: "温度 70.0°C · 漏电 300 mA" },
  transmitter: { model: "UT-9000", firmware: "V3.8.2", protocol: "ISUP / 以太网", power: "主电 + 备电", interval: "30 秒", threshold: "主备电、线路及上报状态" },
  level: { model: "WL-NB100", firmware: "V1.9.6", protocol: "CoAP / NB-IoT", power: "锂电池供电", interval: "5 分钟", threshold: "液位低限 60% · 电量低限 20%" },
  pressure: { model: "WP-NB300", firmware: "V2.1.3", protocol: "CoAP / NB-IoT", power: "锂电池供电", interval: "5 分钟", threshold: "压力 0.30 - 0.60 MPa" },
  gas: { model: "GD-485", firmware: "V4.2.1", protocol: "Modbus / RS-485", power: "DC 24V", interval: "10 秒", threshold: "预警 20% LEL · 告警 25% LEL" },
  offduty: { model: "DS-2CD7A", firmware: "V5.8.12", protocol: "ISUP / 以太网", power: "PoE", interval: "实时", threshold: "人数不足持续 60 秒" },
  passage: { model: "DS-2CD7T", firmware: "V5.7.18", protocol: "ISUP / 以太网", power: "PoE", interval: "实时", threshold: "占用持续 60 秒" },
  flame: { model: "DS-2TD2637", firmware: "V5.6.35", protocol: "ISUP / 以太网", power: "DC 12V", interval: "实时", threshold: "高温 70.0°C · 火焰识别" },
};

const terminalStatusLabels = { normal: "正常", warning: "预警", alarm: "告警", offline: "离线" };
const fireAlarmStateLabels = { pending: "待确认", confirmed: "已确认", processing: "处置中", reset: "已复位", false: "误报消警" };
const fireActionMeta = {
  confirm: { type: "警情确认", title: "确认警情", icon: "badge-check", prompt: "请填写确认警情的现场依据，照片可选。", placeholder: "例如：已到达现场，确认存在明火，已通知现场人员疏散。" },
  false: { type: "误报消警", title: "误报消警", icon: "circle-x", prompt: "请填写误报判定依据，照片可选。", placeholder: "例如：经现场核查为设备反光，未发现明火，确认误报并完成消警。" },
  dispose: { type: "警情处置", title: "警情处置", icon: "radio", prompt: "请填写现场处置过程和结果，照片可选。", placeholder: "例如：已完成断电、疏散和灭火处置，现场温度恢复正常。" },
  reset: { type: "设备复位", title: "设备复位", icon: "rotate-ccw", prompt: "请填写设备复位前后的状态，照片可选。", placeholder: "例如：现场警情已排除，设备和消防主机复位成功，数据上报正常。" },
};
const terminalWarningStateLabels = { pending: "待核查", checking: "核查中", recovered: "已恢复" };
const terminalFaultStateLabels = { pending: "待处理", processing: "处理中", handled: "已处理待恢复", recovered: "已恢复" };
const terminalWarningTypeMeta = {
  power: { label: "智能用电", icon: "zap", className: "blue" },
  transmitter: { label: "用户信息传输装置", icon: "radio-tower", className: "cyan" },
  gas: { label: "可燃气体", icon: "wind", className: "amber" },
  level: { label: "远程液位", icon: "waves", className: "cyan" },
  pressure: { label: "远程压力", icon: "gauge", className: "blue" },
  camera: { label: "视频监测", icon: "cctv", className: "purple" },
};

const assignmentDeadlineRules = {
  fire: {
    defaultMinutes: 1,
    options: [
      { value: 1, label: "1 分钟" },
      { value: 3, label: "3 分钟" },
      { value: 5, label: "5 分钟" },
    ],
  },
  warning: {
    defaultMinutes: 5,
    options: [
      { value: 5, label: "5 分钟" },
      { value: 10, label: "10 分钟" },
      { value: 15, label: "15 分钟" },
    ],
  },
  fault: {
    defaultMinutes: 240,
    options: [
      { value: 30, label: "30 分钟" },
      { value: 240, label: "4 小时" },
      { value: 1440, label: "24 小时" },
    ],
  },
};

const stateLabels = { pending: "待处置", processing: "处理中", closed: "已闭环" };
const viewLabels = { dashboard: "消防安全看板", alarms: "告警中心", devices: "设备管理", terminals: "设备运行状态", "terminal-detail": "设备运行详情", "terminal-alarms": "设备告警列表", "terminal-warnings": "设备预警列表", "terminal-faults": "设备故障记录", "video-monitoring": "视频监控", access: "海康设备接入状态" };
const viewIcons = { dashboard: "flame", alarms: "siren", devices: "cctv", terminals: "cpu", "terminal-detail": "panel-top-open", "terminal-alarms": "siren", "terminal-warnings": "triangle-alert", "terminal-faults": "wrench", "video-monitoring": "video", access: "network" };

let selectedAlertId = "flame";
let dashboardFilter = "pending";
let cameraMode = "thermal";
let selectedDisposal = "现场核查";
let selectedTerminalType = "all";
let selectedTerminalId = "t01";
let selectedFireAlarmId = "fa1";
let selectedFireEvidence = "images";
let selectedFireImageMode = "visible";
let selectedFireVideoOffset = "before";
let selectedFireAction = null;
let pendingFireActionPhotos = [];
let assignmentTargetType = "fire";
let assignmentTargetId = "fa1";
let selectedTerminalFaultId = "tf1";
let selectedTerminalWarningId = "tw5";
let selectedVideoModule = "offduty";
let selectedVideoViewMode = "visible";
let selectedVideoRecordFilter = "all";
let selectedVideoRecordId = "";
let selectedOffDutyResolution = "returned";
let selectedPassageResolution = "cleared";
let pendingPassageActionPhotos = [];
let selectedPassageActionRecordId = "";
const selectedVideoChannelIds = { offduty: "od01", passage: "ps08", flame: "fl01" };
const CRITICAL_FIRE_SNOOZE_MS = 5 * 60 * 1000;
const CRITICAL_FIRE_SNOOZE_KEY = "smart-fire-critical-snoozes";
let videoPlaybackTimer;
let videoRecordDurationTimer;
let toastTimer;
let criticalFireReminderTimer;
let currentCriticalFireAlarmId = null;
let criticalFireSnoozeCache = {};
let criticalFireBaseDurationSeconds = 0;
let criticalFireOpenedAt = 0;
let criticalFirePreviousFocus = null;
let alarmSoundMuted = false;
let alarmAudioContext;
let alarmToneTimer;
const currentUser = { name: "Admin" };
const MAX_FIRE_ACTION_PHOTOS = 6;
const MAX_FIRE_ACTION_PHOTO_SIZE = 10 * 1024 * 1024;

function getAlert(id) {
  return alerts.find((item) => item.id === id) || alerts[0];
}

function refreshIcons(root = document) {
  if (window.lucide) {
    window.lucide.createIcons({ root });
  }
}

function renderAlertQueue() {
  const queue = document.querySelector("#alertQueue");
  const filtered = alerts.filter((item) => item.state === dashboardFilter).slice(0, dashboardFilter === "closed" ? 4 : 3);

  if (!filtered.some((item) => item.id === selectedAlertId)) {
    selectedAlertId = filtered[0]?.id || "flame";
  }

  queue.innerHTML = filtered.map((item) => `
    <button class="alert-item ${item.id === selectedAlertId ? "active" : ""}" type="button" data-alert-id="${item.id}">
      <span class="alert-item-top"><span class="severity-label level-${item.level === 1 ? "one" : item.level === 2 ? "two" : "three"}">${item.level}级</span><time class="alert-item-time">${item.time}</time></span>
      <strong>${item.title}</strong>
      <span class="alert-item-meta"><i data-lucide="map-pin"></i>${item.location} · ${item.device}</span>
      <span class="alert-item-footer"><code>${item.eventType}</code><span>${stateLabels[item.state]} · ${item.duration}</span></span>
    </button>
  `).join("");

  queue.querySelectorAll("[data-alert-id]").forEach((button) => {
    button.addEventListener("click", () => selectAlert(button.dataset.alertId));
  });
  refreshIcons(queue);
  updateFocusDetail();
}

function selectAlert(id) {
  selectedAlertId = id;
  const selected = getAlert(id);
  if (selected.category !== "flame" && cameraMode === "thermal") {
    cameraMode = "visible";
  }
  document.querySelectorAll(".alert-item").forEach((item) => item.classList.toggle("active", item.dataset.alertId === id));
  updateFocusDetail();
}

function updateFocusDetail() {
  const alert = getAlert(selectedAlertId);
  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };

  setText("#focusCameraName", `${alert.location} · ${alert.device}`);
  setText("#focusTimestamp", alert.dateTime);
  setText("#evidenceSummary", alert.summary);
  setText("#detailSeverity", `${alert.level}级`);
  setText("#detailState", stateLabels[alert.state]);
  setText("#detailTitle", alert.title);
  setText("#detailCode", `ALM-${alert.dateTime.slice(0, 10).replaceAll("-", "")}-${String(alerts.indexOf(alert) + 42).padStart(4, "0")}`);
  setText("#detailLocation", alert.location);
  setText("#detailDevice", alert.device);
  setText("#detailSerial", alert.serial);
  setText("#detailEventType", alert.eventType);
  setText("#detailChannel", alert.channel);
  setText("#detailTime", alert.dateTime);
  setText("#detailOwner", alert.owner);

  const severity = document.querySelector("#detailSeverity");
  severity.className = `severity-label level-${alert.level === 1 ? "one" : alert.level === 2 ? "two" : "three"}`;
  const state = document.querySelector("#detailState");
  state.className = "state-label";

  const temperature = document.querySelector("#temperatureReading");
  temperature.hidden = alert.category !== "flame";
  if (alert.category === "flame") {
    document.querySelector("#currentTemp").innerHTML = `${alert.currentTemp.toFixed(1)}<em>°C</em>`;
    setText("#thresholdTemp", `${alert.threshold.toFixed(1)}°C`);
  }

  const temperatureScale = document.querySelector("#temperatureScale");
  temperatureScale.hidden = cameraMode !== "thermal" || alert.category !== "flame";
  document.querySelectorAll("[data-camera-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.cameraMode === cameraMode);
    button.disabled = alert.category !== "flame" && button.dataset.cameraMode === "thermal";
  });

  document.querySelectorAll(".event-detail [data-action='handle']").forEach((button) => {
    button.dataset.alertId = alert.id;
    button.disabled = alert.state === "closed";
    if (button.classList.contains("primary-action")) {
      button.innerHTML = alert.state === "pending" ? '<i data-lucide="radio"></i>接警并处置' : alert.state === "processing" ? '<i data-lucide="clipboard-check"></i>更新处置进度' : '<i data-lucide="circle-check"></i>事件已闭环';
    }
  });

  drawScene(document.querySelector("#focusCanvas"), alert.category, cameraMode, true);
  refreshIcons(document.querySelector(".event-detail"));
}

function renderAlarmTable() {
  const query = document.querySelector("#alarmSearch").value.trim().toLowerCase();
  const type = document.querySelector("#typeFilter").value;
  const level = document.querySelector("#levelFilter").value;
  const state = document.querySelector("#stateFilter").value;
  const filtered = alerts.filter((item) => {
    const haystack = `${item.title} ${item.location} ${item.device} ${item.serial} ${item.eventType}`.toLowerCase();
    return (!query || haystack.includes(query)) && (type === "all" || item.category === type) && (level === "all" || item.level === Number(level)) && (state === "all" || item.state === state);
  });
  const tbody = document.querySelector("#alarmTableBody");
  tbody.innerHTML = filtered.map((item) => {
    const meta = categoryMeta[item.category];
    return `
      <tr data-row-alert="${item.id}">
        <td><span class="severity-label level-${item.level === 1 ? "one" : item.level === 2 ? "two" : "three"}">${item.level}级</span></td>
        <td><div class="table-event"><span class="type-icon ${meta.className}"><i data-lucide="${meta.icon}"></i></span><div><strong>${item.title}</strong><small>ALM-${item.dateTime.slice(0, 10).replaceAll("-", "")}-${String(alerts.indexOf(item) + 42).padStart(4, "0")}</small></div></div></td>
        <td><div class="point-cell"><strong>${item.location}</strong><small>${item.device}</small></div></td>
        <td><code>${item.eventType}</code></td>
        <td>${item.dateTime}</td>
        <td>${item.duration}</td>
        <td><span class="state-dot ${item.state}">${stateLabels[item.state]}</span></td>
        <td>${item.owner}</td>
        <td><button class="table-event-action" type="button" title="查看告警详情" aria-label="查看告警详情" data-open-alert="${item.id}"><i data-lucide="arrow-up-right"></i></button></td>
      </tr>`;
  }).join("");

  document.querySelector("#alarmTableEmpty").hidden = filtered.length > 0;
  document.querySelector("#alarmCountLabel").textContent = `共 ${filtered.length} 条记录`;
  tbody.querySelectorAll("[data-open-alert]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedAlertId = button.dataset.openAlert;
      openHandleModal(button.dataset.openAlert, true);
    });
  });
  tbody.querySelectorAll("[data-terminal-fault]").forEach((button) => {
    button.addEventListener("click", () => {
      const faultId = button.dataset.terminalFault;
      switchView("terminal-faults", null, document.querySelector('.nav-subitem[data-view="terminal-faults"]'));
      requestAnimationFrame(() => openFaultDetail(faultId));
    });
  });
  refreshIcons(tbody);
}

function getTerminalForFault(fault) {
  if (!fault) return null;
  return terminals.find((terminal) => terminal.id === fault.terminalId || terminal.serial === fault.serial) || null;
}

function getActiveFaultForTerminal(terminal) {
  if (!terminal) return null;
  return terminalFaults.find((fault) => fault.state !== "recovered" && (fault.terminalId === terminal.id || fault.serial === terminal.serial)) || null;
}

function isTerminalHealthy(terminal) {
  return Boolean(terminal && terminal.status === "normal" && terminal.signal > 0);
}

function isFaultConditionRecovered(fault) {
  return fault.state === "recovered" || Boolean(fault.conditionRecoveredAt);
}

function getOpenFaultsForTerminalFault(fault) {
  return terminalFaults.filter((item) => item.serial === fault.serial && item.state !== "recovered");
}

function getOtherOpenFaultsForTerminalFault(fault) {
  return getOpenFaultsForTerminalFault(fault).filter((item) => item.id !== fault.id);
}

function getTerminalRuntimeMeta(terminal) {
  if (!terminal) return { label: "状态未知", icon: "circle-help", className: "unknown", updated: "--" };
  const icon = terminal.status === "normal" ? "circle-check" : terminal.status === "warning" ? "triangle-alert" : terminal.status === "alarm" ? "siren" : "wifi-off";
  return { label: terminalStatusLabels[terminal.status], icon, className: terminal.status === "normal" ? "online" : terminal.status, updated: terminal.updated };
}

function renderDeviceTable(category = "all") {
  const query = document.querySelector("#deviceSearch")?.value.trim().toLowerCase() || "";
  const filtered = devices.filter((item) => {
    const haystack = `${item.name} ${item.serial} ${item.point} ${item.zone}`.toLowerCase();
    return (category === "all" || item.category === category) && (!query || haystack.includes(query));
  });
  const tbody = document.querySelector("#deviceTableBody");
  tbody.innerHTML = filtered.map((item) => {
    const meta = categoryMeta[item.category];
    return `
      <tr>
        <td><div class="device-name"><span class="type-icon ${meta.className}"><i data-lucide="${meta.icon}"></i></span><div><strong>${item.name}</strong><small>${item.serial}</small></div></div></td>
        <td><div class="point-cell"><strong>${item.point}</strong><small>${item.zone}</small></div></td>
        <td>${item.type}</td>
        <td><div class="capability-cell"><code>${item.capability}</code><small>${item.category === "flame" ? "温度 / 热图 / 可见光图" : "eventType / eventState / 图片"}</small></div></td>
        <td><div class="network-cell"><strong><span class="signal-bars ${Number(item.network.replace("%", "")) < 60 ? "weak" : ""}"><i></i><i></i><i></i></span>${item.network}</strong><small>${item.heartbeat}</small></div></td>
        <td><span class="status-pill ${item.online ? "online" : "offline"}">${item.online ? "在线" : "离线"}</span></td>
        <td>${item.firmware}</td>
        <td><button class="table-event-action" type="button" title="设备设置" aria-label="设备设置"><i data-lucide="settings-2"></i></button></td>
      </tr>`;
  }).join("");
  refreshIcons(tbody);
}

function renderTerminalTable() {
  const query = document.querySelector("#terminalSearch")?.value.trim().toLowerCase() || "";
  const status = document.querySelector("#terminalStatusFilter")?.value || "all";
  const zone = document.querySelector("#terminalZoneFilter")?.value || "all";
  const filtered = terminals.filter((item) => {
    const haystack = `${item.name} ${item.serial} ${item.point} ${item.area} ${item.reading}`.toLowerCase();
    return (selectedTerminalType === "all" || item.type === selectedTerminalType) && (status === "all" || item.status === status) && (zone === "all" || item.zone === zone) && (!query || haystack.includes(query));
  });
  const tbody = document.querySelector("#terminalTableBody");
  if (!tbody) return;
  tbody.innerHTML = filtered.map((item) => {
    const meta = terminalTypeMeta[item.type];
    const statusIcon = item.status === "normal" ? "circle-check" : item.status === "warning" ? "triangle-alert" : item.status === "alarm" ? "siren" : "wifi-off";
    const activeFault = getActiveFaultForTerminal(item);
    const faultStatus = activeFault ? `<button class="terminal-fault-link ${activeFault.state}" type="button" data-terminal-fault="${activeFault.id}" title="查看关联故障">${terminalFaultStateLabels[activeFault.state]}</button>` : "";
    return `
      <tr data-terminal-row="${item.id}">
        <td><div class="terminal-device"><span class="terminal-type-icon ${meta.className}"><i data-lucide="${meta.icon}"></i></span><div><strong>${item.name}</strong><small>${item.serial}</small></div></div></td>
        <td><div class="point-cell"><strong>${item.point}</strong><small>${item.area} · ${item.zone}</small></div></td>
        <td>${meta.label}</td>
        <td><div class="terminal-reading ${item.status}"><span class="reading-icon"><i data-lucide="${statusIcon}"></i></span><div><strong>${item.reading}</strong><small>${item.detail}</small></div></div></td>
        <td><div class="terminal-comms"><span class="signal-bars ${item.signal < 60 ? "weak" : ""} ${item.signal === 0 ? "offline" : ""}"><i></i><i></i><i></i></span><div><strong>${item.signal}%</strong><small>${item.network}</small></div></div></td>
        <td><div class="terminal-status-stack"><span class="status-pill ${item.status === "normal" ? "online" : item.status}">${terminalStatusLabels[item.status]}</span>${faultStatus}</div></td>
        <td>${item.updated}</td>
        <td><button class="table-event-action" type="button" title="查看设备详情" aria-label="查看设备详情" data-terminal-action="${item.id}"><i data-lucide="arrow-up-right"></i></button></td>
      </tr>`;
  }).join("");

  document.querySelector("#terminalTableEmpty").hidden = filtered.length > 0;
  document.querySelector("#terminalCountLabel").textContent = selectedTerminalType === "all" && status === "all" && zone === "all" && !query ? "显示 14 台重点终端，共 57 台" : `当前筛选显示 ${filtered.length} 台终端`;
  tbody.querySelectorAll("[data-terminal-action]").forEach((button) => {
    button.addEventListener("click", () => openTerminalDetail(button.dataset.terminalAction));
  });
  refreshIcons(tbody);
}

function terminalTimeOffset(time, minutes) {
  const [hour, minute, second] = time.split(":").map(Number);
  const total = (hour * 3600 + minute * 60 + second - minutes * 60 + 86400) % 86400;
  return [Math.floor(total / 3600), Math.floor((total % 3600) / 60), total % 60].map((value) => String(value).padStart(2, "0")).join(":");
}

function terminalHistoryRows(terminal) {
  const currentLabel = terminal.status === "normal" ? "状态周期上报" : terminal.status === "offline" ? "通信心跳异常" : terminal.status === "warning" ? "监测值触发预警" : "设备事件上报";
  return [
    { time: terminal.updated, event: currentLabel, value: terminal.reading, state: terminal.status },
    { time: terminalTimeOffset(terminal.updated, 30), event: terminal.signal ? "通信心跳" : "心跳等待恢复", value: terminal.signal ? `${terminal.network} · 信号 ${terminal.signal}%` : `${terminal.network} · 未收到心跳`, state: terminal.signal ? "normal" : "offline" },
    { time: terminalTimeOffset(terminal.updated, 60), event: "数据采集", value: terminal.detail, state: terminal.status === "offline" ? "offline" : "normal" },
    { time: terminalTimeOffset(terminal.updated, 120), event: "设备自检", value: "采集、存储与通信模块检查完成", state: "normal" },
  ];
}

function getTerminalRelatedEvent(terminal) {
  const fault = getActiveFaultForTerminal(terminal);
  if (fault) return { kind: "fault", id: fault.id, tone: "fault", icon: "wrench", label: "关联故障", title: fault.title, no: fault.no, state: terminalFaultStateLabels[fault.state], time: fault.updated };
  const warning = terminalWarnings.find((item) => item.serial === terminal.serial && item.state !== "recovered");
  if (warning) return { kind: "warning", id: warning.id, tone: "warning", icon: "triangle-alert", label: "关联预警", title: warning.title, no: warning.no, state: terminalWarningStateLabels[warning.state], time: warning.updated };
  if (terminal.alertId) {
    const alert = getAlert(terminal.alertId);
    return { kind: "alert", id: alert.id, tone: "alarm", icon: "siren", label: "关联告警", title: alert.title, no: alert.eventType, state: stateLabels[alert.state], time: alert.dateTime };
  }
  return null;
}

function openTerminalDetail(id) {
  if (!terminals.some((item) => item.id === id)) return;
  selectedTerminalId = id;
  switchView("terminal-detail", null, document.querySelector('.nav-subitem[data-view="terminals"]'));
}

function returnToTerminalList() {
  const terminalId = selectedTerminalId;
  switchView("terminals", null, document.querySelector('.nav-subitem[data-view="terminals"]'));
  requestAnimationFrame(() => document.querySelector(`[data-terminal-row="${terminalId}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
}

function openTerminalRelatedEvent(terminal, related) {
  if (!related) return;
  if (related.kind === "fault") {
    switchView("terminal-faults", null, document.querySelector('.nav-subitem[data-view="terminal-faults"]'));
    requestAnimationFrame(() => openFaultDetail(related.id));
    return;
  }
  if (related.kind === "warning") {
    document.querySelector("#terminalWarningSearch").value = terminal.serial;
    document.querySelector("#terminalWarningTypeFilter").value = "all";
    document.querySelector("#terminalWarningStateFilter").value = "all";
    switchView("terminal-warnings", null, document.querySelector('.nav-subitem[data-view="terminal-warnings"]'));
    showToast("已定位关联设备预警");
    return;
  }
  selectedAlertId = terminal.alertId;
  dashboardFilter = "pending";
  cameraMode = terminal.type === "flame" ? "thermal" : "visible";
  renderAlertQueue();
  switchView("dashboard");
  requestAnimationFrame(() => document.querySelector(".operations-section")?.scrollIntoView({ behavior: "smooth", block: "start" }));
}

function renderTerminalDetail() {
  const terminal = terminals.find((item) => item.id === selectedTerminalId) || terminals[0];
  const panel = document.querySelector("#view-terminal-detail");
  if (!panel || !terminal) return;
  const typeMeta = terminalTypeMeta[terminal.type];
  const runtimeMeta = getTerminalRuntimeMeta(terminal);
  const profile = terminalTypeProfiles[terminal.type];
  const related = getTerminalRelatedEvent(terminal);
  const healthy = isTerminalHealthy(terminal);
  const history = terminalHistoryRows(terminal);
  const statusCopy = terminal.status === "normal" ? "设备采集、通信和数据上报均正常" : terminal.status === "warning" ? "监测数据接近阈值，请持续关注" : terminal.status === "alarm" ? "设备已产生业务告警，请及时处置" : "设备通信中断，请检查供电和网络";
  panel.innerHTML = `<div class="page-heading terminal-detail-heading">
    <div class="terminal-detail-title"><button class="icon-button" type="button" data-terminal-detail-back title="返回设备列表" aria-label="返回设备列表"><i data-lucide="arrow-left"></i></button><div><div class="eyebrow"><span>设备运行状态</span><span>${escapeHtml(typeMeta.label)}</span></div><h1>${escapeHtml(terminal.name)}</h1></div></div>
    <div class="page-actions"><span class="updated-at">最近上报 <b>${terminal.updated}</b></span><button class="secondary-button" type="button" data-terminal-detail-sync><i data-lucide="refresh-cw"></i>同步状态</button></div>
  </div>
  <section class="terminal-detail-overview ${runtimeMeta.className}">
    <div class="terminal-detail-identity"><span class="terminal-detail-device-icon ${typeMeta.className}"><i data-lucide="${typeMeta.icon}"></i></span><div><span class="status-pill ${terminal.status === "normal" ? "online" : terminal.status}">${runtimeMeta.label}</span><strong>${escapeHtml(terminal.serial)}</strong><small>${escapeHtml(terminal.point)} · ${escapeHtml(terminal.area)}</small></div></div>
    <div><span>当前读数</span><strong>${escapeHtml(terminal.reading)}</strong><small>${escapeHtml(terminal.detail)}</small></div>
    <div><span>通信质量</span><strong class="${terminal.signal < 60 ? "danger-text" : "success-text"}">${terminal.signal}%</strong><small>${escapeHtml(terminal.network)}</small></div>
    <div><span>运行状态</span><strong class="terminal-runtime-${terminal.status}">${runtimeMeta.label}</strong><small>${statusCopy}</small></div>
  </section>
  <div class="terminal-detail-grid">
    <section class="terminal-detail-panel"><header><div><i data-lucide="file-text"></i><span><strong>设备档案</strong><small>安装与通信配置信息</small></span></div></header><dl class="terminal-detail-list">
      <div><dt>设备名称</dt><dd>${escapeHtml(terminal.name)}</dd></div><div><dt>设备编号</dt><dd><code>${escapeHtml(terminal.serial)}</code></dd></div><div><dt>设备类型</dt><dd>${escapeHtml(typeMeta.label)}</dd></div><div><dt>设备型号</dt><dd>${profile.model}</dd></div><div><dt>固件版本</dt><dd>${profile.firmware}</dd></div><div><dt>安装点位</dt><dd>${escapeHtml(terminal.point)}</dd></div><div><dt>所属区域</dt><dd>${escapeHtml(terminal.zone)} · ${escapeHtml(terminal.area)}</dd></div><div><dt>供电方式</dt><dd>${profile.power}</dd></div>
    </dl></section>
    <section class="terminal-detail-panel"><header><div><i data-lucide="activity"></i><span><strong>数据与阈值</strong><small>当前采集配置及上报状态</small></span></div></header><div class="terminal-reading-focus ${terminal.status}"><span><i data-lucide="${runtimeMeta.icon}"></i></span><div><small>实时监测数据</small><strong>${escapeHtml(terminal.reading)}</strong><p>${escapeHtml(terminal.detail)}</p></div></div><dl class="terminal-detail-list compact"><div><dt>通信协议</dt><dd>${profile.protocol}</dd></div><div><dt>上报周期</dt><dd>${profile.interval}</dd></div><div><dt>监测阈值</dt><dd>${profile.threshold}</dd></div><div><dt>最近同步</dt><dd>2026-07-23 ${terminal.updated}</dd></div></dl></section>
  </div>
  <section class="terminal-detail-panel terminal-history-panel"><header><div><i data-lucide="history"></i><span><strong>最近状态记录</strong><small>设备上报、心跳及自检记录</small></span></div><b>最近 4 条</b></header><div class="data-table-wrap"><table class="data-table terminal-history-table"><thead><tr><th>时间</th><th>记录类型</th><th>上报内容</th><th>状态</th></tr></thead><tbody>${history.map((item) => `<tr><td>2026-07-23 ${item.time}</td><td>${item.event}</td><td>${escapeHtml(item.value)}</td><td><span class="status-pill ${item.state === "normal" ? "online" : item.state}">${terminalStatusLabels[item.state]}</span></td></tr>`).join("")}</tbody></table></div></section>
  <section class="terminal-related-section ${related ? related.tone : "normal"}"><div class="terminal-related-icon"><i data-lucide="${related ? related.icon : "shield-check"}"></i></div><div><small>${related ? related.label : "关联事件"}</small><strong>${related ? escapeHtml(related.title) : "当前无关联告警、预警或故障"}</strong><p>${related ? `${escapeHtml(related.no)} · ${escapeHtml(related.state)} · ${escapeHtml(related.time)}` : "设备运行状态稳定，最近数据和通信记录均正常。"}</p></div>${related ? `<button class="secondary-button" type="button" data-terminal-related-action><i data-lucide="arrow-up-right"></i>查看${related.label}</button>` : ""}</section>`;
  panel.querySelector("[data-terminal-detail-back]").addEventListener("click", returnToTerminalList);
  panel.querySelector("[data-terminal-detail-sync]").addEventListener("click", () => {
    terminal.updated = formatClock(new Date());
    document.querySelector("#terminalSyncTime").textContent = terminal.updated;
    renderTerminalTable();
    renderTerminalDetail();
    showToast(`${terminal.name}状态已同步`);
  });
  panel.querySelector("[data-terminal-related-action]")?.addEventListener("click", () => openTerminalRelatedEvent(terminal, related));
  refreshIcons(panel);
}

function getFireAlarm(id) {
  return fireAlarms.find((item) => item.id === id) || fireAlarms[0];
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[character]));
}

function parseAppDateTime(value) {
  if (!value) return null;
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?$/);
  if (!match) return null;
  const [, year, month, day, hours, minutes, seconds = "0"] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes), Number(seconds));
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatAssignmentDuration(minutes) {
  if (minutes >= 60 && minutes % 60 === 0) return `${minutes / 60} 小时`;
  return `${minutes} 分钟`;
}

function getAssignmentDeadlineMeta(item) {
  const date = parseAppDateTime(item?.assignmentDeadlineAt);
  if (!date) return { text: "--", overdue: false, valid: false };
  const pad = (value) => String(value).padStart(2, "0");
  return {
    text: `${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`,
    overdue: date.getTime() < Date.now(),
    valid: true,
  };
}

function renderAssignmentPersonCell(item) {
  const deadline = getAssignmentDeadlineMeta(item);
  const unassigned = item.assignee === "待指派";
  const deadlineText = !deadline.valid ? "截止 --" : deadline.overdue ? `已超时 · ${deadline.text}` : `截止 ${deadline.text}`;
  return `<div class="assignee-cell ${unassigned ? "unassigned" : ""}"><strong>${escapeHtml(item.assignee)}</strong><small class="assignment-deadline ${deadline.overdue ? "overdue" : ""}" data-assignment-deadline="${escapeHtml(item.assignmentDeadlineAt || "")}" data-deadline-prefix="截止 ">${deadlineText}</small></div>`;
}

function renderFireAssignmentDeadline(item) {
  const deadline = getAssignmentDeadlineMeta(item);
  const text = !deadline.valid ? "接单截止 --" : deadline.overdue ? `已超时 · ${deadline.text}` : `接单截止 ${deadline.text}`;
  return `<span class="fire-record-deadline"><i data-lucide="clock-3"></i><span class="assignment-deadline ${deadline.overdue ? "overdue" : ""}" data-assignment-deadline="${escapeHtml(item.assignmentDeadlineAt || "")}" data-deadline-prefix="接单截止 ">${text}</span></span>`;
}

function setAssignmentDeadlineDetail(selector, item) {
  const node = document.querySelector(selector);
  if (!node) return;
  const deadline = getAssignmentDeadlineMeta(item);
  node.textContent = deadline.valid ? `${deadline.overdue ? "已超时 · " : ""}${deadline.text}` : "--";
  node.className = deadline.overdue ? "assignment-deadline-detail overdue" : "assignment-deadline-detail";
  node.dataset.assignmentDeadline = item.assignmentDeadlineAt || "";
  node.dataset.deadlinePrefix = "";
}

function refreshAssignmentDeadlineDisplays() {
  document.querySelectorAll("[data-assignment-deadline]").forEach((node) => {
    const deadline = getAssignmentDeadlineMeta({ assignmentDeadlineAt: node.dataset.assignmentDeadline });
    const prefix = node.dataset.deadlinePrefix || "";
    node.textContent = !deadline.valid ? `${prefix}--` : deadline.overdue ? `已超时 · ${deadline.text}` : `${prefix}${deadline.text}`;
    node.classList.toggle("overdue", deadline.overdue);
  });
}

function updateAssignmentDeadlinePreview() {
  const select = document.querySelector("#assignmentDeadline");
  const minutes = Number(select?.value);
  if (!minutes) return;
  const previewTarget = { assignmentDeadlineAt: formatClock(new Date(Date.now() + minutes * 60 * 1000)) };
  document.querySelector("#assignmentDeadlineSummary").textContent = `请在 ${formatAssignmentDuration(minutes)}内接单并开始处置`;
  document.querySelector("#assignmentDeadlineHint").textContent = `预计截止 ${getAssignmentDeadlineMeta(previewTarget).text} · 超过接单时限需升级通知消防主管`;
}

function isFireActionAvailable(alarm, action) {
  if (!alarm) return false;
  if (action === "confirm") return alarm.stage === 0;
  if (action === "false") return alarm.stage < 2 && alarm.state !== "false";
  if (action === "dispose") return alarm.stage === 1;
  if (action === "reset") return alarm.stage === 2;
  return false;
}

function renderFireOperationHistory(alarm) {
  const list = document.querySelector("#fireOperationHistory");
  const count = document.querySelector("#fireOperationHistoryCount");
  if (!list || !count) return;
  const history = Array.isArray(alarm.operationHistory) ? alarm.operationHistory : [];
  count.textContent = `${history.length} 条`;
  if (!history.length) {
    list.innerHTML = '<div class="fire-history-empty"><i data-lucide="clipboard-list"></i><span>暂无新增操作记录</span><small>提交说明或照片后会显示在这里</small></div>';
    refreshIcons(list);
    return;
  }
  list.innerHTML = history.map((record) => {
    const meta = fireActionMeta[record.action] || { type: "警情操作" };
    const photos = (record.photos || []).map((photo) => `<img src="${photo.dataUrl}" alt="${escapeHtml(photo.name)}" title="${escapeHtml(photo.name)}" />`).join("");
    return `<article class="fire-history-item" role="listitem">
      <header><span class="fire-history-action ${record.action}">${meta.type}</span><span>${escapeHtml(record.operator)} · ${escapeHtml(record.time)}</span></header>
      <p>${escapeHtml(record.description)}</p>
      ${photos ? `<div class="fire-history-photos">${photos}</div>` : ""}
    </article>`;
  }).join("");
}

function renderFireActionPhotoPreview() {
  const preview = document.querySelector("#fireActionPhotoPreview");
  if (!preview) return;
  preview.innerHTML = pendingFireActionPhotos.map((photo) => `<div class="photo-preview-item">
    <img src="${photo.dataUrl}" alt="${escapeHtml(photo.name)}" />
    <button type="button" data-fire-photo-remove="${photo.id}" title="移除照片" aria-label="移除照片 ${escapeHtml(photo.name)}"><i data-lucide="x"></i></button>
    <span>${escapeHtml(photo.name)}</span>
  </div>`).join("");
  refreshIcons(preview);
}

function setFireActionPhotoError(message = "") {
  const error = document.querySelector("#fireActionPhotoError");
  if (!error) return;
  error.textContent = message;
  error.hidden = !message;
}

function readFireActionPhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(new Error("photo-read-failed")));
    reader.readAsDataURL(file);
  });
}

async function handleFireActionPhotoSelection(event) {
  const files = [...event.target.files];
  event.target.value = "";
  if (!files.length) return;
  setFireActionPhotoError("");
  const available = MAX_FIRE_ACTION_PHOTOS - pendingFireActionPhotos.length;
  if (available <= 0) {
    setFireActionPhotoError(`最多上传 ${MAX_FIRE_ACTION_PHOTOS} 张照片`);
    return;
  }
  const accepted = [];
  const errors = [];
  files.slice(0, available).forEach((file) => {
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      errors.push(`${file.name} 格式不支持`);
    } else if (file.size > MAX_FIRE_ACTION_PHOTO_SIZE) {
      errors.push(`${file.name} 超过 10 MB`);
    } else {
      accepted.push(file);
    }
  });
  if (files.length > available) errors.push(`最多上传 ${MAX_FIRE_ACTION_PHOTOS} 张照片`);
  const loadedPhotos = await Promise.all(accepted.map(async (file) => ({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: file.name,
    type: file.type,
    size: file.size,
    dataUrl: await readFireActionPhoto(file),
  })).map((promise) => promise.catch(() => null)));
  pendingFireActionPhotos.push(...loadedPhotos.filter(Boolean));
  if (errors.length) setFireActionPhotoError(errors.join("；"));
  renderFireActionPhotoPreview();
}

function openFireActionModal(action) {
  const alarm = getFireAlarm(selectedFireAlarmId);
  const meta = fireActionMeta[action];
  if (!meta || !isFireActionAvailable(alarm, action)) return;
  selectedFireAction = action;
  pendingFireActionPhotos = [];
  document.querySelector("#fireActionModalType").textContent = meta.type;
  document.querySelector("#fireActionModalTitle").textContent = meta.title;
  document.querySelector("#fireActionTargetTitle").textContent = alarm.title;
  document.querySelector("#fireActionTargetMeta").textContent = `${alarm.location} · ${alarm.no}`;
  document.querySelector("#fireActionPrompt").textContent = meta.prompt;
  document.querySelector("#fireActionDescription").value = "";
  document.querySelector("#fireActionDescription").placeholder = meta.placeholder;
  document.querySelector("#fireActionDescriptionHint").textContent = `${meta.type}说明会作为本次操作记录保存。`;
  document.querySelector("#fireActionSubmit").innerHTML = `<i data-lucide="${meta.icon}"></i>${meta.title}`;
  setFireActionPhotoError("");
  renderFireActionPhotoPreview();
  const modal = document.querySelector("#fireActionModal");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  refreshIcons(modal);
  document.querySelector("#fireActionDescription").focus();
}

function closeFireActionModal() {
  document.querySelector("#fireActionModal").hidden = true;
  document.querySelector("#fireActionForm").reset();
  pendingFireActionPhotos = [];
  selectedFireAction = null;
  renderFireActionPhotoPreview();
  setFireActionPhotoError("");
  document.body.style.overflow = "";
}

function submitFireAction(event) {
  event.preventDefault();
  const description = document.querySelector("#fireActionDescription").value.trim();
  if (!description) {
    document.querySelector("#fireActionDescription").focus();
    showToast("请填写操作说明");
    return;
  }
  const alarm = getFireAlarm(selectedFireAlarmId);
  const action = selectedFireAction;
  const meta = fireActionMeta[action];
  if (!meta || !isFireActionAvailable(alarm, action)) {
    closeFireActionModal();
    return;
  }
  const now = formatClock(new Date());
  alarm.operationHistory.unshift({
    action,
    operator: "Admin",
    time: now,
    description,
    photos: pendingFireActionPhotos.map(({ name, type, size, dataUrl }) => ({ name, type, size, dataUrl })),
  });
  if (action === "confirm") {
    alarm.state = "confirmed";
    alarm.stage = 1;
    if (alarm.operator === "待确认") alarm.operator = "Admin";
  } else if (action === "false") {
    alarm.state = "false";
    alarm.stage = 3;
    alarm.operator = "Admin";
  } else if (action === "dispose") {
    alarm.state = "processing";
    alarm.stage = 2;
    if (alarm.operator === "待确认" || alarm.operator === "Admin") alarm.operator = "李明";
  } else if (action === "reset") {
    alarm.state = "reset";
    alarm.stage = 3;
    alarm.operator = alarm.operator === "待确认" ? "Admin" : alarm.operator;
  }
  alarm.note = description;
  closeFireActionModal();
  renderFireAlarmList();
  syncCriticalFireReminderState(alarm);
  showToast(`${alarm.no}已完成${meta.title}`);
}

function renderPassageActionPhotoPreview() {
  const preview = document.querySelector("#passageActionPhotoPreview");
  if (!preview) return;
  preview.innerHTML = pendingPassageActionPhotos.map((photo) => `<div class="photo-preview-item">
    <img src="${photo.dataUrl}" alt="${escapeHtml(photo.name)}" />
    <button type="button" data-passage-photo-remove="${photo.id}" title="移除照片" aria-label="移除照片 ${escapeHtml(photo.name)}"><i data-lucide="x"></i></button>
    <span>${escapeHtml(photo.name)}</span>
  </div>`).join("");
  refreshIcons(preview);
}

function setPassageActionPhotoError(message = "") {
  const error = document.querySelector("#passageActionPhotoError");
  if (!error) return;
  error.textContent = message;
  error.hidden = !message;
}

async function handlePassageActionPhotoSelection(event) {
  const files = [...event.target.files];
  event.target.value = "";
  if (!files.length) return;
  setPassageActionPhotoError("");
  const available = MAX_FIRE_ACTION_PHOTOS - pendingPassageActionPhotos.length;
  if (available <= 0) {
    setPassageActionPhotoError(`最多上传 ${MAX_FIRE_ACTION_PHOTOS} 张照片`);
    return;
  }
  const accepted = [];
  const errors = [];
  files.slice(0, available).forEach((file) => {
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      errors.push(`${file.name} 格式不支持`);
    } else if (file.size > MAX_FIRE_ACTION_PHOTO_SIZE) {
      errors.push(`${file.name} 超过 10 MB`);
    } else {
      accepted.push(file);
    }
  });
  if (files.length > available) errors.push(`最多上传 ${MAX_FIRE_ACTION_PHOTOS} 张照片`);
  const loadedPhotos = await Promise.all(accepted.map(async (file) => ({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: file.name,
    type: file.type,
    size: file.size,
    dataUrl: await readFireActionPhoto(file),
  })).map((promise) => promise.catch(() => null)));
  pendingPassageActionPhotos.push(...loadedPhotos.filter(Boolean));
  if (loadedPhotos.some((photo) => !photo)) errors.push("部分照片读取失败，请重新选择");
  if (errors.length) setPassageActionPhotoError(errors.join("；"));
  renderPassageActionPhotoPreview();
}

function setPassageActionError(message = "") {
  const error = document.querySelector("#passageActionError");
  if (!error) return;
  error.textContent = message;
  error.hidden = !message;
}

function openPassageActionModal(recordId, resolution = "cleared") {
  const record = videoMonitoringModules.passage.records.find((item) => item.id === recordId);
  if (!record || record.state === "closed") return;
  ensurePassageRecordShape(record);
  selectedPassageResolution = resolution === "false_alarm" ? "false_alarm" : "cleared";
  selectedPassageActionRecordId = record.id;
  pendingPassageActionPhotos = [];
  document.querySelector("#passageActionModalTitle").textContent = selectedPassageResolution === "false_alarm" ? "误报消警" : "确认通道顺畅";
  document.querySelector("#passageActionTargetTitle").textContent = record.title;
  document.querySelector("#passageActionTargetMeta").textContent = `${record.point} · ${record.device}`;
  document.querySelector("#passageActionContextText").textContent = selectedPassageResolution === "false_alarm" ? "请选择误报原因，并填写处置说明。" : "设备识别结果仅供参考，请根据现场实际情况填写处置说明。";
  document.querySelector("#passageFalseAlarmField").hidden = selectedPassageResolution !== "false_alarm";
  document.querySelector("#passageFalseAlarmReason").value = "";
  document.querySelector("#passageActionDescription").value = "";
  setPassageActionPhotoError("");
  setPassageActionError("");
  renderPassageActionPhotoPreview();
  const submit = document.querySelector("#passageActionSubmit");
  submit.disabled = false;
  submit.innerHTML = `<i data-lucide="${selectedPassageResolution === "false_alarm" ? "shield-check" : "badge-check"}"></i>${selectedPassageResolution === "false_alarm" ? "确认误报并消警" : "确认通道顺畅"}`;
  const modal = document.querySelector("#passageActionModal");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  refreshIcons(modal);
  document.querySelector("#passageActionDescription").focus();
}

function closePassageActionModal() {
  document.querySelector("#passageActionModal").hidden = true;
  document.querySelector("#passageActionForm").reset();
  pendingPassageActionPhotos = [];
  selectedPassageActionRecordId = "";
  renderPassageActionPhotoPreview();
  setPassageActionPhotoError("");
  setPassageActionError("");
  document.body.style.overflow = "";
}

function syncCurrentPassageEvent(record) {
  if (record.id !== "vps01") return;
  const module = videoMonitoringModules.passage;
  const channel = module.channels.find((item) => item.id === record.channelId) || module.channels[0];
  const alert = alerts.find((item) => item.id === "passage");
  const terminal = terminals.find((item) => item.alertId === "passage");
  module.event.closed = true;
  module.event.owner = record.owner;
  module.event.state = "已闭环";
  module.event.note = getPassageRecordConclusion(record);
  channel.active = false;
  channel.status = "normal";
  channel.statusLabel = record.resolution === "false_alarm" ? "预警已复核" : "通道畅通";
  if (alert) {
    alert.state = "closed";
    alert.owner = record.owner;
    alert.summary = getPassageRecordConclusion(record);
  }
  if (terminal) {
    terminal.status = "normal";
    terminal.reading = record.resolution === "false_alarm" ? "预警已人工复核" : "通道畅通";
    terminal.detail = `${channel.channel} · ${record.resolution === "false_alarm" ? "falseAlarm" : "channelClear"}`;
    terminal.updated = record.completedAt.slice(11);
  }
}

function submitPassageAction(event) {
  event.preventDefault();
  const description = document.querySelector("#passageActionDescription").value.trim();
  const falseAlarmReason = document.querySelector("#passageFalseAlarmReason").value;
  const record = videoMonitoringModules.passage.records.find((item) => item.id === selectedPassageActionRecordId);
  if (!record || record.state === "closed") {
    closePassageActionModal();
    return;
  }
  ensurePassageRecordShape(record);
  if (selectedPassageResolution === "false_alarm" && !falseAlarmReason) {
    setPassageActionError("请选择误报原因。");
    document.querySelector("#passageFalseAlarmReason").focus();
    return;
  }
  if (!description) {
    setPassageActionError("请填写处置说明。");
    document.querySelector("#passageActionDescription").focus();
    return;
  }
  const completedAt = formatClock(new Date());
  const photos = pendingPassageActionPhotos.map(({ name, type, size, dataUrl }) => ({ name, type, size, dataUrl }));
  record.state = "closed";
  record.owner = currentUser.name;
  record.completedAt = completedAt;
  record.resolution = selectedPassageResolution;
  record.falseAlarmReason = selectedPassageResolution === "false_alarm" ? falseAlarmReason : "";
  record.handlingNote = description;
  const action = selectedPassageResolution === "false_alarm" ? "false_alarm" : "confirm_clear";
  const historyDescription = selectedPassageResolution === "false_alarm" ? `${falseAlarmReason}：${description}` : description;
  record.operationHistory.unshift({ action, operator: currentUser.name, time: completedAt, description: historyDescription, photos });
  syncCurrentPassageEvent(record);
  closePassageActionModal();
  renderVideoMonitoring();
  renderAlertQueue();
  renderAlarmTable();
  renderTerminalTable();
  openVideoRecordDetail(record);
  showToast(selectedPassageResolution === "false_alarm" ? "通道预警已按误报完成消警" : "消防通道已确认顺畅并完成闭环");
}

function parseDurationSeconds(value = "00:00:00") {
  const [hours, minutes, seconds] = value.split(":").map(Number);
  return (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0);
}

function formatDurationSeconds(value) {
  const pad = (part) => String(part).padStart(2, "0");
  return `${pad(Math.floor(value / 3600))}:${pad(Math.floor((value % 3600) / 60))}:${pad(value % 60)}`;
}

function loadCriticalFireSnoozes() {
  try {
    criticalFireSnoozeCache = JSON.parse(window.sessionStorage.getItem(CRITICAL_FIRE_SNOOZE_KEY) || "{}") || {};
  } catch {
    criticalFireSnoozeCache = {};
  }
}

function saveCriticalFireSnoozes() {
  try {
    window.sessionStorage.setItem(CRITICAL_FIRE_SNOOZE_KEY, JSON.stringify(criticalFireSnoozeCache));
  } catch {
    // The reminder remains functional when session storage is unavailable.
  }
}

function setCriticalFireSnooze(id, until = Date.now() + CRITICAL_FIRE_SNOOZE_MS) {
  criticalFireSnoozeCache[id] = until;
  saveCriticalFireSnoozes();
}

function clearCriticalFireSnooze(id) {
  if (!(id in criticalFireSnoozeCache)) return;
  delete criticalFireSnoozeCache[id];
  saveCriticalFireSnoozes();
}

function getPendingCriticalFireAlarms() {
  return fireAlarms
    .filter((item) => item.level === 1 && item.state === "pending")
    .sort((left, right) => right.time.localeCompare(left.time));
}

function clearCriticalFireReminderTimer() {
  window.clearTimeout(criticalFireReminderTimer);
  criticalFireReminderTimer = undefined;
}

function updateAlarmSoundControls() {
  const topButton = document.querySelector("#soundToggle");
  const overlayButton = document.querySelector("#criticalFireSoundStatus");
  const icon = alarmSoundMuted ? "volume-x" : "volume-2";
  const title = alarmSoundMuted ? "开启告警声音" : "关闭告警声音";
  topButton.innerHTML = `<i data-lucide="${icon}"></i>${alarmSoundMuted ? "" : '<span class="notify-dot"></span>'}`;
  topButton.title = title;
  topButton.setAttribute("aria-label", title);
  overlayButton.innerHTML = `<i data-lucide="${icon}"></i><span>${alarmSoundMuted ? "报警声音已静音" : "报警声音已开启"}</span>`;
  overlayButton.title = title;
  overlayButton.setAttribute("aria-label", title);
  refreshIcons(topButton);
  refreshIcons(overlayButton);
}

function emitCriticalFireTone() {
  if (!alarmAudioContext || alarmAudioContext.state !== "running" || alarmSoundMuted || document.querySelector("#criticalFireAlert").hidden) return;
  [[0, 880], [0.28, 660]].forEach(([offset, frequency]) => {
    const startAt = alarmAudioContext.currentTime + offset;
    const oscillator = alarmAudioContext.createOscillator();
    const gain = alarmAudioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, startAt);
    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(0.085, startAt + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startAt + 0.2);
    oscillator.connect(gain);
    gain.connect(alarmAudioContext.destination);
    oscillator.start(startAt);
    oscillator.stop(startAt + 0.22);
  });
}

async function startCriticalFireSound() {
  if (alarmSoundMuted || document.querySelector("#criticalFireAlert").hidden || alarmToneTimer) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  try {
    if (!alarmAudioContext) alarmAudioContext = new AudioContextClass();
    if (alarmAudioContext.state === "suspended") await alarmAudioContext.resume();
    if (alarmAudioContext.state !== "running") return;
    emitCriticalFireTone();
    alarmToneTimer = window.setInterval(emitCriticalFireTone, 1400);
  } catch {
    // Browsers may defer audio until the user interacts with the alert.
  }
}

function stopCriticalFireSound() {
  window.clearInterval(alarmToneTimer);
  alarmToneTimer = undefined;
}

function toggleAlarmSound() {
  alarmSoundMuted = !alarmSoundMuted;
  if (alarmSoundMuted) stopCriticalFireSound();
  else startCriticalFireSound();
  updateAlarmSoundControls();
  showToast(alarmSoundMuted ? "告警声音已关闭" : "告警声音已开启");
}

function updateCriticalFireDuration() {
  const duration = document.querySelector("#criticalFireDuration");
  if (!duration || document.querySelector("#criticalFireAlert").hidden || !criticalFireOpenedAt) return;
  const elapsedSinceOpen = Math.floor((Date.now() - criticalFireOpenedAt) / 1000);
  duration.textContent = formatDurationSeconds(criticalFireBaseDurationSeconds + elapsedSinceOpen);
}

function openCriticalFireAlert(id) {
  const alarm = fireAlarms.find((item) => item.id === id);
  const alert = document.querySelector("#criticalFireAlert");
  if (!alarm || alarm.level !== 1 || alarm.state !== "pending" || !alert.hidden) return;
  const hasMedia = alarm.media !== false;
  const hasTemperature = Number.isFinite(alarm.temperature) && Number.isFinite(alarm.threshold);
  const reportData = alarm.reportData || {};
  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };

  currentCriticalFireAlarmId = alarm.id;
  criticalFirePreviousFocus = document.activeElement;
  criticalFireBaseDurationSeconds = parseDurationSeconds(alarm.duration);
  criticalFireOpenedAt = Date.now();
  setText("#criticalFireAlertTime", alarm.time);
  setText("#criticalFireAlertTitle", alarm.title);
  setText("#criticalFireAlertNo", alarm.no);
  setText("#criticalFireLocation", alarm.location);
  setText("#criticalFireDevice", alarm.device);
  setText("#criticalFireSerial", alarm.serial);
  setText("#criticalFireEventType", alarm.eventType);
  setText("#criticalFireOperator", alarm.operator);
  setText("#criticalFireAlertChannel", alarm.channel);
  setText("#criticalFireDuration", alarm.duration);
  document.querySelector("#criticalFireAlertNote p").textContent = alarm.note;
  document.querySelector("#criticalFireReading").hidden = !hasTemperature;
  if (hasTemperature) {
    document.querySelector("#criticalFireTemperature").innerHTML = `${alarm.temperature.toFixed(1)}<em>°C</em>`;
    setText("#criticalFireThreshold", `${alarm.threshold.toFixed(1)}°C`);
  }

  const canvas = document.querySelector("#criticalFireAlertCanvas");
  const dataPanel = document.querySelector("#criticalFireAlertData");
  const visualHud = document.querySelector(".critical-fire-visual-hud");
  const detectionLabel = document.querySelector("#criticalFireDetectionLabel");
  canvas.hidden = !hasMedia;
  dataPanel.hidden = hasMedia;
  visualHud.hidden = !hasMedia;
  detectionLabel.hidden = !hasMedia;
  if (!hasMedia) {
    setText("#criticalFireDataState", reportData.hostState || "火警");
    setText("#criticalFireDataProtocol", reportData.protocol || "ISUP / EHome");
    setText("#criticalFireDataLoop", reportData.loop || "--");
    setText("#criticalFireDataPoint", reportData.point || "--");
    setText("#criticalFireDataCode", reportData.eventCode || alarm.eventType);
  }

  alert.hidden = false;
  updateAlarmSoundControls();
  updateCriticalFireDuration();
  refreshIcons(alert);
  if (hasMedia) requestAnimationFrame(() => drawScene(canvas, "flame", "thermal", true));
  document.querySelector("#criticalFireEnter").focus({ preventScroll: true });
  startCriticalFireSound();
}

function hideCriticalFireAlert() {
  const alert = document.querySelector("#criticalFireAlert");
  if (alert.hidden) return;
  alert.hidden = true;
  stopCriticalFireSound();
  currentCriticalFireAlarmId = null;
  criticalFireOpenedAt = 0;
  if (criticalFirePreviousFocus?.isConnected) criticalFirePreviousFocus.focus({ preventScroll: true });
  criticalFirePreviousFocus = null;
}

function scheduleCriticalFireReminder() {
  clearCriticalFireReminderTimer();
  if (!document.querySelector("#criticalFireAlert").hidden) return;
  const pending = getPendingCriticalFireAlarms();
  if (!pending.length) return;
  const now = Date.now();
  const nextAlarm = pending.find((item) => Number(criticalFireSnoozeCache[item.id] || 0) <= now);
  if (nextAlarm) {
    criticalFireReminderTimer = window.setTimeout(() => openCriticalFireAlert(nextAlarm.id), 120);
    return;
  }
  const nextReminderAt = Math.min(...pending.map((item) => Number(criticalFireSnoozeCache[item.id] || now)));
  criticalFireReminderTimer = window.setTimeout(scheduleCriticalFireReminder, Math.max(120, nextReminderAt - now + 50));
}

function snoozeCriticalFireAlert() {
  if (!currentCriticalFireAlarmId) return;
  setCriticalFireSnooze(currentCriticalFireAlarmId);
  hideCriticalFireAlert();
  showToast("当前一级火警将在 5 分钟后再次提醒");
  scheduleCriticalFireReminder();
}

function enterCriticalFireDisposal() {
  if (!currentCriticalFireAlarmId) return;
  const alarmId = currentCriticalFireAlarmId;
  setCriticalFireSnooze(alarmId);
  hideCriticalFireAlert();
  selectedFireAlarmId = alarmId;
  const fireNav = document.querySelector('.nav-subitem[data-view="terminal-alarms"]');
  switchView("terminal-alarms", null, fireNav);
  renderFireAlarmList();
  showToast("已进入一级火警处置页面");
  scheduleCriticalFireReminder();
}

function syncCriticalFireReminderState(alarm) {
  if (alarm.state !== "pending") {
    clearCriticalFireSnooze(alarm.id);
    if (currentCriticalFireAlarmId === alarm.id) hideCriticalFireAlert();
  }
  scheduleCriticalFireReminder();
}

function notifyCriticalFireAlarm(id) {
  const alarm = fireAlarms.find((item) => item.id === id);
  if (!alarm || alarm.level !== 1 || alarm.state !== "pending") return;
  clearCriticalFireSnooze(id);
  scheduleCriticalFireReminder();
}

function bindCriticalFireAlert() {
  document.querySelector("#criticalFireSnooze").addEventListener("click", snoozeCriticalFireAlert);
  document.querySelector("#criticalFireEnter").addEventListener("click", enterCriticalFireDisposal);
  document.querySelector("#criticalFireSoundStatus").addEventListener("click", toggleAlarmSound);
  document.querySelector("#criticalFireAlert").addEventListener("pointerdown", () => startCriticalFireSound());
}

function initializeCriticalFireReminder() {
  loadCriticalFireSnoozes();
  updateAlarmSoundControls();
  scheduleCriticalFireReminder();
}

function renderFireAlarmList() {
  const query = document.querySelector("#fireAlarmSearch")?.value.trim().toLowerCase() || "";
  const level = document.querySelector("#fireAlarmLevelFilter")?.value || "all";
  const state = document.querySelector("#fireAlarmStateFilter")?.value || "all";
  const filtered = fireAlarms.filter((item) => {
    const haystack = `${item.no} ${item.title} ${item.location} ${item.device} ${item.serial}`.toLowerCase();
    return (!query || haystack.includes(query)) && (level === "all" || item.level === Number(level)) && (state === "all" || item.state === state);
  });
  const list = document.querySelector("#fireAlarmList");
  if (!list) return;
  if (!filtered.some((item) => item.id === selectedFireAlarmId)) selectedFireAlarmId = filtered[0]?.id || fireAlarms[0].id;
  list.innerHTML = filtered.map((item) => `
    <button class="fire-alarm-record ${item.id === selectedFireAlarmId ? "active" : ""}" type="button" data-fire-alarm-id="${item.id}">
      <span class="fire-record-top"><span class="severity-label level-${item.level === 1 ? "one" : "two"}">${item.level}级</span><time>${item.time.slice(11)}</time></span>
      <strong>${item.title}</strong>
      <span class="fire-record-location"><i data-lucide="map-pin"></i>${item.location} · ${item.device}</span>
      ${renderFireAssignmentDeadline(item)}
      <span class="fire-record-footer"><code>${item.no.slice(-4)}</code><b class="state-pill ${item.state}">${fireAlarmStateLabels[item.state]}</b></span>
    </button>
  `).join("");
  document.querySelector("#fireAlarmListEmpty").hidden = filtered.length > 0;
  document.querySelector("#fireAlarmCountLabel").textContent = `共 ${filtered.length} 条`;
  document.querySelector(".fire-alarm-detail-panel").hidden = filtered.length === 0;
  list.querySelectorAll("[data-fire-alarm-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedFireAlarmId = button.dataset.fireAlarmId;
      renderFireAlarmList();
    });
  });
  document.querySelector("#firePendingCount").textContent = fireAlarms.filter((item) => item.state === "pending").length;
  document.querySelector("#fireProcessingCount").textContent = fireAlarms.filter((item) => item.state === "processing" || item.state === "confirmed").length;
  document.querySelector("#fireClosedCount").textContent = fireAlarms.filter((item) => item.state === "reset" || item.state === "false").length;
  refreshIcons(list);
  if (filtered.length) updateFireAlarmDetail();
}

function updateFireAlarmDetail() {
  const alarm = getFireAlarm(selectedFireAlarmId);
  const hasMedia = alarm.media !== false;
  const hasTemperature = Number.isFinite(alarm.temperature) && Number.isFinite(alarm.threshold);
  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };
  setText("#fireDetailLevel", `${alarm.level}级火警`);
  setText("#fireDetailState", fireAlarmStateLabels[alarm.state]);
  setText("#fireDetailTitle", alarm.title);
  setText("#fireDetailMeta", `${alarm.location} · ${alarm.device} · ${alarm.no}`);
  setText("#fireDetailDuration", alarm.duration);
  setText("#fireEvidenceTime", alarm.time);
  setText("#fireDetailLocation", alarm.location);
  setText("#fireDetailDevice", alarm.device);
  setText("#fireDetailSerial", alarm.serial);
  setText("#fireDetailEventType", alarm.eventType);
  setText("#fireDetailChannel", alarm.channel);
  setText("#fireDetailOperator", alarm.operator);
  setAssignmentDeadlineDetail("#fireDetailDeadline", alarm);
  setText("#fireDispositionNote", alarm.note);
  renderFireOperationHistory(alarm);
  document.querySelector(".fire-reading-strip").hidden = !hasTemperature;
  if (hasTemperature) {
    setText("#fireDetailThreshold", `${alarm.threshold.toFixed(1)}°C`);
    document.querySelector("#fireDetailTemperature").innerHTML = `${alarm.temperature.toFixed(1)}<em>°C</em>`;
  }
  setText("#fireEvidenceTitle", hasMedia ? "现场影像" : "设备上报数据");
  document.querySelector(".fire-evidence-switch").hidden = !hasMedia;
  document.querySelector("#fireDataEvidence").hidden = hasMedia;
  document.querySelector("#fireImageEvidence").hidden = !hasMedia || selectedFireEvidence !== "images";
  document.querySelector("#fireVideoEvidence").hidden = !hasMedia || selectedFireEvidence !== "video";
  if (!hasMedia && alarm.reportData) {
    setText("#transmitterHostState", alarm.reportData.hostState);
    setText("#transmitterProtocol", alarm.reportData.protocol);
    setText("#transmitterLoop", alarm.reportData.loop);
    setText("#transmitterPoint", alarm.reportData.point);
    setText("#transmitterEventCode", alarm.reportData.eventCode);
    setText("#transmitterEventState", alarm.reportData.eventState);
    setText("#transmitterReportTime", alarm.time.slice(11));
    setText("#transmitterRawReport", `eventType=${alarm.reportData.eventCode}; eventState=${alarm.reportData.eventState}; loop=${alarm.reportData.loop}; point=${alarm.reportData.point};`);
  }
  const level = document.querySelector("#fireDetailLevel");
  level.className = `severity-label level-${alarm.level === 1 ? "one" : "two"}`;
  const state = document.querySelector("#fireDetailState");
  state.className = `state-pill ${alarm.state}`;

  const processLabels = alarm.state === "false" ? ["报警上报", "误报确认", "消警留痕", "设备复位"] : ["报警上报", "确认警情", "警情处置", "设备复位"];
  const processStrip = document.querySelector("#fireProcessStrip");
  processStrip.innerHTML = processLabels.map((label, index) => {
    const completed = index <= alarm.stage;
    const current = alarm.stage < 3 && index === alarm.stage + 1;
    return `<div class="fire-process-step ${completed ? "completed" : ""} ${current ? "current" : ""}"><span>${completed ? '<i data-lucide="check"></i>' : index + 1}</span><div><strong>${label}</strong><small>${completed ? (index === 0 ? alarm.time.slice(11) : alarm.operator) : current ? "待操作" : "未开始"}</small></div></div>`;
  }).join('<i class="process-line"></i>');

  document.querySelectorAll("[data-fire-action]").forEach((button) => {
    const action = button.dataset.fireAction;
    button.disabled = action === "confirm" ? alarm.stage !== 0 : action === "false" ? alarm.stage >= 2 || alarm.state === "false" : action === "dispose" ? alarm.stage !== 1 : alarm.stage !== 2;
  });
  const assignButton = document.querySelector("[data-assign-fire]");
  assignButton.disabled = alarm.state === "reset" || alarm.state === "false";
  assignButton.innerHTML = `<i data-lucide="user-plus"></i>${alarm.operator === "待确认" ? "指派处置人员" : "重新指派人员"}`;
  refreshIcons(document.querySelector(".fire-alarm-detail-panel"));
  drawFireEvidence();
}

function drawFireEvidence() {
  const alarm = getFireAlarm(selectedFireAlarmId);
  if (alarm.media === false) return;
  const mainMode = selectedFireImageMode === "thermal" ? "thermal" : "visible";
  drawScene(document.querySelector("#fireAlarmMainCanvas"), "flame", mainMode, true);
  drawScene(document.querySelector("#fireSnapshotVisible"), "flame", "visible");
  drawScene(document.querySelector("#fireSnapshotThermal"), "flame", "thermal");
  drawScene(document.querySelector("#fireSnapshotContext"), "flame", "visible");
  drawScene(document.querySelector("#fireAlarmVideoCanvas"), "flame", selectedFireVideoOffset === "alarm" ? "thermal" : "visible", true);
  const cameraLabel = document.querySelector(".fire-main-visual .evidence-camera");
  if (cameraLabel) cameraLabel.textContent = `${alarm.channel.split(" / ")[0]} · ${selectedFireImageMode === "thermal" ? "热成像" : selectedFireImageMode === "context" ? "现场全景" : "可见光"}`;
  const videoTimes = { before: `${shiftClockTime(alarm.time, -30)} · 报警前 30 秒`, alarm: `${alarm.time.slice(11)} · 告警时刻`, after: `${shiftClockTime(alarm.time, 30)} · 报警后 30 秒` };
  setVideoEvidenceTimestamp(videoTimes[selectedFireVideoOffset]);
}

function shiftClockTime(dateTime, offsetSeconds) {
  const [hours, minutes, seconds] = dateTime.slice(11).split(":").map(Number);
  const total = (hours * 3600 + minutes * 60 + seconds + offsetSeconds + 86400) % 86400;
  const pad = (value) => String(value).padStart(2, "0");
  return `${pad(Math.floor(total / 3600))}:${pad(Math.floor((total % 3600) / 60))}:${pad(total % 60)}`;
}

function setVideoEvidenceTimestamp(value) {
  const node = document.querySelector("#fireVideoTimestamp");
  if (node) node.textContent = value;
}

function renderTerminalWarningTable() {
  const query = document.querySelector("#terminalWarningSearch")?.value.trim().toLowerCase() || "";
  const type = document.querySelector("#terminalWarningTypeFilter")?.value || "all";
  const state = document.querySelector("#terminalWarningStateFilter")?.value || "all";
  const filtered = terminalWarnings.filter((item) => {
    const haystack = `${item.no} ${item.title} ${item.device} ${item.serial} ${item.point}`.toLowerCase();
    return (!query || haystack.includes(query)) && (type === "all" || item.type === type) && (state === "all" || item.state === state);
  });
  const tbody = document.querySelector("#terminalWarningTableBody");
  if (!tbody) return;
  tbody.innerHTML = filtered.map((item) => {
    const meta = terminalWarningTypeMeta[item.type];
    const actionLabel = item.state === "pending" ? "开始核查" : item.state === "checking" ? "确认恢复" : "查看记录";
    const actionIcon = item.state === "pending" ? "clipboard-check" : item.state === "checking" ? "circle-check" : "arrow-up-right";
    return `
      <tr>
        <td><span class="risk-pill ${item.risk}">${item.risk === "high" ? "高" : item.risk === "medium" ? "中" : "低"}风险</span></td>
        <td><div class="table-event"><span class="type-icon ${meta.className}"><i data-lucide="${meta.icon}"></i></span><div><strong>${item.title}</strong><small>${item.no}</small></div></div></td>
        <td><div class="point-cell"><strong>${item.device}</strong><small>${item.point} · ${item.serial}</small></div></td>
        <td><strong class="warning-value ${item.risk}">${item.value}</strong></td>
        <td>${item.threshold}</td>
        <td>${item.firstTime}</td>
        <td>${item.updated}</td>
        <td>${renderAssignmentPersonCell({ ...item, assignee: item.handledBy || item.assignee })}</td>
        <td><span class="state-dot ${item.state === "recovered" ? "closed" : item.state === "checking" ? "processing" : "pending"}">${terminalWarningStateLabels[item.state]}</span></td>
        <td><div class="table-row-actions"><button class="table-event-action" type="button" title="指派人员" aria-label="指派人员" data-assign-warning="${item.id}" ${item.state === "recovered" ? "disabled" : ""}><i data-lucide="user-plus"></i></button><button class="table-event-action" type="button" title="${actionLabel}" aria-label="${actionLabel}" data-warning-action="${item.id}"><i data-lucide="${actionIcon}"></i></button></div></td>
      </tr>`;
  }).join("");
  document.querySelector("#terminalWarningTableEmpty").hidden = filtered.length > 0;
  document.querySelector("#terminalWarningCountLabel").textContent = `共 ${filtered.length} 条记录`;
  document.querySelector("#warningActiveCount").textContent = terminalWarnings.filter((item) => item.state !== "recovered").length;
  document.querySelector("#warningPendingCount").textContent = terminalWarnings.filter((item) => item.state === "pending").length;
  tbody.querySelectorAll("[data-warning-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const warning = terminalWarnings.find((item) => item.id === button.dataset.warningAction);
      if (!warning) return;
      if (warning.state === "pending") {
        if (warning.assignee === "待指派") {
          openAssignmentModal("warning", warning.id);
          showToast("请先指派预警核查人员");
          return;
        }
        warning.state = "checking";
        warning.checkingStartedAt = formatClock(new Date());
        warning.updated = warning.checkingStartedAt.slice(11);
        warning.handlingHistory.push({ action: "start_check", operator: warning.assignee, time: warning.checkingStartedAt, note: "已接收任务并开始核查设备数据与现场状态。" });
        showToast(`${warning.device}预警已进入核查流程`);
      } else if (warning.state === "checking") {
        openWarningRecoverModal(warning.id);
        return;
      } else {
        openWarningRecord(warning.id);
        return;
      }
      renderTerminalWarningTable();
    });
  });
  tbody.querySelectorAll("[data-assign-warning]").forEach((button) => {
    button.addEventListener("click", () => openAssignmentModal("warning", button.dataset.assignWarning));
  });
  refreshIcons(tbody);
}

function getTerminalFault(id) {
  return terminalFaults.find((item) => item.id === id) || terminalFaults[0];
}

function getFaultHistoryRecord(fault, action) {
  return [...(fault.handlingHistory || [])].reverse().find((record) => record.action === action) || null;
}

function renderFaultProcess(fault) {
  const terminal = getTerminalForFault(fault);
  const assigned = getFaultHistoryRecord(fault, "assign");
  const handled = getFaultHistoryRecord(fault, "mark_handled");
  const recovered = getFaultHistoryRecord(fault, "confirm_recovery");
  const conditionRecovered = isFaultConditionRecovered(fault);
  const steps = [
    { label: "故障上报", icon: "radio", time: fault.firstTime.slice(11), className: "completed" },
    { label: "人员指派", icon: "user-check", time: assigned ? assigned.time.slice(11) : handled ? "未指派" : "待指派", className: assigned ? "completed" : handled ? "skipped" : fault.state === "processing" ? "processing" : "" },
    { label: "标记处理", icon: "clipboard-check", time: handled ? handled.time.slice(11) : "待处理", className: handled ? "completed" : fault.state === "processing" ? "processing" : "" },
    { label: "指标恢复", icon: "activity", time: conditionRecovered ? (fault.conditionRecoveredAt || fault.recoveredAt).slice(11) : "等待指标恢复", className: conditionRecovered ? "completed" : fault.state === "handled" ? "processing" : "" },
    { label: "确认恢复", icon: "badge-check", time: recovered ? recovered.time.slice(11) : "待确认", className: recovered ? "completed" : fault.state === "handled" && conditionRecovered ? "processing" : "" },
  ];
  document.querySelector("#faultProcess").innerHTML = steps.map((step, index) => `${index ? '<i data-lucide="chevron-right"></i>' : ""}<div class="${step.className}"><span><i data-lucide="${step.icon}"></i></span><strong>${step.label}</strong><small>${step.time}</small></div>`).join("");
}

function renderFaultHandlingHistory(fault) {
  const list = document.querySelector("#faultHandlingHistory");
  const count = document.querySelector("#faultHandlingHistoryCount");
  const history = [...(fault.handlingHistory || [])].reverse();
  const actionLabels = { assign: "人员指派", mark_handled: "标记处理", confirm_recovery: "确认恢复" };
  count.textContent = `${history.length} 条`;
  if (!history.length) {
    list.innerHTML = '<div class="fault-history-empty"><i data-lucide="clipboard-list"></i><span>暂无人工处理记录</span></div>';
    return;
  }
  list.innerHTML = history.map((record) => `<article class="fault-history-item"><header><strong>${actionLabels[record.action] || "故障操作"}</strong><span>${escapeHtml(record.operator)} · ${escapeHtml(record.time)}</span></header><p>${escapeHtml(record.note)}</p></article>`).join("");
}

function renderTerminalFaultTable() {
  const query = document.querySelector("#terminalFaultSearch")?.value.trim().toLowerCase() || "";
  const type = document.querySelector("#terminalFaultTypeFilter")?.value || "all";
  const state = document.querySelector("#terminalFaultStateFilter")?.value || "all";
  const filtered = terminalFaults.filter((item) => {
    const haystack = `${item.no} ${item.title} ${item.device} ${item.serial} ${item.point} ${item.faultType} ${item.faultCode}`.toLowerCase();
    return (!query || haystack.includes(query)) && (type === "all" || item.type === type) && (state === "all" || item.state === state);
  });
  const tbody = document.querySelector("#terminalFaultTableBody");
  if (!tbody) return;
  tbody.innerHTML = filtered.map((item) => {
    const meta = terminalTypeMeta[item.type];
    const canAssign = item.state === "pending" || item.state === "processing";
    const canHandle = item.state === "pending" || item.state === "processing";
    const canRecover = item.state === "handled" && isFaultConditionRecovered(item);
    const recoverTitle = item.state === "recovered" ? "故障已恢复" : item.state !== "handled" ? "需先标记处理" : canRecover ? "确认本故障恢复" : "本故障指标尚未恢复";
    return `
      <tr>
        <td><div class="table-event"><span class="type-icon ${meta.className}"><i data-lucide="${meta.icon}"></i></span><div><strong>${item.title}</strong><small>${item.no}</small></div></div></td>
        <td><div class="point-cell"><strong>${item.device}</strong><small>${item.point} · ${item.serial}</small></div></td>
        <td><div class="fault-type-cell"><strong>${item.faultType}</strong><code>${item.faultCode}</code></div></td>
        <td><time>${item.firstTime.slice(5)}</time></td>
        <td><time>${item.updated.slice(5)}</time></td>
        <td><span class="fault-duration">${item.duration}</span></td>
        <td>${renderAssignmentPersonCell(item)}</td>
        <td><span class="state-dot ${item.state === "recovered" ? "closed" : item.state}">${terminalFaultStateLabels[item.state]}</span></td>
        <td><div class="table-row-actions">
          <button class="table-event-action" type="button" title="${item.state === "processing" ? "重新指派人员" : "指派人员"}" aria-label="${item.state === "processing" ? "重新指派人员" : "指派人员"}" data-assign-fault="${item.id}" ${canAssign ? "" : "disabled"}><i data-lucide="user-plus"></i></button>
          <button class="table-event-action" type="button" title="标记处理" aria-label="标记处理" data-handle-fault="${item.id}" ${canHandle ? "" : "disabled"}><i data-lucide="clipboard-check"></i></button>
          <button class="table-event-action" type="button" title="${recoverTitle}" aria-label="${recoverTitle}" data-recover-fault="${item.id}" ${canRecover ? "" : "disabled"}><i data-lucide="badge-check"></i></button>
          <button class="table-event-action" type="button" title="查看故障详情" aria-label="查看故障详情" data-view-fault="${item.id}"><i data-lucide="file-search"></i></button>
        </div></td>
      </tr>`;
  }).join("");

  const activeCount = terminalFaults.filter((item) => item.state !== "recovered").length;
  document.querySelector("#terminalFaultTableEmpty").hidden = filtered.length > 0;
  document.querySelector("#terminalFaultCountLabel").textContent = `共 ${filtered.length} 条记录`;
  document.querySelector("#faultActiveCount").textContent = activeCount;
  document.querySelector("#faultPendingCount").textContent = terminalFaults.filter((item) => item.state === "pending").length;
  document.querySelector("#faultProcessingCount").textContent = terminalFaults.filter((item) => item.state === "processing" || item.state === "handled").length;
  document.querySelector("#faultProcessingSummary").textContent = `处理中 ${terminalFaults.filter((item) => item.state === "processing").length} · 待恢复 ${terminalFaults.filter((item) => item.state === "handled").length}`;
  document.querySelector("#faultRepairedCount").textContent = terminalFaults.filter((item) => item.state === "recovered").length;
  document.querySelector("#faultNavBadge").textContent = activeCount;

  tbody.querySelectorAll("[data-assign-fault]").forEach((button) => {
    button.addEventListener("click", () => openAssignmentModal("fault", button.dataset.assignFault));
  });
  tbody.querySelectorAll("[data-handle-fault]").forEach((button) => {
    button.addEventListener("click", () => openFaultHandleModal(button.dataset.handleFault));
  });
  tbody.querySelectorAll("[data-recover-fault]").forEach((button) => {
    button.addEventListener("click", () => confirmTerminalFaultRecovery(button.dataset.recoverFault));
  });
  tbody.querySelectorAll("[data-view-fault]").forEach((button) => {
    button.addEventListener("click", () => openFaultDetail(button.dataset.viewFault));
  });
  refreshIcons(tbody);
}

function openFaultDetail(id) {
  selectedTerminalFaultId = id;
  const fault = getTerminalFault(id);
  const meta = terminalTypeMeta[fault.type];
  const terminal = getTerminalForFault(fault);
  const runtime = getTerminalRuntimeMeta(terminal);
  const conditionRecovered = isFaultConditionRecovered(fault);
  const openFaults = getOpenFaultsForTerminalFault(fault);
  const otherOpenFaults = getOtherOpenFaultsForTerminalFault(fault);
  const modal = document.querySelector("#faultDetailModal");
  const state = document.querySelector("#faultDetailState");
  state.textContent = terminalFaultStateLabels[fault.state];
  state.className = `state-pill ${fault.state === "recovered" ? "reset" : fault.state}`;
  document.querySelector("#faultDetailTitle").textContent = fault.title;
  document.querySelector("#faultDetailMeta").textContent = `${fault.firstTime} · ${fault.faultCode}`;
  document.querySelector("#faultDetailNo").textContent = fault.no;
  document.querySelector("#faultDetailSource").textContent = fault.source;
  document.querySelector("#faultDetailCode").textContent = fault.faultCode;
  document.querySelector(".fault-diagnostic-icon").innerHTML = `<i data-lucide="${meta.icon}"></i>`;
  document.querySelector("#faultDetailDevice").textContent = fault.device;
  document.querySelector("#faultDetailSerial").textContent = fault.serial;
  document.querySelector("#faultDetailPoint").textContent = fault.point;
  document.querySelector("#faultDetailType").textContent = fault.faultType;
  document.querySelector("#faultDetailDuration").textContent = fault.duration;
  document.querySelector("#faultDetailAssignee").textContent = fault.handledBy || fault.assignee;
  setAssignmentDeadlineDetail("#faultDetailDeadline", fault);
  document.querySelector("#faultDetailRepairedAt").textContent = fault.recoveredAt || fault.conditionRecoveredAt || "--";

  document.querySelector("#faultConditionState").textContent = conditionRecovered ? "本故障对应指标已恢复" : "本故障指标仍有异常";
  document.querySelector("#faultConditionState").className = conditionRecovered ? "online" : "offline";
  document.querySelector("#faultConditionUpdated").textContent = conditionRecovered ? `指标恢复 ${fault.conditionRecoveredAt || fault.recoveredAt}` : `最近上报 ${fault.updated}`;
  document.querySelector("#faultConditionIcon").className = `fault-device-status-icon ${conditionRecovered ? "online" : "offline"}`;
  document.querySelector("#faultConditionIcon").innerHTML = `<i data-lucide="${conditionRecovered ? "circle-check" : "triangle-alert"}"></i>`;
  document.querySelector("#faultConditionBadge").textContent = fault.state === "recovered" ? "已确认" : conditionRecovered ? "可确认" : "异常";
  document.querySelector("#faultConditionBadge").className = `fault-condition-badge ${conditionRecovered ? "ready" : "abnormal"}`;

  document.querySelector("#faultDetailDeviceStatus").textContent = openFaults.length ? `设备仍有 ${openFaults.length} 条未闭环故障` : runtime.label;
  document.querySelector("#faultDetailDeviceStatus").className = openFaults.length ? "offline" : runtime.className;
  document.querySelector("#faultDetailDeviceUpdated").textContent = otherOpenFaults.length ? `本故障闭环后，设备仍保持故障状态 · 实时运行 ${runtime.label}` : terminal ? `最近上报 ${runtime.updated} · ${terminal.network} · 信号 ${terminal.signal}%` : "未找到关联设备状态";
  document.querySelector("#faultDetailDeviceStatusIcon").className = `fault-device-status-icon ${openFaults.length ? "offline" : runtime.className}`;
  document.querySelector("#faultDetailDeviceStatusIcon").innerHTML = `<i data-lucide="${openFaults.length ? "wrench" : runtime.icon}"></i>`;
  document.querySelector("#faultDetailViewDevice").disabled = !terminal;
  const related = document.querySelector("#faultRelatedOpenFaults");
  related.hidden = !otherOpenFaults.length;
  related.innerHTML = otherOpenFaults.map((item) => `<button type="button" data-related-fault="${item.id}"><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.no)} · ${terminalFaultStateLabels[item.state]}</small></span><i data-lucide="arrow-up-right"></i></button>`).join("");
  related.querySelectorAll("[data-related-fault]").forEach((button) => button.addEventListener("click", () => openFaultDetail(button.dataset.relatedFault)));

  const note = document.querySelector("#faultDetailNote");
  note.classList.toggle("repaired", fault.state === "recovered");
  note.classList.toggle("handled", fault.state === "handled");
  note.querySelector("strong").textContent = fault.state === "recovered" ? "恢复确认" : fault.state === "handled" ? "处理结果" : "当前处理记录";
  note.querySelector("p").textContent = fault.note;
  renderFaultProcess(fault);
  renderFaultHandlingHistory(fault);

  const assignButton = document.querySelector("#faultDetailAssign");
  const handleButton = document.querySelector("#faultDetailHandle");
  const recoverButton = document.querySelector("#faultDetailRecover");
  assignButton.hidden = fault.state !== "pending" && fault.state !== "processing";
  assignButton.innerHTML = `<i data-lucide="user-plus"></i>${fault.state === "processing" ? "重新指派" : "指派人员"}`;
  handleButton.hidden = fault.state !== "pending" && fault.state !== "processing";
  recoverButton.hidden = fault.state !== "handled";
  recoverButton.disabled = fault.state === "handled" && !conditionRecovered;
  recoverButton.title = recoverButton.disabled ? "本故障对应指标尚未恢复" : "确认本故障恢复";
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  refreshIcons(modal);
}

function closeFaultDetail() {
  document.querySelector("#faultDetailModal").hidden = true;
  document.body.style.overflow = "";
}

function getWarningRecoveryConclusion(warning) {
  const conclusions = {
    power: "已完成配电回路和测温点复核，监测值恢复至预警阈值以内，连续数据上报正常。",
    gas: "已完成现场通风和探测器复核，可燃气体浓度回落至预警阈值以内，设备上报正常。",
    level: "已完成终端电池和液位采集检查，监测数据恢复稳定，终端通信正常。",
    pressure: "已完成管网和压力终端核查，压力恢复至正常范围，连续上报稳定。",
    camera: "已完成视频设备及通信链路核查，画面和数据质量恢复正常。",
    transmitter: "已完成传输装置供电和上报链路核查，设备状态恢复正常。",
  };
  return conclusions[warning.type] || "已完成设备和现场状态核查，监测值恢复至阈值以内，确认预警闭环。";
}

function openWarningRecoverModal(id) {
  const warning = terminalWarnings.find((item) => item.id === id);
  if (!warning || warning.state !== "checking") return;
  selectedTerminalWarningId = warning.id;
  document.querySelector("#warningRecoverTitle").textContent = warning.title;
  document.querySelector("#warningRecoverMeta").textContent = `${warning.point} · ${warning.no}`;
  document.querySelector("#warningRecoverValue").textContent = warning.value;
  document.querySelector("#warningRecoverThreshold").textContent = warning.threshold;
  document.querySelector("#warningRecoverHandler").textContent = warning.assignee === "待指派" ? currentUser.name : warning.assignee;
  document.querySelector("#warningRecoverNote").value = "";
  document.querySelector("#warningRecoverError").hidden = true;
  const modal = document.querySelector("#warningRecoverModal");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  refreshIcons(modal);
  document.querySelector("#warningRecoverNote").focus();
}

function closeWarningRecoverModal() {
  document.querySelector("#warningRecoverModal").hidden = true;
  document.body.style.overflow = "";
}

function submitWarningRecovery(event) {
  event.preventDefault();
  const warning = terminalWarnings.find((item) => item.id === selectedTerminalWarningId);
  if (!warning || warning.state !== "checking") return closeWarningRecoverModal();
  const noteInput = document.querySelector("#warningRecoverNote");
  const note = noteInput.value.trim();
  const error = document.querySelector("#warningRecoverError");
  if (!note) {
    error.textContent = "请填写恢复说明";
    error.hidden = false;
    noteInput.focus();
    showToast("请填写恢复说明");
    return;
  }
  warning.state = "recovered";
  warning.recoveredAt = formatClock(new Date());
  warning.updated = warning.recoveredAt.slice(11);
  warning.handledBy = warning.assignee === "待指派" ? currentUser.name : warning.assignee;
  warning.handlingNote = note;
  warning.handlingHistory.push({ action: "confirm_recovery", operator: warning.handledBy, time: warning.recoveredAt, note });
  closeWarningRecoverModal();
  renderTerminalWarningTable();
  showToast(`${warning.device}状态已恢复，处置记录已生成`);
  openWarningRecord(warning.id);
}

function getTerminalForWarning(warning) {
  return terminals.find((terminal) => terminal.serial === warning.serial) || null;
}

function renderWarningRecordProcess(warning) {
  const steps = [
    { label: "预警触发", icon: "triangle-alert", time: warning.firstTime, completed: true },
    { label: "人员指派", icon: "user-check", time: warning.assignedAt ? warning.assignedAt.slice(11) : "未单独指派", completed: true },
    { label: "开始核查", icon: "clipboard-check", time: warning.checkingStartedAt ? warning.checkingStartedAt.slice(11) : "直接核查", completed: true },
    { label: "确认恢复", icon: "badge-check", time: warning.recoveredAt ? warning.recoveredAt.slice(11) : "--", completed: Boolean(warning.recoveredAt) },
  ];
  document.querySelector("#warningRecordProcess").innerHTML = steps.map((step, index) => `${index ? '<i data-lucide="chevron-right"></i>' : ""}<div class="${step.completed ? "completed" : ""}"><span><i data-lucide="${step.icon}"></i></span><strong>${step.label}</strong><small>${step.time}</small></div>`).join("");
}

function renderWarningRecordHistory(warning) {
  const history = [...warning.handlingHistory].reverse();
  const labels = { created: "系统生成预警", assign: "人员指派", start_check: "开始核查", confirm_recovery: "确认恢复" };
  document.querySelector("#warningRecordHistoryCount").textContent = `${history.length} 条`;
  document.querySelector("#warningRecordHistory").innerHTML = history.map((record) => `<article class="fault-history-item"><header><strong>${labels[record.action] || "预警操作"}</strong><span>${escapeHtml(record.operator)} · ${escapeHtml(record.time)}</span></header><p>${escapeHtml(record.note)}</p></article>`).join("");
}

function openWarningRecord(id) {
  const warning = terminalWarnings.find((item) => item.id === id);
  if (!warning || warning.state !== "recovered") return;
  selectedTerminalWarningId = warning.id;
  const terminal = getTerminalForWarning(warning);
  const meta = terminalWarningTypeMeta[warning.type];
  const riskLabel = warning.risk === "high" ? "高风险" : warning.risk === "medium" ? "中风险" : "低风险";
  document.querySelector("#warningRecordRisk").textContent = riskLabel;
  document.querySelector("#warningRecordRisk").className = `risk-pill ${warning.risk}`;
  document.querySelector("#warningRecordTitle").textContent = warning.title;
  document.querySelector("#warningRecordMeta").textContent = `${meta.label} · ${warning.point}`;
  document.querySelector("#warningRecordNo").textContent = warning.no;
  document.querySelector("#warningRecordValue").textContent = warning.value;
  document.querySelector("#warningRecordThreshold").textContent = warning.threshold;
  document.querySelector("#warningRecordDevice").textContent = warning.device;
  document.querySelector("#warningRecordSerial").textContent = warning.serial;
  document.querySelector("#warningRecordPoint").textContent = warning.point;
  document.querySelector("#warningRecordType").textContent = meta.label;
  document.querySelector("#warningRecordFirstTime").textContent = `2026-07-23 ${warning.firstTime}`;
  document.querySelector("#warningRecordAssignedAt").textContent = warning.assignedAt || "未单独指派";
  document.querySelector("#warningRecordCheckingAt").textContent = warning.checkingStartedAt || "--";
  document.querySelector("#warningRecordRecoveredAt").textContent = warning.recoveredAt || "--";
  document.querySelector("#warningRecordHandler").textContent = warning.handledBy || warning.assignee;
  document.querySelector("#warningRecordRiskReason").textContent = warning.riskReason;
  document.querySelector("#warningRecordConclusion").textContent = warning.handlingNote || getWarningRecoveryConclusion(warning);
  document.querySelector("#warningRecordViewDevice").disabled = !terminal;
  renderWarningRecordProcess(warning);
  renderWarningRecordHistory(warning);
  const modal = document.querySelector("#warningRecordModal");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  refreshIcons(modal);
}

function closeWarningRecord() {
  document.querySelector("#warningRecordModal").hidden = true;
  document.body.style.overflow = "";
}

function openWarningTerminalStatus() {
  const warning = terminalWarnings.find((item) => item.id === selectedTerminalWarningId);
  const terminal = warning ? getTerminalForWarning(warning) : null;
  if (!terminal) {
    showToast("未找到关联设备状态");
    return;
  }
  closeWarningRecord();
  selectedTerminalId = terminal.id;
  switchView("terminal-detail");
}

function openFaultHandleModal(id) {
  const fault = getTerminalFault(id);
  if (fault.state !== "pending" && fault.state !== "processing") return;
  selectedTerminalFaultId = fault.id;
  document.querySelector("#faultHandleTargetTitle").textContent = fault.title;
  document.querySelector("#faultHandleTargetMeta").textContent = `${fault.point} · ${fault.no}`;
  document.querySelector("#faultHandleOperator").textContent = currentUser.name;
  document.querySelector("#faultHandleNote").value = "";
  const modal = document.querySelector("#faultHandleModal");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  refreshIcons(modal);
  document.querySelector("#faultHandleNote").focus();
}

function closeFaultHandleModal() {
  document.querySelector("#faultHandleModal").hidden = true;
  document.querySelector("#faultHandleForm").reset();
  document.body.style.overflow = "";
}

function submitFaultHandle(event) {
  event.preventDefault();
  const fault = getTerminalFault(selectedTerminalFaultId);
  const note = document.querySelector("#faultHandleNote").value.trim();
  if (!note) {
    document.querySelector("#faultHandleNote").focus();
    showToast("请填写处理备注");
    return;
  }
  const handledAt = formatClock(new Date());
  fault.state = "handled";
  fault.handledAt = handledAt;
  fault.updated = handledAt;
  fault.note = note;
  fault.handledBy = currentUser.name;
  if (fault.assignee === "待指派") fault.assignee = currentUser.name;
  if (!fault.conditionRecoveredAt && isTerminalHealthy(getTerminalForFault(fault))) fault.conditionRecoveredAt = handledAt;
  fault.handlingHistory.push({ action: "mark_handled", operator: currentUser.name, time: handledAt, note });
  closeFaultHandleModal();
  renderTerminalFaultTable();
  renderTerminalTable();
  if (!document.querySelector("#faultDetailModal").hidden && selectedTerminalFaultId === fault.id) openFaultDetail(fault.id);
  showToast(`${fault.device}已标记处理，等待设备状态恢复`);
}

function confirmTerminalFaultRecovery(id) {
  const fault = getTerminalFault(id);
  if (fault.state !== "handled") {
    showToast("请先标记故障处理结果");
    return;
  }
  if (!isFaultConditionRecovered(fault)) {
    showToast("本故障对应指标尚未恢复，暂不能确认恢复");
    return;
  }
  const recoveredAt = formatClock(new Date());
  const otherOpenFaults = getOtherOpenFaultsForTerminalFault(fault);
  const note = `本故障对应异常指标已恢复，已人工确认闭环。${otherOpenFaults.length ? `设备仍有 ${otherOpenFaults.length} 条其他未闭环故障。` : ""}`;
  fault.state = "recovered";
  fault.recoveredAt = recoveredAt;
  fault.updated = recoveredAt;
  fault.note = note;
  fault.handlingHistory.push({ action: "confirm_recovery", operator: currentUser.name, time: recoveredAt, note });
  renderTerminalFaultTable();
  renderTerminalTable();
  if (!document.querySelector("#faultDetailModal").hidden && selectedTerminalFaultId === fault.id) openFaultDetail(fault.id);
  showToast(`${fault.device}已确认恢复`);
}

function openFaultTerminalStatus(id) {
  const fault = getTerminalFault(id);
  const terminal = getTerminalForFault(fault);
  if (!terminal) {
    showToast("未找到关联设备状态");
    return;
  }
  closeFaultDetail();
  selectedTerminalType = "all";
  document.querySelector("#terminalSearch").value = terminal.serial;
  document.querySelector("#terminalStatusFilter").value = "all";
  document.querySelector("#terminalZoneFilter").value = "all";
  document.querySelectorAll("[data-terminal-type]").forEach((item) => item.classList.toggle("active", item.dataset.terminalType === "all"));
  switchView("terminals", null, document.querySelector('.nav-subitem[data-view="terminals"]'));
  renderTerminalTable();
  requestAnimationFrame(() => document.querySelector(`[data-terminal-row="${terminal.id}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
  showToast(`已定位${terminal.name}`);
}

function getVideoModule() {
  return videoMonitoringModules[selectedVideoModule] || videoMonitoringModules.offduty;
}

function getSelectedVideoChannel(module = getVideoModule()) {
  const channelId = selectedVideoChannelIds[selectedVideoModule];
  return module.channels.find((item) => item.id === channelId) || module.channels[0];
}

const offDutyRecordStateLabels = { pending: "待复核", processing: "处置中", recovered_pending: "待确认返岗", closed: "已消警" };
const offDutyDetectionTrackers = new Map();
const passageRecordStateLabels = { pending: "待处理", closed: "已闭环" };

function ensurePassageRecordShape(record) {
  if (!record) return null;
  if (record.state !== "closed") record.state = "pending";
  record.detectionState ||= record.state === "closed" && record.resolution !== "false_alarm" ? "clear" : "occupied";
  record.occupiedTarget ||= record.eventType === "fireEscapeDetection" ? "object" : "vehicle";
  record.detectedObjectLabel ||= record.occupiedTarget === "object" ? "物品" : "车辆";
  record.lastDetectedAt ||= record.clearDetectedAt || record.time || "";
  record.triggerThresholdSeconds ??= 60;
  record.resolution ||= "";
  record.falseAlarmReason ||= "";
  record.completedAt ||= "";
  record.handlingNote ||= "";
  record.operationHistory = Array.isArray(record.operationHistory) ? record.operationHistory : [];
  return record;
}

function getPassageRecordMethod(record) {
  ensurePassageRecordShape(record);
  if (record.state !== "closed") return "待人工处置";
  return record.resolution === "false_alarm" ? "误报消警" : "人工确认通道顺畅";
}

function getPassageRecordConclusion(record) {
  ensurePassageRecordShape(record);
  if (record.resolution === "false_alarm") return `${record.falseAlarmReason || "识别误报"}：${record.handlingNote}`;
  return record.handlingNote || "已人工确认通道顺畅。";
}

function getSelectedPassageRecord() {
  return videoMonitoringModules.passage.records.find((record) => record.id === selectedVideoRecordId) || null;
}

function renderPassageActionPanel(record) {
  const isPassage = selectedVideoModule === "passage";
  const panel = document.querySelector("#passageActionPanel");
  panel.hidden = !isPassage || record.state === "closed";
}

function isVideoRecordOpen(record) {
  if (selectedVideoModule === "offduty") return record.state !== "closed";
  if (selectedVideoModule === "passage") {
    ensurePassageRecordShape(record);
    return record.state !== "closed";
  }
  return record.state === "active" || record.state === "processing";
}

function getVideoRecordState(record) {
  if (selectedVideoModule === "offduty") {
    ensureOffDutyRecordShape(record);
    syncOffDutyRecoveryState(record);
    return offDutyRecordStateLabels[record.state] || "待复核";
  }
  if (selectedVideoModule === "passage") {
    ensurePassageRecordShape(record);
    return passageRecordStateLabels[record.state] || "待处理";
  }
  if (record.state === "active") return selectedVideoModule === "flame" ? "待确认" : "待处理";
  if (record.state === "processing") return "处置中";
  return selectedVideoModule === "passage" ? "已恢复" : "已闭环";
}

function parseDurationSeconds(value) {
  const parts = String(value || "00:00:00").split(":").map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return 0;
  return parts[0] * 3600 + parts[1] * 60 + parts[2];
}

function formatDurationSeconds(value) {
  const seconds = Math.max(0, Math.floor(value));
  const pad = (part) => String(part).padStart(2, "0");
  return `${pad(Math.floor(seconds / 3600))}:${pad(Math.floor((seconds % 3600) / 60))}:${pad(seconds % 60)}`;
}

function ensureOffDutyRecordShape(record) {
  if (!record) return null;
  if (record.state === "active") record.state = "pending";
  record.requiredCount ??= 2;
  record.detectedCountAtTrigger ??= 1;
  record.currentDetectedCount ??= record.state === "closed" ? record.requiredCount : record.detectedCountAtTrigger;
  record.triggerThresholdSeconds ??= 60;
  record.recoveryStableSeconds ??= 60;
  record.underCountStartedAt ||= record.time || record.triggeredAt || "";
  record.triggeredAt ||= record.time || "";
  record.reviewedAt ||= "";
  record.recoveredAt ||= "";
  record.recoveryStableSince ||= record.recoveredAt || "";
  record.completedAt ||= "";
  record.owner ||= "待处置";
  record.resolution ||= "";
  record.falseAlarmReason ||= "";
  record.handlingNote ||= "";
  record._durationBaseSeconds ??= parseDurationSeconds(record.duration);
  record._durationTrackingStartedAt ??= Date.now();
  return record;
}

function getOffDutyDurationSeconds(record) {
  ensureOffDutyRecordShape(record);
  const startedAt = parseAppDateTime(record.underCountStartedAt);
  const recoveredAt = parseAppDateTime(record.recoveredAt);
  if (startedAt && recoveredAt && recoveredAt >= startedAt) return Math.floor((recoveredAt - startedAt) / 1000);
  if (record.state === "closed") return record._durationBaseSeconds;
  return record._durationBaseSeconds + Math.floor((Date.now() - record._durationTrackingStartedAt) / 1000);
}

function getOffDutyRecoveryMeta(record) {
  ensureOffDutyRecordShape(record);
  if (record.currentDetectedCount < record.requiredCount) {
    return { ready: false, title: "当前人数尚未恢复", text: `识别到 ${record.currentDetectedCount} / ${record.requiredCount} 人，暂不能按人员返岗消警。`, remaining: record.recoveryStableSeconds };
  }
  const stableSince = parseAppDateTime(record.recoveryStableSince);
  if (!stableSince) {
    return { ready: false, title: "等待人数稳定", text: `当前已识别到 ${record.currentDetectedCount} / ${record.requiredCount} 人，正在确认持续稳定状态。`, remaining: record.recoveryStableSeconds };
  }
  const elapsed = Math.max(0, Math.floor((Date.now() - stableSince.getTime()) / 1000));
  const remaining = Math.max(0, record.recoveryStableSeconds - elapsed);
  return remaining === 0
    ? { ready: true, title: "返岗条件已满足", text: `当前 ${record.currentDetectedCount} / ${record.requiredCount} 人在岗，已连续稳定 ${record.recoveryStableSeconds} 秒。`, remaining: 0 }
    : { ready: false, title: "等待人数稳定", text: `当前 ${record.currentDetectedCount} / ${record.requiredCount} 人在岗，还需稳定 ${remaining} 秒。`, remaining };
}

function syncOffDutyRecoveryState(record) {
  if (!record || record.state === "closed") return;
  const recovery = getOffDutyRecoveryMeta(record);
  if (recovery.ready && record.reviewedAt) record.state = "recovered_pending";
  else if (record.state === "recovered_pending" && !recovery.ready) record.state = record.reviewedAt ? "processing" : "pending";
}

function getOffDutyRecordConclusion(record) {
  if (record.resolution === "false_alarm") return `${record.falseAlarmReason || "识别误报"}：${record.handlingNote}`;
  return `值守人数已恢复为 ${record.currentDetectedCount} / ${record.requiredCount} 人并持续稳定，${record.handlingNote}`;
}

function getOffDutyRecordMethod(record) {
  if (record.state !== "closed") return record.reviewedAt ? "视频复核中" : "待开始复核";
  return record.resolution === "false_alarm" ? "视频复核并误报消警" : "视频复核并确认返岗";
}

function renderVideoRecordTimeline(record) {
  const timeline = document.querySelector("#videoRecordTimeline");
  if (selectedVideoModule === "passage") {
    ensurePassageRecordShape(record);
    const resolutionLabel = record.resolution === "false_alarm" ? "误报消警" : "确认通道顺畅";
    const steps = [
      { label: "预警上报", time: record.time, icon: "radio", completed: true },
      { label: resolutionLabel, time: record.completedAt, icon: record.resolution === "false_alarm" ? "shield-check" : "circle-check", completed: Boolean(record.completedAt) },
    ];
    timeline.innerHTML = steps.map((step, index) => `${index ? '<i data-lucide="chevron-right"></i>' : ""}<div class="${step.completed ? "completed" : "pending"}"><span><i data-lucide="${step.icon}"></i></span><strong>${step.label}</strong><small>${step.time ? step.time.slice(11) : "--"}</small></div>`).join("");
    return;
  }
  if (selectedVideoModule !== "offduty") {
    timeline.innerHTML = `<div class="completed"><span><i data-lucide="radio"></i></span><strong>预警上报</strong><small>${record.time.slice(11)}</small></div><i data-lucide="chevron-right"></i><div class="completed"><span><i data-lucide="eye"></i></span><strong>现场复核</strong><small>已完成</small></div><i data-lucide="chevron-right"></i><div class="completed"><span><i data-lucide="circle-check"></i></span><strong>完成闭环</strong><small>已完成</small></div>`;
    return;
  }
  const recoveryLabel = record.resolution === "false_alarm" ? "误报确认" : "人数恢复";
  const recoveryTime = record.resolution === "false_alarm" ? record.completedAt : record.recoveredAt;
  const steps = [
    { label: "预警上报", time: record.triggeredAt, icon: "radio", completed: Boolean(record.triggeredAt) },
    { label: "开始复核", time: record.reviewedAt, icon: "eye", completed: Boolean(record.reviewedAt) },
    { label: recoveryLabel, time: recoveryTime, icon: record.resolution === "false_alarm" ? "shield-check" : "user-check", completed: Boolean(recoveryTime) },
    { label: "人工消警", time: record.completedAt, icon: "circle-check", completed: Boolean(record.completedAt) },
  ];
  timeline.innerHTML = steps.map((step, index) => `${index ? '<i data-lucide="chevron-right"></i>' : ""}<div class="${step.completed ? "completed" : "pending"}"><span><i data-lucide="${step.icon}"></i></span><strong>${step.label}</strong><small>${step.time ? step.time.slice(11) : "--"}</small></div>`).join("");
}

function renderPassageOperationHistory(record) {
  const section = document.querySelector("#passageOperationHistory");
  const list = document.querySelector("#passageOperationHistoryList");
  const count = document.querySelector("#passageOperationHistoryCount");
  const isPassage = selectedVideoModule === "passage";
  section.hidden = !isPassage;
  if (!isPassage) return;
  ensurePassageRecordShape(record);
  const finalActions = record.operationHistory.filter((item) => ["confirm_clear", "false_alarm"].includes(item.action));
  count.textContent = `${finalActions.length} 条`;
  if (!finalActions.length) {
    list.innerHTML = '<div class="passage-history-empty"><i data-lucide="clipboard-list"></i><span>暂无处置记录</span><small>确认通道恢复后将显示处置说明和现场照片</small></div>';
    return;
  }
  list.innerHTML = finalActions.map((item) => {
    const photos = (item.photos || []).map((photo) => {
      const source = typeof photo === "string" ? photo : photo.dataUrl;
      const name = typeof photo === "string" ? "现场照片" : photo.name;
      return `<img src="${source}" alt="${escapeHtml(name)}" title="${escapeHtml(name)}" />`;
    }).join("");
    const actionLabel = { confirm_clear: "确认通道顺畅", false_alarm: "误报消警" }[item.action] || "通道处置";
    return `<article class="passage-history-item">
      <header><strong>${actionLabel}</strong><span>${escapeHtml(item.operator)} · ${escapeHtml(item.time)}</span></header>
      <p>${escapeHtml(item.description)}</p>
      ${photos ? `<div class="passage-history-photos">${photos}</div>` : ""}
    </article>`;
  }).join("");
}

function getSelectedOffDutyRecord() {
  return videoMonitoringModules.offduty.records.find((record) => record.id === selectedVideoRecordId) || null;
}

function setOffDutyResolutionError(message = "") {
  const node = document.querySelector("#offDutyResolutionError");
  node.textContent = message;
  node.hidden = !message;
}

function renderOffDutyRecoveryGate(record) {
  if (selectedVideoModule !== "offduty" || !record) return;
  const recovery = getOffDutyRecoveryMeta(record);
  const gate = document.querySelector("#offDutyRecoveryGate");
  gate.hidden = selectedOffDutyResolution !== "returned";
  gate.className = `offduty-recovery-gate ${recovery.ready ? "ready" : record.currentDetectedCount >= record.requiredCount ? "waiting" : "blocked"}`;
  document.querySelector("#offDutyRecoveryGateTitle").textContent = recovery.title;
  document.querySelector("#offDutyRecoveryGateText").textContent = recovery.text;
  const submit = document.querySelector("#offDutyResolutionSubmit");
  submit.disabled = selectedOffDutyResolution === "returned" && !recovery.ready;
  submit.innerHTML = `<i data-lucide="${selectedOffDutyResolution === "returned" ? "user-check" : "shield-check"}"></i>${selectedOffDutyResolution === "returned" ? "确认返岗并消警" : "确认误报并消警"}`;
}

function renderOffDutyReviewPanel(record) {
  const isOffDuty = selectedVideoModule === "offduty";
  const panel = document.querySelector("#offDutyReviewPanel");
  panel.hidden = !isOffDuty || record.state === "closed";
  if (!isOffDuty || record.state === "closed") return;
  const start = document.querySelector("#offDutyReviewStart");
  const form = document.querySelector("#offDutyResolutionForm");
  const isPending = record.state === "pending";
  start.hidden = !isPending;
  form.hidden = isPending;
  document.querySelector("#offDutyReviewer").textContent = record.owner === "待处置" ? currentUser.name : record.owner;
  document.querySelector("#offDutyFalseAlarmReason").value = record.falseAlarmReason || "";
  document.querySelector("#offDutyHandlingNote").value = record.handlingNote || "";
  document.querySelectorAll("[data-offduty-resolution]").forEach((button) => button.classList.toggle("active", button.dataset.offdutyResolution === selectedOffDutyResolution));
  document.querySelector("#offDutyFalseAlarmField").hidden = selectedOffDutyResolution !== "false_alarm";
  setOffDutyResolutionError("");
  renderOffDutyRecoveryGate(record);
}

function syncCurrentOffDutyEvent(record) {
  if (record.id !== "vod01") return;
  const module = videoMonitoringModules.offduty;
  const alert = alerts.find((item) => item.id === "offduty");
  const terminal = terminals.find((item) => item.alertId === "offduty");
  module.event.owner = record.owner;
  module.event.state = getVideoRecordState(record);
  if (record.state !== "closed") return;
  module.event.closed = true;
  const channel = module.channels.find((item) => item.id === record.channelId) || module.channels[0];
  channel.active = false;
  channel.status = "normal";
  channel.statusLabel = record.resolution === "returned" ? "双人在岗" : "预警已复核";
  if (alert) {
    alert.state = "closed";
    alert.owner = record.owner;
    alert.duration = formatDurationSeconds(getOffDutyDurationSeconds(record));
    alert.summary = getOffDutyRecordConclusion(record);
  }
  if (terminal) {
    terminal.status = "normal";
    terminal.reading = record.resolution === "returned" ? "双人在岗" : "预警已人工复核";
    terminal.detail = `CH 01 · ${record.resolution === "returned" ? "staffOnDuty" : "falseAlarm"}`;
    terminal.updated = record.completedAt.slice(11);
  }
}

function startOffDutyReview() {
  const record = getSelectedOffDutyRecord();
  if (!record || record.state !== "pending") return;
  record.reviewedAt = formatClock(new Date());
  record.owner = currentUser.name;
  record.state = "processing";
  syncOffDutyRecoveryState(record);
  syncCurrentOffDutyEvent(record);
  renderVideoMonitoring();
  openVideoRecordDetail(record);
  showToast("已开始视频复核");
}

function selectOffDutyResolution(value) {
  if (value !== "returned" && value !== "false_alarm") return;
  selectedOffDutyResolution = value;
  document.querySelectorAll("[data-offduty-resolution]").forEach((button) => button.classList.toggle("active", button.dataset.offdutyResolution === value));
  document.querySelector("#offDutyFalseAlarmField").hidden = value !== "false_alarm";
  setOffDutyResolutionError("");
  renderOffDutyRecoveryGate(getSelectedOffDutyRecord());
  refreshIcons(document.querySelector("#offDutyResolutionForm"));
}

function submitOffDutyResolution(event) {
  event.preventDefault();
  const record = getSelectedOffDutyRecord();
  if (!record || record.state === "pending" || record.state === "closed") return;
  const note = document.querySelector("#offDutyHandlingNote").value.trim();
  const falseAlarmReason = document.querySelector("#offDutyFalseAlarmReason").value;
  if (selectedOffDutyResolution === "returned" && !getOffDutyRecoveryMeta(record).ready) {
    setOffDutyResolutionError("值守人数尚未恢复并连续稳定 60 秒，不能确认返岗。");
    return;
  }
  if (selectedOffDutyResolution === "false_alarm" && !falseAlarmReason) {
    setOffDutyResolutionError("请选择误报原因。");
    document.querySelector("#offDutyFalseAlarmReason").focus();
    return;
  }
  if (!note) {
    setOffDutyResolutionError("请填写处置说明。");
    document.querySelector("#offDutyHandlingNote").focus();
    return;
  }
  record.resolution = selectedOffDutyResolution;
  record.falseAlarmReason = selectedOffDutyResolution === "false_alarm" ? falseAlarmReason : "";
  record.handlingNote = note;
  record.owner = currentUser.name;
  record.completedAt = formatClock(new Date());
  record.duration = formatDurationSeconds(getOffDutyDurationSeconds(record));
  record._durationBaseSeconds = parseDurationSeconds(record.duration);
  record.state = "closed";
  syncCurrentOffDutyEvent(record);
  renderVideoMonitoring();
  openVideoRecordDetail(record);
  showToast(record.resolution === "returned" ? "已确认人员返岗并完成消警" : "已按误报完成消警");
}

function refreshOffDutyDurationDisplays() {
  videoMonitoringModules.offduty.records.forEach((record) => {
    ensureOffDutyRecordShape(record);
    syncOffDutyRecoveryState(record);
    const duration = formatDurationSeconds(getOffDutyDurationSeconds(record));
    document.querySelectorAll(`[data-offduty-duration="${record.id}"]`).forEach((node) => { node.textContent = duration; });
    document.querySelectorAll(`[data-offduty-state="${record.id}"]`).forEach((node) => {
      node.textContent = offDutyRecordStateLabels[record.state];
      node.className = `state-pill ${record.state === "closed" ? "reset" : record.state === "recovered_pending" ? "recovered-pending" : record.state === "processing" ? "processing" : "pending"}`;
    });
  });
  const record = getSelectedOffDutyRecord();
  if (record && !document.querySelector("#videoRecordModal").hidden) {
    document.querySelector("#videoRecordDetailDuration").textContent = formatDurationSeconds(getOffDutyDurationSeconds(record));
    renderOffDutyRecoveryGate(record);
    document.querySelector("#videoRecordDetailState").textContent = getVideoRecordState(record);
    document.querySelector("#videoRecordDetailState").className = `state-pill ${record.state === "closed" ? "reset" : record.state === "recovered_pending" ? "recovered-pending" : record.state === "processing" ? "processing" : "pending"}`;
  }
}

function processOffDutyDetection(channelId, detectedCount, observedAt = new Date()) {
  const module = videoMonitoringModules.offduty;
  const channel = module.channels.find((item) => item.id === channelId);
  if (!channel || channel.status === "offline") return null;
  const observedDate = observedAt instanceof Date ? observedAt : parseAppDateTime(observedAt);
  if (!observedDate) return null;
  const requiredCount = 2;
  const observedTime = formatClock(observedDate);
  let record = module.records.find((item) => item.channelId === channelId && item.state !== "closed");
  const tracker = offDutyDetectionTrackers.get(channelId) || { underCountStartedAt: "" };
  if (detectedCount >= requiredCount) {
    tracker.underCountStartedAt = "";
    offDutyDetectionTrackers.set(channelId, tracker);
    if (record) {
      record.currentDetectedCount = detectedCount;
      record.recoveredAt ||= observedTime;
      record.recoveryStableSince ||= observedTime;
      syncOffDutyRecoveryState(record);
    }
    return record || null;
  }
  if (record) {
    record.currentDetectedCount = detectedCount;
    record.recoveredAt = "";
    record.recoveryStableSince = "";
    if (record.state === "recovered_pending") record.state = record.reviewedAt ? "processing" : "pending";
    return record;
  }
  if (!tracker.underCountStartedAt) {
    tracker.underCountStartedAt = observedTime;
    offDutyDetectionTrackers.set(channelId, tracker);
    return null;
  }
  const startedAt = parseAppDateTime(tracker.underCountStartedAt);
  if (!startedAt || observedDate.getTime() - startedAt.getTime() < 60000) return null;
  record = {
    id: `vod${Date.now()}`, channelId, time: observedTime, title: "双人值守人数不足", eventType: "offDuty", device: channel.device, point: channel.point, duration: "00:00:00", owner: "待处置", state: "pending",
    requiredCount, detectedCountAtTrigger: detectedCount, currentDetectedCount: detectedCount, triggerThresholdSeconds: 60, recoveryStableSeconds: 60,
    underCountStartedAt: tracker.underCountStartedAt, triggeredAt: observedTime, reviewedAt: "", recoveredAt: "", recoveryStableSince: "", completedAt: "", resolution: "", falseAlarmReason: "", handlingNote: "",
  };
  ensureOffDutyRecordShape(record);
  module.records.unshift(record);
  channel.active = true;
  channel.status = "warning";
  channel.statusLabel = `${detectedCount} / ${requiredCount} 人在岗`;
  return record;
}

function openFireAlarmFromVideo(fireAlarmId = "fa1") {
  selectedFireAlarmId = fireAlarmId;
  const fireNav = document.querySelector('.nav-subitem[data-view="terminal-alarms"]');
  switchView("terminal-alarms", null, fireNav);
}

function drawVideoPlaybackScene() {
  const mode = selectedVideoModule === "flame" ? "thermal" : "visible";
  drawScene(document.querySelector("#videoPlaybackCanvas"), getVideoModule().category, mode, true);
}

function openVideoPlayback() {
  const module = getVideoModule();
  const currentChannel = getSelectedVideoChannel(module);
  const channelSelect = document.querySelector("#videoPlaybackChannel");
  channelSelect.innerHTML = module.channels.map((channel) => `<option value="${channel.id}">${channel.name} · ${channel.channel}</option>`).join("");
  channelSelect.value = currentChannel.id;
  document.querySelector("#videoPlaybackTitle").textContent = `${module.title}录像回看`;
  document.querySelector("#videoPlaybackChannelCode").textContent = currentChannel.channel;
  document.querySelector("#videoPlaybackTimestamp").textContent = `2026-07-23 ${module.event.time}`;
  document.querySelector("#videoPlaybackProgress").value = 35;
  document.querySelector("#videoPlaybackPlay").innerHTML = '<i data-lucide="play"></i>';
  document.querySelector("#videoPlaybackPlay").setAttribute("aria-label", "播放");
  document.querySelector("#videoPlaybackModal").hidden = false;
  document.body.style.overflow = "hidden";
  refreshIcons(document.querySelector("#videoPlaybackModal"));
  requestAnimationFrame(drawVideoPlaybackScene);
}

function closeVideoPlayback() {
  window.clearInterval(videoPlaybackTimer);
  videoPlaybackTimer = undefined;
  document.querySelector("#videoPlaybackModal").hidden = true;
  document.body.style.overflow = "";
}

function updatePlaybackTimestamp() {
  const progress = Number(document.querySelector("#videoPlaybackProgress").value);
  const start = document.querySelector("#videoPlaybackStart").value || "00:00";
  const end = document.querySelector("#videoPlaybackEnd").value || "23:59";
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);
  const startSeconds = startHour * 3600 + startMinute * 60;
  const endSeconds = Math.max(startSeconds + 60, endHour * 3600 + endMinute * 60);
  const currentSeconds = startSeconds + Math.round((endSeconds - startSeconds) * progress / 100);
  const pad = (value) => String(value).padStart(2, "0");
  const time = `${pad(Math.floor(currentSeconds / 3600) % 24)}:${pad(Math.floor((currentSeconds % 3600) / 60))}:${pad(currentSeconds % 60)}`;
  document.querySelector("#videoPlaybackTimestamp").textContent = `${document.querySelector("#videoPlaybackDate").value} ${time}`;
}

function openVideoRecordDetail(record) {
  const module = getVideoModule();
  const isOffDuty = selectedVideoModule === "offduty";
  const isPassage = selectedVideoModule === "passage";
  selectedVideoRecordId = record.id;
  selectedOffDutyResolution = "returned";
  selectedPassageResolution = "cleared";
  if (isOffDuty) {
    ensureOffDutyRecordShape(record);
    syncOffDutyRecoveryState(record);
  }
  if (isPassage) {
    ensurePassageRecordShape(record);
  }
  const modulePrefix = selectedVideoModule === "offduty" ? "OD" : selectedVideoModule === "passage" ? "PS" : "FL";
  const method = isOffDuty ? getOffDutyRecordMethod(record) : isPassage ? getPassageRecordMethod(record) : "警情复核并完成闭环";
  const conclusion = isOffDuty ? getOffDutyRecordConclusion(record) : isPassage ? getPassageRecordConclusion(record) : "现场已完成复核处置，设备状态正常，火灾告警记录已闭环。";
  const eventTime = isOffDuty ? record.triggeredAt : record.time;
  document.querySelector("#videoRecordDetailTitle").textContent = `${module.recordTitle}详情`;
  document.querySelector("#videoRecordDetailState").textContent = getVideoRecordState(record);
  document.querySelector("#videoRecordDetailState").className = `state-pill ${record.state === "closed" ? "reset" : record.state === "processing" ? "processing" : "pending"}`;
  document.querySelector("#videoRecordDetailEvent").textContent = record.title;
  document.querySelector("#videoRecordDetailMeta").textContent = `${eventTime} · ${record.eventType}`;
  document.querySelector("#videoRecordDetailNo").textContent = `REC-${modulePrefix}-20260723-${record.id.slice(-2).padStart(4, "0")}`;
  document.querySelector("#videoRecordDetailPoint").textContent = record.point;
  document.querySelector("#videoRecordDetailDevice").textContent = record.device;
  document.querySelector("#videoRecordDetailDuration").textContent = isOffDuty ? formatDurationSeconds(getOffDutyDurationSeconds(record)) : record.duration;
  document.querySelector("#videoRecordDetailOwner").textContent = record.owner;
  document.querySelector("#videoRecordDetailMethod").textContent = method;
  document.querySelector("#videoRecordDetailClosedAt").textContent = isOffDuty || isPassage ? record.completedAt || "--" : `${record.time.slice(0, 10)} ${shiftClockTime(record.time, parseDurationSeconds(record.duration) + 28)}`;
  document.querySelector("#videoRecordDetailConclusion").textContent = conclusion;
  document.querySelector("#videoRecordConclusion").hidden = record.state !== "closed";
  document.querySelectorAll("[data-offduty-record-only]").forEach((node) => { node.hidden = !isOffDuty; });
  document.querySelectorAll("[data-passage-record-only]").forEach((node) => { node.hidden = !isPassage; });
  if (isOffDuty) {
    document.querySelector("#offDutyRequiredCount").textContent = `${record.requiredCount} 人`;
    document.querySelector("#offDutyTriggerCount").textContent = `${record.detectedCountAtTrigger} 人`;
    document.querySelector("#offDutyCurrentCount").textContent = `${record.currentDetectedCount} / ${record.requiredCount} 人`;
    document.querySelector("#offDutyTriggerRule").textContent = `人数不足持续 ${record.triggerThresholdSeconds} 秒`;
  }
  if (isPassage) {
    document.querySelector("#passageOccupiedTarget").textContent = record.occupiedTarget === "object" ? "物品滞留" : "车辆占用";
    document.querySelector("#passageDetectedObject").textContent = record.detectedObjectLabel;
    document.querySelector("#passageDetectionState").textContent = record.detectionState === "clear" ? "设备识别通道畅通" : `${record.detectedObjectLabel}仍占用`;
    document.querySelector("#passageTriggerRule").textContent = `${record.occupiedTarget === "object" ? "物品滞留" : "车辆占用"}持续 ${record.triggerThresholdSeconds} 秒`;
    document.querySelector("#passageLastDetectedAt").textContent = record.lastDetectedAt || "--";
  }
  renderVideoRecordTimeline(record);
  renderOffDutyReviewPanel(record);
  renderPassageActionPanel(record);
  renderPassageOperationHistory(record);
  document.querySelector("#videoRecordModal").hidden = false;
  document.body.style.overflow = "hidden";
  refreshIcons(document.querySelector("#videoRecordModal"));
  requestAnimationFrame(() => drawScene(document.querySelector("#videoRecordCanvas"), module.category, selectedVideoModule === "flame" ? "thermal" : "visible", true));
}

function closeVideoRecordDetail() {
  document.querySelector("#videoRecordModal").hidden = true;
  selectedVideoRecordId = "";
  document.body.style.overflow = "";
}

function resolveVideoRecord(recordId) {
  const module = getVideoModule();
  const record = module.records.find((item) => item.id === recordId);
  if (["offduty", "passage"].includes(selectedVideoModule) && record) {
    openVideoRecordDetail(record);
    return;
  }
  if (!record || record.state !== "active") {
    showToast("事件处置记录已打开（演示）");
    return;
  }
  openVideoRecordDetail(record);
}

function renderVideoRecordTable() {
  const module = getVideoModule();
  const tbody = document.querySelector("#videoRecordTableBody");
  const isOffDuty = selectedVideoModule === "offduty";
  const isPassage = selectedVideoModule === "passage";
  const records = module.records.filter((item) => {
    if (isOffDuty) ensureOffDutyRecordShape(item);
    if (isPassage) {
      ensurePassageRecordShape(item);
    }
    if (selectedVideoRecordFilter === "active") return isOffDuty ? item.state !== "closed" : item.state !== "closed";
    if (selectedVideoRecordFilter === "closed") return item.state === "closed";
    return true;
  });
  tbody.innerHTML = records.map((record) => {
    const isFire = selectedVideoModule === "flame";
    const isActive = isOffDuty || isPassage ? record.state !== "closed" : record.state === "active";
    const reviewActionLabel = record.state === "closed" ? "查看记录" : isPassage ? "查看并处置" : record.state === "pending" ? "查看并复核" : "继续处置";
    const actionLabel = isOffDuty || isPassage ? reviewActionLabel : isFire && record.state !== "closed" ? "查看告警" : isActive ? module.primaryAction : "查看记录";
    const actionClass = isActive ? "video-record-action primary" : "video-record-action";
    const stateClass = record.state === "pending" || record.state === "active" ? "pending" : record.state === "processing" ? "processing" : record.state === "recovered_pending" ? "recovered-pending" : "reset";
    const recordTime = isOffDuty ? record.triggeredAt : record.time;
    const duration = isOffDuty ? formatDurationSeconds(getOffDutyDurationSeconds(record)) : record.duration;
    return `<tr>
      <td><time>${recordTime}</time></td>
      <td><div class="video-record-event"><strong>${record.title}</strong><small>${record.eventType}</small></div></td>
      <td><div class="video-record-device"><strong>${record.device}</strong><small>${record.point}</small></div></td>
      <td><span ${isOffDuty ? `data-offduty-duration="${record.id}"` : ""}>${duration}</span></td>
      <td>${record.owner}</td>
      <td><span class="state-pill ${stateClass}" ${isOffDuty ? `data-offduty-state="${record.id}"` : isPassage ? `data-passage-state="${record.id}"` : ""}>${getVideoRecordState(record)}</span></td>
      <td><button class="${actionClass}" type="button" data-video-record-action="${record.id}">${actionLabel}</button></td>
    </tr>`;
  }).join("");
  document.querySelector("#videoRecordEmpty").hidden = records.length > 0;
  document.querySelector("#videoRecordCount").textContent = `共 ${records.length} 条记录`;
  tbody.querySelectorAll("[data-video-record-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const record = module.records.find((item) => item.id === button.dataset.videoRecordAction);
      if (!record) return;
      if (isOffDuty || isPassage) openVideoRecordDetail(record);
      else if (selectedVideoModule === "flame" && record.state !== "closed") openFireAlarmFromVideo(record.fireAlarmId);
      else if (record.state === "active") resolveVideoRecord(record.id);
      else openVideoRecordDetail(record);
    });
  });
}

function renderVideoMonitoring() {
  const module = getVideoModule();
  const channel = getSelectedVideoChannel(module);
  const activeCount = module.records.filter((item) => isVideoRecordOpen(item)).length;
  const isActiveChannel = channel.active && !module.event.closed;
  const isFlame = selectedVideoModule === "flame";
  if (!isFlame) selectedVideoViewMode = "visible";

  document.querySelector("#videoModuleTitle").textContent = module.title;
  document.querySelector("#videoModuleCapability").textContent = module.capability;
  if (!document.querySelector("#view-video-monitoring").hidden) {
    document.querySelector("#workspaceTabLabel").textContent = module.title;
  }
  document.querySelector("#videoSummaryDevices").textContent = module.devices;
  document.querySelector("#videoSummaryDevicesNote").textContent = `${module.devices} 台在线`;
  document.querySelector("#videoSummaryActiveLabel").textContent = module.activeLabel;
  document.querySelector("#videoSummaryActive").textContent = activeCount;
  document.querySelector("#videoSummaryActive").className = isFlame ? "danger-text" : "warning-text";
  const currentOffDutyRecord = selectedVideoModule === "offduty" ? module.records.find((item) => item.id === "vod01" && item.state !== "closed") : null;
  document.querySelector("#videoSummaryActiveNote").textContent = activeCount ? currentOffDutyRecord ? `持续 ${formatDurationSeconds(getOffDutyDurationSeconds(currentOffDutyRecord))}` : module.summaryNote : "当前无待处理事件";
  document.querySelector("#videoSummaryToday").textContent = module.today;
  document.querySelector("#videoSummaryTodayNote").textContent = module.todayNote;
  document.querySelector("#videoRecordHeading").textContent = module.recordTitle;
  document.querySelector("#videoRecordSubtitle").textContent = module.recordSubtitle;
  document.querySelector("#videoChannelCount").textContent = `${module.channels.length} 个通道`;

  document.querySelectorAll("[data-video-module-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.videoModuleTab === selectedVideoModule);
    const item = videoMonitoringModules[button.dataset.videoModuleTab];
    const count = item.records.filter((record) => ["offduty", "passage"].includes(button.dataset.videoModuleTab) ? record.state !== "closed" : record.state === "active").length;
    button.querySelector("b").textContent = `${count} 条${button.dataset.videoModuleTab === "flame" ? "告警" : "预警"}`;
  });

  const channelList = document.querySelector("#videoChannelList");
  channelList.innerHTML = module.channels.map((item) => `<button class="video-channel-item ${item.id === channel.id ? "active" : ""}" type="button" data-video-channel="${item.id}">
    <span class="video-channel-icon"><i data-lucide="cctv"></i></span>
    <span class="video-channel-copy"><strong>${item.name}</strong><small>${item.device} · ${item.channel}</small><span class="${item.status === "warning" ? "warning" : item.status === "offline" ? "offline" : ""}">${item.status === "offline" ? "离线" : item.statusLabel}</span></span>
  </button>`).join("");
  channelList.querySelectorAll("[data-video-channel]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedVideoChannelIds[selectedVideoModule] = button.dataset.videoChannel;
      renderVideoMonitoring();
    });
  });
  refreshIcons(channelList);

  document.querySelector("#videoCameraName").textContent = `${channel.name} · ${channel.device}`;
  document.querySelector("#videoMonitorChannel").textContent = channel.channel;
  document.querySelector("#videoViewSwitch").hidden = !isFlame;
  document.querySelectorAll("[data-video-view-mode]").forEach((button) => button.classList.toggle("active", button.dataset.videoViewMode === selectedVideoViewMode));
  document.querySelector("#videoMonitorTemperatureScale").hidden = !(isFlame && selectedVideoViewMode === "thermal");

  const event = isActiveChannel ? module.event : {
    title: `${channel.name}运行正常`,
    level: "实时状态",
    state: "正常",
    description: `${channel.name}视频连接正常，当前未检测到需要处置的事件。`,
    eventType: selectedVideoModule === "offduty" ? "staffOnDuty" : selectedVideoModule === "passage" ? "channelClear" : "temperatureNormal",
    metricLabel: "当前状态",
    metricValue: channel.statusLabel,
    time: "19:43:08",
    owner: "无需处置",
    note: "系统持续分析实时视频，异常事件将自动生成记录并通知值班人员。",
    liveSummary: `${channel.name}画面正常，智能分析持续运行中`,
    sceneState: channel.statusLabel,
    sceneClass: "ok",
    sceneIcon: "shield-check",
  };
  const eventLevel = document.querySelector("#videoEventLevel");
  eventLevel.textContent = event.level;
  eventLevel.className = `severity-label ${isActiveChannel ? isFlame ? "level-one" : "level-two" : "level-three"}`;
  const eventState = document.querySelector("#videoEventState");
  eventState.textContent = event.state;
  eventState.className = `state-pill ${isActiveChannel ? isFlame ? "pending" : "processing" : "reset"}`;
  document.querySelector("#videoEventTitle").textContent = event.title;
  document.querySelector("#videoEventDescription").textContent = event.description;
  document.querySelector("#videoEventPoint").textContent = channel.point;
  document.querySelector("#videoEventDevice").textContent = channel.device;
  document.querySelector("#videoEventType").textContent = event.eventType;
  document.querySelector("#videoMetricLabel").textContent = event.metricLabel;
  document.querySelector("#videoMetricValue").textContent = event.metricValue;
  document.querySelector("#videoEventTime").textContent = event.time;
  document.querySelector("#videoEventOwner").textContent = event.owner;
  document.querySelector("#videoEventNote").textContent = event.note;
  document.querySelector("#videoLiveSummary").textContent = event.liveSummary;
  const sceneState = document.querySelector("#videoSceneState");
  sceneState.className = `video-scene-state ${event.sceneClass}`;
  sceneState.innerHTML = `<i data-lucide="${event.sceneIcon}"></i>${event.sceneState}`;

  const primaryAction = document.querySelector("#videoPrimaryAction");
  primaryAction.disabled = !isActiveChannel;
  primaryAction.innerHTML = `<i data-lucide="${isFlame ? "siren" : "badge-check"}"></i><span>${isActiveChannel ? module.primaryAction : "暂无待处理事件"}</span>`;
  refreshIcons(document.querySelector("#view-video-monitoring"));
  renderVideoRecordTable();
  requestAnimationFrame(drawVideoMonitorScene);
}

function drawVideoMonitorScene() {
  const module = getVideoModule();
  drawScene(document.querySelector("#videoMonitorCanvas"), module.category, selectedVideoViewMode, true);
}

function switchView(view, scrollTarget, sourceButton = null) {
  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.viewPanel !== view;
  });
  const navButtons = document.querySelectorAll(".nav-item[data-view], .nav-subitem[data-view]");
  navButtons.forEach((button) => button.classList.remove("active"));
  const canonicalButton = document.querySelector(`.nav-item[data-view="${view}"]:not([data-scroll-target])`);
  (sourceButton || canonicalButton)?.classList.add("active");
  document.querySelector("#workspaceTabLabel").textContent = viewLabels[view];
  const icon = document.querySelector(".active-tab > svg");
  if (icon) icon.setAttribute("data-lucide", viewIcons[view]);
  refreshIcons(document.querySelector(".workspace-tabs"));
  document.querySelector(".view-container").scrollTo({ top: 0, behavior: "instant" });
  if (scrollTarget) {
    requestAnimationFrame(() => document.querySelector(`#${scrollTarget}`)?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }
  if (view === "dashboard") requestAnimationFrame(drawAllCanvases);
  if (view === "alarms") renderAlarmTable();
  if (view === "devices") renderDeviceTable(document.querySelector("[data-device-type].active")?.dataset.deviceType || "all");
  if (view === "terminals") renderTerminalTable();
  if (view === "terminal-detail") renderTerminalDetail();
  if (view === "terminal-alarms") renderFireAlarmList();
  if (view === "terminal-warnings") renderTerminalWarningTable();
  if (view === "terminal-faults") renderTerminalFaultTable();
  if (view === "video-monitoring") renderVideoMonitoring();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.querySelector("span").textContent = message;
  toast.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => { toast.hidden = true; }, 2800);
}

function openHandleModal(id, previewOnly = false) {
  const alert = getAlert(id);
  selectedAlertId = id;
  const modal = document.querySelector("#handleModal");
  document.querySelector("#modalSeverity").textContent = `${alert.level}级告警`;
  document.querySelector("#modalSeverity").className = `severity-label level-${alert.level === 1 ? "one" : alert.level === 2 ? "two" : "three"}`;
  document.querySelector("#modalEventTitle").textContent = alert.title;
  document.querySelector("#modalEventMeta").textContent = `${alert.location} · ${alert.time} · ${alert.serial}`;
  document.querySelector("#handleModalTitle").textContent = previewOnly && alert.state === "closed" ? "告警详情" : alert.state === "processing" ? "更新处置进度" : "接警处置";
  document.querySelector("#handlerSelect").value = alert.owner === "待分派" ? "" : [...document.querySelector("#handlerSelect").options].find((option) => option.text.startsWith(alert.owner))?.value || "";
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeHandleModal() {
  document.querySelector("#handleModal").hidden = true;
  document.body.style.overflow = "";
}

function openAssignmentModal(type, id) {
  assignmentTargetType = type;
  assignmentTargetId = id;
  const modal = document.querySelector("#assignmentModal");
  const target = type === "fire" ? getFireAlarm(id) : type === "fault" ? getTerminalFault(id) : terminalWarnings.find((item) => item.id === id);
  if (!target) return;
  const currentAssignee = type === "fire" ? target.operator : target.assignee;
  document.querySelector("#assignmentTargetTitle").textContent = target.title;
  document.querySelector("#assignmentTargetMeta").textContent = `${target.location || target.point} · ${target.no}`;
  document.querySelector("#assignmentModalTitle").textContent = type === "fire" ? "指派火警处置人员" : type === "fault" ? "指派设备运维人员" : "指派预警核查人员";
  document.querySelector(".assignment-summary .summary-icon").innerHTML = `<i data-lucide="${type === "fire" ? "siren" : type === "fault" ? "wrench" : "triangle-alert"}"></i>`;
  const personSelect = document.querySelector("#assignmentPerson");
  personSelect.value = [...personSelect.options].find((option) => option.text.startsWith(currentAssignee))?.value || "";
  const deadlineRule = assignmentDeadlineRules[type];
  const deadlineSelect = document.querySelector("#assignmentDeadline");
  deadlineSelect.innerHTML = deadlineRule.options.map((option) => `<option value="${option.value}">${option.label}</option>`).join("");
  const savedWindow = Number(target.assignmentWindowMinutes);
  deadlineSelect.value = deadlineRule.options.some((option) => option.value === savedWindow) ? String(savedWindow) : String(deadlineRule.defaultMinutes);
  document.querySelector("#assignmentMessage").value = type === "fire" ? "请立即查看现场图片与前后录像，确认后第一时间反馈警情。" : type === "fault" ? "请检查设备供电、通信和运行状态，完成检查后及时记录处理情况。" : "请核查设备状态、当前读数和预警阈值，并及时反馈处理结果。";
  document.querySelector("#assignmentNotify").checked = true;
  updateAssignmentDeadlinePreview();
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  refreshIcons(modal);
}

function closeAssignmentModal() {
  document.querySelector("#assignmentModal").hidden = true;
  document.body.style.overflow = "";
}

function bindInteractions() {
  document.querySelectorAll(".nav-item[data-view], .nav-subitem[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.videoModule) {
        selectedVideoModule = button.dataset.videoModule;
        selectedVideoViewMode = selectedVideoModule === "flame" ? "thermal" : "visible";
      }
      switchView(button.dataset.view, button.dataset.scrollTarget, button);
    });
  });
  document.querySelectorAll("[data-view-jump]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.viewJump)));
  document.querySelectorAll("[data-alert-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      dashboardFilter = button.dataset.alertFilter;
      document.querySelectorAll("[data-alert-filter]").forEach((item) => item.classList.toggle("active", item === button));
      renderAlertQueue();
    });
  });
  document.querySelectorAll("[data-camera-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      cameraMode = button.dataset.cameraMode;
      updateFocusDetail();
    });
  });
  document.querySelectorAll("[data-alert-select]").forEach((card) => {
    card.addEventListener("click", () => {
      dashboardFilter = "pending";
      document.querySelectorAll("[data-alert-filter]").forEach((button) => button.classList.toggle("active", button.dataset.alertFilter === "pending"));
      selectedAlertId = card.dataset.alertSelect;
      cameraMode = selectedAlertId === "flame" ? "thermal" : "visible";
      renderAlertQueue();
      document.querySelector(".operations-section").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  document.addEventListener("click", (event) => {
    const handleButton = event.target.closest("[data-action='handle']");
    if (handleButton && !handleButton.disabled) openHandleModal(handleButton.dataset.alertId);
  });
  document.querySelectorAll("[data-modal-close]").forEach((button) => button.addEventListener("click", closeHandleModal));
  document.querySelector("#handleModal").addEventListener("click", (event) => { if (event.target.id === "handleModal") closeHandleModal(); });
  document.querySelectorAll("[data-disposal]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedDisposal = button.dataset.disposal;
      document.querySelectorAll("[data-disposal]").forEach((item) => item.classList.toggle("selected", item === button));
    });
  });
  document.querySelector("#handleForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const handler = document.querySelector("#handlerSelect").value;
    if (!handler) {
      document.querySelector("#handlerSelect").focus();
      showToast("请选择处置人员");
      return;
    }
    const alert = getAlert(selectedAlertId);
    alert.state = "processing";
    alert.owner = handler.split("（")[0];
    alert.summary = `${selectedDisposal} · 已由 ${alert.owner} 接警处理`;
    closeHandleModal();
    dashboardFilter = "processing";
    document.querySelectorAll("[data-alert-filter]").forEach((button) => button.classList.toggle("active", button.dataset.alertFilter === "processing"));
    renderAlertQueue();
    renderAlarmTable();
    showToast(`${alert.title}已由${alert.owner}接警`);
  });
  ["#alarmSearch", "#typeFilter", "#levelFilter", "#stateFilter"].forEach((selector) => {
    const node = document.querySelector(selector);
    node.addEventListener(node.tagName === "INPUT" ? "input" : "change", renderAlarmTable);
  });
  document.querySelector("#clearFilters").addEventListener("click", () => {
    document.querySelector("#alarmSearch").value = "";
    document.querySelector("#typeFilter").value = "all";
    document.querySelector("#levelFilter").value = "all";
    document.querySelector("#stateFilter").value = "all";
    renderAlarmTable();
  });
  document.querySelectorAll("[data-device-type]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-device-type]").forEach((item) => item.classList.toggle("active", item === button));
      renderDeviceTable(button.dataset.deviceType);
    });
  });
  document.querySelector("#deviceSearch").addEventListener("input", () => renderDeviceTable(document.querySelector("[data-device-type].active")?.dataset.deviceType || "all"));
  document.querySelectorAll("[data-terminal-type]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTerminalType = button.dataset.terminalType;
      document.querySelectorAll("[data-terminal-type]").forEach((item) => item.classList.toggle("active", item === button));
      renderTerminalTable();
    });
  });
  document.querySelector("#terminalSearch").addEventListener("input", renderTerminalTable);
  document.querySelector("#terminalStatusFilter").addEventListener("change", renderTerminalTable);
  document.querySelector("#terminalZoneFilter").addEventListener("change", renderTerminalTable);
  document.querySelector("#clearTerminalFilters").addEventListener("click", () => {
    selectedTerminalType = "all";
    document.querySelector("#terminalSearch").value = "";
    document.querySelector("#terminalStatusFilter").value = "all";
    document.querySelector("#terminalZoneFilter").value = "all";
    document.querySelectorAll("[data-terminal-type]").forEach((item) => item.classList.toggle("active", item.dataset.terminalType === "all"));
    renderTerminalTable();
  });
  ["#fireAlarmSearch", "#fireAlarmLevelFilter", "#fireAlarmStateFilter"].forEach((selector) => {
    const node = document.querySelector(selector);
    node.addEventListener(node.tagName === "INPUT" ? "input" : "change", renderFireAlarmList);
  });
  document.querySelector("#clearFireAlarmFilters").addEventListener("click", () => {
    document.querySelector("#fireAlarmSearch").value = "";
    document.querySelector("#fireAlarmLevelFilter").value = "all";
    document.querySelector("#fireAlarmStateFilter").value = "all";
    renderFireAlarmList();
  });
  document.querySelectorAll("[data-fire-evidence]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedFireEvidence = button.dataset.fireEvidence;
      document.querySelectorAll("[data-fire-evidence]").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelector("#fireImageEvidence").hidden = selectedFireEvidence !== "images";
      document.querySelector("#fireVideoEvidence").hidden = selectedFireEvidence !== "video";
      drawFireEvidence();
    });
  });
  document.querySelectorAll("[data-fire-image-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedFireImageMode = button.dataset.fireImageMode;
      document.querySelectorAll("[data-fire-image-mode]").forEach((item) => item.classList.toggle("active", item === button));
      drawFireEvidence();
    });
  });
  document.querySelectorAll("[data-fire-video-offset]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedFireVideoOffset = button.dataset.fireVideoOffset;
      document.querySelectorAll("[data-fire-video-offset]").forEach((item) => item.classList.toggle("active", item === button));
      drawFireEvidence();
    });
  });
  document.querySelector("#fireVideoPlay").addEventListener("click", (event) => {
    const button = event.currentTarget;
    button.innerHTML = '<i data-lucide="pause"></i>';
    refreshIcons(button);
    showToast("正在播放报警前后录像片段");
    window.setTimeout(() => {
      button.innerHTML = '<i data-lucide="play"></i>';
      refreshIcons(button);
    }, 1600);
  });
  document.querySelectorAll("[data-fire-action]").forEach((button) => {
    button.addEventListener("click", () => {
      openFireActionModal(button.dataset.fireAction);
    });
  });
  ["#terminalWarningSearch", "#terminalWarningTypeFilter", "#terminalWarningStateFilter"].forEach((selector) => {
    const node = document.querySelector(selector);
    node.addEventListener(node.tagName === "INPUT" ? "input" : "change", renderTerminalWarningTable);
  });
  document.querySelector("#clearTerminalWarningFilters").addEventListener("click", () => {
    document.querySelector("#terminalWarningSearch").value = "";
    document.querySelector("#terminalWarningTypeFilter").value = "all";
    document.querySelector("#terminalWarningStateFilter").value = "all";
    renderTerminalWarningTable();
  });
  ["#terminalFaultSearch", "#terminalFaultTypeFilter", "#terminalFaultStateFilter"].forEach((selector) => {
    const node = document.querySelector(selector);
    node.addEventListener(node.tagName === "INPUT" ? "input" : "change", renderTerminalFaultTable);
  });
  document.querySelector("#clearTerminalFaultFilters").addEventListener("click", () => {
    document.querySelector("#terminalFaultSearch").value = "";
    document.querySelector("#terminalFaultTypeFilter").value = "all";
    document.querySelector("#terminalFaultStateFilter").value = "all";
    renderTerminalFaultTable();
  });
  document.querySelectorAll("[data-fault-detail-close]").forEach((button) => button.addEventListener("click", closeFaultDetail));
  document.querySelector("#faultDetailModal").addEventListener("click", (event) => { if (event.target.id === "faultDetailModal") closeFaultDetail(); });
  document.querySelectorAll("[data-warning-record-close]").forEach((button) => button.addEventListener("click", closeWarningRecord));
  document.querySelector("#warningRecordModal").addEventListener("click", (event) => { if (event.target.id === "warningRecordModal") closeWarningRecord(); });
  document.querySelector("#warningRecordViewDevice").addEventListener("click", openWarningTerminalStatus);
  document.querySelectorAll("[data-warning-recover-close]").forEach((button) => button.addEventListener("click", closeWarningRecoverModal));
  document.querySelector("#warningRecoverModal").addEventListener("click", (event) => { if (event.target.id === "warningRecoverModal") closeWarningRecoverModal(); });
  document.querySelector("#warningRecoverForm").addEventListener("submit", submitWarningRecovery);
  document.querySelector("#warningRecoverNote").addEventListener("input", () => { document.querySelector("#warningRecoverError").hidden = true; });
  document.querySelector("#faultDetailAssign").addEventListener("click", () => {
    const faultId = selectedTerminalFaultId;
    closeFaultDetail();
    openAssignmentModal("fault", faultId);
  });
  document.querySelector("#faultDetailHandle").addEventListener("click", () => {
    const faultId = selectedTerminalFaultId;
    closeFaultDetail();
    openFaultHandleModal(faultId);
  });
  document.querySelector("#faultDetailRecover").addEventListener("click", () => confirmTerminalFaultRecovery(selectedTerminalFaultId));
  document.querySelector("#faultDetailViewDevice").addEventListener("click", () => openFaultTerminalStatus(selectedTerminalFaultId));
  document.querySelectorAll("[data-fault-handle-close]").forEach((button) => button.addEventListener("click", closeFaultHandleModal));
  document.querySelector("#faultHandleModal").addEventListener("click", (event) => { if (event.target.id === "faultHandleModal") closeFaultHandleModal(); });
  document.querySelector("#faultHandleForm").addEventListener("submit", submitFaultHandle);
  document.querySelector("[data-assign-fire]").addEventListener("click", () => openAssignmentModal("fire", selectedFireAlarmId));
  document.querySelectorAll("[data-assignment-close]").forEach((button) => button.addEventListener("click", closeAssignmentModal));
  document.querySelector("#assignmentModal").addEventListener("click", (event) => { if (event.target.id === "assignmentModal") closeAssignmentModal(); });
  document.querySelector("#assignmentDeadline").addEventListener("change", updateAssignmentDeadlinePreview);
  document.querySelector("#assignmentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedPerson = document.querySelector("#assignmentPerson").value;
    if (!selectedPerson) {
      document.querySelector("#assignmentPerson").focus();
      showToast("请选择处置人员");
      return;
    }
    const personName = selectedPerson.split("（")[0];
    const taskMessage = document.querySelector("#assignmentMessage").value.trim();
    const assignmentWindowMinutes = Number(document.querySelector("#assignmentDeadline").value);
    const assignedDate = new Date();
    const assignedAt = formatClock(assignedDate);
    const assignmentDeadlineAt = formatClock(new Date(assignedDate.getTime() + assignmentWindowMinutes * 60 * 1000));
    if (assignmentTargetType === "fire") {
      const alarm = getFireAlarm(assignmentTargetId);
      alarm.operator = personName;
      alarm.assignedAt = assignedAt;
      alarm.assignmentWindowMinutes = assignmentWindowMinutes;
      alarm.assignmentDeadlineAt = assignmentDeadlineAt;
      alarm.note = taskMessage ? `已指派${personName}：${taskMessage}` : `已指派${personName}负责警情确认与处置。`;
      renderFireAlarmList();
    } else if (assignmentTargetType === "warning") {
      const warning = terminalWarnings.find((item) => item.id === assignmentTargetId);
      if (warning) {
        warning.assignee = personName;
        warning.assignedAt = assignedAt;
        warning.assignmentWindowMinutes = assignmentWindowMinutes;
        warning.assignmentDeadlineAt = assignmentDeadlineAt;
        warning.handlingHistory.push({ action: "assign", operator: currentUser.name, time: assignedAt, note: taskMessage ? `指派${personName}负责预警核查：${taskMessage}` : `指派${personName}负责预警核查。` });
      }
      renderTerminalWarningTable();
    } else {
      const fault = getTerminalFault(assignmentTargetId);
      fault.assignee = personName;
      fault.state = "processing";
      fault.assignedAt = assignedAt;
      fault.assignmentWindowMinutes = assignmentWindowMinutes;
      fault.assignmentDeadlineAt = assignmentDeadlineAt;
      fault.updated = assignedAt;
      fault.note = taskMessage ? `已指派${personName}：${taskMessage}` : `已指派${personName}负责设备检修。`;
      fault.handlingHistory.push({ action: "assign", operator: currentUser.name, time: assignedAt, note: fault.note });
      renderTerminalFaultTable();
      renderTerminalTable();
    }
    closeAssignmentModal();
    showToast(`任务已指派给${personName}`);
  });
  document.querySelectorAll("[data-fire-action-close]").forEach((button) => button.addEventListener("click", closeFireActionModal));
  document.querySelector("#fireActionModal").addEventListener("click", (event) => {
    if (event.target.id === "fireActionModal") closeFireActionModal();
  });
  document.querySelector("#fireActionPhotos").addEventListener("change", handleFireActionPhotoSelection);
  document.querySelector("#fireActionPhotoPreview").addEventListener("click", (event) => {
    const button = event.target.closest("[data-fire-photo-remove]");
    if (!button) return;
    pendingFireActionPhotos = pendingFireActionPhotos.filter((photo) => photo.id !== button.dataset.firePhotoRemove);
    setFireActionPhotoError("");
    renderFireActionPhotoPreview();
  });
  document.querySelector("#fireActionForm").addEventListener("submit", submitFireAction);
  document.querySelectorAll("[data-passage-action-close]").forEach((button) => button.addEventListener("click", closePassageActionModal));
  document.querySelector("#passageActionModal").addEventListener("click", (event) => {
    if (event.target.id === "passageActionModal") closePassageActionModal();
  });
  document.querySelector("#passageActionPhotos").addEventListener("change", handlePassageActionPhotoSelection);
  document.querySelector("#passageActionPhotoPreview").addEventListener("click", (event) => {
    const button = event.target.closest("[data-passage-photo-remove]");
    if (!button) return;
    pendingPassageActionPhotos = pendingPassageActionPhotos.filter((photo) => photo.id !== button.dataset.passagePhotoRemove);
    setPassageActionPhotoError("");
    renderPassageActionPhotoPreview();
  });
  document.querySelector("#passageActionForm").addEventListener("submit", submitPassageAction);
  document.querySelector("#passageFalseAlarmAction").addEventListener("click", () => {
    const record = getSelectedPassageRecord();
    if (record) openPassageActionModal(record.id, "false_alarm");
  });
  document.querySelector("#passageConfirmClear").addEventListener("click", () => {
    const record = getSelectedPassageRecord();
    if (record) openPassageActionModal(record.id, "cleared");
  });
  document.querySelectorAll("[data-video-module-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedVideoModule = button.dataset.videoModuleTab;
      selectedVideoViewMode = selectedVideoModule === "flame" ? "thermal" : "visible";
      selectedVideoRecordFilter = "all";
      document.querySelectorAll("[data-video-record-filter]").forEach((item) => item.classList.toggle("active", item.dataset.videoRecordFilter === "all"));
      document.querySelectorAll('.nav-item[data-view="video-monitoring"], .nav-subitem[data-view="video-monitoring"]').forEach((item) => item.classList.remove("active"));
      document.querySelector('.nav-item[data-view="video-monitoring"]')?.classList.add("active");
      renderVideoMonitoring();
    });
  });
  document.querySelectorAll("[data-video-view-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedVideoViewMode = button.dataset.videoViewMode;
      document.querySelectorAll("[data-video-view-mode]").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelector("#videoMonitorTemperatureScale").hidden = selectedVideoViewMode !== "thermal";
      drawVideoMonitorScene();
    });
  });
  document.querySelectorAll("[data-video-record-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedVideoRecordFilter = button.dataset.videoRecordFilter;
      document.querySelectorAll("[data-video-record-filter]").forEach((item) => item.classList.toggle("active", item === button));
      renderVideoRecordTable();
    });
  });
  document.querySelector("#videoPrimaryAction").addEventListener("click", () => {
    if (selectedVideoModule === "flame") {
      openFireAlarmFromVideo("fa1");
      return;
    }
    const activeRecord = getVideoModule().records.find((item) => ["offduty", "passage"].includes(selectedVideoModule) ? item.state !== "closed" : item.state === "active");
    if (activeRecord) resolveVideoRecord(activeRecord.id);
    else showToast("当前没有待处理事件");
  });
  document.querySelector("#videoPlaybackButton").addEventListener("click", openVideoPlayback);
  document.querySelectorAll("[data-video-playback-close]").forEach((button) => button.addEventListener("click", closeVideoPlayback));
  document.querySelector("#videoPlaybackModal").addEventListener("click", (event) => {
    if (event.target.id === "videoPlaybackModal") closeVideoPlayback();
  });
  document.querySelector("#videoPlaybackChannel").addEventListener("change", (event) => {
    const channel = getVideoModule().channels.find((item) => item.id === event.target.value);
    if (!channel) return;
    document.querySelector("#videoPlaybackChannelCode").textContent = channel.channel;
    drawVideoPlaybackScene();
  });
  document.querySelector("#videoPlaybackSearch").addEventListener("click", () => {
    const date = document.querySelector("#videoPlaybackDate").value;
    const start = document.querySelector("#videoPlaybackStart").value;
    const end = document.querySelector("#videoPlaybackEnd").value;
    if (!date || !start || !end || start >= end) {
      showToast("请选择有效的录像回看时间段");
      return;
    }
    document.querySelector("#videoPlaybackRange").textContent = `${date} ${start} - ${end}`;
    document.querySelector("#videoPlaybackResult").textContent = "录像连续，已加载所选时间段";
    document.querySelector("#videoPlaybackProgress").value = 0;
    updatePlaybackTimestamp();
    drawVideoPlaybackScene();
    showToast("历史录像检索完成");
  });
  document.querySelector("#videoPlaybackProgress").addEventListener("input", updatePlaybackTimestamp);
  document.querySelectorAll("[data-playback-segment]").forEach((button, index) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-playback-segment]").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelector("#videoPlaybackProgress").value = [16, 43, 78][index];
      updatePlaybackTimestamp();
      showToast(button.dataset.playbackSegment === "event" ? "已定位到事件录像片段" : "已定位到连续录像片段");
    });
  });
  document.querySelector("#videoPlaybackPlay").addEventListener("click", (event) => {
    const button = event.currentTarget;
    if (videoPlaybackTimer) {
      window.clearInterval(videoPlaybackTimer);
      videoPlaybackTimer = undefined;
      button.innerHTML = '<i data-lucide="play"></i>';
      button.setAttribute("aria-label", "播放");
    } else {
      button.innerHTML = '<i data-lucide="pause"></i>';
      button.setAttribute("aria-label", "暂停");
      videoPlaybackTimer = window.setInterval(() => {
        const progress = document.querySelector("#videoPlaybackProgress");
        progress.value = Math.min(100, Number(progress.value) + 1);
        updatePlaybackTimestamp();
        if (Number(progress.value) >= 100) {
          window.clearInterval(videoPlaybackTimer);
          videoPlaybackTimer = undefined;
          button.innerHTML = '<i data-lucide="rotate-ccw"></i>';
          button.setAttribute("aria-label", "重新播放");
          refreshIcons(button);
        }
      }, 300);
    }
    refreshIcons(button);
  });
  document.querySelectorAll("[data-video-record-close]").forEach((button) => button.addEventListener("click", closeVideoRecordDetail));
  document.querySelector("#videoRecordPlaybackAction").addEventListener("click", () => {
    closeVideoRecordDetail();
    openVideoPlayback();
  });
  document.querySelector("#offDutyStartReview").addEventListener("click", startOffDutyReview);
  document.querySelectorAll("[data-offduty-resolution]").forEach((button) => button.addEventListener("click", () => selectOffDutyResolution(button.dataset.offdutyResolution)));
  document.querySelector("#offDutyResolutionForm").addEventListener("submit", submitOffDutyResolution);
  document.querySelector("#videoRecordModal").addEventListener("click", (event) => {
    if (event.target.id === "videoRecordModal") closeVideoRecordDetail();
  });
  window.clearInterval(videoRecordDurationTimer);
  videoRecordDurationTimer = window.setInterval(refreshOffDutyDurationDisplays, 1000);
}

function withCanvasScale(canvas, callback) {
  if (!canvas) return;
  const context = canvas.getContext("2d");
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save();
  context.scale(canvas.width / 960, canvas.height / 540);
  callback(context, 960, 540);
  context.restore();
}

function drawScanLines(context, width, height, opacity = 0.055) {
  context.save();
  context.fillStyle = `rgba(255,255,255,${opacity})`;
  for (let y = 1; y < height; y += 4) {
    context.fillRect(0, y, width, 1);
  }
  context.restore();
}

function drawCameraFrame(context, width, height, label) {
  context.save();
  context.strokeStyle = "rgba(255,255,255,0.42)";
  context.lineWidth = 2;
  const length = 22;
  const inset = 15;
  [[inset, inset, 1, 1], [width - inset, inset, -1, 1], [inset, height - inset, 1, -1], [width - inset, height - inset, -1, -1]].forEach(([x, y, sx, sy]) => {
    context.beginPath();
    context.moveTo(x + sx * length, y);
    context.lineTo(x, y);
    context.lineTo(x, y + sy * length);
    context.stroke();
  });
  context.fillStyle = "rgba(255,255,255,0.72)";
  context.font = "12px SFMono-Regular, monospace";
  context.fillText(label, 18, height - 20);
  context.restore();
}

function drawOffDutyScene(context, width, height, focus) {
  context.fillStyle = "#263544";
  context.fillRect(0, 0, width, height);
  context.fillStyle = "#576779";
  context.fillRect(0, 55, width, 255);
  context.fillStyle = "#718092";
  context.beginPath();
  context.moveTo(0, 310);
  context.lineTo(width, 285);
  context.lineTo(width, height);
  context.lineTo(0, height);
  context.closePath();
  context.fill();

  context.fillStyle = "#1d2731";
  context.fillRect(65, 118, 180, 95);
  context.fillRect(290, 118, 180, 95);
  context.fillRect(515, 118, 180, 95);
  [78, 303, 528].forEach((x, index) => {
    context.fillStyle = index === 1 ? "#1f6c7e" : "#194e67";
    context.fillRect(x, 130, 154, 66);
    context.fillStyle = "rgba(94,218,220,0.72)";
    for (let y = 142; y < 188; y += 12) context.fillRect(x + 10, y, 65 + index * 15, 3);
  });
  context.fillStyle = "#343e49";
  context.fillRect(40, 230, 760, 42);
  context.fillStyle = "#222a33";
  context.fillRect(75, 272, 28, 120);
  context.fillRect(735, 272, 28, 120);

  context.fillStyle = "#343a45";
  context.beginPath();
  context.arc(610, 332, 47, 0, Math.PI * 2);
  context.fill();
  context.fillRect(574, 338, 73, 105);
  context.fillStyle = "#262d36";
  context.fillRect(604, 434, 10, 55);
  context.fillRect(565, 482, 88, 9);

  context.save();
  context.strokeStyle = "#ff4b53";
  context.lineWidth = focus ? 4 : 3;
  context.setLineDash([10, 7]);
  context.strokeRect(505, 235, 235, 250);
  context.restore();
  context.fillStyle = "rgba(217,54,62,0.92)";
  context.fillRect(505, 214, 174, 25);
  context.fillStyle = "white";
  context.font = "bold 13px SFMono-Regular, monospace";
  context.fillText("NO PERSON  06:48", 516, 231);

  context.fillStyle = "rgba(255,255,255,0.13)";
  context.fillRect(820, 82, 95, 310);
  context.fillStyle = "rgba(255,255,255,0.45)";
  context.fillRect(842, 110, 50, 9);
  context.fillRect(842, 138, 50, 9);
  context.fillRect(842, 166, 50, 9);
  drawScanLines(context, width, height);
  drawCameraFrame(context, width, height, "CAM-OD-01  CH01");
}

function drawPassageScene(context, width, height, focus) {
  context.fillStyle = "#71899b";
  context.fillRect(0, 0, width, 205);
  context.fillStyle = "#a4abb0";
  context.fillRect(0, 112, 300, 200);
  context.fillStyle = "#7d878f";
  context.fillRect(680, 88, 280, 250);
  context.fillStyle = "#515c67";
  context.beginPath();
  context.moveTo(300, 160);
  context.lineTo(680, 160);
  context.lineTo(960, 540);
  context.lineTo(0, 540);
  context.closePath();
  context.fill();

  context.strokeStyle = "#f3c84a";
  context.lineWidth = 7;
  context.beginPath();
  context.moveTo(418, 185);
  context.lineTo(280, 540);
  context.moveTo(555, 185);
  context.lineTo(760, 540);
  context.stroke();
  context.setLineDash([25, 18]);
  context.strokeStyle = "rgba(255,255,255,0.75)";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(486, 195);
  context.lineTo(500, 530);
  context.stroke();
  context.setLineDash([]);

  context.fillStyle = "#2f4655";
  for (let x = 30; x < 270; x += 48) {
    context.fillRect(x, 90, 7, 240);
    context.strokeStyle = "#465d69";
    context.beginPath();
    context.moveTo(x, 100);
    context.lineTo(x + 45, 325);
    context.stroke();
  }

  context.fillStyle = "#d8dadd";
  context.fillRect(532, 250, 205, 102);
  context.fillStyle = "#c7cbd0";
  context.beginPath();
  context.moveTo(555, 210);
  context.lineTo(700, 210);
  context.lineTo(737, 250);
  context.lineTo(532, 250);
  context.closePath();
  context.fill();
  context.fillStyle = "#26333c";
  context.fillRect(575, 225, 73, 36);
  context.fillRect(657, 225, 44, 36);
  context.fillStyle = "#242a2f";
  context.beginPath();
  context.arc(572, 355, 26, 0, Math.PI * 2);
  context.arc(696, 355, 26, 0, Math.PI * 2);
  context.fill();

  context.save();
  context.strokeStyle = "#ffad2e";
  context.lineWidth = focus ? 4 : 3;
  context.setLineDash([10, 7]);
  context.strokeRect(502, 190, 270, 205);
  context.restore();
  context.fillStyle = "rgba(217,119,6,0.94)";
  context.fillRect(502, 168, 192, 25);
  context.fillStyle = "white";
  context.font = "bold 13px SFMono-Regular, monospace";
  context.fillText("VEHICLE OCCUPY  02:13", 512, 185);

  context.fillStyle = "rgba(255,255,255,0.15)";
  context.fillRect(790, 355, 125, 65);
  context.fillStyle = "rgba(255,255,255,0.55)";
  context.font = "bold 15px sans-serif";
  context.fillText("FIRE LANE", 808, 392);
  drawScanLines(context, width, height);
  drawCameraFrame(context, width, height, "CAM-PS-08  CH08");
}

function drawThermalScene(context, width, height, focus, mode) {
  if (mode === "visible") {
    context.fillStyle = "#394048";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "#6b7074";
    context.fillRect(0, 50, width, 320);
    context.fillStyle = "#31373c";
    context.fillRect(0, 370, width, 170);
    context.fillStyle = "#8b9398";
    context.fillRect(100, 170, 230, 220);
    context.fillRect(680, 145, 185, 245);
    context.fillStyle = "#252a2f";
    context.fillRect(130, 205, 165, 145);
    context.fillRect(710, 180, 125, 170);
    context.fillStyle = "#b54a22";
    context.beginPath();
    context.moveTo(470, 390);
    context.bezierCurveTo(425, 345, 470, 305, 452, 260);
    context.bezierCurveTo(530, 303, 548, 346, 516, 390);
    context.closePath();
    context.fill();
    context.fillStyle = "#ffd34c";
    context.beginPath();
    context.moveTo(480, 385);
    context.bezierCurveTo(455, 350, 491, 330, 484, 301);
    context.bezierCurveTo(525, 340, 522, 366, 505, 385);
    context.closePath();
    context.fill();
  } else {
    const background = context.createLinearGradient(0, 0, width, height);
    background.addColorStop(0, "#061127");
    background.addColorStop(0.45, "#20248c");
    background.addColorStop(1, "#58116c");
    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    context.fillStyle = "rgba(16,37,95,0.72)";
    context.fillRect(70, 72, 260, 360);
    context.fillStyle = "rgba(77,33,130,0.65)";
    context.fillRect(665, 64, 225, 372);
    context.fillStyle = "rgba(5,13,45,0.75)";
    context.fillRect(0, 435, width, 105);
    for (let x = 92; x < 320; x += 66) {
      context.fillStyle = `rgba(${70 + x / 5},38,145,0.52)`;
      context.fillRect(x, 110, 48, 280);
    }
    for (let x = 690; x < 870; x += 62) {
      context.fillStyle = "rgba(50,37,123,0.58)";
      context.fillRect(x, 105, 44, 290);
    }

    const heat = context.createRadialGradient(505, 324, 8, 505, 324, 145);
    heat.addColorStop(0, "#fffbd2");
    heat.addColorStop(0.12, "#fff23a");
    heat.addColorStop(0.28, "#ff7a16");
    heat.addColorStop(0.52, "rgba(235,31,74,0.92)");
    heat.addColorStop(0.74, "rgba(171,25,161,0.7)");
    heat.addColorStop(1, "rgba(92,20,154,0)");
    context.fillStyle = heat;
    context.fillRect(340, 160, 330, 320);
    context.fillStyle = "#fffbd2";
    context.beginPath();
    context.arc(505, 324, 12, 0, Math.PI * 2);
    context.fill();
  }

  context.save();
  context.strokeStyle = "#ffea4b";
  context.lineWidth = focus ? 4 : 3;
  context.setLineDash([11, 7]);
  context.strokeRect(365, 170, 285, 285);
  context.restore();
  context.strokeStyle = "white";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(505, 296);
  context.lineTo(505, 352);
  context.moveTo(477, 324);
  context.lineTo(533, 324);
  context.stroke();
  context.fillStyle = "rgba(217,54,62,0.95)";
  context.fillRect(365, 147, 181, 26);
  context.fillStyle = "white";
  context.font = "bold 13px SFMono-Regular, monospace";
  context.fillText("MAX 86.4°C  FLAME", 375, 165);
  drawScanLines(context, width, height, 0.04);
  drawCameraFrame(context, width, height, mode === "thermal" ? "THERMAL-01  CH03" : "VISIBLE-01  CH03");
}

function drawScene(canvas, category, mode = "visible", focus = false) {
  withCanvasScale(canvas, (context, width, height) => {
    if (category === "offduty") drawOffDutyScene(context, width, height, focus);
    else if (category === "passage") drawPassageScene(context, width, height, focus);
    else drawThermalScene(context, width, height, focus, mode);
  });
}

function drawTrendChart() {
  const canvas = document.querySelector("#trendCanvas");
  if (!canvas) return;
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const padding = { left: 42, right: 18, top: 18, bottom: 34 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const labels = ["07/17", "07/18", "07/19", "07/20", "07/21", "07/22", "07/23"];
  const series = [
    { color: "#7856c5", values: [3, 2, 4, 1, 3, 2, 4] },
    { color: "#d97706", values: [1, 3, 2, 4, 2, 5, 5] },
    { color: "#d9363e", values: [0, 1, 1, 0, 2, 1, 3] },
  ];
  context.clearRect(0, 0, width, height);
  context.font = "10px Inter, sans-serif";
  context.textAlign = "right";
  context.textBaseline = "middle";
  for (let i = 0; i <= 5; i += 1) {
    const value = i * 2;
    const y = padding.top + plotHeight - (value / 10) * plotHeight;
    context.strokeStyle = "#e6eaf0";
    context.lineWidth = 1;
    context.setLineDash(i === 0 ? [] : [4, 5]);
    context.beginPath();
    context.moveTo(padding.left, y);
    context.lineTo(width - padding.right, y);
    context.stroke();
    context.fillStyle = "#8a94a6";
    context.fillText(String(value), padding.left - 10, y);
  }
  context.setLineDash([]);
  context.textAlign = "center";
  context.textBaseline = "top";
  labels.forEach((label, index) => {
    const x = padding.left + (index / (labels.length - 1)) * plotWidth;
    context.fillStyle = "#8a94a6";
    context.fillText(label, x, height - padding.bottom + 12);
  });
  series.forEach((item) => {
    context.strokeStyle = item.color;
    context.lineWidth = 2.5;
    context.beginPath();
    item.values.forEach((value, index) => {
      const x = padding.left + (index / (item.values.length - 1)) * plotWidth;
      const y = padding.top + plotHeight - (value / 10) * plotHeight;
      if (index === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.stroke();
    item.values.forEach((value, index) => {
      const x = padding.left + (index / (item.values.length - 1)) * plotWidth;
      const y = padding.top + plotHeight - (value / 10) * plotHeight;
      context.fillStyle = "white";
      context.strokeStyle = item.color;
      context.lineWidth = 2;
      context.beginPath();
      context.arc(x, y, 4, 0, Math.PI * 2);
      context.fill();
      context.stroke();
    });
  });
}

function drawAllCanvases() {
  drawScene(document.querySelector("#scene-offduty"), "offduty", "visible");
  drawScene(document.querySelector("#scene-passage"), "passage", "visible");
  drawScene(document.querySelector("#scene-thermal"), "flame", "thermal");
  updateFocusDetail();
  drawFireEvidence();
  drawTrendChart();
  drawVideoMonitorScene();
}

function formatClock(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function bindUtilityActions() {
  document.querySelector("#soundToggle").addEventListener("click", toggleAlarmSound);
  document.querySelector("#refreshButton").addEventListener("click", (event) => {
    event.currentTarget.classList.add("spinning");
    const now = new Date();
    document.querySelector("#updatedAt").textContent = now.toLocaleTimeString("zh-CN", { hour12: false });
    window.setTimeout(() => event.currentTarget.classList.remove("spinning"), 750);
    drawAllCanvases();
    showToast("实时数据已刷新");
  });
  document.querySelector("#snapshotButton").addEventListener("click", () => {
    const canvas = document.querySelector("#focusCanvas");
    const link = document.createElement("a");
    link.download = `${selectedAlertId}-snapshot.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("当前抓拍已保存");
  });
  document.querySelector("#expandButton").addEventListener("click", () => {
    const target = document.querySelector("#focusCanvasWrap");
    if (document.fullscreenElement) document.exitFullscreen();
    else target.requestFullscreen?.();
  });
  document.querySelector("#historyButton").addEventListener("click", () => showToast("已加载告警前后 30 秒录像片段"));
  document.querySelector("#detailMore").addEventListener("click", () => showToast("告警操作菜单已展开"));
  document.querySelector("#siteButton").addEventListener("click", () => showToast("当前机构：金台区第一养老院"));
  document.querySelector("#addDeviceButton").addEventListener("click", () => showToast("设备添加入口已打开（演示）"));
  document.querySelector("#syncTerminals").addEventListener("click", (event) => {
    const button = event.currentTarget;
    button.classList.add("spinning");
    button.disabled = true;
    window.setTimeout(() => {
      const now = new Date();
      document.querySelector("#terminalSyncTime").textContent = now.toLocaleTimeString("zh-CN", { hour12: false });
      button.classList.remove("spinning");
      button.disabled = false;
      showToast("57 台智能终端状态已同步");
    }, 700);
  });
  document.querySelector("#exportFireAlarms").addEventListener("click", () => {
    const rows = ["火警编号,等级,火警信息,点位,设备,发生时间,状态,处置人员", ...fireAlarms.map((item) => `${item.no},${item.level}级,${item.title},${item.location},${item.device},${item.time},${fireAlarmStateLabels[item.state]},${item.operator}`)];
    downloadCsv("设备火警记录-20260723.csv", rows);
    showToast("设备火警记录已导出");
  });
  document.querySelector("#exportWarnings").addEventListener("click", () => {
    const rows = ["预警编号,风险,预警信息,设备,点位,当前值,阈值,状态", ...terminalWarnings.map((item) => `${item.no},${item.risk},${item.title},${item.device},${item.point},${item.value},${item.threshold},${terminalWarningStateLabels[item.state]}`)];
    downloadCsv("设备预警记录-20260723.csv", rows);
    showToast("设备预警记录已导出");
  });
  document.querySelector("#videoSnapshotButton").addEventListener("click", () => {
    const canvas = document.querySelector("#videoMonitorCanvas");
    const link = document.createElement("a");
    link.download = `${selectedVideoModule}-video-snapshot.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("当前监控画面已保存");
  });
  document.querySelector("#videoFullscreenButton").addEventListener("click", () => {
    const target = document.querySelector("#videoMonitorCanvasWrap");
    if (document.fullscreenElement) document.exitFullscreen();
    else target.requestFullscreen?.();
  });
  document.querySelector("#videoChannelRefresh").addEventListener("click", (event) => {
    const button = event.currentTarget;
    button.classList.add("spinning");
    window.setTimeout(() => button.classList.remove("spinning"), 650);
    showToast(`${getVideoModule().channels.length} 个视频通道状态已刷新`);
  });
  document.querySelectorAll(".static-nav").forEach((button) => button.addEventListener("click", () => showToast(`${button.textContent.trim()}模块未配置演示数据`)));
  document.querySelectorAll(".module-nav button").forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.classList.contains("active")) showToast(`${button.textContent.trim()}模块未配置演示数据`);
    });
  });
  document.querySelector("#exportButton").addEventListener("click", () => {
    const rows = ["告警编号,事件,点位,设备,发生时间,状态", ...alerts.map((item, index) => `ALM-${index + 42},${item.title},${item.location},${item.device},${item.dateTime},${stateLabels[item.state]}`)];
    const blob = new Blob(["\uFEFF" + rows.join("\n")], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.download = "消防安全日报-20260723.csv";
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
    showToast("消防安全日报已导出");
  });
  document.querySelector("#testConnection").addEventListener("click", (event) => {
    const button = event.currentTarget;
    const original = button.innerHTML;
    button.disabled = true;
    button.innerHTML = '<i data-lucide="loader-circle"></i>检测中';
    refreshIcons(button);
    window.setTimeout(() => {
      button.disabled = false;
      button.innerHTML = original;
      refreshIcons(button);
      const log = document.querySelector("#callbackLog");
      const row = document.createElement("div");
      row.innerHTML = '<time>19:43:12.086</time><code>NET_EALARM_StartListen</code><span class="log-event ok">connectionCheck</span><b>AMS :7200</b>';
      log.prepend(row);
      if (log.children.length > 5) log.lastElementChild.remove();
      showToast("CMS / AMS 链路检测正常，耗时 42 ms");
    }, 850);
  });
  document.querySelector(".tab-collapse").addEventListener("click", () => {
    document.querySelector(".app-shell").classList.toggle("sidebar-collapsed");
    window.setTimeout(drawAllCanvases, 180);
  });
  document.querySelector(".active-tab button").addEventListener("click", () => showToast("当前演示页签保持打开"));
  document.querySelector(".tab-tools").addEventListener("click", () => showToast("当前共打开 1 个页签"));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !document.querySelector("#criticalFireAlert").hidden) {
      event.preventDefault();
      snoozeCriticalFireAlert();
      return;
    }
    if (event.key === "Escape" && !document.querySelector("#handleModal").hidden) closeHandleModal();
    if (event.key === "Escape" && !document.querySelector("#assignmentModal").hidden) closeAssignmentModal();
    if (event.key === "Escape" && !document.querySelector("#fireActionModal").hidden) closeFireActionModal();
    if (event.key === "Escape" && !document.querySelector("#passageActionModal").hidden) closePassageActionModal();
    if (event.key === "Escape" && !document.querySelector("#faultHandleModal").hidden) closeFaultHandleModal();
    if (event.key === "Escape" && !document.querySelector("#faultDetailModal").hidden) closeFaultDetail();
    if (event.key === "Escape" && !document.querySelector("#warningRecordModal").hidden) closeWarningRecord();
    if (event.key === "Escape" && !document.querySelector("#warningRecoverModal").hidden) closeWarningRecoverModal();
    if (event.key === "Escape" && !document.querySelector("#videoPlaybackModal").hidden) closeVideoPlayback();
    if (event.key === "Escape" && !document.querySelector("#videoRecordModal").hidden) closeVideoRecordDetail();
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      switchView("alarms");
      document.querySelector("#alarmSearch").focus();
    }
  });
}

function downloadCsv(filename, rows) {
  const blob = new Blob(["\uFEFF" + rows.join("\n")], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.download = filename;
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
}

function startClock() {
  let elapsed = 72;
  window.setInterval(() => {
    const now = new Date();
    document.querySelector("#liveClock").textContent = formatClock(now);
    document.querySelector("#videoMonitorTime").textContent = formatClock(now);
    elapsed += 1;
    const hours = String(Math.floor(elapsed / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
    const seconds = String(elapsed % 60).padStart(2, "0");
    document.querySelector("#criticalDuration").textContent = `${hours}:${minutes}:${seconds}`;
    updateCriticalFireDuration();
    if (now.getSeconds() % 15 === 0) refreshAssignmentDeadlineDisplays();
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  refreshIcons();
  renderAlertQueue();
  renderAlarmTable();
  renderDeviceTable();
  renderTerminalTable();
  renderFireAlarmList();
  renderTerminalWarningTable();
  renderTerminalFaultTable();
  renderVideoMonitoring();
  bindInteractions();
  bindCriticalFireAlert();
  bindUtilityActions();
  drawAllCanvases();
  startClock();
  initializeCriticalFireReminder();
});
