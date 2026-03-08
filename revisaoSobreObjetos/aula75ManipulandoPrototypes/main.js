/**
 * 
 * entendendo o prototype
 * 
 * é uma especie de herança que evita que sempre apareca para o usuario
 */


function Objeto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Objeto.prototype.aumento = function(aumento) {
    const valorAumento = this.preco * (aumento / 100)
    this.preco += valorAumento;
    console.log(`O aumento ${aumento} e o valor passou a ser: ${this.preco.toFixed(2)}`);
};
Objeto.prototype.desconto = function(desconto) {
    const valorDesconto = this.preco * (desconto / 100)
    this.preco -= valorDesconto;
    console.log(`O desconto ${desconto} e o valor passou a ser: ${this.preco.toFixed(2)}`);
};

const lapis = new Objeto("lapis", 1000);
const caneta = new Objeto("caneta", 50);


lapis.aumento(25);
lapis.desconto(40)
caneta.aumento(33)
caneta.desconto(5)