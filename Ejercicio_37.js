/*
Ejercicio 37: Tipos de datos - Booleans

Jhon está desarrollando un programa para ayudar a los estudiantes a determinar si han aprobado o no un curso basado en sus 
calificaciones. El programa debe tomar las calificaciones de tres exámenes (cada una en un rango del 0 al 20) y determinar 
si el estudiante ha aprobado o no el curso. El curso se considera aprobado si la calificación promedio es igual o mayor a 13.

Requisitos:

1.- El programa debe solicitar al usuario ingresar por console las calificaciones de los tres exámenes.
2.- Calcula el promedio de las tres calificaciones.
3.- Utiliza un booleano para determinar si el estudiante ha aprobado el curso o no.
4.- Muestra un mensaje que indique si el estudiante ha aprobado el curso o no, basado en el valor del booleano.

*/

// SOLUCIÓN

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calificacionesForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe

      // Obtener las calificaciones ingresadas por el usuario
      const calificacion1 = parseFloat(document.getElementById('calificacion1').value);
      const calificacion2 = parseFloat(document.getElementById('calificacion2').value);
      const calificacion3 = parseFloat(document.getElementById('calificacion3').value);

      // Calcular el promedio de las tres calificaciones
      const promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

      // Utilizar un booleano para determinar si el estudiante ha aprobado el curso
      const aprobado = promedio >= 13;

      // Mostrar un mensaje que indique si el estudiante ha aprobado el curso o no
      const resultadoDiv = document.getElementById('resultado');
      if (aprobado) {
        resultadoDiv.textContent = `El estudiante ha aprobado el curso con un promedio de ${promedio.toFixed(2)}.`;
      } else {
        resultadoDiv.textContent = `El estudiante no ha aprobado el curso con un promedio de ${promedio.toFixed(2)}.`;
      }
    });
  });