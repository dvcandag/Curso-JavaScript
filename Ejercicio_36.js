/*
Ejercicio 36: Tipos de datos - Números (Numbers)

Desarrollar un programa en JavaScript y HTML que calcule el área de un triángulo. El usuario debe poder 
ingresar el valor de la base y la altura del triángulo.

Requisitos:
1.- Solicitar al usuario que ingrese las longitudes de los tres lados del triángulo.
2.- Calcular los ángulos del triángulo utilizando la ley de los cosenos.
3.- Calcular el área del triángulo utilizando la fórmula de Herón.
4.- Mostrar el dibujo del triángulo en HTML, incluyendo las longitudes de los lados y los ángulos calculados.

*/

// SOLUCIÓN


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("trianguloForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const lado1 = parseFloat(document.getElementById("lado1").value);
        const lado2 = parseFloat(document.getElementById("lado2").value);
        const lado3 = parseFloat(document.getElementById("lado3").value);

        // Calcular los ángulos del triángulo utilizando la ley de los cosenos
        const anguloA = Math.atan2(Math.sqrt(4 * lado1**2 * lado2**2 - (lado1**2 + lado2**2 - lado3**2)**2), (lado1**2 + lado2**2 - lado3**2));
        const anguloB = Math.atan2(Math.sqrt(4 * lado2**2 * lado3**2 - (lado2**2 + lado3**2 - lado1**2)**2), (lado2**2 + lado3**2 - lado1**2));
        const anguloC = Math.atan2(Math.sqrt(4 * lado3**2 * lado1**2 - (lado3**2 + lado1**2 - lado2**2)**2), (lado3**2 + lado1**2 - lado2**2));

        // Convertir ángulos de radianes a grados
        const anguloAGrados = anguloA * (180 / Math.PI);
        const anguloBGrados = anguloB * (180 / Math.PI);
        const anguloCGrados = anguloC * (180 / Math.PI);

        // Calcular el área del triángulo utilizando la fórmula de Herón
        const semiperimetro = (lado1 + lado2 + lado3) / 2;
        const area = Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3));

        // Mostrar el dibujo del triángulo y los resultados en HTML
        const resultadoHTML = `
            <p>Longitud del lado 1: ${lado1}</p>
            <p>Longitud del lado 2: ${lado2}</p>
            <p>Longitud del lado 3: ${lado3}</p>
            <p>Ángulo A: ${anguloAGrados.toFixed(2)}°</p>
            <p>Ángulo B: ${anguloBGrados.toFixed(2)}°</p>
            <p>Ángulo C: ${anguloCGrados.toFixed(2)}°</p>
            <p>Área del triángulo: ${area.toFixed(2)}</p>
            <div class="triangle"></div>
        `;
        document.getElementById("resultado").innerHTML = resultadoHTML;
    });
});
