const PRODUCTS = JSON.parse(localStorage.getItem("PRODUCTS_DATA")) || [];
let FAVS = JSON.parse(localStorage.getItem("FAV_ITEMS")) || [];

function displayFavs() {
  const container = document.getElementById("fav-items");
  container.innerHTML = "";

  if (FAVS.length === 0) {
    container.innerHTML = "<h3>No favorites added.</h3>";
    return;
  }

  FAVS.forEach(id => {
    const item = PRODUCTS.find(p => p.id == id);
    if (!item) return;

    container.innerHTML += `
      <div class="item-card">
        <img src="${item.img}">
        <div>
          <h3>${item.name}</h3>
          <p>$${item.price}</p>
          <button class="remove-btn" onclick="removeFromFav(${item.id})">Remove</button>
        </div>
      </div>
    `;
  });
}

function removeFromFav(id) {
  FAVS = FAVS.filter(x => x !== id);
  localStorage.setItem("FAV_ITEMS", JSON.stringify(FAVS));
  displayFavs();
}

displayFavs();
