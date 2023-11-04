'use strict'

//мой вариант
const section = document.querySelector('.dom-search');

for (let i = 0; i < 10; i++) {
    const p = document.createElement('p');
    p.style.color = 'white';
    p.innerText = `Параграф номер ${i + 1}`;
    section.append(p);
}

const eventHandler = function() {
    const elements = [...section.children];
    elements.forEach(el => {
        el.classList.remove('finded');
        if(el.innerHTML.indexOf(this.value) != -1 && this.value && this.value !== ' ') {
            el.classList.add('finded');
        }
    })
}

function createInput () {
    const input = document.createElement('input');
    input.setAttribute('value', '');
    input.setAttribute('placeholder', 'что искать?');
    input.setAttribute('type', 'text');
    section.append(input);
    input.addEventListener('keyup', eventHandler)
}

createInput();

//вариант Антона
const wrapper = document.querySelector('.wrapper-search');
for (let i = 0; i < 100; i++) {
    const el = document.createElement('div');
    el.innerHTML = i;
    wrapper.append(el);
}

function search(event) {
    const inputValue = event.target.value;
    console.log(inputValue);
    for (const el of [...wrapper.children]) {
        if (el.innerHTML.includes(inputValue)) {
            el.classList.add('finded');
            continue;
        } else {
            el.classList.remove('finded');
        }
        
    }
}














 


