let boton_agregar = document.querySelector("#boton_agregar");
let input_agregar = document.querySelector("#texto_li");
boton_agregar.addEventListener("click", element => {
  console.log(element);
});

input_agregar.addEventListener("keydown", () => {
  console.log(input_agregar.value);
});
//declarar la funcion fuera (va a ser reutilizada?)
//o dentro(solo ejecutada por el evento) --> anonima
