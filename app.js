'use strict';
/*
    устанавливаем в теринале сборщик rollup
    npm i -g rollup

    на сайте npm возьми команду для терминала
    rollup main.js --format iife --name "myBundle" --file bundle.js
    (в моем случае) rollup app.js --format iife --name "myBundle" --file bundle.js

    для компиляции кода для более старых версий браузера используй babel
*/

import { add, substruct } from './calc.js';  

console.log(add(1, 3));
console.log(substruct(1,3));

const a = 2;
console.log(a);













