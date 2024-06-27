/*
Ejercicio 73: Objetos y Funciones del Lenguaje - prompt y alert

Calculadora de Promedio

Desarrolla un programa que solicite al usuario una lista de números separados por comas utilizando "prompt". 
Luego calcula el promedio de esos números y muestra el resultado utilizando un "alert".

*/

// SOLUCIÓN

// Función para calcular el promedio de un array de números
function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma / numeros.length;
  }
  
  // Solicitar al usuario una lista de números separados por comas
  let input = prompt("Introduce una lista de números separados por comas:");
  
  // Convertir la cadena de texto en un array de números
  let numeros = input.split(',').map(Number);
  
  // Calcular el promedio
  let promedio = calcularPromedio(numeros);
  
  // Mostrar el resultado
  alert("El promedio de los números es: " + promedio);
  