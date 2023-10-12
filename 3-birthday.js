'use strict';

 function over14(birthday) {
    try {
        const date = new Date(birthday);
        if(isNaN(date)) {
            throw new Error('Invalid date format');
        }
        date.setFullYear(date.getFullYear() + 14);
        const now = new Date();
        return date.getTime() <= now.getTime();
    } catch(error) {
        console.log(error + '\n' + 'Дата рождения указана некорректно');
        return null; //чтобы не выводилось undefined
    }
 }



//  console.log(over14('2009-10-11')); 
//   console.log(over14('100-2023')); 
//  console.log(over14('20-10-2009')); 
//   console.log(over14('2009-10-10')); 
//   console.log(over14('2009-10-13')); 