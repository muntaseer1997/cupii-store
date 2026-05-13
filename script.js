// ========== PRODUCT DATA ==========
const PRODUCTS = {
    // Bundles
    student: {
        name: 'Student Combo',
        price: 350,
        emoji: '🎓',
        desc: 'Perfect for students on a budget. Quick energy boosts for late-night study sessions.',
        items: ['2 Torabika Cappuccino', '1 KitKat Hot Chocolate', '1 Chocolaty Mocha', '1 OldTown Hazelnut']
    },
    premium: {
        name: 'Premium Combo',
        price: 535,
        emoji: '🌟',
        desc: 'The ultimate coffee lover\'s experience. Extra selections, richer variety.',
        items: ['3 Torabika Cappuccino', '1 KitKat Hot Chocolate', '1 Caramel Latte', '1 Chocolaty Mocha', '1 OldTown Hazelnut', '1 OldTown White Coffee Salted Caramel']
    },
    mega: {
        name: 'Mega Combo Box',
        price: 1095,
        emoji: '🏆',
        desc: 'The grandest coffee experience. A month-long supply for the serious enthusiast.',
        items: ['5 Torabika Cappuccino', '2 KitKat Hot Chocolate', '2 Caramel Latte', '2 Chocolaty Mocha', '2 OldTown Hazelnut', '2 OldTown White Coffee Salted Caramel']
    },
    // Individual coffees (100 each)
    'tora-bika': { name: 'Torabika Cappuccino', price: 35, emoji: '☕', imgUrl: 'torabika.png' },
    'kitkat': { name: 'KitKat Hot Chocolate', price: 120, emoji: '🍫', imgUrl: 'kitkat.png' },
    'caramel': { name: 'Caramel Latte', price: 100, emoji: '🧋', imgUrl: 'caramel.png' },
    'chocolaty': { name: 'Chocolaty Mocha', price: 100, emoji: '🤎', imgUrl: 'chocolaty.png' },
    'hazelnut': { name: 'OldTown Hazelnut', price: 100, emoji: '🌰', imgUrl: 'hazelnut.png' },
    'white': { name: 'OldTown White Coffee', price: 100, emoji: '🌸', imgUrl: 'white-coffee.png' }
};
// Premium imported brands
    'davidoff': { name: 'Davidoff Classic', price: 1050, emoji: '🏆', imgUrl: 'davidoff.png' },
    'macgold': { name: 'Mac Gold Premium', price: 995, emoji: '✨', imgUrl: 'macgold.png' },
    'nescafe-gold': { name: 'Nescafé Gold', price: 950, emoji: '👑', imgUrl: 'nescafe-gold.png' },
    'jacobs': { name: 'Jacobs Cronat', price: 1100, emoji: '🌟', imgUrl: 'jacobs.png' },
    'tora-bika': { name: 'Tora Bika Cappuccino', price: 640, emoji: '💎', imgUrl: 'Tora.png' },
    'Aik-Cheong': { name: 'Aik Cheong Cappuccino', price: 890, emoji: '☕', imgUrl: 'Aik.png' }

// ========== CART STATE ==========
let cart = {};
let modalCurrentKey = null;

// Minimum order value
const MIN_ORDER = 300;

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', function() {
    renderCarousel();
    renderPremiumCarousel();  // ← ADD THIS LINE
    updateCart();
});

// ========== CAROUSEL RENDERING ==========
function renderCarousel() {
    const inner = document.getElementById('carouselInner');
    const coffees = ['tora-bika', 'kitkat', 'caramel', 'chocolaty', 'hazelnut', 'white'];
    
    inner.innerHTML = coffees.map(key => {
        const p = PRODUCTS[key];
        
        // Hide the emoji if we are showing an image
        const emojiStyle = p.imgUrl ? 'display:none;' : '';
        const hasImageUrl = p.imgUrl ? `background-image: url('${p.imgUrl}');` : '';

        return `
            <div class="product-item">
                <!-- Background image layer -->
                <div class="pi-image-bg" style="${hasImageUrl}"></div>
                
                <!-- Content layer floating over image -->
                <div class="pi-content">
                    <span class="pi-tag"></span>
                    <div class="pi-emoji" style="${emojiStyle}">${p.emoji}</div>
                    <div class="pi-name">${p.name}</div>
                    <div class="pi-desc">Individual sachet</div>
                    <div class="pi-footer">
                        <span class="pi-price">BDT ${p.price}</span>
                        <button class="pi-btn" onclick="addToCart('${key}', this)">+ Add</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}
// ========== PREMIUM CAROUSEL RENDERING ==========
function renderPremiumCarousel() {
    const inner = document.getElementById('premiumCarouselInner');
    const premiums = ['davidoff', 'macgold', 'nescafe-gold', 'lavazza', 'illy', 'jacobs'];
    
    inner.innerHTML = premiums.map(key => {
        const p = PRODUCTS[key];
        const emojiStyle = p.imgUrl ? 'display:none;' : '';
        const hasImageUrl = p.imgUrl ? `background-image: url('${p.imgUrl}');` : '';

        return `
            <div class="product-item">
                <div class="pi-image-bg" style="${hasImageUrl}"></div>
                <div class="pi-content">
                    <span class="pi-tag"></span>
                    <div class="pi-emoji" style="${emojiStyle}">${p.emoji}</div>
                    <div class="pi-name">${p.name}</div>
                    <div class="pi-desc">Premium Import</div>
                    <div class="pi-footer">
                        <span class="pi-price">BDT ${p.price}</span>
                        <div class="pi-button-group">
                            <button class="pi-btn-view" onclick="viewPremium('${key}')">👁 View</button>
                            <button class="pi-btn" onclick="addToCart('${key}', this)">+ Add</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}
// ========== ADD TO CART ==========
function addToCart(key, btn) {
    if (!PRODUCTS[key]) return;
    
    if (!cart[key]) cart[key] = 0;
    cart[key]++;

    // --- ADD THIS LINE FOR META PIXEL ---
    fbq('track', 'AddToCart', {
        content_name: PRODUCTS[key].name,
        value: PRODUCTS[key].price,
        currency: 'BDT'
    });
    // ------------------------------------
    
    // Flash animation
    if (btn) {
        btn.classList.add('added');
        setTimeout(() => btn.classList.remove('added'), 300);
    }
    
    updateCart();
}

function addFromModal() {
    if (modalCurrentKey) {
        addToCart(modalCurrentKey);
        closeModal();
    }
}

// ========== UPDATE CART ==========
function updateCart() {
    const items = document.getElementById('cartItems');
    const empty = document.getElementById('cartEmpty');
    const summary = document.getElementById('cartSummary');
    const sticky = document.getElementById('cartSticky');
    const submitBtn = document.getElementById('submitBtn');
    const minNotice = document.getElementById('minOrderNotice');

    if (Object.keys(cart).length === 0) {
        items.innerHTML = '';
        empty.style.display = 'block';
        summary.style.display = 'none';
        sticky.classList.remove('active');
        return;
    }
    // --- ADD THIS LOGIC FOR META PIXEL ---
    // We only want to fire this once per session when they first add something
    if (!window.checkoutStarted) {
        fbq('track', 'InitiateCheckout');
        window.checkoutStarted = true; 
    }
    // ------------------------------------

    empty.style.display = 'none';
    summary.style.display = 'block';
    sticky.classList.add('active');

    let subtotal = 0;
    let html = '';

    Object.keys(cart).forEach(key => {
        const p = PRODUCTS[key];
        const qty = cart[key];
        const total = p.price * qty;
        subtotal += total;

        html += `
            <div class="cart-item">
                <div class="ci-emoji">${p.emoji}</div>
                <div class="ci-name">${p.name}</div>
                <div class="ci-qty-control">
                    <button class="qi-btn" onclick="changeQty('${key}', -1)">−</button>
                    <input type="number" class="qi-input" value="${qty}" min="1" onchange="setQty('${key}', this.value)">
                    <button class="qi-btn" onclick="changeQty('${key}', 1)">+</button>
                </div>
                <div class="ci-total">BDT ${total}</div>
                <button class="ci-remove" onclick="removeFromCart('${key}')">✕</button>
            </div>
        `;
    });

    items.innerHTML = html;

    // Calculate total
    const shipping = Number(document.querySelector('input[name="shipment"]:checked').value || 60);
    const total = subtotal + shipping;

    document.getElementById('subtotalAmt').textContent = subtotal;
    document.getElementById('totalAmt').textContent = total;

    // Update hidden form fields
    document.getElementById('fItems').value = Object.keys(cart).map(k => `${PRODUCTS[k].name} ×${cart[k]}`).join(', ');
    document.getElementById('fSubtotal').value = subtotal;
    document.getElementById('fShipping').value = shipping;
    document.getElementById('fTotal').value = total;

    // Update sticky cart
    const itemCount = Object.values(cart).reduce((a, b) => a + b, 0);
    document.getElementById('cartCount').textContent = itemCount;
    document.getElementById('cartPrice').textContent = 'BDT ' + total;

    // Check minimum order
    if (subtotal < MIN_ORDER) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';
        minNotice.style.display = 'block';
    } else {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        minNotice.style.display = 'none';
    }
}

function changeQty(key, delta) {
    cart[key] = Math.max(1, cart[key] + delta);
    if (cart[key] === 0) delete cart[key];
    updateCart();
}

function setQty(key, val) {
    const n = parseInt(val) || 1;
    cart[key] = Math.max(1, n);
    updateCart();
}

function removeFromCart(key) {
    delete cart[key];
    updateCart();
}

// ========== MODAL ==========
function viewBundle(key) {
    const p = PRODUCTS[key];
    modalCurrentKey = key;

    document.getElementById('mEmoji').textContent = p.emoji;
    document.getElementById('mTitle').textContent = p.name;
    document.getElementById('mDesc').textContent = p.desc;

    const list = document.getElementById('mList');
    list.innerHTML = (p.items || []).map(item => `<li>${item}</li>`).join('');

    document.getElementById('modalBg').classList.add('open');
    document.body.style.overflow = 'hidden';
}
// ========== VIEW PREMIUM PRODUCT ==========
function viewPremium(key) {
    const p = PRODUCTS[key];
    modalCurrentKey = key;

    const modalImage = document.getElementById('mProductImage');
    if (modalImage) {
        modalImage.style.backgroundImage = `url('${p.imgUrl}')`;
    }

    document.getElementById('mEmoji').textContent = p.emoji;
    document.getElementById('mTitle').textContent = p.name;
    document.getElementById('mDesc').textContent = `Premium imported coffee`;
    
    const list = document.getElementById('mList');
    list.innerHTML = `
        <li><strong>Price:</strong> BDT ${p.price}</li>
        <li>100% Imported Premium Blend</li>
        <li>Perfect for daily consumption</li>
        <li>Rich, authentic taste</li>
        <li>Easy instant preparation</li>
    `;

    document.getElementById('modalBg').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal(e) {
    if (e && e.target !== document.getElementById('modalBg')) return;
    document.getElementById('modalBg').classList.remove('open');
    document.body.style.overflow = '';
    modalCurrentKey = null;
}

// ========== FORM SUBMISSION ==========
function submitOrder(e) {
    e.preventDefault();
    // Get form data to pass to Meta for better matching
    const customerName = document.getElementById('name').value;
    const customerPhone = document.getElementById('phone').value;

    // "Identify" the user to Meta
    fbq('init', '912706091799052', {
        'fn': customerName,
        'ph': customerPhone
    });

    // Check cart
    if (Object.keys(cart).length === 0) {
        alert('Please add items to your cart!');
        return;
    }

    // Check minimum order
    const subtotal = Object.keys(cart).reduce((sum, k) => sum + (PRODUCTS[k].price * cart[k]), 0);
    if (subtotal < MIN_ORDER) {
        alert(`Minimum order is BDT ${MIN_ORDER}. Your current total is BDT ${subtotal}.`);
        return;
    }

    const btn = document.querySelector('.submit-btn');
    btn.textContent = '⏳ Verifying Order...';
    btn.disabled = true;

    const formData = new FormData(document.getElementById('orderForm'));

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(r => r.json())
    .then(data => {
        if (data.success) {
            // --- ADD THIS LINE FOR META PIXEL ---
            fbq('track', 'Purchase', {
                value: document.getElementById('fTotal').value,
                currency: 'BDT'
            });
            // ------------------------------------
            document.getElementById('checkout-section').style.display = 'none';
            document.getElementById('successCard').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            alert('Something went wrong. Please try again.');
            btn.textContent = '🚚 Place Order — Cash on Delivery';
            btn.disabled = false;
        }
    })
    .catch(err => {
        alert('Connection error. Please try again.');
        btn.textContent = '🚚 Place Order — Cash on Delivery';
        btn.disabled = false;
    });
}

// ========== COPY PROTECTION ==========
(function() {
    function toast() {
        let t = document.getElementById('toast');
        if (t) t.remove();
        
        t = document.createElement('div');
        t.id = 'toast';
        t.textContent = '🔒 Content is protected';
        t.style.cssText = 'position:fixed;bottom:80px;right:20px;background:#1a4731;color:white;padding:10px 16px;border-radius:999px;font-weight:700;font-size:0.8em;z-index:9999;box-shadow:0 3px 12px rgba(0,0,0,0.2)';
        document.body.appendChild(t);
        setTimeout(() => t && t.remove(), 1600);
    }

    document.addEventListener('contextmenu', e => { e.preventDefault(); toast(); });
    document.addEventListener('copy', e => { e.preventDefault(); toast(); });
    document.addEventListener('cut', e => { e.preventDefault(); toast(); });
    document.addEventListener('keydown', e => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || (e.ctrlKey && (e.key === 'U' || e.key === 'C' || e.key === 'S'))) {
            e.preventDefault();
            toast();
        }
    });
})();

// ========== CAROUSEL DRAG FUNCTIONALITY ==========
(function() {
    const carousel = document.getElementById('carousel');
    if (!carousel) return;

    let isDown = false, startX, scrollLeft;

    carousel.addEventListener('mousedown', e => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        carousel.style.cursor = 'grabbing';
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.3;
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Touch support
    carousel.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        scrollLeft = carousel.scrollLeft;
    }, { passive: true });

    carousel.addEventListener('touchmove', e => {
        const x = e.touches[0].clientX;
        const walk = (x - startX) * 1.3;
        carousel.scrollLeft = scrollLeft - walk;
    }, { passive: true });
})();
