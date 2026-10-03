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


        const existingProduct = cart.find(function (product) {
            return product.name === name;
        });


        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({
                name: name,
                price: price,
                quantity: 1
            });

        }


        updateCart();

    });

});


// UPDATE CART

function updateCart() {

    let totalItems = 0;
    let totalPrice = 0;

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

    }


    cart.forEach(function (product, index) {

        totalItems += product.quantity;

        totalPrice += product.price * product.quantity;


        const item = document.createElement("div");

        item.className = "cart-item";


        item.innerHTML = `
            <div class="cart-product">

                <strong>${product.name}</strong>

                <p>$${product.price} × ${product.quantity}</p>

            </div>

            <div class="cart-controls">

                <button onclick="decreaseQuantity(${index})">
                    −
                </button>

                <span>${product.quantity}</span>

                <button onclick="increaseQuantity(${index})">
                    +
                </button>

                <button onclick="removeFromCart(${index})">
                    🗑️
                </button>

            </div>
        `;


        cartItems.appendChild(item);

    });


    cartCount.textContent = totalItems;

    cartTotal.textContent = "$" + totalPrice;

}


// INCREASE QUANTITY

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();

}


// DECREASE QUANTITY

function decreaseQuantity(index) {

    cart[index].quantity--;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    updateCart();

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


// CHECKOUT

const checkoutButton = document.getElementById("checkout-button");
const checkoutMessage = document.getElementById("checkout-message");

checkoutButton.addEventListener("click", function () {

    if (cart.length === 0) {

        checkoutMessage.textContent = "Your cart is empty.";

        return;
    }

    checkoutMessage.textContent =
        "Checkout successful! 🎉 Thank you for shopping at NOVA STORE.";

});
