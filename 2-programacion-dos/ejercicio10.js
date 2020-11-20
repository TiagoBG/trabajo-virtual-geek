'use strict';
const edadParseada = parseInt(document.querySelector('.edadParseada').innerHTML);
const horasAñoPars = 24 * 365;

const edadHorasParseada = edadParseada * horasAñoPars;

console.log(`Habeis vivido ${edadHorasParseada} horas en este mundo...`);
document.querySelector('.edadHorasParseada').innerHTML = `Habeis vivido ${edadHorasParseada} horas en este mundo...`;