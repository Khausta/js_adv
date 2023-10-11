'use strict';

 function over14(birthday) {
    const date = new Date(birthday);
    if(isNaN(date)) {
        return 'Невозможно определить возраст';
    }
    date.setFullYear(date.getFullYear() + 14);
    const now = new Date();
    return date.getTime() <= now.getTime();
 }

//  console.log(over14('2009-10-11')); 
//  console.log(over14('2009-10-10')); 
//  console.log(over14('100-2023')); 
//  console.log(over14('20-10-2009')); 