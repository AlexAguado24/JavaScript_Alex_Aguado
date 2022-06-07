let nombre = prompt("introduce tu nombre");
console.log(nombre);

let apellido = prompt("introduce tu apellido");
console.log(apellido);


let numero1 = prompt(`Por favor ${nombre + apellido} introduce el primer numero`,"numero");
console.log(numero1);

let numero2 = prompt(`Por favor ${nombre + apellido} introduce el primer numero`,"numero");
console.log(numero2);

let confirma = confirm('¿Quieres realizar las operaciones?');
if(confirma){
    console.log(`Multiplicacion: ${numero1 * numero2}`);
    console.log(`Division: ${numero1 / numero2}`);
    console.log(`Suma: ${Number(numero1) + Number(numero2)}`);
    console.log(`Resta: ${numero1 - numero2}`);
    console.log(`Modulo: ${numero1 % numero2}`);
} else {
    alert(`${nombre} chau`);
}