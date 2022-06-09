// funciones declaradas 
//funciones anonimas - funciones de flecha

// function nombre (parametros, parametros){
    //cuerpo
    //return dfghjk
//}


// let functionAnonima = function (parametros){}
// funcionAnonima(parametro)

//let flecha = (param1, param2) =>{ cuerpo }

//flecha (param1, param2)

/* function sumanumeros(operador1, operador2) {
    let suma = operador1+operador2;
    console.log(suma);
}

function sumaDefecto(oprUno, operDos = 0, operTres) { */
/*     if (operDos == undefined){
        operDos = 0
    } */
/*     let suma = oprUno+operDos;
    console.log(suma);
    console.log(operTres);
}

function functionSinP() {
    console.log("funcion llamada");
    for (let index = 0; index < arguments.length; index++) {
        console.log(arguments[index]);
        
    }
}

function funcionReturn(op1, op2) {
    let suma = op1 + op2;
    console.log(suma);
    return suma;
    
}

functionSinP(1,2,3,4,5,6,7,8,9,10); */



/* sumanumeros(5,10);
sumanumeros(10,60,67)
sumaDefecto(1,3);
sumaDefecto(7);*/


let num1 = Number(prompt("introduce el primer numero"));
console.log(num1);
let num2 = Number(prompt("introduce el segundo numero"));
console.log(num2);

function operaciones(num1, num2) {
    alert(`Suma = ${num1+num2}
    , Resta = ${num1-num2}
    , Multi = ${num1*num2}
    , Division = ${num1/num2}`);
}

let frase = prompt("Introduce una frase");
let letra = prompt("Introduce una letra");
let contador = 0;
if (frase.includes(letra)){
    frase.split('').forEach(element => {
        if (element == letra){
            contador++;
        }
    });
    alert(`La letra ${letra} esta incluida y aparece`)
}

function analizarLetra(fraseParam, letraParam) {
    let contador = 0;
if (fraseParam.includes(letra)){
    frase.split('').forEach(element => {
        if (element == letra){
            contador++;
        }
    });
    alert(`La letra ${letra} esta incluida y aparece`)
}
}






