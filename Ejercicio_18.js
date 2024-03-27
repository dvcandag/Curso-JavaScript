/*
Ejercicio 18: Sumar intervalo del arreglo.

Crea una función denominada (sumarArreglo) que requiera tres argumentos: un arreglo de números, 
la posición inicial y la posición final. La función debe devolver la suma de todos los números 
dentro del rango especificado, incluyendo tanto la posición inicial como la posición final.

Nota: Se puede asumir que la posición inicial será menor o igual que la posición final, y 
que ambas estarán dentro de los límites del arreglo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"

Proporcionar comentarios explicativos. Tu solución debe entregarse en un archivo .js 
que se ejecute en el terminal mostrando como salida 18

*/

//SOLUCION

// Definición de la función sumarArreglo que suma los elementos dentro de un rango específico de un arreglo
function sumarArreglo(arr, inicio, fin) {
    //lnicializamos una variable para almacenar la suma
    let suma = 0;
    //recorrer el arreglo desde la posición de inicio hasta la posición de fin
    for (let i = inicio; i <= fin; i++) {
        // Sumar el elemento actual al total
        suma += arr[i];
    }
    //retornar la suma de los elementos dentro del rango especificado
    return suma;
}

//mostrando la salida:
const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Definir un arreglo
const inicio = 2; // Definir la posición de inicio
const fin = 5; // Definir la posición de fin
const resultado = sumarArreglo(arreglo, inicio, fin); // Llamar a la función sumarArreglo
console.log(resultado); // Imprimir el resultado de la suma
//salida esperada: 18 (3 + 4 + 5 + 6 = 18)