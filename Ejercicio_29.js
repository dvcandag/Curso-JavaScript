
/*
Ejercicio 29: Conteo de vocales dentro de una frase

Crea un programa que solicite al usuario ingresar una frase y luego muestre las vocales presentes en esa frase.

1.- Incluir comentarios explicativos en tu código para brindar claridad sobre su funcionamiento.
2.- La solución debe entregarse en un archivo .js que se ejecute correctamente en el navegador de tu elección.
3.- Utilizar la función `alert()` para mostrar un mensaje emergente en la pantalla.

*/


// SOLUCIÓN

// Solicitamos al usuario que ingrese una frase mediante la función prompt()
let frase = prompt("Por favor, ingresa una frase:");

// Convertimos la frase a minúsculas para facilitar la búsqueda de vocales
frase = frase.toLowerCase();

// Creamos una variable para almacenar las vocales encontradas
let vocalesEncontradas = "";

// Recorremos cada carácter de la frase
for (let i = 0; i < frase.length; i++) {
    // Verificamos si el carácter actual es una vocal
    if (frase[i] === 'a' || frase[i] === 'e' || frase[i] === 'i' || frase[i] === 'o' || frase[i] === 'u') {
        // Si es una vocal, la añadimos a la variable vocalesEncontradas
        vocalesEncontradas += frase[i] + " ";
    }
}

// Mostramos las vocales encontradas al usuario
alert("Las vocales presentes en la frase son: " + vocalesEncontradas);
