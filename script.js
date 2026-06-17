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
  {
    id: "boldhealth-gel-eye-mask",
    name: "BoldHealth Cooling Gel Eye Mask",
    description: "Stretchable & adjustable eye gel mask with soft velvet backing for dark circles, puffiness, and stress relief.",
    price: "₹199",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/q_auto/f_auto/v1781197038/81FrL0enhnL_ygm5le.jpg",
    link: "https://www.amazon.in/gp/product/B0BNDSWLL4?smid=A15APWRK6P7LBV&th=1&linkCode=ll2&tag=msv02602-21&linkId=322f31ad904d84d3e64b688be99b3aa0&ref_=as_li_ss_tl"
  },
  {
    id: "deconstruct-gel-sunscreen",
    name: "Deconstruct Face Gel Sunscreen SPF 55+",
    description: "A photostable, lightweight, and non-greasy gel sunscreen that protects combination-to-oily skin without leaving a white cast.",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/q_auto/f_auto/v1781199620/deconstruct-lightweight-gel-sunscreen-spf-55-and-pa-50-gm_1_display_1772096223_eb987728.jpg_shggze.webp",
    link: "https://www.amazon.in/gp/product/B0B45RB1RV?smid=AINB595VN21QW&th=1&linkCode=ll2&tag=msv02602-21&linkId=b0452821de8a3888876a0d6ca8dfb2c6&ref_=as_li_ss_tl"
  },
  {
    id: "reen-naturals-beetroot-soap",
    name: "Reen Naturals Beetroot Brightening Soap",
    description: "Handcrafted soap enriched with beetroot extracts and essential oils to gently cleanse and brighten your skin naturally.",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/q_auto/f_auto/v1781200579/Untitled_design_6.png_lfm3gp.webp",
    link: "https://www.amazon.in/gp/product/B0DT99VHKW?smid=A8HJQWCREB2SL&th=1&linkCode=ll2&tag=msv02602-21&linkId=c06848b7fc819a9f4d46ac573c86c926&ref_=as_li_ss_tl"
  },
  {
    id: "klm-nevlon-moisturizer",
    name: "KLM Nevlon Intense Moisturizing Cream",
    description: "Formulated for extended hydration and deep skin nourishment, suitable for dry and sensitive skin.",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/q_auto/f_auto/v1781200618/ChatGPT_Image_Jun_11_2026_at_11_26_32_PM_rqi1ic.png",
    link: "https://www.amazon.in/gp/product/B0D3Z7QQW8?smid=A1Y19I0OE4KHXF&psc=1&linkCode=ll2&tag=msv02602-21&linkId=7615d637924114ec5a2b7839281c2768&ref_=as_li_ss_tl"
  },
  {
    id: "diamond-color-contact-lenses",
    name: "Diamond Monthly Color Contact Lenses",
    description: "Premium monthly color contact lenses that provide exceptional comfort and a natural, vibrant eye enhancement.",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/q_auto/f_auto/v1781273477/ChatGPT_Image_Jun_12_2026_at_07_40_08_PM_pxsxei.png",
    link: "https://www.amazon.in/gp/product/B0837QW56H?smid=A12DTCKM3B4RXS&psc=1&linkCode=ll2&tag=msv02602-21&linkId=d55833a06060cbcb91aee7b8a052fb37&ref_=as_li_ss_tl"
  },
  {
    id: "spartan-shield-dio-speedometer",
    name: "Spartan Shield DIO 110/125 Screen Protector",
    description: "Premium anti-scratch, bubble-free screen guard film designed to protect the digital instrument console of your Honda Dio scooter.",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/q_auto/f_auto/v1781284662/ChatGPT_Image_Jun_12_2026_at_10_47_18_PM_iuvpkj.png",
    link: "https://www.amazon.in/gp/product/B0FPXP9HJY?smid=A2EYRGDXQ2P1HM&th=1&linkCode=ll2&tag=msv02602-21&linkId=2b170a7d532dd286fa1f910feaf17c36&ref_=as_li_ss_tl"
  },
  {
    id: "reen-charcoal-multani-mitti",
    name: "Reen Naturals Charcoal & Multani Mitti Powder Combo",
    description: "A deep pore cleansing face pack combo featuring Activated Bamboo Charcoal and Multani Mitti powders to detoxify, exfoliate, and brighten skin naturally.",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/q_auto/f_auto/v1781449080/ChatGPT_Image_Jun_14_2026_at_08_27_28_PM_jqmgee.png",
    link: "https://www.amazon.in/gp/product/B0CXXNFHLC?smid=A8HJQWCREB2SL&psc=1&linkCode=ll2&tag=msv02602-21&linkId=da8d407e2bb1326a2afe0abeb35dd0ff&ref_=as_li_ss_tl"
  },
  {
    id: "reen-naturals-hair-dye-combo",
    name: "Reen Naturals Henna & Indigo Powder Combo",
    description: "100% natural and organic Henna and Indigo powders for safe, chemical-free hair coloring and deep conditioning.",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/q_auto/f_auto/v1781449079/ChatGPT_Image_Jun_14_2026_at_08_25_45_PM_fany1q.png",
    link: "https://www.amazon.in/gp/product/B0GYD1QL7G?smid=AXOGFIT0PZZ7G&th=1&linkCode=ll2&tag=msv02602-21&linkId=06f2d4a981b21982f207c1d48c9be7ec&ref_=as_li_ss_tl"
  },
  {
    id: "portronics-mport-30-card-reader",
    name: "Portronics Mport 30 Plus Card Reader",
    description: "A multifunctional, high-speed plug-and-play card reader with built-in storage slots for SD/microSD cards, SIM cards, and a SIM ejector pin.",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/q_auto/f_auto/v1781449602/61SsgxQEULL._AC_UF1000_1000_QL80__gj4y5v.jpg",
    link: "https://www.amazon.in/gp/product/B0DK1KSNF4?smid=AJ6SIZC8YQDZX&psc=1&linkCode=ll2&tag=msv02602-21&linkId=ce011ce87c51ea7fc930f1b570b07a6b&ref_=as_li_ss_tl"
  },
  {
    id: "portronics-tornado-air-duster",
    name: "Portronics Tornado Handheld Air Duster",
    description: "A powerful, rechargeable, 130,000 RPM high-speed cordless air duster with three speed modes to easily clean keyboards, laptops, CPUs, and car interiors.",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/q_auto/f_auto/v1781449601/61_N9FyfSzL._AC_UF1000_1000_QL80__ux5yfv.jpg",
    link: "https://www.amazon.in/gp/product/B0F9LKX5XG?smid=A2AL6IVND0I91F&th=1&linkCode=ll2&tag=msv02602-21&linkId=28940ad56091e1ce43f0687e55091379&ref_=as_li_ss_tl"
  },
  {
    id: "amazon-echo-dot-5th-gen",
    name: "Amazon Echo Dot (5th Gen) Smart Speaker",
    description: "Smart speaker with Alexa, offering deeper bass, vibrant sound, built-in temperature sensor, and motion detection.",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/q_auto/f_auto/v1781449603/Amazon-Echo-Dot-5th-Gen-Smart-speaker-with-vibrant-sound-Motion-Detection-Temper-0-1200x1200_tikntz.jpg",
    link: "https://www.amazon.in/gp/product/B09B8XJDW5?smid=AJ6SIZC8YQDZX&th=1&linkCode=ll2&tag=msv02602-21&linkId=148c60959bce8417de89bde63701335b&ref_=as_li_ss_tl"
  },
  {
    id: "squeeze-rinsing-eye-cup",
    name: "Squeeze Rinsing Eye Wash Cup",
    description: "An ergonomic silicone eye wash cup designed to gently rinse away dust, makeup residue, and irritants using manual air pressure. Perfect for refreshing tired and irritated eyes.",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/v1781488451/51H4_5GAVIL._AC_UF1000_1000_QL80__reoijb.jpg",
    link: "https://www.amazon.in/gp/product/B0DVLKJVYP?smid=A38NIY4R9X6VUN&th=1&linkCode=ll2&tag=msv02602-21&linkId=c5cfef354fcc0e4cc770fa03afecb668&ref_=as_li_ss_tl"
  },
  {
    id: "glassverse-vivo-s1-pro-tempered-glass",
    name: "GlassVerse 9H Tempered Glass for Vivo S1 Pro",
    description: "Premium 9H surface hardness tempered glass screen protector for Vivo S1 Pro (6.38-inch). Features anti-glare, scratch resistance, and rounded edges with a free installation kit.",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/v1781534421/ChatGPT_Image_Jun_15_2026_at_08_09_53_PM_lc1ojj.png",
    link: "https://www.amazon.in/gp/product/B0BPS8PFKH?smid=ANVCTQ7K82P8U&th=1&linkCode=ll2&tag=msv02602-21&linkId=623c79cb89b6893e5846ab734a5a2352&ref_=as_li_ss_tl"
  },
  {
    id: "supcares-vivo-y200e-tempered-glass",
    name: "SupCares Tempered Glass for Vivo Y200e",
    description: "High-quality 9H edge-to-edge tempered glass screen protector for Vivo Y200e (6.67-inch). Includes an easy-to-use installation kit for bubble-free application.",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/v1781534589/ChatGPT_Image_Jun_15_2026_at_08_12_50_PM_syyy46.png",
    link: "https://www.amazon.in/gp/product/B0D1QS88T6?smid=AU2QX2WP7B51I&th=1&linkCode=ll2&tag=msv02602-21&linkId=914665d3aaba22eb9c71bcf88ad75c45&ref_=as_li_ss_tl"
  },
  {
    id: "popio-samsung-a06-tempered-glass",
    name: "POPIO Gorilla Tempered Glass for Samsung Galaxy A06",
    description: "Military-grade 9H hardness Gorilla tempered glass screen protector for Samsung Galaxy A06 / F06 / M06. Features edge-to-edge protection, scratch resistance, and bubble-free installation.",
    image: "https://res.cloudinary.com/dbqd8ehhf/image/upload/v1781537974/ChatGPT_Image_Jun_15_2026_at_09_09_12_PM_er5liy.png",
    link: "https://www.amazon.in/POPIO-Samsung-Galaxy-A06-M06/dp/B0DP26T4XY?crid=1CDM75U8WXZ2W&dib=eyJ2IjoiMSJ9.90lyWHHHRX9rNVk6WSFSq_sddmfAFXZxAXyb_hLCDdrC3mF4hTOk6U9neVNqxbMszhXIB7UODqzCf5y5GHy5I9bNmoxgE94ICZkXN8FbIpNhLHPJrPxujPzuito_N7vM7EMI29zKRaeGjWbWF8VhkWYDbeUGZz8h1hbwREiFIKNYJB5bgsTSM3MsHUlPn4mTfIFWZM2zIgL97YUjF8BB7S7f7rGjHSuSryVAJa4rfTc.MJMcCAOD7II9oDkPpn_44pFUEaGTVqqpbycxcX5Mk1w&dib_tag=se&keywords=POPIO%2BMilitary-Grade%2BGorilla%2BTempered%2BGlass%2Bfor%2BSamsung%2BGalaxy%2BA06%2B%2F%2BF06%2B%2F%2BM06%2B%2F%2BA07%2B%2F%2BF07%2B%2F%2BM07%2B%7C%2BPack%2Bof%2B1%2B%7C%2B9H%2BHardness%2C%2BEdge-to-Edge%2C%2BBubble-Free&nsdOptOutParam=true&qid=1781659201&sprefix=popio%2Bmilitary-grade%2Bgorilla%2Btempered%2Bglass%2Bfor%2Bsamsung%2Bgalaxy%2Ba06%2B%2F%2Bf06%2B%2F%2Bm06%2B%2F%2Ba07%2B%2F%2Bf07%2B%2F%2Bm07%2Bpack%2Bof%2B1%2B9h%2Bhardness%2C%2Bedge-to-edge%2C%2Bbubble-free%2Caps%2C488&sr=8-3&th=1&linkCode=ll2&tag=msv02602-21&linkId=bdfc7e13f68b2ea17ae5c1eed8896138&ref_=as_li_ss_tl"
  }
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
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-desc">${product.description}</div>
        <div class="product-footer">
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
