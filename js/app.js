/* ─── PRODUCT DATA ──────────────────────────────────────────── */
const PRODUCTS = [
  { id:1,  brand:'Nike',        name:'Air Force 1 Low',    price:180, oldPrice:null, badge:'new',     img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', urgency:'¡Solo quedan 3 pares!' },
  { id:2,  brand:'Adidas',      name:'Ultraboost 23',      price:200, oldPrice:260,  badge:'sale',    img:'https://images.unsplash.com/photo-1542219550-cef5b2618bfd?w=500&q=80', urgency:'5 personas lo están viendo' },
  { id:3,  brand:'Puma',        name:'RS-X Bold',          price:140, oldPrice:null, badge:'new',     img:'https://images.unsplash.com/photo-1595777707802-e2e1e7a2b288?w=500&q=80', urgency:null },
  { id:4,  brand:'Converse',    name:'Chuck 70 Hi',        price:110, oldPrice:null, badge:'limited', img:'https://images.unsplash.com/photo-1608231387042-ec3aa5b39601?w=500&q=80', urgency:'¡Últimas unidades!' },
  { id:5,  brand:'Nike',        name:'Air Max 270',        price:210, oldPrice:250,  badge:'sale',    img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', urgency:null },
  { id:6,  brand:'Fila',        name:'Disruptor 2',        price:90,  oldPrice:120,  badge:'sale',    img:'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80', urgency:null },
  { id:7,  brand:'DC Shoes',    name:'Pure Skate',         price:100, oldPrice:null, badge:'new',     img:'https://images.unsplash.com/photo-1600185365926-19c6694ce3db?w=500&q=80', urgency:'¡Solo quedan 2 pares!' },
  { id:8,  brand:'New Balance', name:'990v5 Made in USA',  price:290, oldPrice:null, badge:'limited', img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', urgency:'Edición limitada' },
];

const BESTSELLERS = [
  { id:9,  brand:'Nike',        name:'Air Jordan 1 Retro', price:320, oldPrice:null, badge:'limited', img:'https://images.unsplash.com/photo-1595777707802-e2e1e7a2b288?w=500&q=80', urgency:'¡Edición exclusiva!' },
  { id:10, brand:'Adidas',      name:'Yeezy Boost 350',    price:380, oldPrice:420,  badge:'sale',    img:'https://images.unsplash.com/photo-1542219550-cef5b2618bfd?w=500&q=80', urgency:'8 personas lo vieron hoy' },
  { id:11, brand:'Vans',        name:'Old Skool Pro',       price:95,  oldPrice:null, badge:'new',     img:'https://images.unsplash.com/photo-1608231387042-ec3aa5b39601?w=500&q=80', urgency:null },
  { id:12, brand:'Reebok',      name:'Classic Leather',    price:120, oldPrice:150,  badge:'sale',    img:'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80', urgency:null },
];

/* ─── CART STATE ────────────────────────────────────────────── */
let cart = [
  { id:1, brand:'Nike', name:'Air Zoom Pegasus', price:180, size:'10.5 US', qty:1 },
  { id:2, brand:'Adidas', name:'Ultraboost',     price:200, size:'9.0 US',  qty:1 },
];
let pendingProduct = null;
let selectedSize  = null;

/* ─── PAGE ROUTER ───────────────────────────────────────────── */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + name);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (name === 'confirmation') {
    generateOrderDetails();
  }
}

/* ─── RENDER PRODUCTS ───────────────────────────────────────── */
function renderProducts(containerId, list) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = list.map(p => `
    <div class="product-card" onclick="openSizeModal(${p.id})">
      <div class="product-img-wrap">
        <div class="product-badges">${badgeHTML(p.badge)}</div>
        <button class="product-wishlist" onclick="event.stopPropagation();toggleWishlist(this)">🤍</button>
        <img src="${p.img}" alt="${p.name}" loading="lazy" style="width:85%;height:auto;object-fit:contain;">
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        ${p.urgency ? `<div class="product-urgency">⚡ ${p.urgency}</div>` : ''}
        <div class="product-footer" style="margin-top:10px">
          <div>
            <div class="product-price">$${p.price}.00</div>
            ${p.oldPrice ? `<div class="product-price-old">$${p.oldPrice}.00</div>` : ''}
          </div>
          <button class="product-add" onclick="event.stopPropagation();openSizeModal(${p.id})">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function badgeHTML(badge) {
  if (!badge) return '';
  const map = { new:'badge-new', sale:'badge-sale', limited:'badge-limited' };
  const label = { new:'Nuevo', sale:'SALE', limited:'Limited' };
  return `<span class="badge ${map[badge]}">${label[badge]}</span>`;
}

/* ─── WISHLIST ──────────────────────────────────────────────── */
function toggleWishlist(btn) {
  const isActive = btn.textContent === '❤️';
  btn.textContent = isActive ? '🤍' : '❤️';
  showToast(isActive ? 'Eliminado de favoritos' : '❤️ Guardado en favoritos');
}

/* ─── SIZE MODAL ────────────────────────────────────────────── */
function openSizeModal(productId) {
  const all = [...PRODUCTS, ...BESTSELLERS];
  pendingProduct = all.find(p => p.id === productId);
  selectedSize = null;

  const modal = document.getElementById('sizeModal');
  const nameEl = document.getElementById('modalProductName');
  const addBtn = document.getElementById('addToCartBtn');

  nameEl.textContent = `${pendingProduct.brand} ${pendingProduct.name} — $${pendingProduct.price}.00`;
  addBtn.disabled = true;
  addBtn.style.opacity = '0.4';
  addBtn.textContent = 'Seleccioná un talle';

  // reset selection
  document.querySelectorAll('.size-btn.selected').forEach(b => b.classList.remove('selected'));

  modal.classList.add('open');
}

function selectSize(btn, size) {
  if (btn.classList.contains('unavailable')) return;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedSize = size;

  const addBtn = document.getElementById('addToCartBtn');
  addBtn.disabled = false;
  addBtn.style.opacity = '1';
  addBtn.textContent = `Agregar — Talle ${size} US`;
}

function confirmAddToCart() {
  if (!pendingProduct || !selectedSize) return;
  addToCart(pendingProduct, selectedSize);
  closeModal();
}

function closeModal() {
  document.getElementById('sizeModal').classList.remove('open');
}

document.getElementById('sizeModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

/* ─── CART LOGIC ────────────────────────────────────────────── */
function addToCart(product, size) {
  const existing = cart.find(i => i.id === product.id && i.size === size + ' US');
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: product.id, brand: product.brand, name: product.name, price: product.price, size: size + ' US', qty: 1 });
  }
  updateCartUI();
  openCart();
  showToast(`✅ ${product.name} agregado al carrito`);
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  document.getElementById('cartBadge').textContent = count;
  document.getElementById('cartSubtotal').textContent = `$${total.toFixed(2)}`;
  document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
  document.getElementById('shippingTotal').textContent = `$${total.toFixed(2)}`;

  renderCartItems();
}

function renderCartItems() {
  const el = document.getElementById('cartItems');
  if (cart.length === 0) {
    el.innerHTML = `<div style="text-align:center;padding:60px 20px;color:var(--muted)">
      <div style="font-size:48px;margin-bottom:16px">🛒</div>
      <div style="font-weight:700;margin-bottom:8px">Tu carrito está vacío</div>
      <button class="btn btn-secondary btn-sm" onclick="closeCart()">Explorar productos</button>
    </div>`;
    return;
  }
  el.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-size">Talle: ${item.size}</div>
        <div class="cart-item-footer">
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="changeQty(${idx},-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${idx},1)">+</button>
          </div>
          <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
}

function openCart()  {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartPanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartPanel').classList.remove('open');
  document.body.style.overflow = '';
}

function resetCart() {
  cart = [];
  updateCartUI();
}

/* ─── PAYMENT OPTIONS ───────────────────────────────────────── */
function selectPayment(el) {
  document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}

/* ─── CONFIRMATION ──────────────────────────────────────────── */
function generateOrderDetails() {
  const num = Math.random().toString(36).substring(2,7).toUpperCase() + Math.floor(Math.random()*9);
  document.getElementById('orderNum').textContent = num;

  const d = new Date();
  d.setDate(d.getDate() + 3);
  const days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  document.getElementById('deliveryDate').textContent = `${days[d.getDay()]}, ${d.getDate()} de ${months[d.getMonth()]}`;
}

/* ─── TOAST ─────────────────────────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

/* ─── SEARCH TOGGLE ─────────────────────────────────────────── */
function toggleSearch() {
  showToast('🔍 Buscador próximamente disponible');
}

/* ─── SCROLL HELPERS ────────────────────────────────────────── */
function scrollToProducts() {
  document.getElementById('productos')?.scrollIntoView({ behavior:'smooth' });
}
function scrollToOffers() {
  document.getElementById('ofertas')?.scrollIntoView({ behavior:'smooth' });
}

/* ─── CARD FORMATTER ────────────────────────────────────────── */
document.addEventListener('input', e => {
  if (e.target.placeholder === '0000 0000 0000 0000') {
    let v = e.target.value.replace(/\D/g,'').substring(0,16);
    e.target.value = v.replace(/(.{4})/g,'$1 ').trim();
  }
  if (e.target.placeholder === 'MM/AA') {
    let v = e.target.value.replace(/\D/g,'').substring(0,4);
    if (v.length >= 2) v = v.substring(0,2) + '/' + v.substring(2);
    e.target.value = v;
  }
});

/* ─── INIT ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('nuevosGrid', PRODUCTS);
  renderProducts('bestsellersGrid', BESTSELLERS);
  updateCartUI();
});
