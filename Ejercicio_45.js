/*
Ejercicio 45: Estructuras de Control - Condicionales

Crea un programa que solicite al usuario ingresar un número. El programa debe determinar si el número 
es positivo, negativo o cero, y mostrar un mensaje apropiado en cada caso.

Requisitos:
1.- Incluir comentarios explicativos en tu código para brindar claridad sobre su funcionamiento.
2.- La solución debe entregarse en un archivo .js que se ejecute correctamente.
3.- Utilizar las etequietas html para mostrar resultados en la pantalla.

*/


// SOLUCIÓN

// Solicitamos al usuario que ingrese un número
let numero = prompt("Ingrese un número:");

// Convertimos el valor ingresado a un número
numero = parseFloat(numero);

// Verificamos si el número es positivo, negativo o cero
if (numero > 0) {
    // Si el número es mayor que cero, es positivo
    document.write("El número ingresado es positivo.");
} else if (numero < 0) {
    // Si el número es menor que cero, es negativo
    document.write("El número ingresado es negativo.");
} else {
    // Si el número es igual a cero, es cero
    document.write("El número ingresado es cero.");
}
