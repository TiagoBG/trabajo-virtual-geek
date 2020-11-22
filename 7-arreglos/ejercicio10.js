'use strict';

var array = [];
array.push("★");

function arbol(numero) {

    var linea = "";
    // bucle que define cada uno de los elementos del array
    for (let i = 1; i <= numero; i++) {
        linea = "▲".repeat(i);
        linea += " ".repeat(numero - i);
        // añadimos la linea al array
        array.push(linea);
    }
    array.push("|");

    return array;
}

console.log(arbol(5));