'use strict';
let partner = 'Santiago';
let partner2 = 'Biviana';
let user = document.querySelector('#usuario').innerHTML;

if (user === partner) {
    document.querySelector('.welcomeMessage').innerHTML = `Bienvenid@ ${partner}`
} else if (user === partner2) {
    document.querySelector('.welcomeMessage').innerHTML = `Bienvenid@ ${partner2}`
} else {
    document.querySelector('.welcomeMessage').innerHTML = "Lo siento pero el usuario que has introducido no está registrado"
}