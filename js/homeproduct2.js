import demoData from "../assets/demoData.js";
let shopProduct2 = document.querySelector(".shopProduct2")
let length = demoData.length
console.log(length);

demoData.slice(0, 8).map(({ title, price, img, category, desc }) => {
    let productContainer = document.createElement("div")
    productContainer.classList.add("productContainer")
    shopProduct2.prepend(productContainer)

    productContainer.innerHTML = `
<div class="productCard">
<img
  class="productImg"
  src=${img}
  loading="lazy"
  alt="product" />
</div>
<div class="productDetail">
<span class="productPrice">Category : <strong>${category}</strong></span>
<span class="productTitle">${title}</span>
<span class="productPrice">Rs. <strong>${price}</strong></span>
<button type="button"  class="cartBtn2">Add to Cart</button>

</div>
`
    let cartBtn = document.querySelector(".cartBtn2")
    cartBtn.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartProducts = {
            title: title,
            price: price,
            img: img
        };

        cart.push(cartProducts);
        alert(title + " Added to Cart")
        localStorage.setItem("cart", JSON.stringify(cart));

        ;

    })

    productContainer.addEventListener("click", () => {
        let cartProducts = {
            title: title,
            price: price,
            img: img,
            desc: desc,
            category: category
        }
        // detail.push(cartProducts);
        localStorage.setItem("productDetail", JSON.stringify(cartProducts));
        location.href = "./ProductDetail.html"

            ;

    })


})