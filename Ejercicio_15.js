/*Ejercicio 15: Creación y manipulación de listas en JavaScript
Se centra en la creación y manipulación de listas, explorando diversas formas de 
inicialización y acceso a elementos. Se muestra la flexibilidad de las listas al permitir 
la inclusión de elementos de diferentes tipos de datos en una sola lista.

Instrucciones:
1.- Analizar y comprender las distintas formas de inicializar listas, como asignación de valores 
individuales, multiplicación de elementos y inclusión de elementos de diferentes tipos de datos.
2.- Ejecutar el código proporcionado para observar los resultados de acceder a los elementos de cada lista.
3.- Experimentar con la manipulación de listas, incluyendo la modificación de elementos existentes y la inclusión de nuevos elementos.
4.- Reflexionar sobre las ventajas de utilizar listas y su aplicabilidad en diversos escenarios de programación.

Proporcionar comentarios explicativos. Tu solución debe entregarse en un archivo .js que se ejecute en el terminal 
*/

//SOLUCION
// Creación de listas en JavaScript
let vector1 = [undefined];  // Creación de una lista con un elemento undefined
vector1[0] = 1;  // Modificación del primer elemento de la lista

let vector2 = [undefined];  // Creación de otra lista con un elemento undefined
vector2[0] = 6;  // Modificación del primer elemento de la segunda lista

let vector3 = new Array(5);  // Creación de una lista con cinco elementos undefined
vector3[0] = 4;  // Modificación del primer elemento de la tercera lista

let vector4 = [3, 70, 'Vitto Andagua'];  // Creación de una lista con elementos 3, 70 y 'Vitto Andagua'
let vector5 = [1, 70, 'Juan Lozada'];  // Creación de otra lista con los mismos elementos que la anterior

// Imprimir elementos de las listas
console.log(vector1[0]);  // Imprimir el primer elemento de la lista vector1
console.log(vector2[0]);  // Imprimir el primer elemento de la lista vector2
console.log(vector3[0]);  // Imprimir el primer elemento de la lista vector3
console.log(vector4[0]);  // Imprimir el primer elemento de la lista vector4
console.log(vector5[0]);  // Imprimir el primer elemento de la lista vector5
