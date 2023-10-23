'use strict';

async function getProducts() {
    const responseProducts = await fetch('https://dummyjson.com/products');
    const { products } = await responseProducts.json();
    console.log(products);

    const responseProduct = await fetch('https://dummyjson.com/products/' + products[0].id);
    const product = await responseProduct.json();
    console.log(product);
}

getProducts();
console.log('end');


//обработка ошибок

async function getProducts2() {
    try {
        const responseProducts = await fetch('https://dummyjson.com/productsS');
        if(!responseProducts.ok) {
            throw new Error(responseProducts.status);
        }
        const { products } = await responseProducts.json();
        console.log(products);
        const responseProduct = await fetch('https://dummyjson.com/products/' + products[1].id);
        const product = await responseProduct.json();
        console.log(product);
    } catch (error) {
        console.error(error);
    } finally {
        console.log('Final');
    }
}

getProducts2();

setTimeout(() => {
    console.log('end2')
}, 5000)


try {
    const a = 4;
    a = 5;
} catch (e) {
    console.error(e);
}

try {
    JSON.parse('{sd}');
} catch (e) {
    console.error(e);
}

// для catch не всегда нужен параметр
try {
    JSON.parse('{sd}');
} catch {
    console.error('ошибкаааа');
}