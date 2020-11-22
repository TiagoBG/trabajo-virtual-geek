'use strict';

let alumnas = [];

alumnas.push({ nombre: 'María', edad: 29, profesion: 'diseñadora' });
alumnas.push({ nombre: 'Lucía', edad: 31, profesion: 'ingeniera química' });
alumnas.push({ nombre: 'Susana', edad: 34, profesion: 'periodista' });
alumnas.push({ nombre: 'Rocío', edad: 25, profesion: 'actriz' });
alumnas.push({ nombre: 'Inmaculada', edad: 21, profesion: 'diseñadora' });

console.log(alumnas)

function countGeekGirls() {
    let totalAlumnas = alumnas.length
    console.log(`En total hay ${totalAlumnas} geek girls`)

} //devuelve 5

function averageAge() {
    let sumaEdadChicas = 0;
    for (const chica of alumnas) {
        sumaEdadChicas += chica.edad
    }
    let mediaEdad = sumaEdadChicas / alumnas.length
    return mediaEdad
} //devuelve 28

function theYoungest() {
    for (const chica of alumnas) {}
}

function countDesigners() {
    let n = 0
    for (const chica of alumnas) {
        if (chica.profesion === 'diseñadora') { n++ }
    }
    console.log(`En total hay ${n} geeks diseñadoras`)
} //devuelve 2