'use strict';
const operacion1 = 2 + 3 + '5';
const operacion2 = '2' + 3 + 5;

console.log(`Mírate, tu crees que ${operacion1} es igual a ${operacion2}?`);
document.querySelector('#diferencias').innerHTML = `Mírate, tu crees que ${operacion1} es igual a ${operacion2}?`;