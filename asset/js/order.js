// Dữ liệu mẫu cho menu
const pizzas = [
    { id: 1, name: 'Pizza Hải Sản', price: 159000, image: '../asset/img/new1.png' },
    { id: 2, name: 'Pizza Thập Cẩm', price: 79000, image: '../asset/img/new2.png' },
    { id: 3, name: 'Meat Lovers - Pizza 5 Loại Thịt', price: 79000, image: '../asset/img/new3.png' },
    { id: 4, name: 'Ocean Mania - Hải Sản Xốt Mayonnaise', price: 79000, image: '../asset/img/new4.png' },
    { id: 5, name: 'Pepperoni Feast', price: 79000, image: '../asset/img/new5.png' },
    { id: 6, name: 'Pizza Phở', price: 244000, image: '../asset/img/new6.png' },
    { id: 7, name: 'Pizza Gà Xốt Tương', price: 40000, image: '../asset/img/ga-xot-tuong.png'}
];


const menuBox = document.getElementById('menu-items');
const orderSummary = document.getElementById('order-summary');
let cart = [];

// Hiển thị menu
function renderMenu() {
    menuBox.innerHTML = ''; // Xóa dữ liệu cũ nếu có

    pizzas.forEach(pizza => {
        const item = document.createElement('div');
        item.classList.add('menu-item');
        item.innerHTML = `
            <img src="${pizza.image}" alt="${pizza.name}" class="menu-item-image">
            <div class="menu-item-info">
                <h4>${pizza.name}</h4>
                <p>${pizza.price.toLocaleString()}đ</p>
            </div>
            <button onclick="addToCart(${pizza.id})" class="btn-add">Thêm</button>
        `;
        menuBox.appendChild(item);
    });
}


// Thêm vào giỏ hàng
function addToCart(id) {
    const pizza = pizzas.find(p => p.id === id);
    cart.push(pizza);
    renderCart();
}

// Hiển thị giỏ hàng
function renderCart() {
    if (cart.length === 0) {
        orderSummary.innerHTML = '<p>Không có sản phẩm nào.</p>';
        return;
    }

    let total = 0;
    orderSummary.innerHTML = '';
    cart.forEach((item, index) => {
        total += item.price;
        orderSummary.innerHTML += `
            <p>${index + 1}. ${item.name} - ${item.price.toLocaleString()}đ</p>
        `;
    });
    orderSummary.innerHTML += `<hr><p><strong>Tổng cộng: ${total.toLocaleString()}đ</strong></p>`;
}

// Xử lý thanh toán
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        // Hiển thị hộp thông báo giỏ hàng trống
        showEmptyCartNotification();
        return;
    }

    // Hiển thị hộp thông báo thanh toán thành công
    showPaymentNotification();
});

// Hàm hiển thị hộp thông báo giỏ hàng trống
function showEmptyCartNotification() {
    const emptyCartNotification = document.getElementById('empty-cart-notification');
    emptyCartNotification.style.display = 'flex'; // Hiển thị hộp thông báo

    // Xử lý khi nhấn nút "Đóng"
    document.getElementById('close-empty-cart-btn').addEventListener('click', () => {
        emptyCartNotification.style.display = 'none'; // Ẩn hộp thông báo
    });
}

// Hàm hiển thị hộp thông báo thanh toán thành công
function showPaymentNotification() {
    // Lấy hộp thông báo và các thông tin giỏ hàng
    const paymentNotification = document.getElementById('payment-notification');
    const orderItemsList = document.getElementById('order-items-list');

    // Hiển thị các món trong giỏ hàng
    orderItemsList.innerHTML = ''; // Xóa dữ liệu cũ
    cart.forEach(item => {
        orderItemsList.innerHTML += `<p>${item.name} - ${item.price.toLocaleString()}đ</p>`;
    });

    // Hiển thị hộp thông báo
    paymentNotification.style.display = 'flex';

    // Xử lý khi nhấn nút "Hoàn thành"
    document.getElementById('complete-btn').addEventListener('click', () => {
        // Ẩn hộp thông báo và reset giỏ hàng
        paymentNotification.style.display = 'none';
        cart = []; // Xóa giỏ hàng
        renderCart(); // Cập nhật lại giỏ hàng
    });
}


// Render menu khi load trang
renderMenu();