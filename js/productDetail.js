let detail = JSON.parse(localStorage.getItem("cart")) || [];
let proImg = document.querySelector(".productImg")
let productHeading = document.querySelector(".productHeading")
let productDesc = document.querySelector(".productDesc")
let productCat = document.querySelector(".productCat")
let productPrice = document.querySelector(".productMRP")

let productDetail = JSON.parse(localStorage.getItem("productDetail")) || [];
productDetail.title;

proImg.src = productDetail.img
productHeading.innerHTML = productDetail.title;;
productDesc.innerHTML = productDetail.desc;;
productCat.innerHTML = productDetail.category;;
productPrice.innerHTML = productDetail.price;;

let cartBtn = document.querySelector(".cartBtn")
cartBtn.addEventListener("click", () => {
    console.log("productDetail");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartProducts = {
        title: productDetail.title,
        price: productDetail.price,
        img: productDetail.img

    };
    console.log(cartProducts);
    cart.push(cartProducts);
    alert(productDetail.title + " Added to Cart")
    localStorage.setItem("cart", JSON.stringify(cart));

    ;

})

