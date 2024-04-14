function calculateTotal() {
    const products = document.querySelectorAll('.product-price');
    let subtotal = 0;
    products.forEach(function(product) {
      subtotal += parseFloat(product.textContent.replace('$', ''));
    });
    
    const shippingCost = calculateShipping();
    const total = subtotal + shippingCost;
    
    document.getElementById('subtotal').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `Shipping: $${shippingCost.toFixed(2)}`;
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
  }
  
  function calculateShipping() {
    // Add your shipping calculation logic here
    return 5.00; // Example shipping cost
  }
  
  function submitForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
    
    // Validate form fields (you can add your validation logic here)
    
    // Submit the form data (you can replace this with your desired action, like sending the data to a server)
    console.log('Name:', name);
    console.log('Address:', address);
    console.log('City:', city);
    console.log('Country:', country);
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiry);
    console.log('CVV:', cvv);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    calculateTotal();
  });
  
  document.getElementById('shipping-form').addEventListener('input', function() {
    calculateTotal();
  });
  