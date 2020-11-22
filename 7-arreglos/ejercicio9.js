'use strict'

function arbol(numero) {
    var array = [];
    var linea = "";
    // bucle que define cada uno de los elementos del array
    for (let i = 1; i <= numero; i++) {
        linea = "▲".repeat(i);
        linea += " ".repeat(numero - i);
        // añadimos la linea al array
        array.push(linea);
    }

    return array;
}
console.log(arbol(5));