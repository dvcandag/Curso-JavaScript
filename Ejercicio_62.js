/*
Ejercicio 62: Arrow Functions (Funciones de flecha)

Desarrolla una función llamada areaCirculo utilizando arrow functions. 
Esta función debe tomar el radio de un círculo como parámetro y devolver 
el área correspondiente del círculo

La función debe realizar las siguientes tareas:

1.- Validar que el radio proporcionado sea un número positivo. Si el radio 
    no es válido, la función debe devolver un mensaje de error: "Error: El radio debe ser un número positivo."
2.- Calcular el área del círculo utilizando la fórmula mencionada.
3.- Devolver el área calculada.
*/

// SOLUCIÓN

// Definición de la función areaCirculo utilizando Arrow Function
const areaCirculo = (radio) => {
    // Validación del parámetro de entrada
    if (typeof radio !== 'number' || radio <= 0) { // Comprueba si el radio no es un número o es menor o igual a cero
        return "Error: El radio debe ser un número positivo."; // Retorna un mensaje de error si el radio no es válido
    }

    // Constante Pi
    const pi = Math.PI; // Definición de la constante pi usando la propiedad Math.PI, que contiene el valor de pi (aproximadamente 3.14159)

    // Cálculo del área del círculo
    const area = pi * Math.pow(radio, 2); // Calcula el área del círculo usando la fórmula A = π * r^2

    return area; // Retorna el área calculada
}
