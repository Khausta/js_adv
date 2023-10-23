'use strict';
//task
// получить координаты и через api вывести город
function getMyCoordinates() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                })
            },
            error => {
                reject(error)
            }
        );
    })
}

async function getMyCity() {
    try {
        const {latitude, longitude} = await getMyCoordinates();
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`);
        if(!response.ok) {
            throw new Error(response.code);
        }
        const data = await response.json();
        console.log(data.city);
    } catch (e) {
        console.error(e);
    }
}

// getMyCity();

//асинхронные методы
class ProductRepository {
    async getProducts() {
        const response = await fetch(`https://dummyjson.com/products`);
        console.log(await response.json());
    }
}

const repo = new ProductRepository();
repo.getProducts();



const asyncArrow = async() => {
    const response = await fetch(`https://dummyjson.com/posts`);
        console.log(await response.json());
}

// asyncArrow();



const asyncArrow2 = async() => {
    const response = await fetch(`https://dummyjson.com/products`);
    const data = await response.json()
    return data;
}
console.log('1');
asyncArrow2().then(data => console.log(data)); //плохая практика использовать async и then в одном коде!
console.log('2');

// Последовательность выполнения
// IEFE
(async () => {
    console.log('мгновенно вызыанная функция');
    const res = await asyncArrow2();
    console.log(res);
    console.log('End');
})()

//параллеьное выполнение

async function getAllProducts() {
    const response = await fetch('https://dummyjson.com/products');
    return response.json();
}

async function getProduct(id) {
    const response = await fetch('https://dummyjson.com/products/' + id);
    return response.json();
}

//если с ошибкой fetch
async function getProductError(id) {
    const response = await fetch('https://dummyjson.com/productsS/' + id);
    return response.json();
}

async function main() {
    const { products } = await getAllProducts();

    // const res = await Promise.all([
    //     getProduct(1),
    //     getProduct(2),
    //     getProductError(3) //падаев весь код и ничего не приходит
    // ]);
    const res = await Promise.all(products.map(product => getProduct(product.id)));
    console.log(res);
    for (const product of products) {
    //    console.log( await getProduct(product.id) )
        const res = await getProduct(product.id);
        console.log(res);
    }
}

// main();


//другие комбинации промисов

async function main2() {
    const res1 = await Promise.all([
        getProduct(1),
        getProduct(2),
    ]); //вернет только если все апросы прошли корректно
    console.log(res1);
    const res2 = await Promise.allSettled([ //вернет успешные запросы, даже если какие-то не пришли
    getProduct(1),
    getProduct(2),
    ]);
    console.log(res2);

    const res3 = await Promise.race([ //гонка, какоцй результат придет раньше
    getProduct(1),
    getProduct(2),
    ]);
    console.log(res3); //приедет один самый быстрый запрос
}

// main2();

//все возможности fetch
//пример с авторизацией

async function main3() {
    const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', //обозначает тип конетента
        },
        body: JSON.stringify({
            username: 'kminchelle',
            password: '0lelplR',
        })
    });
    const data = await res.json();
    console.log(data);
}

// main3();

//task Генератор активностей
/* Сделать генератор 3х идей от скуки https://www.boredapi… с отображением на странице */


//мой вариант
//////////////////////////////////////////////////
//для стилей
const animateButton = function(e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },2000);
  };
  
  const bubblyButtons = document.querySelectorAll(".bubbly-button");
  
  for (let i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', getActivities, false);
  }
/////////////////////////////////////


async function getActivity() {
  
    const res = await fetch('https://www.boredapi.com/api/activity');
    const data = await res.json();
    console.log(data.activity);
    await renderActivities(data.activity);
    // return data.activity
}

function renderActivities(activity) {
   
    const blockActivities = document.querySelector('.activity__wrapper');
    if(blockActivities.childElementCount === 3) {
        blockActivities.replaceChildren();
    }
    const el = document.createElement('p');
    el.classList.add('activity__text');
    el.innerText = `${activity}`;
    blockActivities.appendChild(el);
}

// getActivity();

async function getActivities(e) {
    await animateButton(e);
    const res = await Promise.all([
        getActivity(),
        getActivity(),
        getActivity(),
    ]);
}

// Вариант Антона
const wrapper = document.querySelector('.wrapper');

async function getActivity1() {
    const res = await fetch('https://www.boredapi.com/api/activity');
    return res.json();
}

async function generate() {
    try {
        wrapper.innerHTML = '';
        const data = await Promise.all([
            getActivity1(),
            getActivity1(),
            getActivity1(),
       ]);
       console.log(data);   
       for (const el of data) {
        const element = document.createElement('div');
        element.innerHTML = `${el.activity}`
        wrapper.appendChild(element);
       }
    } catch (e) {
        console.error(e);
    }
}
 