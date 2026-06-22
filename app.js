const tools = [
  {
    name: "文案快写",
    category: "写作",
    price: "免费试用",
    tag: "爆文标题",
    icon: "pen-line",
    desc: "生成小红书、公众号、短视频脚本的标题和正文，适合内容站做教程流量。",
    url: "#contact",
  },
  {
    name: "产品图生成",
    category: "图片",
    price: "¥19起",
    tag: "电商",
    icon: "image-plus",
    desc: "上传商品图后生成生活方式场景图，可做测评文章和联盟推荐。",
    url: "#contact",
  },
  {
    name: "短视频脚本库",
    category: "视频",
    price: "会员",
    tag: "脚本模板",
    icon: "clapperboard",
    desc: "按行业生成口播结构、分镜和发布标题，是会员资料包的典型内容。",
    url: "#pricing",
  },
  {
    name: "自动获客助手",
    category: "运营",
    price: "SaaS",
    tag: "线索",
    icon: "workflow",
    desc: "把表单、邮件和企微通知串起来，适合卖给本地商家或小团队。",
    url: "#contact",
  },
  {
    name: "简历优化器",
    category: "写作",
    price: "赞助",
    tag: "职场",
    icon: "file-user",
    desc: "根据岗位 JD 改写简历关键词，适合做 SEO 长尾内容。",
    url: "#tools",
  },
  {
    name: "批量海报工厂",
    category: "图片",
    price: "¥49/月",
    tag: "营销素材",
    icon: "palette",
    desc: "一次生成多套活动海报，能延伸出模板下载和定制服务。",
    url: "#pricing",
  },
  {
    name: "字幕提取器",
    category: "视频",
    price: "免费",
    tag: "效率",
    icon: "captions",
    desc: "从视频中提取字幕和摘要，吸引短视频运营人群反复使用。",
    url: "#tools",
  },
  {
    name: "SEO选题雷达",
    category: "运营",
    price: "会员",
    tag: "关键词",
    icon: "radar",
    desc: "把关键词、竞争度和文章模板合并输出，帮助网站持续更新内容。",
    url: "#pricing",
  },
  {
    name: "合同检查清单",
    category: "写作",
    price: "¥9下载",
    tag: "资料包",
    icon: "clipboard-check",
    desc: "提供常见合作合同风险提示，可做低价数字产品入口。",
    url: "#pricing",
  },
];

const modalCopy = {
  sponsor: {
    title: "申请赞助位",
    copy: "留下联系方式，后续可以接入真实报价、排期和付款链接。",
  },
  free: {
    title: "订阅免费更新",
    copy: "把新工具和教程发给订阅用户，后续转化为会员或咨询客户。",
  },
  business: {
    title: "企业合作咨询",
    copy: "适合工具测评、专题页、内容合作和私域导流。",
  },
};

const state = {
  category: "全部",
  query: "",
  saved: new Set(JSON.parse(localStorage.getItem("savedTools") || "[]")),
};

const currency = new Intl.NumberFormat("zh-CN", {
  style: "currency",
  currency: "CNY",
  maximumFractionDigits: 0,
});

function formatNumber(value) {
  return new Intl.NumberFormat("zh-CN").format(Math.round(value));
}

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderTools() {
  const grid = document.querySelector("[data-tool-grid]");
  const empty = document.querySelector("[data-empty]");
  const filtered = tools.filter((tool) => {
    const inCategory = state.category === "全部" || tool.category === state.category;
    const text = `${tool.name} ${tool.category} ${tool.tag} ${tool.desc}`.toLowerCase();
    return inCategory && text.includes(state.query.toLowerCase());
  });

  grid.innerHTML = filtered
    .map((tool) => {
      const saved = state.saved.has(tool.name);
      return `
        <article class="tool-card">
          <header>
            <span class="tool-icon"><i data-lucide="${tool.icon}"></i></span>
            <button class="save-button ${saved ? "saved" : ""}" type="button" aria-label="收藏${tool.name}" data-save="${tool.name}">
              <i data-lucide="star"></i>
            </button>
          </header>
          <h3>${tool.name}</h3>
          <p>${tool.desc}</p>
          <div class="tool-meta">
            <span>${tool.category}</span>
            <span>${tool.price}</span>
            <span>${tool.tag}</span>
          </div>
          <a href="${tool.url}">查看变现方式</a>
        </article>
      `;
    })
    .join("");

  empty.hidden = filtered.length > 0;
  renderIcons();
}

function updateRevenue() {
  const visits = Number(document.querySelector("[data-visits]").value);
  const conversion = Number(document.querySelector("[data-conversion]").value);
  const sponsor = Number(document.querySelector("[data-sponsor]").value);
  const members = visits * (conversion / 100);
  const memberRevenue = members * 29;
  const adRevenue = (visits / 1000) * 8;
  const total = memberRevenue + sponsor * 2 + adRevenue;

  document.querySelector("[data-visits-value]").textContent = formatNumber(visits);
  document.querySelector("[data-conversion-value]").textContent = `${conversion.toFixed(1)}%`;
  document.querySelector("[data-sponsor-value]").textContent = currency.format(sponsor);
  document.querySelector("[data-revenue]").textContent = currency.format(total);
}

function animateCounters() {
  document.querySelectorAll("[data-count]").forEach((node) => {
    const target = Number(node.dataset.count);
    node.textContent = target;
  });
}

function openModal(type) {
  const modal = document.querySelector("[data-modal]");
  const content = modalCopy[type] || modalCopy.free;
  document.querySelector("[data-modal-title]").textContent = content.title;
  document.querySelector("[data-modal-copy]").textContent = content.copy;
  modal.hidden = false;
  modal.querySelector("input").focus();
}

function closeModal() {
  document.querySelector("[data-modal]").hidden = true;
}

document.addEventListener("click", (event) => {
  const menuButton = event.target.closest("[data-menu-button]");
  if (menuButton) {
    document.body.classList.toggle("menu-open");
  }

  const filter = event.target.closest("[data-category]");
  if (filter) {
    state.category = filter.dataset.category;
    document.querySelectorAll("[data-category]").forEach((button) => {
      button.classList.toggle("active", button === filter);
    });
    renderTools();
  }

  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const name = saveButton.dataset.save;
    if (state.saved.has(name)) {
      state.saved.delete(name);
    } else {
      state.saved.add(name);
    }
    localStorage.setItem("savedTools", JSON.stringify([...state.saved]));
    renderTools();
  }

  const reset = event.target.closest("[data-reset]");
  if (reset) {
    state.category = "全部";
    state.query = "";
    document.querySelector("[data-search]").value = "";
    document.querySelectorAll("[data-category]").forEach((button) => {
      button.classList.toggle("active", button.dataset.category === "全部");
    });
    renderTools();
  }

  const modalTrigger = event.target.closest("[data-open-modal]");
  if (modalTrigger) {
    openModal(modalTrigger.dataset.openModal);
  }

  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

document.querySelector("[data-search]").addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderTools();
});

document.querySelectorAll("[data-visits], [data-conversion], [data-sponsor]").forEach((input) => {
  input.addEventListener("input", updateRevenue);
});

document.querySelector("[data-lead-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem("latestLead", JSON.stringify({ ...data, createdAt: new Date().toISOString() }));
  document.querySelector("[data-form-status]").textContent = "已保存到本地示例数据，正式上线后接入表单服务即可。";
  form.reset();
});

document.querySelector("[data-mini-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const value = new FormData(event.currentTarget).get("contact");
  localStorage.setItem("quickLead", JSON.stringify({ contact: value, createdAt: new Date().toISOString() }));
  event.currentTarget.reset();
  closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

renderTools();
updateRevenue();
animateCounters();
renderIcons();
