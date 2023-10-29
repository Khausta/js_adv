'use strict';

async function getProduct(id) {
    const response = await fetch('https://dummyjson.com/products/' + id);
    return response;
}

async function getProductError(id) {
    const response = await fetch('https://dummyjson.com/productsS/' + id);
    return response;
}

async function race(arr) {
    try{
        const res = await Promise.race(arr);
        if(!res.ok) {
            throw new Error(res.status);
        } 
        const data  = await res.json();
        console.log(data);
    } catch (e) {
        console.error(e);
    }
}

race([getProduct(2), getProduct(4), getProduct(10)]);



