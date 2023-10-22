'use strict';

// обработка promises
const res = fetch('https://dummyjson.com/products/1')
    .then((response) => {
    console.log(response);
    // console.log(response.json());
    return response.json();
    })
    .then((data) => {
        console.log(data);
    });
// console.log(res);

const res2 = fetch('https://dummyjson.com/products/2')
    .then((response) => response.json())
    .then((data) => data);
console.log(res2);//будет неверное отображение, из-за синхронности

const res3 = fetch('https://dummyjson.com/products/2')
    .then((response) => response.json())
    .then((data) => data);
console.log(res2);

//цепочка promise  чтобы избежать callback hell
fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then(({ products }) => {
        console.log(products);
        return fetch('https://dummyjson.com/products/' + products[0].id);
        //или
        // return 0;
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

//обработка reject

// fetch('https://dummyjsons.com/products')  //ERR_NAME_NOT_RESOLVED
//     .then(
//         response => response.json(),
//         error => console.log(error) //TypeError: Failed to fetch
//     )
//     .then(({ products }) => {
//         console.log(products);
//         return fetch('https://dummyjson.com/products/' + products[0].id);
//         //или
//         // return 0;
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     });


    // fetch('https://dummyjson.com/productsS')
    // .then( 
    //     response => {
    //         console.log(response);
    //         return response.json()
    //     },
    //     error => console.log(error) 
    // )
    // .then(({ products }) => {
    //     console.log(products);
    //     return fetch('https://dummyjson.com/products/' + products[0].id);
    //     },
    //     error => console.log(error)
    // )
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    // });


    //пример с обработкой всех ошибок сразу
    // fetch('https://dummyjson.com/products')
    // .then( 
    //     response => {
    //         console.log(response);
    //         return response.json()
    //     }
    // )
    // .then(({ products }) => {
    //     console.log(products);
    //     return fetch('https://dummyjson.com/productsS/' + products[0].id);
    //     }
    // )
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(error => console.log(error))
    // .finally(() => {   //можно и перед catch, просто изменится поряжок отображения
    //     console.log('Final');
    // });


    /*  -----Task-----
        Сделать запрос
         получить список категорий
          отобразить <select>

    */
function createSelect(arr) {
    const selectList = document.getElementById('category-select'); 
    const option = document.createElement('option');
            option.value = `${arr}`;
            option.innerText = `${arr}`;
            selectList.appendChild(option);
}



function getCategories() {
    fetch('https://dummyjson.com/products/categories')
        .then( 
            response => {
                console.log(response);
                return response.json()
            }
        )
        .then((categories) => {
            console.log(categories);
            categories.map(category => createSelect(category));
        });
}

getCategories();
///////////////////////////////////////////////////////////////

function createSelector(arr) {
    const filter = document.querySelector('.filter');
    filter.innerHTML = `<select>
        ${arr.map(el => `<option value=${el}>${el}</option>`)}
    </select>`;
}

function getCategories2() {
    fetch('https://dummyjson.com/products/categories')
        .then(response => response.json())
        .then(categories => createSelector(categories))
        .catch(error => console.log(`Ошибка: ${error}`)); 
}

getCategories2();

   


//Ручное создание ошибок
    fetch('https://dummyjson.com/productsы')
    .then( 
        response => {
            if (!response.ok) {
                throw new Error (`Is error ${response.status}`)
            }
            return response.json()
        }
    )
    .then(({ products }) => {
        console.log(products);
        return fetch('https://dummyjson.com/products/' + products[0].id);
        }
    )
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
        const el = document.querySelector('.filter-with-error');
        el.innerHTML = error.message;
    })
    .finally(() => {   //можно и перед catch, просто изменится поряжок отображения
        console.log('Final');
    });

    //task
    function getData(url, errorMessage, method = 'GET') {
        return fetch(url, {
            method
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error (`${errorMessage} ${response.status}`)
                }
                return response.json()
            })
    }

    getData('https://dummyjson.com/products', 'Can not get products')
        .then(({ products }) => {
            console.log(products);
            return getData('https://dummyjson.com/products/' + products[0].id, 'Can not get product');
            }
        )
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
            const el = document.querySelector('.filter-with-error');
            el.innerHTML = error.message;
        })
        .finally(() => {   //можно и перед catch, просто изменится поряжок отображения
            console.log('Final');
        });

    


