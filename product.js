// Load product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Load saved product list
const PRODUCTS = JSON.parse(localStorage.getItem("PRODUCTS_DATA")) || [];
let CART = JSON.parse(localStorage.getItem("CART_ITEMS")) || [];
let FAVS = JSON.parse(localStorage.getItem("FAV_ITEMS")) || [];

const product = PRODUCTS.find(p => p.id == productId);

// If product not found
if (!product) {
    document.querySelector(".product-wrapper").innerHTML =
        "<h2 style='color:white;'>Product not found.</h2>";
    throw new Error("Product not found");
}

// Set image + information
document.getElementById("product-img").src = product.img;
document.getElementById("product-name").textContent = product.name;
document.getElementById("product-price").textContent = "$" + product.price;
document.getElementById("product-desc").textContent = product.desc;

// DOM references
const cartStatus = document.getElementById("cart-status");
const favStatus = document.getElementById("fav-status");
const cartBtn = document.getElementById("add-cart-btn");
const favBtn = document.getElementById("add-fav-btn");

function updateStatuses() {
    if (CART.includes(product.id)) {
        cartStatus.textContent = "✔ Already in cart";
        cartBtn.textContent = "Remove from Cart";
    } else {
        cartStatus.textContent = "";
        cartBtn.textContent = "Add to Cart";
    }

    if (FAVS.includes(product.id)) {
        favStatus.textContent = "✔ Already in favorites";
        favBtn.textContent = "Remove from Favorites";
    } else {
        favStatus.textContent = "";
        favBtn.textContent = "Add to Favorites";
    }
}
updateStatuses();

// Cart button toggle
cartBtn.onclick = () => {
    if (CART.includes(product.id)) {
        CART = CART.filter(x => x !== product.id);
    } else {
        CART.push(product.id);
    }
    localStorage.setItem("CART_ITEMS", JSON.stringify(CART));
    updateStatuses();
};

// Favorites toggle
favBtn.onclick = () => {
    if (FAVS.includes(product.id)) {
        FAVS = FAVS.filter(x => x !== product.id);
    } else {
        FAVS.push(product.id);
    }
    localStorage.setItem("FAV_ITEMS", JSON.stringify(FAVS));
    updateStatuses();
};

// Buy now
document.getElementById("buy-now-btn").onclick = () => {
    window.location.href = `payment.html?id=${product.id}`;
};
