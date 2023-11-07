'use strict';

try {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
    request.send();
    console.log(request.readyState);
    
    request.addEventListener("error", (event) => {
        throw new Error('Не удалось выполнить запрос');
    });
    
    request.addEventListener('load', function () {
      
        const response = JSON.parse(this.responseText);
        const url = response.abilities[0].ability.url;    
       
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.send();
        
        request.addEventListener('load', function () {
            const response = JSON.parse(this.responseText);
            console.log(response.effect_entries[1].effect);
        })
    
        request.addEventListener("error", (event) => {
            throw new Error('Не удалось получить данные');
        });
    });

} catch (e) {
    console.error(e);
}









