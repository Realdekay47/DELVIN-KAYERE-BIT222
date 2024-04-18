// Function to update cart item quantity
function updateQuantity(itemId, newQuantity) {
    // Code to update the quantity of an item in the cart
    console.log(`Updated quantity for item ${itemId} to ${newQuantity}`);
}

// Function to remove an item from the cart
function removeItem(itemId) {
    // Code to remove an item from the cart
    console.log(`Removed item ${itemId} from the cart`);
}

// Function to validate the checkout form
function validateCheckoutForm() {
    // Code to validate the checkout form fields
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    // Example validation (can be expanded)
    if (fullname.trim() === '' || email.trim() === '' || phone.trim() === '' || address.trim() === '' || payment.trim() === '') {
        alert('Please fill in all required fields.');
        return false; // Prevent form submission
    }

    return true; // Proceed with form submission
}

// Event listeners for cart item actions
document.addEventListener('DOMContentLoaded', function () {
    const removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemId = this.dataset.itemId;
            removeItem(itemId);
            // Optionally update UI after item removal
        });
    });

    const quantityInputs = document.querySelectorAll('.item-quantity');
    quantityInputs.forEach(input => {
        input.addEventListener('change', function () {
            const itemId = this.dataset.itemId;
            const newQuantity = parseInt(this.value);
            updateQuantity(itemId, newQuantity);
            // Optionally update UI after quantity change
        });
    });

    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function (event) {
            if (!validateCheckoutForm()) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
            // Otherwise, proceed with form submission
        });
    }

    // Enable remove action when an input action is triggered on cart and checkout
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        const input = item.querySelector('.item-quantity');
        input.addEventListener('input', function () {
            const itemId = input.dataset.itemId;
            const newQuantity = parseInt(input.value);
            updateQuantity(itemId, newQuantity);
            // Optionally update UI after quantity change
        });

        const deleteBtn = item.querySelector('.btn-delete');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function () {
                const itemId = deleteBtn.dataset.itemId;
                removeItem(itemId);
                // Optionally update UI after item removal
            });
        }
    });
});
