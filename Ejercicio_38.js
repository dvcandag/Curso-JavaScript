/*
Ejercicio 38: Tipos de datos - undefined, null & NaN

Desarrollar programa de gestión de empleados para una empresa. El sistema debe permite agregar nuevos empleados, calcular sus salarios y 
generar informes. Sin embargo, has encontrado algunos problemas relacionados con la gestión de datos.

1.- campos (undefined) en la información de empleados: Algunos campos de información de los empleados pueden estar undefined, ya 
sea porque el usuario no los ingresó o porque los datos no están disponibles.

2.- valores (null) en los salarios: En ciertas ocasiones, los salarios de los empleados se establecen como null en lugar de un valor numérico válido.

3.- valores (NaN) en los cálculos de salario: Durante los cálculos de salario, el sistema a veces produce valores NaN debido a operaciones aritméticas 
incorrectas o datos faltantes.

Debes implementar una función que aborde estos problemas:

- La función debe tomar un objeto que represente la información de un empleado y corregir cualquier campo undefined o null.
- Debe asegurarse de que el salario del empleado sea un número válido y no NaN.
- Si un campo undefined o null no se puede corregir automáticamente, la función debe generar un mensaje de error o devolver 
  un valor predeterminado para indicar que el dato es inválido.
  
*/

