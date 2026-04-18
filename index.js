  // Generate particles
        function createParticles() {
            const container = document.getElementById('particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                const size = Math.random() * 5 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = Math.random() * 10 + 10 + 's';
                container.appendChild(particle);
            }
        }

        // Product Data
     const products = [
    { id: 1, name: "Apple iPhone 15 Pro Max", price: 1199.99, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop", category: "Electronics", inStock: true, description: "A17 Pro chip, 48MP camera, Titanium design" },
    { id: 2, name: "Samsung Galaxy S24 Ultra", price: 1299.99, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop", category: "Electronics", inStock: true, description: "AI-powered smartphone with S Pen" },
    { id: 3, name: "MacBook Pro 14\" M3", price: 1999.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop", category: "Electronics", inStock: true, description: "M3 chip, 16GB RAM, 512GB SSD" },
    { id: 4, name: "Dell XPS 15 Laptop", price: 1799.99, image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop", category: "Electronics", inStock: true, description: "Intel Core i9, 32GB RAM, 1TB SSD" },
    { id: 5, name: "iPad Air 5th Gen", price: 599.99, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop", category: "Electronics", inStock: true, description: "M1 chip, 10.9-inch Liquid Retina display" },
    { id: 6, name: "Sony PlayStation 5", price: 499.99, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop", category: "Electronics", inStock: true, description: "Ultra-high speed SSD, 4K gaming" },
    { id: 7, name: "Xbox Series X", price: 499.99, image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=300&fit=crop", category: "Electronics", inStock: false, description: "12 teraflops of processing power" },
    { id: 8, name: "Nintendo Switch OLED", price: 349.99, image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop", category: "Electronics", inStock: true, description: "7-inch OLED screen, enhanced audio" },
    { id: 9, name: "Bose QuietComfort Ultra", price: 429.99, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop", category: "Electronics", inStock: true, description: "World-class noise cancellation headphones" },
    { id: 10, name: "Apple Watch Series 9", price: 399.99, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=300&fit=crop", category: "Electronics", inStock: true, description: "S9 chip, double tap gesture" },
    { id: 11, name: "DJI Mini 4 Pro Drone", price: 759.99, image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=400&h=300&fit=crop", category: "Electronics", inStock: true, description: "4K HDR video, 34min flight time" },
    { id: 12, name: "Canon EOS R50 Camera", price: 679.99, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop", category: "Electronics", inStock: true, description: "24.2 MP, 4K video, compact mirrorless" },
         {
                id: 8,
                name: "Oura Ring Gen3",
                description: "Smart ring that tracks sleep, activity, and readiness",
                price: 299.00,
                image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=300&fit=crop",
                category: "wearables",
                inStock: true 
            },
            {
                id: 9,
                name: "Vitamix Ascent Series",
                description: "High-performance blender with self-detect technology",
                price: 649.95,
                image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=300&fit=crop",
                category: "kitchen",
                inStock: true 
            },
        {
                id: 1,
                name: "Sony WH-1000XM5",
                description: "Industry-leading noise canceling headphones with exceptional sound quality",
                price: 399.99,
                image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop",
                category: "electronics",
                inStock: true 
            },
            {
                id: 2,
                name: "Dyson V15 Detect",
                description: "Intelligent cordless vacuum with laser detection technology",
                price: 699.99,
                image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop",
                category: "home",
                inStock: true 
            },
            {
                id: 3,
                name: "Apple Watch Ultra 2",
                description: "Titanium smartwatch for extreme sports and adventures",
                price: 799.00,
                image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop",
                category: "wearables",
                inStock: true 
            },
            {
                id: 4,
                name: "Ninja Creami Ice Cream Maker",
                description: "Make delicious ice cream, sorbet, and smoothie bowls at home",
                price: 199.99,
                image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=300&fit=crop",
                category: "kitchen",
                inStock: true 
            },
            {
                id: 5,
                name: "Samsung 65\" Neo QLED 8K",
                description: "Ultra-premium 8K TV with Quantum Matrix Technology Pro",
                price: 3499.99,
                image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
                category: "electronics",
                inStock: true 
            },
         
          
            {
                id: 8,
                name: "Oura Ring Gen3",
                description: "Smart ring that tracks sleep, activity, and readiness",
                price: 299.00,
                image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=300&fit=crop",
                category: "wearables",
                inStock: true 
            },
            {
                id: 9,
                name: "Vitamix Ascent Series",
                description: "High-performance blender with self-detect technology",
                price: 649.95,
                image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=300&fit=crop",
                category: "kitchen",
                inStock: true 
            },
         
];

        let cart = [];
        let wishlist = [];
        let orders = [];
        let currentUser = null;

        function loadProducts() {
            const container = document.getElementById('productsGrid');
            container.innerHTML = products.map(product => `
                <div class="bg-white rounded-2xl shadow-lg product-card border border-gray-100 relative overflow-hidden">
                    ${!product.inStock ? '<div class="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">Out of Stock</div>' : ''}
                    <button onclick="toggleWishlist(${product.id})" class="absolute top-3 right-3 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition">
                        <i id="wishlistIcon-${product.id}" class="far fa-heart text-gray-400 text-xl hover:text-red-500"></i>
                    </button>
                    <div class="h-56 overflow-hidden">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover hover:scale-110 transition duration-500">
                    </div>
                    <div class="p-5">
                        <h3 class="text-lg font-bold text-gray-800">${product.name}</h3>
                        <p class="text-red-600 font-bold text-lg mt-2">$${product.price}</p>
                        <button onclick="addToCart(${product.id})" 
                            class="w-full btn-gradient text-white py-2.5 rounded-xl font-semibold mt-3 ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}"
                            ${!product.inStock ? 'disabled' : ''}>
                            <i class="fas fa-cart-plus mr-2"></i>${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product || !product.inStock) return;
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            updateCartUI();
            showNotification('Product added to cart!', 'success');
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
        }

        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCartUI();
                }
            }
        }

        function updateCartUI() {
            const cartCount = document.getElementById('cartCount');
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartCount.textContent = totalItems;
            cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
            if (cart.length === 0) {
                cartItems.innerHTML = '<div class="text-center text-gray-500 py-12"><i class="fas fa-shopping-cart text-6xl mb-4 text-gray-300"></i><p>Your cart is empty</p></div>';
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="flex items-center border-b border-gray-200 py-4">
                        <img src="${item.image}" class="w-20 h-20 object-cover rounded-xl">
                        <div class="flex-1 ml-4">
                            <h4 class="font-bold">${item.name}</h4>
                            <p class="text-purple-600 font-bold">$${item.price}</p>
                            <div class="flex items-center mt-2">
                                <button onclick="updateQuantity(${item.id}, -1)" class="px-3 py-1 bg-gray-200 rounded-l">-</button>
                                <span class="px-4 py-1 bg-gray-100">${item.quantity}</span>
                                <button onclick="updateQuantity(${item.id}, 1)" class="px-3 py-1 bg-gray-200 rounded-r">+</button>
                                <button onclick="removeFromCart(${item.id})" class="ml-4 text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }

        function toggleWishlist(productId) {
            const existing = wishlist.find(item => item.id === productId);
            if (existing) {
                wishlist = wishlist.filter(item => item.id !== productId);
                showNotification('Removed from wishlist', 'info');
            } else {
                const product = products.find(p => p.id === productId);
                wishlist.push(product);
                showNotification('Added to wishlist', 'success');
            }
            updateWishlistUI();
            updateWishlistIcons();
        }

        function updateWishlistIcons() {
            products.forEach(product => {
                const icon = document.getElementById(`wishlistIcon-${product.id}`);
                if (icon) {
                    if (wishlist.find(item => item.id === product.id)) {
                        icon.classList.remove('far');
                        icon.classList.add('fas', 'text-red-500');
                    } else {
                        icon.classList.remove('fas', 'text-red-500');
                        icon.classList.add('far');
                    }
                }
            });
        }

        function updateWishlistUI() {
            const wishlistCount = document.getElementById('wishlistCount');
            const wishlistItems = document.getElementById('wishlistItems');
            wishlistCount.textContent = wishlist.length;
            if (wishlist.length === 0) {
                wishlistItems.innerHTML = '<div class="text-center text-gray-500 py-12"><i class="fas fa-heart text-6xl mb-4 text-gray-300"></i><p>Your wishlist is empty</p></div>';
            } else {
                wishlistItems.innerHTML = wishlist.map(item => `
                    <div class="flex items-center border-b border-gray-200 py-4">
                        <img src="${item.image}" class="w-20 h-20 object-cover rounded-xl">
                        <div class="flex-1 ml-4">
                            <h4 class="font-bold">${item.name}</h4>
                            <p class="text-purple-600 font-bold">$${item.price}</p>
                            <button onclick="addToCart(${item.id})" class="mt-2 btn-gradient text-white px-3 py-1 rounded-lg text-sm">Add to Cart</button>
                        </div>
                    </div>
                `).join('');
            }
        }

        function checkout() {
            if (cart.length === 0) {
                showNotification('Your cart is empty!', 'error');
                return;
            }
            const order = {
                id: 'ORD' + Math.random().toString(36).substr(2, 6).toUpperCase(),
                items: [...cart],
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                date: new Date().toLocaleDateString(),
                status: 'confirmed'
            };
            orders.unshift(order);
            cart = [];
            updateCartUI();
            updateOrdersUI();
            toggleCart();
            showNotification('Order placed successfully!', 'success');
        }

        function updateOrdersUI() {
            const ordersCount = document.getElementById('ordersCount');
            const ordersItems = document.getElementById('ordersItems');
            ordersCount.textContent = orders.length;
            if (orders.length === 0) {
                ordersItems.innerHTML = '<div class="text-center text-gray-500 py-12"><i class="fas fa-clipboard-list text-6xl mb-4 text-gray-300"></i><p>No orders yet</p></div>';
            } else {
                ordersItems.innerHTML = orders.map(order => `
                    <div class="border border-gray-200 rounded-xl p-4 mb-4">
                        <div class="flex justify-between items-start mb-3">
                            <div>
                                <h4 class="font-bold">Order #${order.id}</h4>
                                <p class="text-sm text-gray-500">${order.date}</p>
                            </div>
                            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">${order.status}</span>
                        </div>
                        ${order.items.map(item => `<div class="flex justify-between text-sm mb-2"><span>${item.name} x${item.quantity}</span><span>$${(item.price * item.quantity).toFixed(2)}</span></div>`).join('')}
                        <div class="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
                            <span class="font-semibold">Total</span>
                            <span class="font-bold text-purple-600">$${order.total.toFixed(2)}</span>
                        </div>
                    </div>
                `).join('');
            }
        }

        function login() {
            const email = document.getElementById('loginEmail').value;
            const name = document.getElementById('loginName').value;
            if (email && name) {
                currentUser = { email, name };
                showNotification(`Welcome ${name}!`, 'success');
                hideLoginModal();
            } else {
                showNotification('Please enter both email and name', 'error');
            }
        }

        function showLoginModal() { document.getElementById('loginModal').classList.remove('hidden'); }
        function hideLoginModal() { document.getElementById('loginModal').classList.add('hidden'); }
        function toggleCart() { document.getElementById('cartSidebar').classList.toggle('translate-x-full'); document.getElementById('cartOverlay').classList.toggle('hidden'); }
        function toggleWishlist() { document.getElementById('wishlistSidebar').classList.toggle('translate-x-full'); document.getElementById('wishlistOverlay').classList.toggle('hidden'); }
        function toggleOrders() { document.getElementById('ordersSidebar').classList.toggle('translate-x-full'); document.getElementById('ordersOverlay').classList.toggle('hidden'); }
        function scrollToProducts() { document.getElementById('products').scrollIntoView({ behavior: 'smooth' }); }

        function showNotification(message, type) {
            const notification = document.createElement('div');
            notification.className = `fixed top-20 right-4 p-4 rounded-xl shadow-2xl z-50 toast-notification ${type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`;
            notification.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-2"></i>${message}`;
            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 3000);
        }

        createParticles();
        loadProducts();
        updateCartUI();
        updateWishlistUI();
        updateOrdersUI();
