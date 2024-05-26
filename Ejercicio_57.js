/*
Ejercicio 57: Objetos Literales

Aplicando el uso de los objetos literales en JavaScript, representar información 
sobre libros y cómo acceder a esa información utilizando funciones.

Instrucciones:

1.- Definir dos objetos literales, libro1 y libro2, que representen información sobre 
    dos libros diferentes. Cada objeto debe contener las siguientes propiedades:

    a.- titulo: El título del libro.
    b.- autor: El autor del libro.
    c.- genero: El género literario del libro.
    d.- añoPublicacion: El año en que fue publicado el libro.
    f.- paginas: El número de páginas del libro.

2.- Crear una función llamada (mostrarInformacionLibro) que tome un objeto libro como argumento y 
    muestre la información detallada del libro en la consola. La información detallada debe incluir 
    el título, autor, género, año de publicación y número de páginas del libro.

3.- Utiliza la función (mostrarInformacionLibro) para mostrar la información detallada de cada uno 
    de los libros definidos anteriormente (libro1 y libro2).

*/

// SOLUCIÓN

// Definición de objetos literales para representar información sobre libros

// Libro 1: Objeto literal que representa información sobre el primer libro
const libro1 = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
    añoPublicacion: 1967,
    paginas: 432
  };
  
  // Libro 2: Objeto literal que representa información sobre el segundo libro
  const libro2 = {
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    genero: "Fantasía",
    añoPublicacion: 2007,
    paginas: 662
  };
  
  // Función para mostrar información detallada de un libro
  function mostrarInformacionLibro(libro) {
    console.log(`Título: ${libro.titulo}`);
    console.log(`Autor: ${libro.autor}`);
    console.log(`Género: ${libro.genero}`);
    console.log(`Año de Publicación: ${libro.añoPublicacion}`);
    console.log(`Páginas: ${libro.paginas}`);
    console.log("-----------------------");
  }
  
  // Muestra información detallada de los libros utilizando la función mostrarInformacionLibro
  console.log("Información del Libro 1:");
  mostrarInformacionLibro(libro1);
  
  console.log("Información del Libro 2:");
  mostrarInformacionLibro(libro2);
  