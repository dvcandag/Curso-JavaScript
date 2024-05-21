// Ejercicio 49: Ciclos (Loops)

// Imprimir los elementos de un array al revés utilizando un ciclo.

// SOLUCIÓN

const array = [1, 2, 3, 4, 5];
const longitud = array.length;

console.log("Array original:", array);

console.log("Array al revés:");
for (let i = longitud - 1; i >= 0; i--) {
  console.log(array[i]);
}
