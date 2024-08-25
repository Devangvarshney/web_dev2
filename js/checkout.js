let totalCart = document.querySelector("#totalCart");
let shippingFee = document.querySelector("#shippingFee");
let totalAmount = document.querySelector("#totalAmount");
let total = parseInt(localStorage.getItem("TotalCart"));
let fname = document.querySelector("#fname");
let address = document.querySelector("#Address");
let city = document.querySelector("#city");
let country = document.querySelector("#country");
let pCode = document.querySelector("#pCode");
let cod = document.querySelector("#cod");
let orderID = 1001;
let LastOrderId = JSON.parse(localStorage.getItem("LastOrderId")) || 0
totalCart.innerHTML = total;
let shippingFeeValue = total < 500 ? 300 : 0;
shippingFee.innerHTML = shippingFeeValue;
let sum = total + shippingFeeValue;
totalAmount.innerHTML = sum.toString();
let placeOrder = document.querySelector("#placeOrder");
let order = JSON.parse(localStorage.getItem("orderId")) || [];
document.addEventListener("DOMContentLoaded", function () {

    placeOrder.addEventListener("click", (e) => {
        let isLogin = localStorage.getItem("Login")
        if (isLogin) {
            if (fname.value != "" && address.value != "" && city.value != "" && country.value != "" && pCode.value != "") {
                let confirmation = confirm(`Your order has been placed! \nYour Total bill is ${sum}`)
                if (confirmation) {
                    localStorage.removeItem("cart")
                    localStorage.removeItem("TotalCart")
                    // document.forms["Checkoutform"].submit();
                    orderID = LastOrderId + 1
                    let order = JSON.parse(localStorage.getItem("orderId")) || [];
                    order.push(orderID)
                    localStorage.setItem("orderId", JSON.stringify(order));
                    localStorage.setItem("LastOrderId", orderID)

                    location.href = "./ThankYou.html"
                    console.log("hit");

                } else {

                }
                // }
            } else {
                alert("All Fields are required")
            }

            // 
        } else {
            alert("Please Login to Place your Order.")
        }
        e.preventDefault()
    })
})
