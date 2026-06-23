const kits = {
  saving: {
    title: "省钱采购表",
    summary: "适合做第一款低价资料包：预算分档、参数避坑、替代品、更新时间和采购备注。",
    price: "¥9",
    paymentKey: "savingKit",
    included: ["办公数码采购表", "家庭刚需采购表", "推荐理由和避坑字段", "可复制表格结构"],
  },
  career: {
    title: "简历面试包",
    summary: "面向求职人群：简历模板、岗位关键词、面试题、自我介绍和项目经历写法。",
    price: "¥19",
    paymentKey: "careerKit",
    included: ["一页简历模板", "岗位关键词提取表", "20 个面试问题", "自我介绍结构"],
  },
  business: {
    title: "商家获客表",
    summary: "面向本地商家服务：线索字段、报价模板、回访话术和表单示例。",
    price: "¥29",
    paymentKey: "businessKit",
    included: ["线索收集字段", "报价话术", "回访记录表", "表单页面结构"],
  },
  content: {
    title: "标题脚本库",
    summary: "面向内容创作者：标题、开头钩子、脚本结构和海报文案模板。",
    price: "¥9",
    paymentKey: "contentKit",
    included: ["100 条标题模板", "30 条脚本结构", "10 套海报文案", "改写示例"],
  },
};

function getKit() {
  const params = new URLSearchParams(window.location.search);
  return kits[params.get("kit")] || kits.saving;
}

const kit = getKit();
const links = window.ZHIYING_LINKS || {};
const paymentUrl = links.payments?.[kit.paymentKey] || "";

document.querySelector("[data-kit-title]").textContent = kit.title;
document.querySelector("[data-kit-summary]").textContent = kit.summary;
document.querySelector("[data-kit-price]").textContent = kit.price;
document.querySelector("[data-kit-included]").innerHTML = `<h2>包含内容</h2><ul>${kit.included.map((item) => `<li>${item}</li>`).join("")}</ul>`;

const buyLink = document.querySelector("[data-buy-link]");
if (paymentUrl) {
  buyLink.href = paymentUrl;
  buyLink.target = "_blank";
  buyLink.rel = "noopener";
  buyLink.innerHTML = '<i data-lucide="shopping-bag"></i>去付款平台购买';
} else {
  buyLink.href = `./lead.html?interest=${encodeURIComponent(`${kit.title}购买`)}`;
  buyLink.innerHTML = '<i data-lucide="message-square"></i>先登记购买需求';
}

window.lucide && window.lucide.createIcons();
