/*
Ejercicio 40: Tipos de datos - Arreglos (Arrays)

Calculadora de gastos Semanales

Desarrolla una aplicación que permita al usuario calcular sus gastos semanales. La aplicación debe solicitar 
al usuario que ingrese los gastos de cada día de la semana y luego mostrar el total de gastos al finalizar la semana.

Requisitos:

1.- Utiliza un arreglo para almacenar los gastos de cada día de la semana.
2.- Implementa una función para calcular el total de gastos. Esta función debe tomar como parámetro el arreglo de 
    gastos y sumar todos los valores.
3.- Muestra al usuario un mensaje que solicite ingresar los gastos para cada día de la semana.
4.- Después de que el usuario ingrese los gastos para cada día, calcula y muestra el total de gastos al finalizar la semana.
*/

// Función para calcular el total de gastos
function calcularTotalGastos(gastosSemana) {
    let total = 0;
    // Iteramos sobre el arreglo de gastos y sumamos cada valor
    for (let i = 0; i < gastosSemana.length; i++) {
        total += gastosSemana[i];
    }
    return total;
}

// Arreglo para almacenar los gastos de cada día de la semana
let gastosSemana = [];

// Mensaje que solicita al usuario ingresar los gastos para cada día de la semana
alert("Por favor, ingresa tus gastos para cada día de la semana:");

// Iteramos sobre los días de la semana para solicitar los gastos al usuario
const diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
for (let i = 0; i < diasSemana.length; i++) {
    let gastoDia = parseFloat(prompt("Ingresa tus gastos para el " + diasSemana[i] + ":"));
    // Validamos que el usuario haya ingresado un número válido
    while (isNaN(gastoDia)) {
        gastoDia = parseFloat(prompt("Por favor, ingresa un número válido para los gastos de " + diasSemana[i] + ":"));
    }
    // Almacenamos el gasto del día en el arreglo
    gastosSemana.push(gastoDia);
}

// Calculamos el total de gastos utilizando la función calcularTotalGastos()
let totalGastos = calcularTotalGastos(gastosSemana);

// Mostramos el total de gastos al usuario
alert("El total de tus gastos semanales es: S/" + totalGastos.toFixed(2));
