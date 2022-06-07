// if if else switch while do while for foreach (especial) for of for on break go to

// if if else 
//let acierto = true;
/* if (acierto){
    console.log("es true");
} else {
    console.log("es false");
} */


//let nota = 5;
/* if (nota >= 5) {
    console.log("examen aprobado");
    
} else {
    console.log("examen suspenso");
    
} */

// if ternario

// condicion ? true : false

//acierto ? console.log('examen aprobado') : console.log("examen suspenso");

// if 
/* acierto & console.log("examen aprobado");

let nota = 6;

switch (nota) {
    case 1:
        console.log("dato 1");
        break;
    case 2:
        console.log("dato 2");
        break;
    case 3:
        console.log("dato 3");
        break;
    default:
        console.log("dato incorrecto");
        break;
} */

let numero1 = prompt(`Por favor introduce el primer numero`);
console.log(numero1);

let numero2 = prompt(`Por favor introduce el segundo numero`);
console.log(numero2);

/* isNaN (Number(numero1)) ? console.log("es un NAN") : console.log("es un numero");
isNaN (Number(numero2)) ? console.log("es un NAN") : console.log("es un numero"); */

if (!isNAN(Number(numero1))&& !isNAN(Number(numero2)) && numero1 > 0 && numero2 >0) {
    let operacion = prompt("Introduce la operacion");
    switch (operacion) {
        case "suma":
            alert(`La suma entre ${numero1} y ${numero2} es ${numero1+numero2}`);
            break;
        case "resta":
            alert(`La resta entre ${numero1} y ${numero2} es ${numero1-numero2}`);
            break;
        case "division":
            alert(`La division entre ${numero1} y ${numero2} es ${numero1/numero2}`); 
            break;
        case "suma":
            alert(`La suma entre ${numero1} y ${numero2} es ${numero1+numero2}`); 
            break;
        default:
            alert("operacion desconocida");
            break;
    }
} else {
    console.log("Alguno de los datos son incorrectos");
}






