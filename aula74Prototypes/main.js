/**
 * 
 * entendendo o prototype
 * 
 * é uma especie de herança que evita que sempre apareca para o usuario
 */

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade

}

//como declarar o prototype:
Pessoa.prototype.falarOi = "OI!"


Pessoa.prototype.apresentar = function() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
}

const pessoa = new Pessoa("marllon", 22);
console.log(pessoa.falarOi)
console.log(pessoa.apresentar())