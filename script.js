// Load Navbar and Footer
document.getElementById("navbar").innerHTML = `<h1>Welcome to Unbox Happiness</h1>`;
document.getElementById("footer").innerHTML = `<p>&copy; 2025 UnboxHappiness. All rights reserved.</p>`;

// Generate Filter Buttons
const categories = ["All", ...new Set(products.map(p => p.category))];
const filters = document.getElementById("filters");
filters.innerHTML = categories.map(c => `<button class="p-4 rounded-lg bg-gray cursor-pointer filter-btn">${c}</button>`).join("");

// Render Products
const productGrid = document.getElementById("product-grid");
function renderProducts(list) {
  productGrid.innerHTML = list.map(p => `
    <div class="product-card p-4 rounded-lg bg-white cursor-pointer" onclick="openModal(${p.id})">
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.price}</p>
    </div>
  `).join("");
}
renderProducts(products);

// Filtering
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.textContent;
    renderProducts(category === "All" ? products : products.filter(p => p.category === category));
  });
});

// Modal
function openModal(id) {
  const product = products.find(p => p.id === id);
  document.getElementById("modal-img").src = product.img;
  document.getElementById("modal-name").textContent = product.name;
  document.getElementById("modal-description").textContent = product.description;
  document.getElementById("modal-price").textContent = product.price;
  document.getElementById("product-modal").classList.remove("hidden");
}
document.getElementById("modal-close").onclick = () => {
  document.getElementById("product-modal").classList.add("hidden");
};
