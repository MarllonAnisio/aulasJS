
/**
 * Exercício 1: Utilizando o loop "for...in", percorra um objeto e imprima suas chaves e valores no console,
 *  ELE É PERFEITO PARA OBJETOS
 */
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

/**
 * Usando o loop "for...in" para percorrer o objeto pessoa
 * A variável chave irá representar cada chave do objeto em cada iteração
 * 
 * existe diferenca entre for in no js e forEach do java?
 * Sim, existem diferenças significativas entre o "for...in" do JavaScript e o "forEach" do Java:
 * 1. Sintaxe e Uso:
 *   - "for...in" é usado para iterar sobre as propriedades enumeráveis de um objeto.
 */
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}