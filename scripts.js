document.addEventListener('DOMContentLoaded', () => {
    const categoryFilters = document.querySelectorAll('#category-filters li');
    const productList = document.getElementById('product-list');

    categoryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const category = filter.getAttribute('data-category');
            fetchProducts(category);
        });
    });

    const fetchProducts = async (category) => {
        const response = await fetch('https://api.example.com/products'); // Replace with actual API endpoint
        const products = await response.json();
        displayProducts(products, category);
    };

    const displayProducts = (products, category) => {
        productList.innerHTML = '';

        const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div>
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p><strong>Price: $${product.price}</strong></p>
                </div>
            `;

            productList.appendChild(productElement);
        });
    };

    // Fetch all products on initial load
    fetchProducts('all');
});
