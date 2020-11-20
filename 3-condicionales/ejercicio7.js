'use strict';

const inputYear = 2020;
const bisiesto = document.querySelector('#bisiesto');

if (inputYear % 4 === 0) {
    console.log(`El ${inputYear} es un año bisiesto`)
    bisiesto.innerHTML = `El ${inputYear} es un año bisiesto`;
} else if (inputYear % 4 === 1) {
    console.log(`El próximo año bisiesto es el ${inputYear + (inputYear%4)}`)
    bisiesto.innerHTML = `El próximo año bisiesto es el ${inputYear + 3}`;
} else if (inputYear % 4 === 2) {
    console.log(`El próximo año bisiesto es el ${inputYear + (inputYear%4)}`)
    bisiesto.innerHTML = `El próximo año bisiesto es el ${inputYear + (inputYear%4)}`;
} else {
    console.log(`El próximo año bisiesto es el ${inputYear + (inputYear%4)}`)
    bisiesto.innerHTML = `El próximo año bisiesto es el ${inputYear + (inputYear%4) +1}`;
}