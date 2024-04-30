/*
Ejercicio 46: Estructuras de Control - Condicionales

Crea un programa que simule el funcionamiento de un cajero automático. Solicita al usuario ingresar 
el monto que desea retirar. Si el monto es menor que el saldo disponible en la cuenta, muestra un 
mensaje indicando que la transacción fue exitosa y actualiza el saldo disponible. Si el monto es mayor 
que el saldo disponible, muestra un mensaje indicando que no hay suficientes fondos en la cuenta.

Requisitos:
1.- Incluir comentarios explicativos en tu código para brindar claridad sobre su funcionamiento.
2.- La solución debe entregarse en un archivo .js que se ejecute correctamente.
3.- Utilizar las etequietas html para mostrar resultados en la pantalla.

*/

// SOLUCIÓN

// Definir saldo disponible en la cuenta
var saldoDisponible = 1000;

// Función para retirar fondos
function retirarFondos() {
    // Obtener el monto seleccionado por el usuario
    var monto = parseFloat(document.getElementById("montoInput").value);

    // Verificar si hay suficientes fondos en la cuenta
    if (monto <= saldoDisponible) {
        // Si hay suficientes fondos, realizar la transacción y actualizar el saldo disponible
        saldoDisponible -= monto;
        // Mostrar mensaje de transacción exitosa y monto retirado en dos filas
        document.getElementById("mensaje1").innerHTML = "Transacción exitosa.";
        document.getElementById("mensaje2").innerHTML = "Se han retirado $" + monto.toFixed(2) + ". Saldo disponible: $" + saldoDisponible.toFixed(2);
    } else {
        // Si no hay suficientes fondos, mostrar un mensaje de error
        document.getElementById("mensaje1").innerHTML = "No hay suficientes fondos en la cuenta.";
        // Limpiar el mensaje de la segunda línea en caso de error
        document.getElementById("mensaje2").innerHTML = "";
    }
}