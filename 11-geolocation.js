'use strict';

function showCoordinates(latitude, longitude) {
    console.log(latitude, longitude);
    const geolocation = document.querySelector('.geolocation');
    geolocation.innerHTML = `
        <p>Ваши координаты</p>
        <p>Широта: ${latitude}</p>
        <p>Долгота: ${longitude}</p>
    `
}

function showError(errorCode) {
    const errorDescriptions = new Map([
        ['1', 'Вы запретили доступ к вашей геолокации'],
        ['2', 'Произошла внутрення ошибка'],
        ['3', 'Слишком много времени прошло']
    ]);
    
    const geolocation = document.querySelector('.geolocation');
    geolocation.innerHTML = `
        <p>Не удалось определить ваши координаты</p>
        <p>Причина: ${errorDescriptions.get(errorCode)}</p>
    `;
}

const geoLocationPromise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        error => reject(new Error(error.code))
    );
})

geoLocationPromise
    .then(position => showCoordinates(position.coords.latitude, position.coords.longitude))
    .catch(error => {
        showError(error.message);
    })