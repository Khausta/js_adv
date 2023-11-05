'use strict';
/*
    IIFE 
    модульный файл js подключается перед главным файлом
    создается глобальный обхект APP и 
    в него записываем функции (пример в calc.js);
*/
// (function (){
//     const a = 1;
//     console.log(APP.calc.add(1, 3));
//     console.log(APP.calc.substruct(1,3));
// })()

/*
    CommonJS
    -не будет работать в браузере без nodejs 
    так как нужно сначала собрать bundle
    -открываем терминал
    -запуск выполнения кода node app.js
*/

// const { add, substruct} = require('./calc.js');
// console.log(add(1, 3));
// console.log(substruct(1,3));


/*
    ES Modules

    -чтобы импортировать файл нужно ему указать 
    атрибут type="module" при подключении
    в index.js (вместо defer or async);

*/

import { add, substruct, res } from './calc.js';  

// console.log(add(1, 3));
console.log(substruct(1,3));

// async function getProducts() {
//     const res = await fetch('https://dummyjson.com/products');
//     return res.json();
// } 

// console.log(await getProducts());
console.log(res);
console.log(1);












