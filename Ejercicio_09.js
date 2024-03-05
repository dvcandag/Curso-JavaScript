/*
Ejercicio 09: escribir un programa para calcular una serie de números comprendidos entre dos valores dados. 
En este caso, queremos que el programa muestre en pantalla todos los números entre un valor inferior y un valor superior, inclusive.
Para garantizar una experiencia interactiva, solicitamos al usuario que ingrese el valor inferior y el valor superior.


Ahora te desafio a completar el desarrollo del programa. Utiliza JavaScript para implementar la lógica necesaria. 
Recuerda hacer uso de funciones con parámetros para lograrlo.
*/

function mostrarComprendidos(inicio, fin) {
    for (let f = inicio; f <= fin; f++) {
        document.write(f + ' ');
    }
}

let valor1 = parseInt(prompt('ingrese un valor inferior:'));
let valor2 = parseInt(prompt('ingrese un valor superior:'));
mostrarComprendidos(valor1, valor2);