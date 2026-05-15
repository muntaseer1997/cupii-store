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
    // Individual coffees
'tora-bika': { name: 'Torabika Cappuccino', price: 35, emoji: '☕', imgUrl: 'torabika.png', desc: 'Smooth cappuccino instant coffee blend With Added Suger weight: 12.5g' },
'kitkat': { name: 'KitKat Hot Chocolate', price: 120, emoji: '🍫', imgUrl: 'kitkat.png', desc: 'Rich chocolate hot beverage mix weight: 33g' },
'caramel': { name: 'Caramel Latte', price: 100, emoji: '🥞', imgUrl: 'caramel.png', desc: 'Sweet caramel flavored latte weight: 23g' },
'chocolaty': { name: 'Chocolaty Mocha', price: 100, emoji: '🤎', imgUrl: 'chocolaty.png', desc: 'Coffee blended with chocolate weight: 25g' },
'hazelnut': { name: 'OldTown Hazelnut', price: 100, emoji: '🌰', imgUrl: 'hazelnut.png', desc: 'Premium hazelnut flavored instant coffee weight: 31.6g' },
'white': { name: 'OldTown White Coffee Salted Caramel', price: 100, emoji: '🌸', imgUrl: 'white-coffee.png', desc: 'Lighter roasted coffee with creamy taste and salted caramel weight: 31.6g' },
'pocky': { name: 'Pocky Chocolate', price: 300, emoji: '🍰', imgUrl: 'Pocky.png', desc: 'Chocolate biscuit sticks treat weight: 33g' },
'hershey-kisses': { name: 'Hershey's Kisses Milk Chocolate', price: 20, emoji: '🟫', imgUrl: 'hershey.png', desc: 'Classic milk chocolate kisses weight: 4.5g' },
'kinder': { name: 'Kinder Bueno', price: 130, emoji: '🍪', imgUrl: 'Kinder.png', desc: 'Crispy wafer with hazelnut filling weight: 40gm' },
'toblerone': { name: 'Toblerone Chocolate', price: 300, emoji: '😋', imgUrl: 'Toblerone.png', desc: 'Nougat and almonds chocolate bar weight: 100g ' },
'galaxy-smooth': { name: 'Galaxy Smooth Milk', price: 280, emoji: '🧁', imgUrl: 'galaxy-smooth.png', desc: 'Smooth milk chocolate weight: 100g' },
'kitkat-chocolate': { name: 'Kitkat chocolate', price: 50, emoji: '🍩', imgUrl: 'kitkat-chocolate.png', desc: 'Crispy wafer chocolate weight: 17.7g' },
'hershey-kisses-cookies': { name: 'Hershey\'s Kisses Cookies & Cream', price: 20, emoji: '🍨', imgUrl: 'hershey-hershey.png', desc: 'Chocolate with cookies and cream weight: 4.5g' },
'Snickers': { name: 'Snickers Chocolate', price: 50, emoji: '🍦', imgUrl: 'Snickers.png', desc: 'Peanuts, nougat and caramel chocolate weight: 14g' },
'cadbury-drinking': { name: 'Cadbury Drinking Chocolate', price: 1240, emoji: '😋', imgUrl: 'cadbury-drinking.png', desc: 'Premium chocolate drink mix coffee weight: 500gm' },
    
    // Premium imported brands
'kenco': { name: 'Kenco Coffee', price: 510, emoji: '🍰', imgUrl: 'kenco.png', desc: 'Premium instant coffee from UK weight: 100gm' },
'macgold': { name: 'Mac Gold', price: 1200, emoji: '✨', imgUrl: 'macgold.png', desc: 'Rich, aromatic premium instant coffee coffee weight: 200gm' },
'coffee-mate': { name: 'Nestle Coffee Mate', price: 350, emoji: '🟫', imgUrl: 'coffee-mate.png', desc: 'Creamy coffee whitener and flavor enhancer coffee weight: 450gm' },
'nescafe-gold': { name: 'Nescafé Gold', price: 1500, emoji: '👑', imgUrl: 'nescafe-gold.png', desc: 'Premium blend with smooth taste weight: 190gm' },
'davidoff': { name: 'Davidoff Rich Aroma', price: 940, emoji: '🏆', imgUrl: 'davidoff.png', desc: 'Swiss premium coffee with rich flavor weight: 100gm' },
'jacobs': { name: 'Jacobs Gold', price: 1000, emoji: '🌟', imgUrl: 'jacobsg.png', desc: 'Premium instant coffee, smooth and bold weight: 100gm' },
'davidoff-fine': { name: 'Davidoff Fine Aroma', price: 940, emoji: '💎', imgUrl: 'davidoff-fine.png', desc: 'Delicate aroma with refined taste weight: 100gm' },
'jacobs-Monarch': { name: 'Jacobs Monarch', price: 1000, emoji: '☕', imgUrl: 'jacobsm.png', desc: 'Royal blend of premium arabica coffee weight: 100gm' },
'davidoff-espresso': { name: 'Davidoff Espresso', price: 940, emoji: '😋', imgUrl: 'davidoff-espresso.png', desc: 'Strong espresso style instant coffee weight: 100gm' },
'cadbury': { name: 'Cadbury Milk Chocolate', price: 1500, emoji: '🍪', imgUrl: 'cadbury.png', desc: 'Premium British milk chocolate weight: 700gm' },
'kitkat-chunky': { name: 'KitKat Chunky White Chocolate', price: 550, emoji: '🍫', imgUrl: 'kitkat-chunky.png', desc: 'Chunky wafer with white chocolate coating' },
'toblerone-pack': { name: 'Toblerone Pack', price: 600, emoji: '🥃', imgUrl: 'toblerone-pack.png', desc: 'Swiss triangle chocolate with nougat weight: 200gm' },
'kinder-bueno': { name: 'Kinder Bueno', price: 640, emoji: '🍸', imgUrl: 'kinder-bueno.png', desc: 'Wafer coated with milk and hazelnut weight: 200gm' },
'cadbury-silk': { name: 'Cadbury Dairy Milk Silk Bubbly', price: 420, emoji: '🍹', imgUrl: 'cadbury-silk.png', desc: 'Soft bubbly milk chocolate weight: 120gm' },
'nutella-ferrero': { name: 'Nutella Ferrero', price: 680, emoji: '🎂', imgUrl: 'nutella-ferrero.png', desc: 'Hazelnut and cocoa chocolate spread weight: 130gm' },

};

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
    const coffees = ['tora-bika', 'kitkat', 'caramel', 'chocolaty', 'hazelnut', 'white', 'pocky', 'hershey-kisses', 'kinder', 'toblerone', 'galaxy-smooth', 'kitkat-chocolate', 'hershey-kisses-cookies', 'Snickers', 'cadbury-drinking'];
    
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
                    <div class="pi-desc">${p.desc || 'Individual sachet'}</div>
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
 const premiums = ['kenco', 'macgold', 'coffee-mate', 'nescafe-gold', 'davidoff', 'jacobs', 'davidoff-fine', 'jacobs-Monarch', 'davidoff-espresso', 'cadbury', 'kitkat-chunky', 'toblerone-pack', 'kinder-bueno', 'cadbury-silk', 'nutella-ferrero'];
    
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
                    <div class="pi-desc">${p.desc || 'Premium Import'}</div>
                    <div class="pi-footer">
                        <span class="pi-price">BDT ${p.price}</span>
                        <div class="pi-button-group">
                            <button class="pi-btn-view" onclick="viewPremium('${key}')">View</button>
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
    cart[key] = Math.max(0, cart[key] + delta);
    if (cart[key] === 0) delete cart[key];
    updateCart();
}
function updateQuantity(id, delta) {
    if (CART[id]) {
        CART[id] += delta;
        // If quantity drops to 0 or below, remove it from the cart completely
        if (CART[id] <= 0) {
            delete CART[id];
        }
        updateCartUI();
    }
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
function closeModal(e) {
    if (e && e.target !== document.getElementById('modalBg')) return;
    document.getElementById('modalBg').classList.remove('open');
    document.body.style.overflow = '';
    modalCurrentKey = null;
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
