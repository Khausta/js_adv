'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function () {
    const response = JSON.parse(this.responseText);
    const url = response.abilities[0].ability.url;

    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.addEventListener('load', function () {
        const response = JSON.parse(this.responseText);
        console.log(response.effect_entries[1]);
    })
});