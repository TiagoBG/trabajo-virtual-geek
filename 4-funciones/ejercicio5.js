'use strict';

let ivaArrow = 0.21;
//let costoArrow = 20;

const calcularPrecioArrow = (costoArrow) => {
    let totalArrow = costoArrow + (costoArrow * ivaArrow)
    let resulIvaArrow = `Precio sin IVA: $${costoArrow}, IVA: $${ivaArrow} y Total: $${totalArrow}`
    return resulIvaArrow
}

console.log(calcularPrecioArrow(20))
document.querySelector('.conIvaArrow').innerHTML = `${calcularPrecioArrow(20)}`;