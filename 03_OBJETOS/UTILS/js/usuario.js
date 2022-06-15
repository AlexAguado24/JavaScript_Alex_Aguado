class usuario {
    nombre;
    apellido;
    edad;
    conocimientos;
    empresa;

    constructor(nombre,apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.empresa = empresa;
        this.conocimientos = [];
        }

    añadirConocimiento(){

    }

    mostrarDatos(){
        console.log(this.nombre);
        console.log(this.apellido);
        console.log(this.edad);
    }

    getNombre(){
        return this.nombre
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

}


/* let usuarioEjemplo = new usuario('Borja','Martin',38);
usuarioEjemplo.mostrarDatos; */


