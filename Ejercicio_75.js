/*
Ejercicio 75: Objetos y Funciones del Lenguaje - prompt y alert

Ejercicio 75: Adivinanza
Desarrolla un programa que seleccione un número aleatorio entre 1 y 10. Luego solicita al usuario 
adivinar el número utilizando "prompt". Si el usuario adivina correctamente, muestra un mensaje de 
felicitación con un "alert". Si no, indica cuál era el número correcto utilizando un "alert".
*/

// Solución

// Generar un número aleatorio entre 1 y 10
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Solicitar al usuario que adivine el número
let adivinanza = prompt("Adivina el número entre 1 y 10:");

// Convertir la adivinanza a un número
adivinanza = Number(adivinanza);

// Verificar si el usuario adivinó correctamente
if (adivinanza === numeroAleatorio) {
    // Si adivinó correctamente, mostrar un mensaje de felicitación
    alert("¡Felicitaciones! Adivinaste el número correcto.");
} else {
    // Si no adivinó correctamente, mostrar el número correcto
    alert("Lo siento, no adivinaste. El número correcto era " + numeroAleatorio + ".");
}
