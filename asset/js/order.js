// Dữ liệu mẫu cho menu
const pizzas = [
    { id: 1, name: 'Pizza Hải Sản', price: 159000, image: '../asset/img/new1.png' },
    { id: 2, name: 'Pizza Thập Cẩm', price: 79000, image: '../asset/img/new2.png' },
    { id: 3, name: 'Meat Lovers - Pizza 5 Loại Thịt', price: 79000, image: '../asset/img/new3.png' },
    { id: 4, name: 'Ocean Mania - Hải Sản Xốt Mayonnaise', price: 79000, image: '../asset/img/new4.png' },
    { id: 5, name: 'Pepperoni Feast', price: 79000, image: '../asset/img/new5.png' },
    { id: 6, name: 'Pizza Phở', price: 244000, image: '../asset/img/new6.png' },
    { id: 7, name: 'Pizza Gà Xốt Tương', price: 40000, image: '../asset/img/ga-xot-tuong.png' }
];

const drinks = [
    { id: 4, name: 'Coca-Cola', price: 15000, image: '../asset/img/coca-removebg-preview.png' },
    { id: 5, name: 'Pepsi', price: 15000, image: '../asset/img/pepsi-removebg-preview.png' },
    { id: 6, name: '7up', price: 15000, image: '../asset/img/7up.webp'},
    { id: 7, name: 'Mirinda', price: 15000, image: '../asset/img/mirinda-removebg-preview.png'},
];

const breads = [
    { id: 8, name: 'Bánh Mì Thịt Nướng', price: 15000, image: '../asset/img/banh-mi-1.jpg' },
    { id: 9, name: 'Bánh Mì Chay', price: 15000, image: '../asset/img/banh-mi-chay.webp' },
    { id: 10, name: 'Bánh Mì Thập Cẩm', price: 15000, image: '../asset/img/banh-mi-thap-cam.jfif'},
    { id: 11, name: 'Bánh Mì Chảo', price: 30000, image: '../asset/img/banh-mi-chao.webp'},
    { id: 12, name: 'Bánh Mì Gà Xé', price: 25000, image: '../asset/img/banh-mi-ga-xe.jpg'}
];

const menuBox = document.getElementById('menu-items');
const drinkBox = document.getElementById('drink-items');
const breadBox = document.getElementById('bread-items');
const orderSummary = document.getElementById('order-summary');
let cart = [];

// Hàm hiển thị menu cho từng loại sản phẩm
function renderItems(items, container) {
    container.innerHTML = '';
    items.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('menu-item');
        element.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-info">
                <h4>${item.name}</h4>
                <p>${item.price.toLocaleString()}đ</p>
            </div>
            <button onclick="addToCart(${item.id})" class="btn-add">Thêm</button>
        `;
        container.appendChild(element);
    });
}

// Thêm vào giỏ hàng
function addToCart(id) {
    const allItems = [...pizzas, ...drinks, ...breads];
    const item = allItems.find(p => p.id === id);
    cart.push(item);
    renderCart();
}

function renderCart() {
    if (cart.length === 0) {
        orderSummary.innerHTML = '<p>Không có sản phẩm nào.</p>';
        return;
    }

    let total = 0;

    orderSummary.innerHTML = `
        <div class="order-items"></div>
        <p class="order-total"></p>
    `;

    const orderItemsContainer = orderSummary.querySelector('.order-items');
    const orderTotalElement = orderSummary.querySelector('.order-total');

    // Hiển thị các món trong giỏ hàng
    cart.forEach((item, index) => {
        total += item.price;
        orderItemsContainer.innerHTML += `
            <p>${index + 1}. ${item.name} - ${item.price.toLocaleString()}đ</p>
        `;
    });

    // Hiển thị tổng cộng
    orderTotalElement.textContent = `Tổng cộng: ${total.toLocaleString()}đ`;
}

renderItems(pizzas, menuBox);
renderItems(drinks, drinkBox);
renderItems(breads, breadBox);

// Lấy tham chiếu đến các phần tử DOM
const checkoutBtn = document.getElementById('checkout-btn');
const paymentNotification = document.getElementById('payment-notification');
const orderItemsList = document.getElementById('order-items-list');
const completeBtn = document.getElementById('complete-btn');
const emptyCartNotification = document.getElementById('empty-cart-notification');
const closeEmptyCartBtn = document.getElementById('close-empty-cart-btn');

// Xử lý khi nhấn nút "Thanh Toán"
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        // Hiển thị thông báo giỏ hàng trống nếu không có sản phẩm nào
        emptyCartNotification.style.display = 'flex';
    } else {
        // Hiển thị các sản phẩm trong giỏ hàng khi thanh toán
        orderItemsList.innerHTML = '';
        cart.forEach((item, index) => {
            orderItemsList.innerHTML += `<p>${index + 1}. ${item.name} - ${item.price.toLocaleString()}đ</p>`;
        });
        
        // Hiển thị thông báo thanh toán
        paymentNotification.style.display = 'flex';
    }
});

// Xử lý khi nhấn nút "Hoàn thành" để hoàn tất thanh toán
completeBtn.addEventListener('click', () => {
    // Ẩn hộp thông báo thanh toán
    paymentNotification.style.display = 'none';
    // Reset giỏ hàng sau khi thanh toán thành công
    cart = [];
    renderCart();
});

// Xử lý khi đóng thông báo giỏ hàng trống
closeEmptyCartBtn.addEventListener('click', () => {
    emptyCartNotification.style.display = 'none';
});
