const deals = [
  {
    key: "monitorStand",
    icon: "monitor-up",
    title: "显示器支架",
    intent: "适合长时间办公、想释放桌面空间的人。",
    search: "显示器支架 升降",
    choose: ["确认显示器是否支持 VESA 孔位。", "看承重范围，别只看最低价。", "桌面太薄或玻璃桌面要谨慎。"],
    avoid: "不要买承重不明、夹具太短、售后评价差的款。",
  },
  {
    key: "wirelessMouse",
    icon: "mouse",
    title: "无线鼠标",
    intent: "适合办公、出差和笔记本用户。",
    search: "无线鼠标 静音 充电",
    choose: ["看手型大小和重量。", "办公优先静音、续航和售后。", "游戏用户再考虑高回报率。"],
    avoid: "不要只看 DPI，高 DPI 不等于办公体验好。",
  },
  {
    key: "mechanicalKeyboard",
    icon: "keyboard",
    title: "机械键盘",
    intent: "适合文字输入多、想提升桌面体验的人。",
    search: "机械键盘 办公 静音",
    choose: ["办公优先静音轴或线性轴。", "确认配列：87 键、98 键、全尺寸。", "看连接方式：有线、蓝牙、2.4G。"],
    avoid: "办公室不建议买声音太大的青轴。",
  },
  {
    key: "usbCHub",
    icon: "cable",
    title: "USB-C 扩展坞",
    intent: "适合轻薄本外接显示器、U盘、网线和充电。",
    search: "USB-C 扩展坞 HDMI PD",
    choose: ["确认电脑接口支持视频输出。", "需要充电就看 PD 功率。", "外接 4K 显示器要看刷新率。"],
    avoid: "不要默认所有 Type-C 都能接显示器。",
  },
  {
    key: "laptopStand",
    icon: "laptop",
    title: "笔记本支架",
    intent: "适合颈椎不舒服、需要外接键鼠的人。",
    search: "笔记本支架 折叠 升降",
    choose: ["看稳定性和防滑垫。", "经常出差选折叠款。", "固定桌面选升降款。"],
    avoid: "太轻的支架容易晃，影响打字和散热。",
  },
  {
    key: "labelPrinter",
    icon: "printer",
    title: "标签打印机",
    intent: "适合小店、仓库、手作和家庭收纳。",
    search: "标签打印机 热敏 蓝牙",
    choose: ["确认标签纸规格和耗材价格。", "小店要看连续打印稳定性。", "手机编辑是否方便很重要。"],
    avoid: "不要只看机器价格，耗材长期成本更关键。",
  },
  {
    key: "microphone",
    icon: "mic",
    title: "无线领夹麦",
    intent: "适合短视频口播、课程录制和直播。",
    search: "领夹麦 无线 降噪",
    choose: ["确认手机接口：Type-C、Lightning 或相机。", "看降噪、续航和收纳盒。", "室外拍摄要重视抗风噪。"],
    avoid: "不要只看宣传距离，真实收音环境更重要。",
  },
  {
    key: "fillLight",
    icon: "sun",
    title: "补光灯",
    intent: "适合直播、拍商品图、面试视频和网课。",
    search: "补光灯 桌面 显色",
    choose: ["桌面用小型面板灯或环形灯。", "拍商品图看亮度和显色指数。", "直播要看支架稳定性。"],
    avoid: "不要买支架太软、亮度不可调的款。",
  },
];

const links = window.ZHIYING_LINKS || {};
const affiliate = links.affiliate || {};

function getTarget(item) {
  const configured = affiliate[item.key];
  if (configured) return { href: configured, label: "查看推荐入口", external: true };
  return { href: "#", label: "先登录平台拿链接", external: false, needsLogin: true };
}

document.querySelector("[data-deal-list]").innerHTML = deals.map((item, index) => {
  const target = getTarget(item);
  const attrs = target.external ? ' target="_blank" rel="noopener sponsored"' : "";
  const control = target.needsLogin
    ? `<button class="primary-action full deal-action" type="button" data-open-login-modal data-item="${item.title}"><i data-lucide="shopping-bag"></i>${target.label}</button>`
    : `<a class="primary-action full" href="${target.href}"${attrs}><i data-lucide="shopping-bag"></i>${target.label}</a>`;
  return `
    <article class="deal-card">
      <div class="deal-card-head">
        <span class="rank-no">${String(index + 1).padStart(2, "0")}</span>
        <i data-lucide="${item.icon}"></i>
      </div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.intent}</p>
      </div>
      <div class="deal-search"><span>建议搜索</span><strong>${item.search}</strong></div>
      <section><h4>选择标准</h4><ul>${item.choose.map((text) => `<li>${text}</li>`).join("")}</ul></section>
      <div class="detail-warning"><strong>避坑：</strong>${item.avoid}</div>
      ${control}
    </article>
  `;
}).join("");

function openLoginModal() {
  const modal = document.querySelector("[data-login-modal]");
  if (modal) modal.hidden = false;
}

function closeLoginModal() {
  const modal = document.querySelector("[data-login-modal]");
  if (modal) modal.hidden = true;
}

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-open-login-modal]")) openLoginModal();
  if (event.target.closest("[data-close-login-modal]")) closeLoginModal();
});

window.addEventListener("DOMContentLoaded", () => {
  window.lucide && window.lucide.createIcons();
});
