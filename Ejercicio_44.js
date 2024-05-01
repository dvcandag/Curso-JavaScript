/*
Ejercicio 44: Estructuras de Control - Tipos de Operadores

Escribe un programa que solicite al usuario cree una contraseña. La contraseña debe cumplir con ciertos criterios, como 
tener al menos 8 caracteres de longitud, contener al menos una letra mayúsculas, una letra minúsculas, dos números y dos caracteres especiales. 
El programa debe validar si la contraseña ingresada cumple con todos los criterios y mostrar un mensaje apropiado.

Requisitos:
1.- Incluir comentarios explicativos en tu código para brindar claridad sobre su funcionamiento.
2.- La solución debe entregarse en un archivo .js que se ejecute correctamente.
3.- Utilizar las etequietas html para mostrar resultados en la pantalla.

*/

// SOLUCIÓN

function validarContraseña(contraseña) {
    // Verificar longitud de la contraseña
    if (contraseña.length !== 8) {
        return {
            cumpleCriterios: false,
            mensaje: "La contraseña debe tener exactamente 8 caracteres."
        };
    }

    // Expresiones regulares para validar los criterios de la contraseña
    var regexLetraMayuscula = /[A-Z]/g;
    var regexLetraMinuscula = /[a-z]/g;
    var regexNumero = /\d/g;
    var regexCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

    // Contar letras mayúsculas, minúsculas, números y caracteres especiales
    var contadorMayusculas = (contraseña.match(regexLetraMayuscula) || []).length;
    var contadorMinusculas = (contraseña.match(regexLetraMinuscula) || []).length;
    var contadorNumeros = (contraseña.match(regexNumero) || []).length;
    var contadorCaracteresEspeciales = (contraseña.match(regexCaracterEspecial) || []).length;

    // Verificar si la contraseña cumple con los criterios
    var cumpleCriterios = contadorMayusculas === 2 && contadorMinusculas === 2 && contadorNumeros === 2 && contadorCaracteresEspeciales === 2;

    // Determinar qué tipo de caracteres faltan
    var caracteresFaltantes = [];
    if (contadorMayusculas !== 2) {
        caracteresFaltantes.push("dos letras mayúsculas");
    }
    if (contadorMinusculas !== 2) {
        caracteresFaltantes.push("dos letras minúsculas");
    }
    if (contadorNumeros !== 2) {
        caracteresFaltantes.push("dos números");
    }
    if (contadorCaracteresEspeciales !== 2) {
        caracteresFaltantes.push("dos caracteres especiales");
    }

    // Retornar el resultado de la validación y los caracteres faltantes
    if (!cumpleCriterios) {
        return {
            cumpleCriterios: false,
            mensaje: "La contraseña no cumple con los siguientes criterios: " + caracteresFaltantes.join(", ")
        };
    } else {
        return {
            cumpleCriterios: true,
            mensaje: "La contraseña cumple con todos los criterios."
        };
    }
}

// Función para validar la contraseña
function validar() {
    // Obtener el valor de la contraseña ingresada por el usuario
    var contraseña = document.getElementById('password').value;

    // Validar la contraseña y determinar qué tipo de caracteres faltan
    var resultadoValidacion = validarContraseña(contraseña);

    // Mostrar el resultado de la validación en el elemento resultado
    var resultado = document.getElementById('resultado');
    if (resultadoValidacion.cumpleCriterios) {
        resultado.innerHTML = "La contraseña cumple con todos los criterios.";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = resultadoValidacion.mensaje;
        resultado.style.color = "red";
    }
}

// Función para mostrar la contraseña
function imprimir() {
    var contraseña = document.getElementById('password').value;
    var labelContraseña = document.getElementById('labelContraseña');
    labelContraseña.textContent = contraseña;
}