let boton_agregar = document.querySelector("#boton_agregar");
let input_agregar = document.querySelector("#texto_li");
let contar_pulsaciones = document.querySelector("span");
let contador = 0;
boton_agregar.addEventListener("click", element => {
  //console.log(element);
  //let contenido = input_agregar.value;
  //console.log(contenido);
  // agregar nodos
  /*let lista = document.querySelector("#lista_primeros");
  let nodoLi = document.createElement("li");
  nodoLi.innerText = contenido;
  //nodoLi.classList.add("list-group-item");
  nodoLi.setAttribute('id','valor')
  lista.appendChild(nodoLi);*/
  // modificar html
  let contenido = input_agregar.value;
  if (contenido == undefined) {
    console.log("Por favor, añade el nuevo contenido");
    
  } else {
    let lista = document.querySelector("#lista_primeros");
    lista.innerHTML = `${lista.innerHTML} <li class="list-group-item">${contenido}</li>`;
  }

});

/*input_agregar.addEventListener("keyup", event => {
  console.log(input_agregar.value);
  contador++;
  contar_pulsaciones.innerText = contador;
});*/

//declarar la funcion fuera (va a ser reutilizada?)
//o dentro(solo ejecutada por el evento) --> anonima
