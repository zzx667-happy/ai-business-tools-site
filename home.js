const routeData = {
  affiliate: {
    tag: "返佣清单",
    title: "围绕“用户准备买什么”写内容。",
    body:
      "选品、替代方案、避坑点、价格区间、适合谁，不适合谁。用户进入比较阶段后，返佣会比泛内容更容易转化。",
    items: [
      "内容类型：对比、榜单、清单、避坑",
      "收入来源：联盟推广、工具推广、品牌合作",
      "下一步：先上 10 篇高意图文章",
    ],
    sideTitle: "落地动作",
    sideBody: "先接上联盟链接，再补真实测评和替代推荐，最后做专题页聚合。",
  },
  product: {
    tag: "资料包",
    title: "做 9 到 49 元的小额数字产品。",
    body:
      "把简历模板、面试题、报价单、脚本库、表格模板拆成清楚的包，先验证是否有人愿意付费。",
    items: [
      "内容类型：模板、清单、表格、脚本",
      "收入来源：直接购买、会员、加购服务",
      "下一步：先做 1 个低价包，再做升级版",
    ],
    sideTitle: "落地动作",
    sideBody: "把付款页和交付流程先跑通，再考虑做会员或者定制化版本。",
  },
  lead: {
    tag: "线索服务",
    title: "给本地商家做落地页和表单。",
    body:
      "装修、家政、美业、维修、教育这类需求都适合做线索页，项目收费或按月维护都能成立。",
    items: [
      "内容类型：落地页、表单、通知、回访流程",
      "收入来源：项目费、月费、维护费",
      "下一步：先拿 3 个行业样板页",
    ],
    sideTitle: "落地动作",
    sideBody: "先卖服务再做内容，现金流会更快。内容反过来给服务导流。",
  },
  sponsor: {
    tag: "赞助位",
    title: "等有稳定访问后再接广告和赞助。",
    body:
      "赞助位适合工具、SaaS、课程和本地服务，但必须把商业关系标注清楚，别混成普通推荐。",
    items: [
      "内容类型：首页位、专题页位、侧栏位",
      "收入来源：固定月费、包周、包专题",
      "下一步：先把访问量和停留时间做起来",
    ],
    sideTitle: "落地动作",
    sideBody: "当网站有了稳定访问，再谈广告和赞助，议价会更好。",
  },
};

function formatMoney(value) {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value) {
  return new Intl.NumberFormat("zh-CN").format(value);
}

function setRoute(route) {
  const data = routeData[route];
  if (!data) return;

  document.querySelectorAll(".route-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.route === route);
  });

  const panel = document.querySelector("[data-route-panel]");
  panel.innerHTML = `
    <div>
      <p class="panel-tag">${data.tag}</p>
      <h3>${data.title}</h3>
      <p>${data.body}</p>
      <ul>${data.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <aside class="route-side">
      <strong>${data.sideTitle}</strong>
      <p>${data.sideBody}</p>
    </aside>
  `;
}

function updateCalculator() {
  const visits = Number(document.getElementById("visits").value);
  const conversion = Number(document.getElementById("conversion").value);
  const order = Number(document.getElementById("order").value);
  const sponsor = Number(document.getElementById("sponsor").value);

  const paidRevenue = visits * (conversion / 100) * order;
  const total = paidRevenue + sponsor;

  document.querySelector("[data-visits-value]").textContent = formatNumber(visits);
  document.querySelector("[data-conversion-value]").textContent = `${conversion.toFixed(1)}%`;
  document.querySelector("[data-order-value]").textContent = formatMoney(order);
  document.querySelector("[data-sponsor-value]").textContent = formatMoney(sponsor);
  document.querySelector("[data-revenue]").textContent = formatMoney(total);
}

function buildBrief() {
  const form = document.getElementById("coopForm");
  const formData = new FormData(form);

  const name = String(formData.get("name") || "未填写");
  const contact = String(formData.get("contact") || "未填写");
  const interest = String(formData.get("interest") || "未填写");
  const budget = String(formData.get("budget") || "未填写");
  const message = String(formData.get("message") || "未填写");

  return [
    "合作摘要",
    `域名：zhiyingnav.com`,
    `联系人：${name}`,
    `联系方式：${contact}`,
    `合作方向：${interest}`,
    `预算或报价：${budget}`,
    `说明：${message}`,
    "",
    "建议下一步：先确认链接、价格、交付方式和商业披露方式。",
  ].join("\n");
}

async function copyBrief() {
  const brief = document.getElementById("brief");
  try {
    await navigator.clipboard.writeText(brief.value);
    setStatus("摘要已复制。");
  } catch {
    brief.focus();
    brief.select();
    setStatus("请手动复制摘要。");
  }
}

function setStatus(message) {
  document.getElementById("formStatus").textContent = message;
}

function syncBrief() {
  const brief = document.getElementById("brief");
  brief.value = buildBrief();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".route-tab").forEach((button) => {
    button.addEventListener("click", () => setRoute(button.dataset.route));
  });

  ["visits", "conversion", "order", "sponsor"].forEach((id) => {
    document.getElementById(id).addEventListener("input", updateCalculator);
  });

  const form = document.getElementById("coopForm");
  form.addEventListener("input", syncBrief);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    syncBrief();
    setStatus("合作摘要已生成，可直接复制发送。");
  });

  document.getElementById("copyBrief").addEventListener("click", copyBrief);

  setRoute("affiliate");
  updateCalculator();
  syncBrief();
});
