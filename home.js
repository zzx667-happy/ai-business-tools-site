const search = document.querySelector('#toolSearch');
const chips = [...document.querySelectorAll('.chip')];
const cards = [...document.querySelectorAll('.tool-card')];
const empty = document.querySelector('#emptyState');
let filter = 'all';

function updateTools() {
  const query = (search?.value || '').trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const matchFilter = filter === 'all' || card.dataset.category.includes(filter);
    const matchQuery = !query || `${card.textContent} ${card.dataset.keywords}`.toLowerCase().includes(query);
    card.hidden = !(matchFilter && matchQuery);
    if (!card.hidden) visible++;
  });
  if (empty) empty.hidden = visible > 0;
}

chips.forEach(chip => chip.addEventListener('click', () => {
  filter = chip.dataset.filter;
  chips.forEach(item => item.classList.toggle('active', item === chip));
  updateTools();
}));
search?.addEventListener('input', updateTools);
document.querySelectorAll('[data-set-filter]').forEach(link => link.addEventListener('click', () => {
  filter = link.dataset.setFilter;
  chips.forEach(item => item.classList.toggle('active', item.dataset.filter === filter));
  updateTools();
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const counterObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  const el = entry.target; const target = Number(el.dataset.count); const start = performance.now();
  const tick = now => { const p = Math.min((now - start) / 900, 1); el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick); counterObserver.unobserve(el);
}), { threshold: .5 });
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelector('.hero-console')?.addEventListener('pointermove', e => {
    const box = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - box.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - box.top}px`);
  });
}
