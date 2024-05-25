/*
Ejercicio 55: Destructuración

Escribe un programa en JavaScript que solicite al usuario ingresar las dimensiones de un 
rectángulo (largo y ancho) y luego calcule y muestre el perímetro y el área del rectángulo 
utilizando la destructuración para manejar los datos ingresados por el usuario

*/

// SOLUCIÓN

function calcular() {
    // Obtener los valores de largo y ancho desde los campos de entrada
    const inputLargo = document.getElementById("largo").value;
    const inputAncho = document.getElementById("ancho").value;

    // Convertir las dimensiones ingresadas a números
    const largo = parseFloat(inputLargo);
    const ancho = parseFloat(inputAncho);

    // Calcular el perímetro y el área del rectángulo
    const perimetro = 2 * (largo + ancho);
    const area = largo * ancho;

    // Mostrar el perímetro y el área del rectángulo en el elemento de resultado
    document.getElementById("resultado").innerHTML = `
        <strong>Perímetro del rectángulo:</strong> ${perimetro} <br>
        <strong>Área del rectángulo:</strong> ${area}
    `;
}