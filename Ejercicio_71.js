/*
Ejercicio 71: Objetos y Funciones del Lenguaje - alert, confirm y prompt

Desarrolla un programa que solicite al usuario su nombre mediante un prompt y luego muestre 
un saludo personalizado utilizando un alert.

*/

// SOLUCIÓN

// Ejercicio 71: Saludo personalizado
let nombre = prompt("Por favor, ingresa tu nombre:");
if (nombre) {
    alert("Hola, " + nombre + "! Bienvenido/a.");
} else {
    alert("No ingresaste tu nombre.");
}

//Ejecutar desde el navegador