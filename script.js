// CART

let cart = [];

const cartCount = document.getElementById("cart-count");
const cartButton = document.getElementById("cart-button");

const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");


// ADD TO CART

const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cart.push("product");

        cartCount.textContent = cart.length;

        alert("Product added to cart! 🛒");

    });

});


// OPEN CART

cartButton.addEventListener("click", function () {

    cartModal.style.display = "flex";

});


// CLOSE CART

closeCart.addEventListener("click", function () {

    cartModal.style.display = "none";

});
