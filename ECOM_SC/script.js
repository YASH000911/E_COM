document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = cart.length);
}

function searchProducts(query) {
    console.log(Searching for: ${query});
    // Implement product search functionality here
}

function checkout() {
    alert('Proceeding to checkout');
    // Implement checkout functionality here
}