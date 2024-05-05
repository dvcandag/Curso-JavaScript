/*
Ejercicio 42: Estructuras de Control - Tipos de Operadores

Crea un programa que permita al usuario convertir temperaturas entre Celsius, Fahrenheit y Kelvin. Solicita al usuario 
que ingrese un valor de temperatura junto con la escala de origen y la escala de destino, y luego realiza la conversión 
utilizando los operadores adecuados.

Requisitos:
1.- Mostrar el resultado usando HTML.
2-. Válidar las escalas de temperatura adecuadas.

*/

// SOLUCIÓN

// Esta función convierte una temperatura de una escala a otra y muestra el resultado en una página web.
function convertirTemperatura() {
    // Registro de inicio de la función para propósitos de depuración
    console.log("Función convertirTemperatura() ejecutándose...");

    // Obtener el valor de temperatura de entrada, y las escalas de origen y destino desde el HTML
    let tempInput = parseFloat(document.getElementById("tempInput").value);
    let fromScale = document.getElementById("fromScale").value;
    let toScale = document.getElementById("toScale").value;
    let resultado; // Variable para almacenar el resultado de la conversión

    // Registro de los valores obtenidos para propósitos de depuración
    console.log("tempInput:", tempInput);
    console.log("fromScale:", fromScale);
    console.log("toScale:", toScale);

    // Validación de las escalas de temperatura ingresadas
    if ((fromScale === "Celsius" || fromScale === "Fahrenheit" || fromScale === "Kelvin") &&
        (toScale === "Celsius" || toScale === "Fahrenheit" || toScale === "Kelvin")) {
        // Validar si la temperatura ingresada es un número
        if (isNaN(tempInput)) {
            document.getElementById("resultado").innerText = "Por favor, ingrese una temperatura válida.";
            return; // Salir de la función si la temperatura no es válida
        }

        // Realizar la conversión de temperatura según las escalas especificadas
        if (fromScale === toScale) {
            resultado = tempInput; // Si las escalas son iguales, no hay conversión necesaria
        } else if (fromScale === "Celsius") {
            if (toScale === "Fahrenheit") {
                resultado = (tempInput * 9/5) + 32; // Conversión de Celsius a Fahrenheit
            } else { // toScale === "Kelvin"
                resultado = tempInput + 273.15; // Conversión de Celsius a Kelvin
            }
        } else if (fromScale === "Fahrenheit") {
            if (toScale === "Celsius") {
                resultado = (tempInput - 32) * 5/9; // Conversión de Fahrenheit a Celsius
            } else { // toScale === "Kelvin"
                resultado = (tempInput - 32) * 5/9 + 273.15; // Conversión de Fahrenheit a Kelvin
            }
        } else { // fromScale === "Kelvin"
            if (toScale === "Celsius") {
                resultado = tempInput - 273.15; // Conversión de Kelvin a Celsius
            } else { // toScale === "Fahrenheit"
                resultado = (tempInput - 273.15) * 9/5 + 32; // Conversión de Kelvin a Fahrenheit
            }
        }

        // Mostrar el resultado en la página web con formato y unidades
        document.getElementById("resultado").innerText = `El resultado es: ${resultado.toFixed(2)} ${toScale}`;
    } else {
        // Mostrar un mensaje de error si las escalas de temperatura ingresadas no son válidas
        document.getElementById("resultado").innerText = "Por favor, seleccione escalas de temperatura válidas.";
    }
}
