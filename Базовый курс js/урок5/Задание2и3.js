const products = [
    { id: 1, name: 'Товар 1', price: 100 },
    { id: 2, name: 'Товар 2', price: 200 },
    { id: 3, name: 'Товар 3', price: 300 },
];

let cart = [];

function renderCatalog() {
    const catalogDiv = document.getElementById('catalog');
    catalogDiv.innerHTML = ''; // Очищаем каталог

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Цена: ${product.price} рублей</p>
            <button onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        catalogDiv.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        renderCart();
    }
}

function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = ''; // Очищаем корзину

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Корзина пуста</p>';
    } else {
        const totalItems = cart.length;
        const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
        cartDiv.innerHTML = `<p>В корзине: ${totalItems} товаров на сумму ${totalPrice} рублей</p>`;
    }
}

// Инициализация
renderCatalog();
renderCart();
