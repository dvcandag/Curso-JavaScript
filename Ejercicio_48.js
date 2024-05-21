// Ejercicio 48: Ciclos (Loops)

// Calcular la suma de los números pares del 1 al 10 utilizando un ciclo.

let sumaPares = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}

console.log("La suma de los números pares del 1 al 10 es: " + sumaPares);