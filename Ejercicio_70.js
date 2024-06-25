/*
Ejercicio 70: Objetos y Funciones del Lenguaje - Operador de Cortocircuito

Desarrolla una función que utilice el operador de cortocircuito para calcular el promedio 
de un arreglo de números enteros positivos. La función debe asegurarse de que el arreglo no esté vacío y 
que todos sus elementos sean números enteros positivos. En caso de cumplirse estas condiciones, debe 
devolver el promedio de los números. Si alguna condición no se cumple, la función deberá devolver NaN.

*/

// SOLUCIÓN

function calcularPromedio(arr) {
    // Verifica que el arreglo no esté vacío y que todos los elementos sean números enteros positivos
    if (arr.length === 0 || !arr.every(num => Number.isInteger(num) && num > 0)) {
        return NaN;
    }

    // Calcula la suma de los elementos del arreglo
    let suma = arr.reduce((acc, num) => acc + num, 0);
    
    // Calcula el promedio
    let promedio = suma / arr.length;

    return promedio;
}

// Resultados esperados
console.log(calcularPromedio([1, 2, 3, 4, 5]));  // Salida: 3
console.log(calcularPromedio([]));  // Salida: NaN
console.log(calcularPromedio([1, 2, -3, 4, 5]));  // Salida: NaN
console.log(calcularPromedio([1, 2, 3.5, 4, 5]));  // Salida: NaN
console.log(calcularPromedio([10, 20, 30, 40, 50]));  // Salida: 30
