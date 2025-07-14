// js/main.js

import { loadCart, renderCart } from "./cart.js";
import { fetchProducts } from "./api.js";
import "./player.js"; // Módulo para manejar el reproductor de audio

// Carga inicial de carrito y productos
loadCart();
fetchProducts();

// Referencias a elementos del DOM
const toggleBtn = document.getElementById("toggle-cart");
const carritoFlotante = document.getElementById("carrito-flotante");
const cerrarBtn = document.getElementById("cerrar-carrito");

// Mostrar/ocultar carrito al hacer clic en el icono del carrito
toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  carritoFlotante.classList.toggle("activo");
  renderCart(); // Actualiza el contenido del carrito
});

// Cerrar carrito al hacer clic en la “X”
cerrarBtn.addEventListener("click", () => {
  carritoFlotante.classList.remove("activo");
});

