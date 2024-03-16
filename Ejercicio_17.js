/*
Ejercicio 17:
"Desarrollar una función denominada (removerCeros) la cual acepta un arreglo 
de números como argumento y devuelve un nuevo arreglo que excluye todos 
los ceros (0) del arreglo original [4, 0, 5, 0, 2, 0, 5]"

Proporcionar comentarios explicativos. Tu solución debe entregarse en un archivo .js 
que se ejecute en el terminal mostrando la salida: [4, 5, 2, 5]
*/



//SOLUCION

// Definición de la función (removerCeros) que elimina los ceros de un arreglo
function removerCeros(arr) {
// Utiliza el método filter para crear un nuevo arreglo que excluya los ceros
return arr.filter(num => num !== 0);
}

// mostrando la salida:
const arregloOriginal = [4, 0, 5, 0, 2, 0, 5]; // Arreglo original que contiene ceros
const arregloSinCeros = removerCeros(arregloOriginal); // Llama a la función removerCeros
console.log(arregloSinCeros); // Imprime el nuevo arreglo sin los ceros: [4, 5, 2, 5]
