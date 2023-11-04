'use strict'

// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// // el.append(element); добавляет внутрь el первым как child
// // el.prepend(element); добавляет внутрь el последним как child
// // el.after(element); добавляет после el
// // el.before(element); добавляет перед el

// const activitySection = document.querySelector('.activity');
// function generate() {
//     activitySection.remove(); //удаляет елемент на странице
// }

// пример1
// function generate(event) {
//     // console.log(`Button: ${event.target.getBoundingClientRect()}`); //через шаблонную строкку не работает
//     // console.log(event.target.getBoundingClientRect()); 

//     console.log(`X-offset: ${window.pageXOffset}`);
//     console.log(`Y-offset: ${window.pageYOffset}`);
//     console.log(`Client Width: ${document.documentElement.clientWidth}`);
//     console.log(`Client Height: ${document.documentElement.clientHeight}`);

//     const el = document.querySelector('.down');
//     const rect = el.getBoundingClientRect();
//      window.scrollTo({
//         left: window.scrollX + rect.left,
//         top: window.scrollY + rect.top, 
//         // left: window.pageXOffset + rect.left,
//         // top: window.pageYOffset + rect.top, 
//         behavior: 'smooth', // плавная прокрутка
//      })
// }


//пример 2

const button = document.querySelector('.button');

const eventHandler = function(event) {
    console.log('event1000');
}

// button.addEventListener('click', (event) => {
//     console.log('event1');
// })
// button.addEventListener('click', eventHandler);
button.addEventListener('mouseover', eventHandler);
button.addEventListener('dblclick', (event) => {
    console.log('event2');
    // button.removeEventListener('click', eventHandler)
    button.removeEventListener('mouseover', eventHandler)
}, );

//всплытие событий, hosting
const p = document.querySelector('.paragraph');
p.addEventListener('mouseover', () => {
    console.log('paragraph');
})

const wrapper = document.querySelector('.wrapper');
// const outer = document.querySelector('.outer');
// const inner = document.querySelector('.inner');
// const button3 = document.querySelector('.button3');

// button3.addEventListener('click', function (event) {
//     this.style.backgroundColor = 'purple';
//     console.log('BUTTON');
//     console.log(event.target);
//     console.log(event.currentTarget);
// })
// outer.addEventListener('click', function (event) {
//     this.style.backgroundColor = 'blue';
//     console.log('OUTER');
//     console.log(event.target);
//     console.log(event.currentTarget);
// })
// inner.addEventListener('click', function (event) {
//     this.style.backgroundColor = 'green';
//     console.log('INNER');
//     console.log(event.target);
//     console.log(event.currentTarget);
//     event.stopPropagation(); //редко использовать
// })
// wrapper.addEventListener('click', function (event) {
//     this.style.backgroundColor = 'gray';
//     console.log('WRAPPER');
//     console.log(event.target);
//     console.log(event.currentTarget);
// }, true);    // мы использовали event.stopPropogation() в иннер, а также использовали true



//делегирование событий -------------------

//пример 1
// for (let i = 0; i < 100; i++) {
//     const el = document.createElement('div');
//     el.setAttribute('data-id', i);
//     el.innerHTML = `Пользователь с id${i}`;

//     wrapper.append(el);
// }

// wrapper.addEventListener('click', event => {
//     // console.log(event.target);
//     const number = event.target.getAttribute('data-id');
//     console.log(`Удален пользователь с id ${number}`);
// })

//пример 2
console.log(wrapper);
const inner = document.querySelector('.inner');
console.log(inner);
const button100 = document.querySelector('.button100');
console.log(button100);
console.log(inner.childNodes);
console.log(inner.children);
console.log(inner.children[0]);
console.log([...inner.children][0]);
console.log(inner.parentNode);
console.log(inner.parentElement);
console.log(button100.closest('.wrapper')); //ближайший родитель по селектору
console.log(button100.previousElementSibling);
console.log(button100.previousSibling);
console.log(button100.nextElementSibling);
console.log(button100.nextSibling);


//жизненный цикл событий
//есть три вида событий
//1 когда распарсился документ 
document.addEventListener('DOMContentLoaded', function (e) {
    console.log('DOMContentLoaded');
    console.log(e);
})

//2 когда загрузилась вся страница
window.addEventListener('load', function (e) {
    console.log('load');
    console.log(e);
})

//3 перед уходом сос траницы, иногда с сообщением "вы не сохранили данные, точно хотите уйти со страницы?"
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
    //будет только стандартное сообщение, мы его не можем кастомизировать
})



