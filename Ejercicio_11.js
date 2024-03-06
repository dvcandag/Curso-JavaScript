/* Ejercicio 11: Solicitar al usuario que ingrese una cadena utilizando la función prompt() 
y almacena el valor en una variable llamada cadena. Muestrar la cadena ingresada 
al usuario utilizando document.write(). Calcular y muestrar la cantidad de caracteres 
en la cadena utilizando cadena.length. Muestrar el primer carácter de la cadena 
utilizando cadena.charAt(0). Muestrar los primeros tres caracteres de la cadena 
utilizando cadena.substring(0, 3). Verifica si la subcadena 'hola' está presente 
en la cadena utilizando cadena.indexOf('hola'). Si está presente, 
muestra 'Se ingresó la subcadena hola'; de lo contrario, 
muestra 'No se ingresó la subcadena hola'. Convierte la cadena a mayúsculas 
utilizando cadena.toUpperCase() y muestrar el resultado. Conviertir la cadena 
a minúsculas utilizando cadena.toLowerCase() y muestrar el resultado */

let cadena = prompt('Ingrese una cadena:');
        document.write('La cadena ingresada es:' + cadena);
        document.write('<br>');
        document.write('La cantidad de caracteres son:' + cadena.length);
        document.write('<br>');
        document.write('El primer carácter es:' + cadena.charAt(0));
        document.write('<br>');
        document.write('Los primeros 3 caracteres son:' + cadena.substring(0, 3));
        document.write('<br>');
        if (cadena.indexOf('hola') != -1) {
            document.write('Se ingresó la subcadena hola');
        } else {
            document.write('No se ingresó la subcadena hola');
        }
        document.write('<br>');
        document.write('La cadena convertida a mayúsculas es:' + cadena.toUpperCase());
        document.write('<br>');
        document.write('La cadena convertida a minúsculas es:' + cadena.toLowerCase());
        document.write('<br>');
