// 1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных 
// видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name 
// и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод 
// make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод 
// make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный 
// объект-прототип (как объект transport в уроке). 

// Конструктор Product в стиле ES5
function Product(name, price) { // делаю функцию и выдаю имя и цену
    this.name = name;
    this.price = price;
}

// Метод для скидки
Product.prototype.make25PercentDiscount = function() { // подключаю функцию product и уменьшаю цену в объекте
    this.price -= this.price * 0.25;
};

// Пример использования
var apple = new Product("Apple", 100);
console.log(apple.price); // 100
apple.make25PercentDiscount();
console.log(apple.price); // 75

// Конструктор Product в стиле ES6
class Product { // делаю класс
    constructor(name, price) { // добавляю конструктор с именем и ценой
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price -= this.price * 0.25;
    }
}

// Пример использования
const banana = new Product("Banana", 200);
console.log(banana.price); // 200
banana.make25PercentDiscount();
console.log(banana.price); // 150

// 1.2 (это обязательное задание)  Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных 
// видео -> 3 примеры наследования -> механика наследования),  
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты 
// типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта. 
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с 
// помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться 
// свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post. 
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству 
// highlighted значение true. 

//ES5
// Конструктор Post
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

// Метод edit для Post
Post.prototype.edit = function(newText) { //edit который будет принимать текст и записывать его в свойство text объекта.
    this.text = newText;
};

// Конструктор AttachedPost
function AttachedPost(author, text, date) { // AttachedPost это термин, который может использоваться в контексте обозначая публикацию которая добавлена как приложение дополнение к основному содержимому
    // Вызов конструктора Post для инициализации свойств
    Post.call(this, author, text, date);
    this.highlighted = false;
}

// Унаследование методов от Post
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

// Метод для выделения текста
AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
};

// Пример использования
var post = new Post("Author1", "Some text", "2023-10-01");
console.log(post);
post.edit("Edited text");
console.log(post);

var attachedPost = new AttachedPost("Author2", "Attached text", "2023-10-02");
console.log(attachedPost);
attachedPost.makeTextHighlighted();
console.log(attachedPost);

//ES6
// Класс Post
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    
    edit(newText) {
        this.text = newText;
    }
}

// Класс AttachedPost, наследующий от Post
class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date); // Вызов конструктора родительского класса
        this.highlighted = false;
    }
    
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

// Пример использования
const post = new Post("Author1", "Some text", "2023-10-01");
console.log(post);
post.edit("Edited text");
console.log(post);

const attachedPost = new AttachedPost("Author2", "Attached text", "2023-10-02");
console.log(attachedPost);
attachedPost.makeTextHighlighted();
console.log(attachedPost);

