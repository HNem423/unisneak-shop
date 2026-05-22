// ===== SẢN PHẨM =====
const products = [
    {
        id: 1,
        name: "Urban Earthwork Sneaker",
        category: "Giày",
        price: 1850000,
        emoji: "👟",
        image: "images/shoe1.jpg",
        description: "Thiết kế layer đa sắc thái, phong cách Streetwear năng động và trẻ trung.",
        material: "Da tổng hợp + Đế Rubber",
        color: "Trắng/Nâu/Đen",
        sizes: "38 - 44",
        warranty: "06 tháng"
    },
    {
        id: 2,
        name: "Navy Stripe Essential",
        category: "Giày",
        price: 1790000,
        emoji: "🛹",
        image: "images/shoe2.jpg",
        description: "Mẫu giày casual basic phối màu Navy tinh tế, phù hợp cho cả đi học và đi làm.",
        material: "Microfiber Leather + Đế Phylon",
        color: "Trắng/Xám/Xanh Navy",
        sizes: "36 - 44",
        warranty: "06 tháng"
    },
    {
        id: 3,
        name: "Contrast Mono High-Sole",
        category: "Giày",
        price: 1920000,
        emoji: "🏁",
        image: "images/shoe3.jpg",
        description: "Phong cách tương phản mạnh mẽ với đế cao tôn dáng, giúp bạn nổi bật trong mọi khung hình.",
        material: "Da nhăn cao cấp + Đế Cao su đúc",
        color: "Đen/Trắng",
        sizes: "37 - 45",
        warranty: "12 tháng"
    },
    {
        id: 4,
        name: "Pure Cloud Platform",
        category: "Giày",
        price: 1880000,
        emoji: "☁️",
        image: "images/shoe4.jpg",
        description: "Thiết kế full trắng tối giản với đế platform 4cm, mang lại cảm giác êm ái như đi trên mây.",
        material: "Da PU cao cấp + Đệm EVA",
        color: "Trắng tinh khôi",
        sizes: "35 - 43",
        warranty: "06 tháng"
    },
    {
        id: 5,
        name: "Aero-Knit White Runner",
        category: "Giày",
        price: 2950000,
        emoji: "⚡",
        image: "images/shoe5.jpg",
        description: "Công nghệ dệt Aero-Knit thoáng khí tối đa, phù hợp cho các hoạt động thể thao và đi làm hàng ngày.",
        material: "Breathable Mesh + Phylon Sole",
        color: "Trắng tinh khôi",
        sizes: "36 - 44",
        warranty: "12 tháng"
    },
    {
        id: 6,
        name: "Sakura Gradient Walker",
        category: "Giày",
        price: 2890000,
        emoji: "🌸",
        image: "images/shoe6.jpg",
        description: "Sự kết hợp hoàn hảo giữa sắc hồng anh đào và trắng, đế đệm giảm chấn bảo vệ đôi chân linh hoạt.",
        material: "Textile + EVA Elastic",
        color: "Trắng/Hồng Pastel",
        sizes: "35 - 40",
        warranty: "06 tháng"
    },
    {
        id: 7,
        name: "Classic Khaki Backpack",
        category: "Phụ kiện",
        price: 450000,
        emoji: "🎒",
        image: "images/bag1.jpg",
        description: "Balo màu khaki basic với thiết kế nhiều ngăn tiện lợi cho học sinh, sinh viên.",
        material: "Canvas chống thấm nhẹ",
        color: "Khaki/Beige",
        sizes: "30x42 cm",
        warranty: "03 tháng"
    },
    {
        id: 8,
        name: "Midnight Simple Backpack",
        category: "Phụ kiện",
        price: 450000,
        emoji: "🖤",
        image: "images/bag2.jpg",
        description: "Mẫu balo đen tối giản, bền bỉ, phù hợp với mọi phong cách trang phục.",
        material: "Polyester 600D",
        color: "Đen",
        sizes: "30x42 cm",
        warranty: "03 tháng"
    },
    {
        id: 9,
        name: "Urban Explorer Crossbody",
        category: "Phụ kiện",
        price: 320000,
        emoji: "🚲",
        image: "images/bag3.jpg",
        description: "Mẫu balo xanh bền bỉ với thiết kế hiện đại, phù hợp cho phong cách cá tính năng động.",
        material: "Oxford kháng nước",
        color: "Đen",
        sizes: "18x22 cm",
        warranty: "03 tháng"
        },
    {
        id: 10,
        name: "Signature Canvas Tote",
        category: "Phụ kiện",
        price: 150000,
        emoji: "🛍️",
        image: "images/bag5.jpg",
        description: "Túi vải tote in chữ phong cách tối giản, phù hợp để đi chơi hoặc đi chợ nhẹ nhàng.",
        material: "Canvas dày dặn",
        color: "Kem/Trắng",
        sizes: "35x40 cm",
        warranty: "Không áp dụng"
        },
    {
        id: 11,
        name: "Sporty Drawstring Bag",
        category: "Phụ kiện",
        price: 180000,
        emoji: "🏀",
        image: "images/bag6.jpg",
        description: "Túi rút dây siêu nhẹ, in họa tiết thể thao trẻ trung, phù hợp đi tập gym hoặc dã ngoại.",
        material: "Dù 2 lớp",
        color: "Đen/Trắng",
        sizes: "33x45 cm",
        warranty: "Không áp dụng"
        },
    {
        id: 12,
        name: "Sergeant Pepper Street Cap",
        category: "Phụ kiện",
        price: 280000,
        emoji: "🎖️",
        image: "images/cap2.jpg",
        description: "Thiết kế thêu chữ nổi Sergeant Pepper phong cách retro, vành nón rách tua rua cực chất.",
        material: "Khaki thô cao cấp",
        color: "Đen Than",
        sizes: "Free size (có khóa chỉnh)",
        warranty: "Không áp dụng"
    },
    {
    id: 13,
    name: "Pink Galaxy Star Cap",
    category: "Phụ kiện",
    price: 250000,
    emoji: "💖",
    image: "images/cap3.jpg",
    description: "Tone màu hồng pastel ngọt ngào kết hợp cùng form nón rách, tạo sự đối lập thú vị.",
    material: "Canvas mềm",
    color: "Hồng Sakura",
    sizes: "Free size (có khóa chỉnh)",
    warranty: "Không áp dụng"
    },
    {
    id: 14,
    name: "G.A.R.E Rusty Orange Cap",
    category: "Phụ kiện",
    price: 265000,
    emoji: "🔥",
    image: "images/cap4.jpg",
    description: "Màu cam đất thời thượng với chữ thêu G.A.R.E tối giản, phù hợp cho những chuyến đi phượt.",
    material: "Khaki dệt kim",
    color: "Cam Đất",
    sizes: "Free size (có khóa chỉnh)",
    warranty: "Không áp dụng"
    },  
    {
        id: 15,
        name: "Coffee Grunge Distressed Cap",
        category: "Phụ kiện",
        price: 270000,
        emoji: "☕",
        image: "images/cap5.jpg",
        description: "Hiệu ứng wash loang màu cà phê cổ điển, mang lại vẻ ngoài sành điệu và phong trần.",
        material: "Vải bố wash",
        color: "Nâu Cà Phê",
        sizes: "Free size (có khóa chỉnh)",
        warranty: "Không áp dụng"
    },
    {
        id: 16,
        name: "Vintage Star Distressed Cap",
        category: "Phụ kiện",
        price: 250000,
        emoji: "⭐",
        image: "images/cap1.jpg",
        description: "Nón lưỡi trai chất liệu denim wash bụi bặm với điểm nhấn ngôi sao rách độc đáo.",
        material: "100% Cotton Denim",
        color: "Xám Wash",
        sizes: "Free size (có khóa chỉnh)",
        warranty: "Không áp dụng"
    }
];

// Thêm giảm giá cho một số sản phẩm
products.forEach(product => {
    if (product.id % 3 === 0 && product.id !== 9) { // Cứ 3 sản phẩm thì 1 sản phẩm giảm giá
        product.originalPrice = product.price;
        product.price = Math.floor(product.price * 0.8); // Giảm 20%
    }
});

// ===== GIỎ HÀNG - KHỞI TẠO =====
let cart = JSON.parse(localStorage.getItem('unisneak_cart')) || [];

// ===== BIẾN TOÀN CỤC =====
let currentCategory = 'all';
let searchKeyword = '';
let currentSort = 'default';
let currentPage = 1;
const itemsPerPage = 6;
let allFilteredProducts = [];
let currentProduct = null;
let appliedCoupon = null;

// ===== HÀM: LỌC + TÌM KIẾM + SẮP XẾP =====
function getFilteredAndSearchedProducts() {
    let filtered = [...products];
    
    // Lọc theo danh mục
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }
    
    // Lọc theo từ khóa tìm kiếm
    if (searchKeyword) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchKeyword) || 
            p.description.toLowerCase().includes(searchKeyword)
        );
    }
    
    // Sắp xếp
    if (currentSort === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'name-asc') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === 'name-desc') {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    return filtered;
}

// ===== HÀM: TÌM KIẾM SẢN PHẨM =====
function searchProducts() {
    const searchInput = document.getElementById('search-input');
    searchKeyword = searchInput.value.trim().toLowerCase();
    currentPage = 1;
    renderProductsWithFilters();
}

// ===== HÀM: SẮP XẾP SẢN PHẨM =====
function sortProducts() {
    const sortSelect = document.getElementById('sort-select');
    currentSort = sortSelect.value;
    renderProductsWithFilters();
}

// ===== HÀM: LỌC SẢN PHẨM THEO DANH MỤC =====
function filterProducts(category, event) {
    currentCategory = category;
    currentPage = 1;
    searchKeyword = '';
    document.getElementById('search-input').value = '';
    
    // CẬP NHẬT TRẠNG THÁI NÚT LỌC
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    renderProductsWithFilters();
}

// ===== HÀM: HIỂN THỊ SẢN PHẨM VỚI PHÂN TRANG =====
function renderProductsWithFilters() {
    allFilteredProducts = getFilteredAndSearchedProducts();
    
    // Hiển thị số lượng sản phẩm
    const productCount = document.getElementById('product-count');
    if (productCount) {
        productCount.textContent = `Tìm thấy ${allFilteredProducts.length} sản phẩm`;
    }
    
    // Phân trang
    const totalPages = Math.ceil(allFilteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = allFilteredProducts.slice(startIndex, endIndex);
    
    // Hiển thị sản phẩm
    renderProductsWithPagination(paginatedProducts);
    
    // Hiển thị phân trang
    renderPagination(totalPages);
}

// ===== HÀM: HIỂN THỊ SẢN PHẨM CÓ PHÂN TRANG =====
function renderProductsWithPagination(productsToShow) {
    const productList = document.getElementById('product-list');
    if (!productList) return;
    
    productList.innerHTML = '';

    if (productsToShow.length === 0) {
        productList.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 3rem;">Không tìm thấy sản phẩm nào</p>';
        return;
    }

    productsToShow.forEach(product => {
        const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const productImage = product.image ?
            `<img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.parentElement.innerHTML='${product.emoji}'" />` :
            product.emoji;
        
        // Thêm badge sale nếu có giảm giá
        const saleBadge = discount > 0 ? `<div class="sale-badge">-${discount}%</div>` : '';
        
        // Hiển thị giá (có thể có giá cũ)
        const priceHtml = product.originalPrice ? 
            `<div>
                <span class="old-price">${product.originalPrice.toLocaleString('vi-VN')}đ</span>
                <span class="product-price">${product.price.toLocaleString('vi-VN')}đ</span>
            </div>` :
            `<div class="product-price">${product.price.toLocaleString('vi-VN')}đ</div>`;
        
        // Rating giả lập
        const rating = Math.floor(Math.random() * 2) + 4;
        const stars = '⭐'.repeat(rating) + '☆'.repeat(5 - rating);

        productCard.innerHTML = `
            ${saleBadge}
            <div class="product-image" onclick="openProductModal(${product.id})">${productImage}</div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name" onclick="openProductModal(${product.id})">${product.name}</div>
                <div class="rating">${stars}</div>
                <div class="product-description">${product.description.substring(0, 60)}${product.description.length > 60 ? '...' : ''}</div>
                <div class="product-footer">
                    ${priceHtml}
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        Thêm
                    </button>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// ===== HÀM: HIỂN THỊ PHÂN TRANG =====
function renderPagination(totalPages) {
    const paginationDiv = document.getElementById('pagination');
    if (!paginationDiv) return;
    
    if (totalPages <= 1) {
        paginationDiv.innerHTML = '';
        return;
    }
    
    let paginationHtml = '';
    for (let i = 1; i <= totalPages; i++) {
        paginationHtml += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
    }
    paginationDiv.innerHTML = paginationHtml;
}

// ===== HÀM: CHUYỂN TRANG =====
function goToPage(page) {
    currentPage = page;
    renderProductsWithFilters();
    window.scrollTo({ top: document.getElementById('products').offsetTop - 100, behavior: 'smooth' });
}

// ===== HÀM: THÊM SẢN PHẨM VÀO GIỎ =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            emoji: product.emoji,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    showNotification(`Đã thêm ${product.name} vào giỏ hàng`);
}

// ===== HÀM: CẬP NHẬT GIỎ HÀNG =====
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const emptyMsg = document.getElementById('empty-cart-msg');
    const totalPrice = document.getElementById('total-price');
    
    if (!cartCount) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cartItems) {
        cartItems.innerHTML = '';
    }
    
    if (cart.length === 0) {
        if (emptyMsg) emptyMsg.style.display = 'block';
    } else {
        if (emptyMsg) emptyMsg.style.display = 'none';
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toLocaleString('vi-VN')}đ</div>
                    <div class="cart-item-qty">
                        <button onclick="decreaseQty(${item.id})" style="width:25px; cursor:pointer;">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseQty(${item.id})" style="width:25px; cursor:pointer;">+</button>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
            `;
            if (cartItems) cartItems.appendChild(cartItem);
        });
    }
    
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (appliedCoupon) {
        if (appliedCoupon.discount) {
            const discountAmount = Math.min(total * appliedCoupon.discount / 100, appliedCoupon.maxDiscount);
            total = total - discountAmount;
            if (totalPrice) {
                totalPrice.innerHTML = `${total.toLocaleString('vi-VN')}đ <span style="font-size:0.8rem; color:#e74c3c;">(đã giảm ${discountAmount.toLocaleString('vi-VN')}đ)</span>`;
            }
        } else if (appliedCoupon.freeShip) {
            if (totalPrice) {
                totalPrice.innerHTML = `${total.toLocaleString('vi-VN')}đ <span style="font-size:0.8rem; color:#00a651;">(miễn phí ship)</span>`;
            }
        }
    } else {
        if (totalPrice) totalPrice.textContent = total.toLocaleString('vi-VN') + 'đ';
    }
}

// ===== HÀM: TĂNG SỐ LƯỢNG =====
function increaseQty(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        saveCart();
        updateCartUI();
    }
}

// ===== HÀM: GIẢM SỐ LƯỢNG =====
function decreaseQty(productId) {
    const item = cart.find(item => item.id === productId);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCart();
        updateCartUI();
    }
}

// ===== HÀM: XÓA SẢN PHẨM =====
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showNotification('Đã xóa sản phẩm khỏi giỏ hàng');
}

// ===== HÀM: LƯU GIỎ HÀNG =====
function saveCart() {
    localStorage.setItem('unisneak_cart', JSON.stringify(cart));
}

// ===== HÀM: MỞ/ĐÓNG GIỎ HÀNG =====
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartSidebar && cartOverlay) {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
    }
}

// ===== HÀM: THANH TOÁN =====
function checkout() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng của bạn đang trống');
        return;
    }
    
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (appliedCoupon) {
        if (appliedCoupon.discount) {
            const discountAmount = Math.min(total * appliedCoupon.discount / 100, appliedCoupon.maxDiscount);
            total = total - discountAmount;
        }
    }
    
    alert(`Cảm ơn bạn đã mua sắm!\n\nTổng tiền: ${total.toLocaleString('vi-VN')}đ\n\nVui lòng hoàn tất thanh toán tại cửa hàng hoặc qua ngân hàng.`);
    
    cart = [];
    appliedCoupon = null;
    saveCart();
    updateCartUI();
    if (document.getElementById('cart-sidebar').classList.contains('active')) {
        toggleCart();
    }
    
    showNotification('Đơn hàng của bạn đã được xác nhận!');
}

// ===== HÀM: ÁP DỤNG MÃ GIẢM GIÁ =====
function applyCouponFromCart() {
    const input = document.getElementById('cart-coupon-input');
    if (!input) return;
    
    const code = input.value.trim().toUpperCase();
    
    const coupons = {
        'WELCOME20': { discount: 20, maxDiscount: 100000 },
        'UNISNEAK50': { discount: 50, maxDiscount: 200000 },
        'FREESHIP': { freeShip: true }
    };
    
    if (coupons[code]) {
        appliedCoupon = coupons[code];
        showNotification(`Áp dụng mã ${code} thành công!`);
        updateCartUI();
        input.value = '';
    } else {
        showNotification('Mã không hợp lệ');
    }
}

// ===== HÀM: HIỂN THỊ THÔNG BÁO =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #00a651;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 300;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    `;
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== HÀM: CUỘN ĐẾN SẢN PHẨM =====
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== HÀM: MỞ MODAL CHI TIẾT =====
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    const detailEmoji = document.getElementById('detail-emoji');
    if (detailEmoji) {
        if (product.image) {
            detailEmoji.innerHTML = `<img src="${product.image}" alt="${product.name}" class="modal-detail-img" onerror="this.parentElement.innerHTML='${product.emoji}'" />`;
        } else {
            detailEmoji.textContent = product.emoji;
        }
    }
    
    const elements = {
        'detail-category': product.category,
        'detail-name': product.name,
        'detail-description': product.description,
        'detail-material': product.material,
        'detail-color': product.color,
        'detail-sizes': product.sizes,
        'detail-warranty': product.warranty,
        'detail-price': product.price.toLocaleString('vi-VN') + 'đ'
    };
    
    for (const [id, value] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }
    
    const modal = document.getElementById('product-modal');
    const overlay = document.getElementById('modal-overlay');
    if (modal && overlay) {
        modal.classList.add('active');
        overlay.classList.add('active');
    }
    
    showRelatedProducts(productId);
}

// ===== HÀM: HIỂN THỊ SẢN PHẨM LIÊN QUAN =====
function showRelatedProducts(productId) {
    const currentProductData = products.find(p => p.id === productId);
    if (!currentProductData) return;
    
    const related = products.filter(p => p.category === currentProductData.category && p.id !== productId).slice(0, 3);
    
    const modalInfo = document.querySelector('.modal-info');
    const existingRelated = document.querySelector('.related-products');
    if (existingRelated) existingRelated.remove();
    
    if (modalInfo && related.length > 0) {
        const relatedHtml = `
            <div class="related-products">
                <h3>Sản phẩm liên quan</h3>
                <div class="related-grid">
                    ${related.map(p => `
                        <div class="related-item" onclick="openProductModal(${p.id})">
                            <div style="font-size: 2rem;">${p.emoji}</div>
                            <div style="font-size: 0.8rem; margin-top: 0.5rem; font-weight: 600;">${p.name}</div>
                            <div style="color: var(--accent-color); font-weight: bold; font-size: 0.9rem;">${p.price.toLocaleString('vi-VN')}đ</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        modalInfo.insertAdjacentHTML('beforeend', relatedHtml);
    }
}

// ===== HÀM: ĐÓNG MODAL =====
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    const overlay = document.getElementById('modal-overlay');
    if (modal && overlay) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
    currentProduct = null;
}

// ===== HÀM: THÊM TỪ MODAL =====
function addToCartFromModal() {
    if (currentProduct) {
        addToCart(currentProduct.id);
        closeProductModal();
    }
}

// ===== HÀM: KHỞI TẠO TRANG =====
function init() {
    const cartIcon = document.getElementById('cart-icon-btn');
    if (cartIcon) {
        cartIcon.addEventListener('click', toggleCart);
    }

    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', toggleCart);
    }

    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProductModal);
    }

    renderProductsWithFilters();
    updateCartUI();
}

init();

// ===== HÀM: MỞ MAP LỚN HƠN (TÙY CHỌN) =====
function openFullMap() {
    const mapUrl = "https://www.google.com/maps/search/?api=1&query=157+Duong+Ba+Trac+Quan+8+TPHCM";
    window.open(mapUrl, '_blank');
}

// ===== HÀM: COPY ĐỊA CHỈ =====
function copyAddress() {
    const address = "157 Dương Bá Trạc, Quận 8, TP.HCM";
    navigator.clipboard.writeText(address).then(() => {
        showNotification("📋 Đã sao chép địa chỉ!");
    }).catch(() => {
        showNotification("Không thể sao chép địa chỉ");
    });
}

// ===== THÊM SỰ KIỆN CHO MAP =====
function setupMapEvents() {
    const mapContainer = document.querySelector('.map-container');
    const mapAddress = document.querySelector('.map-address');
    
    if (mapContainer) {
        mapContainer.style.cursor = 'pointer';
        mapContainer.addEventListener('click', openFullMap);
    }
    
    if (mapAddress) {
        mapAddress.style.cursor = 'pointer';
        mapAddress.addEventListener('click', copyAddress);
    }
}

// ===== IMAGE SLIDER - BANNER ẢNH CHẠY NGANG =====
let currentSlideIndex = 0;
let slideInterval;
let isAutoPlaying = true;

// Khởi tạo slider
function initSlider() {
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('sliderDots');
    
    if (!track || slides.length === 0) return;
    
    // Tạo dấu chấm (chỉ lấy nửa số slide thực)
    const totalRealSlides = slides.length / 2;
    
    for (let i = 0; i < totalRealSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    // Lưu số slide thực
    window.totalRealSlides = totalRealSlides;
    
    // Cập nhật dấu chấm mỗi khi slide thay đổi
    track.addEventListener('animationiteration', () => {
        // Không cần xử lý thêm vì đang chạy vô hạn
    });
}

// Chuyển đến slide cụ thể (dùng cho nút bấm)
function goToSlide(index) {
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const totalRealSlides = window.totalRealSlides;
    
    if (!track || !slides.length) return;
    
    // Dừng animation tạm thời
    track.style.animation = 'none';
    
    // Tính toán vị trí
    const slideWidth = slides[0].offsetWidth;
    const targetPosition = (index * slideWidth);
    
    // Set vị trí mới
    track.style.transform = `translateX(-${targetPosition}px)`;
    
    // Khởi động lại animation
    setTimeout(() => {
        track.style.animation = 'slideAnimation 20s linear infinite';
    }, 50);
    
    // Cập nhật dấu chấm
    updateDots(index);
    currentSlideIndex = index;
}

// Chuyển sang slide tiếp theo
function nextSlide() {
    let newIndex = currentSlideIndex + 1;
    if (newIndex >= window.totalRealSlides) {
        newIndex = 0;
    }
    goToSlide(newIndex);
}

// Chuyển sang slide trước
function prevSlide() {
    let newIndex = currentSlideIndex - 1;
    if (newIndex < 0) {
        newIndex = window.totalRealSlides - 1;
    }
    goToSlide(newIndex);
}

// Cập nhật dấu chấm active
function updateDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Dừng auto play khi hover
function setupSliderHover() {
    const slider = document.querySelector('.image-slider-container');
    const track = document.getElementById('sliderTrack');
    
    if (!slider || !track) return;
    
    slider.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });
    
    slider.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });
}

// Lấy ảnh từ file local (thay thế ảnh mẫu)
function updateSliderImages(images) {
    const slides = document.querySelectorAll('.slide img');
    slides.forEach((img, index) => {
        if (images[index]) {
            img.src = images[index];
        }
    });
}

// Cấu hình ảnh cho slider (thay ảnh thật của bạn)
const sliderImages = [
    "images/banner1.jpg",
    "images/banner2.jpg", 
    "images/banner3.jpg",
    "images/banner4.jpg"
];

// Gọi khi DOM load
document.addEventListener('DOMContentLoaded', function() {
    // ... code cũ giữ nguyên ...
    
    // Khởi tạo slider
    initSlider();
    setupSliderHover();
    
    // Nếu có ảnh thật, bỏ comment dòng dưới
    // updateSliderImages(sliderImages);
});