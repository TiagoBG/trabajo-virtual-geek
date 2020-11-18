'use strict';
const precioKiwisKg = 5;
const precioPerasKg = 2;
const precioUvasKg = 4;

const cantidadKiwisKg = 2;
const cantidadPerasKg = 3;
const cantidadUvasKg = 0.5;

const totalKiwis = precioKiwisKg * cantidadKiwisKg;
const totalPeras = precioPerasKg * cantidadPerasKg;
const totalUvas = precioUvasKg * cantidadUvasKg;
const total = totalKiwis + totalPeras + totalUvas;

document.querySelector('.totalKiwis').innerHTML = `${totalKiwis} euros`;
document.querySelector('.totalPeras').innerHTML = `${totalPeras} euros`;
document.querySelector('.totalUvas').innerHTML = `${totalUvas} euros`;
document.querySelector('.totalFruver').innerHTML = `${total} euros`;



console.log(`El total a pagar en Fruver Mkt es: ${total} euros`)