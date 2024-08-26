let cartItem = document.querySelector(".cartPage");
let total = document.querySelector("#totalPrice");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let temp = 0;

if (cart.length === 0) {
    // If cart is empty, display a message
    cartItem.innerHTML = "<p>Cart is empty</p>";
} else {
    // If cart is not empty, render cart items
    cart.forEach(({ title, price, img }, index) => {
        let cartProduct = document.createElement("div");
        cartProduct.classList.add("cartItems");
        cartItem.appendChild(cartProduct);

        cartProduct.innerHTML = `
      <span class="cartDesc">
        <span class="deleteItem" data-index="${index}">x</span> 
        <img src=${img} alt=${title} class="cartImg" />
        <span class="productTitle">${title}</span>
      </span>
      <span class="productPrice"> Rs.${price}</span>
    `;
        temp += price;
    });

    total.innerHTML = temp;
    localStorage.setItem("TotalCart", temp);

    // Add event listener to each delete button
    document.querySelectorAll(".deleteItem").forEach(deleteButton => {
        deleteButton.addEventListener("click", function () {
            const index = parseInt(this.dataset.index);
            cart.splice(index, 1); // Remove item from cart array
            localStorage.setItem("cart", JSON.stringify(cart)); // Update local storage
            // Refresh the page after deleting
            location.reload();
        });
    });
}
