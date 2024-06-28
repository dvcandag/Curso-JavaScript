/*
Ejercicio 74: Objetos y Funciones del Lenguaje - prompt y alert

Verificación de Edad


Desarrolla un programa que solicite al usuario su edad mediante un "prompt" y luego verifique si es 
mayor de edad (18 años o más). Muestra un mensaje utilizando un "alert" indicando si es mayor de edad o no.

*/

// SOLUCIÓN

// Solicitar la edad al usuario mediante un prompt
let edad = prompt("Por favor, introduce tu edad:");

// Convertir la edad ingresada a un número
edad = Number(edad);

// Verificar si el usuario es mayor de edad
if (edad >= 18) {
    // Si es mayor de edad, mostrar un mensaje de alerta
    alert("Eres mayor de edad.");
} else {
    // Si no es mayor de edad, mostrar un mensaje de alerta
    alert("No eres mayor de edad.");
}
