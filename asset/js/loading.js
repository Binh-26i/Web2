// Hiển thị loader
function showLoader() {
    document.getElementById("loader").style.display = "flex";
  }

  // Ẩn loader
  function hideLoader() {
    document.getElementById("loader").style.display = "none";
  }

  // Thêm sự kiện click vào tất cả các link có class "with-loader"
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".with-loader");

    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        const href = link.getAttribute("href");

        if (href && href !== "#") {
          // Hiển thị loader trước khi chuyển trang
          showLoader();

          // Trì hoãn việc chuyển trang để loader hiển thị
          setTimeout(function () {
            window.location.href = href;
          }, 500); // Thời gian delay
          event.preventDefault(); // Ngăn chặn hành động mặc định
        } else {
          // Nếu không có href, chỉ hiển thị loader
          showLoader();
          setTimeout(hideLoader, 1000); // Ẩn loader sau 1 giây
        }
      });
    });

    // Thêm sự kiện click vào nút
    const button = document.getElementById("actionButton");
    button.addEventListener("click", function () {
      showLoader(); // Hiển thị loader
      setTimeout(hideLoader, 1500); // Ẩn loader sau 1.5 giây
    });
  });