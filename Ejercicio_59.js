/*
Ejercicio 59: Parámetros REST & Operador Spread

Implementa una función que, mediante el uso de parámetros REST, pueda recibir un número variable de strings que representan 
nombres de estudiantes. Esta función deberá procesar estos nombres y devolver un mensaje que los presente ordenados alfabéticamente, 
junto con la cantidad total de estudiantes recibidos.
*/

// SOLUCIÓN


// Función para procesar nombres de estudiantes
function procesarNombres(...nombres) {
    // Ordenar los nombres alfabéticamente
    const nombresOrdenados = nombres.sort();
    // Obtener la cantidad total de estudiantes
    const cantidadEstudiantes = nombres.length;
    // Crear el mensaje con los nombres ordenados y la cantidad total de estudiantes
    const mensaje = `Los nombres de los estudiantes son: ${nombresOrdenados.join(', ')}. Total de estudiantes: ${cantidadEstudiantes}.`;
    // Devolver el mensaje
    return mensaje;
}

// Llamada directa a la función y resultado impreso en la consola
console.log(procesarNombres("Juan", "María", "Carlos", "Ana"));