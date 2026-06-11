/* ======================================================
   SAKTHI AFFILIATES – Products Data

   HOW TO ADD YOUR PRODUCTS:
   1. Copy the block below (between the { } lines)
   2. Paste it inside the products = [ ] array
   3. Fill in: name, description, price, category, image, link
   4. Save the file and refresh the browser

   Categories you can use:
   electronics / fashion / fitness / home / beauty / books / gaming / accessories
   ====================================================== */

// ============ CATEGORY ICONS (used on product cards) ============
const categories = [
  { id: "electronics",  name: "Electronics",   icon: "📱" },
  { id: "fashion",      name: "Fashion",        icon: "👗" },
  { id: "fitness",      name: "Fitness",        icon: "💪" },
  { id: "home",         name: "Home & Kitchen", icon: "🏠" },
  { id: "beauty",       name: "Beauty",         icon: "✨" },
  { id: "books",        name: "Books",          icon: "📚" },
  { id: "gaming",       name: "Gaming",         icon: "🎮" },
  { id: "accessories",  name: "Accessories",    icon: "⌚" },
];

// ============ YOUR PRODUCTS — ADD HERE ============
const products = [
  // PASTE YOUR PRODUCTS BELOW THIS LINE
  // Example:
  // {
  //   id: "p1",
  //   name: "Product Name",
  //   description: "Short description.",
  //   price: "₹999",
  //   category: "electronics",
  //   badge: "Hot Deal",
  //   image: "https://image-url.jpg",
  //   link: "https://your-affiliate-link"
  // },
];
// ============ END OF PRODUCTS ============


// ======================================================
// APP LOGIC — no need to edit below this line
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initMobileMenu();
  initBackToTop();
});

// --- Render all products ---
function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  grid.innerHTML = "";

  if (products.length === 0) return; // show nothing if no products added

  products.forEach((product, i) => {
    const cat = categories.find(c => c.id === product.category);
    const icon = cat ? cat.icon : "🛍️";
    const catName = cat ? cat.name : "";

    const imgContent = product.image
      ? `<img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy"
           onerror="this.parentElement.innerHTML='<div class=\\'img-placeholder\\'>${icon}</div>'">`
      : `<div class="img-placeholder">${icon}</div>`;

    const card = document.createElement("a");
    card.className = "product-card fade-in-up";
    card.href = product.link || "#";
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.id = `product-${product.id}`;
    card.style.animationDelay = `${i * 0.07}s`;

    card.innerHTML = `
      <div class="product-img-wrap">
        ${imgContent}
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <div class="product-overlay">
          <div class="overlay-btn">
            View Product
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category-tag">${catName}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-desc">${product.description}</div>
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <span class="product-shop-link">
            Shop Now
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// --- Mobile menu ---
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const links = document.getElementById("nav-links");
  if (!btn || !links) return;
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    links.classList.toggle("open");
  });
  links.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      btn.classList.remove("open");
      links.classList.remove("open");
    });
  });
}

// --- Back to top ---
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 300);
  }, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
