/*
Ejercicio 23: Traducir palabras a números

Crear una función denominada 'Palabras_a_Numeros' que acepte un arreglo de cadenas y devuelva un nuevo arreglo 
traduciendo cada palabra a su equivalente numérico del 0 al 9. En caso de que una palabra no sea un número, se traducirá como -1.

Proporcionar un ejemplo agregar comentarios explicativos de su codificación. 
Tu solución debe entregarse en un archivo .js ejecutandose satisfactoriamente 
en el terminal de su entorno de desarrollo.

*/


//SOLUCION
// Definición de la función 'Palabras_a_Numeros' que traduce palabras a números
function Palabras_a_Numeros(palabras) {
    // Objeto que mapea palabras a números del 0 al 9
    const numeros = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    // Array para almacenar las versiones numéricas de las palabras
    let numerosPalabras = [];

    // Iterar sobre cada palabra en el arreglo proporcionado
    for (let palabra of palabras) {
        // Convertir la palabra a minúsculas para hacer coincidir con las claves del objeto
        let palabraMinuscula = palabra.toLowerCase();
        
        // Verificar si la palabra está en el objeto 'numeros'
        if (palabraMinuscula in numeros) {
            // Obtener el número correspondiente a la palabra y agregarlo al arreglo
            numerosPalabras.push(numeros[palabraMinuscula]);
        } else {
            // Si la palabra no es un número, agregar -1 al arreglo
            numerosPalabras.push("No sé traducir números > 9 "); // Indica que la palabra no será traducida (Números de dos caracteres)
        }
    }

    // Devolver el arreglo con los números correspondientes a las palabras
    return numerosPalabras;
}

// Ejemplo de la función 'Palabras_a_Numeros' con un arreglo de palabras
const palabras = ["uno", "tres", "cinco","cero", "siete", "nueve", "diez", "trece"];
console.log(Palabras_a_Numeros(palabras)); // Se imprimiran: [1, 3, 5, 0, 7, 9]
