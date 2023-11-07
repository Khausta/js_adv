'use strict';

const page = {
    month: document.querySelector('.month > .numbers'),
    monthText: document.querySelector('.month > span'),
    days: document.querySelector('.days > .numbers'),
    daysText: document.querySelector('.days > span'),
    hours: document.querySelector('.hours > .numbers'),
    hoursText: document.querySelector('.hours > span'),
    minutes: document.querySelector('.minutes > .numbers'),
    minutesText: document.querySelector('.minutes > span'),
    seconds: document.querySelector('.seconds > .numbers'),
    secondsText: document.querySelector('.seconds > span')
}

const words = [
    { name: 'seconds', value: ['секунда', 'секунды', 'секунд'] },
    { name: 'minutes', value: ['минута', 'минуты', 'минут'] },
    { name: 'hours', value: ['час', 'часа', 'часов'] },
    { name: 'days', value: ['день', 'дня', 'дней'] },
    { name: 'month', value: ['месяц', 'месяца', 'месяцев'] }
];


function checkWord(num, measurement) {
    if (num >= 5 && num <= 20) {
        return words.find(el => el.name === measurement).value[2]
    } else if(num < 5 && num > 1) {
        return words.find(el => el.name === measurement).value[1]
    } else if (num % 10 === 1) {
        return words.find(el => el.name === measurement).value[0]
    } else if (num % 10 > 1 && num % 10 < 5){
        return words.find(el => el.name === measurement).value[1]
    } else {
       return words.find(el => el.name === measurement).value[2]
    }
}

function timeToYearEnd() {
    const nextYear = new Date().getFullYear() + 1;
    const end = new Date(`${nextYear}`, 0, 1, 0, 0).getTime() + 100;
    const delta = end - new Date().getTime();
    const interval = setInterval(() => {
        const timerObj = {
            month: Math.floor(delta / (1000 * 60 * 60 * 24 * 30)),
            days: Math.floor(delta / (1000 * 60 * 60 * 24)) % 30,
            hours: Math.floor(delta / (1000 * 60 * 60)) % 24,
            minutes: Intl.DateTimeFormat('ru-RU', {
                minute: 'numeric' }).format(end - new Date()),
            seconds: Intl.DateTimeFormat('ru-RU', {
                second: 'numeric'}).format(end - new Date())
        }

        for (let [key, value] of Object.entries(timerObj)) {
            page[`${key}`].innerText = value;
            page[`${key}Text`].innerText = checkWord(value,`${key}`);
            console.log(checkWord(value,`${key}`));
        }
    }, 1000);

    setTimeout((interval) => {
        clearInterval(interval)
    }, delta)
}

timeToYearEnd();

