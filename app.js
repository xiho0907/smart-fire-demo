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
];

const fireAlarms = [
  { id: "fa1", no: "ALM-FIRE-20260723-0068", level: 1, title: "可视化红外火焰报警", location: "危化品暂存间", device: "红外火焰探测-01", serial: "DS-FL-03A821", eventType: "TMA / flame", channel: "CH 03 / R-03", time: "2026-07-23 19:42:16", duration: "00:01:12", temperature: 86.4, threshold: 70.0, state: "pending", stage: 0, operator: "待确认", note: "设备检测到明火与持续高温，请立即确认现场警情。" },
  { id: "fa2", no: "ALM-FIRE-20260723-0067", level: 1, title: "配电柜温升火警", location: "配电设备间", device: "红外火焰探测-03", serial: "DS-FL-05B219", eventType: "TMA / riseTemperature", channel: "CH 05 / R-01", time: "2026-07-23 18:26:44", duration: "00:18:32", temperature: 78.6, threshold: 65.0, state: "processing", stage: 2, operator: "李明", note: "已确认真实警情，现场人员正在执行断电和灭火处置。" },
  { id: "fa3", no: "ALM-FIRE-20260723-0062", level: 2, title: "厨房排烟口高温报警", location: "餐饮后厨", device: "红外火焰探测-06", serial: "DS-FL-06B108", eventType: "TMA / highTemperature", channel: "CH 06 / R-02", time: "2026-07-23 17:08:21", duration: "00:04:38", temperature: 66.8, threshold: 60.0, state: "confirmed", stage: 1, operator: "王晨", note: "警情已确认，已通知餐饮后厨停止用火并安排现场核查。" },
  { id: "fa4", no: "ALM-FIRE-20260723-0058", level: 2, title: "消防主机火警上报", location: "一层东区走廊", device: "用户信息传输装置-01", serial: "UT-01-C7812", eventType: "fireAlarm / zone12", channel: "回路 03 / 点位 012", time: "2026-07-23 15:36:09", duration: "00:09:17", temperature: null, threshold: null, media: false, reportData: { hostState: "火警", protocol: "ISUP / EHome", loop: "03", point: "012", eventCode: "fireAlarm", eventState: "active" }, state: "reset", stage: 3, operator: "赵凯", note: "消防主机上报 03 回路 012 点位火警，处置完成后主机与传输装置均已复位。" },
  { id: "fa5", no: "ALM-FIRE-20260723-0051", level: 2, title: "锅炉房火焰识别报警", location: "锅炉房燃气阀组", device: "红外火焰探测-04", serial: "DS-FL-04C507", eventType: "TMA / flame", channel: "CH 04 / R-02", time: "2026-07-23 13:12:47", duration: "00:02:06", temperature: 61.3, threshold: 70.0, state: "false", stage: 3, operator: "李明", note: "视频复核为锅炉正常点火反光，已按误报消警并留存影像。" },
  { id: "fa6", no: "ALM-FIRE-20260723-0046", level: 2, title: "库房异常热源报警", location: "物资库房 A 区", device: "红外火焰探测-02", serial: "DS-FL-02A416", eventType: "TMA / highTemperature", channel: "CH 02 / R-04", time: "2026-07-23 10:48:03", duration: "00:03:41", temperature: 72.5, threshold: 68.0, state: "pending", stage: 0, operator: "待确认", note: "检测区域出现持续异常热源，等待值班人员确认警情。" },
];

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
  { id: "tf2", no: "FLT-20260723-0030", terminalId: null, type: "transmitter", faultType: "备电故障", faultCode: "BACKUP_POWER_FAULT", title: "用户信息传输装置备电异常", device: "用户信息传输装置-02", serial: "UT-02-C3958", point: "消防控制室备用机柜", source: "传输装置状态上报", firstTime: "2026-07-23 18:46:17", updated: "2026-07-23 19:42:51", duration: "00:56:34", state: "processing", assignee: "陈峰", assignedAt: "2026-07-23 18:58:12", repairedAt: "", note: "已安排检查备用电池组与充电回路，设备主电及数据传输正常。" },
  { id: "tf3", no: "FLT-20260723-0029", terminalId: null, type: "passage", faultType: "设备离线", faultCode: "ISUP_HEARTBEAT_LOST", title: "消防通道摄像头离线", device: "室外通道监测-02", serial: "DS-PS-02D531", point: "北门消防通道", source: "ISUP 设备心跳", firstTime: "2026-07-23 18:56:14", updated: "2026-07-23 19:42:44", duration: "00:46:30", state: "processing", assignee: "赵凯", assignedAt: "2026-07-23 19:02:35", repairedAt: "", note: "已指派现场巡查人员检查摄像头供电及园区交换机端口。" },
  { id: "tf4", no: "FLT-20260723-0027", terminalId: null, type: "power", faultType: "回路通信异常", faultCode: "METER_CHANNEL_TIMEOUT", title: "用电采集回路通信异常", device: "智能用电采集终端-09", serial: "PW-09-A6842", point: "锅炉房动力配电箱", source: "RS-485 采集状态", firstTime: "2026-07-23 15:18:09", updated: "2026-07-23 15:42:36", duration: "00:24:27", state: "repaired", assignee: "陈峰", assignedAt: "2026-07-23 15:23:18", repairedAt: "2026-07-23 15:42:36", note: "重新紧固采集回路接线后通信恢复，连续数据上报正常。" },
  { id: "tf5", no: "FLT-20260723-0024", terminalId: null, type: "pressure", faultType: "传感器异常", faultCode: "SENSOR_ZERO_DRIFT", title: "压力传感器零点漂移", device: "无线远程压力终端-05", serial: "WP-05-D4406", point: "消防泵房出水总管", source: "压力终端设备自检", firstTime: "2026-07-23 13:06:25", updated: "2026-07-23 13:38:14", duration: "00:31:49", state: "repaired", assignee: "李明", assignedAt: "2026-07-23 13:12:40", repairedAt: "2026-07-23 13:38:14", note: "完成压力传感器零点校准，与机械压力表比对读数正常。" },
  { id: "tf6", no: "FLT-20260723-0021", terminalId: null, type: "gas", faultType: "自检失败", faultCode: "GAS_SENSOR_SELFTEST_FAIL", title: "气敏传感器自检失败", device: "可燃气体探测器-03", serial: "GD-03-F2167", point: "厨房燃气总阀间", source: "探测器自检上报", firstTime: "2026-07-23 11:22:48", updated: "2026-07-23 11:51:20", duration: "00:28:32", state: "repaired", assignee: "王晨", assignedAt: "2026-07-23 11:28:05", repairedAt: "2026-07-23 11:51:20", note: "清洁传感器并重新执行自检，浓度读数与设备状态恢复正常。" },
  { id: "tf7", no: "FLT-20260723-0018", terminalId: null, type: "offduty", faultType: "视频丢失", faultCode: "VIDEO_SIGNAL_LOST", title: "双人值守监控视频流中断", device: "人员在离岗监测-03", serial: "DS-OD-03C284", point: "消防控制室副岗", source: "视频通道状态检测", firstTime: "2026-07-23 09:47:16", updated: "2026-07-23 10:03:52", duration: "00:16:36", state: "repaired", assignee: "赵凯", assignedAt: "2026-07-23 09:50:21", repairedAt: "2026-07-23 10:03:52", note: "重启摄像头编码通道后视频流恢复，双人值守识别服务运行正常。" },
  { id: "tf8", no: "FLT-20260723-0014", terminalId: null, type: "flame", faultType: "存储异常", faultCode: "STORAGE_WRITE_ERROR", title: "红外火焰探测器存储写入异常", device: "可视化红外火焰探测器-04", serial: "DS-FL-04C507", point: "锅炉房燃气阀组", source: "设备存储状态上报", firstTime: "2026-07-23 08:18:33", updated: "2026-07-23 08:46:05", duration: "00:27:32", state: "repaired", assignee: "陈峰", assignedAt: "2026-07-23 08:24:10", repairedAt: "2026-07-23 08:46:05", note: "更换存储卡并完成格式化，抓拍及录像写入测试正常。" },
];

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
    todayNote: "已消警 5 条",
    recordTitle: "脱岗预警记录",
    recordSubtitle: "抓拍、录像和脱岗消警结果全程留痕",
    primaryAction: "脱岗消警",
    channels: [
      { id: "od01", name: "消防控制室全景", device: "双人值守-01", point: "消防控制室", channel: "CH 01", status: "warning", statusLabel: "1 / 2 人在岗", active: true },
      { id: "od02", name: "消防控制室主岗", device: "双人值守-02", point: "消控室主岗", channel: "CH 02", status: "normal", statusLabel: "双人在岗", active: false },
      { id: "od03", name: "消防控制室副岗", device: "双人值守-03", point: "消控室副岗", channel: "CH 03", status: "normal", statusLabel: "双人在岗", active: false },
      { id: "od04", name: "消防主机操作席", device: "双人值守-04", point: "消防控制室", channel: "CH 04", status: "normal", statusLabel: "设备在线", active: false },
    ],
    event: {
      title: "双人值守人数不足",
      level: "脱岗预警",
      state: "待消警",
      description: "消防控制室当前仅识别到 1 名值守人员，请核实副岗人员状态。",
      eventType: "offDuty",
      metricLabel: "在岗人数",
      metricValue: "1 / 2 人",
      time: "19:40:31",
      owner: "待处置",
      note: "脱岗消警后保留抓拍、录像和操作记录。",
      liveSummary: "副岗连续 06:48 未检测到值守人员",
      sceneState: "当前 1 / 2 人在岗",
      sceneClass: "warning",
      sceneIcon: "user-round-x",
      closed: false,
    },
    records: [
      { id: "vod01", time: "2026-07-23 19:40:31", title: "双人值守人数不足", eventType: "offDuty", device: "双人值守-01", point: "消防控制室", duration: "00:06:48", owner: "待处置", state: "active" },
      { id: "vod02", time: "2026-07-23 16:42:09", title: "副岗短时脱岗", eventType: "offDuty", device: "双人值守-03", point: "消防控制室", duration: "00:02:25", owner: "王晨", state: "closed" },
      { id: "vod03", time: "2026-07-23 11:18:36", title: "主岗短时脱岗", eventType: "offDuty", device: "双人值守-02", point: "消防控制室", duration: "00:01:17", owner: "李明", state: "closed" },
      { id: "vod04", time: "2026-07-23 08:03:14", title: "交接班人数不足", eventType: "staffCount", device: "双人值守-01", point: "消防控制室", duration: "00:00:46", owner: "赵凯", state: "closed" },
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
    recordTitle: "通道拥堵预警记录",
    recordSubtitle: "保留占用目标、持续时长、录像和恢复确认记录",
    primaryAction: "确认通道畅通",
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
      state: "待恢复",
      description: "车辆持续占用东侧消防通道超过 120 秒，已影响消防车辆通行。",
      eventType: "channelOccupy",
      metricLabel: "占用时长",
      metricValue: "00:02:13",
      time: "19:41:03",
      owner: "待处置",
      note: "确认车辆驶离并恢复通行后，可完成通道事件消警。",
      liveSummary: "检测区域 R-02 内车辆持续占用消防通道",
      sceneState: "车辆占用 02:13",
      sceneClass: "warning",
      sceneIcon: "traffic-cone",
      closed: false,
    },
    records: [
      { id: "vps01", time: "2026-07-23 19:41:03", title: "消防通道车辆拥堵", eventType: "channelOccupy", device: "通道监测-08", point: "东侧消防通道", duration: "00:02:13", owner: "待处置", state: "active" },
      { id: "vps02", time: "2026-07-23 17:55:12", title: "消防通道物品滞留", eventType: "fireEscapeDetection", device: "通道监测-12", point: "西侧装卸通道", duration: "00:31:05", owner: "赵凯", state: "closed" },
      { id: "vps03", time: "2026-07-23 15:08:37", title: "临停车辆占用通道", eventType: "channelOccupy", device: "通道监测-02", point: "北门消防通道", duration: "00:04:16", owner: "陈峰", state: "closed" },
      { id: "vps04", time: "2026-07-23 09:26:18", title: "卸货车辆短时占用", eventType: "channelOccupy", device: "通道监测-12", point: "西侧装卸通道", duration: "00:03:42", owner: "王晨", state: "closed" },
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

const terminalStatusLabels = { normal: "正常", warning: "预警", alarm: "告警", offline: "离线" };
const fireAlarmStateLabels = { pending: "待确认", confirmed: "已确认", processing: "处置中", reset: "已复位", false: "误报消警" };
const terminalWarningStateLabels = { pending: "待核查", checking: "核查中", recovered: "已恢复" };
const terminalFaultStateLabels = { pending: "待处理", processing: "处理中", repaired: "已修复" };
const terminalWarningTypeMeta = {
  power: { label: "智能用电", icon: "zap", className: "blue" },
  transmitter: { label: "用户信息传输装置", icon: "radio-tower", className: "cyan" },
  gas: { label: "可燃气体", icon: "wind", className: "amber" },
  level: { label: "远程液位", icon: "waves", className: "cyan" },
  pressure: { label: "远程压力", icon: "gauge", className: "blue" },
  camera: { label: "视频监测", icon: "cctv", className: "purple" },
};

const stateLabels = { pending: "待处置", processing: "处理中", closed: "已闭环" };
const viewLabels = { dashboard: "消防安全看板", alarms: "告警中心", devices: "设备管理", terminals: "设备运行状态", "terminal-alarms": "设备告警列表", "terminal-warnings": "设备预警列表", "terminal-faults": "设备故障记录", "video-monitoring": "视频监控", access: "海康设备接入状态" };
const viewIcons = { dashboard: "flame", alarms: "siren", devices: "cctv", terminals: "cpu", "terminal-alarms": "siren", "terminal-warnings": "triangle-alert", "terminal-faults": "wrench", "video-monitoring": "video", access: "network" };

let selectedAlertId = "flame";
let dashboardFilter = "pending";
let cameraMode = "thermal";
let selectedDisposal = "现场核查";
let selectedTerminalType = "all";
let selectedFireAlarmId = "fa1";
let selectedFireEvidence = "images";
let selectedFireImageMode = "visible";
let selectedFireVideoOffset = "before";
let assignmentTargetType = "fire";
let assignmentTargetId = "fa1";
let selectedTerminalFaultId = "tf1";
let selectedVideoModule = "offduty";
let selectedVideoViewMode = "visible";
let selectedVideoRecordFilter = "all";
const selectedVideoChannelIds = { offduty: "od01", passage: "ps08", flame: "fl01" };
const CRITICAL_FIRE_SNOOZE_MS = 5 * 60 * 1000;
const CRITICAL_FIRE_SNOOZE_KEY = "smart-fire-critical-snoozes";
let videoPlaybackTimer;
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
  refreshIcons(tbody);
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
    const isCamera = Boolean(item.alertId);
    return `
      <tr>
        <td><div class="terminal-device"><span class="terminal-type-icon ${meta.className}"><i data-lucide="${meta.icon}"></i></span><div><strong>${item.name}</strong><small>${item.serial}</small></div></div></td>
        <td><div class="point-cell"><strong>${item.point}</strong><small>${item.area} · ${item.zone}</small></div></td>
        <td>${meta.label}</td>
        <td><div class="terminal-reading ${item.status}"><span class="reading-icon"><i data-lucide="${statusIcon}"></i></span><div><strong>${item.reading}</strong><small>${item.detail}</small></div></div></td>
        <td><div class="terminal-comms"><span class="signal-bars ${item.signal < 60 ? "weak" : ""} ${item.signal === 0 ? "offline" : ""}"><i></i><i></i><i></i></span><div><strong>${item.signal}%</strong><small>${item.network}</small></div></div></td>
        <td><span class="status-pill ${item.status === "normal" ? "online" : item.status}">${terminalStatusLabels[item.status]}</span></td>
        <td>${item.updated}</td>
        <td><button class="table-event-action" type="button" title="${isCamera ? "进入告警画面" : "查看设备详情"}" aria-label="${isCamera ? "进入告警画面" : "查看设备详情"}" data-terminal-action="${item.id}"><i data-lucide="${isCamera ? "video" : "arrow-up-right"}"></i></button></td>
      </tr>`;
  }).join("");

  document.querySelector("#terminalTableEmpty").hidden = filtered.length > 0;
  document.querySelector("#terminalCountLabel").textContent = selectedTerminalType === "all" && status === "all" && zone === "all" && !query ? "显示 12 台重点终端，共 57 台" : `当前筛选显示 ${filtered.length} 台终端`;
  tbody.querySelectorAll("[data-terminal-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const terminal = terminals.find((item) => item.id === button.dataset.terminalAction);
      if (!terminal) return;
      if (terminal.alertId) {
        selectedAlertId = terminal.alertId;
        dashboardFilter = "pending";
        cameraMode = terminal.type === "flame" ? "thermal" : "visible";
        renderAlertQueue();
        switchView("dashboard");
        requestAnimationFrame(() => document.querySelector(".operations-section")?.scrollIntoView({ behavior: "smooth", block: "start" }));
      } else {
        showToast(`${terminal.name}状态详情已打开（演示）`);
      }
    });
  });
  refreshIcons(tbody);
}

function getFireAlarm(id) {
  return fireAlarms.find((item) => item.id === id) || fireAlarms[0];
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
  setText("#fireDispositionNote", alarm.note);
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
    const actionLabel = item.state === "pending" ? "开始核查" : item.state === "checking" ? "标记恢复" : "查看记录";
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
        <td><span class="assignee-cell ${item.assignee === "待指派" ? "unassigned" : ""}">${item.assignee}</span></td>
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
        showToast(`${warning.device}预警已进入核查流程`);
      } else if (warning.state === "checking") {
        warning.state = "recovered";
        showToast(`${warning.device}状态已恢复`);
      } else {
        showToast(`${warning.no}处置记录已打开（演示）`);
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
    return `
      <tr>
        <td><div class="table-event"><span class="type-icon ${meta.className}"><i data-lucide="${meta.icon}"></i></span><div><strong>${item.title}</strong><small>${item.no}</small></div></div></td>
        <td><div class="point-cell"><strong>${item.device}</strong><small>${item.point} · ${item.serial}</small></div></td>
        <td><div class="fault-type-cell"><strong>${item.faultType}</strong><code>${item.faultCode}</code></div></td>
        <td><time>${item.firstTime.slice(5)}</time></td>
        <td><time>${item.updated.slice(5)}</time></td>
        <td><span class="fault-duration">${item.duration}</span></td>
        <td><span class="assignee-cell ${item.assignee === "待指派" ? "unassigned" : ""}">${item.assignee}</span></td>
        <td><span class="state-dot ${item.state === "repaired" ? "closed" : item.state}">${terminalFaultStateLabels[item.state]}</span></td>
        <td><div class="table-row-actions">
          <button class="table-event-action" type="button" title="${item.state === "processing" ? "重新指派人员" : "指派人员"}" aria-label="${item.state === "processing" ? "重新指派人员" : "指派人员"}" data-assign-fault="${item.id}" ${item.state === "repaired" ? "disabled" : ""}><i data-lucide="user-plus"></i></button>
          <button class="table-event-action" type="button" title="标记修复" aria-label="标记修复" data-repair-fault="${item.id}" ${item.state !== "processing" ? "disabled" : ""}><i data-lucide="circle-check"></i></button>
          <button class="table-event-action" type="button" title="查看故障详情" aria-label="查看故障详情" data-view-fault="${item.id}"><i data-lucide="file-search"></i></button>
        </div></td>
      </tr>`;
  }).join("");

  const activeCount = terminalFaults.filter((item) => item.state !== "repaired").length;
  document.querySelector("#terminalFaultTableEmpty").hidden = filtered.length > 0;
  document.querySelector("#terminalFaultCountLabel").textContent = `共 ${filtered.length} 条记录`;
  document.querySelector("#faultActiveCount").textContent = activeCount;
  document.querySelector("#faultPendingCount").textContent = terminalFaults.filter((item) => item.state === "pending").length;
  document.querySelector("#faultProcessingCount").textContent = terminalFaults.filter((item) => item.state === "processing").length;
  document.querySelector("#faultRepairedCount").textContent = terminalFaults.filter((item) => item.state === "repaired").length;
  document.querySelector("#faultNavBadge").textContent = activeCount;

  tbody.querySelectorAll("[data-assign-fault]").forEach((button) => {
    button.addEventListener("click", () => openAssignmentModal("fault", button.dataset.assignFault));
  });
  tbody.querySelectorAll("[data-repair-fault]").forEach((button) => {
    button.addEventListener("click", () => repairTerminalFault(button.dataset.repairFault));
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
  const modal = document.querySelector("#faultDetailModal");
  const state = document.querySelector("#faultDetailState");
  state.textContent = terminalFaultStateLabels[fault.state];
  state.className = `state-pill ${fault.state === "repaired" ? "reset" : fault.state}`;
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
  document.querySelector("#faultDetailAssignee").textContent = fault.assignee;
  document.querySelector("#faultDetailRepairedAt").textContent = fault.repairedAt || "--";

  const note = document.querySelector("#faultDetailNote");
  note.classList.toggle("repaired", fault.state === "repaired");
  note.querySelector("strong").textContent = fault.state === "repaired" ? "修复结论" : "当前处理记录";
  note.querySelector("p").textContent = fault.note;
  document.querySelector("#faultProcessReportedAt").textContent = fault.firstTime.slice(11);
  document.querySelector("#faultProcessAssignedAt").textContent = fault.assignedAt ? fault.assignedAt.slice(11) : "待指派";
  document.querySelector("#faultProcessRepairedAt").textContent = fault.repairedAt ? fault.repairedAt.slice(11) : "待完成";
  document.querySelector("#faultProcessAssigned").className = fault.state === "pending" ? "" : "completed";
  document.querySelector("#faultProcessRepaired").className = fault.state === "repaired" ? "completed" : fault.state === "processing" ? "processing" : "";

  const assignButton = document.querySelector("#faultDetailAssign");
  const repairButton = document.querySelector("#faultDetailRepair");
  assignButton.hidden = fault.state === "repaired";
  assignButton.innerHTML = `<i data-lucide="user-plus"></i>${fault.state === "processing" ? "重新指派" : "指派人员"}`;
  repairButton.hidden = fault.state === "repaired";
  repairButton.disabled = fault.state !== "processing";
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  refreshIcons(modal);
}

function closeFaultDetail() {
  document.querySelector("#faultDetailModal").hidden = true;
  document.body.style.overflow = "";
}

function repairTerminalFault(id) {
  const fault = getTerminalFault(id);
  if (fault.state === "pending") {
    openAssignmentModal("fault", fault.id);
    showToast("请先指派设备运维人员");
    return;
  }
  if (fault.state === "repaired") {
    openFaultDetail(fault.id);
    return;
  }
  const repairedAt = formatClock(new Date());
  fault.state = "repaired";
  fault.repairedAt = repairedAt;
  fault.updated = repairedAt;
  fault.note = `${fault.assignee}已完成设备检修和状态复核，设备数据上报恢复正常。`;
  renderTerminalFaultTable();
  if (!document.querySelector("#faultDetailModal").hidden && selectedTerminalFaultId === fault.id) openFaultDetail(fault.id);
  showToast(`${fault.device}已标记为修复`);
}

function getVideoModule() {
  return videoMonitoringModules[selectedVideoModule] || videoMonitoringModules.offduty;
}

function getSelectedVideoChannel(module = getVideoModule()) {
  const channelId = selectedVideoChannelIds[selectedVideoModule];
  return module.channels.find((item) => item.id === channelId) || module.channels[0];
}

function getVideoRecordState(record) {
  if (record.state === "active") return selectedVideoModule === "flame" ? "待确认" : "待处理";
  if (record.state === "processing") return "处置中";
  return selectedVideoModule === "offduty" ? "已消警" : selectedVideoModule === "passage" ? "已恢复" : "已闭环";
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
  const durationParts = record.duration.split(":").map(Number);
  const durationSeconds = durationParts[0] * 3600 + durationParts[1] * 60 + durationParts[2];
  const closedTime = shiftClockTime(record.time, durationSeconds + 28);
  const reportedTime = record.time.slice(11);
  const modulePrefix = selectedVideoModule === "offduty" ? "OD" : selectedVideoModule === "passage" ? "PS" : "FL";
  const method = selectedVideoModule === "offduty" ? "视频复核并脱岗消警" : selectedVideoModule === "passage" ? "现场确认并恢复通道" : "警情复核并完成闭环";
  const conclusion = selectedVideoModule === "offduty"
    ? "值守人员已返回岗位，双人值守状态恢复正常，预警完成消警。"
    : selectedVideoModule === "passage"
      ? "占用目标已移除，消防通道恢复畅通，事件完成闭环。"
      : "现场已完成复核处置，设备状态正常，火灾告警记录已闭环。";
  document.querySelector("#videoRecordDetailTitle").textContent = `${module.recordTitle}详情`;
  document.querySelector("#videoRecordDetailState").textContent = getVideoRecordState(record);
  document.querySelector("#videoRecordDetailEvent").textContent = record.title;
  document.querySelector("#videoRecordDetailMeta").textContent = `${record.time} · ${record.eventType}`;
  document.querySelector("#videoRecordDetailNo").textContent = `REC-${modulePrefix}-20260723-${record.id.slice(-2).padStart(4, "0")}`;
  document.querySelector("#videoRecordDetailPoint").textContent = record.point;
  document.querySelector("#videoRecordDetailDevice").textContent = record.device;
  document.querySelector("#videoRecordDetailDuration").textContent = record.duration;
  document.querySelector("#videoRecordDetailOwner").textContent = record.owner;
  document.querySelector("#videoRecordDetailMethod").textContent = method;
  document.querySelector("#videoRecordDetailClosedAt").textContent = `${record.time.slice(0, 10)} ${closedTime}`;
  document.querySelector("#videoRecordDetailConclusion").textContent = conclusion;
  document.querySelector("#videoRecordReportedAt").textContent = reportedTime;
  document.querySelector("#videoRecordCompletedAt").textContent = closedTime;
  document.querySelector("#videoRecordModal").hidden = false;
  document.body.style.overflow = "hidden";
  refreshIcons(document.querySelector("#videoRecordModal"));
  requestAnimationFrame(() => drawScene(document.querySelector("#videoRecordCanvas"), module.category, selectedVideoModule === "flame" ? "thermal" : "visible", true));
}

function closeVideoRecordDetail() {
  document.querySelector("#videoRecordModal").hidden = true;
  document.body.style.overflow = "";
}

function resolveVideoRecord(recordId) {
  const module = getVideoModule();
  const record = module.records.find((item) => item.id === recordId);
  if (!record || record.state !== "active") {
    showToast("事件处置记录已打开（演示）");
    return;
  }
  record.state = "closed";
  record.owner = "Admin";
  if (record === module.records[0]) {
    module.event.closed = true;
    module.event.owner = "Admin";
    const channel = module.channels[0];
    channel.active = false;
    channel.status = "normal";
    channel.statusLabel = selectedVideoModule === "offduty" ? "双人在岗" : "通道已恢复";
  }
  renderVideoMonitoring();
  showToast(selectedVideoModule === "offduty" ? "脱岗预警已消警并完成留痕" : "消防通道已确认恢复畅通");
}

function renderVideoRecordTable() {
  const module = getVideoModule();
  const tbody = document.querySelector("#videoRecordTableBody");
  const records = module.records.filter((item) => {
    if (selectedVideoRecordFilter === "active") return item.state !== "closed";
    if (selectedVideoRecordFilter === "closed") return item.state === "closed";
    return true;
  });
  tbody.innerHTML = records.map((record) => {
    const isFire = selectedVideoModule === "flame";
    const isActive = record.state === "active";
    const actionLabel = isFire && record.state !== "closed" ? "查看告警" : isActive ? module.primaryAction : "查看记录";
    const actionClass = isActive ? "video-record-action primary" : "video-record-action";
    const stateClass = record.state === "active" ? "pending" : record.state === "processing" ? "processing" : "reset";
    return `<tr>
      <td><time>${record.time}</time></td>
      <td><div class="video-record-event"><strong>${record.title}</strong><small>${record.eventType}</small></div></td>
      <td><div class="video-record-device"><strong>${record.device}</strong><small>${record.point}</small></div></td>
      <td>${record.duration}</td>
      <td>${record.owner}</td>
      <td><span class="state-pill ${stateClass}">${getVideoRecordState(record)}</span></td>
      <td><button class="${actionClass}" type="button" data-video-record-action="${record.id}">${actionLabel}</button></td>
    </tr>`;
  }).join("");
  document.querySelector("#videoRecordEmpty").hidden = records.length > 0;
  document.querySelector("#videoRecordCount").textContent = `共 ${records.length} 条记录`;
  tbody.querySelectorAll("[data-video-record-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const record = module.records.find((item) => item.id === button.dataset.videoRecordAction);
      if (!record) return;
      if (selectedVideoModule === "flame" && record.state !== "closed") openFireAlarmFromVideo(record.fireAlarmId);
      else if (record.state === "active") resolveVideoRecord(record.id);
      else openVideoRecordDetail(record);
    });
  });
}

function renderVideoMonitoring() {
  const module = getVideoModule();
  const channel = getSelectedVideoChannel(module);
  const activeCount = module.records.filter((item) => item.state === "active").length;
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
  document.querySelector("#videoSummaryActiveNote").textContent = activeCount ? module.summaryNote : "当前无待处理事件";
  document.querySelector("#videoSummaryToday").textContent = module.today;
  document.querySelector("#videoSummaryTodayNote").textContent = module.todayNote;
  document.querySelector("#videoRecordHeading").textContent = module.recordTitle;
  document.querySelector("#videoRecordSubtitle").textContent = module.recordSubtitle;
  document.querySelector("#videoChannelCount").textContent = `${module.channels.length} 个通道`;

  document.querySelectorAll("[data-video-module-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.videoModuleTab === selectedVideoModule);
    const item = videoMonitoringModules[button.dataset.videoModuleTab];
    const count = item.records.filter((record) => record.state === "active").length;
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
  document.querySelector("#assignmentMessage").value = type === "fire" ? "请立即查看现场图片与前后录像，并在 10 分钟内反馈警情。" : type === "fault" ? "请检查设备供电、通信和运行状态，完成检修后及时标记修复。" : "请核查设备状态、当前读数和预警阈值，并及时反馈处理结果。";
  document.querySelector("#assignmentNotify").checked = true;
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
      const alarm = getFireAlarm(selectedFireAlarmId);
      const action = button.dataset.fireAction;
      if (action === "confirm") {
        alarm.state = "confirmed";
        alarm.stage = 1;
        if (alarm.operator === "待确认") alarm.operator = "Admin";
        alarm.note = "值班人员已确认真实火警，系统已通知消防主管和现场处置人员。";
        showToast(`${alarm.no}已确认警情`);
      } else if (action === "false") {
        alarm.state = "false";
        alarm.stage = 3;
        alarm.operator = "Admin";
        alarm.note = "经现场图片与前后录像复核，确认为误报，已完成消警留痕。";
        showToast(`${alarm.no}已按误报消警`);
      } else if (action === "dispose") {
        alarm.state = "processing";
        alarm.stage = 2;
        if (alarm.operator === "待确认" || alarm.operator === "Admin") alarm.operator = "李明";
        alarm.note = `${alarm.operator}已接警，现场人员正在执行断电、疏散和灭火处置。`;
        showToast(`${alarm.no}已进入警情处置`);
      } else if (action === "reset") {
        alarm.state = "reset";
        alarm.stage = 3;
        alarm.operator = "李明";
        alarm.note = "现场警情已排除，报警设备和消防主机均已完成复位。";
        showToast(`${alarm.device}已完成设备复位`);
      }
      renderFireAlarmList();
      syncCriticalFireReminderState(alarm);
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
  document.querySelector("#faultDetailAssign").addEventListener("click", () => {
    const faultId = selectedTerminalFaultId;
    closeFaultDetail();
    openAssignmentModal("fault", faultId);
  });
  document.querySelector("#faultDetailRepair").addEventListener("click", () => repairTerminalFault(selectedTerminalFaultId));
  document.querySelector("[data-assign-fire]").addEventListener("click", () => openAssignmentModal("fire", selectedFireAlarmId));
  document.querySelectorAll("[data-assignment-close]").forEach((button) => button.addEventListener("click", closeAssignmentModal));
  document.querySelector("#assignmentModal").addEventListener("click", (event) => { if (event.target.id === "assignmentModal") closeAssignmentModal(); });
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
    if (assignmentTargetType === "fire") {
      const alarm = getFireAlarm(assignmentTargetId);
      alarm.operator = personName;
      alarm.note = taskMessage ? `已指派${personName}：${taskMessage}` : `已指派${personName}负责警情确认与处置。`;
      renderFireAlarmList();
    } else if (assignmentTargetType === "warning") {
      const warning = terminalWarnings.find((item) => item.id === assignmentTargetId);
      if (warning) warning.assignee = personName;
      renderTerminalWarningTable();
    } else {
      const fault = getTerminalFault(assignmentTargetId);
      const assignedAt = formatClock(new Date());
      fault.assignee = personName;
      fault.state = "processing";
      fault.assignedAt = assignedAt;
      fault.updated = assignedAt;
      fault.note = taskMessage ? `已指派${personName}：${taskMessage}` : `已指派${personName}负责设备检修。`;
      renderTerminalFaultTable();
    }
    closeAssignmentModal();
    showToast(`任务已指派给${personName}`);
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
    const activeRecord = getVideoModule().records.find((item) => item.state === "active");
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
  document.querySelector("#videoRecordModal").addEventListener("click", (event) => {
    if (event.target.id === "videoRecordModal") closeVideoRecordDetail();
  });
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
    if (event.key === "Escape" && !document.querySelector("#faultDetailModal").hidden) closeFaultDetail();
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
