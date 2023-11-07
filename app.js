'user script';

const buttons = document.querySelector('.buttons');

for (let i = 0; i < 5; i++) {
    const button = document.createElement('button');
    button.classList.add('button-style');
    button.innerHTML = 'Нажми меня'
    buttons.append(button);
}

const counter = document.createElement('div');
counter.classList.add('counter');
buttons.after(counter);

let counterNum = 0;

buttons.addEventListener('click', (e) => {
    [...buttons.children].map(el => {
        el.innerHTML = 'Нажми меня';
    })
    e.target.innerHTML = 'Кнопка нажата';
    counter.innerHTML = `${counterNum++}`;
});