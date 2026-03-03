// main.js - Xử lý logic
function calculatePrice() {
    var selectBox = document.getElementById("robuxPackage");
    if (!selectBox) return; // Nếu không ở trang chủ thì bỏ qua

    var selectedOption = selectBox.options[selectBox.selectedIndex];
    var price = selectedOption.getAttribute("data-price");
    var robux = selectedOption.value;

    if (price) {
        var formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
        document.getElementById("priceDisplay").innerText = formattedPrice;
        document.getElementById("robuxDisplay").innerText = robux + " R$";
    } else {
        document.getElementById("priceDisplay").innerText = "0 VNĐ";
        document.getElementById("robuxDisplay").innerText = "0 R$";
    }
}

/* --- THÊM VÀO CUỐI FILE main.js --- */

// Logic Vòng Quay May Mắn
function spinWheel() {
    const wheel = document.getElementById('luckyWheel');
    if (!wheel) return; // Không có vòng quay thì dừng

    // Random góc quay từ 3000 đến 6000 độ (quay tít mù)
    const deg = Math.floor(3000 + Math.random() * 3000); 
    
    wheel.style.transform = `rotate(${deg}deg)`;
    
    // Sau 4 giây (khi quay xong) thì báo kết quả
    setTimeout(() => {
        alert("Chúc mừng! Bạn nhận được quà ngẫu nhiên (Demo).");
    }, 4000);
}
