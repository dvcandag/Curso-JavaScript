/*
Ejercicio 58: Parámetros REST & Operador Spread

Implementar una función que acepte un número variable de argumentos numéricos y retorne un array que contenga dichos números 
ordenados de manera ascendente, utilizando un algoritmo de ordenamiento eficiente. El resultado debe reflejar una secuencia 
donde los valores sean crecientes de menor a mayor

*/

// SOLUCIÓN

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

(function() {
    const numerosOrdenados = quickSort([9, 3, 6, 1, 8, 2, 5]);
    console.log("Números ordenados:", numerosOrdenados);
})();
