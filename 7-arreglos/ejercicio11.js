'use strict';

var array = [];

function arbol(numero) {

    var linea = "";
    var acum;
    // bucle que define cada uno de los elementos del array
    for (let i = 1; i <= numero; i++) {
        linea = " ".repeat(numero - i);
        if (i === 1) {
            array.push(linea + "★");
            acum = linea;
        }
        linea += "▲".repeat(i);

        // añadimos la linea al array
        array.push(linea);
    }
    array.push(acum + "|");

    return array;
}

function arbol2(numero) {
    var linea = "";
    // bucle que define cada uno de los elementos del array
    for (let i = 1; i <= numero; i++) {
        linea = "▲".repeat(i);
        linea += " ".repeat(numero - i);
        // añadimos la linea al array
        array[i] += linea;
    }

    return array;
}
arbol(5);
arbol2(5);
console.log(array);