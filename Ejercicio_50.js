/*

Ejercicio 50: Manejo de Errores

Escribe una función buscarUsuario(nombre) que simule una búsqueda de usuario en una base de datos. Si el nombre de usuario es "admin", lanzará un error
personalizado indicando que no se puede buscar al usuario administrador. Además, si el nombre es null o undefined, lanzará un error indicando que el 
nombre es inválido. En caso contrario, la función retornará un objeto representando al usuario encontrado.

Además, se debe escribir un bloque try...catch para probar la función buscarUsuario. Si ocurre algún error, se imprimirá un mensaje de error en la 
consola, incluyendo información adicional como la fecha en que ocurrió.

*/

// SOLUCIÓN

// Definición de un error personalizado para el caso de nombre inválido
class NombreInvalidoError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
      this.date = new Date();
    }
  }
  
 // Definición de un error personalizado para el caso de usuario administrador
class UsuarioAdministradorError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
      this.date = new Date();
    }
  }
   
  