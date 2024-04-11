/*
Ejercicio 34: Tipos de datos - Cadenas de Texto (Strings)

Escribe un programa en JavaScript, con entrada desde HTML, que solicite al usuario su nombre completo y su país de origen. Luego, muestra 
un mensaje de bienvenida personalizado que incluya su nombre y su país.

Instrucciones:

1.- Se debe solicitar al usuario que ingrese su nombre completo, asegurándose de que la primera letra de cada palabra (nombre y apellido) 
    esté en mayúscula.
2.- El país ingresado automáticamente debe convertirse a mayúsculas para garantizar consistencia.
3.- Como salida, el nombre completo del usuario debe mostrarse en mayúsculas y el nombre del país en minúsculas con la primera letra en mayúscula.
4.- Asegúrate de incluir comentarios explicativos en tu código para facilitar la comprensión de su funcionamiento.
5.- Verificar que la solución se ejecute correctamente en cualquier navegador.
6.- Para evaluar tu solución, deberás explicar tu código y realizar pruebas de depuración.
7.- El resultado esperado es:
    
    Entrada:
        Nombre: Juan Pérez
        País: PERÚ

    Salida:
        ¡Bienvenido, JUAN PÉREZ! Nos alegra tenerte desde Perú.

*/

// SOLUCIÓN

// Función para capitalizar la primera letra de cada palabra en una cadena
function capitalizarPalabras(cadena) {
    return cadena.replace(/\b\w/g, c => c.toUpperCase());
  }

  // Función para mostrar el mensaje de bienvenida personalizado
  function mostrarBienvenida() {
    // Obtener el nombre ingresado por el usuario y capitalizar la primera letra de cada palabra
    const nombreCompleto = capitalizarPalabras(document.getElementById("nombre").value);
    
    // Obtener el país ingresado por el usuario y convertirlo a mayúsculas con la primera letra en mayúscula
    const pais = document.getElementById("pais").value.charAt(0).toUpperCase() + document.getElementById("pais").value.slice(1).toLowerCase();

    // Construir el mensaje de bienvenida personalizado
    const mensaje = `¡Bienvenido, ${nombreCompleto}! Nos alegra tenerte desde ${pais}.`;

    // Mostrar el mensaje en el documento HTML
    document.getElementById("mensajeBienvenida").textContent = mensaje;
  }