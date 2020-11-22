'use strict';

/*let numbersMedia = [12, 34, 56, 78, 90, 45]
let sumaNum = 0;
for (let i = 0; i < numbersMedia.length; i++) {
    sumaNum += numbersMedia[i]
    console.log(sumaNum)
}

let mediaFinal = sumaNum / numbersMedia.length*/


function average(numbers) {
    let sumaNum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumaNum += numbers[i]

    }
    let mediaFinal = sumaNum / numbers.length

    console.log(`El promedio final es de: ${mediaFinal}`)
}