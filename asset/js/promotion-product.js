// Dữ liệu các sản phẩm
const pizzaItems = [
    {
        name: "CHEESE MANIA - PIZZA PHÔ MAI",
        price: "59,000₫",
        img: "asset/img/new1.png"
    },
    {
        name: "CHEESY CHICKEN BACON - PIZZA",
        price: "59,000₫",
        img: "asset/img/new2.png"
    },
    {
        name: "HAWAIIAN - PIZZA KIỂU HAWAII",
        price: "59,000₫",
        img: "asset/img/new8.png"
    },
    {
        name: "KID MANIA - PIZZA CHO BẠN NHỎ",
        price: "59,000₫",
        img: "asset/img/new3.png"
    },
    {
        name: "PIZZA HẢI SẢN KIỂU SINGAPORE",
        price: "209,000₫",
        img: "asset/img/new4.png"
    },
    {
        name: "PRIME BEEF - PIZZA BÒ THƯỢNG HẠNG",
        price: "209,000₫",
        img: "asset/img/new5.png"
    },
    {
        name: "TERIYAKI CHICKEN - GÀ XỐT TERIYAKI",
        price: "79,000₫",
        img: "asset/img/new6.png"
    },
    {
        name: "VEGGIE MANIA - PIZZA CHAY",
        price: "59,000₫",
        img: "asset/img/new9.png"
    }
];

// Lấy phần tử container trong HTML
const pizzaContainer = document.getElementById("pizza-container");

// Hàm render các sản phẩm
function renderPizzaItems() {
    pizzaItems.forEach(item => {
        const pizzaHTML = `
        <div class="item">
          <img src="${item.img}" alt="${item.name}">
          <p>${item.name}</p>
          <span class="price">${item.price}</span>
          <a href="child-page/order.html" class="order-btn">Đặt món +</a>
        </div>
      `;
        pizzaContainer.insertAdjacentHTML("beforeend", pizzaHTML);
    });
}

// Gọi hàm để render sản phẩm
renderPizzaItems();


// Gọi hàm để render sản phẩm
renderPizzaItems();
