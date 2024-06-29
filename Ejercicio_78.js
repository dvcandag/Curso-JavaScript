/*
Ejercicio 78: Objetos y Funciones del Lenguaje - Expresiones Regulares

Ejercicio 78: Verificación de correo electrónico
Desarrolla un programa que solicite al usuario ingresar su dirección de correo electrónico mediante 
un "prompt". Luego verifica si la dirección de correo electrónico es válida utilizando una expresión 
regular. Si el correo electrónico es válido, muestra un mensaje de felicitación utilizando un "alert". 
Si no, muestra un mensaje de error indicando que el correo electrónico no es válido utilizando un "alert".
*/

// SOLUCIÓN

// Solicitar al usuario que ingrese su dirección de correo electrónico
let email = prompt("Por favor, ingresa tu dirección de correo electrónico:");

// Expresión regular para verificar si la dirección de correo electrónico es válida
let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Verificar si la dirección de correo electrónico es válida
if (regex.test(email)) {
    alert("¡Felicidades! La dirección de correo electrónico es válida.");
} else {
    alert("Lo siento, la dirección de correo electrónico no es válida.");
}