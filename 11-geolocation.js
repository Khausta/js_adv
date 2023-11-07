'use strict';


const errorDescriptions = new Map([
    ['1', 'Вы запретили доступ к вашей геолокации'],
    ['2', 'Произошла внутрення ошибка'],
    ['3', 'Слишком много времени прошло']
]);

function showCoordinates(latitude, longitude) {
    const geolocation = document.querySelector('.geolocation');
    geolocation.innerHTML = `
        <p>Ваши координаты</p>
        <p>Широта: ${latitude}</p>
        <p>Долгота: ${longitude}</p>
    `
}

function showError(errorCode, errorDescriptionsArr) {
    const geolocation = document.querySelector('.geolocation');
    geolocation.innerHTML = `
        <p>Не удалось определить ваши координаты</p>
        <p>Причина: ${errorDescriptionsArr.get(errorCode)}</p>
    `;
}

function geoLocationPromise () {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            error => reject(new Error(error.code))
        );
    })
    .then(position => {
        const {coords} = position;
        showCoordinates(coords.latitude, coords.longitude)
    })
    .catch(error => {
        showError(error.message, errorDescriptions);
    });
}

//проверка поддержки браузером promise api
const promiseSupport = new Promise((resolve, reject) => {
    if (!window.Promise) {
        reject('Promise API is not supported');
    } else {
        resolve('Promise API is supported');
    }
});

promiseSupport
    .then(() => {
        geoLocationPromise();
    })
    .catch(error => {
        console.error(error);
    });





