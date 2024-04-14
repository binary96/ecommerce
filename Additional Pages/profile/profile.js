// Sample user data
let userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    profilePic: "assets/images/profile.jpg",
    orders: [
        { id: 204, product: "Product A", date: "January 1, 2024", total: 50.00, details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lorem sapien." },
        { id: 278, product: "Product B", date: "February 15, 2024", total: 75.00, details: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." }
        // More sample orders can be added here
    ]
};

// Function to populate user information in the sidebar
function populateUserInfo() {
    const userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = `
    <a href="assets/images/profile.jpg">
        <img src="assets/images/profile.jpg" alt="Profile Picture" id="profile-pic">
    </a>
    <h2>${userData.name}</h2>
    <p>Email: ${userData.email}</p>
    <p>Phone: ${userData.phone}</p>
    `;

    // Add event listener for profile picture change
   
}

// Function to populate user's orders in the orders section
function populateOrders() {
    const ordersSection = document.getElementById('orders-section');
    ordersSection.innerHTML = `
        <h2>Orders</h2>
        <div class="order-list">
            ${userData.orders.map(order => `
                <div class="order-item" id="order-${order.id}">
                    <p>Order ID: ${order.id}</p>
                    <p>Product: ${order.product}</p>
                    <p>Date: ${order.date}</p>
                    <button class="order-details-btn" data-order-id="${order.id}">View Details</button>
                </div>
            `).join('')}
        </div>
    `;

    // Add event listeners for order details buttons
    const orderDetailsButtons = document.querySelectorAll('.order-details-btn');
    orderDetailsButtons.forEach(button => {
        button.addEventListener('click', () => showOrderDetails(button.dataset.orderId));
    });
}

// Function to show order details
function showOrderDetails(orderId) {
    const order = userData.orders.find(order => order.id == orderId);
    const orderDetailsSection = document.getElementById('order-details-section');
    orderDetailsSection.innerHTML = `
        <h2>Order Details</h2>
        <div class="order-details-item">
            <p>Order ID: ${order.id}</p>
            <p>Product: ${order.product}</p>
            <p>Date: ${order.date}</p>
            <p>Total: $${order.total.toFixed(2)}</p>
            <p>Details: ${order.details}</p>
        </div>
    `;

    // Hide other sections and show order details section
    document.querySelectorAll('main section').forEach(section => {
        section.classList.add('hidden');
    });
    orderDetailsSection.classList.remove('hidden');
}

// Function to populate account settings form in the account settings section
function populateAccountSettingsForm() {
    const accountSettingsSection = document.getElementById('account-settings-section');
    accountSettingsSection.innerHTML = `
        <h2>Account Settings</h2>
        <p>Update your information:</p>
        <form id="account-settings-form">
            <label for="name">Name:</label>
            <input type="text" id="name" value="${userData.name}">
            <label for="email">Email:</label>
            <input type="email" id="email" value="${userData.email}">
            <label for="phone">Phone:</label>
            <input type="text" id="phone" value="${userData.phone}">
            <button type="submit">Save Changes</button>
        </form>
    `;

    // Add event listener for form submission
    const accountSettingsForm = document.getElementById('account-settings-form');
    accountSettingsForm.addEventListener('submit', updateAccountSettings);
}

// Function to update user's account settings
function updateAccountSettings(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    // Update user data with new values
    userData.name = nameInput.value;
    userData.email = emailInput.value;
    userData.phone = phoneInput.value;

    // Update user info in the sidebar
    populateUserInfo();

    // Show success message (can be replaced with actual feedback mechanism)
    alert('Account settings updated successfully!');
}

// Function to change profile picture
function changeProfilePicture() {
    // Simulate profile picture change process (can be replaced with actual implementation)
    const newProfilePic = prompt("Enter the URL of the new profile picture:");
    if (newProfilePic) {
        userData.profilePic = newProfilePic;
        populateUserInfo();
    }
}

// Function for tracking functionality
function trackAction(orderNumber, currentStepIndex, status, estimatedDeliveryDate, shippingAddress, orderNumber1, currentStepIndex1, status1, estimatedDeliveryDate1, shippingAddress1) {
    const trackingSection = document.getElementById('tracking-section');

    trackingSection.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
            <div style="flex: 1; text-align: center; padding: 10px; background-color: ${currentStepIndex === 0 ? '#00FF00' : '#f0f0f0'}; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Order Placed</div>
            <div style="flex: 1; text-align: center; padding: 10px; background-color: ${currentStepIndex === 1 ? '#00FF00' : '#f0f0f0'}; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Shipped</div>
            <div style="flex: 1; text-align: center; padding: 10px; background-color: ${currentStepIndex === 2 ? '#00FF00' : '#f0f0f0'}; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Out for Delivery</div>
            <div style="flex: 1; text-align: center; padding: 10px; background-color: ${currentStepIndex === 3 ? '#00FF00' : '#f0f0f0'}; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Delivered</div>
        </div>
        <div class="tracking-details">
            <h2>Order #${orderNumber}</h2>
            <p>Status: ${status}</p>
            <p>Estimated Delivery Date: ${estimatedDeliveryDate}</p>
            <p>Shipping Address: ${shippingAddress}</p>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
            <div style="flex: 1; text-align: center; padding: 10px; background-color: ${currentStepIndex1 === 0 ? '#00FF00' : '#f0f0f0'}; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Order Placed</div>
            <div style="flex: 1; text-align: center; padding: 10px; background-color: ${currentStepIndex1 === 1 ? '#00FF00' : '#f0f0f0'}; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Shipped</div>
            <div style="flex: 1; text-align: center; padding: 10px; background-color: ${currentStepIndex1 === 2 ? '#00FF00' : '#f0f0f0'}; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Out for Delivery</div>
            <div style="flex: 1; text-align: center; padding: 10px; background-color: ${currentStepIndex1 === 3 ? '#00FF00' : '#f0f0f0'}; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Delivered</div>
        </div>
        <div class="tracking-details">
            <h2>Order #${orderNumber1}</h2>
            <p>Status: ${status1}</p>
            <p>Estimated Delivery Date: ${estimatedDeliveryDate1}</p>
            <p>Shipping Address: ${shippingAddress1}</p>
        </div>
    `;
}

// Event listener for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.id.replace('account-link', 'account-settings-section');
        const targetId1 = this.id.replace('tracking-link', 'tracking-section');
        const targetId2 = this.id.replace('orders-link', 'orders-section');
       
        document.querySelectorAll('main section').forEach(section => {
            if (section.id === targetId) {
                section.classList.remove('hidden');
            } else if (section.id === targetId1){
                section.classList.remove('hidden');
            } else if (section.id === targetId2) {
                section.classList.remove('hidden');
            }
            else {
                section.classList.add('hidden');
            }
        });
        if (targetId === 'account-settings-section') {
            populateAccountSettingsForm();
        } else if (targetId1 === 'tracking-section') {
            // Pass sample tracking data to the trackAction function
            trackAction(204, 1, 'Shipped', '25th June 2024', 'No. 23 CDeL road nsk enugu', 278, 3, 'Delivered', '25th May 2024', 'No. 23 CDeL road nsk enugu');
        }
        else if (targetId2 === 'orders-section') {
            populateOrders();
        }
    });
});

// Event listener for document load
document.addEventListener('DOMContentLoaded', () => {
    populateUserInfo();
    populateOrders();
});
