const PRODUCTS = JSON.parse(localStorage.getItem("PRODUCTS_DATA")) || [];
let CART = JSON.parse(localStorage.getItem("CART_ITEMS")) || [];

function displayCart() {
  const container = document.getElementById("cart-items");
  const totalBox = document.getElementById("total-box");
  container.innerHTML = "";

  if (CART.length === 0) {
    container.innerHTML = "<h3>Your cart is empty.</h3>";
    totalBox.textContent = "";
    return;
  }

  let total = 0;

  CART.forEach(id => {
    const item = PRODUCTS.find(p => p.id == id);
    if (!item) return;

    total += item.price;

    container.innerHTML += `
      <div class="item-card">
        <img src="${item.img}">
        <div>
          <h3>${item.name}</h3>
          <p>$${item.price}</p>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    `;
  });

  totalBox.textContent = "Total: $" + total;
}

function removeFromCart(id) {
  CART = CART.filter(x => x !== id);
  localStorage.setItem("CART_ITEMS", JSON.stringify(CART));
  displayCart();
}

displayCart();
