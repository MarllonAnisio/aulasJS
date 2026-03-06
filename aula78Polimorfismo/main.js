/**
 * 
 * Aula sobre polimorfismo em js
 */

function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        throw new Error("o valor deve ser menor ou igual ao seu saldo")
    }
    this.saldo -= valor;
    this.verSaldo();

}
Conta.prototype.depositar = function(valor){
    if(typeof valor !== 'number'){
        throw new Error("Digite o valor de forma correta")
    }
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ${this.saldo.toFixed(2)}`)
}
const conta1 = new Conta(11,22,1000);


function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;

}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca;

ContaCorrente.prototype.sacar = function(valor){
    if(this.saldo + this.limite < valor){
        throw new Error("o valor deve ser menor ou igual ao seu saldo")
    }
    this.saldo -= valor;
    this.verSaldo();
}
const cc = new ContaCorrente(11,22,1000,1000);
cc.sacar(200);

const cp = new ContaPoupanca(13,23,400);
cp.depositar(10);
cp.sacar(125);
cp.sacar(7);
cp.sacar(100000000)