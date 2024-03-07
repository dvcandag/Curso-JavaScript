function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.depositar = depositar;
    this.extraer = extraer;
}

function depositar(dinero) {
    this.saldo = this.saldo + dinero;
}

function extraer(dinero) {
    this.saldo = this.saldo - dinero;
}

let cliente1;
cliente1 = new Cliente('diego', 1200);
document.write('Nombre del cliente:' + cliente1.nombre + '<br>');
document.write('Saldo actual:' + cliente1.saldo + '<br>');
cliente1.depositar(120);
document.write('Saldo luego de depositar S/ 2220---->' + cliente1.saldo + '<br>');
cliente1.extraer(1000);
document.write('Saldo luego de extraer S/ 120---->' + cliente1.saldo + '<br>');

