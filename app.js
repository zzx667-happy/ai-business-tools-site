const tools = [
  { name: "文案快写", category: "写作", price: "免费试用", tag: "爆文标题", icon: "pen-line", desc: "生成小红书、公众号、短视频脚本的标题和正文，适合内容站做教程流量。", url: "#guides" },
  { name: "简历优化器", category: "写作", price: "¥9下载", tag: "职场", icon: "file-user", desc: "根据岗位 JD 改写简历关键词，可以做求职资料包和简历修改服务。", url: "#kits" },
  { name: "合同检查清单", category: "写作", price: "资料包", tag: "接单", icon: "clipboard-check", desc: "整理合作合同里的常见风险点，适合自由职业者和小团队使用。", url: "#kits" },
  { name: "产品图生成", category: "图片", price: "¥19起", tag: "电商", icon: "image-plus", desc: "上传商品图后生成生活方式场景图，可做商品图制作服务和工具测评。", url: "#guides" },
  { name: "批量海报工厂", category: "图片", price: "¥49/月", tag: "营销素材", icon: "palette", desc: "一次生成多套活动海报，适合商家活动、社群裂变和朋友圈海报。", url: "#kits" },
  { name: "头像与IP图生成", category: "图片", price: "免费", tag: "个人品牌", icon: "sparkles", desc: "生成个人头像、课程封面和账号视觉，用来包装账号和服务。", url: "#tools" },
  { name: "短视频脚本库", category: "视频", price: "会员", tag: "脚本模板", icon: "clapperboard", desc: "按行业生成口播结构、分镜和发布标题，是会员资料包的典型内容。", url: "#kits" },
  { name: "字幕提取器", category: "视频", price: "免费", tag: "效率", icon: "captions", desc: "从视频中提取字幕和摘要，吸引短视频运营人群反复使用。", url: "#tools" },
  { name: "数字人口播", category: "视频", price: "SaaS", tag: "带货", icon: "video", desc: "用文案生成口播视频，适合知识付费、带货和本地商家宣传。", url: "#contact" },
  { name: "自动获客助手", category: "运营", price: "SaaS", tag: "线索", icon: "workflow", desc: "把表单、邮件和微信通知串起来，适合卖给本地商家或小团队。", url: "#contact" },
  { name: "SEO选题雷达", category: "运营", price: "会员", tag: "关键词", icon: "radar", desc: "把关键词、竞争度和文章模板合并输出，帮助网站持续更新内容。", url: "#guides" },
  { name: "邮件自动化模板", category: "运营", price: "¥19", tag: "私域", icon: "mail-check", desc: "给订阅用户自动发送教程、资料包和转化邮件。", url: "#kits" },
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
      <article class="tool-card">
        <header>
          <span class="tool-icon"><i data-lucide="${tool.icon}"></i></span>
          <button class="save-button ${saved ? "saved" : ""}" type="button" aria-label="收藏${tool.name}" data-save="${tool.name}"><i data-lucide="star"></i></button>
        </header>
        <h3>${tool.name}</h3>
        <p>${tool.desc}</p>
        <div class="tool-meta"><span>${tool.category}</span><span>${tool.price}</span><span>${tool.tag}</span></div>
        <a href="${tool.url}">查看教程或变现方式</a>
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
  document.querySelector("[data-modal-copy]").textContent = content.copy;
  modal.hidden = false;
  modal.querySelector("input").focus();
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
    const name = saveButton.dataset.save;
    state.saved.has(name) ? state.saved.delete(name) : state.saved.add(name);
    localStorage.setItem("savedTools", JSON.stringify([...state.saved]));
    renderTools();
  }
  if (event.target.closest("[data-reset]")) {
    state.query = "";
    document.querySelector("[data-search]").value = "";
    setCategory("全部");
  }
  const modalTrigger = event.target.closest("[data-open-modal]");
  if (modalTrigger) openModal(modalTrigger.dataset.openModal);
  if (event.target.closest("[data-close-modal]")) closeModal();
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
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });

renderTools();
updateRevenue();
renderIcons();
