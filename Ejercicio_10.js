
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