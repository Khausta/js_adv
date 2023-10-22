'use strict';

function getAbility(url, messageError, method = 'GET') {
    return fetch(url, {
        method
    })
        .then(response => {
            if(!response.ok) {
                throw new Error (`${messageError} ${response.status}`)
            }
            return response.json()
        })
}


getAbility('https://pokeapi.co/api/v2/pokemon/ditto', 'Can not get ability')
    .then((data) => {
        console.log(data);
        const abilitiesWrapper = document.querySelector('.pocemon__abilities');
        data.abilities.map(el => {
            getAbility(el.ability.url, 'Can not get ability descriprion')
                .then(response => {
                    const obj = response.effect_entries.find(el => el.language.name === 'en');
                    const p = document.createElement('p');
                    p.classList.add('pokemon__effect');
                    p.innerText = obj.effect;
                    abilitiesWrapper.append(p)
                })
            })    
    })