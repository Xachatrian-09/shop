let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  let item = cart.find(p => p.name === name);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  let count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").innerText = count;
}

updateCartCount();