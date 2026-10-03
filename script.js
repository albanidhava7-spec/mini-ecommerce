// CART

let cart = [];

const cartCount = document.getElementById("cart-count");

const addButtons = document.querySelectorAll(".add-cart");


// ADD PRODUCT TO CART

addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cart.push("product");

        cartCount.textContent = cart.length;

        alert("Product added to cart! 🛒");

    });

});
