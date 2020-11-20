'use strict';
const predeterminado = 'http://placehold.it/300x300';
const avatar = 'http://www.fillmurray.com/300/300';
let username = document.querySelector('.user').innerHTML;

if (username) {
    document.querySelector('.container').innerHTML = `<img src= ${avatar} alt='User'>`
} else {
    document.querySelector('.container').innerHTML = `<img src= ${predeterminado} alt='default user'>`
};