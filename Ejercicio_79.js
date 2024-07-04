/*
Ejercicio 79: Objetos y Funciones del Lenguaje - Expresiones Regulares

Ejercicio 79: Verificación de número de teléfono
Desarrolla un programa que solicite al usuario ingresar su número de teléfono mediante 
un "prompt". Luego verifica si el número de teléfono es válido utilizando una expresión 
regular. Un número de teléfono válido debe tener exactamente 9 dígitos y comenzar con el 
número 9. Si el número de teléfono es válido, muestra un mensaje de felicitación utilizando 
un "alert". Si no, muestra un mensaje de error indicando que el número de teléfono 
no es válido utilizando un "alert".
*/

// SOLUCIÓN 

// Solicita al usuario ingresar su número de teléfono
let telefono = prompt("Por favor, ingrese su número de teléfono:");

// Expresión regular para verificar el número de teléfono
let regexTelefono = /^9\d{8}$/;

// Verificar si el número de teléfono es válido
if (regexTelefono.test(telefono)) {
    alert("¡Felicitaciones! Su número de teléfono es válido.");
} else {
    alert("Error: El número de teléfono no es válido. Debe tener exactamente 9 dígitos y comenzar con el número 9.");
}