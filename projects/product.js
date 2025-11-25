document.addEventListener("DOMContentLoaded", function () {
  // Cart functionality
  let cartCount = 0;
  const cartCountElement = document.getElementById("cart-count");
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  
  addToCartButtons.forEach(button => {
      button.addEventListener("click", function () {
          // Increase cart count
          cartCount++;
          cartCountElement.textContent = cartCount;
          cartCountElement.style.display = "inline-block";
          
          // Show modal
          const modal = document.getElementById("modal");
          modal.style.display = "block";
      });
  
  });

  // Close modal
  const closeModalButton = document.getElementById("modal-close");
  closeModalButton.addEventListener("click", function () {
      const modal = document.getElementById("modal");
      modal.style.display = "none";
  });

  // Modal buttons
  const goToCartButton = document.getElementById("go-to-cart");
  const continueShoppingButton = document.getElementById("continue-shopping");

  goToCartButton.addEventListener("click", function () {
      window.location.href = "cart.html"; // Assuming a separate cart page
  });

  continueShoppingButton.addEventListener("click", function () {
      const modal = document.getElementById("modal");
      modal.style.display = "none";
  });

  // Category filter dropdown functionality
  const categoryFilter = document.getElementById("category-filter");
  categoryFilter.addEventListener("change", function () {
      const selectedCategory = categoryFilter.value;
      const products = document.querySelectorAll(".product-item");
      
      products.forEach(product => {
          if (selectedCategory === "all" || product.getAttribute("data-category") === selectedCategory) {
              product.style.display = "block";
          } else {
              product.style.display = "none";
          }
      });
  });

  // Sort price functionality
  const sortPrice = document.getElementById("sort-price");
  sortPrice.addEventListener("change", function () {
      const sortOption = sortPrice.value;
      const productsContainer = document.querySelector(".products-container");
      const products = Array.from(productsContainer.children);
      
      if (sortOption === "low-high") {
          products.sort((a, b) => {
              const priceA = parseInt(a.querySelector(".product-price").textContent.replace(/[^0-9]/g, ""));
              const priceB = parseInt(b.querySelector(".product-price").textContent.replace(/[^0-9]/g, ""));
              return priceA - priceB;
          });
      } else if (sortOption === "high-low") {
          products.sort((a, b) => {
              const priceA = parseInt(a.querySelector(".product-price").textContent.replace(/[^0-9]/g, ""));
              const priceB = parseInt(b.querySelector(".product-price").textContent.replace(/[^0-9]/g, ""));
              return priceB - priceA;
          });
      }
      
      // Append sorted products back to the container
      products.forEach(product => {
          productsContainer.appendChild(product);
      });
  });
});
