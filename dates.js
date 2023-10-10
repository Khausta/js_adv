'use strict';

const now = new Date();
console.log(now);

console.log(new Date('9-10-23')); //Sun Sep 10 2023 00:00:00 GMT+0300 (Москва, стандартное время)
console.log(new Date('9/10/23')); //Sun Sep 10 2023 00:00:00 GMT+0300 (Москва, стандартное время)
console.log(new Date('2023/9/10')); //Sun Sep 10 2023 00:00:00 GMT+0300 (Москва, стандартное время)
console.log(new Date('10 Sep 2023')); //Sun Sep 10 2023 00:00:00 GMT+0300 (Москва, стандартное время)
console.log(new Date('Oct 10 2023 21:56:55')); //Tue Oct 10 2023 21:56:55 GMT+0300 (Москва, стандартное время)
console.log(new Date(2023, 11, 31)); //Декабрь! Fri Dec 01 2023 00:00:00 GMT+0300 (Москва, стандартное время)
console.log(new Date(2023, 11, 51)); // перейдет в 2024 год, Sat Jan 20 2024 00:00:00 GMT+0300 (Москва, стандартное время)
console.log(Date.now()); //1696964737910
console.log(new Date(Date.now())); //Tue Oct 10 2023 22:06:23 GMT+0300 (Москва, стандартное время)
console.log(new Date(now.setFullYear(2030))); //Thu Oct 10 2030 22:09:38 GMT+0300 (Москва, стандартное время)


//пример: сколькл дней назад было опубликовано 
const date1 = new Date(2024, 10, 15);
const date2 = new Date(2024, 11, 15);

console.log(Number(date1));
console.log(Number(date2));
console.log(date2 - date1); //разниуа между тайм-стемпами 

function getDaysBetweenDates(startDay, finishDay) {
    return (finishDay - startDay) / (1000 * 60 * 60 * 24);
}

console.log(getDaysBetweenDates(date1, date2));

//сравнение дат
console.log(date1 < date2);
console.log(date1.isBefore(date2));
console.log(date1.getTime() < date2.getTime());
const date01 = new Date(2023, 10, 3);
const date02 = new Date(2023, 10, 3);
console.log(date01 === date02);//false не равны, так как ссылаются на разные объекты
console.log(date01.getTime() === date02.getTime());//true
console.log(Number(date01) === Number(date02));//true

//task сегодня у пользователя ДР?
const user = {
    name: 'Вася',
    birthday: '10/10/2022',
}

function isBirthdayToday(obj) {
    const birthday = new Date(obj.birthday)
    const day = birthday.getDate();
    const month = birthday.getMonth();
    const now = new Date();
    return now.getDate() === day && now.getMonth() === month;
}

console.log(isBirthdayToday(user));

//интернационализация дат
const myDate = new Date();

console.log(new Intl.DateTimeFormat('ru-RU').format(myDate));

const options1 = {
    hour: 'numeric',
    minute: 'numeric'
}
console.log(new Intl.DateTimeFormat('ru-RU', options1).format(myDate)); //23:08

const options2 = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    weekday: 'short',
    year: '2-digit' //вывщдит последние две цыфры года
}
console.log(new Intl.DateTimeFormat('en-US', options2).format(myDate)); //Tue (Month:October) at 11:09 PM

console.log(navigator.language); //ru в EDGE, ru-RU в GoogleChrome

console.log(new Intl.DateTimeFormat('ru-RU').format()); //Tue (Month:October) at 11:09 PM

console.log()


