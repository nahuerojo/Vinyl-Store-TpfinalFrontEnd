import { loadCart, renderCart } from "./cart.js";
import { fetchProducts } from "./api.js";

loadCart();
fetchProducts();

// Mostrar/ocultar carrito flotante

// main.js
document.getElementById('toggle-cart').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('carrito-flotante').classList.toggle('activo');
  renderCart(); // Asegúrate de que esta función esté importada
});

btnToggle.addEventListener("click", (e) => {
  e.preventDefault();
  carritoFlotante.classList.toggle("activo");
  renderCart(); // Asegurate de que esto actualiza el nuevo contenedor
});

btnCerrar.addEventListener("click", () => {
  carritoFlotante.classList.remove("activo");
});

import "./player.js";
// Reproducir pista de audio al hacer clic
