'use strict';

let movies = [];
movies[0] = 'Harry Potter and the Azkaban Prisioner';
movies[1] = 'Cruel Intentions';
movies[2] = 'Hocus Pocus';

console.log(movies)

function workWithMovies() {
    movies[0] = 'Mean Girls'
    movies[2] = 'The Conjuring'
    return movies
}

console.log(workWithMovies());