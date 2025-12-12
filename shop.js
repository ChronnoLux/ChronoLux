// shop.js

// Load manual products
let PRODUCTS = JSON.parse(localStorage.getItem("PRODUCTS_DATA")) || [];

let CART = JSON.parse(localStorage.getItem('CART_ITEMS') || '[]');
let FAVS = JSON.parse(localStorage.getItem('FAV_ITEMS') || '[]');

function saveCart() {
  localStorage.setItem('CART_ITEMS', JSON.stringify(CART));
  updateCounts();
}

function saveFavs() {
  localStorage.setItem('FAV_ITEMS', JSON.stringify(FAVS));
  updateCounts();
}

function updateCounts() {
  document.querySelectorAll('#cart-count, #cart-count-2').forEach(e => e.textContent = CART.length);
  document.querySelectorAll('#fav-count, #fav-count-2').forEach(e => e.textContent = FAVS.length);
}
updateCounts();

// Render shop grid
const grid = document.getElementById('product-grid');
function render(list) {
  if (!grid) return;
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="click-area" title="View ${p.name}">
        <img src="${p.img}" alt="${p.name}" />
        <h3>${escapeHtml(p.name)}</h3>
        <p><strong>$${p.price}</strong></p>
      </div>
      <div style="display:flex;gap:10px;margin-top:10px;">
        <button class="buy-btn inline-buy">Shop Now</button>
        <button class="small-btn fav-inline">${FAVS.includes(p.id) ? '★' : '☆'} Fav</button>
      </div>
    `;
    card.querySelector('.click-area').addEventListener('click', () => window.location.href = `product.html?id=${encodeURIComponent(p.id)}`);
    card.querySelector('.inline-buy').addEventListener('click', () => window.location.href = `payment.html?id=${encodeURIComponent(p.id)}`);
    card.querySelector('.fav-inline').addEventListener('click', () => {
      if (!FAVS.includes(p.id)) FAVS.push(p.id);
      else FAVS = FAVS.filter(x => x !== p.id);
      saveFavs();
      render(currentFilteredList());
    });
    grid.appendChild(card);
  });
}

// Basic Filters
let currentFilters = { gender: "all", brand: "all", type: "all", price: "all" };
let tempFilters = { ...currentFilters };

function currentFilteredList() {
  let res = [...PRODUCTS];
  if (currentFilters.gender !== "all") res = res.filter(p => p.gender === currentFilters.gender);
  if (currentFilters.brand !== "all") res = res.filter(p => p.brand === currentFilters.brand);
  if (currentFilters.type !== "all") res = res.filter(p => p.type === currentFilters.type);
  if (currentFilters.price === "low") res.sort((a, b) => a.price - b.price);
  if (currentFilters.price === "high") res.sort((a, b) => b.price - a.price);
  return res;
}

// Filter UI
document.getElementById('filter-btn')?.addEventListener('click', () => document.getElementById('sidebar')?.classList.toggle('active'));
document.getElementById('apply-filters')?.addEventListener('click', () => {
  currentFilters = { ...tempFilters };
  render(currentFilteredList());
  document.getElementById('sidebar')?.classList.remove('active');
});
document.getElementById('reset-filters')?.addEventListener('click', () => {
  tempFilters = { gender: 'all', brand: 'all', type: 'all', price: 'all' };
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  currentFilters = { ...tempFilters };
  render(currentFilteredList());
  document.getElementById('sidebar')?.classList.remove('active');
});

// Load page
render(currentFilteredList());

// Helper
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[c]);
}

