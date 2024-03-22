/*
Ejercicio 21: Encontrar números pares en un arreglo

Desarrollar una función denominada 'pares' que acepte una matriz de números y 
devuelva una nueva matriz que contenga únicamente los números pares.

Incluir dos ejemplos del caso y agregar comentarios descriptivos. 
La solución debe ser presentada en un archivo .js y ejecutarse exitosamente
en la terminal del entorno de desarrollo.

*/

//SOLUSION

// Definición de la función "pares" que encuentra números pares en un arreglo 
function pares(arr) {
    // Crear una nueva matriz para almacenar los números pares
    let paresArray = [];

    // Iterar sobre cada elemento del arreglo proporcionado
    for (let num of arr) {
        // Verificar si el número es par
        if (num % 2 === 0) {
            // Si es par, agregarlo a la matriz de números pares
            paresArray.push(num);
        }
    }

    // Devolver la matriz que contiene los números pares
    return paresArray;
}

// Ejemplos de uso de la función 'pares'
console.log(pares([1, 2, 3, 4, 5, 6])); // se imprime: [2, 4, 6]
console.log(pares([10, 11, 12, 13, 14])); // se imprime: [10, 12, 14]
