/*
Ejercicio 39: Tipos de datos - Funciones

Calculadora de Impuestos:

Desarrolla una aplicación en JavaScript que permita calcular el impuesto sobre la renta de una persona según su salario anual.
La aplicación debe solicitar al usuario que ingrese su salario anual y luego calcular y mostrar el impuesto correspondiente.

Requisitos:

1.- La aplicación debe utilizar una función para calcular el impuesto sobre la renta. Esta función tomará el salario anual 
    como parámetro y devolverá el impuesto calculado.

2.- El impuesto sobre la renta se calcula de acuerdo con la siguiente tabla:
    A.- Para salarios menores o iguales a S/ 50, el impuesto es del 10% del salario.
    B.- Para salarios entre S/ 50 y S/ 100 el impuesto es del 15% del salario.
    C.- Para salarios mayores a S/ 100, el impuesto es del 20% del salario.

3.- Después de calcular el impuesto, la aplicación debe mostrar un mensaje que indique el salario anual ingresado por el usuario
    y el impuesto calculado.

4.- La aplicación debe permitir al usuario realizar múltiples cálculos ingresando salarios anuales diferentes en cada ejecución.
*/

// SOLUCIÓN

// Definimos la función para calcular el impuesto sobre la renta
function calcularImpuesto(salarioAnual) {
    let impuesto;
    // Calculamos el impuesto según la tabla proporcionada
    if (salarioAnual <= 1025) {
        impuesto = salarioAnual * 0.1; // 10% del salario para salarios <= 1025
    } else if (salarioAnual <= 1500) {
        impuesto = salarioAnual * 0.15; // 15% del salario para salarios entre 1025 y 1500
    } else {
        impuesto = salarioAnual * 0.2; // 20% del salario para salarios > 1500
    }
    return impuesto;
}

// Función para solicitar el salario anual al usuario y mostrar el impuesto calculado
function calcularImpuestoUsuario() {
    // Solicitamos al usuario que ingrese su salario anual
    let salario = parseFloat(prompt("Por favor, ingresa tu salario anual en S/ "));
    
    // Validamos que el usuario haya ingresado un número válido
    if (!isNaN(salario)) {
        // Calculamos el impuesto llamando a la función calcularImpuesto()
        let impuesto = calcularImpuesto(salario);
        // Mostramos el salario anual y el impuesto calculado al usuario
        alert("Salario anual: S/" + salario.toFixed(2) + "\nImpuesto calculado: S/ " + impuesto.toFixed(2));
    } else {
        // Si el usuario no ingresó un número válido, mostramos un mensaje de error
        alert("Por favor, ingresa un salario válido.");
    }
}

// Llamamos a la función para permitir al usuario realizar múltiples cálculos
while (true) {
    calcularImpuestoUsuario();
    // Preguntamos al usuario si desea realizar otro cálculo
    let realizarOtroCalculo = confirm("¿Deseas realizar otro cálculo?");
    // Si el usuario elige no realizar otro cálculo, salimos del bucle
    if (!realizarOtroCalculo) {
        break;
    }
}
