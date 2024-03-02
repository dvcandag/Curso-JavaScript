
/*Escribe un fragmento de código que implemente una función llamada (calcularPromedio)
que tome una lista de números como parámetro y devuelva el promedio de esos números. 
Utiliza un bucle para recorrer la lista y calcular la suma de los elementos
(let numeros = [12, 8, 17, 6, 9, 20];)

Resultado esperado:
Escribe el código necesario para calcular el promedio de la lista de números 
proporcionada y muestra el resultado por consola.*/

function calcularPromedio(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}

let numeros = [12, 8, 17, 6, 9, 20];
console.log("El promedio de los números es:", calcularPromedio(numeros));
