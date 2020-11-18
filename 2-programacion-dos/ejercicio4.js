'use strict';

const totalPersonas = 9;
const totalCena = 128;

const pagoPersona = (totalCena - 2) / totalPersonas;
const pagoAna = pagoPersona + 2;

console.log(`Cada persona paga ${pagoPersona} euros, y Ana paga ${pagoAna} euros`);
document.querySelector('.pagaAna').innerHTML = `Cada persona paga ${pagoPersona} euros, y Ana paga ${pagoAna} euros`;