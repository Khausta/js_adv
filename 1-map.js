"use strict";

const arr = [
    {
        id: 1,
        name: 'Вася'
    },
    {
        id: 2,
        name: 'Петя'
    },
    {
        id: 1,
        name: 'Вася'
    },
    {
        id: 2,
        name: 'Михаил'
    },
];

function unique(array) {
    return Array.from(
        new Set(array.map(obj => obj.id)), 
        function(obj) {
           return array.find(el => el.id === obj)
        }
    )
}

console.log(unique(arr));



