'use strict';

let mensaje = document.querySelector('#arcoiris');

if (mensaje.classList.contains('error')) {
    /*mensaje.classList.remove(".warning")
    mensaje.classList.remove(".success")*/
    mensaje.innerHTML = `<h3>ERROR</h3><p>Ha surgido un error</p>`
} else if (mensaje.classList.contains('warning')) {
    /*mensaje.classList.remove(".success")
    mensaje.classList.remove(".error")*/
    mensaje.innerHTML = '<h3>AVISO</h3><p>Tenga cuidado</p>'
} else {
    /* mensaje.classList.remove(".warning")
     mensaje.classList.remove(".error")*/
    mensaje.innerHTML = '<h3>CORRECTO</h3><p>Los datos son correctos</p>'
}