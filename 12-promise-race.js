'use strict';

async function race(promiseArray) {
    return new Promise((resolve, reject) => {
        promiseArray.map(promise => {
            promise
                .then(result => resolve(result))
                .catch((error) => reject(error));
        })
    });
}

const fetch1 = new Promise((resolve) => {
    setTimeout(() => resolve('Status: ok\n value: 100'), 5000);
});

const fetch2 = new Promise((resolve) => {
    setTimeout(() => resolve('Status: ok\n value: 200'), 3000);
});

const fetch3 = new Promise((reject) => {
    setTimeout(() => reject('Status: failed\n value: 0'), 1000);
});

async function promiseRace(array) {
    const result = await race(array);
    console.log(result);
}

promiseRace([fetch1, fetch2, fetch3]);

