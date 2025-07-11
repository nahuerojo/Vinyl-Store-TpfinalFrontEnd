import { addToCart } from "./cart.js";

export async function fetchProducts() {
  try {
    const response = await fetch("data/products.json");
    const products = await response.json();
    localStorage.setItem("products", JSON.stringify(products));
    const container = document.getElementById("product-list");

    container.innerHTML = "";

    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <img src="${product.image}" alt="Disco ${product.title} - ${product.artist}" />
        <div class="product-info">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-artist">${product.artist}</p>
          <p class="product-price">$${product.price.toFixed(2)}</p>
          <button class="add-btn" data-id="${product.id}">Agregar al carrito</button>
        </div>
      `;

      container.appendChild(card);
    });

    // ✅ Agregamos eventos a los botones
    const botones = document.querySelectorAll(".add-btn");
    botones.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.getAttribute("data-id"));
        addToCart(id);
      });
    });

  } catch (error) {
    console.error("Error al cargar productos:", error);
  }
}
