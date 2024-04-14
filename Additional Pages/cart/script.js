document.addEventListener('DOMContentLoaded', function() {
  const cartItems = [
    { name: "Product 1", price: 10, quantity: 1, image: "assets/images/products/2.jpg" },
    { name: "Product 2", price: 20, quantity: 1, image: "assets/images/products/sports-2.jpg" },
    { name: "Product 3", price: 20, quantity: 1, image: "assets/images/products/shampoo.jpg" }
  ];

  const cartContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  // Populate cart items
  cartItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
        <div class="details">
          <a href="../product/product page.html">
            <h2>${item.name}</h2>
          </a>
          <p class="price">$${item.price}</p>
        </div>

      <button class="add-btn"><ion-icon class="ion-icon-2" name="add-circle-outline"></ion-icon></button>
      <p><span class="quantity">${item.quantity}</span></p>
      <button class="minus-btn"><ion-icon class="ion-icon-2" name="remove-circle-outline"></ion-icon></button>
      <button class="remove-btn"><ion-icon class="ion-icon-2" name="close-outline"></ion-icon></button>
    `;
    cartContainer.appendChild(itemElement);
  });

  // Add event listeners to remove buttons
  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const item = this.closest('.item');
      item.remove();
      updateTotal();
    });
  });

  // Add event listeners to add buttons
  const addButtons = document.querySelectorAll('.add-btn');
  addButtons.forEach(button => {
    button.addEventListener('click', function() {
      const item = this.closest('.item');
      const price = parseInt(item.querySelector('.price').textContent.substring(1));
      const quantityElement = item.querySelector('.quantity');
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      updateTotal();
    });
  });

   // Add event listeners to add buttons
   const minusButtons = document.querySelectorAll('.minus-btn');
   minusButtons.forEach(button => {
     button.addEventListener('click', function() {
       const item = this.closest('.item');
       const price = parseInt(item.querySelector('.price').textContent.substring(1));
       const quantityElement = item.querySelector('.quantity');
       let quantity = parseInt(quantityElement.textContent);
       quantity--;
       quantityElement.textContent = quantity;
       updateTotal();
     });
   });

  // Function to update total price
  function updateTotal() {
    let total = 0;
    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
      total += parseInt(price.textContent.substring(1));
    });
    totalPriceElement.textContent = '$' + total;
  }
  
  // Initial total calculation
  updateTotal();
});
