
let baraja = [];

function iniciarBaraja(params) {
let palos = ["T","C","P","R"]
for (let i = 0; i < palos.length; i++) {
    for (let j = 1; j < 14; j++) {
        if (j == 11){
            baraja.push("J"+palos[i]);
        } else if (j == 12){
            baraja.push("Q"+palos[i]);
        } else if (j == 13){
            baraja.push("K"+palos[i]);
        } else {
            baraja.push(j+palos[i]);
        }
    }
}
}

function mostrarBaraja() {
    console.log(baraja);
}

iniciarBaraja();
mostrarBaraja();

baraja = _.shuffle(baraja);
mostrarBaraja();

let aleatorio = Math.random()* 53;
let carta = baraja[aleatorio];
console.log(carta);


function calcularValor(carta) {
    return carta.substring(0,carta.length-1);
}

console.log(calcularValor);

