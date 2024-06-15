/*
Ejercicio 69: Objetos y Funciones del Lenguaje - Operador de Cortocircuito

Implementa una función que utilice el operador de cortocircuito para determinar si una cadena de texto 
es válida. La función debe devolver true si la cadena no es nula ni está indefinida, y además tiene al menos una 
longitud de 1 carácter. De lo contrario, debe devolver false."

*/

// SOLUCIÓN

function validarCadena(cadena) {
    // Utilizamos el operador de cortocircuito (&&) para verificar las condiciones
    return cadena && cadena.length > 0;
}

// Ejemplos:
console.log(validarCadena("Hola")); // true
console.log(validarCadena("")); // false
console.log(validarCadena(null)); // false
console.log(validarCadena(undefined)); // false
console.log(validarCadena(" ")); // true (espacio cuenta como carácter)
