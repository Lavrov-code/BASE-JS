// 1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10 
// включительно, чтобы результат выглядел так: 
// 0 – это ноль 
// 1 – нечетное число 
// 2 – четное число 
// 3 – нечетное число 
// … 
// 10 – четное число
for (let i = 0; i < 3; i++){
    if (i == 0){
        console.log("Это ноль " + i)
        continue;
    }
    if (i  % 2 !== 0);{ // деление определяет четное или нечетное
        console.log ("нечетное число" + i);
        continue;
    }
    if (i % 2 === 0);{
        console.log ("четное число" + i);
        continue;
    }
}
// 2. Выведите в консоль значения, указанные рядом с комментариями: 
const post = { 
author: "John", //вывести этот текст 
postId: 23, 
comments: [ 
{ 
userId: 10, 
userName: "Alex", 
text: "lorem ipsum", 
rating: { 
likes: 10, 
dislikes: 2 //вывести это число 
    } 
}, 
{
    userId: 5, //вывести это число 
    userName: "Jane", 
    text: "lorem ipsum 2", //вывести этот текст 
    rating: { 
likes: 3, 
dislikes: 1 
            } 
        },
    ]   
}; 
console.log(post.author); // "John"
console.log(post.comments[0].rating.dislikes); // 2
console.log(post.comments[1].userId); // 5
console.log(post.comments[1].text); // вывод текста
 
 
// 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 
// 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :  
 
const products = [ 
            { 
                id: 3, 
                price: 200, 
            }, 
            { 
                id: 4, 
                price: 900, 
            }, 
            { 
                id: 1, 
                price: 1000, 
            }, 
        ]; 
products.forEach(product => { // через forEach переходим к products и подписываем к нему price
        product.price = product.price * 0.85; // Применяем скидку 15%
     });
console.log(products);
 
// 4.   Перед вами находится массив с продуктами в интернет-магазине. Вам нужно: 
// 1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT 
// 2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort 
// https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в 
// дополнительных видео в материалах урока. 
 
const product = [
    { 
        id: 3, 
        price: 127, 
        photos: [ 
            "1.jpg", 
            "2.jpg", 
        ] 
    }, 
    { 
        id: 5, 
        price: 499, 
        photos: [] 
    }, 
    { 
        id: 10, 
        price: 26, 
        photos: [ 
            "3.jpg" 
        ]
    }, 
    { 
        id: 8,
        price: 79,
        photos: [] // Добавил пустой массив, чтобы соответствовать формату
    },
]; 

// 1. Фильтрация товаров с фотографиями
const productWithPhotos = product.filter(product => product.photos && product.photos.length > 0);

// 2. Сортировка отфильтрованных товаров по цене
const sortproduct = productWithPhotos.sort((a, b) => a.price - b.price);

console.log(sortproduct);
