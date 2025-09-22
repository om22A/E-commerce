// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // ======================================================
    // SECTION 0: NAVBAR HIDE ON SCROLL LOGIC
    // ======================================================
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight) {
                navbar.classList.add('navbar-hidden');
            } else {
                navbar.classList.remove('navbar-hidden');
            }
            lastScrollTop = scrollTop;
        });
    }

    // ======================================================
    // SECTION 1: PRODUCTS DATA
    // ======================================================
    const products = [
        { id: 1, name: 'لابتوب حديث', price: 3500, image: 'Laptop.jpg', category: 'electronics', description: 'جهاز لابتوب قوي بشاشة عالية الدقة، مثالي للأعمال والدراسة.' },
        { id: 2, name: 'ملابس أنيقة', price: 500, image: 'Clothes.jpg', category: 'fashion', description: 'تشكيلة جديدة من الملابس العصرية التي تناسب جميع الأذواق.' },
        { id: 3, name: 'حذاء رياضي', price: 800, image: 'Shoes.jpg', category: 'footwear', description: 'حذاء جري خفيف الوزن يوفر راحة فائقة لقدميك أثناء التمرين.' },
        { id: 4, name: 'كاميرا احترافية', price: 2200, image: 'camera.jpg', category: 'electronics', description: 'كاميرا رقمية بدقة 24 ميجابكسل لتصوير لحظاتك بجودة لا تضاهى.' },
        { id: 5, name: 'ساعة ذكية', price: 1250, image: 'smart Watch.jpg', category: 'accessories', description: 'ساعة ذكية لمتابعة نشاطك الصحي والرياضي، مع استقبال الإشعارات.' },
        { id: 6, name: 'حقيبة ظهر', price: 450, image: 'backpack.jpg', category: 'accessories', description: 'حقيبة ظهر عصرية ومتينة، مثالية للجامعة والرحلات القصيرة.' },
        { id: 7, name: 'دراجة', price: 1990, image: 'Bicycle.jpg', category: 'sports', description: 'دراجة جبلية خفيفة الوزن بـ 21 سرعة لتجربة قيادة ممتعة.' },
        { id: 8, name: 'مج', price: 249, image: 'game mug.jpg', category: 'home', description: 'مج يحافظ على حرارة مشروبك المفضل لساعات، بتصميم جذاب.' },
        { id: 9, name: 'كرسي', price: 3500, image: 'Gaming Chair.jpg', category: 'furniture', description: 'كرسي مريح مصمم خصيصاً لجلسات اللعب الطويلة مع دعم كامل للظهر.' },
        { id: 10, name: 'قبعة', price: 320, image: 'hat.jpg', category: 'fashion', description: 'قبعة كلاسيكية أنيقة للحماية من الشمس، مناسبة لكل الأوقات.' },
        { id: 11, name: 'سماعة راس', price: 540, image: 'HeadPhones.jpg', category: 'electronics', description: 'سماعات رأس بصوت نقي وميكروفون واضح للمكالمات والموسيقى.' },
        { id: 12, name: 'لوحة مفاتيح', price: 850, image: 'Keyboard.jpg', category: 'electronics', description: 'لوحة مفاتيح ميكانيكية بإضاءة خلفية لتجربة كتابة ولعب أفضل.' },
        { id: 13, name: 'ماء', price: 150, image: 'Water.jpg', category: 'accessories', description: 'زجاجة ماء رياضية قابلة لإعادة الاستخدام وخالية من مادة BPA.' },
        { id: 14, name: 'الفأره', price: 600, image: 'Mouse.jpg', category: 'electronics', description: 'فأرة بصرية لاسلكية بتصميم مريح لليد ودقة عالية في التتبع.' },
        { id: 15, name: 'حاسوب مكتبي', price: 25000, image: 'PC.jpg', category: 'electronics', description: 'جهاز كمبيوتر مكتبي بأداء فائق مناسب للمهام الشاقة والألعاب.' },
        { id: 16, name: 'استحمام', price: 480, image: 'Shower.jpg', category: 'health', description: 'مجموعة متكاملة للعناية بالجسم برائحة منعشة تدوم طويلاً.' },
        { id: 17, name: 'وجبة خفيفة', price: 50, image: 'snack.jpg', category: 'food', description: 'سناك صحي ومقرمش غني بالبروتين، مثالي بين الوجبات.' },
        { id: 18, name: 'تيشرت', price: 300, image: 'T-shirts.jpg', category: 'fashion', description: 'تيشيرت قطني 100% بطباعة عصرية وملمس ناعم على البشرة.' }
    ];

    // ======================================================
    // SECTION 2: CART LOGIC
    // ======================================================
    let cart = JSON.parse(localStorage.getItem('eCommerceCart')) || [];
    const cartCount = document.getElementById('cart-count');

    function saveCart() {
        localStorage.setItem('eCommerceCart', JSON.stringify(cart));
    }

    function updateCartCounter() {
        if (!cartCount) return;
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart();
        updateCartCounter();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartCounter();
        renderCartItems();
    }

    function changeQuantity(productId, change) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += change;
            if (cartItem.quantity <= 0) {
                removeFromCart(productId);
            } else {
                saveCart();
                updateCartCounter();
                renderCartItems();
            }
        }
    }

    function clearCart() {
        cart = [];
        saveCart();
        updateCartCounter();
        renderCartItems();
    }

    // ======================================================
    // SECTION 3: PAGE-SPECIFIC LOGIC
    // ======================================================

    // --- PRODUCTS PAGE LOGIC ---
    const productsContainer = document.getElementById('products-container');
    if (productsContainer) {
        const searchInput = document.getElementById('search-input');
        const categoryFilters = document.getElementById('category-filters');

        function renderProducts(productsToRender) {
            productsContainer.innerHTML = '';
            if (productsToRender.length === 0) {
                productsContainer.innerHTML = '<p class="text-center w-100">لا توجد منتجات تطابق بحثك.</p>';
                return;
            }
            productsToRender.forEach(product => {
                productsContainer.innerHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 shadow-sm">
                            <a href="./product.html?id=${product.id}" class="product-link">
                                <img src="./images/${product.image}" class="card-img-top" alt="${product.name}" />
                            </a>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">
                                    <a href="./product.html?id=${product.id}" class="product-link">${product.name}</a>
                                </h5>
                                <p class="card-text">${product.description}</p>
                                <p class="card-text fw-bold mt-auto">${product.price} جنيه</p>
                                <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">أضف إلى العربة</button>
                            </div>
                        </div>
                    </div>`;
            });
        }

        function applyFiltersAndSearch() {
            const searchTerm = searchInput.value.toLowerCase();
            const activeCategory = document.querySelector('.category-btn.active').dataset.category;
            let filteredProducts = products;
            if (activeCategory !== 'all') {
                filteredProducts = filteredProducts.filter(p => p.category === activeCategory);
            }
            if (searchTerm) {
                filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm));
            }
            renderProducts(filteredProducts);
        }

        function createCategoryFilters() {
            const categories = ['all', ...new Set(products.map(p => p.category))];
            categoryFilters.innerHTML = '';
            categories.forEach(category => {
                const button = document.createElement('button');
                button.className = 'btn btn-outline-dark me-2 category-btn';
                
                // ===================================
                // ==== قم بالتعديل في السطر التالي ====
                // ===================================
                button.textContent = category === 'all' ? 'All' : category;
                
                button.dataset.category = category;
                if (category === 'all') button.classList.add('active');
                categoryFilters.appendChild(button);
            });
            categoryFilters.addEventListener('click', (event) => {
                if (event.target.classList.contains('category-btn')) {
                    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
                    event.target.classList.add('active');
                    applyFiltersAndSearch();
                }
            });
        }

        searchInput.addEventListener('input', applyFiltersAndSearch);
        createCategoryFilters();
        renderProducts(products);
    }
    
    // --- SINGLE PRODUCT PAGE LOGIC ---
    const productDetailContainer = document.getElementById('product-detail-container');
    if (productDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const product = products.find(p => p.id === productId);
        if (product) {
            document.title = `${product.name} - متجري`;
            productDetailContainer.innerHTML = `
                <div class="col-md-6">
                    <img src="./images/${product.image}" class="img-fluid rounded shadow-sm" alt="${product.name}">
                </div>
                <div class="col-md-6">
                    <h2>${product.name}</h2>
                    <p class="fs-4 fw-bold text-primary mb-4">${product.price} جنيه</p>
                    <p class="text-muted lh-lg">${product.description}</p>
                    <p><span class="badge bg-secondary">${product.category}</span></p>
                    <button class="btn btn-primary btn-lg mt-3 add-to-cart-btn" data-product-id="${product.id}">
                        أضف إلى العربة
                    </button>
                </div>`;
        } else {
            productDetailContainer.innerHTML = '<div class="alert alert-danger w-100 text-center">عذراً، لم يتم العثور على المنتج المطلوب.</div>';
        }
    }

    // --- CART PAGE LOGIC ---
    const cartItemsContainer = document.getElementById('cart-items-container');
    function renderCartItems() {
        if (!cartItemsContainer) return;
        const cartContainer = document.getElementById('cart-container');
        const emptyCartMessage = document.getElementById('empty-cart-message');
        if (cart.length === 0) {
            emptyCartMessage.classList.remove('d-none');
            cartContainer.classList.add('d-none');
        } else {
            emptyCartMessage.classList.add('d-none');
            cartContainer.classList.remove('d-none');
            let cartHTML = '';
            let grandTotal = 0;
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                grandTotal += itemTotal;
                cartHTML += `
                    <tr>
                        <td>
                            <div class="d-flex align-items-center">
                                <img src="./images/${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;" class="me-3">
                                <span>${item.name}</span>
                            </div>
                        </td>
                        <td>${item.price} جنيه</td>
                        <td>
                            <div class="input-group" style="width: 120px;">
                                <button class="btn btn-outline-secondary quantity-decrease-btn" data-product-id="${item.id}">-</button>
                                <span class="form-control text-center">${item.quantity}</span>
                                <button class="btn btn-outline-secondary quantity-increase-btn" data-product-id="${item.id}">+</button>
                            </div>
                        </td>
                        <td>${itemTotal} جنيه</td>
                        <td>
                            <button class="btn btn-danger btn-sm remove-from-cart-btn" data-product-id="${item.id}">&times;</button>
                        </td>
                    </tr>`;
            });
            cartItemsContainer.innerHTML = cartHTML;
            document.getElementById('cart-total').textContent = `${grandTotal} جنيه`;
        }
    }
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (event) => {
            const target = event.target;
            const productId = parseInt(target.dataset.productId);
            if (target.classList.contains('remove-from-cart-btn')) {
                removeFromCart(productId);
            }
            if (target.classList.contains('quantity-increase-btn')) {
                changeQuantity(productId, 1);
            }
            if (target.classList.contains('quantity-decrease-btn')) {
                changeQuantity(productId, -1);
            }
        });
        const clearCartBtn = document.getElementById('clear-cart-btn');
        if (clearCartBtn) {
            clearCartBtn.addEventListener('click', clearCart);
        }
    }

    // --- CONTACT PAGE LOGIC ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;
            if (name.value.trim() === '') {
                name.classList.add('is-invalid');
                isValid = false;
            } else {
                name.classList.remove('is-invalid');
            }
            if (email.value.trim() === '' || !email.value.includes('@')) {
                email.classList.add('is-invalid');
                isValid = false;
            } else {
                email.classList.remove('is-invalid');
            }
            if (message.value.trim() === '') {
                message.classList.add('is-invalid');
                isValid = false;
            } else {
                message.classList.remove('is-invalid');
            }
            if (isValid) {
                document.getElementById('form-success-message').classList.remove('d-none');
                contactForm.reset();
                name.classList.remove('is-invalid');
                email.classList.remove('is-invalid');
                message.classList.remove('is-invalid');
            }
        });
    }

    // ======================================================
    // SECTION 4: GLOBAL LOGIC AND INITIAL LOAD
    // ======================================================
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(event.target.getAttribute('data-product-id'));
            addToCart(productId);
        }
    });
    
    updateCartCounter();
    renderCartItems();
});
