'use strict';

async function getProduct(id) {
    const response = await fetch('https://dummyjson.com/products/' + id);
    return response.json();
}

async function getProductError(id) {
    const response = await fetch('https://dummyjson.com/productsS/' + id);
    return response.json();
}

async function race(arr) {
    try {
        return Promise.race(arr);
    } catch (e) {
        console.error(e);
    }
}

// race([getProductError(2), getProductError(4), getProduct(10)]);
console.log(race([getProductError(2), getProductError(4), getProduct(10)]))



