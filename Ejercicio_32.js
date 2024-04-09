/*
Ejercicio 32: diferencia entre los variales var y let

Supongamos que estás desarrollando una aplicación de lista de tareas. Se te pide que implementes 
una función que agregue nuevas tareas a la lista. Sin embargo, hay un problema: algunas tareas 
son urgentes y otras no lo son tanto. Además, debes tener cuidado con el alcance de las variables que uses. 

1.- Debe utilicar el var y let para desarrollar y hacer comparativo (Aplicar temasrios de variales var y let)
2.- Incluir comentarios explicativos en tu código para brindar claridad sobre su funcionamiento.
3.- La solución debe entregarse en un archivo .js que se ejecute correctamente en el navegador de tu elección.
4.- Utilizar las etequietas html para mostrar resultados en la pantalla.
*/


//SOLUCIÓN


// Definimos un array para almacenar las tareas
var tareasVar = [];

// Función para agregar una nueva tarea utilizando 'var'
function agregarTareaVar(nombreTarea, esUrgente) {
    // Variable 'prioridad' definida con 'var'
    if (esUrgente) {
        var prioridad = 'Urgente';
    } else {
        var prioridad = 'No urgente';
    }

    // Agregamos la tarea al array
    tareasVar.push({ nombre: nombreTarea, prioridad: prioridad });
}

// Agregamos algunas tareas utilizando la función agregarTareaVar
agregarTareaVar('Estudiar para el examen', true);
agregarTareaVar('Comprar alimentos', false);
agregarTareaVar('Llamar a mamá', true);

// Definimos otro array para almacenar las tareas
let tareasLet = [];

// Función para agregar una nueva tarea utilizando 'let'
function agregarTareaLet(nombreTarea, esUrgente) {
    // Variable 'prioridad' definida con 'let'
    let prioridad;
    if (esUrgente) {
        prioridad = 'Urgente';
    } else {
        prioridad = 'No urgente';
    }

    // Agregamos la tarea al array
    tareasLet.push({ nombre: nombreTarea, prioridad: prioridad });
}

// Agregamos algunas tareas utilizando la función agregarTareaLet
agregarTareaLet('Estudiar para el examen', true);
agregarTareaLet('Comprar alimentos', false);
agregarTareaLet('Llamar a mamá', true);

// Mostramos los resultados en la consola
console.log("Tareas utilizando 'var':", tareasVar);
console.log("Tareas utilizando 'let':", tareasLet);

// Mostramos los resultados en el navegador
document.write("<h2>Tareas utilizando 'var':</h2>");
tareasVar.forEach(tarea => {
    document.write(`<p>Nombre: ${tarea.nombre}, Prioridad: ${tarea.prioridad}</p>`);
});

document.write("<h2>Tareas utilizando 'let':</h2>");
tareasLet.forEach(tarea => {
    document.write(`<p>Nombre: ${tarea.nombre}, Prioridad: ${tarea.prioridad}</p>`);
});
