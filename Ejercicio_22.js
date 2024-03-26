/*
Ejercicio 22: Traducir números a palabras

Crear una función denominada "Numeros_a_Palabras" que acepte un arreglo de números, 
donde cada número se encuentra en el rango de 0 a 9, y devuelva un nuevo arreglo que contenga 
la versión en palabras de cada número."

Proporcionar un ejemplo agregar comentarios explicativos de su codificación. 
Tu solución debe entregarse en un archivo .js ejecutandose satisfactoriamente 
en el terminal de su entorno de desarrollo.
*/

//SOLUCION

// Definición de la función 'Numeros_a_Palabras' que convierte números a palabras
function Numeros_a_Palabras(numeros) {
    // Array que contiene las palabras correspondientes a los números del 0 al 9
    const palabras = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];

    // Array para almacenar las versiones en palabras de los números
    let palabrasNumeros = [];

    // Iterar sobre cada número en el arreglo proporcionado
    for (let num of numeros) {
        // Verificar si el número está en el rango de 0 a 9
        if (num >= 0 && num <= 9) {
            // Obtener la palabra correspondiente al número y agregarla al arreglo
            palabrasNumeros.push(palabras[num]);
        } else {
            // Si el número está fuera del rango, agregar un mensaje de error
            palabrasNumeros.push("Número fuera de rango");
        }
    }

    // Devolver el arreglo con las palabras correspondientes a los números
    return palabrasNumeros;
}

// Ejemplo de la función (Numeros_a_Palabras) con un arreglo de números
const numeros = [1, 3, 5, 7, 9];//números a conviertir a palabras
console.log(Numeros_a_Palabras(numeros)); // Se imprimiran: ["uno", "tres", "cinco", "siete", "nueve"]
