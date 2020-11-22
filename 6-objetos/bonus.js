'use strict';

const moodBtn = document.querySelector('.moodUpdate');
const selector = document.querySelector('#selector');
const ventana = document.querySelector('.color');
const carita = document.querySelector('#emoticon');

function randomize(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);

}

function switchMood() {
    let escogeColor = randomize(0, 100);
    if (selector.value === "happy") {
        ventana.classList.add('happy');
        ventana.classList.remove('sad');
        carita.innerHTML = ":)";
        if (escogeColor % 2 === 0) {
            ventana.style.backgroundColor = "#ffcc00";
        } else {
            ventana.style.backgroundColor = "#ff9900";

        }

    } else {

        ventana.classList.add('sad');
        ventana.classList.remove('happy');
        carita.innerHTML = ":(";
        if (escogeColor % 2 === 0) {
            ventana.style.backgroundColor = "#ffcc00";
        } else {
            ventana.style.backgroundColor = "#ff9900";

        }
    }
}

moodBtn.addEventListener('click', switchMood)