/*
Ejercicio 30: divisores de un número

Crear un programa que muestre en la pantalla los divisores de un número específico.


1.- Incluir comentarios explicativos en tu código para brindar claridad sobre su funcionamiento.
2.- La solución debe entregarse en un archivo .js que se ejecute correctamente en el navegador de tu elección.
3.- Utilizar las etequietas html para mostrar resultados en la pantalla.

*/

// SOLUCIÓN

// Solicitamos al usuario que ingrese un número mediante la función prompt()
let numero = parseInt(prompt("Por favor, ingresa un número:"));

// Creamos una variable para almacenar los divisores del número
let divisores = [];

// Recorremos todos los números desde 1 hasta el número ingresado por el usuario
for (let i = 1; i <= numero; i++) {
    // Verificamos si el número es divisor del número ingresado por el usuario
    if (numero % i === 0) {
        // Si es divisor, lo añadimos a la lista de divisores
        divisores.push(i);
    }
}

// Creamos un mensaje con los divisores encontrados
let mensaje = "Los divisores de " + numero + " son: " + divisores.join(", ");

// Mostramos el mensaje en la pantalla utilizando las etiquetas HTML
document.write("<h2>" + mensaje + "</h2>");