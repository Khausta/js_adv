'use strict';

const dices = ['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'];

function diceRandomizer(dice) {
    const diceType = dices.find(dicesEl => dicesEl === dice);
    if (!diceType) {
        return null
    }
    const max = Number(dice.replace('d', ''));
    return Math.floor(Math.random() * max + 1);
}

console.log(diceRandomizer('d4'));