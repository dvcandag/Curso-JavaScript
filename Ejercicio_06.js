let x = 1;
let suma = 0;

process.stdin.setEncoding('utf8');

console.log('Ingrese un valor: ');

process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    const valor = parseInt(chunk);
    if (!isNaN(valor)) {
      suma += valor;
      x++;
      if (x > 5) {
        console.log('La suma de los valores es ' + suma);
        process.exit();
      } else {
        console.log('Ingrese un valor: ');
      }
    } else {
      console.log('Por favor, ingrese un número válido.');
      console.log('Ingrese un valor: ');
    }
  }
});
