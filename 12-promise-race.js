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
        const res = await Promise.race(arr);
        console.log(await res); 
    } catch (e) {
        console.error(e);
    }
}

race([getProduct(2), getProductError(4), getProduct(10)])



