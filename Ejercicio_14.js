/*
Ejercicio 56:
Desarrollar una clase llamada "Cliente", diseñada para representar a un cliente de un banco
y permitir operaciones básicas de gestión de saldo. Los saldos deben mostrarse en moneda peruana. 
La clase debe tener los siguientes atributos y métodos:

Atributos:
a) nombre: Almacena el nombre del cliente.
b) deposito: Guarda el saldo actual del cliente, inicialmente en 0.

Métodos:
a) constructor(nombre): Un constructor que inicializa el nombre del cliente y su saldo.
b) imprimir(): Un método que imprime el nombre y el saldo del cliente.
c) depositar(monto): Permite al cliente depositar una cantidad específica.
d) extraer(monto): Permite al cliente extraer una cantidad específica.

Proporcionar comentarios explicativos, tu solución debe entregarse en un archivo .js 
que se ejecute en un navegador web usando un index.html
*/


//SOLUCION

// Definición de la clase Cliente
class Cliente {
    constructor(nombre) {
        // Inicialización de los atributos nombre y deposito
        this.nombre = nombre;
        this.deposito = 0;
    }

    imprimir() {
        // Método para imprimir el nombre y el saldo del cliente en formato de moneda peruana
        document.write(`<p>Nombre: ${this.nombre}</p>`);
        document.write(`<p>Saldo: S/ ${this.deposito.toLocaleString('es-PE', { minimumFractionDigits: 2 })}</p>`);
    }

    depositar(monto) {
        // Método para depositar una cantidad específica en la cuenta del cliente
        this.deposito += monto;
    }

    extraer(monto) {
        // Método para extraer una cantidad específica de la cuenta del cliente
        this.deposito -= monto;
    }
}

// Creación de un cliente llamado "Vitto Andagua"
let cliente1 = new Cliente('Vitto Andagua');

// Imprimir estado inicial del cliente
document.write('<h2>Estado inicial del cliente</h2>');
cliente1.imprimir();

// Depositar 100,000 soles en la cuenta del cliente
cliente1.depositar(100000);
document.write('<h2>Después de depositar 100,000 soles</h2>');
cliente1.imprimir();

// Extraer 40,000 soles de la cuenta del cliente
cliente1.extraer(40000);
document.write('<h2>Después de extraer 40,000 soles</h2>');
cliente1.imprimir();