//node 
//nodeList

//buscar una cosa find()
let botonAgregar = document.querySelector("button");
console.log(botonAgregar);
// class
let elementosSegundo = document.querySelector(".list-group-item")
//id
let listaPrimeros = document.querySelector("#lista_primeros");
console.log(listaPrimeros);

//buscar muchas cosas findAll()

elementosSegundo = document.querySelectorAll('.list-group-item')
elementosSegundo.forEach(element => {
    console.log(element);
    
});

// elemento#id 
//elemento.class
//elemento#id li
//elemento#id li[propiedad="valor"]
//elemento#id li[propiedad="valor"]::pseudoclase
let elementosPrimero = document.querySelectorAll("#lista_primeros li");


// id
let boton = document.querySelectorAll();

//tag
let listas = document.que