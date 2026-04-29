:root{
  --dark-green:#1a4731; /* preserved brand color */
  --mid-green:#2d6a4f;
  --light-green:#e8f5ee;
  --off-white:#fbfbf8;
  --gold:#c9a84c;
  --gold-light:#f0dfa0;
  --red-sale:#e63946;
  --text-main:#2c2c2c;
  --text-muted:#777;
  --shadow-sm:0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:0 4px 6px rgba(0,0,0,0.06);
  --shadow-lg:0 10px 15px rgba(0,0,0,0.08);
  --radius-sm:8px;
  --radius-md:12px;
  --radius-lg:16px;
  --radius-xl:20px;
  --radius-full:9999px;
}

/* Reset */
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%}
body{
  font-family:'Poppins',sans-serif;
  background:var(--off-white);
  color:var(--text-main);
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}

/* Header */
header{
  background:linear-gradient(160deg,#0e2f1f 0%,var(--dark-green) 55%,#1e5c3a 100%);
  color:#fff;padding:48px 18px 36px;text-align:center;border-bottom:4px solid var(--gold);
  position:relative;overflow:hidden;
}
.brand-logo{max-width:110px;border-radius:50%;margin:0 auto 12px;box-shadow:0 0 0 6px rgba(201,168,76,0.22),0 0 30px rgba(0,0,0,0.35);transition:transform .35s}
.brand-logo:hover{transform:scale(1.04) rotate(-2deg)}
header h1{font-family:'Playfair Display',serif;font-size:2.2rem;display:none}
.tagline{color:var(--gold-light);font-size:1.05rem;font-family:'Satisfy',cursive;margin-top:6px}
.header-badge{display:inline-block;margin-top:14px;background:rgba(201,168,76,0.12);border:1px solid rgba(201,168,76,0.35);color:var(--gold-light);padding:6px 16px;border-radius:99px;font-weight:600;letter-spacing:1px}

/* Trust bar */
.trust-bar{display:flex;justify-content:center;gap:24px;flex-wrap:wrap;padding:14px;background:var(--light-green);border-bottom:1px solid rgba(26,71,49,0.06)}
.trust-item{display:flex;align-items:center;gap:8px;color:var(--dark-green);font-weight:700;font-size:.9rem}

/* Container & hero */
.container{max-width:1200px;margin:28px auto;padding:0 18px 60px}
.hero{ text-align:center;margin-bottom:28px }
.section-title{font-family:'Playfair Display',serif;font-size:1.8rem;color:var(--dark-green);font-weight:800}
.hero-sub{color:var(--text-muted);max-width:680px;margin:8px auto;font-size:.95rem}

/* TRENDING CAROUSEL */
.trending-section{margin:18px 0 30px}
.trending-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
.trending-title{font-size:1.2rem;font-weight:800;color:var(--dark-green);display:flex;gap:10px;align-items:center}
.fire-emoji{font-size:1.25rem;animation:bounce 1.5s infinite}
@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.carousel-nav{display:flex;gap:8px}
.carousel-btn{width:40px;height:40px;border-radius:9999px;border:2px solid rgba(45,106,79,0.12);background:#fff;color:var(--dark-green);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-sm);transition:all .2s}
.carousel-btn:hover{background:var(--dark-green);color:#fff;transform:scale(1.06)}
.carousel-container{position:relative;overflow:hidden}
.carousel-track{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;padding:8px 6px 18px;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}
.carousel-track::-webkit-scrollbar{display:none}
.trending-card{flex:0 0 auto;width:220px;scroll-snap-align:start;background:#fff;border-radius:16px;box-shadow:var(--shadow-md);overflow:hidden;cursor:pointer;transition:transform .25s}
.trending-card:hover{transform:translateY(-6px) scale(1.02);box-shadow:var(--shadow-lg)}
.trending-img-wrap{height:140px;background:linear-gradient(135deg,#f8fafc,#f1f5f9);position:relative}
.trending-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .4s}
.trending-card:hover img{transform:scale(1.06)}
.trending-badge{position:absolute;top:10px;left:10px;background:linear-gradient(135deg,#f59e0b,#fbbf24);color:#fff;padding:6px 10px;border-radius:9999px;font-weight:800;z-index:2}
.trending-info{padding:12px}
.trending-name{font-weight:700;color:var(--text-main);font-size:.9rem;margin-bottom:6px}
.trending-price{font-weight:800;color:var(--mid-green)}

/* PRODUCTS GRID */
.products-section{margin:28px 0}
.section-header{text-align:center;margin-bottom:22px}
.section-header h2{font-size:1.6rem;color:var(--dark-green);font-weight:800}
.section-header p{color:var(--text-muted)}

.products-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px}

/* product card */
.product-card{background:#fff;border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-md);display:flex;flex-direction:column;position:relative;transition:transform .25s}
.product-card:hover{transform:translateY(-8px);box-shadow:var(--shadow-lg)}
.product-image-wrap{position:relative;height:220px;overflow:hidden;background:linear-gradient(135deg,#f8fafc,#f1f5f9)}
.product-image-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .45s}
.product-card:hover .product-image-wrap img{transform:scale(1.06)}
.discount-badge{position:absolute;top:12px;left:12px;background:linear-gradient(135deg,#ef4444,#f87171);color:#fff;padding:6px 12px;border-radius:12px;font-weight:800;z-index:3;animation:pulseBadge 2s infinite}
@keyframes pulseBadge{0%,100%{box-shadow:0 4px 12px rgba(239,68,68,0.28)}50%{box-shadow:0 4px 20px rgba(239,68,68,0.48)}}
.quick-view-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.45);opacity:0;transition:opacity .28s}
.product-card:hover .quick-view-overlay{opacity:1}
.quick-view-btn{background:#fff;padding:8px 16px;border-radius:9999px;border:none;cursor:pointer;font-weight:700}
.product-details{padding:14px;display:flex;flex-direction:column;gap:8px;flex:1}
.product-name{font-weight:700;color:var(--text-main);text-decoration:none}
.price-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.current-price{font-weight:800;color:var(--dark-green)}
.original-price{color:#bdbdbd;text-decoration:line-through}
.savings-tag{background:var(--light-green);color:var(--mid-green);padding:4px 8px;border-radius:8px;font-weight:800;font-size:.8rem}
.product-actions{display:flex;gap:8px;margin-top:auto}
.btn-add-cart{background:linear-gradient(135deg,var(--mid-green),var(--dark-green));color:#fff;padding:10px;border-radius:12px;border:none;cursor:pointer;font-weight:800}
.btn-buy-now{background:transparent;border:2px solid #e2e8f0;padding:10px;border-radius:12px;cursor:pointer;font-weight:800}
.btn-buy-now:hover{border-color:var(--mid-green);color:var(--mid-green);background:rgba(237,247,237,0.6)}

/* ORDER CARD (kept) */
.order-card{background:#fff;border-radius:20px;padding:26px;border-top:6px solid var(--gold);box-shadow:var(--shadow-md);margin-top:28px}
.order-card h2{font-family:'Playfair Display',serif;color:var(--dark-green);font-size:1.4rem;margin-bottom:8px}
.order-sub{color:#888;margin-bottom:12px}
.form-group{margin-bottom:14px}
label{display:block;margin-bottom:6px;font-weight:700;color:#444}
input,select,textarea{width:100%;padding:12px;border:1.5px solid #e5e5e5;border-radius:10px;background:#fafafa}
.submit-btn{background:linear-gradient(135deg,var(--dark-green),#123323);color:#fff;padding:14px;border-radius:12px;border:none;font-weight:800;cursor:pointer}

/* SUCCESS MESSAGE */
.success-message{display:none;background:linear-gradient(135deg,#e8f5ee,#d4edda);color:#155724;padding:32px;border-radius:18px;text-align:center;border:2px solid #b8dfc7;margin-top:20px}

/* FOOTER */
footer{background:var(--dark-green);color:rgba(255,255,255,0.8);text-align:center;padding:20px;font-size:.85rem;border-top:3px solid var(--gold)}

/* MODAL */
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);align-items:center;justify-content:center;z-index:1000;padding:18px;backdrop-filter:blur(3px)}
.modal-overlay.open{display:flex}
.modal-box{background:#fff;border-radius:18px;padding:24px;max-width:520px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.2);animation:modal-in .28s both}
@keyframes modal-in{from{opacity:0;transform:scale(.96)translateY(8px)}to{opacity:1;transform:scale(1)translateY(0)}}
.modal-close{position:absolute;top:12px;right:14px;background:none;border:none;font-size:1.2rem;cursor:pointer;color:#888}

/* PROTECT MODAL */
.protect-overlay{position:fixed;inset:0;background:rgba(15,23,42,0.3);backdrop-filter:blur(4px);z-index:999;opacity:0;pointer-events:none;transition:opacity .25s}
.protect-overlay.active{opacity:1;pointer-events:all}
.protect-modal{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(.92);background:#fff;padding:20px;border-radius:18px;box-shadow:var(--shadow-lg);z-index:1000;opacity:0;pointer-events:none;transition:all .18s}
.protect-modal.active{opacity:1;pointer-events:all;transform:translate(-50%,-50%) scale(1)}

/* WHATSAPP WIDGET */
.wa-widget{position:fixed;bottom:22px;right:22px;display:flex;flex-direction:column;align-items:flex-end;gap:8px;z-index:999}
.wa-tooltip{background:#fff;padding:8px 12px;border-radius:12px;box-shadow:var(--shadow-lg);font-weight:700;opacity:0;transform:translateY(6px);transition:all .25s}
.wa-widget:hover .wa-tooltip{opacity:1;transform:translateY(0)}
.wa-button{width:62px;height:62px;border-radius:9999px;background:linear-gradient(135deg,#25d366,#128c7e);display:flex;align-items:center;justify-content:center;position:relative;box-shadow:0 8px 30px rgba(37,211,102,0.35)}
.wa-ping{position:absolute;inset:-6px;border-radius:9999px;border:2px solid #25d366;opacity:0;animation:waPing 2s infinite}
@keyframes waPing{0%{transform:scale(1);opacity:.6}75%{transform:scale(1.25);opacity:0}100%{transform:scale(1.25);opacity:0}}

/* Toast */
.toast-container{position:fixed;bottom:100px;right:22px;z-index:9999;display:flex;flex-direction:column;gap:10px}
.toast{background:var(--dark-green);color:#fff;padding:10px 16px;border-radius:999px;font-weight:700;box-shadow:var(--shadow-lg)}

/* RESPONSIVE */
@media (max-width:768px){
  .trending-card{width:160px}
  .product-image-wrap{height:170px}
  .products-grid{grid-template-columns:repeat(2,1fr)}
  .wa-widget{bottom:16px;right:16px}
}
@media (max-width:480px){
  header{padding:28px 12px}
  .brand-logo{max-width:90px}
  .container{padding:0 12px}
  .products-grid{grid-template-columns:repeat(2,1fr);gap:12px}
  .carousel-btn{width:36px;height:36px}
}/* ===========================
   FLOATING CART BUTTON
   =========================== */
.floating-cart-btn {
  position: fixed;
  top: 28px;
  right: 28px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--dark-green), #0e2f1f);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(26, 71, 49, 0.28);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 95;
  border: 2px solid rgba(201, 168, 76, 0.15);
}

.floating-cart-btn:hover {
  transform: scale(1.1) translateY(-3px);
  box-shadow: 0 12px 32px rgba(26, 71, 49, 0.4);
}

.floating-cart-btn:active {
  transform: scale(0.98);
}

.cart-icon {
  width: 26px;
  height: 26px;
  color: #fff;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cart-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: linear-gradient(135deg, #e63946, #f87171);
  color: #fff;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.75rem;
  border: 2px solid #fff;
  box-shadow: 0 4px 12px rgba(230, 57, 70, 0.3);
  transition: transform 0.2s;
}

.cart-badge.pulse {
  animation: badgePulse 0.6s ease-out;
}

@keyframes badgePulse {
  0% {
    transform: scale(1.4);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* ===========================
   CART OVERLAY (DARK BG)
   =========================== */
.cart-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(3px);
  z-index: 96;
  animation: fadeIn 0.28s ease-out;
}

.cart-overlay.open {
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* ===========================
   CART SLIDE-OUT PANEL
   =========================== */
.cart-panel {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 420px;
  background: #fff;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.15);
  z-index: 97;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
}

.cart-panel.open {
  transform: translateX(0);
}

.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 2px solid var(--light-green);
  flex-shrink: 0;
}

.cart-header h2 {
  font-family: 'Playfair Display', serif;
  color: var(--dark-green);
  font-size: 1.3rem;
  margin: 0;
}

.cart-close-btn {
  background: none;
  border: none;
  font-size: 1.4rem;
  color: #666;
  cursor: pointer;
  padding: 4px 8px;
  transition: all 0.2s;
}

.cart-close-btn:hover {
  color: var(--dark-green);
  transform: rotate(90deg);
}

/* ===========================
   CART EMPTY STATE
   =========================== */
.cart-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  color: var(--text-muted);
  text-align: center;
  flex: 1;
}

.cart-empty-state.hidden {
  display: none;
}

.empty-emoji {
  font-size: 3.5rem;
  margin-bottom: 16px;
  opacity: 0.8;
}

.cart-empty-state p {
  margin: 4px 0;
  font-weight: 600;
}

.empty-subtext {
  font-size: 0.85rem;
  color: #999;
  font-weight: 400;
}

/* ===========================
   CART ITEMS CONTAINER
   =========================== */
.cart-items-container {
  flex: 1;
  overflow-y: auto;
  padding: 16px 0;
  scroll-behavior: smooth;
}

.cart-items-container::-webkit-scrollbar {
  width: 6px;
}

.cart-items-container::-webkit-scrollbar-track {
  background: transparent;
}

.cart-items-container::-webkit-scrollbar-thumb {
  background: rgba(26, 71, 49, 0.2);
  border-radius: 3px;
}

.cart-items-container::-webkit-scrollbar-thumb:hover {
  background: rgba(26, 71, 49, 0.4);
}

/* Individual Cart Item */
.cart-item {
  display: flex;
  gap: 12px;
  padding: 16px 16px;
  border-bottom: 1px solid #f0f0f0;
  align-items: flex-start;
  transition: background 0.2s;
}

.cart-item:hover {
  background: #fafafa;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  flex-shrink: 0;
  overflow: hidden;
  object-fit: cover;
}

.cart-item-details {
  flex: 1;
  min-width: 0;
}

.cart-item-name {
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 6px;
  font-size: 0.95rem;
  word-wrap: break-word;
}

.cart-item-price {
  color: var(--dark-green);
  font-weight: 800;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.cart-item-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--light-green);
  width: fit-content;
  border-radius: 8px;
  padding: 4px;
}

.quantity-btn {
  background: none;
  border: none;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--dark-green);
  font-weight: 800;
  font-size: 1.1rem;
  transition: all 0.2s;
  border-radius: 6px;
}

.quantity-btn:hover {
  background: rgba(26, 71, 49, 0.12);
  transform: scale(1.15);
}

.quantity-display {
  width: 28px;
  text-align: center;
  font-weight: 700;
  color: var(--dark-green);
  font-size: 0.9rem;
}

.cart-item-remove {
  margin-left: auto;
}

.remove-btn {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 4px;
  transition: all 0.2s;
  align-self: flex-start;
}

.remove-btn:hover {
  color: #e63946;
  transform: scale(1.15);
}

/* ===========================
   CART FOOTER
   =========================== */
.cart-footer {
  padding: 20px 24px;
  border-top: 2px solid var(--light-green);
  background: #fafafa;
  flex-shrink: 0;
}

.cart-summary {
  margin-bottom: 16px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: var(--text-main);
  font-weight: 600;
}

.summary-total {
  font-size: 1.15rem;
  color: var(--dark-green);
  font-weight: 800;
  padding-top: 10px;
  border-top: 2px solid rgba(26, 71, 49, 0.1);
}

.cart-checkout-btn {
  width: 100%;
  background: linear-gradient(135deg, var(--dark-green), #0e2f1f);
  color: #fff;
  padding: 14px;
  border-radius: 12px;
  border: none;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(26, 71, 49, 0.2);
}

.cart-checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(26, 71, 49, 0.35);
}

.cart-checkout-btn:active {
  transform: translateY(0);
}

/* ===========================
   RESPONSIVE - CART PANEL
   =========================== */
@media (max-width: 768px) {
  .floating-cart-btn {
    width: 54px;
    height: 54px;
    top: 20px;
    right: 16px;
  }

  .cart-panel {
    width: 100%;
  }

  .cart-header {
    padding: 16px 20px;
  }

  .cart-header h2 {
    font-size: 1.15rem;
  }

  .cart-item {
    padding: 12px 12px;
  }

  .cart-item-image {
    width: 70px;
    height: 70px;
  }

  .cart-footer {
    padding: 16px 20px;
  }
}

@media (max-width: 480px) {
  .floating-cart-btn {
    width: 52px;
    height: 52px;
    top: 16px;
    right: 12px;
  }

  .cart-icon {
    width: 24px;
    height: 24px;
  }

  .cart-badge {
    width: 24px;
    height: 24px;
    font-size: 0.65rem;
  }

  .cart-panel {
    width: 100%;
  }

  .cart-empty-state {
    padding: 40px 20px;
  }

  .empty-emoji {
    font-size: 2.8rem;
  }
}
