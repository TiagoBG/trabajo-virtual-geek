'use strict';

const job = 'developer';
let objeto = {};

objeto.firstName = 'Ricardo';
objeto["lastName"] = 'De La Cruz';
objeto["age"] = 28;
objeto.job = job;

console.log(objeto)

objeto['firstName'] = 'Carlos'
objeto.age++

    console.log(objeto)