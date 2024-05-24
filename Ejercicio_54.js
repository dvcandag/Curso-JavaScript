/*
Ejercicio 54: Destructuración

Escribe una función llamada obtenerDatos que tome un objeto como argumento. El objeto tiene la siguiente estructura:

const persona = {
  nombre: 'Bladimir',
  edad: 25,
  direccion: {
    ciudad: 'Ciudad de Lima',
    codigoPostal: '12345'
  }
};

*/

// SOLUCIÓN

// Definimos la función obtenerDatos que toma un objeto persona como argumento
function obtenerDatos(persona) {
    // Utilizamos la destructuración para extraer el nombre, la edad y la ciudad del objeto persona
    const { nombre, edad, direccion: { ciudad } } = persona;
  
    // Imprimimos los datos obtenidos en la consola
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Ciudad: ${ciudad}`);
  }
  
  // Objeto persona
  const persona = {
    nombre: 'Bladimir',
    edad: 25,
    direccion: {
      ciudad: 'Ciudad de Lima',
      codigoPostal: '12345'
    }
  };
  
  // Llamamos a la función obtenerDatos con el objeto persona como argumento
  obtenerDatos(persona);
  