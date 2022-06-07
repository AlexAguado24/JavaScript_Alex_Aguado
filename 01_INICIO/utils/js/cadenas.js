let frase = "Esto es un string";
/* console.log(frase);
console.log(frase.charAt(0).toLowerCase()); */
frase = frase.replaceAll(' ','');
let vocales = 0;
let consonantes = 0;

for (let index = 0; index < frase.length; index++) {
    
    if (frase.charAt(index).toLowerCase() == "a" || frase.charAt(index).toLowerCase() == "e" 
    || frase.charAt(index).toLowerCase() == "i" ||
    frase.charAt(index).toLowerCase() == "o" || frase.charAt(index).toLowerCase() == "u"){
        vocales++;
    } else {
        consonantes++;
    }
}

alert(`En la frase hay ${vocales} vocales y ${consonantes} consonantes`);

