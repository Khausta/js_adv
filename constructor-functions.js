'use strict';

const User = function(email, password) {
    this.email = email;
    this.password = password + '%%%';
};

const user1 = new User('a@a.ru', '123');
console.log(user1);
const user2 = new User('alalal@a.ru', '123655');
console.log(user2);
console.log(user1 instanceof User);
console.log(user2 instanceof User);

// 1. Создается пустой обьект
// 2. Создается User функция
// 3. this = пустому объетку
// 4. Обхект связывается с prototype
// 5. Возвращается объект

const Book = function(title, author) {
    this.title = title;
    this.author = author;
    this.isRead = false;
    // this.read = function() {    //так не нужно использовать методы чтобы сэкономитьна производительности
    //     this.isRead = true;
    // }
}

Book.prototype.read = function() {
    this.isRead = true;
}

const lordOfTheRing = new Book('Lord of the rings', 'Tolkien');
lordOfTheRing.read();
console.log(lordOfTheRing.__proto__);
console.log(lordOfTheRing.__proto__ === Book.prototype);
console.log(Book.prototype.isPrototypeOf(lordOfTheRing));
console.log(Book.prototype.isPrototypeOf(Book));
Book.prototype.cover = 'Paper';
//чтобы проверить свойство у прототипа объекта или у самого объекта?
console.log(lordOfTheRing.hasOwnProperty('cover'));
console.log(lordOfTheRing.hasOwnProperty('author'));

//task 
//create the constructor function for cart
//create functions to add item, increase or decrease amount of items

const product = {id: 1, name: 'Bread', count: 1};

const Cart = function() {
    this.goods = [];
}

Cart.prototype.addGood = function(obj) {
    if(this.goods.find(el => el.id === obj.id)) {
        return;
    }
    this.goods.push(obj);
}
Cart.prototype.ascCount = function(id) {
    this.goods.map(good => {
        if(good.id === id) {
            good.count++;
            return good;
        }
        return good;
    })
}
// Cart.prototype.descCount = function(id) {
//    this.goods = this.goods
//     .map(good => {
//         if (good.id === id) {
//             good.count--;
//             return good;
//         }
//         return good;
//     })
//     .filter(good => good.count > 0);
// }

const cart1 = new Cart();
cart1.addGood(product);
cart1.ascCount(1);
// cart1.descCount(1);
// cart1.descCount(1);
console.log(cart1);

const cart2 = new Cart();
cart2.addGood(product);
console.log(cart2);

for (let [key, value] in Object.entries(Cart.prototype)) {
    console.log(key, value)
} //работает так как js проверяет свойство Cart.prototipe, и там Object и есть итерация




