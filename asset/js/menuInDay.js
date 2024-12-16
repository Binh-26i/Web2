document.addEventListener("DOMContentLoaded", function () {
    const productData = {
        "Sản phẩm khuyến mãi": [
            { img: "asset/img/pizza.webp", name: "PIZZA PHÔ MAI", price: "59.000 VND" },
            { img: "asset/img/pizza-2.webp", name: "PIZZA HẢI SẢN", price: "79.000 VND" },
            { img: "asset/img/pizza-3.png", name: "PIZZA BÒ", price: "69.000 VND" }
        ],
        "Sản phẩm nổi bật": [
            { img: "asset/img/pizza.webp", name: "BURGER BÒ", price: "49.000 VND" },
            { img: "asset/img/pizza-2.webp", name: "BURGER GÀ", price: "39.000 VND" },
            { img: "asset/img/pizza-3.png", name: "BURGER TÔM", price: "59.000 VND" }
        ],
        "Tất cả sản phẩm": [
            { img: "asset/img/pizza.webp", name: "SALAD TRỘN", price: "29.000 VND" },
            { img: "asset/img/pizza-2.webp", name: "SALAD GÀ", price: "39.000 VND" },
            { img: "asset/img/pizza-3.png", name: "SALAD HẢI SẢN", price: "49.000 VND" }
        ]
    };

    const buttons = document.querySelectorAll(".buttons .btn");
    const items = document.querySelectorAll(".display-items .items");

    buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            buttons.forEach((btn) => btn.classList.remove("active"));

            this.classList.add("active");

            const buttonName = this.textContent.trim();
            const data = productData[buttonName];

            items.forEach((item, index) => {
                if (data[index]) {
                    const img = item.querySelector("img");
                    const name = item.querySelector("p");
                    const price = item.querySelector(".price");

                    img.src = data[index].img;
                    name.textContent = data[index].name;
                    price.textContent = data[index].price;
                }
            });
        });
    });

    buttons[0].click();
});
