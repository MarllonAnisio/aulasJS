/**
 * as funcoes construtoras funcionam para criar objetos, usando obviamente o (new) 
 * por convenção usamos o Pascal case
 *  
 * a função fabrica por convenção usamos o camel case e não damos o (new)
 * 
 */

function Pessoa(nome, sobrenome){
    const ID = ;
    verificaId = function(){
        if(ID != Number){
            alert("ne numero nao");
        }
    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.falar = function() {
        console.log(`Dale, meu nome é ${this.nome} ${this.sobrenome}`);
    };
};
const pessoa1 = new Pessoa("Marllon", "Anisio");
const pessoa2 = new Pessoa("Hector", "Salazar");

pessoa1.falar();
pessoa2.falar();