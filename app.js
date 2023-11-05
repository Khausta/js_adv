'use strict';
/*
    IIFE 
    модульный файл js подключается перед главным файлом
    создается глобальный обхект APP и 
    в него записываем функции (пример в calc.js);
*/
(function (){
    const a = 1;
    console.log(APP.calc.add(1, 3));
    console.log(APP.calc.substruct(1,3));
})()


