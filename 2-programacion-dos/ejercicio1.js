'use strict';
console.log('Hola');

const age = 26;
console.log(age);

const welcomeParagraph = document.querySelector('.welcomeText');

// Logueo el contenido de la constante welcomeParagraph en la consola y compruebo que tiene asignado el elemento de HTML que espero antes de cambiar su contenido
console.log('welcomeParagraph: ', welcomeParagraph);

welcomeParagraph.innerHTML = `Bienvenido Geek Boy de ${age} años`;