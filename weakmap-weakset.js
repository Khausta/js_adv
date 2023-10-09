console.log('weakmap');
let a = {
    a:1
};
let b = {
    b: 2,
}
const weakmap = new WeakMap();
// weakmap.set(1, 'test'); //error тк ключом может быть только obj
weakmap.set(a, 'testA');
console.log(weakmap);
console.log(weakmap.get(a));
console.log(weakmap.has(a));//true
console.log(weakmap.has(b));//false
weakmap.set(b, 'testB');
console.log(weakmap.has(b));//true
console.log(weakmap);
b = null;
console.log(a);
setTimeout(() => {
    console.log(weakmap);
}, 1000);
console.log(weakmap.get(b));

//использается для создания кэша
let cache = new WeakMap();

function getValue(obj) {
    if(!cache.has(obj)) {
        const res = 1; //подразумеваются какие-то очень сложные рассчеты например
        cache.set(obj, res);
    }
    return cache.get(obj);
}

const res = getValue(a);
console.log(res);
const res2 = getValue(a);
console.log(res2);

//weakset
// const weakset = new WeakSet([1,2,3]);//error

let c = {
    c:3
};
const d = {
    d:4
}

const weakset = new WeakSet([c, d]);
c = null;
setTimeout(() => {
    console.log(weakset);
}, 1000);



const flights = ['Russia', 'USA', 'Brazil', 'USA', 'Russia'];
const flightsSet = new Set(flights);
flightsSet.forEach(el => console.log(el));