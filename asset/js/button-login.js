document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngừng hành động mặc định (không tải lại trang)
    // Kiểm tra thông tin đăng nhập
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Giả sử thông tin đăng nhập thành công
    if (username && password) {
        showNotification('Đăng nhập thành công!', 'Đi đến trang chủ', function() {
            window.location.href = '../index.html'; // Thay đổi URL trang chủ
        });
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngừng hành động mặc định (không tải lại trang)
    // Kiểm tra thông tin đăng ký
    var fullName = document.getElementById('fullName').value;
    var passWord = document.getElementById('PassWord').value;
    var address = document.getElementById('address').value;
    var phoneNumber = document.getElementById('PhoneNumber').value;

    // Giả sử thông tin đăng ký thành công
    if (fullName && passWord && address && phoneNumber) {
        showNotification('Bạn đã đăng ký thành công, vui lòng đăng nhập!', 'OK', function() {
            document.getElementById('loginUsername').focus(); // Đưa người dùng trở lại đăng nhập
        });
    }
});

// Hàm hiển thị thông báo
function showNotification(message, buttonText, callback) {
    document.getElementById('notificationText').innerText = message;
    document.getElementById('notificationButton').innerText = buttonText;
  
    // Xóa sự kiện click trước đó để tránh lặp lại
    document.getElementById('notificationButton').onclick = null;
  
    // Gán sự kiện click mới
    document.getElementById('notificationButton').onclick = function () {
      document.getElementById('notification').style.display = 'none';
      if (callback && typeof callback === 'function') {
        callback();
      }
    };
  
    // Hiển thị thông báo
    document.getElementById('notification').style.display = 'block';
  }
  
