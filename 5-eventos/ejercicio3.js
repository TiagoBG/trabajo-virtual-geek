'use strict';

let texto = document.querySelector('.duplicaLorem')
let nuevoTexto = document.querySelector('.nuevoLorem')

texto.addEventListener('mouseover', () => {
    nuevoTexto.innerHTML = texto.innerHTML;
    setTimeout(() => nuevoTexto.innerHTML = "", 2400);
}, false);