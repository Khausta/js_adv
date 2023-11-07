'use strict';

const Hero = function(race, heroName, language) {
        this.race = race;
        this.heroName = heroName;
        this.language = language;
}

Hero.prototype.speak = function() {
    console.log(`(${this.language}): My name is ${this.heroName}`);
}

const Orc = function(race, heroName, language, weapon) {
    Hero.call(this, race, heroName, language);
    this.weapon = weapon;
}

Orc.prototype = Object.create(Hero.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.hit = function() {
    console.log(`${this.heroName} hurt his enemy`);
}

const orkus = new Orc('ork', 'Garfild', 'russian', 'hammer');

const Elf = function(race, heroName, language) {
    Hero.call(this, race, heroName, language);
    this.spells = [
        {
            type: 'reversal spell',
            phrase: 'reversal magic cadabra'
        }
    ];
};

Elf.prototype = Object.create(Hero.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.addSpell = function(type, phrase) {
    this.spells.push({type, phrase});
}

const elfina = new Elf('elf', 'Fiona', 'elvish');


elfina.addSpell('healing', 'healing cadabra');
elfina.speak();
orkus.hit();
orkus.speak();





