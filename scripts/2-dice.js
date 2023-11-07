'use strict';

const dices = [4, 6, 8, 10, 12, 16, 20];

function diceRandomizer(dice) {
    const max = Number(dice.replace(/\D/g, ''));
    const diceType = dices.find(dicesEl => dicesEl === max);
    if (!diceType) {
        return null
    }
    return Math.floor(Math.random() * max + 1);
}

console.log(diceRandomizer('d4'));