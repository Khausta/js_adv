'use strict';

console.log('sets');
// Set
const flights = ['Russia', 'USA', 'Brazil', 'USA', 'Russia'];
const flightsSet = new Set(flights);
console.log(flightsSet);
console.log(flightsSet.size);
console.log(flightsSet.has('USA'));
flightsSet.add('France');
flightsSet.delete('France');
console.log(flightsSet.has('France'));
for (const flight of flightsSet) {
    console.log(flight);
}
//превращение сета в массив
console.log([...flightsSet]);

// Map
const weatherMap = new Map();
weatherMap.set('London', '4');
weatherMap.set('Moscow', '10');
console.log(weatherMap.set('Paris', '6')); // возворащает обновленный массив
//метод set возврщает обновленный массив, значит можем использовать цепочку 
weatherMap
    .set('Rio', '35')
    .set('Colombo', '40');
console.log(weatherMap.get('Moscow'));
console.log(weatherMap);

const weatherMap2 = new Map([
    ['Oslo', 13],
    ['Madris', 4]
]);
console.log(weatherMap2);

const weatherObj = {
    dubai: 35,
    seul: 25,
    pekin: 20
};

console.log(Object.entries(weatherObj));
const weatherMap3 = new Map(Object.entries(weatherObj));
console.log(weatherMap3);

//итерация Map
for (const entry of weatherMap3) {
    console.log(entry)
}
for (const [key, value] of weatherMap3) {
    console.log(key);
    console.log(value);
}
//чтобы из Map сделать массив используй спред
const weather3array = [...weatherMap3];
console.log(weather3array);
console.log(weatherMap3.keys()); //MapIterator {'dubai', 'seul', 'pekin'}
console.log([...weatherMap3.keys()]); // чтобы получить массив клчюй
console.log(weatherMap3.values()); //MapIterator {35, 25, 20}
console.log([...weatherMap3.values()]); 

//task - поменять местаи ключи и значения
let weatherMap5 = new Map([
    ['Oslo', 13],
    ['Madrid', 4],
]);
//не сработал мой цыкл
// for (let [key, val] of weatherMap5) {
//     console.log(key, val);
//     [key, val] = [val, key];
//     console.log(key, val);
// }
// console.log(weatherMap5);
//сначала преобразем в массив, затем пребор map и метод reverce
weatherMap5 = new Map([...weatherMap5].map(el => el.reverse()));
console.log(weatherMap5);


