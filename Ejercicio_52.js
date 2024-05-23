/*
Ejercicio 52: break & continue

Dado un array de números, imprimir todos los números impares y detener la impresión cuando se encuentre un número mayor que 10.

*/

// SOLUCIÓN

// Definimos un array de números
const numeros = [1, 2, 3, 5, 8, 13, 21, 4, 6, 10, 12, 15];

// Recorremos el array utilizando un bucle for
for (let i = 0; i < numeros.length; i++) {
  // Comprobamos si el número actual es mayor que 10
  if (numeros[i] > 10) {
    // Si el número es mayor que 10, salimos del bucle con break
    break;
  }

  // Comprobamos si el número actual es par
  if (numeros[i] % 2 === 0) {
    // Si el número es par, saltamos a la siguiente iteración con continue
    continue;
  }

  // Si el número actual es impar y no es mayor que 10, lo imprimimos en la consola
  console.log(numeros[i]);
}
