/*
Ejercicio 51: Manejo de Errores

Escribe una función llamada dividir que reciba dos números como argumentos y devuelva el resultado de dividir 
el primer número por el segundo. Asegúrate de manejar el caso en que el divisor sea cero.

1.- Si el divisor es cero, la función debe lanzar un error indicando que no se puede dividir por cero.
2.- Si no hay errores, la función debe devolver el resultado de la división.

A continuación, escribe un bloque try...catch para probar la función dividir con diferentes conjuntos de datos de entrada:

1.- Llama a la función dividir con dos números donde el divisor no sea cero y muestra el resultado en la consola.
2.- Llama a la función dividir con un divisor igual a cero y captura el error generado. Muestra un mensaje indicando 
    que ocurrió un error y la descripción del mismo en la consola.

Recuerda que el manejo de errores es una práctica fundamental en programación para garantizar la robustez y la 
fiabilidad de tus aplicaciones.

*/

// SOLUCIÓN

// Definición de la función dividir
function dividir(dividendo, divisor) {
    // Verificar si el divisor es cero
    if (divisor === 0) {
        // Si es cero, visualizará un error indicando que no se puede dividir por cero
        throw new Error('No se puede dividir por cero');
    }  
    // Retornar el resultado de la división
    return dividendo / divisor;
}

// Bloque try...catch para probar la función dividir con diferentes conjuntos de datos de entrada
try {
    // Caso 1: Llama a la función dividir con dos números donde el divisor no sea cero
    const resultado1 = dividir(10, 2);
    console.log("Resultado de la división:", resultado1);

    // Caso 2: Llama a la función dividir con un divisor igual a cero y captura el error generado
    const resultado2 = dividir(8, 0);
    console.log("Resultado de la división:", resultado2); // Esta línea no se ejecutará debido al error
} catch (error) {
    // Manejar el error mostrando un mensaje indicando que ocurrió un error y la descripción del mismo
    console.error("Ocurrió un error:", error.message);
}

