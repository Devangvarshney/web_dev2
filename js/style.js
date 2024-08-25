document.addEventListener("DOMContentLoaded", function () {
    let logoutBtn = document.querySelector(".logout");
    let fname = document.querySelector("#fullname");
    fname.innerHTML = localStorage.getItem("LoginEmail");
    logoutBtn.addEventListener("click", () => {
        const confirmation = confirm("You are going to log out. Do you want to continue?");
        if (confirmation) {
            localStorage.removeItem("User");
            localStorage.removeItem("Login");
            localStorage.removeItem("LoginEmail");
            console.log("Logout"); // Check if this message is logged upon clicking logout
            location.href = "./Login.html";
        }
    });
});

let menu = document.querySelector(".menumbl");
let sidebar = document.querySelector(".sidebar");
menu.addEventListener("click", () => {
    sidebar.classList.toggle("hidden"); // Toggle the "hidden" class
});
let cartItem = localStorage.getItem("cart")
let lengthCart = JSON.parse(cartItem)
let itemTotal = document.querySelector("#itemTotal")
itemTotal.innerHTML = lengthCart.length



