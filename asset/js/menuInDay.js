document.addEventListener("DOMContentLoaded", function () {
    const productData = {
        "Sản phẩm khuyến mãi": [
            { img: "asset/img/pizza.webp", name: "PIZZA PHÔ MAI", price: "59.000 VND" },
            { img: "asset/img/hai-san-removebg-preview.png", name: "PIZZA HẢI SẢN", price: "79.000 VND" },
            { img: "asset/img/bo-removebg-preview.png", name: "PIZZA BÒ", price: "69.000 VND" }
        ],
        "Sản phẩm nổi bật": [
            { img: "asset/img/ga-xot-tuong.png", name: "GÀ XỐT TƯƠNG KIỂU NHẬT", price: "49.000 VND" },
            { img: "asset/img/ga-pho-mai-removebg-preview.png", name: "BURGER GÀ PHÔ MAI", price: "39.000 VND" },
            { img: "asset/img/bo-thuong-hang.png", name: "PIZZA BÒ THƯỢNG HẠNG", price: "59.000 VND" }
        ],
        "Tất cả sản phẩm": [
            { img: "asset/img/pizza-chay-removebg-preview.png", name: "PIZZA CHAY", price: "29.000 VND" },
            { img: "asset/img/pizza-y-removebg-preview.png", name: "PIZZA Ý TRUYỀN THỐNG", price: "39.000 VND" },
            { img: "asset/img/pizza-my-removebg-preview.png", name: "PIZZA MỸ", price: "49.000 VND" }
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
