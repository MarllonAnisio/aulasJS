/**
 * 
 * O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. 
 * Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente). 
 * Por isso usamos esse termo para descrever o comportamento desejado. 
 * Além disso, a maioria das literaturas usam a palavra herança
 * porém, Javascript não é uma linguagem que apresenta essa característica em específico, 
 * portanto não existe "herança" aqui. O que ocorre, na verdade, é "delegação". Esse seria o termo mais correto para descrever "Herança" em JS.
 * Quando fazemos algo como:
 */
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
 
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
 
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);  // (.call())isso é o Super do java kkkkk
  this.cor = cor;
}
/**
 *  especificamente nesse trecho, claramente, falando que o Camiseta.prototype é um novo objeto vazio que tem como protótipo Produto.prototype. 
 * Dessa forma, estamos adicionando Camiseta.prototype na cadeia de protótipos de Produto. 
 * Por consequência, tudo o que não existir em Camiseta nem em Camiseta.prototype será delegado para Produto.prototype 
 * (e assim por diante até chegar no topo da cadeia de protótipos). 
 * Por isso vejo o termo delegação como mais adequado para este comportamento.
 */
Camiseta.prototype = Object.create(Produto.prototype); 
Camiseta.prototype.constructor = Camiseta;


