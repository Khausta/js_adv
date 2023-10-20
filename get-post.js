'use strict';

//XMLHttpRequest

// const request = new XMLHttpRequest();
// request.open('GET', 'https://dummyjson.com/products/1');
// request.send();

// request.addEventListener('load', function() {
//     // console.log(this.responseText);
//     // console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// })

// console.log('end');

function req(id) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/products/' + id);
    request.send();
    request.addEventListener('load', function() {
        const result = JSON.parse(this.responseText);
        // console.log(result);
    })
}

req(1);
req('');
req(2);
req(3);
console.log('end');

// Task получить среднюю цену товаров 
const request2 = new XMLHttpRequest();
request2.open('GET', 'https://dummyjson.com/products/');
request2.send();
request2.addEventListener('load', function() {
    // const result = JSON.parse(this.responseText);
    // console.log(result.products);
    // const total = result.products.reduce((acc, item) => acc + item.price, 0);
    // console.log(total / result.products.length) ;
    const {products} = JSON.parse(this.responseText);
    // console.log(products);
    const sum = products.reduce((acc, product) => acc += product.price, 0);
    console.log( sum / products.length);
})



// приер callback hell
const request3 = new XMLHttpRequest();
request3.open('GET', 'https://dummyjson.com/products');
request3.send();

request3.addEventListener('load', function() {
    const {products} = JSON.parse(this.responseText);
    console.log(products);

    const request3 = new XMLHttpRequest();
    request3.open('GET', 'https://dummyjson.com/products/' + products[0].id)
    request3.send();
    request3.addEventListener('load', function() {
        const res = JSON.parse(this.responseText);
        console.log(res);

        const request3 = new XMLHttpRequest();
        request3.open('GET', 'https://dummyjson.com/products/' + products[1].id)
        request3.send();
        request3.addEventListener('load', function() {
            const res = JSON.parse(this.responseText);
            console.log(res);
        })
    })
})



