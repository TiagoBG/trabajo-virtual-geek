'use strict';

const geekGirl1 = {
    nombre: 'Susana',
    edad: 34,
    profesion: 'periodista',
    run: (distance) => {
        const mensaje = `Estoy corriendo una maratón de ${distance}`
        return mensaje
    }
}

const geekGirl2 = {
    nombre: 'Rocío',
    edad: 25,
    profesion: 'actriz',
    sayHello: function() {
        return 'Hola, me llamo ' + this.nombre;
    }
}

document.querySelector('.geekGirls').innerHTML = `Mi nombre es ${geekGirl1.nombre}, tengo ${geekGirl1.edad} y soy ${geekGirl1.profesion}. ${geekGirl1.run(50)} Km.`


document.querySelector('.geekGirls2').innerHTML = `${geekGirl2.sayHello()}`