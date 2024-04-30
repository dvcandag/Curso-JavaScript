/*
Ejercicio 47: Estructuras de Control - Condicionales

Desarrolla un juego en el que la computadora "piense" en un número aleatorio entre 1 y 10, y el usuario 
tenga que adivinarlo. Después de cada intento del usuario, la computadora debe indicar si el número a adivinar 
es mayor o menor que el número ingresado por el usuario, hasta que el usuario adivine el número correcto.

Requisitos:
1.- Incluir comentarios explicativos en tu código para brindar claridad sobre su funcionamiento.
2.- La solución debe entregarse en un archivo .js que se ejecute correctamente.
3.- Utilizar las etequietas html para mostrar resultados en la pantalla.

*/

// SOLUCIÓN

// Función principal que inicia el juego
function iniciarJuego() {
    // Generar un número aleatorio entre 1 y 10 para que la computadora lo "piense"
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let intentos = 0; // Contador de intentos del usuario

    // Función para manejar cada intento del usuario
    function verificarNumero() {
        // Obtener el número ingresado por el usuario desde el input en HTML
        const numeroUsuario = parseInt(document.getElementById('numero').value);
        // Obtener el elemento donde se mostrarán los resultados
        const resultadoElemento = document.getElementById('resultado');

        // Incrementar el contador de intentos
        intentos++;

        // Verificar si el número ingresado es igual al número aleatorio
        if (numeroUsuario === numeroAleatorio) {
            // Mostrar mensaje de felicitaciones si el usuario adivinó correctamente
            resultadoElemento.innerHTML = `¡Felicitaciones! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`;
        } else if (numeroUsuario < numeroAleatorio) {
            // Si el número es menor, indicarle al usuario que intente con un número mayor
            resultadoElemento.innerHTML = `El número a adivinar es mayor que ${numeroUsuario}. Intenta de nuevo.`;
        } else {
            // Si el número es mayor, indicarle al usuario que intente con un número menor
            resultadoElemento.innerHTML = `El número a adivinar es menor que ${numeroUsuario}. Intenta de nuevo.`;
        }
    }

    // Asociar la función verificarNumero al botón de "Verificar" en HTML
    document.getElementById('verificar').addEventListener('click', verificarNumero);
}

// Llamar a la función iniciarJuego cuando el documento HTML esté cargado
document.addEventListener('DOMContentLoaded', iniciarJuego);
