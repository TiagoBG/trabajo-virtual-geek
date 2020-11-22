'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const btnMovies = document.querySelector('.moviesShow')
const moviesList = document.querySelector('.moviesList')


btnMovies.addEventListener('click', () => {
    //moviesList.innerHTML = `<li>${inception}</li><li>${theButterFlyEffect}</li><li>${eternalSunshineOfTheSM}</li><li>${blueVelvet}</li><li>${split}</li>`
    console.log('click!')
})

/*const strawberry = document.querySelector('.fruit-strawberry');
const banana = document.querySelector('.fruit-banana');
const kiwi = document.querySelector('.fruit-kiwi');

function handleFruitClick(event) {
  // Guardamos en una constante el elemento 
  // sobre el que pusimos el `listener`
  const selectedFruit = event.currentTarget;
  
  selectedFruit.classList.toggle('fruit--selected');
}

strawberry.addEventListener('click', handleFruitClick);
banana.addEventListener('click', handleFruitClick);
kiwi.addEventListener('click', handleFruitClick);*/