//aritmeticos
let numero1 = 6;
let numero2 = 10;

let suma = numero1 + numero2;
suma += 10;

console.log(`La suma de las variables es ${numero1 + numero2}`);
console.log(`La multiplicacion de las variables es ${numero1 * numero2}`);
console.log(`La resta de las variables es ${numero1 - numero2}`);
console.log(`La division de las variables es ${numero1 / numero2}`);
console.log(`El modulo de las variables es ${numero1 % numero2}`);

console.log(`El modulo de las variables es ${typeof (numero1 % numero2)}`);

//operadores comprobacion

numero1 = 11;
numero2 = 10;

let mayorQue = numero1 > numero2;
console.log(mayorQue);
let mayorIgual = numero1 >= numero2;
console.log(mayorIgual);

let menorQue = numero1 < numero2;
console.log(menorQue);

let menorIgual = numero1 <= numero2;
console.log(menorIgual);

let diferente = numero1 != numero2;
console.log(diferente);
console.log("igual");
numero1 = 4;
numero2 = "4";

let igual = numero1 === numero2;
console.log(igual);

alert(`Bienvenido ${nombre}`);
/*let confirmacion = confirm('¿Seguro que quieres continuar?');
console.log(confirmacion);*/

let introduccion = prompt(`Por favor ${nombre} introduce un dato a trabajar`, "parametro por defecto");
console.log(introduccion);


