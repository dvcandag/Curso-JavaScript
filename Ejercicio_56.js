/*
Ejercicio 56: Objetos Literales

Crear un objeto literal llamado 'producto' que represente un artículo en una tienda en línea. Este objeto debe 
tener las siguientes propiedades:

1.- 'nombre': que represente el nombre del producto.
2.- 'precio': que represente el precio del producto en soles.
3.- 'disponible': que represente si el producto está disponible en stock (true/false).
4.- 'detalles': que represente una descripción detallada del producto.

Además, crea un método dentro del objeto llamado 'mostrarDetalles' que imprima en la consola los detalles del producto.

A continuación, crea un objeto 'producto2' con diferentes valores y llama al método 'mostrarDetalles' para mostrar los 
detalles de este producto también."

*/

// SOLUCIÓN
// Definición del objeto literal 'producto'
const producto = {
    nombre: 'Camisa',
    precio: 25.99,
    disponible: true,
    detalles: 'Esta camisa de algodón es perfecta para cualquier ocasión.',
    mostrarDetalles: function() {
      console.log(`Detalles del producto:
  Nombre: ${this.nombre}
  Precio: ${this.precio} euros
  Disponible: ${this.disponible ? 'Sí' : 'No'}
  Descripción: ${this.detalles}`);
    }
  };
  
  // Llamada al método mostrarDetalles para el objeto 'producto'
  producto.mostrarDetalles();
  
  // Creación de un nuevo objeto 'producto2'
  const producto2 = {
    nombre: 'Pantalón',
    precio: 39.99,
    disponible: false,
    detalles: 'Este pantalón de mezclilla es cómodo y duradero.'
  };
  
  // Llamada al método mostrarDetalles para el objeto 'producto2'
  producto2.mostrarDetalles(); // Esto provocará un error ya que 'mostrarDetalles' no está definido para 'producto2'
  