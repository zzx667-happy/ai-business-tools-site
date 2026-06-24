const routeData = {
  starter: {
    tag: "9.9 资料包",
    title: "先卖一份不用思考的小产品。",
    body: "用户看到 9.9，不需要开会、不需要比较、不需要问朋友，觉得有一点用就会买。这个价格的任务不是赚大钱，而是拿到第一批付款和反馈。",
    items: [
      "核心话术：少走弯路，先拿清单",
      "交付方式：加微信后发送文件或链接",
      "下一步：付款后引导加购 29 模板包",
    ],
    sideTitle: "成交重点",
    sideBody: "页面不要强调“我能帮你赚钱”，要强调“你少花时间、少买错工具、马上能用”。",
  },
  template: {
    tag: "29 模板包",
    title: "给已经付款的人一个更省事的选择。",
    body: "买过 9.9 的用户如果认可你，就更容易加购模板。这里卖的是能直接复制的沟通、报价、交付和复购话术。",
    items: [
      "适合人群：想尝试接单但不会开口的人",
      "核心内容：报价表、沟通话术、交付清单",
      "成交方式：资料包交付后顺手推荐",
    ],
    sideTitle: "成交重点",
    sideBody: "不要把 29 放在第一屏硬卖。先让用户拿到 9.9 的价值，再提示“如果你想直接接单，用这个模板包”。",
  },
  diagnosis: {
    tag: "99 诊断",
    title: "把服务做轻，不要一上来承诺复杂交付。",
    body: "99 元适合卖一次方向判断：看用户适合做什么、怎么包装、第一条售卖文案怎么写。时间要控制住，边界要清楚。",
    items: [
      "适合人群：已经想做但不知道从哪下手的人",
      "交付内容：方向建议、文案修改、3 个选题",
      "服务边界：不包结果，只给可执行方案",
    ],
    sideTitle: "成交重点",
    sideBody: "强调“帮你少绕路”，不要承诺收入。这样更真实，也更不容易引发退款和纠纷。",
  },
  build: {
    tag: "499 代搭",
    title: "499 不放在前面卖，只卖给已经明确要省事的人。",
    body: "代搭落地页、整理资料包页面、接入联系方式这类服务可以收 499，但它不是冷流量首单产品。先用低价包筛选有需求的人。",
    items: [
      "适合人群：已经有产品但不会搭页面的人",
      "交付内容：单页文案、页面结构、联系入口",
      "成交方式：从 99 诊断后自然升级",
    ],
    sideTitle: "成交重点",
    sideBody: "499 不是不能卖，是不能一见面就卖。先建立信任，再卖省事服务。",
  },
};

const mainOffer = {
  name: "AI 工具避坑包",
  price: "¥9.9",
  upgrade: "¥29 模板包 / ¥99 方向诊断 / ¥499 代搭",
  wechat: "w2582479036",
};

function formatMoney(value) {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: value % 1 === 0 ? 0 : 1,
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
  const interest = String(formData.get("interest") || "9.9 AI 工具避坑包");
  const budget = String(formData.get("budget") || "未填写");
  const message = String(formData.get("message") || "未填写");

  return [
    "购买信息",
    "域名：zhiyingnav.com",
    `联系人：${name}`,
    `联系方式：${contact}`,
    `想买内容：${interest}`,
    `当前主推：${mainOffer.name}（${mainOffer.price}）`,
    `可选升级：${mainOffer.upgrade}`,
    `联系微信：${mainOffer.wechat}`,
    `备注：${budget}`,
    `说明：${message}`,
    "",
    "购买方式：加微信 w2582479036，发送“9.9”，付款后领取资料包。",
  ].join("\n");
}

async function copyBrief() {
  const brief = document.getElementById("brief");
  try {
    await navigator.clipboard.writeText(brief.value);
    setStatus("信息已复制，可以直接发给微信。");
  } catch {
    brief.focus();
    brief.select();
    setStatus("请手动复制购买信息。");
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
    setStatus("购买信息已生成，复制后发给微信即可。");
  });

  document.getElementById("copyBrief").addEventListener("click", copyBrief);

  setRoute("starter");
  updateCalculator();
  syncBrief();
});
