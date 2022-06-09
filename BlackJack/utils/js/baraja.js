
let palos = ["T","C","P","R"]
let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let baraja = [];

function iniciarBaraja(params) {
for (let i = 0; i < palos.length; i++) {
    for (let j = 1; j < 14; j++) {
        if (j == 11){
            baraja.push("j"+palos[i]);
        } else if (j == 12){
            baraja.push("q"+palos[i]);
        } else if (j == 13){
            baraja.push("k"+palos[i]);
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