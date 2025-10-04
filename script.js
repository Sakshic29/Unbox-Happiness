// script.js
// Main interactivity script for Unbox Happiness website
// Imports products data and renders product cards dynamically
// Adds hover animations and demo cart functionality

import products from './products.js'; // Import products array from products.js

// DOM elements
const productsGrid = document.getElementById('products-grid');

// Function to render product cards
function renderProducts() {
  products.forEach((product) => {
    // Create product card element
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">${product.price.toFixed(2)}</p>
      <button class="add-to-cart">Add to Cart</button>
    `;

    // Add hover animation (lift effect)
    productCard.addEventListener('mouseenter', () => {
      productCard.style.transform = 'translateY(-10px)';
    });

    productCard.addEventListener('mouseleave', () => {
      productCard.style.transform = 'translateY(0)';
    });

    // Add click event for "Add to Cart" button (demo alert)
    const addToCartBtn = productCard.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent card hover from interfering
      alert(`${product.name} added to cart! (Demo - Full cart functionality coming soon)`);
    });

    // Append to grid
    productsGrid.appendChild(productCard);
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();

  // Optional: Smooth scroll for nav links (if needed for single-page feel)
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Mobile hamburger toggle (basic implementation)
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});

// Error handling for import (in case products.js fails)
if (typeof products === 'undefined') {
  console.error('Products data not loaded. Check products.js');
  productsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">Products loading error. Please refresh.</p>';
}