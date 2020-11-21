'use strict';

function sumarCuadrados(x, y) {
    function cuadrados(a) {
        return a * a;
    }
    return cuadrados(x) + cuadrados(y);
}

console.log(sumarCuadrados(2, 3))
console.log(sumarCuadrados(3, 4))
document.querySelector('#bonus').innerHTML = `La suma de los cuadrados de 4 y 5 es: ${sumarCuadrados(4, 5)}`;