console.log("Archivo de variables cargado");
//let --> ambito global y de metodo
//var --> ambito global --> no se usa
//const --> constantes

const DNI = "123456X"; //
let nombre = "Borja";
let nombreObj = new String('Elemento');
let apellido;
let edad = 37;
let carnet = true;
let fecha = new Date();

apellido = "Martin";

// comprobacion de tipos
console.log(typeof nombre);
console.log(typeof nombreObj);
console.log(typeof apellido);
console.log(typeof edad);
console.log(typeof carnet);
console.log(typeof fecha);

console.log(isNaN (nombre));
console.log(isNaN (edad));

// salidas por consola

//Mi nombre es xxx zzz y tengo cc años
console.log(
    "Mi nombre es "+ nombre + " " +apellido+" y tengo "+edad+" años"
    );

console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);



