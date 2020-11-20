'use strict';

const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

document.querySelector('#mascotas').innerHTML = `<li>Esta es ${firstDogName}</li><img src=${firstDogImage} alt="Perrito uno"><li>Esta es ${secondDogName}</li><img src=${secondDogImage} alt="Perrito dos"><li>Esta es ${thirdDogName}</li><img src=${thirdDogImage} alt="Perrito tres">`