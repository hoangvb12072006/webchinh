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
