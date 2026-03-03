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

/* --- THÊM VÀO CUỐI FILE main.js --- */

// Hiệu ứng mưa Robux
function createFallingEffect() {
    const container = document.body;
    const item = document.createElement('div');
    
    // Random ký tự rơi: Có thể là R$, $, hoặc Icon
    const symbols = ['R$', '$', '★', '⚡'];
    item.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    
    item.classList.add('falling-item');
    
    // Random vị trí xuất hiện (trái/phải)
    item.style.left = Math.random() * 100 + 'vw';
    
    // Random kích thước (to/nhỏ)
    const size = Math.random() * 20 + 10; // Từ 10px đến 30px
    item.style.fontSize = size + 'px';
    
    // Random độ mờ (xa/gần)
    item.style.opacity = Math.random() * 0.5 + 0.1;
    
    // Random tốc độ rơi
    const duration = Math.random() * 5 + 3; // Từ 3s đến 8s
    item.style.animationDuration = duration + 's';
    
    container.appendChild(item);
    
    // Xóa phần tử sau khi rơi xong để nhẹ máy
    setTimeout(() => {
        item.remove();
    }, duration * 1000);
}

// Cứ 0.3 giây tạo ra 1 hạt mưa
setInterval(createFallingEffect, 300);
