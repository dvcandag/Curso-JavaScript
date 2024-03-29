/*
Ejercicio 27: Calculadora
Desarrollar una interfaz gráfica de usuario (GUI) denominada "Calculadora" en JavaScript, que funcione como una calculadora.

Esta interfaz debe incluir los siguientes elementos:

1.- Cuatro etiquetas: "Valor 1", "Valor 2", "Resultado" y "Operaciones".
2.- Cuatro botones de radio: "Sumar", "Restar", "Multiplicar" y "Dividir".
3.- Tres campos de entrada de texto: los dos primeros para ingresar valores ("Valor 1" y "Valor 2") y el tercero para mostrar 
    el resultado ("Resultado"). El campo de entrada de texto para el resultado debe ser de solo lectura.
4.- Un botón "Calcular", que al ser presionado ejecutará la operación matemática correspondiente según la selección del botón de radio.

Incluir comentarios explicativos en tu código para brindar claridad sobre su funcionamiento.
La solución debe entregarse en un archivo .js que se ejecute correctamente en el navegador de tu elección.
*/

//SOLUCIÓN

// Definición de la función calcular
function calcular() {
    // Obtener el valor ingresado en el campo de entrada "Valor 1" y convertirlo a un número de punto flotante
    var valor1 = parseFloat(document.getElementById('valor1').value);
    // Obtener el valor ingresado en el campo de entrada "Valor 2" y convertirlo a un número de punto flotante
    var valor2 = parseFloat(document.getElementById('valor2').value);
    // Obtener el elemento del DOM para mostrar el resultado
    var resultado = document.getElementById('resultado');
    // Obtener el valor de la operación seleccionada a través del botón de radio
    var operacion = document.querySelector('input[name="operacion"]:checked').value;

    // Verificar si alguno de los valores ingresados no es un número válido
    if (isNaN(valor1) || isNaN(valor2)) {
        // Mostrar un mensaje de error en el campo de resultado si se ingresan valores no válidos
        resultado.value = 'Ingrese valores válidos';
        // Salir de la función sin realizar más operaciones
        return;
    }

    // Evaluar la operación seleccionada y realizar la operación correspondiente
    switch (operacion) {
        case 'suma':
            // Sumar los dos valores ingresados y asignar el resultado al campo de resultado
            resultado.value = valor1 + valor2;
            break;
        case 'resta':
            // Restar el segundo valor del primero y asignar el resultado al campo de resultado
            resultado.value = valor1 - valor2;
            break;
        case 'multiplicacion':
            // Multiplicar los dos valores ingresados y asignar el resultado al campo de resultado
            resultado.value = valor1 * valor2;
            break;
        case 'division':
            // Verificar si el segundo valor no es cero para evitar la división por cero
            if (valor2 !== 0) {
                // Dividir el primer valor por el segundo y asignar el resultado al campo de resultado
                resultado.value = valor1 / valor2;
            } else {
                // Mostrar un mensaje de error en el campo de resultado si se intenta dividir por cero
                resultado.value = 'Error: División por cero';
            }
            break;
        default:
            // Mostrar un mensaje de error si no se selecciona ninguna operación
            resultado.value = 'Seleccione una operación';
    }
}
