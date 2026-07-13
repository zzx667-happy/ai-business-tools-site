const searchInput = document.querySelector("#toolSearch");
const chips = Array.from(document.querySelectorAll(".chip"));
const cards = Array.from(document.querySelectorAll(".tool-card"));
const emptyState = document.querySelector("#emptyState");

let activeFilter = "all";

function normalize(value) {
  return value.trim().toLowerCase();
}

function updateCards() {
  const query = normalize(searchInput.value);
  let visibleCount = 0;

  cards.forEach((card) => {
    const categories = card.dataset.category || "";
    const keywords = `${card.textContent} ${card.dataset.keywords || ""}`.toLowerCase();
    const categoryMatch = activeFilter === "all" || categories.includes(activeFilter);
    const queryMatch = !query || keywords.includes(query);
    const isVisible = categoryMatch && queryMatch;

    card.classList.toggle("hidden", !isVisible);
    if (isVisible) {
      visibleCount += 1;
    }
  });

  emptyState.hidden = visibleCount > 0;
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;
    chips.forEach((item) => item.classList.toggle("active", item === chip));
    updateCards();
  });
});

searchInput.addEventListener("input", updateCards);
updateCards();
