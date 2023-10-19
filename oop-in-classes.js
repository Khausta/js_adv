'use strict';

//наследование ES6
class Book {
    constructor(title, author) {
        this.author = author;
        this.title = title;
    }

    buy() {
        console.log('Buy');
    }

    info() {
        console.log(`${this.title} - ${this.author}`)
    }
}

class AudioBook extends Book {
    constructor(title, author, lenMin) {
        super(title, author);
        this.lenMin = lenMin;
    }

    log() {
        console.log(`${this.title} - ${this.lenMin}`);
    }
}

const book = new AudioBook('Lord of the rings', 'Tolkien', 60 * 20);
book.log();
book.buy();

// Override методов если хотим изменить какой-то метод
 class EBook extends Book {
    constructor(title, author, pages) {
        super(title, author);
        this.pages = pages;
    }

    info() {
        console.log(`${this.title} - ${this.author} - ${this.pages}`)
    }
 }

 const ebook = new EBook('Lord of the rings', 'Tolkien', 100);
 console.log(ebook);
 ebook.info();

 //task
 class Enemy {
    health;
    constructor(health) {
        this.health = health;
    }

    receiveDemage(demage) {
        if(this.health <= 0) {
            console.log('Враг побежден');
            return;
        }
        this.health -= demage;
        console.log(this.health);
    }
 }

 class Sword {
    #demage;
    constructor (demage) {
        this.#demage = demage;
    }

    strike(enemy) {
        enemy.receiveDemage(this.#demage);
    }
 }

 class Ork extends Enemy {
    constructor(health) {
        super(health);
    }

    receiveDemage(demage) {
        if(this.health <= 0) {
            console.log('Враг побежден');
            return
        }
        if (Math.random() > 0.5) {
            this.health -= demage;
        }
        console.log(this.health);
    }
 }

 const enemy = new Enemy(10);
 const ork = new Ork(10);
 const sword = new Sword(2);
 sword.strike(enemy);
 sword.strike(enemy);
 sword.strike(enemy);
 sword.strike(enemy);
 sword.strike(enemy);
 sword.strike(enemy);
 sword.strike(enemy);
 sword.strike(enemy);
 sword.strike(enemy);
 sword.strike(enemy);
 sword.strike(ork);
 sword.strike(ork);
 sword.strike(ork);
 sword.strike(ork);
 sword.strike(ork);
 sword.strike(ork);
 sword.strike(ork);
 sword.strike(ork);

 /* Полиморфизм
    выды:
    1. Ad-hock полиморфизм
    -вщзможность по разному выполнять ф-ю в зависимости от разных типов данных
    '2' + '4' --- строки сконтенируются
    3 + 7 --- числа сложатся

    2.Параметрический ролиморфизм
    -когда мы можем выполнять ожну и ту же ф-ю но с разным типом аргументов
    console.log(1);
    console.log('2');
    console.log({a: 2});

    3.Полиморфизм подтипов <--- ООП

 */


    class Troll extends Enemy {

    }

    const troll = new Troll(10);

    sword.strike(troll);
    sword.strike(troll);
    sword.strike(troll);
    sword.strike(troll);
    sword.strike(troll);
    sword.strike(troll);
    sword.strike(troll);


// Паттерн Buildier и chaining

const arr = [1,2,3];
arr
    .map(a => a * 2)
    .filter(a => a > 0)
    .find(a => a < 100);

class Wallet {
    balance = 0;

    add(sum) {
        this.balance += sum;
        return this;
    }

    remove(sum) {
        this.balance -= sum;
        return this;
    }
}

const wallet = new Wallet();
const res = wallet
    .add(100)
    .remove(20)
    .remove(10); //это и называется паттерн билдер, то есть чеининг
console.log(res);

class Builder {
    house = {};

    addRoof() {
        this.house.roof = 'Roof';
        return this;
    }

    addFloor() {
        this.house.floor = 'Floor';
        return this;
    }

    execute() {
        return this.house;
    }

}

const res2 = new Builder().addRoof().addFloor().execute();
console.log(res2);