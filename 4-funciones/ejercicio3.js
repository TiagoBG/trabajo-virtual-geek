'use strict';
let iva = 0.21;
//let costo = 20;

function calcularPrecio(costo) {
    let total = costo + (costo * iva)
    let resulIva = `Precio sin IVA: $${costo}, IVA: $${iva} y Total: $${total}`
    return resulIva
}

console.log(calcularPrecio(20))
document.querySelector('.conIva').innerHTML = `${calcularPrecio(20)}`;