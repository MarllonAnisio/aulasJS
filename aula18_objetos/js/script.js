/** 
 * JavaScript Object Basics
 * Objetos em JavaScript são estruturas de dados que permitem armazenar múltiplos valores em uma única variável
 * eles são compostos por pares de chave-valor, onde cada chave é uma string (ou símbolo) que identifica um valor associado
 * os objetos são muito flexíveis e podem conter diferentes tipos de valores, incluindo números, strings, arrays, funções e até outros objetos
 * para criar um objeto em JavaScript, usamos chaves {} e definimos os pares de chave-valor dentro delas
 * exemplo:
 * 
 * const pessoa = {
 *   nome: "João",
 *   idade: 30,
 *   profissao: "Desenvolvedor"
 * };
 * nesse exemplo, criamos um objeto chamado 'pessoa' com três propriedades: nome, idade e profissão
 * para acessar os valores das propriedades de um objeto, usamos a notação de ponto ou colchetes
 * exemplo:
 * 
 * console.log(pessoa.nome); // usando notação de ponto
 * console.log(pessoa["idade"]); // usando notação de colchetes
 * para adicionar novas propriedades a um objeto, simplesmente atribuímos um valor a uma nova chave
 * exemplo:
 * 
 * pessoa.email = "joao@example.com";
 * para remover uma propriedade de um objeto, usamos a palavra-chave 'delete'
 * exemplo:
 * 
 * delete pessoa.email;
 * objetos também podem conter métodos, que são funções associadas a um objeto
 * exemplo:
 * 
 * const pessoa = {
 *   nome: "João",
 *   idade: 30,
 *   profissao: "Desenvolvedor",
 *   saudacao: function() {
 *     console.log("Olá, meu nome é " + this.nome);
 *   }
 * };
 * 
 * pessoa.saudacao();
 * nesse exemplo, o objeto 'pessoa' tem um método chamado 'saudacao' que exibe uma mensagem no console
 * 
 * EM COMPARAÇÃO COM JAVA
 * em Java, usamos classes para definir a estrutura dos objetos e criar instâncias dessas classes
 * exemplo em Java:
 * 
 * public class Pessoa {
 *   private String nome;
 *   private int idade;
 *   private String profissao;
 * 
 *  public Pessoa(String nome, int idade, String profissao) {
 *     this.nome = nome;
 *    this.idade = idade;
 *    this.profissao = profissao;
 *  }
 * }
 * em JavaScript, não precisamos definir uma classe para criar um objeto
 * podemos criar objetos diretamente usando a notação literal de objetos
 * em resumo, objetos em JavaScript são estruturas de dados flexíveis que armazenam múltiplos valores em pares de chave-valor
 * eles são fundamentais para a programação em JavaScript e diferem das classes e objetos em Java
 * 
 */
const pessoa = {
    nome: "Emily",
    idade: 20,
    profissao: "Fullstack Developer",
    //tratemos como se fosse o toString() do Java kkkkkk
    saudacao: function() {
        console.log("Olá, meu nome é " + this.nome);
    }
};
console.log(pessoa.nome); // Acessando a propriedade nome
console.log(pessoa["idade"]); // Acessando a propriedade idade
pessoa.email = "emilyta@example.com";
console.log(pessoa.email); // Adicionando e acessando a propriedade email
delete pessoa.email;

pessoa.saudacao(); // Chamando o método saudacao

const marllon = {
    nome: "Marllon",
    idade: 21,
    profissao: "Backend Developer",
    saudacao: function() {
        console.log("Olá, meu nome é " + this.nome);
    }
}

marllon.saudacao();