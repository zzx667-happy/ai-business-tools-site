const tools = [
  {
    name: "AI写作接单包",
    category: "写作",
    price: "免费试用",
    tag: "文章/脚本/笔记",
    icon: "pen-line",
    desc: "用 ChatGPT、Claude、Gemini 做选题、提纲、改写和脚本，适合从低门槛内容接单开始。",
    proof: ["OpenAI、Anthropic、Google 均提供面向写作、摘要、代码和多模态生成的官方 AI 助手。", "Google Search Central 强调内容要有帮助、可靠、以人为本，不能只堆自动生成内容。"],
    useCase: ["公众号文章、知乎回答、小红书笔记、短视频口播稿", "企业简介、产品介绍、活动文案、邮件模板", "把客户素材整理成结构化文章，而不是直接复制 AI 输出"],
    steps: ["先让客户提供产品、目标人群、参考账号和禁用词。", "用 AI 生成 3 套标题和提纲，再人工选择一套。", "按客户语气改写正文，补充真实案例和细节。", "交付前用清单检查事实、重复、敏感词和平台调性。"],
    monetize: ["新手可卖 99-199 元/篇笔记或短文。", "熟练后打包成 4 篇文章 + 8 条短视频脚本，按 699-1999 元/月收服务费。", "网站可以用免费教程引流，再卖标题模板、行业脚本包或代写服务。"],
    caution: "不要承诺 AI 文章必爆，也不要发布未经核实的医疗、法律、金融建议。AI 初稿必须人工校对。",
    sources: [
      { label: "OpenAI ChatGPT", url: "https://openai.com/chatgpt/" },
      { label: "Claude", url: "https://www.anthropic.com/claude" },
      { label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }
    ],
  },
  {
    name: "简历优化器",
    category: "写作",
    price: "¥9下载",
    tag: "职场",
    icon: "file-user",
    desc: "把岗位 JD、个人经历和 STAR 法则结合，生成更匹配招聘关键词的简历版本。",
    proof: ["大模型擅长摘要、改写和结构化文本，适合把零散经历整理为简历项目。", "招聘场景更看重真实性和岗位匹配，不能虚构履历。"],
    useCase: ["应届生简历润色", "转行简历关键词匹配", "英文简历和 LinkedIn 简介改写"],
    steps: ["复制目标岗位 JD，提取硬技能、项目经验和行业关键词。", "让用户提供真实经历，按 STAR 结构重写项目描述。", "生成 2 个版本：稳健版和冲刺版。", "附上面试追问清单，帮助用户准备解释简历。"],
    monetize: ["可卖 9-29 元简历检查清单。", "一对一简历精修可定价 99-399 元/份。", "网站可用免费评分表收集用户线索，再转化为精修服务。"],
    caution: "不要编造学历、公司、薪资或项目结果。简历优化的卖点应是表达更清晰，而不是造假。",
    sources: [
      { label: "OpenAI ChatGPT", url: "https://openai.com/chatgpt/" },
      { label: "Upwork AI services", url: "https://www.upwork.com/services/ai" }
    ],
  },
  {
    name: "合同检查清单",
    category: "写作",
    price: "资料包",
    tag: "接单",
    icon: "clipboard-check",
    desc: "把常见合作条款整理成检查清单，帮助自由职业者发现付款、版权和交付边界风险。",
    proof: ["AI 可以做文本摘要和风险点提取，但合同解释属于高风险场景，必须保留人工判断。", "这类资料适合做教育型内容和线索收集。"],
    useCase: ["设计、文案、视频剪辑、网站建设接单前检查", "整理客户合同中的付款节点、验收标准、修改次数", "给新手自由职业者做低价资料包"],
    steps: ["把合同拆成付款、交付、版权、保密、违约、争议解决六类。", "对每类列出红旗问题，例如先交付后付款、无限修改、版权归属不清。", "给用户输出需要追问客户的问题列表。", "提醒用户重大合同找专业律师确认。"],
    monetize: ["资料包可卖 9-39 元。", "搭配接单报价模板和验收单，做成 49-99 元自由职业入门包。", "通过网站表单收集接单人群，再卖社群或咨询。"],
    caution: "必须声明不是法律意见，不能替代律师。涉及大额合同要建议用户咨询专业人士。",
    sources: [
      { label: "OpenAI safety overview", url: "https://openai.com/safety/" },
      { label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }
    ],
  },
  {
    name: "产品图生成",
    category: "图片",
    price: "¥19起",
    tag: "电商",
    icon: "image-plus",
    desc: "用 Canva、剪映、即梦等工具生成商品场景图、海报和详情页配图，适合电商和本地商家。",
    proof: ["Canva Magic Studio 提供面向设计和营销素材的 AI 功能。", "剪映、即梦等国内工具提供图像和视频生成能力，适合中文场景和短视频生态。"],
    useCase: ["淘宝/闲鱼商品主图和场景图", "小红书种草封面", "本地店铺团购海报、菜单图、活动图"],
    steps: ["让客户提供清晰商品照片、品牌色、使用场景和禁用元素。", "生成 3 种风格：干净白底、生活方式、促销海报。", "人工检查商品主体是否变形、文字是否错误。", "按平台尺寸导出，保留可二次修改文件。"],
    monetize: ["单张图可从 29-99 元测试。", "10 张商品图打包 299-699 元。", "网站可放免费提示词，付费卖行业场景模板和代做服务。"],
    caution: "商品外观不能被 AI 改到与实物不一致；商标、肖像和版权素材要谨慎使用。",
    sources: [
      { label: "Canva Magic Studio", url: "https://www.canva.com/magic/" },
      { label: "剪映", url: "https://www.capcut.cn/" },
      { label: "即梦 AI", url: "https://jimeng.jianying.com/" }
    ],
  },
  {
    name: "批量海报工厂",
    category: "图片",
    price: "¥49/月",
    tag: "营销素材",
    icon: "palette",
    desc: "把节日、促销、课程、社群活动做成可批量替换文案和图片的海报模板。",
    proof: ["Canva 等设计工具支持模板化设计和批量营销素材制作。", "本地商家和知识付费账号长期需要促销图，复购性比单张图片更好。"],
    useCase: ["餐饮店活动海报", "课程直播预告", "社群裂变邀请图", "门店优惠券图片"],
    steps: ["先按行业做 5 个固定版式：新品、优惠、节日、直播、案例。", "每个版式准备标题、副标题、价格、二维码位置。", "用 AI 生成背景或配图，人工替换关键文字。", "交付 PNG + 可编辑模板。"],
    monetize: ["单套模板 49-99 元。", "每月 20 张海报维护服务 399-999 元。", "网站可开放免费模板预览，下载高清版或可编辑版付费。"],
    caution: "不要把二维码、价格和日期完全交给 AI 生成，必须人工确认。",
    sources: [
      { label: "Canva Magic Studio", url: "https://www.canva.com/magic/" },
      { label: "Stripe Payment Links", url: "https://docs.stripe.com/payment-links" }
    ],
  },
  {
    name: "头像与IP图生成",
    category: "图片",
    price: "免费",
    tag: "个人品牌",
    icon: "sparkles",
    desc: "为自媒体、课程老师、顾问和店主生成头像、封面风格和账号视觉规范。",
    proof: ["Midjourney、Canva、即梦等工具都能用于视觉概念生成。", "个人品牌视觉通常需要成套风格，而不是只生成一张头像。"],
    useCase: ["小红书账号头像和封面", "知识博主课程封面", "顾问个人介绍图", "社群活动主视觉"],
    steps: ["先确定人设关键词：专业、亲和、科技、年轻、极简等。", "生成 6-12 张方向图，选 1 个方向延展。", "统一颜色、字体、构图和头像裁切。", "输出头像、封面、名片、主页背景四件套。"],
    monetize: ["头像单张 29-99 元。", "个人 IP 视觉四件套 299-999 元。", "网站可用免费头像生成提示词吸引用户，再卖整套视觉包。"],
    caution: "避免模仿真实公众人物或使用未授权肖像。商业交付要确认工具授权条款。",
    sources: [
      { label: "Midjourney plans", url: "https://docs.midjourney.com/docs/plans" },
      { label: "Canva Magic Studio", url: "https://www.canva.com/magic/" }
    ],
  },
  {
    name: "短视频脚本库",
    category: "视频",
    price: "会员",
    tag: "脚本模板",
    icon: "clapperboard",
    desc: "沉淀口播、探店、带货、教程、案例拆解等脚本结构，适合做会员资料和代运营服务。",
    proof: ["Runway、剪映等视频工具降低了素材生成和剪辑门槛。", "短视频真正值钱的是选题、结构和稳定产出，不只是生成视频。"],
    useCase: ["本地商家探店脚本", "知识博主口播脚本", "带货短视频脚本", "课程切片脚本"],
    steps: ["先选脚本类型：痛点型、清单型、案例型、对比型。", "生成开头 3 秒钩子、主体三段、结尾行动号召。", "把脚本拆成画面、口播、字幕、镜头四列。", "交付时附 5 个标题和封面文案。"],
    monetize: ["单条脚本 49-199 元。", "月度 30 条脚本 999-2999 元。", "网站可卖行业脚本库会员，按月更新。"],
    caution: "不要承诺播放量；涉及广告和带货要避免夸大效果。",
    sources: [
      { label: "Runway", url: "https://runwayml.com/" },
      { label: "剪映", url: "https://www.capcut.cn/" },
      { label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }
    ],
  },
  {
    name: "字幕提取器",
    category: "视频",
    price: "免费",
    tag: "效率",
    icon: "captions",
    desc: "把视频转成字幕、摘要、标题和二次创作素材，是很适合引流的免费工具型内容。",
    proof: ["剪映、CapCut 等工具提供字幕和视频编辑能力。", "字幕提取能延伸到摘要、笔记、文章改写和多平台分发。"],
    useCase: ["课程视频整理成笔记", "直播回放提炼卖点", "短视频批量生成标题", "访谈内容转公众号文章"],
    steps: ["上传视频或音频，自动识别字幕。", "人工修正常见错字、品牌名和人名。", "让 AI 输出摘要、重点清单和标题。", "按平台改成公众号、小红书、短视频三种版本。"],
    monetize: ["免费工具引流，后面卖整理服务。", "1 小时视频整理可收 99-399 元。", "课程机构和知识博主有持续需求，可按月合作。"],
    caution: "处理客户视频要注意隐私和版权，未经授权不要公开发布。",
    sources: [
      { label: "CapCut", url: "https://www.capcut.com/" },
      { label: "剪映", url: "https://www.capcut.cn/" }
    ],
  },
  {
    name: "数字人口播",
    category: "视频",
    price: "SaaS",
    tag: "带货",
    icon: "video",
    desc: "用脚本、数字人和模板快速生成口播视频，适合本地商家、课程和带货账号测试素材。",
    proof: ["Runway 等视频 AI 工具正在降低视频生成门槛。", "数字人视频要结合真实商品和合规表达，不能只靠生成效果。"],
    useCase: ["课程介绍视频", "本地店铺优惠播报", "产品卖点讲解", "社群活动预告"],
    steps: ["先写 60-90 秒脚本，保证卖点清晰。", "选择数字人形象、背景和字幕样式。", "生成后检查口型、字幕、价格、联系方式。", "导出竖版和横版，分别用于短视频和落地页。"],
    monetize: ["单条数字人口播 99-399 元。", "商家月更 20 条可收 999-2999 元。", "网站可通过案例页收集商家线索。"],
    caution: "不要冒充真人背书；涉及广告要标清楚真实信息和限制条件。",
    sources: [
      { label: "Runway", url: "https://runwayml.com/" },
      { label: "Google Ads policies", url: "https://support.google.com/adspolicy/" }
    ],
  },
  {
    name: "自动获客助手",
    category: "运营",
    price: "SaaS",
    tag: "线索",
    icon: "workflow",
    desc: "用表单、Zapier/飞书自动化和通知，把访客变成可跟进的客户线索。",
    proof: ["Zapier 官方提供跨应用自动化和 AI 自动化能力。", "飞书多维表格、表单和自动化适合中文团队做线索管理。"],
    useCase: ["网站表单提交后自动通知微信/飞书", "客户按需求自动打标签", "资料包领取后发送跟进邮件", "赞助合作线索进入表格"],
    steps: ["设计一个只问必要信息的表单：称呼、联系方式、需求。", "提交后写入表格，自动通知负责人。", "按需求类型打标签：资料包、赞助、会员、建站。", "24 小时内自动发跟进话术。"],
    monetize: ["给商家搭一套表单 + 通知流程可收 499-1999 元。", "维护自动化按月 199-999 元。", "本站可以先收线索，后面接入 Tally、飞书或自建后端。"],
    caution: "必须保护用户联系方式，不要收集不必要的敏感信息。",
    sources: [
      { label: "Zapier AI", url: "https://zapier.com/ai" },
      { label: "飞书多维表格", url: "https://www.feishu.cn/product/base" }
    ],
  },
  {
    name: "SEO选题雷达",
    category: "运营",
    price: "会员",
    tag: "关键词",
    icon: "radar",
    desc: "把关键词、搜索意图、文章结构和推荐工具连接起来，持续做能被搜索到的内容。",
    proof: ["Google Search Central 明确建议创作有帮助、可靠、以人为本的内容。", "AdSense 审核通常也需要网站有足够原创内容和良好体验。"],
    useCase: ["AI 工具测评文章", "某行业 AI 工具清单", "教程型长尾关键词", "对比文章和替代品文章"],
    steps: ["先选一个细分人群，例如电商卖家或短视频运营。", "列 50 个长尾词：工具名 + 用法/价格/替代/教程。", "每篇文章包含真实测试、截图、优缺点和适用人群。", "在文章里自然引导资料包、会员和咨询。"],
    monetize: ["早期靠赞助位和线索，不急着上广告。", "内容稳定后申请广告联盟。", "工具测评可叠加联盟返佣、赞助测评和会员资料包。"],
    caution: "不要批量生成低质量文章；搜索流量需要持续更新和真实体验。",
    sources: [
      { label: "Google helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "AdSense eligibility", url: "https://support.google.com/adsense/answer/9724" }
    ],
  },
  {
    name: "邮件自动化模板",
    category: "运营",
    price: "¥19",
    tag: "私域",
    icon: "mail-check",
    desc: "用邮件或消息自动化，把领取资料包的人持续转化为会员、咨询或赞助客户。",
    proof: ["Zapier、飞书等工具都支持把表单、表格、邮件和通知串联起来。", "Stripe Payment Links 可以不用写支付后台，直接创建付款链接。"],
    useCase: ["资料包领取后的 3 封跟进邮件", "会员到期提醒", "赞助合作报价流程", "课程或服务的预约确认"],
    steps: ["第 1 封：发送资料包和使用方法。", "第 2 封：给一个真实案例，展示效果。", "第 3 封：提供会员/咨询/赞助入口。", "把点击和回复记录到表格，优先跟进高意向用户。"],
    monetize: ["模板包 19-49 元。", "帮客户搭自动化流程 499-1999 元。", "配合 Stripe、微信/支付宝收款码或知识付费平台完成收款。"],
    caution: "不要群发骚扰信息；邮件需要退订入口，国内私域也要尊重用户授权。",
    sources: [
      { label: "Zapier AI", url: "https://zapier.com/ai" },
      { label: "Stripe Payment Links", url: "https://docs.stripe.com/payment-links" }
    ],
  },
];

const modalCopy = {
  sponsor: { title: "申请赞助位", copy: "留下联系方式，后续可以接入真实报价、排期和付款链接。" },
  free: { title: "订阅免费更新", copy: "把新工具和教程发给订阅用户，后续转化为会员或咨询客户。" },
  business: { title: "企业合作咨询", copy: "适合工具测评、专题页、内容合作和私域导流。" },
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
  const total = visits * (conversion / 100) * 29 + sponsor * 2 + (visits / 1000) * 8;
  document.querySelector("[data-visits-value]").textContent = formatNumber(visits);
  document.querySelector("[data-conversion-value]").textContent = `${conversion.toFixed(1)}%`;
  document.querySelector("[data-sponsor-value]").textContent = currency.format(sponsor);
  document.querySelector("[data-revenue]").textContent = currency.format(total);
}

function openModal(type) {
  const modal = document.querySelector("[data-modal]");
  const content = modalCopy[type] || modalCopy.free;
  document.querySelector("[data-modal-title]").textContent = content.title;
  document.querySelector("[data-modal-copy]").innerHTML = `<p>${content.copy}</p>`;
  modal.hidden = false;
  modal.querySelector("input")?.focus();
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
  `;
  modal.hidden = false;
}

function closeModal() { document.querySelector("[data-modal]").hidden = true; }

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-menu-button]")) document.body.classList.toggle("menu-open");
  const filter = event.target.closest("[data-category]");
  if (filter) setCategory(filter.dataset.category);
  const filterLink = event.target.closest("[data-filter-link]");
  if (filterLink) setCategory(filterLink.dataset.filterLink);
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
  if (detailCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openToolDetail(detailCard.dataset.toolDetail);
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
