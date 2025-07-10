let cart = [];

export function loadCart() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
    updateCartCounter();
  }
}

export function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function updateCartCounter() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
}

export function addToCart(productId) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart();
  updateCartCounter();
  alert("Producto agregado al carrito");
}
export function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalContainer = document.getElementById("cart-total");
  cartContainer.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>El carrito está vacío.</p>";
    totalContainer.textContent = "0.00";
    return;
  }

  cart.forEach(item => {
    const product = getProductById(item.id);
    const subtotal = product.price * item.quantity;
    total += subtotal;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.title}" width="50" />
      <strong>${product.title}</strong> - ${item.quantity} x $${product.price} = $${subtotal.toFixed(2)}
      <button class="remove-btn" data-id="${item.id}">Eliminar</button>
    `;
    cartContainer.appendChild(div);
  });

  totalContainer.textContent = total.toFixed(2);

  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      removeFromCart(id);
    });
  });
}

function getProductById(id) {
  const products = JSON.parse(localStorage.getItem("products"));
  return products.find(p => p.id === id);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartCounter();
  renderCart();
}
