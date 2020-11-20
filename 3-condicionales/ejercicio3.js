'use strict';

let numPrueba = 0;
let showNum = document.querySelector('.cambioNum')

if (numPrueba === 0) {
    console.log('El número es 0')
    showNum.innerHTML = 'El número es 0'
} else if (numPrueba < 0) {
    console.log('El número es negativo')
    showNum.innerHTML = 'El número es negativo'
} else if (numPrueba + 2 > 13) {
    console.log('El número más 2 es mayor 13')
    showNum.innerHTML = 'El número más 2 es mayor 13'
} else if (numPrueba > 20 && numPrueba > 50) {
    console.log('El número es mayor que 20 pero menor que 50')
    showNum.innerHTML = 'El número es mayor que 20 pero menor que 50'
} else {
    console.log('el número no es 123123125')
    showNum.innerHTML = 'el número no es 123123125'
}