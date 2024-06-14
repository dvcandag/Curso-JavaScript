/*
Ejercicio 68: Objeto Math - Número aleatorio - uso del formula Box-Muller

Desarrolla una función que genere un número aleatorio dentro de un rango especificado por el usuario, pero 
con una distribución normal (gaussiana). Utiliza el objeto Math para realizar los cálculos necesarios.

Instrucciones:

1.- Escribe una función llamada generarNumeroAleatorioGaussiano que tome dos parámetros: media y desviacionEstandar.
2.- Dentro de la función, utiliza el método random() del objeto Math para generar dos números aleatorios uniformemente 
    distribuidos entre 0 y 1. Estos números representarán puntos en un plano cartesiano.
3.- Utiliza la transformación de Box-Muller para convertir estos números aleatorios en números aleatorios con una distribución normal.
4.- Devuelve el número aleatorio 𝑋
5.- Prueba tu función con diferentes valores de media y desviación estándar para asegurarte de que funcione correctamente.

*/

// SOLUCIÓN

function generarNumeroAleatorioGaussiano(media, desviacionEstandar) {
    // Verificamos si los parámetros son números válidos
    if (typeof media !== 'number' || typeof desviacionEstandar !== 'number') {
        throw new Error('Los parámetros media y desviacionEstandar deben ser números.');
    }

    // Generamos dos números aleatorios uniformemente distribuidos entre 0 y 1
    var u1 = Math.random();
    var u2 = Math.random();

    // Aplicamos la transformación de Box-Muller para obtener números aleatorios con distribución normal
    var z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    // var z1 = Math.sqrt(-2 * Math.log(u1)) * Math.sin(2 * Math.PI * u2);

    // Escalamos y desplazamos los resultados para ajustarlos a la media y la desviación estándar especificadas
    var numeroAleatorioGaussiano = z0 * desviacionEstandar + media;

    // Devolvemos el número aleatorio gaussiano
    return numeroAleatorioGaussiano;
}

// Ejemplo
var media = 0; // Media
var desviacionEstandar = 1; // Desviación estándar
var numeroAleatorio = generarNumeroAleatorioGaussiano(media, desviacionEstandar);
console.log("Número aleatorio gaussiano:", numeroAleatorio);