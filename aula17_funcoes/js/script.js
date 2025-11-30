/**
 * entendendo como criar e utilizar funções em JavaScript
 * funções são blocos de código reutilizáveis que executam uma tarefa específica
 * elas ajudam a organizar o código, tornando-o mais legível e fácil de manter
 * para criar uma função em JavaScript, usamos a palavra-chave 'function', seguida pelo nome da função
 * parênteses e chaves
 * exemplo:
 * 
 * function saudacao(){
 *   console.log("Olá, bem-vindo ao curso de JavaScript!");
 * }
 * essa função chamada 'saudacao' exibe uma mensagem no console quando é chamada
 * para chamar a função, simplesmente usamos seu nome seguido por parênteses
 * exemplo:
 * 
 * saudacao(); // isso exibirá a mensagem no console
 * funções também podem receber parâmetros, que são valores passados para a função quando ela é chamada
 * exemplo:
 * 
 * function saudacao(nome){
 *   console.log(`Olá, ${nome}, bem-vindo ao curso de JavaScript!`);
 * }    
 * essa função agora recebe um parâmetro 'nome' e o utiliza na mensagem
 * para chamar a função com um argumento, fazemos o seguinte:
 * 
 * saudacao("Maria"); // isso exibirá "Olá, Maria, bem-vindo ao curso de JavaScript!"
 * funções também podem retornar valores usando a palavra-chave 'return'
 * exemplo:
 * 
 * function soma(a, b){
 *   return a + b;
 * }
 * em comparação com a linguagem Java, a sintaxe para criar funções em JavaScript é diferente
 * em Java, usamos o termo 'método' e precisamos especificar o tipo de retorno
 * exemplo em Java:
 * 
 * public int soma(int a, int b){
 *   return a + b;
 * }
 * em JavaScript, não precisamos especificar o tipo de retorno, pois a linguagem é dinamicamente tipada
 * além disso, JavaScript suporta funções anônimas e funções de seta (arrow functions), que são formas mais concisas de escrever funções
 * exemplo de função de seta:
 * 
 * const soma = (a, b) => a + b;    
 * em resumo, funções em JavaScript são blocos de código reutilizáveis que podem receber parâmetros e retornar valores
 * elas ajudam a organizar o código e são fundamentais para a programação em JavaScript
 * entender como criar e utilizar funções é essencial para qualquer desenvolvedor JavaScript
 * com base na aula 31 da seção 2 do curso: 
 * https://www.udemy.com/share/1026xa3@7YhU0ePL66gnw33LPAFQtPzHa2b46YiGY-fIhg5xFzvK6dVfWs1ackL_yUABw8Q4lw==/
 */
function saudacao(nome){
    console.log(`Olá, ${nome}, bem-vindo ao curso de JavaScript!`);
}
saudacao("Carlos");

function soma(a = 1,b = 1){
    return a + b;
}
let resultadoSoma = soma(5,10);
console.log(`O resultado da soma é: ${resultadoSoma}`);


