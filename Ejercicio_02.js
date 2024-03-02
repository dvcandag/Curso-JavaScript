/*Calcular el área de un rectángulo usando la función llamada calcularAreaRectangulo que tome dos parámetros: 
la base y la altura de un rectángulo. 
La función deberá devolver el área del rectángulo calculada a partir de la fórmula:

Área = base × altura

Luego, declara dos variables base y altura con los valores que prefieras. Utiliza la función calcularAreaRectangulo 
para calcular el área del rectángulo con esos valores y muestra el resultado por consola.
*/

function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

let base = 5;
let altura = 8;

console.log("El área del rectángulo con base", base, "y altura", altura, "es:", calcularAreaRectangulo(base, altura));
