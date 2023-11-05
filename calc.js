// 'use strict' можно убрать


export function add(f, s) {
    return f + s;
}

export function substruct(f, s) {
    return f - s;
}

console.log('ddd');

setTimeout(() => {
    add = function(f, s) {
        return f * s;
    }
}, 1500);

async function getProducts() {
    const res = await fetch('https://dummyjson.com/products');
    return res.json();
    // return await res.json(); await не добавляй, можно добавить в случае если хочешь отлавливать ошибки
} 

export const res = await getProducts();

//в commonJS объявляем экспорт

// console.log('test');
// module.exports = { add, substruct };
// console.log('test after export');

//вывод 
// test
// test after export
// 4
// -2



