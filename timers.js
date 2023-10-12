'use strict';

/* Таймер пиццы Сделать таймер пиццы (функция, принимающая время), который будет выводить в консоль секунды, оставшиеся до готовности пицы и сообщение по готовности. 00:04 00:03 00:02 00:01 00:00 🍕!!! */

function pizzaTimer(ms) {
    const end = new Date().getTime() + 100 + ms; //100 чтобы избедать бага ивентлупа
    const options = {
        minute: 'numeric',
        second: 'numeric',
    }
    const interval = setInterval(() => 
    {
    
       console.log( new Intl.DateTimeFormat('ru-RU', options).format(end - new Date()) );
    }, 1000); 

    setTimeout(() => {
        clearInterval(interval);
        console.log('🍕!!!');
    }, ms);
}

pizzaTimer(5000);


let count = 0;

const intervalId = setInterval(function() {
  console.log(++count);
  if (count >= 5) {
    clearInterval(intervalId);
  }
}, 1000);