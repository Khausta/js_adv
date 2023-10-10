'use strict';

console.log(Number.parseInt('10'));
//у parsInt() есть второйо параметр
console.log(Number.parseInt('10', 10));//10
console.log(Number.parseInt('10', 2));//2
console.log(Number.parseInt('11 sec', 2));//3
console.log(Number.parseInt('sec 11', 2));//NaN

console.log(Number.parseFloat('11.5 sec', 2));//11.5
console.log(Number.parseFloat('sec 11.5', 2));//NaN
console.log(Number.isNaN(Number.parseFloat('sec 11.5', 2)));//true

console.log(Number.isFinite(10 / 0)); //false
console.log(Number.isFinite(10)); //true

console.log(Number.isInteger(10)); //true
console.log(Number.isInteger(10.5)); //false


console.log(Math.sqrt(36));//6
console.log(Math.cbrt(27));//3
console.log(36 ** (1/2));//6
console.log(16 ** (1/4));//2
//sighn - получаем только симфол минус или плюс от числа
console.log(Math.sign(-100));//-1
console.log(Math.sign(10));//1
console.log(Math.abs(-10));//10
console.log(Math.abs(10));//10

const arr = [2, 3, 9, 100, 12, 45];
console.log(Math.max(arr));//NaN тк передан массив а не число
console.log(Math.max(...arr));// 100 // через spred оператор преврящается в последовательность чисел 

console.log(Math.round(1.49999));//1
console.log(Math.round(1.5));//2
console.log(Math.ceil(1.1));//2 --- потолок
console.log(Math.floor(1.9));//1 --- пол
console.log(Math.trunc(1.9));//1 --- просто обрезает до интеджера
console.log((1.99899).toFixed(1));// 2.0 - это строка будет!
console.log(Number((1.99899).toFixed(1)));// 2 
console.log(Math.random(1, 5));
console.log(Math.random());


//task - create a func which receives max and min numbers and output random number 
function randomizer(min, max) {
    const set = max - min + 1;
    const randomNum = min + (set * Math.random());
    return Math.floor(randomNum);
}

console.log(randomizer(2, 6));

//разделитель чисел
const bigNum = 350_050_300;
const bigNum2 = 350050300;
console.log(bigNum === bigNum2); //true

// bigInt
console.log(10n); //10n
console.log(10n == 10); //true, тк переводит в bigint вторую десятку
// console.log(10n + 10); // error!!!
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991 максимальное число с которым безопасно работать
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991 минимальное число с которым безопасно работать
console.log(2 ** 53 - 1); // 9007199254740991

//Интернационализация чисел

const options1 = {
    style: 'currency',
    currency: 'RUB',
    // useGroupping: 'false' //для 
}
const options2 = {
    style: 'currency',
    currency: 'USD'
}
const options3 = {
    style: 'decimal',
}
const options4 = {
    style: 'percent',
}
//для градусов
const options5 = {
    style: 'unit',
    unit: 'celsius' 
}

console.log(new Intl.NumberFormat('ru-RU', options1).format(23000)); //23 000,00 ₽
console.log(new Intl.NumberFormat('ru-RU', options2).format(23000)); //23 000,00 $
console.log(new Intl.NumberFormat('en-US', options2).format(23000)); // $23 000,00 
// console.log(new Intl.NumberFormat('ar-SY', options2).format(23000)); // $23 000,00 
console.log(new Intl.NumberFormat('ru-RU', options3).format(100000)); //100 000
console.log(new Intl.NumberFormat('ru-RU', options4).format(0.1)); //10 %
console.log(new Intl.NumberFormat('ru-RU', options5).format(25)); //25 °C

//task - конвертер валют
function converter(sum, initialCurrency, convertCurrency) {
    const allCurrencies = [
        {name: 'USD', multiplicator: 1},
        {name: 'RUB', multiplicator: 1/60},
        {name: 'EUR', multiplicator: 1.1}
    ];

    const initial = allCurrencies.find(c => c.name === initialCurrency);
    if(!initial) {
        return null
    }
    const convert = allCurrencies.find(c => c.name === convertCurrency);
    if(!convert) {
        return null
    }
    return new Intl
        .NumberFormat('ru-RU', {style: 'currency', currency: convert.name})
        .format(sum * initial.multiplicator / convert.multiplicator);
}

console.log(converter(100, 'RUB', 'USD'));
console.log(converter(100, 'RUB', 'EUR'));
console.log(converter(100, 'USD', 'RUB'));
console.log(converter(100, 'EUR', 'RUB'));
console.log(converter(100, 'TG', 'RUB'));
console.log(converter(100, 'RUB', 'UB'));













