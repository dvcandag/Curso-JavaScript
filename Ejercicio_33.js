/*
Ejercicio 33: Tipos de datos - Constantes (const)

Desarrollar un programa en JavaScript y HTML que pueda determinar tanto el área como el perímetro 
de un círculo. Es importante que el usuario pueda ingresar el radio del círculo para que 
el programa realice los cálculos adecuadamente.

Para asegurarnos de que nuestros cálculos sean precisos y consistentes, quiero que utilicen 
constantes para almacenar el valor de π (pi). Recuerden que π es una constante matemática que 
no cambia y no debe ser modificada durante la ejecución del programa.

Instrucciones:

1.- Incluir comentarios explicativos en tu código para brindar claridad sobre su codificación.
2.- La solución debe ejecutarse correctamente en el navegador de tu elección.
3.- Para su calificación, deberá explicar su codificación y hacer pruebas de depuración 

*/

//SOLUCIÓN

// Definir la constante para el valor de pi
const PI = Math.PI;

// Función para calcular el área y el perímetro del círculo
function calcular() {
  // Obtener el valor del radio del input
  const radio = parseFloat(document.getElementById("radio").value);

  // Calcular el área del círculo usando la fórmula A = π * r^2
  const area = PI * Math.pow(radio, 2);

  // Calcular el perímetro del círculo usando la fórmula P = 2 * π * r
  const perimetro = 2 * PI * radio;

  // Mostrar los resultados
  document.getElementById("resultado").innerHTML = `El área del círculo es: ${area.toFixed(2)} <br> El perímetro del círculo es: ${perimetro.toFixed(2)}`;
}