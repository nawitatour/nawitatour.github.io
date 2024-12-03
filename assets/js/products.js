// Data produk
const products = [
  {
    image: "assets/img/product1.webp",
    label: "HOT!",
    title: "Nawita - Summer School 2025",
    price: "Rp.8,4 JT",
    link: "https://wa.me/6282311883534?text=Hallo%20admin,%20Saya%20ingin%20bertanya%20mengenai%20regulasi%20dari%20Summer%20School%202025.%20Bagaimana%20ya%3F",
  },
  {
    image: "assets/img/product2.webp",
    label: "HOT!",
    title: "Nawita - Hunting Aurora 2025",
    price: "Rp.38,99 JT",
    link: "https://wa.me/6282311883534?text=Hallo%20admin,%20Saya%20ingin%20bertanya%20mengenai%20Winter%20Camp%202025.%20Bagaimana%20ya%3F",
  },
  {
    image: "assets/img/product3.webp",
    label: "",
    title: "Nawita - Oleh-oleh Umroh Haji",
    price: "",
    link: "https://wa.me/6282311883534?text=Hallo%20admin,%20Saya%20ingin%20bertanya%20mengenai%20Winter%20Camp%202025.%20Bagaimana%20ya%3F",
  },
  {
    image: "assets/img/product4.webp",
    label: "",
    title: "Nawita - Layanan Dokumen Perjalanan",
    price: "",
    link: "https://wa.me/6282311883534?text=Hallo%20admin,%20Saya%20ingin%20bertanya%20mengenai%20Winter%20Camp%202025.%20Bagaimana%20ya%3F",
  },
];

// Kontainer elemen
const productContainer = document.querySelector(".product__container");

// Loop untuk membuat elemen card
products.forEach((product) => {
  const productCard = document.createElement("article");
  productCard.className = "product__card";

  productCard.innerHTML = 
    `
      <div class="product__circle"></div>
      <img src="${product.image}" alt="" class="product__img">
      <h3 class="product__title blinking-text">${product.label}</h3>
      <h3 class="product__title">${product.title}</h3>
      <span class="product__price">${product.price}</span>
      <button class="button--flex product__button" onclick="window.location.href='${product.link}'">
        <i class="ri-whatsapp-line"></i>
      </button>
    `;

  productContainer.appendChild(productCard);
});
