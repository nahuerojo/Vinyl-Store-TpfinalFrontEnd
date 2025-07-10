import { loadCart } from "./cart.js";
import { fetchProducts } from "./api.js";

loadCart();
fetchProducts();
import { renderCart } from "./cart.js";

// Mostrar u ocultar carrito al hacer clic
document.getElementById("toggle-cart").addEventListener("click", (e) => {
  e.preventDefault();
  const section = document.getElementById("carrito");
  const isVisible = section.style.display === "block";
  section.style.display = isVisible ? "none" : "block";
  renderCart();
});
