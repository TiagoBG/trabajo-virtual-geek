'use strict';
let avocados;
const avocadoPrice = 1.5;
const money = 33;

money >= avocadoPrice ? avocados = money / avocadoPrice : avocados = 0;

console.log(avocados)
document.querySelector('.avocados').innerHTML = `Con mi presupuesto, puedo comprar ${avocados} aguacates`