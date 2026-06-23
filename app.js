const tools = [
  {
    name: "办公数码省钱清单",
    category: "省钱",
    price: "免费",
    tag: "联盟返佣",
    icon: "badge-percent",
    desc: "把键盘、显示器、移动硬盘、路由器、会员软件等高搜索意图商品整理成避坑清单，适合接电商联盟链接。",
    proof: ["用户搜索采购清单时通常已经有购买意图，比泛流量更容易转化。", "淘宝联盟、京东联盟等平台支持推广者获取商品推广链接，成交后按平台规则结算。"],
    useCase: ["办公桌面搭建清单", "大学生开学数码清单", "居家办公设备避坑", "中小商家采购工具清单"],
    steps: ["先选一个细分场景，例如居家办公或大学生开学。", "列出预算、核心参数、避坑点、适合人群和替代选择。", "把每个推荐项接入真实推广链接，并标注商业关系。", "每月更新价格区间和下架商品，避免失效链接。"],
    monetize: ["商品成交后按联盟平台规则获得佣金。", "页面可出售固定赞助位给工具、配件或 SaaS 厂商。", "沉淀采购表格，做成 9-19 元资料包。"],
    caution: "不能虚构原价、最低价或使用未核实的优惠信息。推荐内容要写清适用人群和限制条件。",
    sources: [
      { label: "淘宝联盟", url: "https://pub.alimama.com/" },
      { label: "京东联盟", url: "https://union.jd.com/" },
      { label: "互联网广告管理办法", url: "https://www.gov.cn/zhengce/zhengceku/2023-03/24/content_5748170.htm" },
    ],
  },
  {
    name: "家庭刚需采购榜",
    category: "省钱",
    price: "免费",
    tag: "电商 CPS",
    icon: "shopping-basket",
    desc: "围绕收纳、清洁、厨房、小家电、母婴和宠物等家庭刚需做清单，内容受众更广，适合长期 SEO。",
    proof: ["刚需商品有持续搜索需求，适合做清单型内容和对比型内容。", "Google Search Central 建议内容以帮助用户为核心，清单需要提供真实比较和决策信息。"],
    useCase: ["租房收纳清单", "厨房小家电避坑", "清洁工具对比", "母婴新手采购表"],
    steps: ["围绕一个真实场景写，不做泛泛的百货堆砌。", "每个商品给出预算、优点、缺点、适合人群。", "加入不推荐购买的情况，提升可信度。", "把高转化商品接入联盟链接，把表格版做成资料包。"],
    monetize: ["联盟返佣。", "家庭采购表格资料包。", "后续可接家政、本地维修、收纳服务线索。"],
    caution: "母婴、健康相关内容要谨慎，不做医疗功效承诺，不替代专业意见。",
    sources: [
      { label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "淘宝联盟", url: "https://pub.alimama.com/" },
    ],
  },
  {
    name: "手机宽带套餐对比",
    category: "省钱",
    price: "线索",
    tag: "本地服务",
    icon: "smartphone",
    desc: "整理不同预算、流量需求和家庭宽带场景的对比表，适合做本地服务线索，但必须确保信息真实有效。",
    proof: ["套餐、宽带和本地服务属于高意图查询，用户往往需要马上决策。", "涉及资费和合约时，页面必须写明限制、有效期和以运营商页面为准。"],
    useCase: ["学生流量卡对比", "家庭宽带选择", "办公室宽带清单", "老人低月租套餐"],
    steps: ["只整理公开可查的套餐，不编造价格。", "把月租、流量、通话、合约期、归属地限制列清楚。", "用表单收集城市和需求，转给合规服务商或人工回复。", "每次更新标注日期。"],
    monetize: ["本地服务线索合作。", "赞助展示位。", "省钱对比表下载。"],
    caution: "不能冒充运营商，不能承诺不确定的资费或办理结果；正式转化要使用合规服务入口。",
    sources: [
      { label: "互联网广告管理办法", url: "https://www.gov.cn/zhengce/zhengceku/2023-03/24/content_5748170.htm" },
      { label: "个人信息保护法", url: "http://www.npc.gov.cn/npc/c30834/202108/a8c4e3672c74491a80b53a172bb753fe.shtml" },
    ],
  },
  {
    name: "简历优化模板",
    category: "职场",
    price: "¥9",
    tag: "资料包",
    icon: "file-user",
    desc: "把岗位 JD、真实经历和 STAR 法则整理成简历模板，适合做低价资料包和一对一服务线索。",
    proof: ["职场搜索需求明确，用户愿意为节省时间和提高表达质量付费。", "AI 可以辅助结构化表达，但简历内容必须真实。"],
    useCase: ["应届生简历", "转行简历", "英文简历", "项目经历重写"],
    steps: ["收集目标岗位 JD 和用户真实经历。", "提取岗位关键词，按 STAR 结构重写项目描述。", "输出一页版、详细版和面试追问清单。", "引导用户购买模板或提交一对一优化需求。"],
    monetize: ["9-29 元资料包。", "99-399 元简历精修。", "职场课程、求职服务合作返佣。"],
    caution: "不能编造学历、公司、薪资、项目结果或背书。",
    sources: [
      { label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "OpenAI ChatGPT", url: "https://openai.com/chatgpt/" },
    ],
  },
  {
    name: "面试问题清单",
    category: "职场",
    price: "¥19",
    tag: "求职",
    icon: "messages-square",
    desc: "按岗位整理常见面试题、回答框架和自我介绍模板，适合做可复购的职场资料。",
    proof: ["面试准备是强痛点，用户对岗位相关、可直接练习的材料更敏感。", "清单型资料比泛泛文章更适合小额付费。"],
    useCase: ["运营面试", "销售面试", "新媒体面试", "行政和客服面试"],
    steps: ["先选 5 个常见岗位，不要一次覆盖所有行业。", "每个岗位整理自我介绍、项目追问、压力问题和反问面试官。", "加入优秀回答模板和踩坑提醒。", "免费展示部分内容，完整表格做付费下载。"],
    monetize: ["19 元岗位包。", "求职社群会员。", "一对一模拟面试线索。"],
    caution: "不能保证拿 offer；要强调材料用于准备表达，不替代真实能力。",
    sources: [
      { label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    ],
  },
  {
    name: "职场效率工具包",
    category: "职场",
    price: "会员",
    tag: "办公",
    icon: "briefcase-business",
    desc: "整理文档、表格、会议纪要、邮件、项目管理工具和模板，面向职场人做长期更新的会员资源。",
    proof: ["办公工具和模板有持续更新空间，适合做搜索内容、资料包和联盟推荐。", "用户购买的不是工具本身，而是筛选、模板和可复制流程。"],
    useCase: ["会议纪要模板", "周报模板", "Excel 常用公式", "项目跟进表"],
    steps: ["把工具按具体工作任务分类。", "每个工具给出适合人群、免费额度、缺点和替代品。", "配套模板下载和使用案例。", "把高频模板做会员区或低价包。"],
    monetize: ["会员资料包。", "SaaS 推广返佣。", "企业效率培训线索。"],
    caution: "不要夸大工具效果；企业数据和客户资料不能上传到不合规工具。",
    sources: [
      { label: "AdSense eligibility", url: "https://support.google.com/adsense/answer/9724" },
      { label: "个人信息保护法", url: "http://www.npc.gov.cn/npc/c30834/202108/a8c4e3672c74491a80b53a172bb753fe.shtml" },
    ],
  },
  {
    name: "本地商家获客表单",
    category: "经营",
    price: "¥499起",
    tag: "线索服务",
    icon: "clipboard-list",
    desc: "给装修、家政、美业、教培、维修等本地商家做落地页和表单，把访客转成可跟进线索。",
    proof: ["小流量网站早期更适合做高客单线索服务，而不是只等广告收入。", "表单、通知、表格和回访流程可以快速交付，客单价高于单篇内容。"],
    useCase: ["装修报价预约", "家政保洁预约", "课程试听报名", "维修上门登记"],
    steps: ["做一个行业落地页，明确服务范围和案例。", "表单只收必要信息：称呼、城市、联系方式、需求。", "提交后写入飞书/表格并提醒负责人。", "7 天内用真实反馈优化页面文案。"],
    monetize: ["建表单和落地页 499-1999 元。", "线索代运营按月收费。", "行业商家赞助和置顶。"],
    caution: "收集联系方式前要说明用途和范围，不要收身份证、银行卡、账号密码等敏感信息。",
    sources: [
      { label: "个人信息保护法", url: "http://www.npc.gov.cn/npc/c30834/202108/a8c4e3672c74491a80b53a172bb753fe.shtml" },
    ],
  },
  {
    name: "商单报价与合同清单",
    category: "经营",
    price: "¥19",
    tag: "接单",
    icon: "receipt-text",
    desc: "把自由职业和小团队常见的报价、验收、修改次数、付款节点和版权边界整理成检查表。",
    proof: ["接单人群愿意为减少沟通成本和规避风险购买模板。", "清单可以做教育内容，但不能替代法律意见。"],
    useCase: ["网站建设接单", "设计接单", "文案代写", "短视频代运营"],
    steps: ["列出服务范围、交付物、修改次数、付款比例和验收标准。", "准备首封报价、催付款、需求变更和验收话术。", "把模板做成可复制文档和表格。", "重大合同建议用户找专业人士确认。"],
    monetize: ["19-49 元资料包。", "接单咨询。", "建站或代运营服务线索。"],
    caution: "必须声明不是法律意见；不能替代律师或专业法律服务。",
    sources: [
      { label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    ],
  },
  {
    name: "小微 SaaS 工具榜",
    category: "经营",
    price: "返佣",
    tag: "SaaS",
    icon: "building-2",
    desc: "面向个体户和小团队整理收款、表单、客服、排班、库存、会员管理等工具，适合赞助和返佣。",
    proof: ["小微企业工具有明确预算和使用场景，适合写对比评测。", "AdSense 和广告联盟审核通常要求网站有足够原创内容和良好体验。"],
    useCase: ["门店会员系统", "客服工具", "预约排班", "库存管理"],
    steps: ["每篇只对比一个具体场景。", "列出价格、免费额度、适合规模、缺点和替代方案。", "用真实截图或操作流程增加可信度。", "有返佣或赞助时标注合作关系。"],
    monetize: ["SaaS 返佣。", "厂商赞助测评。", "本地商家工具选型咨询。"],
    caution: "不能写假测评；收赞助也要保留缺点和适用边界。",
    sources: [
      { label: "AdSense eligibility", url: "https://support.google.com/adsense/answer/9724" },
      { label: "互联网广告管理办法", url: "https://www.gov.cn/zhengce/zhengceku/2023-03/24/content_5748170.htm" },
    ],
  },
  {
    name: "爆款标题与脚本库",
    category: "内容",
    price: "¥9",
    tag: "资料包",
    icon: "pen-line",
    desc: "按小红书、公众号、短视频和私域文案整理标题、开头钩子和脚本结构，适合低价引流。",
    proof: ["内容创作者长期需要选题和结构模板，低价资料包更容易完成第一次付款。", "Google 建议内容要对读者有帮助，而不是只为搜索排名生成。"],
    useCase: ["小红书标题", "短视频口播", "公众号选题", "社群转化文案"],
    steps: ["把模板按痛点、清单、对比、案例、避坑分类。", "每条模板配一个适用场景和改写示例。", "免费展示 20 条，完整 100 条做付费下载。", "购买后引导升级定制脚本服务。"],
    monetize: ["9 元标题包。", "19-49 元行业脚本包。", "内容代运营线索。"],
    caution: "不要承诺爆款和播放量；标题不能误导、虚假或擦边。",
    sources: [
      { label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    ],
  },
  {
    name: "商品图与海报模板",
    category: "内容",
    price: "¥29起",
    tag: "电商",
    icon: "image-plus",
    desc: "整理商品主图、促销海报、课程封面和本地店铺活动图模板，可以卖模板，也可以接代做服务。",
    proof: ["商品图和活动海报结果直观，适合展示样例并快速成交。", "电商和本地商家有反复更新素材的需求。"],
    useCase: ["淘宝/闲鱼商品图", "团购活动海报", "课程封面", "小红书封面"],
    steps: ["按行业做样例：餐饮、美妆、教培、数码。", "准备可编辑模板和高清导出版。", "注明尺寸、用途和修改范围。", "用表单收集客户图片、品牌色和文案。"],
    monetize: ["29 元模板下载。", "299-699 元商品图套餐。", "月度素材维护服务。"],
    caution: "商品外观、价格、二维码和联系方式必须人工确认；不能侵犯商标、肖像和版权。",
    sources: [
      { label: "互联网广告管理办法", url: "https://www.gov.cn/zhengce/zhengceku/2023-03/24/content_5748170.htm" },
    ],
  },
  {
    name: "AI效率工具精选",
    category: "AI",
    price: "免费/返佣",
    tag: "AI工具",
    icon: "bot",
    desc: "保留 AI 工具作为效率分支，但不把网站只做成 AI 导航，而是围绕真实任务推荐工具。",
    proof: ["AI 工具适合提升写作、表格、图片和自动化效率。", "工具推荐内容需要基于真实场景、优缺点和适用人群，而不是堆链接。"],
    useCase: ["写作和摘要", "图片和海报", "表格和办公", "自动化流程"],
    steps: ["每个工具只绑定一个真实任务。", "写清免费额度、学习成本、替代方案和隐私注意事项。", "能返佣的工具标注商业关系。", "把工具教程和资料包连接起来。"],
    monetize: ["工具返佣。", "教程资料包。", "厂商赞助。"],
    caution: "AI 输出要人工核验；医疗、法律、金融等高风险内容不能直接生成后发布。",
    sources: [
      { label: "OpenAI ChatGPT", url: "https://openai.com/chatgpt/" },
      { label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    ],
  },
];

const infoDetails = {
  "rank-saving": {
    title: "省钱榜：先做用户有购买意图的清单",
    summary: "省钱类内容适合短期接联盟返佣，因为用户搜索时往往已经准备购买。",
    blocks: [
      ["为什么吸引人", ["用户能马上得到预算、避坑点和替代选择。", "清单比泛文章更容易收藏、转发和转化。"]],
      ["怎么产生收益", ["接淘宝联盟、京东联盟或其他正规推广链接。", "把完整比价表做成 9-19 元资料包。", "后续可接品牌赞助位。"]],
      ["今天能做什么", ["先写一篇“居家办公 1000 元桌面清单”。", "每个商品写适合人群、不适合人群和替代品。", "没有返佣链接前先放普通链接，拿到推广链接后替换。"]],
    ],
    sources: [{ label: "淘宝联盟", url: "https://pub.alimama.com/" }, { label: "京东联盟", url: "https://union.jd.com/" }],
  },
  "rank-career": {
    title: "职场榜：小额资料包最容易先成交",
    summary: "简历、面试、办公模板都有强痛点，适合低价资料包和一对一服务线索。",
    blocks: [
      ["为什么吸引人", ["用户希望节省时间、降低求职焦虑。", "模板和清单可直接复制使用，价值容易理解。"]],
      ["怎么产生收益", ["9-29 元资料包。", "99-399 元简历精修或模拟面试。", "职场工具、课程和服务返佣。"]],
      ["今天能做什么", ["做 5 个岗位的面试题清单。", "免费展示一部分，完整表格引导付费。", "表单收集一对一优化需求。"]],
    ],
    sources: [{ label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }],
  },
  "rank-business": {
    title: "经营榜：流量少时优先做高客单线索",
    summary: "早期网站流量有限，给本地商家做表单、落地页和自动通知，比等广告更快看到现金流。",
    blocks: [
      ["为什么吸引人", ["商家关心的是客户线索，不是漂亮页面。", "表单、通知、回访流程可以快速交付。"]],
      ["怎么产生收益", ["建落地页和表单 499-1999 元。", "按月做线索维护。", "工具厂商和本地服务商可购买赞助位。"]],
      ["今天能做什么", ["选一个行业：装修、家政、美业、教培或维修。", "做一个落地页样板和报价。", "用表单收集城市、预算和联系方式。"]],
    ],
    sources: [{ label: "个人信息保护法", url: "http://www.npc.gov.cn/npc/c30834/202108/a8c4e3672c74491a80b53a172bb753fe.shtml" }],
  },
  "rank-content": {
    title: "内容榜：用模板降低第一次付款门槛",
    summary: "标题、脚本、海报和封面模板适合低价销售，也能转化为代写、设计和代运营服务。",
    blocks: [
      ["为什么吸引人", ["创作者每天都需要选题和素材。", "模板类内容交付快、容易更新。"]],
      ["怎么产生收益", ["9 元标题包、19 元脚本包、29 元海报模板。", "高阶用户转成定制服务。", "内容工具可接返佣或赞助。"]],
      ["今天能做什么", ["整理 100 条标题模板。", "按行业做 4 套海报样例。", "在卡片详情里放购买入口和服务入口。"]],
    ],
    sources: [{ label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }],
  },
  "rank-ai": {
    title: "AI榜：AI只是工具，任务才是转化点",
    summary: "AI 导航很容易同质化，必须绑定写简历、做图、写脚本、做表单这些具体任务。",
    blocks: [
      ["为什么吸引人", ["用户不想研究一堆工具名，只想解决当前任务。", "任务型评测更容易产生搜索流量和付费转化。"]],
      ["怎么产生收益", ["AI 工具返佣。", "工具教程和模板包。", "厂商赞助测评。"]],
      ["今天能做什么", ["把工具库按任务重写，而不是按工具品牌堆列表。", "每个工具写清适合谁、不适合谁、能不能免费用。", "所有 AI 输出都提示人工核验。"]],
    ],
    sources: [{ label: "OpenAI ChatGPT", url: "https://openai.com/chatgpt/" }, { label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }],
  },
  "opp-office": {
    title: "今日机会：办公数码省钱榜",
    summary: "这是最适合先上的内容，因为不需要你先有服务能力，只要把清单做细、做真实。",
    blocks: [
      ["页面内容", ["预算分档：300 元、1000 元、3000 元。", "每项写清参数、优点、缺点、替代品。"]],
      ["收益入口", ["商品推广链接。", "品牌赞助位。", "可下载的采购表格。"]],
      ["合规提醒", ["标注推广关系。", "价格和优惠以平台页面为准。"]],
    ],
    sources: [{ label: "淘宝联盟", url: "https://pub.alimama.com/" }, { label: "京东联盟", url: "https://union.jd.com/" }],
  },
  "opp-career": {
    title: "今日机会：简历与面试资料包",
    summary: "适合快速做出 9-19 元小产品，用来测试用户是否愿意付费。",
    blocks: [
      ["页面内容", ["一页简历模板。", "岗位关键词表。", "20 个面试问题和回答框架。"]],
      ["收益入口", ["小额资料包。", "一对一简历精修线索。", "职场课程合作。"]],
      ["合规提醒", ["不承诺入职结果。", "不编造履历。"]],
    ],
    sources: [{ label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }],
  },
  "opp-local": {
    title: "今日机会：本地商家获客页",
    summary: "如果你想更快看到现金流，线索服务通常比广告更现实。",
    blocks: [
      ["页面内容", ["行业痛点、服务范围、报价区间、案例样板。", "只收必要信息的预约表单。"]],
      ["收益入口", ["建站和表单搭建费。", "线索运营月费。", "本地服务商赞助。"]],
      ["合规提醒", ["说明信息用途。", "不要收集敏感个人信息。"]],
    ],
    sources: [{ label: "个人信息保护法", url: "http://www.npc.gov.cn/npc/c30834/202108/a8c4e3672c74491a80b53a172bb753fe.shtml" }],
  },
  "opp-content": {
    title: "今日机会：内容模板与海报素材",
    summary: "模板类内容可以用低价快速验证付费意愿，也能带出定制服务。",
    blocks: [
      ["页面内容", ["标题模板、脚本模板、封面模板、海报模板。", "展示前后对比和适用行业。"]],
      ["收益入口", ["9-49 元资料包。", "设计代做服务。", "内容工具返佣。"]],
      ["合规提醒", ["不承诺流量和爆款。", "图片、字体和商标素材要有授权。"]],
    ],
    sources: [{ label: "互联网广告管理办法", url: "https://www.gov.cn/zhengce/zhengceku/2023-03/24/content_5748170.htm" }],
  },
  "opp-ai": {
    title: "今日机会：AI效率工具真实测评",
    summary: "AI 仍然能做，但要从工具名导航改成任务型测评。",
    blocks: [
      ["页面内容", ["真实测试截图。", "免费额度、优缺点、替代方案。", "适合人群和不适合人群。"]],
      ["收益入口", ["工具返佣。", "厂商赞助。", "教程资料包。"]],
      ["合规提醒", ["AI 输出必须人工核验。", "广告和返佣关系要标注。"]],
    ],
    sources: [{ label: "OpenAI ChatGPT", url: "https://openai.com/chatgpt/" }, { label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }],
  },
  "guide-buying": {
    title: "实操：写一篇可转化的采购清单",
    summary: "采购清单的核心不是堆商品，而是帮用户做选择。",
    blocks: [
      ["结构", ["适合谁、不适合谁、预算分档、避坑点、替代品。", "每项推荐都写一条真实理由。"]],
      ["转化", ["普通链接先上线。", "拿到联盟链接后替换推荐按钮。", "完整表格做付费下载。"]],
    ],
    sources: [{ label: "淘宝联盟", url: "https://pub.alimama.com/" }],
  },
  "guide-resume": {
    title: "实操：做一份简历资料包",
    summary: "先用模板成交，再把高意向用户转成一对一服务。",
    blocks: [
      ["结构", ["一页模板、项目经历写法、岗位关键词、面试追问。", "按 3-5 个岗位分别做版本。"]],
      ["转化", ["免费展示样例。", "完整模板 9-19 元。", "复杂需求提交表单。"]],
    ],
    sources: [{ label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }],
  },
  "guide-local": {
    title: "实操：给商家做线索表单",
    summary: "这是早期最现实的高客单方向之一。",
    blocks: [
      ["结构", ["服务介绍、报价范围、案例、常见问题、预约表单。", "表单只收必要信息。"]],
      ["转化", ["建站和表单搭建收费。", "线索跟进和页面维护按月收费。"]],
    ],
    sources: [{ label: "个人信息保护法", url: "http://www.npc.gov.cn/npc/c30834/202108/a8c4e3672c74491a80b53a172bb753fe.shtml" }],
  },
  "guide-seo": {
    title: "实操：做可搜索的真实测评",
    summary: "搜索流量需要时间，但它是长期资产。",
    blocks: [
      ["结构", ["真实体验、优缺点、价格、替代方案、适合人群。", "每篇只解决一个明确问题。"]],
      ["转化", ["先用赞助和线索变现。", "内容稳定后申请广告联盟。"]],
    ],
    sources: [{ label: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }, { label: "AdSense", url: "https://support.google.com/adsense/answer/9724" }],
  },
  "kit-saving": {
    title: "资料包：省钱采购表",
    summary: "适合做第一款低价数字产品。",
    blocks: [["包含", ["预算分档、推荐理由、避坑点、替代品、更新时间。"]], ["定价", ["9-19 元。", "后续升级为会员更新。"]]],
    sources: [{ label: "淘宝联盟", url: "https://pub.alimama.com/" }],
  },
  "kit-career": {
    title: "资料包：简历面试包",
    summary: "职场用户痛点明确，适合低价测试。",
    blocks: [["包含", ["简历模板、岗位关键词、面试题、自我介绍。"]], ["定价", ["9-29 元。", "一对一优化另行报价。"]]],
    sources: [{ label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }],
  },
  "kit-business": {
    title: "资料包：商家获客表",
    summary: "既能卖资料，也能转化服务。",
    blocks: [["包含", ["线索字段、回访话术、报价模板、表单示例。"]], ["定价", ["19-49 元。", "建站和自动化服务 499 元起。"]]],
    sources: [{ label: "个人信息保护法", url: "http://www.npc.gov.cn/npc/c30834/202108/a8c4e3672c74491a80b53a172bb753fe.shtml" }],
  },
  "kit-content": {
    title: "资料包：标题脚本库",
    summary: "内容创作者容易理解价值，适合低价引流。",
    blocks: [["包含", ["100 条标题、30 条脚本结构、10 套海报文案。"]], ["定价", ["9-19 元。", "高阶用户可升级定制服务。"]]],
    sources: [{ label: "互联网广告管理办法", url: "https://www.gov.cn/zhengce/zhengceku/2023-03/24/content_5748170.htm" }],
  },
};

const modalCopy = {
  sponsor: {
    title: "赞助位怎么赚钱",
    copy: "<p>赞助位适合等页面有稳定访问后出售。必须标注广告或赞助关系，写清展示周期、位置、素材来源和结算方式。</p><ul><li>前期可低价测试：首页卡片、资源库侧栏、专题页置顶。</li><li>需要你提供：赞助素材、展示周期、收款方式和合作说明。</li></ul>",
  },
  free: {
    title: "订阅免费更新",
    copy: "<p>免费订阅用于沉淀用户，本身不直接到账。后续可以把用户转化为资料包购买、咨询、赞助合作或服务线索。</p>",
  },
  business: {
    title: "合作咨询",
    copy: "<p>适合赞助展示、资源测评、本地线索、资料包合作和工具推广。前期建议先从一项真实收入入口开始，不要同时开太多入口。</p>",
  },
  incomeSetup: {
    title: "接入网站收益需要什么",
    copy: "<p>站内收益位置已预留，正式启用前需要真实账号、真实链接和平台审核。</p><ul><li>联盟返佣：淘宝联盟、京东联盟或工具厂商后台生成的推广链接。</li><li>付费资料：小鹅通、知识星球、微店、淘宝虚拟商品等生成的付款链接。</li><li>线索服务：飞书多维表格、Tally、问卷星或其他表单链接。</li><li>广告收益：广告联盟审核后的广告代码，通常要等网站内容和流量稳定。</li></ul><p><a href=\"./setup.html\">打开站长接入清单</a>，按里面三步拿到链接后，只需要替换 <code>monetization.js</code> 一处配置。</p>",
  },
  adSetup: {
    title: "广告代码接入",
    copy: "<p>广告联盟不是马上赚钱的入口。通常要有原创内容、良好体验、隐私政策、合规页面和一定访问量，通过审核后才能放代码。</p><ul><li>适合位置：首页首屏下方、资源库侧栏、专题正文中部。</li><li>国内还要关注域名实名认证、解析、备案和平台规则。</li></ul>",
  },
  affiliateSetup: {
    title: "联盟返佣链接接入",
    copy: "<p>返佣是本站最适合先做的收入入口：用户从清单、榜单或教程点击推广链接，成交后按联盟平台规则结算。</p><ul><li><a href=\"https://pub.alimama.com/\" target=\"_blank\" rel=\"noopener\">淘宝联盟</a>：适合淘宝/天猫商品清单。</li><li><a href=\"https://union.jd.com/\" target=\"_blank\" rel=\"noopener\">京东联盟</a>：适合数码、家电、办公用品清单。</li><li>拿到推广链接后，把它填进 <code>monetization.js</code> 的 affiliate 区域。</li></ul><p>页面会标注推荐理由和商业关系，避免误导。</p>",
  },
  paidSetup: {
    title: "付费资料链接接入",
    copy: "<p>资料包适合最快验证付费意愿。本站已做好购买页，正式收款需要你本人在小鹅通、微店、淘宝虚拟商品等平台创建商品并复制付款链接。</p><ul><li><a href=\"./checkout.html?kit=saving\">省钱采购表购买页</a></li><li><a href=\"./checkout.html?kit=career\">简历面试包购买页</a></li><li><a href=\"./checkout.html?kit=business\">商家获客表购买页</a></li><li><a href=\"./checkout.html?kit=content\">标题脚本库购买页</a></li></ul><p>拿到付款链接后，填进 <code>monetization.js</code> 的 payments 区域。</p>",
  },
  leadSetup: {
    title: "线索表单接入",
    copy: "<p>线索成交适合早期现金流：给商家做落地页、表单、通知和回访流程，用户提交后你按需求报价。</p><ul><li><a href=\"./lead.html\">站内线索表单页已做好</a>。</li><li>正式收件建议用飞书多维表格表单、问卷星或腾讯问卷。</li><li>拿到公开表单链接后，填进 <code>monetization.js</code> 的 lead.formUrl。</li></ul><p>注意：只收必要信息，明确用途，不收敏感信息。</p>",
  },
};

const state = { category: "全部", query: "", saved: new Set(JSON.parse(localStorage.getItem("savedTools") || "[]")) };
const currency = new Intl.NumberFormat("zh-CN", { style: "currency", currency: "CNY", maximumFractionDigits: 0 });
const formatNumber = (value) => new Intl.NumberFormat("zh-CN").format(Math.round(value));
const renderIcons = () => window.lucide && window.lucide.createIcons();

function detailList(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function sourceLinks(sources) {
  return sources.map((source) => `<a href="${source.url}" target="_blank" rel="noopener">${source.label}</a>`).join("");
}

function renderTools() {
  const grid = document.querySelector("[data-tool-grid]");
  const empty = document.querySelector("[data-empty]");
  const filtered = tools.filter((tool) => {
    const inCategory = state.category === "全部" || tool.category === state.category;
    const text = `${tool.name} ${tool.category} ${tool.tag} ${tool.desc}`.toLowerCase();
    return inCategory && text.includes(state.query.toLowerCase());
  });

  grid.innerHTML = filtered.map((tool) => {
    const saved = state.saved.has(tool.name);
    return `
      <article class="tool-card clickable-card" tabindex="0" role="button" aria-label="查看${tool.name}详情" data-tool-detail="${tool.name}">
        <header>
          <span class="tool-icon"><i data-lucide="${tool.icon}"></i></span>
          <button class="save-button ${saved ? "saved" : ""}" type="button" aria-label="收藏${tool.name}" data-save="${tool.name}"><i data-lucide="star"></i></button>
        </header>
        <h3>${tool.name}</h3>
        <p>${tool.desc}</p>
        <div class="tool-meta"><span>${tool.category}</span><span>${tool.price}</span><span>${tool.tag}</span></div>
        <span class="detail-link">点击查看完整方案</span>
      </article>`;
  }).join("");

  empty.hidden = filtered.length > 0;
  renderIcons();
}

function setCategory(category) {
  state.category = category;
  document.querySelectorAll("[data-category]").forEach((button) => button.classList.toggle("active", button.dataset.category === category));
  renderTools();
}

function updateRevenue() {
  const visits = Number(document.querySelector("[data-visits]").value);
  const conversion = Number(document.querySelector("[data-conversion]").value);
  const sponsor = Number(document.querySelector("[data-sponsor]").value);
  const total = visits * (conversion / 100) * 19 + sponsor * 2 + (visits / 1000) * 3;
  document.querySelector("[data-visits-value]").textContent = formatNumber(visits);
  document.querySelector("[data-conversion-value]").textContent = `${conversion.toFixed(1)}%`;
  document.querySelector("[data-sponsor-value]").textContent = currency.format(sponsor);
  document.querySelector("[data-revenue]").textContent = currency.format(total);
}

function openModal(type) {
  const modal = document.querySelector("[data-modal]");
  const content = modalCopy[type] || modalCopy.free;
  document.querySelector("[data-modal-title]").textContent = content.title;
  document.querySelector("[data-modal-copy]").innerHTML = content.copy.trim().startsWith("<") ? content.copy : `<p>${content.copy}</p>`;
  modal.hidden = false;
  modal.querySelector("input")?.focus();
  renderIcons();
}

function openToolDetail(name) {
  const tool = tools.find((item) => item.name === name);
  if (!tool) return;
  const modal = document.querySelector("[data-modal]");
  document.querySelector("[data-modal-title]").textContent = tool.name;
  document.querySelector("[data-modal-copy]").innerHTML = `
    <div class="detail-header">
      <span>${tool.category}</span><span>${tool.price}</span><span>${tool.tag}</span>
    </div>
    <p class="detail-summary">${tool.desc}</p>
    <div class="detail-grid">
      <section><h3>依据</h3>${detailList(tool.proof)}</section>
      <section><h3>适合做什么</h3>${detailList(tool.useCase)}</section>
      <section><h3>实操步骤</h3>${detailList(tool.steps)}</section>
      <section><h3>变现方式</h3>${detailList(tool.monetize)}</section>
    </div>
    <div class="detail-warning"><strong>注意：</strong>${tool.caution}</div>
    <div class="detail-sources"><strong>参考来源：</strong>${sourceLinks(tool.sources)}</div>
    <div class="detail-actions">
      <button class="primary-action" type="button" data-open-modal="affiliateSetup">接入推广或返佣链接</button>
      <button class="secondary-action" type="button" data-open-modal="paidSetup">做成资料包入口</button>
    </div>
  `;
  modal.hidden = false;
  renderIcons();
}

function openInfoDetail(key) {
  const detail = infoDetails[key];
  if (!detail) return;
  const modal = document.querySelector("[data-modal]");
  document.querySelector("[data-modal-title]").textContent = detail.title;
  document.querySelector("[data-modal-copy]").innerHTML = `
    <p class="detail-summary">${detail.summary}</p>
    <div class="detail-grid">
      ${detail.blocks.map(([title, items]) => `<section><h3>${title}</h3>${detailList(items)}</section>`).join("")}
    </div>
    <div class="detail-sources"><strong>参考来源：</strong>${sourceLinks(detail.sources)}</div>
  `;
  modal.hidden = false;
  renderIcons();
}

function closeModal() { document.querySelector("[data-modal]").hidden = true; }

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-menu-button]")) document.body.classList.toggle("menu-open");
  const filter = event.target.closest("[data-category]");
  if (filter) setCategory(filter.dataset.category);
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    event.stopPropagation();
    const name = saveButton.dataset.save;
    state.saved.has(name) ? state.saved.delete(name) : state.saved.add(name);
    localStorage.setItem("savedTools", JSON.stringify([...state.saved]));
    renderTools();
    return;
  }
  const detailCard = event.target.closest("[data-tool-detail]");
  if (detailCard) openToolDetail(detailCard.dataset.toolDetail);
  const infoCard = event.target.closest("[data-info-detail]");
  if (infoCard) openInfoDetail(infoCard.dataset.infoDetail);
  if (event.target.closest("[data-reset]")) {
    state.query = "";
    document.querySelector("[data-search]").value = "";
    setCategory("全部");
  }
  const modalTrigger = event.target.closest("[data-open-modal]");
  if (modalTrigger) openModal(modalTrigger.dataset.openModal);
  if (event.target.closest("[data-close-modal]")) closeModal();
});

document.addEventListener("keydown", (event) => {
  const detailCard = event.target.closest?.("[data-tool-detail]");
  const infoCard = event.target.closest?.("[data-info-detail]");
  if (detailCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openToolDetail(detailCard.dataset.toolDetail);
  }
  if (infoCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openInfoDetail(infoCard.dataset.infoDetail);
  }
  if (event.key === "Escape") closeModal();
});

document.querySelector("[data-search]").addEventListener("input", (event) => { state.query = event.target.value.trim(); renderTools(); });
document.querySelectorAll("[data-visits], [data-conversion], [data-sponsor]").forEach((input) => input.addEventListener("input", updateRevenue));
document.querySelector("[data-lead-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  localStorage.setItem("latestLead", JSON.stringify({ ...data, createdAt: new Date().toISOString() }));
  document.querySelector("[data-form-status]").textContent = "已保存到本地示例数据，正式上线后接入表单服务即可。";
  event.currentTarget.reset();
});
document.querySelector("[data-mini-form]").addEventListener("submit", (event) => { event.preventDefault(); event.currentTarget.reset(); closeModal(); });

renderTools();
updateRevenue();
renderIcons();
