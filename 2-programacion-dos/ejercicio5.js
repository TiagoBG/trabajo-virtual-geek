'use strict';
const horasDia = 24;
const edad = 26;
const horasAño = 24 * 365;

const edadHoras = edad * horasAño;

console.log(`Habeis vivido ${edadHoras} horas en este mundo...`);
document.querySelector('.edadHoras').innerHTML = `Habeis vivido ${edadHoras} horas en este mundo...`;