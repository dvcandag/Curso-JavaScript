/*
Ejercicio 19: Generar contraseña

Desarrollar una función denominada (password) que tome un string como entrada y 
devuelva otro string con los siguientes cambios realizados:

a.- Convertir las mayúsculas a minúsculas.
b.- Eliminar los espacios en blanco.
c.- Reemplazar el carácter 'a' por '4'.
d.- Reemplazar el carácter 'e' por '3'.
e.- Reemplazar el carácter 'i' por '1'.
f.- Reemplazar el carácter 'o' por '0'."

Proporcionar comentarios explicativos. Tu solución debe entregarse en un archivo .js y html
ejecutandose satisfactoriamente en el navegador de tu preferencia
*/


//SOLUCION

// Definición de la función 'password' para generar una contraseña modificada
function password(str) {
    // Convertir todas las letras a minúsculas y eliminar espacios en blanco
    str = str.toLowerCase().replace(/\s/g, '');

    // Reemplazar caracteres específicos según las reglas
    str = str.replace(/a/g, '4')  // Reemplazar 'a' por '4'
             .replace(/e/g, '3')  // Reemplazar 'e' por '3'
             .replace(/i/g, '1')  // Reemplazar 'i' por '1'
             .replace(/o/g, '0'); // Reemplazar 'o' por '0'

    return str; // Devolver la contraseña modificada
}

// Función para generar la contraseña y mostrarla en la página
function generarPassword() {
    // Obtener la contraseña ingresada por el usuario
    const entrada = document.getElementById("entrada").value;
    // Generar la contraseña modificada usando la función 'password'
    const resultado = password(entrada);
    // Mostrar la contraseña generada en el elemento con id 'resultado'
    document.getElementById("resultado").textContent = "Contraseña generada: " + resultado;
}



/* HTML DEL EJERCICIO 19
<h1>Generador de Contraseñas</h1>
    <label for="entrada">Ingrese la contraseña:</label>
    <input type="text" id="entrada">
    <button onclick="generarPassword()">Generar</button>
    <p id="resultado"></p>

*/