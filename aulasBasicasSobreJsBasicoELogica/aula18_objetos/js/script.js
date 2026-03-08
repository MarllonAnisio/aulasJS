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

/** 
 * entendendo como criar múltiplos objetos em JavaScript
 * para criar múltiplos objetos com a mesma estrutura em JavaScript, podemos usar funções construtoras ou classes (introduzidas no ES6)
 * exemplo usando função construtora:
 * 
 * function Pessoa(nome, idade, profissao) {
 *   this.nome = nome;
 *   this.idade = idade;
 *   this.profissao = profissao;
 * }    
 * const pessoa1 = new Pessoa("Ana", 25, "Designer");
 * const pessoa2 = new Pessoa("Bruno", 28, "Engenheiro");
 * nesse exemplo, criamos uma função construtora chamada 'Pessoa' e usamos a palavra-chave 'new' para criar novas instâncias do objeto
 * exemplo usando classe:
 * 
 * class Pessoa {
 *  constructor(nome, idade, profissao) {
 *   this.nome = nome;
 *   this.idade = idade;
 *  this.profissao = profissao;
 * }
 * }    
 * const pessoa1 = new Pessoa("Ana", 25, "Designer");
 * const pessoa2 = new Pessoa("Bruno", 28, "Engenheiro");
 * nesse exemplo, usamos a sintaxe de classe para definir a estrutura do objeto e criar instâncias
 * ambas as abordagens permitem criar múltiplos objetos com a mesma estrutura de forma eficiente
 * em resumo, para criar múltiplos objetos em JavaScript, podemos usar funções construtoras ou classes
 * ambas as técnicas facilitam a criação de objetos com propriedades e métodos semelhantes
 * com return voce pode retornar um objeto de uma função tambem
 * exemplo:
 * 
 * function criarPessoa(nome, idade, profissao) {
 *   return {
 *    nome: nome,
 *   idade: idade,
 *   profissao: profissao
 *   };
 * }
 * const pessoa1 = criarPessoa("Carlos", 32, "Médico");
 * const pessoa2 = criarPessoa("Mariana", 29, "Advogada");
 * nesse exemplo, a função 'criarPessoa' retorna um novo objeto com as propriedades fornecidas  
 * seria um pouco parecido com o uso de construtores em Java
 * padrão de projeto Factory Method. 
 */

function criarPessoa(nome, idade, profissao) {
    return {
        nome: nome,
        idade: idade,
        profissao: profissao,
        apresentar(){
            console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
        },
        incrementartIdade() {
            this.idade++;
        },
        falarIdade(){
            console.log(`Minha idade é ${this.idade} anos.`);
        },
    };
}
const pessoa1 = criarPessoa("Emily", 20, "Fullstack Developer");

const pessoa2 = criarPessoa("Marllon", 21, "Backend Developer");

pessoa1.apresentar(); // Olá, meu nome é Emily, tenho 20 anos e sou Fullstack Developer.
pessoa2.apresentar(); // Olá, meu nome é Marllon, tenho 21 anos e sou Backend Developer.


pessoa1.incrementartIdade();
pessoa1.falarIdade();
pessoa2.incrementartIdade();
pessoa2.falarIdade();
pessoa1.apresentar(); // Olá, meu nome é Emily, tenho 21 anos e sou Fullstack Developer.
pessoa2.apresentar(); // Olá, meu nome é Marllon, tenho 22 anos e sou Backend Developer.








/** 
 * fim da explicação sobre objetos em JavaScript com base até a aula 32 da seção 2 do curso: 
 * https://www.udemy.com/share/1026xa3@7YhU0ePL66gnw33LPAFQtPzHa2b46YiGY-fIhg5xFzvK6dVfWs1ackL_yUABw8Q4lw==/
 */