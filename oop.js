'use strict';

/* Абстракция vs инкапсуляция
    делаем класс фильмов как на нетфликс
    у фильма есть:
    -название
    -режиссер
    -наш рейтинг
    -длительность
    -страна производства
    -актеры
    -информация о трейлере
    ...
*/

class Film {
    //делаем абстракцию над реальным объектом
    #name;
    #author;
    rating;
    #lenght;
    //инкапсуляция- заключение каких-либо свойств без доступа к ним снаружи

    //вносим факты о фильме котрое мы должны сконструировать
    constructor (name, author, length) {
        this.#name = name;
        this.#author = author;
        this.#lenght = length;
        //rating мы можем задать позже
    }

    //добавляем геттеры для чтения приватных свойств
    get name() {
        return this.#name;
    }
    get author() {
        return this.#author;
    }
    get length() {
        return this.#lenght;
    }
}

// new Film('Avatar', 'Kemeron', 240).name = 'lskd'; //будет ошибка 
const avatar = new Film('Avatar', 'Kemeron', 240);
console.log(avatar);


//Наследование  

const Book = function(title, author) {
    this.title = title;
    this.author = author;
};

Book.prototype.buy = function () {
    console.log('buy');
}

const AudioBook = function(title, author, lenMin) {
    // this.title = title; //но так мы нарушаем DRY
    // this.author = author; //но так мы нарушаем DRY
    //поэтому заменяем на 
    Book.call(this, title, author);
    this.lenMin = lenMin;
};

AudioBook.prototype = Object.create(Book.prototype);
AudioBook.prototype.constructor = AudioBook;

AudioBook.prototype.log = function() {
    console.log(`${this.title} - ${this.lenMin}`);
}

const book = new AudioBook('Lord of the rings', 'Tolkien', 20 * 60);
book.log(); 
book.buy(); //сработает только после связывания прототипов через Object.create()
console.log(book);
console.log(AudioBook.prototype.constructor);//показывает конструктор класса Book а не AudioBook
//поэтому дополнительно присваиваем

console.log(book instanceof AudioBook);
console.log(book instanceof Book);