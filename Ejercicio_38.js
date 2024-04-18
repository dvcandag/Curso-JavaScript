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

// SOLUCIÓN

// Función para corregir campos indefinidos o nulos y validar el salario
function corregirDatosEmpleado() {
    // Obtener los valores del formulario y almacenarlos en un objeto 'empleado'
    const empleado = {
        nombre: document.getElementById('nombre').value,
        edad: parseInt(document.getElementById('edad').value),
        salario: parseFloat(document.getElementById('salario').value)
    };

    // Verificar y corregir campos indefinidos, nulos o NaN
    for (let key in empleado) {
        if (empleado[key] === undefined || empleado[key] === null || isNaN(empleado[key])) {
            switch (key) {
                case 'nombre':
                    empleado.nombre = 'Vito'; // Corregir campo 'nombre' si es indefinido o nulo
                    break;
                case 'edad':
                    empleado.edad = 0; // Corregir campo 'edad' si es indefinido, nulo o NaN
                    break;
                case 'salario':
                    empleado.salario = 0; // Corregir campo 'salario' si es indefinido, nulo o NaN
                    break;
                // Agregar más casos para otros campos según sea necesario
            }
        }
    }

    // Verificar y corregir el salario si es NaN o menor o igual a 0
    if (isNaN(empleado.salario) || empleado.salario <= 0) {
        empleado.salario = 0; // Establecer salario en 0 si es NaN o menor o igual a 0
        console.error('El salario del empleado no es válido. Se ha establecido en 0.');
    }

    // Mostrar el resultado en el elemento 'resultado'
    document.getElementById('resultado').innerHTML = `
        <h2>Datos del Empleado:</h2>
        <p><strong>Nombre:</strong> ${empleado.nombre}</p>
        <p><strong>Edad:</strong> ${empleado.edad}</p>
        <p><strong>Salario:</strong> S/ ${empleado.salario}</p>
    `;
}
