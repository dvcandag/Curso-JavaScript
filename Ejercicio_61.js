/*
Ejercicio 61: Arrow Functions

Desarrollar una función (filtrarNumerosPares) que tome un array de números como entrada y devuelva un nuevo array que contenga 
solo los números pares del array original. 

Utilizar Arrow Functions en tu solución.

*/

// SOLUCIÓN

// Definición de la función filtrarNumerosPares utilizando Arrow Function
const filtrarNumerosPares = (numeros) => numeros.filter(numero => numero % 2 === 0);

// Ejemplo de uso de la función con un array de prueba
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarNumerosPares(numeros);
console.log(numerosPares); // resultado: [2, 4, 6, 8, 10]
