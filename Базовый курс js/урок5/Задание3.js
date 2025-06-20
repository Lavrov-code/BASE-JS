// Массив товаров
const products = [
    {
        name: "Товар 1",
        price: 100,
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Товар 2",
        price: 200,
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Товар 3",
        price: 300,
        image: "https://via.placeholder.com/150"
    },
];

// Функция генерации каталога
function generateCatalog() {
    const catalogDiv = document.getElementById("catalog");

    // Генерируем HTML-код для каждого товара
    products.forEach(product => {
        // Создаем элементы
        const productDiv = document.createElement("div");
        const productImage = document.createElement("img");
        const productName = document.createElement("h2");
        const productPrice = document.createElement("p");

        // Устанавливаем содержимое элементов
        productImage.src = product.image;
        productImage.alt = product.name;
        productName.textContent = product.name;
        productPrice.textContent = `Цена: ${product.price} руб.`;

        // Добавляем элементы в productDiv
        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        
        // Добавляем productDiv в catalogDiv
        catalogDiv.appendChild(productDiv);
    });
}

// Вызываем функцию при загрузке страницы
window.onload = generateCatalog;