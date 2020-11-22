'use strict';

const contador = {
    minimo: 0,
    maximo: 10,
    actual: 3,
    inicial: 2,
    correr: function() {
        if (this.actual < this.maximo) {
            this.actual++;
            console.log(this.actual);
        } else {
            this.actual = this.inicial;
            console.log(this.actual);
        }
    },
    retroceder: function() {
        if (this.actual > this.minimo) {
            this.actual--;
            console.log(this.actual);
        } else {
            this.actual = this.inicial;
            console.log(this.actual);
        }
    },
    restablecer: function() {
        this.actual = 0
        console.log(this.actual);
    }
}

contador.restablecer(); //lo pone en 0
contador.correr(); //cuando carga la página es 4, cuando se ejecuta llega hasta 10 y regresa a 2
contador.retroceder(); //parte del numero que haya luego oscila entre 2 y 0