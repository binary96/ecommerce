// Sample product data (replace with actual product data from the database)
const product = {
    name: 'Product Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, metus eu scelerisque tristique, leo mauris elementum nunc, ut tincidunt felis felis id ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, metus eu scelerisque tristique, leo mauris elementum nunc, ut tincidunt felis felis id ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, metus eu scelerisque tristique, leo mauris elementum nunc, ut tincidunt felis felis id ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, metus eu scelerisque tristique, leo mauris elementum nunc, ut tincidunt felis felis id ex.',
    price: 50,
    images: ['jacket-2.jpg', 'jacket-3.jpg', 'jacket-4.jpg'],
    reviews: [
        { user: 'User 1', rating: 4, comment: 'Great product!' },
        { user: 'User 2', rating: 5, comment: 'Excellent quality.' },
        // Add more reviews as needed
    ],
    relatedProducts: [
        { name: 'Related Product 1', price: 40, image: '3.jpg' },
        { name: 'Related Product 2', price: 60, image: '2.jpg' },
        // Add more related products as needed
    ]
};

// Function to display product details
function displayProductDetails() {
    const productImagesContainer = document.querySelector('.product-images');
    const productDetailsContainer = document.querySelector('.product-details');
    const productReviewsContainer = document.querySelector('.product-reviews');
    const relatedProductsContainer = document.querySelector('.related-products');

    // Display product images
    product.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        productImagesContainer.appendChild(img);
    });

    // Display product details
    productDetailsContainer.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
    `;

    // Display product reviews
    productReviewsContainer.innerHTML = '<h2>Reviews</h2>';
    product.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <p><strong>${review.user}</strong> - Rating: ${review.rating}</p>
            <p>${review.comment}</p>
        `;
        productReviewsContainer.appendChild(reviewElement);
    });

    // Display related products
    relatedProductsContainer.innerHTML = '<h2>Related Products</h2>';
    product.relatedProducts.forEach(relatedProduct => {
        const relatedProductElement = document.createElement('div');
        relatedProductElement.classList.add('product');
        relatedProductElement.innerHTML = `
            <img src="${relatedProduct.image}" alt="${relatedProduct.name}">
            <div class="restyler">
            <h3>${relatedProduct.name}</h3>
            <p>Price: $${relatedProduct.price}</p>
            </div>
        `;
        relatedProductsContainer.appendChild(relatedProductElement);
    });
}

// Function to handle add to cart button click
function addToCart() {
    // Add your add to cart logic here
    alert('Product added to cart!');
}

// Function to handle buy now button click
function buyNow() {
    // Add your buy now logic here
    alert('Redirecting to checkout...');
}

// Event listeners for add to cart and buy now buttons
document.querySelector('.add-to-cart-btn').addEventListener('click', addToCart);
document.querySelector('.buy-now-btn').addEventListener('click', buyNow);

// Call the displayProductDetails function when the page loads
window.onload = function() {
    displayProductDetails();
};
