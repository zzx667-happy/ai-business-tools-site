const routeData = {
  tools: {
    tag: "选工具",
    title: "先知道哪些工具值得试，哪些可以暂时不用。",
    body: "资料包会按使用场景列出工具，帮你快速判断自己现在该用哪一类。",
    items: [
      "适合 AI 新手",
      "适合想节省试错时间的人",
      "适合不想乱开会员的人",
    ],
    sideTitle: "你能得到",
    sideBody: "一份更清楚的工具选择顺序，避免一上来就收藏一堆用不上的链接。",
  },
  writing: {
    tag: "写内容",
    title: "用提示词更快写出初稿，再按自己的风格修改。",
    body: "资料包包含常用写作提示词，适合写朋友圈、小红书文案、产品介绍、短视频脚本和学习笔记。",
    items: [
      "内容初稿提示词",
      "标题和卖点提示词",
      "改写和润色提示词",
    ],
    sideTitle: "你能得到",
    sideBody: "不是让 AI 替你思考，而是先帮你把空白页面填起来，再自己判断和修改。",
  },
  office: {
    tag: "做办公",
    title: "把 AI 用在表格、PPT、总结和日常办公上。",
    body: "适合需要处理文字、会议纪要、表格思路、PPT 大纲和邮件回复的人。",
    items: [
      "办公工具推荐",
      "总结和提炼提示词",
      "表格处理思路",
    ],
    sideTitle: "你能得到",
    sideBody: "更快找到适合办公场景的工具，不用把时间浪费在无效尝试上。",
  },
  freelance: {
    tag: "接单准备",
    title: "先把介绍、报价和交付流程准备清楚。",
    body: "如果你想尝试用 AI 辅助接单，资料包里会提供基础话术和检查清单，方便你先搭起框架。",
    items: [
      "服务介绍模板",
      "报价说明参考",
      "交付检查清单",
    ],
    sideTitle: "你能得到",
    sideBody: "先把沟通和交付讲清楚，减少客户反复追问，也减少自己临时整理的压力。",
  },
};

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

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    setStatus(successMessage);
  } catch {
    setStatus("复制失败，请手动复制。");
  }
}

function setStatus(message) {
  const status = document.getElementById("formStatus");
  if (status) status.textContent = message;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".route-tab").forEach((button) => {
    button.addEventListener("click", () => setRoute(button.dataset.route));
  });

  document.getElementById("copyWechat")?.addEventListener("click", () => {
    const value = document.getElementById("wechatId").value;
    copyText(value, "微信号已复制。");
  });

  document.getElementById("copyMessage")?.addEventListener("click", () => {
    const value = document.getElementById("buyMessage").value;
    copyText(value, "购买话术已复制。");
  });

  setRoute("tools");
});
