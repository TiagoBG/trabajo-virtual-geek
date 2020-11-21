/*Calculador de modelo de caja
Como hemos visto en las clases anteriores, en CSS tenemos dos tipos de cálculo para las dimensiones de un elemento: border-box y content-box. Vamos a realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, en caso de ser border-box o el ancho total de la caja, en caso de ser content-box.
La función tendrá 4 parametros: el primero será un booleano para especificar si es border-box o no, el segundo será el ancho del contenido o de la caja entera, el tercero el padding y el cuarto el borde.
Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.*/

//EJEMPLO

/*div {
  width: 160px;
  height: 80px;
  padding: 20px;
  border: 8px solid red;
  background: yellow;
}*/

'use strict';

function calculadorCaja(tipo, width, padding, border) {
    if (tipo === 'content-box') {
        /* Ancho  total: 160px + (2 * 20px) + (2 * 8px) = 216px
     Altura total: 80px + (2 * 20px) + (2 * 8px) = 136px
     Ancho de la caja de contenido: 160px
     Altura de la caja de contenido: 80px */
        let anchoTotalCaja = width + (2 * padding) + (2 * border)
        return anchoTotalCaja
    } else {
        /* Ancho total: 160px
     Altura total: 80px
     Ancho de la caja de contenido: 160px - (2 * 20px) - (2 * 8px) = 104px
     Altura de la caja de contenido: 80px - (2 * 20px) - (2 * 8px) = 24px */
        let anchoTotalContenido = width - (2 * padding) - (2 * border)
        return anchoTotalContenido
    }
}

console.log(`El ancho del elemento es ${calculadorCaja('content-box', 160, 20, 8)}px`);
document.querySelector('#anchoCaja').innerHTML = `El ancho del elemento es ${calculadorCaja('content-box', 160, 20, 8)}px`;