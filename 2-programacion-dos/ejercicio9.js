'use strict';

const myName = "Santiago Betancur Graciano"
const cantidad = myName.length - 2;

console.log(`${myName}, tu nombre tiene ${cantidad} letras`);
document.querySelector('#miNombre').innerHTML = `${myName}, tu nombre tiene ${cantidad} letras`;