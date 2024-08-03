/*

Ejercicio 79: En este script debes pedir al usuario un número de dos dígitos y debes devolver 
el número de unidades y de decenas, o sea, cada dígito del número. Usa solo operationes aritméticas

Recuerda si divides un número entre 10 el cociente entero es el número de decenas y el resto 
es el número de unidades
*/

// SOLUCIÓN

// Pedir al usuario que ingrese un número de dos dígitos
const numero = parseInt(prompt("Introduce un número de dos dígitos:"), 10);

// Verificar que el número está dentro del rango permitido
if (numero >= 10 && numero <= 99) {
    // Calcular el número de decenas usando división entera
    const decenas = Math.floor(numero / 10);
    
    // Calcular el número de unidades usando el operador módulo
    const unidades = numero % 10;
    
    // Mostrar los resultados
    console.log(`El número de decenas es: ${decenas}`);
    console.log(`El número de unidades es: ${unidades}`);
} else {
    console.log("El número introducido no es de dos dígitos.");
}
