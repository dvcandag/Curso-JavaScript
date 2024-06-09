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

// 3.- Función Sumar Días a una Fecha
function sumarDiasFecha(fecha, dias) {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(nuevaFecha.getDate() + dias);
    return nuevaFecha;
}
// 4.- Función Calcular Edad
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesHoy = hoy.getMonth();
    const mesNacimiento = nacimiento.getMonth();

    if (mesHoy < mesNacimiento || (mesHoy === mesNacimiento && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}
// 5.- Función Obtener día de la Semana
function obtenerDiaSemana(fecha) {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return diasSemana[fecha.getDay()];
}
// 6.- Función es año Bisiesto
function esAnioBisiesto(año) {
    return (año % 4 === 0 && año % 100 !== 0) || año % 400 === 0;
}


// Se imprime los resultados
console.log("Fecha Actual:", obtenerFechaActual());
console.log("Diferencia de Días:", calcularDiferenciaDias(new Date('2024-06-01'), new Date('2024-06-10')));
console.log("Sumar 5 días a la fecha:", sumarDiasFecha(new Date(), 5));
console.log("Edad:", calcularEdad('1990-05-15'));
console.log("Día de la Semana:", obtenerDiaSemana(new Date()));
console.log("¿Es año bisiesto?:", esAnioBisiesto(2024));

// Se completo la solución del ejercicio 66