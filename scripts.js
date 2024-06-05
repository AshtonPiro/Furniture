// scripts.js
let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log(cart);
}

document.querySelector('button').addEventListener('click', () => {
    addToCart('Product Name');
});
