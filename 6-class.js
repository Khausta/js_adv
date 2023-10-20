'use strict';

class Car {
    #brand;
    #model;
    #mileage;

    constructor (brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = mileage;
    }

    get mileage() {
        return this.#mileage;
    }

    set changeMileage(newMileage) {
        if (newMileage < this.#mileage) {
            return;
        }
        this.#mileage = newMileage;
    }

    info() {
        console.log(`Марка: ${this.#brand}, \nмодель: ${this.#model}, \nпробег: ${this.#mileage}`);
    }

}

const mazda = new Car('Mazda', 'CX100500', '100000');
mazda.changeMileage = 150000;
mazda.changeMileage = 120000;
mazda.changeMileage = 160000;
console.log(mazda);
const audi = new Car('Audi', '777', 30000);
console.log(audi);
audi.changeMileage = 20;
audi.changeMileage = 50000;
audi.info();
mazda.info();