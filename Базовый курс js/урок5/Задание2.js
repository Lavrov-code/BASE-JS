  // Пример данных для корзины
let cartItems = []; // Пустая корзина

// Функция для генерации содержимого корзины
function renderCart() {
    const cartDiv = document.getElementById('cart');
    
    if (cartItems.length === 0) {
        cartDiv.innerHTML = '<p>Корзина пуста</p>';
    } else {
        const totalItems = cartItems.length;
        const totalSum = cartItems.reduce((total, item) => total + item.price, 0);
        cartDiv.innerHTML = `<p>В корзине: ${totalItems} товаров на сумму ${totalSum} рублей</p>`;
    }
}

// Пример наполнения корзины товарами
function addItemToCart(item) {
    cartItems.push(item);
    renderCart();
}

// Пример добавления товаров в корзину
addItemToCart({ name: 'Товар 1', price: 100 });
addItemToCart({ name: 'Товар 2', price: 200 });
// Чтобы протестировать пустую корзину, закомментируйте вышеуказанные строки

// Вызываем функцию при загрузке страницы
window.onload = generateCatalog;   