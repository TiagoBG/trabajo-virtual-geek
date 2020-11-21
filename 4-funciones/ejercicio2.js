'use strict';
'use strict';

function promediar(a, b, c, d) {
    const resultProm = (a + b + c + d) / 4;
    return resultProm
}

document.querySelector('.resultProm').innerHTML = `${promediar(8,3,2,5)}`
console.log(`El resultado del promedio es ${promediar(47,24,80,112)}`)
console.log(`El resultado del promedio es ${promediar(95,23,76,34)}`)