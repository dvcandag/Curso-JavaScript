/*
Ejercicio 31: kilómetros recorridos y la cantidad de litros consumidos

Crea un script que pida al usuario que introduzca la cantidad de kilómetros recorridos por su 
automóvil y la cantidad de litros consumidos. Luego, el programa debe calcular y mostrar el 
consumo de combustible por kilómetro.

1.- Incluir comentarios explicativos en tu código para brindar claridad sobre su funcionamiento.
2.- La solución debe entregarse en un archivo .js que se ejecute correctamente en el navegador de tu elección.
3.- Utilizar las etequietas html para mostrar resultados en la pantalla.

*/

//SOLUCIÓN

// Evento para asegurarse de que el script se ejecute después de que la página haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Función para calcular el consumo de combustible por kilómetro
    function calcularConsumo() {
        // Obtener los valores de los campos de entrada
        var kilometrosRecorridos = parseFloat(document.getElementById("kilometros").value);
        var litrosConsumidos = parseFloat(document.getElementById("litros").value);

        // Calcular el consumo por kilómetro
        var consumoPorKilometro = litrosConsumidos / kilometrosRecorridos;

        // Mostrar el resultado en la página
        document.getElementById("resultado").innerHTML = "El consumo de combustible por kilómetro es: " + consumoPorKilometro.toFixed(2) + " litros.";
    }

    // Evento submit del formulario
    document.getElementById("formulario").addEventListener("submit", function(event) {
        // Prevenir el envío del formulario
        event.preventDefault();
        // Llamar a la función para calcular el consumo
        calcularConsumo();
    });
});