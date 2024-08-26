// Existing code
let totalCart = document.querySelector("#totalCart");
let shippingFee = document.querySelector("#shippingFee");
let totalAmount = document.querySelector("#totalAmount");
let total = parseInt(localStorage.getItem("TotalCart")) || 0;
let fname = document.querySelector("#fname");
let address = document.querySelector("#Address");
let city = document.querySelector("#city");
let country = document.querySelector("#country");
let pCode = document.querySelector("#pCode");
let cod = document.querySelector("#cod");
let orderID = 1001;
let LastOrderId = JSON.parse(localStorage.getItem("LastOrderId")) || 0;

// Update cart total and shipping fee
totalCart.innerHTML = total;
let shippingFeeValue = total < 1500 ? 300 : 0;
shippingFee.innerHTML = shippingFeeValue;
let sum = total + shippingFeeValue;
totalAmount.innerHTML = sum.toString();

// Apply coupon logic
function applyCoupon() {
    let couponCode = document.querySelector("#couponCode").value.trim().toUpperCase();
    let discount = 0;

    switch (couponCode) {
        case 'ECO5':
            discount = 5;
            break;
        case 'ECO10':
            discount = 10;
            break;
        case 'ECO15':
            discount = 15;
            break;
        case 'ECO20':
            discount = 20;
            break;
        case 'ECO25':
            discount = 25;
            break;
        default:
            discount = 0;
            document.querySelector("#discountMessage").innerText = "Invalid coupon code.";
    }

    let discountAmount = (sum * discount) / 100;
    let totalAfterDiscount = sum - discountAmount;
    document.querySelector("#discountAmount").innerText = discountAmount.toFixed(2);
    document.querySelector("#totalAmount").innerText = totalAfterDiscount.toFixed(2);
    document.querySelector("#discountMessage").innerText = discount > 0 ? `Discount applied: ${discount}%` : '';
}

// Checkout button event listener
let placeOrder = document.querySelector("#placeOrder");
let order = JSON.parse(localStorage.getItem("orderId")) || [];

document.addEventListener("DOMContentLoaded", function () {
    placeOrder.addEventListener("click", (e) => {
        let isLogin = localStorage.getItem("Login");
        if (isLogin) {
            if (fname.value != "" && address.value != "" && city.value != "" && country.value != "" && pCode.value != "") {
                let confirmation = confirm(`Your order has been placed! \nYour Total bill is ${totalAmount.innerHTML}`);
                if (confirmation) {
                    localStorage.removeItem("cart");
                    localStorage.removeItem("TotalCart");
                    orderID = LastOrderId + 1;
                    order.push(orderID);
                    localStorage.setItem("orderId", JSON.stringify(order));
                    localStorage.setItem("LastOrderId", orderID);

                    location.href = "./ThankYou.html";
                }
            } else {
                alert("All Fields are required");
            }
        } else {
            alert("Please Login to Place your Order.");
        }
        e.preventDefault();
    });
});
