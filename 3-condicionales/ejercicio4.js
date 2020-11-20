'use strict';
let edadPerro = 4;

if (edadPerro === 1) {
    console.log(`La edad de tu perro es 15 años humanos`)
    document.querySelector('#edadPerros').innerHTML = `La edad de tu perro es 15 años humanos`;
} else if (edadPerro === 2) {
    console.log(`La edad de tu perro es ${15 + 9} años`)
    document.querySelector('#edadPerros').innerHTML = `La edad de tu perro es ${15 + 9} años`;

} else if (edadPerro === 0) {
    console.log(`La edad de tu perro es 0 años`)
    document.querySelector('#edadPerros').innerHTML = `La edad de tu perro es 0 años`;
} else {
    console.log(`La edad de tu perro es ${(edadPerro-2)*5+15+9} años`)
    document.querySelector('#edadPerros').innerHTML = `La edad de tu perro es ${(edadPerro-2)*5+15+9} años`;

}