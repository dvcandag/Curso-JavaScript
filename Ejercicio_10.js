/* Ejercicio 10: declarar la función mostrarFechaHora() 
utilizando métodos como getDate(), getMonth(), getFullYear(), 
getHours(), getMinutes() y getSeconds() del objeto fecha. 
Y desplegar estos datos en el documento HTML a través de 
document.write(). 
Finalmente, invocar la función mostrarFechaHora() para ejecutarla 
y mostrar la fecha y hora actual en la página.*/

function mostrarFechaHora() {
    let fecha
    fecha = new Date();
    document.write('Hoy es ');
    document.write(fecha.getDate() + '/');
    document.write((fecha.getMonth() + 1) + '/');
    document.write(fecha.getFullYear());
    document.write('<br>');
    document.write('Es la hora ');
    document.write(fecha.getHours() + ':');
    document.write(fecha.getMinutes() + ':');
    document.write(fecha.getSeconds());
}

//Llamada a la función
mostrarFechaHora();