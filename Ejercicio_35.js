/*
Ejercicio 35: Tipos de datos - Cadenas de Texto (Strings)

Desarrolla un programa en JavaScript que solicite al usuario su nombre, edad y ciudad de residencia. Luego, utiliza
las template strings para mostrar un mensaje personalizado que incluya esta información.


Requisitos:

1.- Utilizar template strings para construir el mensaje personalizado.
2.- Asegúrate de que la primera letra del nombre esté en mayúscula y que la ciudad se muestre con la primera letra en mayúscula.
3.- Asegúrate de que el campo edad solo sea ingresado en números de dos caracteres.
4.- Incluye comentarios explicativos en tu código para facilitar su comprensión.
5.- Verifica que la solución se ejecute correctamente en cualquier navegador.
6.- Para evaluar tu solución, deberás explicar tu código y realizar pruebas de depuración.
*/

// SOLUCIÓN

// Solicitar al usuario su nombre
const nombre = prompt("Ingrese su nombre:");

// Solicitar al usuario su edad y validar que sea un número de 2 dígitos
let edad;
do {
    edad = prompt("Ingrese su edad (debe ser un número de 2 dígitos):");
} while (!/^\d{2}$/.test(edad)); // La expresión regular valida que la edad tenga exactamente 2 dígitos

// Convertir la edad a un número entero
const edadNumero = parseInt(edad, 10);

// Solicitar al usuario su ciudad de residencia
const ciudad = prompt("Ingrese su ciudad de residencia:");

// Convertir la primera letra del nombre a mayúscula
const nombreCapitalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1);

// Convertir la primera letra de la ciudad a mayúscula
const ciudadCapitalizada = ciudad.charAt(0).toUpperCase() + ciudad.slice(1);

// Crear el mensaje personalizado utilizando template strings
const mensaje = `¡Hola, ${nombreCapitalizado}! Tienes ${edadNumero} años y vives en la ciudad de ${ciudadCapitalizada}. ¡Bienvenido/a!`;

// Mostrar el mensaje en una ventana de alerta
alert(mensaje);
