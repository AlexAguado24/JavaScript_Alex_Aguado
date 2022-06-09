let numeros = [1,2,3,4,5,6,7,8,9,10];
let posicion = 0;
while (posicion < numeros.length) {
    console.log(numeros[posicion]);
    posicion++;
}

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}

numeros.forEach(element => {
    console.log(element);
});

let arrayAleatorio = [];
for (let index = 0; index < 20; index++) {
    arrayAleatorio[index] = Math.random();
    
}

arrayAleatorio.forEach((element)=>{
    console.log(element);
});

