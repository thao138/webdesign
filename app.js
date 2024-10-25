function login() {
    const identifier = document.getElementById("identifier").value;
    const password = document.getElementById("password").value;
    const statusMessage = document.getElementById("status");

    // Kiểm tra đầu vào
    if (!identifier || !password) {
        statusMessage.innerText = "Vui lòng nhập đầy đủ thông tin.";
        return;
    }

    // Xác định loại đăng nhập (SDT hoặc email)
    const isPhone = /^\d+$/.test(identifier); // Kiểm tra nếu chỉ là số thì là SDT
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier); // Kiểm tra định dạng email

    if (isPhone) {
        statusMessage.innerText = "Đang đăng nhập bằng số điện thoại...";
        // Thực hiện đăng nhập với số điện thoại
    } else if (isEmail) {
        statusMessage.innerText = "Đang đăng nhập bằng email...";
        // Thực hiện đăng nhập với email
    } else {
        statusMessage.innerText = "Số điện thoại hoặc email không hợp lệ.";
        return;
    }

    // Giả lập xác thực (mật khẩu phải là "123456" để thành công)
    if (password === "123456") {
        statusMessage.innerText = "Đăng nhập thành công!";
        statusMessage.style.color = "green";
        // Chuyển hướng hoặc xử lý sau khi đăng nhập thành công
    } else {
        statusMessage.innerText = "Mật khẩu không đúng.";
        statusMessage.style.color = "red";
    }
}