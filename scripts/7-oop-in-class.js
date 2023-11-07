'use strict';

class Weapon {
    #weapon;
    #demage;

    constructor(weaponName, demage) {
        this.#weapon = weaponName;
        this.#demage = demage;
    }

    get weaponName() {
        return this.#weapon;
    }

    get demage() {
        return this.#demage;
    }
}

class Hero {
    race;
    heroName;
    language;
    #health = 100;

    constructor(race, heroName, language) {
        this.race = race;
        this.heroName = heroName;
        this.language = language;
    }

    say() {
        console.assertlog(`${this.language}: My name is ${this.heroName}`);
    }

    receiveDemage(demage) {
        if(this.#health <= 0) {
            console.log(`${this.heroName} is dead`);
            return;
        }
        this.#health -= demage;
        console.log(this.#health);
    }
}

class Ork extends Hero {
    #weapon;

    constructor(race, heroName, language, weapon) {
        super(race, heroName, language);
        this.#weapon = weapon;
    }

    changeWeapon(weapon, demage) {
        this.#weapon = new Weapon(weapon, demage);
    }

    strike(enemy) {
        console.log(`${this.heroName} hurt ${enemy.heroName} with ${this.#weapon.weaponName}`);
        enemy.receiveDemage(this.#weapon.demage);
    }

    say() { 
        console.log(`${this.language}: I don't like you. I'll kill you. Goodbye`);
    }
}

class Elf extends Hero {

    #spells = [
        {
            type: 'reversal',
            phrase: 'reversal magic cadabra', 
            demage: 2
        }   
    ]

    constructor(race, heroName, language) {
        super(race, heroName, language);
    }

    addSpell(type, phrase) {
        this.#spells.push({type, phrase});
    }

    say() {
        console.log(`${this.language}: Hola! Me llamo ${this.heroName}. Como estas amigo?`);
    }

    magic(spellType, enemy) {
        const spellObj = this.#spells.find(type => type.type === spellType);
        console.log(spellObj.phrase);
        enemy.receiveDemage(spellObj.demage);
    }
}



// const orkus1 = new Ork('ork', 'Garfild', 'orks');
// orkus1.say();
// orkus1.changeWeapon('Hammer', 4);
// orkus1.changeWeapon('Sword', 3);

// console.log(orkus1);
// const elf1 = new Elf('elf', 'Fiona', 'elfish');
// console.log(elf1);
// elf1.say();
// elf1.addSpell('healing', 'healing cadabra');

// orkus1.strike(elf1);
// elf1.magic('reversal', orkus1);