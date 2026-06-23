const links = window.ZHIYING_LINKS || {};
const params = new URLSearchParams(window.location.search);
const incomingInterest = params.get("interest");
const externalForm = links.lead?.formUrl || "";

if (externalForm) {
  window.location.replace(externalForm);
} else {
  const interest = document.querySelector("[data-interest]");
  if (incomingInterest) {
    const option = document.createElement("option");
    option.value = incomingInterest;
    option.textContent = incomingInterest;
    interest.prepend(option);
    interest.value = incomingInterest;
  }

  document.querySelector("[data-lead-page-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    localStorage.setItem("latestLeadPageSubmission", JSON.stringify({ ...data, createdAt: new Date().toISOString() }));
    document.querySelector("[data-lead-page-status]").textContent = "已保存到本机演示数据。正式收件前，请在 setup.html 按步骤配置真实表单链接。";
    event.currentTarget.reset();
  });
}

window.lucide && window.lucide.createIcons();
