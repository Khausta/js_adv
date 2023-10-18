'use strict';

//отличие Function construction от классов:
// в классах все работает в режиме 'use strict' даже если не указать его, а в функции можно творить всякую дичь, если strict не указан
//классы не поднимаются вверх(не происхожит хостинг)
//классы как и функци могут быть переданы и возвращены из функций

//редкая запись
// const BookClass = class Book {};

class BookClass {
    isRead = false;

    constructor (title, author) {
        this.title = title;
        this.author = author;
    }

    read() {
        this.isRead = true;
    }
}


const lor = new BookClass('lor', 'Tolkien');
lor.read();
console.log(lor.__proto__);
console.log(lor instanceof BookClass);


//getters and setters

//обычный случай
const task = {
    title: 'Task',
    dueTo: new Date('2023/01/01'),

    isOverDue() {
        return this.dueTo < new Date()
    }
}
console.log(task.isOverDue());

const task1 = {
    title: 'Task',
    dueTo: new Date('2023/01/01'),

    get isOverDue() {  //но тогда обращайся как к свойству, т.е. не ставь скобки при вызове
        return this.dueTo < new Date()
    },

    set isOverDue(isOverDueTask) {
        if(!isOverDueTask) {
            this.dueTo = new Date();
        }
    }
}
console.log(task1.isOverDue);
task1.isOverDue = false;
console.log(task1);


class TaskClass {

    constructor (title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }

    get isOverDue() {  //но тогда обращайся как к свойству, т.е. не ставь скобки при вызове
        return this.dueTo < new Date()
    }

    set dueDate(date) {
        if (date < new Date()) {
            return;
        }
        this._dueDate = date; //елси использовать this.dueDate то булет рекурсия и ошибка.
        //поэтому это приватное свойство, синтаксически отличается нижним подчеркиванием
    }
}


const task2 = new TaskClass('Task2', new Date());
console.log(task2);


//статичные свойства
//например
Number.MAX_SAFE_INTEGER; //статичный метод
new Number(); //конструкция new используется для создания инстансов класса
Array.from([1, 2, 3]);
new Array();

class Test {
    hello() {  //этот метод мы можем использовать только окгда создадим инстанс через new
        console.log('Hello');
    }
}

const test = new Test();
test.hello();

//чтобы использовать метод hello добавляем static
class Test2 {
    static a = 1;
    static hello() {  //этот метод мы можем использовать только окгда создадим инстанс через new
        console.log('Hello');
    }
    //имеем возможность применить статичные блоки и логику
    //объявляя этот блок он будет сразу исполняться
    static {
        let b = 5;
        this.a = 5;
    }
    //статичными могут быть свойства, методы либо цедиковые блоки

}
Test2.hello(); //мы получили возможность без инициадизации использовать метод
console.log(Test2.a);
//как этто работате под капотом
const Test3 = function() {

};

Test3.hello = function() {
    console.log('Hello from Test3');
}

Test3.hello();


//приватные методы (используются для инкапсуляции, скрытия методов наших классов)
//такие методы обьявляются через #
class Car {
    #vin = 6;
    speed;//увидим это свойство

    constructor () {
        // delete this.#vin; //Private fields can not be deleted
        // this.#teat2 = 5; //Private field '#teat2' must be declared in an enclosing class
        
    }

    #changeVin() {
        console.log('changed');
    }

    test() {
        //проверка и только потом вызов приватного метода
        this.#changeVin();
    }

    static #field = 3;

    static {
        this.#field = 6;
    }
}

const car = new Car();
car.test();


/* Реализовать класс пользователя, со свойствами - логин - пароль Причем пароль при установке должен переворачиваться и в таком виде храниться. Пароль и логин после создания изменить нельзя. Так же у класса добавить методы
- Смены пароля (передаем старый и новый пароль)
- Сверки пароля */

//мой вариант
class UserClass {
    #login = null;
    #password = null;

    set login(login) {
        if (this.#login === null) {
            this.#login = login;
            console.log(this.#login);
            return;
        }
        console.log('Логин уже есть');
    }

    set password(password) {
        if (this.#password === null) {
            this.#password = String(Array.from(password).reverse()).replaceAll(',', '');
            console.log(this.#password);
            return;
        }

    }

    changePassword (oldPassword, newPassword) {
        if (this.checkOldPassword(oldPassword)) {
            const password = String(Array.from(newPassword).reverse()).replaceAll(',', '');
            this.#password = password;
            console.log(this.#password);
            return;
            
        }
        console.log('Старый пароль не верный');
    }

    checkOldPassword(password) {
        const oldPassword = String(Array.from(password).reverse()).replaceAll(',', '');
        // console.log(oldPassword);
        return oldPassword === this.#password 
    }

}

const userAnna = new UserClass();
userAnna.login = 'Anna'
userAnna.login = 'Gven';
userAnna.password = '12345';
// userAnna.checkOldPassword('12345');
userAnna.changePassword('12345', '001');

//вариант Антона

class User {
    #login;
    #_password;

    constructor (login, password) {
        this.#login = login;
        this.#password = password;
    }

    set #password(pass) {
        this.#_password = pass.split('').reverse().join('');
    }

    get #password() {
        return this.#_password.split('').reverse().join('');
    }

    get login() {
        return this.#login;
    }

    checkOldPassword(oldPass) {
        return this.#password === oldPass;
    }

    changePassword(oldPass, newPass) {
        if (!this.checkOldPassword(oldPass)) {
            return false;
        }
        this.#password = newPass;
        return true;
    }
}

const user1 = new User('lalka', '1234');
console.log(user1);
console.log(user1.login);
// user1.login = 'ofka'; //TypeError: Cannot set property login of #<User> which has only a getter
console.log(user1.checkOldPassword('123'));
console.log(user1.changePassword('123', '007'));
console.log(user1.changePassword('1234', '007'));


// Object.create()

const User3 = {
    init(login, password) {
        this.login = login;
        this.password = password;
    },

    log() {
        console.log('Log');
    }
}

const user3_0 = Object.create(User3);
console.log(user3_0);
console.log(user3_0.__proto__ === User3);
// user3_0.login = 'alla'; //вместо этого можно добавть инициализирующий метод, например init()
// user3_0.password = '0033';
user3_0.init('alal', '00003333');
user3_0.log();

//можем идти дальше и наследовать
const admin = Object.create(user3_0);
console.log(admin);
admin.log();
console.log(admin.login);

