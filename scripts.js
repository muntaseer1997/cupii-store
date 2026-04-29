/* Scripts for merged Cupii UI
   - carousel with nav arrows
   - quick view modal and product interactions
   - add-to-cart / buy-now placeholders (toast feedback)
   - order form submit (keeps existing web3forms POST)
   - copy-protect modal + toast
   - whatsapp ping already via CSS
*/

document.addEventListener('DOMContentLoaded', function() {

  /* =========================
     Product Data
     ========================= */
  const productData = {
    'prod-399': {
      emoji: '🎁',
      title: 'Premium Coffee Combo - 3pcs Imported Selection',
      desc: "Handpicked imported sachets perfect for gifting or daily indulgence.",
      items: ['Tora Bika Cappuccino × 1', 'KitKat Matcha Café × 1', 'Old Town White Coffee × 1'],
      price: 'BDT 399'
    },
    'prod-599': {
      emoji: '🍱',
      title: 'Family Snack Bundle - Imported Biscuits & Chips',
      desc: 'A selection of snacks sourced from popular overseas brands.',
      items: ['Imported Biscuits × 3', 'Premium Chips × 2'],
      price: 'BDT 599'
    },
    'prod-349': {
      emoji: '🍵',
      title: 'Premium Green Tea Collection - 100 Bags',
      desc: 'A large pack of premium green tea bags for daily consumption.',
      items: ['Green Tea - 100 bags'],
      price: 'BDT 349'
    },
    'prod-799': {
      emoji: '🍫',
      title: 'Imported Chocolate Gift Box - 12pcs Assorted',
      desc: 'Assorted premium chocolates perfect as a present.',
      items: ['Assorted Chocolates × 12'],
      price: 'BDT 799'
    },
    // trending items (optional)
    'trend-1': { emoji: '☕', title: "Coffee Lover's Premium Pack", desc: 'Top seller pack', items: [], price: 'BDT 1299' },
    'trend-2': { emoji: '🍪', title: 'Snack Attack Combo Box', desc: 'Best for families', items: [], price: 'BDT 899' },
    'trend-3': { emoji: '🫖', title: 'Tea Time Special Collection', desc: 'Calm & soothing', items: [], price: 'BDT 649' },
    'trend-4': { emoji: '🍜', title: 'Ramen & Noodles Mega Set', desc: 'Quick and tasty', items: [], price: 'BDT 1499' }
  };

  /* =========================
     Carousel arrows & drag/swipe
     ========================= */
  (function carouselSetup() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!track) return;
    const SCROLL_AMOUNT = 240;

    prevBtn.addEventListener('click', () => track.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => track.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' }));

    // mouse drag
    let isDown = false, startX, scrollLeft;
    track.addEventListener('mousedown', (e) => { isDown = true; track.style.cursor = 'grabbing'; startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft; });
    track.addEventListener('mouseleave', () => { isDown = false; track.style.cursor = 'grab'; });
    track.addEventListener('mouseup', () => { isDown = false; track.style.cursor = 'grab'; });
    track.addEventListener('mousemove', (e) => { if (!isDown) return; e.preventDefault(); const x = e.pageX - track.offsetLeft; const walk = (x - startX) * 1.4; track.scrollLeft = scrollLeft - walk; });

    // touch
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; scrollLeft = track.scrollLeft; }, { passive: true });
    track.addEventListener('touchmove', (e) => { const x = e.touches[0].clientX; const walk = (x - startX) * 1.3; track.scrollLeft = scrollLeft - walk; }, { passive: true });
  })();

  /* =========================
     Quick View Modal
     ========================= */
  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalEmoji = document.getElementById('modalEmoji');
  const modalItems = document.getElementById('modalItems');
  const modalClose = document.getElementById('modalClose');
  const modalAddCart = document.getElementById('modalAddCart');
  const modalBuyNow = document.getElementById('modalBuyNow');

  function openModalFor(productId) {
    const p = productData[productId];
    if (!p) return;
    modalEmoji.textContent = p.emoji || '☕';
    modalTitle.textContent = p.title || 'Product';
    modalDesc.textContent = p.desc || '';
    modalItems.innerHTML = '';
    (p.items || []).forEach(i => {
      const li = document.createElement('li');
      li.textContent = i;
      modalItems.appendChild(li);
    });

    // store current id for actions
    modalOverlay.dataset.current = productId;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    delete modalOverlay.dataset.current;
  }

  // delegate quick view buttons in grid
  document.body.addEventListener('click', function(e) {
    const q = e.target.closest('.quick-view-btn');
    if (q) {
      const id = q.dataset.view;
      openModalFor(id);
    }
  });

  // handle modal close
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function(e) { if (e.target === modalOverlay) closeModal(); });

  // modal add to cart / buy now
  modalAddCart.addEventListener('click', function() {
    const id = modalOverlay.dataset.current;
    showToast('Added to cart');
    closeModal();
  });
  modalBuyNow.addEventListener('click', function() {
    const id = modalOverlay.dataset.current;
    scrollToOrder();
    // pre-select combo in the form (if applicable)
    tryPreselectComboByName(productData[id] && productData[id].title);
    closeModal();
  });

  /* =========================
     Grid Add to Cart / Buy Now
     ========================= */
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = this.dataset.product || this.closest('.product-card')?.dataset.id;
      showToast('Added to cart');
    });
  });
  document.querySelectorAll('.btn-buy-now').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = this.dataset.product || this.closest('.product-card')?.dataset.id;
      scrollToOrder();
      tryPreselectComboByName(productData[id] && productData[id].title);
    });
  });

  /* =========================
     Order Form Submit (keeps original behavior)
     ========================= */
  const orderForm = document.getElementById('orderForm');
  const submitBtn = orderForm && orderForm.querySelector('.submit-btn');
  if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = submitBtn;
      btn.textContent = '⏳ Verifying Order...';
      btn.style.opacity = '0.7';
      btn.disabled = true;
      const formData = new FormData(orderForm);
      fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
        .then(r => r.json())
        .then(data => {
          if (data && data.success) {
            document.getElementById('checkout-section').style.display = 'none';
            document.getElementById('success-message').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            alert('Something went wrong. Please check your details and try again.');
            btn.textContent = '🚚 Place Order — Cash on Delivery';
            btn.style.opacity = '1';
            btn.disabled = false;
          }
        }).catch(err => {
          alert('Connection error. Please try again.');
          btn.textContent = '🚚 Place Order — Cash on Delivery';
          btn.style.opacity = '1';
          btn.disabled = false;
        });
    });
  }

  /* Helper: preselect combo if modal/buy action triggered with matching text */
  function tryPreselectComboByName(name) {
    if (!name) return;
    const sel = document.getElementById('combo');
    for (let i=0;i<sel.options.length;i++){
      if (sel.options[i].value.toLowerCase().includes('standard') && name.toLowerCase().includes('standard')) { sel.selectedIndex = i; return; }
      if (sel.options[i].value.toLowerCase().includes('premium') && name.toLowerCase().includes('premium')) { sel.selectedIndex = i; return; }
    }
  }

  /* =========================
     Toasts
     ========================= */
  const toastContainer = document.getElementById('toastContainer');
  function showToast(msg, timeout = 2200) {
    if (!toastContainer) return;
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    toastContainer.appendChild(t);
    setTimeout(()=>{ t.classList.add('hide'); t.remove(); }, timeout);
  }

  /* =========================
     Copy protection (modal + short toast)
     ========================= */
  const protectOverlay = document.getElementById('protectOverlay');
  const protectModal = document.getElementById('protectModal');

  function showProtectAlert() {
    if (protectModal && protectOverlay) {
      protectModal.classList.add('active');
      protectOverlay.classList.add('active');
      showToast('🔒 Content protected', 1400);
      setTimeout(() => {
        protectModal.classList.remove('active');
        protectOverlay.classList.remove('active');
      }, 1500);
    }
  }

  document.addEventListener('contextmenu', function(e) { e.preventDefault(); showProtectAlert(); });
  document.addEventListener('copy', function(e) { e.preventDefault(); showProtectAlert(); });
  document.addEventListener('cut', function(e) { e.preventDefault(); showProtectAlert(); });
  document.addEventListener('keydown', function(e) {
    // block common shortcuts
    if (e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'C' || e.key === 'S')))
    {
      e.preventDefault();
      showProtectAlert();
    }
  });

  // Prevent image drag
  document.addEventListener('dragstart', function(e) {
    if (e.target && e.target.tagName === 'IMG') e.preventDefault();
  });

  /* =========================
     Utility: scrollToOrder
     ========================= */
  window.scrollToOrder = function() {
    const s = document.getElementById('checkout-section');
    if (s) s.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

}); // DOMContentLoaded
/* =========================
   SHOPPING CART STYLES
   ========================= */
.cart-floating-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  background: var(--dark-green);
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease;
}
.cart-floating-btn:hover { transform: scale(1.05); }

.cart-badge {
  background: var(--red-sale);
  color: white;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 0.9rem;
  font-weight: bold;
}

.cart-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.5); z-index: 1001;
  opacity: 0; visibility: hidden; transition: 0.3s;
}
.cart-overlay.active { opacity: 1; visibility: visible; }

.cart-panel {
  position: fixed; top: 0; right: -400px; width: 100%; max-width: 400px; height: 100%;
  background: #fff; z-index: 1002; box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  display: flex; flex-direction: column; transition: right 0.3s ease;
}
.cart-panel.active { right: 0; }

.cart-header {
  padding: 20px; border-bottom: 1px solid #eee;
  display: flex; justify-content: space-between; align-items: center;
}
.cart-close-btn { background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-main); }

.cart-items-container {
  flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 15px;
}
.cart-item {
  display: flex; justify-content: space-between; align-items: center;
  background: var(--off-white); padding: 12px; border-radius: var(--radius-sm); border: 1px solid #eee;
}
.cart-item-info h4 { font-size: 0.95rem; margin-bottom: 5px; color: var(--text-main); }
.cart-item-price { color: var(--dark-green); font-weight: bold; }
.cart-item-controls { display: flex; align-items: center; gap: 10px; }
.cart-item-controls button { background: #ddd; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.cart-item-controls button:hover { background: #ccc; }

.cart-footer { padding: 20px; border-top: 1px solid #eee; background: #fff; }
.cart-summary { display: flex; justify-content: space-between; margin-bottom: 10px; color: var(--text-main); }
.cart-total { font-size: 1.2rem; font-weight: bold; color: var(--dark-green); border-top: 1px solid #eee; padding-top: 10px; }
