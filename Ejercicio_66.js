/*
Ejercicio 66: Objeto Date - Manipulación de Fechas

Implementar funciones que permitan realizar diferentes operaciones de manipulación de fechas utilizando el objeto Date.

Instrucciones:

1.- Función Obtener Fecha Actual:
    Implementa una función llamada obtenerFechaActual que devuelva la fecha actual en el formato dd/mm/yyyy.

2.- Función Calcular Diferencia de Días:
    Crea una función llamada calcularDiferenciaDias que tome dos fechas como parámetros y devuelva la diferencia en días entre ellas.

3.- Función Sumar Días a una Fecha:
    Desarrolla una función llamada sumarDiasFecha que permita agregar un número determinado de días a una fecha dada y devuelva la nueva fecha.

4.- Función Calcular Edad:
    Implementa una función llamada calcularEdad que tome como parámetro una fecha de nacimiento y devuelva la edad correspondiente en años.

5.- Función Obtener Día de la Semana:
    Crea una función llamada obtenerDiaSemana que tome una fecha como entrada y devuelva el día de la semana en formato de 
    texto (por ejemplo: "Lunes", "Martes", etc.).

6.- Función Es Año Bisiesto:
    Desarrolla una función llamada esAnioBisiesto que determine si un año dado es bisiesto o no. La función debe tomar el año como parámetro 
    y devolver true si es bisiesto y false si no lo es.
*/

// SOLUCIÓN

// 1.- Función Obtener Fecha Actual
function obtenerFechaActual() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11
    const año = fechaActual.getFullYear();
    return `${dia}/${mes}/${año}`;
}
// 2.- Función Calcular Diferencia de Días
function calcularDiferenciaDias(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24; // Milisegundos en un día
    const diferenciaMs = Math.abs(fecha2 - fecha1);
    return Math.floor(diferenciaMs / unDia);
}
// Se imprime los resultados
console.log("Fecha Actual:", obtenerFechaActual());
console.log("Diferencia de Días:", calcularDiferenciaDias(new Date('2024-06-01'), new Date('2024-06-10')));
