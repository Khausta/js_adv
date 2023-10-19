'use strict';

/*   Принципы SOLID
    больше относится к дизайну архитектура приложения

    S: Single Responsibility Principle (Принцип единственной ответственности).
    -класс должен выполнять одну конкретную вещь
    O: Open-Closed Principle (Принцип открытости-закрытости).
    -наш класс должен быть открыт к дополнению, но закрыт к модификации
    L: Liskov Substitution Principle (Принцип подстановки Барбары Лисков).
    - если мы экстендим общий класс частным классом, и им заменим что-то в приложении, то приложение не должно сломаться 
    I: Interface Segregation Principle (Принцип разделения интерфейса).
    -разделяй на множество небольших интерфейсов (образно, тк в js нет интерфейсов)
    D: Dependency Inversion Principle (Принцип инверсии зависимостей).
    -классы от которых наследуются, не должны зависеть от наследуемых классов.
    то есть мы дожны зависеть от абстракции, а не от конткретных реализаций
*/

//Принцип единой ответсвенности
class Character {
    #inventory = [];
    #health = 10;

    pick(item) {
        this.#inventory.push(item);
    }

    receiveDemage(demage) {
        this.#health -= demage;
    }

    // saveCharacter() {  нарушает 'S'
    //     localStorage.setItem('char', this);
    // }

    // loadCharacter() {
    //     // что-то...
    // }
}

class DB {
    save(item) {  
        localStorage.setItem('char', this);
    }

    loadCharacter() {
        // что-то...
    }
}


// Принцип открытости-закрытости
class Treasure {
    value = 0;
}

class Coin extends Treasure{
    value = 1;
}

class Crystal extends Treasure {
    value = 10;
}

class Brilliant extends Treasure {
    value = 20;
}

//плохая реализация
class Inventory {
    #score;
    pick(treasure) {
        // if (treasure instanceof Coin) {
        //     this.#score += 1;
        // }
        // if (treasure instanceof Crystal) {
        //     this.#score += 10;
        // }  // !!! НО после добавления новых сокровищ, придется переделать
        this.#score += treasure.value;
    }
}


// Принцип подстановки Барбары Лисков

class User {
    role = 'user';

    getRole() {
        return this.role;
    }
}

class Admin extends User {
    role = ['user', 'admin'];

    getRole() {
        return this.role.join(', ');
    }
}

function logRole(user) {
    console.log('Role: ' + user.getRole().toUpperCase());
}

logRole(new User); //Role: USER
// logRole(new Admin); //user.getRole(...).toUpperCase is not a function
//здесь мы нарушили принцип Барбары Лисков, тк разные типы данных передали

logRole(new Admin);

//  Принцип разделения интерфейса

//плохой пример
class Weapon {
    cost;
    // strike() {}
                    //минимизируй свойства общего класса
    // shoot() {}

    //можно добавить методы чистки оружия, апгрейда орижия
}

class Rifle extends Weapon {
    //в таком случае метод strike (или другой метод в зависимости от класса) нужно будет имплементировать, даже если они  не нужны
    // strike() {  <--- уберем этот метод
    //     //неэффективно
    // }

    shoot() {
        // эффективно
    }
}

class Sword extends Weapon {
    strike() {
        // эффективно 
    }
}


//Принцип инверсии зависимостей

class DB1 {
    save(items) {
        console.log( `Saved ${items}`);
    }
}

class MongoDB extends DB1 {
    save(items) {
        console.log( `Saved to MongoDB ${items}`);
    }
}

class ToDoList {
    items = [1, 2, 3];
    // db = new DB();  //теперь  ToDOList зависит от класса DB. Необходимо перепсиать
    db;
    constructor (db) {
        this.db = db;
    }
    saveToDB() {  
        this.db.save(this.items);
    }
}

const list1 = new ToDoList(new DB1());
list1.saveToDB();

const list2 = new ToDoList(new MongoDB());
list2.saveToDB();