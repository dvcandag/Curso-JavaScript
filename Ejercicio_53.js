/*
Ejercicio 53: break & continue

Dado un array de números, encontrar el primer número que sea divisible entre 5 y mayor que 100. Si no se encuentra
 ningún número que cumpla esta condición, imprimir "No se encontraron números que cumplan los criterios".
 
 */

// SOLUCIÓN

const numeros = [80, 95, 105, 110, 115, 120, 125, 130, 135, 140];

let numeroEncontrado = null; // Inicializamos una variable para almacenar el número que cumple con las condiciones

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] <= 100) {
    continue; // Si el número no es mayor que 100, pasamos al siguiente número del array
  }

  if (numeros[i] % 5 === 0) {
    numeroEncontrado = numeros[i]; // Si encontramos un número divisible entre 5 y mayor que 100, lo asignamos a la variable
    break; // Salimos del bucle una vez que encontramos el número
  }
}

if (numeroEncontrado !== null) {
  console.log("El primer número divisible entre 5 y mayor que 100 es:", numeroEncontrado);
} else {
  console.log("No se encontraron números que cumplan los criterios."); // Si no se encuentra ningún número que cumpla las condiciones, se imprime este mensaje
}
