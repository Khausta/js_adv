'use strict'

console.log(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// el.append(element); добавляет внутрь el первым как child
// el.prepend(element); добавляет внутрь el последним как child
// el.after(element); добавляет после el
// el.before(element); добавляет перед el

const activitySection = document.querySelector('.activity');
function generate() {
    activitySection.remove(); //удаляет елемент на странице
}

