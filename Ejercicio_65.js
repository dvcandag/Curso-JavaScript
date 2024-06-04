/*
Ejercicio 65: Objeto console

Escribe una función que realice algún cálculo o manipulación de datos y utilice el método group() y 
groupEnd() del objeto console para agrupar y mostrar los pasos intermedios del proceso en la consola.

*/
// SOLUCION

// Definir una función que realice algún cálculo o manipulación de datos
function calcularInteresCompuesto(principal, tasa, años) {
    console.group("Cálculo de Interés Compuesto");
    
    // Paso 1: Calcular el interés compuesto
    const cantidad = principal * Math.pow(1 + tasa / 100, años);
    console.group("Paso 1: Calcular el interés compuesto");
    console.log("Cantidad inicial: " + principal);
    console.log("Tasa de interés: " + tasa + "%");
    console.log("Años: " + años);
    console.log("Cantidad final: " + cantidad.toFixed(2));
    console.groupEnd();
  
    // Paso 2: Calcular el interés ganado
    const interesGanado = cantidad - principal;
    console.group("Paso 2: Calcular el interés ganado");
    console.log("Interés ganado: " + interesGanado.toFixed(2));
    console.groupEnd();
  
    console.groupEnd();
    
    // Retornar la cantidad final
    return cantidad;
  }
  
  // Llamar a la función con valores de ejemplo
  calcularInteresCompuesto(1000, 5, 3);
  