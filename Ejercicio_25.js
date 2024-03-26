/*
Ejercicio 25: Imprimir el número mayor

Desarrolla un programa que solicite al usuario ingresar tres números y luego muestre en la pantalla el número más grande de los tres.

Incluir comentarios explicativos en tu código proporcionando con claridad sobre cómo funciona.
Tu solución debe ser entregada en un archivo .js que se ejecute correctamente en el navegador de tu preferencia.

*/

//SOLUCION

function encontrarMayor() {
    // 0btener los valores de los tres números ingresados por el usuario
    var num1 = parseFloat(document.getElementById("numero1").value); // Obtener el valor del primer número y convertirlo a un número de punto flotante
    var num2 = parseFloat(document.getElementById("numero2").value); // Obtener el valor del segundo número y convertirlo a un número de punto flotante
    var num3 = parseFloat(document.getElementById("numero3").value); // Obtener el valor del tercer número y convertirlo a un número de punto flotante

    // Inicializar una variable para almacenar el número mayor
    var mayor;

    // Comprobar cuál de los tres números es el mayor
    if (num1 >= num2 && num1 >= num3) { // Si num1 es mayor o igual que num2 y num3
        mayor = num1; // asignar num1 como el mayor
    } else if (num2 >= num1 && num2 >= num3) { // Si num2 es mayor o igual que num1 y num3
        mayor = num2; // Asignar num2 como el mayor
    } else { // Si ninguno de los casos anteriores es verdadero
        mayor = num3; // asignar num3 como el mayor
    }

    // mostrar el número mayor en el elemento con id "resultado"
    document.getElementById("resultado").textContent = "El número más grande es: " + mayor; // Mostrar el resultado en el elemento con id "resultado"
}
