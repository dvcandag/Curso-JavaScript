/*
Ejercicio 27: Suma de números
Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números

Incluir comentarios explicativos en tu código para brindar claridad sobre su funcionamiento.
La solución debe entregarse en un archivo .js que se ejecute correctamente en el navegador de tu elección.
*/

//SOLUCIÓN

// Definición de la función sumar
function sumar() {
    // Obtener el valor del primer número ingresado por el usuario y convertirlo a un número entero
    const num1 = parseInt(document.getElementById('num1').value);
    // Obtener el valor del segundo número ingresado por el usuario y convertirlo a un número entero
    const num2 = parseInt(document.getElementById('num2').value);
    // Calcular la suma de los dos números
    const suma = num1 + num2;
    // Mostrar el resultado de la suma en el elemento con el id 'resultado'
    document.getElementById('resultado').textContent = "La suma de los números es: " + suma;
}
