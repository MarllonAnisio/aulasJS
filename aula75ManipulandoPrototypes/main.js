/**
 * 
 * entendendo o prototype
 * 
 * é uma especie de herança que evita que sempre apareca para o usuario
 */

function Objeto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Objeto.prototype.aumento = () => preco *= 1.10;
Objeto.prototype.desconto = () => preco *=  0.90;

const lapis = new Objeto("lapis", 100);
const caneta = new Objeto("caneta", 49);

console.log(lapis.aumento());
console.log(lapis.desconto());
console.log(caneta.aumento());
console.log(caneta.desconto());