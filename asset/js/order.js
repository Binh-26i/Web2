// Dữ liệu mẫu cho menu
const pizzas = [
    { id: 1, name: 'Pizza Hải Sản', price: 159000, image: 'asset/img/new1.png' },
    { id: 2, name: 'Pizza Thập Cẩm', price: 79000, image: 'asset/img/new2.png' },
    { id: 3, name: 'Meat Lovers - Pizza 5 Loại Thịt', price: 79000, image: 'asset/img/new3.png' },
    { id: 4, name: 'Ocean Mania - Hải Sản Xốt Mayonnaise', price: 79000, image: 'asset/img/new4.png' },
    { id: 5, name: 'Pepperoni Feast', price: 79000, image: 'asset/img/new5.png' },
    { id: 6, name: 'Pizza Phở', price: 244000, image: 'asset/img/new6.png' },
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
        alert('Giỏ hàng trống!');
        return;
    }
    alert('Thanh toán thành công!');
    cart = [];
    renderCart();
});

// Render menu khi load trang
renderMenu();