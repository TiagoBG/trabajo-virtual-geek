'use strict';

const btnSaludar = document.querySelector('#saludo')
const imprimeDOM = document.querySelector('.mensajeInput')
const personaInput = document.querySelector('#nombre')

btnSaludar.addEventListener('click', () => imprimeDOM.innerHTML = `Hola ${personaInput.value}!`)