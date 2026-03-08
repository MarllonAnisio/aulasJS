/**
 * esta aula explica os tipos primitivos e valores por referência em JavaScript
 * os tipos primitivos são os tipos de dados mais básicos em JavaScript
 * eles incluem:
 * - string: representa texto, por exemplo, "Olá, mundo!"
 * - number: representa números, tanto inteiros quanto decimais, por exemplo, 42 ou 3.14
 * - boolean: representa valores lógicos, verdadeiro (true) ou falso (false)    
 * - null: representa a ausência intencional de valor
 * - undefined: representa uma variável declarada, mas sem valor atribuído
 * - symbol: representa um identificador único e imutável
 * - bigint: representa números inteiros muito grandes
 * * os valores primitivos são imutáveis, o que significa que não podem ser alterados após serem criados
 * * quando atribuímos um valor primitivo a uma variável, estamos criando uma cópia desse valor
 * * por exemplo:
 * 
 * let x = 10; // x é um número primitivo
 * let y = x; // y recebe uma cópia do valor de x
 * x = 20; // altera o valor de x, mas y ainda é 10
 * 
 * com arrays e objetos, os valores são armazenados por referência
 * isso significa que, quando atribuímos um array ou objeto a uma variável, estamos criando uma referência ao local na memória onde o valor está armazenado
 * se alterarmos o valor do array ou objeto, todas as variáveis que referenciam esse valor serão afetadas
 * por exemplo:
 * const pessoa = {
 *   nome: "João",
 *   idade: 30,
 *   profissao: "Desenvolvedor"
 * };
 * const pessoa2 = pessoa; // pessoa2 referencia o mesmo objeto que pessoa
 * pessoa2.idade = 31; // altera a idade de pessoa2, mas também afeta pessoa
 * console.log(pessoa.idade); // 31
 * * isso ocorre porque tanto pessoa quanto pessoa2 apontam para o mesmo objeto na memória
 * * para evitar esse comportamento, podemos criar uma cópia do objeto ou array usando métodos como Object.assign() ou o operador spread (...)
 * * exemplo de cópia de objeto:
 * const pessoaCopia = { ...pessoa }; // cria uma cópia rasa do objeto pessoa
 * 
 * 
 */

let x = 10; // x é um número primitivo
let y = x; // y recebe uma cópia do valor de x
x = 20; // altera o valor de x, mas y ainda é 10
console.log(x, "valor de x"); // 20
console.log(y, "valor de y"); // 10


// com arrays e objetos, os valores são armazenados por referência
const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor"
};

const pessoa2 = pessoa; // pessoa2 referencia o mesmo objeto que pessoa
pessoa2.idade = 26; // altera a idade de pessoa2 e de pessoa pois ambos referenciam o mesmo objeto
console.log(pessoa.idade, "idade de pessoa"); // 26


// para evitar esse comportamento, podemos criar uma cópia do objeto ou array usando o operador spread (...)
const pessoaCopia = { ...pessoa };
pessoaCopia.idade = 40; // altera a idade de pessoaCopia, mas não afeta pessoa
console.log(pessoa.idade, "idade de pessoa após alterar pessoaCopia");


// com arrays o negocio segue a mesma coisa

const a = [1,2,3,4,5,6,7];
const b = a; // estão referenciando o mesmo array
b.push(8);
console.log(a, "array 'a' após push em b");
console.log(b, "array 'b' após push em b");

// do mesmo jeito que usamos em objetos podemos usar o operador spread para criar uma cópia de um array
const c = [...a];
c.push(9);
console.log(a, "array 'a' após push em c");
console.log(c, "array 'c' após push em c");

/** 
 * EM COMPARAÇÃO COM JAVA
 * em Java, os tipos primitivos também são armazenados por valor
 * por exemplo:
 *  
 * int x = 10; // x é um tipo primitivo
 * int y = x; // y recebe uma cópia do valor de x
 * x = 20; // altera o valor de x, mas y ainda é 10
 * 
 * com objetos em Java, como instâncias de classes, eles são sempre armazenados por referência
 * por exemplo:
 * 
 * class Pessoa {
 *   String nome;
 *   int idade;
 *   String profissao;
 * }
 * 
 * Pessoa pessoa1 = new Pessoa();
 * pessoa1.nome = "Marllon";
 * pessoa1.idade = 21;
 * pessoa1.profissao = "Desenvolvedor";
 * Pessoa pessoa2 = pessoa1; // pessoa2 referencia o mesmo objeto que pessoa1
 * pessoa2.idade = 31; // altera a idade de pessoa2, mas também afeta pessoa1
 * System.out.println(pessoa1.idade); // 31
 */
