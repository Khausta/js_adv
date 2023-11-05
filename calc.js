'use strict';

function add(f, s) {
    return f + s;
}

function substruct(f, s) {
    return f - s;
}
//в commonJS объявляем экспорт

console.log('test');
module.exports = { add, substruct };
console.log('test after export');

//вывод 
// test
// test after export
// 4
// -2



