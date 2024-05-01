/*
Ejercicio 43: Estructuras de Control - Tipos de Operadores

Crea un programa que solicite al usuario ingresar el precio original de un producto y el porcentaje de descuento aplicado. Luego, 
calcula el precio final después del descuento y muestra el resultado.

Requisitos:
1.- Incluir comentarios explicativos en tu código para brindar claridad sobre su funcionamiento.
2.- La solución debe entregarse en un archivo .js que se ejecute correctamente.
3.- Utilizar las etequietas html para mostrar resultados en la pantalla.

*/

// SOLUCIÓN

// Función para calcular el descuento y mostrar el resultado
function calcularDescuento() {
    // Obtener los valores ingresados por el usuario
    var precioOriginal = parseFloat(document.getElementById("precioOriginal").value);
    var descuento = parseFloat(document.getElementById("descuento").value);

    // Calcular el precio final después del descuento
    var precioFinal = precioOriginal - (precioOriginal * (descuento / 100));

    // Mostrar el resultado en la página HTML
    document.getElementById("precioFinal").innerText = precioFinal.toFixed(2);
}

// Función para borrar los campos de entrada y el resultado
function borrarCampos() {
    document.getElementById("precioOriginal").value = "";
    document.getElementById("descuento").value = "";
    document.getElementById("precioFinal").innerText = "";
}
