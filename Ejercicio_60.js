/*
Ejercicio 60: Parámetros REST & Operador Spread

Desarrolla una función que, utilizando parámetros REST, acepte un número variable de arrays numéricos como argumentos. Luego, utilizando 
el operador spread, combine todos los elementos de estos arrays en uno solo. Finalmente, la función deberá devolver un nuevo array que 
contenga todos los números ordenados de manera ascendente.
*/

// SOLUCIÓN 

// Función para combinar y ordenar arrays de números
function combinarYOrdenar(...arrays) {
    // Combinar todos los elementos de los arrays en uno solo usando el operador spread
    const numerosCombinados = [].concat(...arrays);
    // Ordenar los números de manera ascendente
    const numerosOrdenados = numerosCombinados.sort((a, b) => a - b);
    // Devolver el array de números ordenados
    return numerosOrdenados;
}

// Llamada directa a la función y resultado impreso en la consola
console.log(combinarYOrdenar([3, 7, 1], [9, 2, 5], [4, 8, 6])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
