'use strict';

console.log(1);

setTimeout(() => {
    console.log(2)
}, 0);

Promise.resolve(3).then((res) => {
    console.log(res);
    // for (let i = 0; i < 100000000000; i++) {
    //       // не выполнитя setTimeout
    // } 
});

console.log(4);

//output 1, 4, 3, 2

// for (let i = 0; i < 100000000000000; i++) {

// } //блокирует выполнение коллбеков и микротасков

const prom = new Promise((resolve, reject) => {
    if(new Date() < new Date('01/01/2024')) {
        // reject('Error'); //Uncaught (in promise) Error если не обработать ошибку
    //нужно создавать ошибку
    //правильная работа с reject
        reject(new Error('Error!')); //Error: Error!
    }
    resolve('succes');
});

prom
    .then(data => console.log(data))
    .catch(error => console.log(error));


function timeout(sec) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, sec * 1000);
    })
}

timeout(1)
    .then(() => {
        console.log('1_1_1');
        return timeout(1);
    })
    .then(() => {
        console.log('1_1_1');
        return timeout(1);
    })
    .then(() => {
        console.log('1_1_1');
        return timeout(1);
    })



// статические методы промисов
Promise.resolve('Instant').then(data => console.log(data));
const prom1 = new Promise(resolve => {
    console.log('Constructor');
    setTimeout(() => {
        resolve('Timer')
    }, 1000)
});

prom1.then(data => console.log(data));

Promise.reject(new Error('Error4ik')).catch(err => console.log(err));
 Promise.resolve('Instant').then(data => console.log(data));


 //output --- Constuctor, Instant, Error4ik, Instant,  Timer

 //task сделать ф-ю, которая выполняет внутри XMLHttpRequest
 function myFetch(url, method = 'GET') {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open(method, url);
        request.send();
        request.addEventListener('load', function() {
            console.log(this.status);
            if(this.status > 400) {
                reject(new Error(this.status));
            }
            resolve(this.responseText);
        });

        request.addEventListener('error', function() {
            reject(new Error(this.status));
        });

        request.addEventListener('timeout', function() {
            reject(new Error('timeout'));
        })
    })
 }

 myFetch('https://dummyjson.com/productss')
    .then(data => console.log(data))
    .catch(err => console.log(err));
    