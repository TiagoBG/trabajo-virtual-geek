'use strict';

var arr = [];

function agregar(arr) {
    arr.push(document.querySelector("#input1").value + "," + document.querySelector("#input2").value)
    for (const movie of arr) {
        var opinion = movie.split(",");
        console.log("¡A mí también me encantó " + opinion[0]);
        console.log("¡A mí también me encantó " + opinion[1]);
    }
}