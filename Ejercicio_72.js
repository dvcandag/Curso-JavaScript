/*
Ejercicio 72: Objetos y Funciones del Lenguaje - alert y confirm

Desarrolla un programa que solicite confirmación al usuario para borrar un archivo utilizando "confirm". Si el usuario confirma, 
muestra un mensaje de "Archivo borrado" con un "alert". Si el usuario cancela, muestra un mensaje de "Operación cancelada" con un "alert".

*/

// SOLUCIÓN

// Ejercicio 2: Confirmación de Borrado
let confirmacion = confirm("¿Estás seguro de que deseas borrar este archivo?");
if (confirmacion) {
    alert("Archivo borrado.");
} else {
    alert("Operación cancelada.");
}
