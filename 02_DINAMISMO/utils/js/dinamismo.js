// HTMLELEMENT --> individual (1) find()
// nodelist <htmlElements> --> conjunto (1 o mas) findAll

// tag
let listas = document.getElementsByTagName("ul");
let elementosListas = document.getElementsByTagName("li");
console.log(listas);
//console.log(elementosListas[0].innerText);
//elementosListas[0].innerText = "Modificacion";

let arrayPalabras = ['palabra1', 'palabra2','palabra3','palabra4','palabra5'];

/* for (let index = 0; index < elementosListas.length; index++) {
    console.log(elementosListas[index].innerText);
}  */ 

/* for (let index = 0; index < arrayPalabras.length; index++) {
    elementosListas[index].innerText = arrayPalabras[index];
} */

/* setTimeout(() => {
    for (let index = 0; index < arrayPalabras.length; index++) {
        elementosListas[index].innerText = arrayPalabras[index];
    }
}, 5000); */


//class

let asignaturaSegundo = document.getElementsByClassName("List-group-item");

console.log(asignaturaSegundo);

//id

let  boton = document.getElementById("boton_agregar")
console.log(boton);

