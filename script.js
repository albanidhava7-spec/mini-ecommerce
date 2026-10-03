// CART

let cart = [];

const cartCount = document.getElementById("cart-count");
const cartButton = document.getElementById("cart-button");

const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");


// ADD TO CART

const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productCard = button.closest(".product-card");

        const name = productCard.querySelector("h3").textContent;

        const priceText = productCard.querySelector(".price").textContent;

        const price = Number(priceText.replace("$", ""));


        cart.push({
            name: name,
            price: price
        });


        updateCart();

        alert(name + " added to cart! 🛒");

    });

});


// UPDATE CART

function updateCart() {

    cartCount.textContent = cart.length;

    cartItems.innerHTML = "";

    let total = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

    }


    cart.forEach(function (product, index) {

        total += product.price;


        const item = document.createElement("div");

        item.className = "cart-item";


        item.innerHTML = `
            <div>
                <strong>${product.name}</strong>
                <p>$${product.price}</p>
            </div>

            <button onclick="removeFromCart(${index})">
                🗑️
            </button>
        `;


        cartItems.appendChild(item);

    });


    cartTotal.textContent = "$" + total;

}


// REMOVE PRODUCT

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// OPEN CART

cartButton.addEventListener("click", function () {

    cartModal.style.display = "flex";

});


// CLOSE CART

closeCart.addEventListener("click", function () {

    cartModal.style.display = "none";

});
