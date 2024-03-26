/*
Ejercicio 24: Comprobar si son divisible

Crea un programa que solicite un número y determine si es divisible entre 2, 3, 5 o 7 (solamente se necesita 
verificar si es divisible por uno de estos cuatro).

Incluye comentarios explicativos de tu código para comprobar claridad sobre su funcionamiento.
Tu solución debe ser entregada en un archivo .js que se ejecute satisfactoriamente en el navegador de su preferencia
*/

//SOLUCION

function comprobarDivisibilidad() {
    // Obtener el valor del número ingresado por el usuario
    var numero = parseInt(document.getElementById("numeroInput").value);
    var resultado = "";

    // Comprobar si el número es divisible por 2, 3, 5 o 7
    if (numero % 2 === 0) {
        resultado = numero + " es divisible por 2.";
    } else if (numero % 3 === 0) {
        resultado = numero + " es divisible por 3.";
    } else if (numero % 5 === 0) {
        resultado = numero + " es divisible por 5.";
    } else if (numero % 7 === 0) {
        resultado = numero + " es divisible por 7.";
    } else {
        resultado = numero + " no es divisible por 2, 3, 5 ni 7.";
    }

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").textContent = resultado;
}