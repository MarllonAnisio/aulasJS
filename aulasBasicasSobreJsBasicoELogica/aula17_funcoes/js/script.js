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

/** 
 * explicando arrow functions em JavaScript
 * arrow functions são uma forma mais concisa de escrever funções em JavaScript
 * elas foram introduzidas no ECMAScript 6 (ES6) e oferecem uma sintaxe mais curta
 * além disso, arrow functions não possuem seu próprio contexto 'this', herdando-o
 * do escopo onde foram definidas
 * a sintaxe básica de uma arrow function é a seguinte:
 * 
 * const nomeDaFuncao = (param1, param2) => {
 *   // corpo da função
 * }    
 *
 * se a função tiver apenas uma expressão no corpo, as chaves e a palavra-chave 'return' podem ser omitidas:
 * 
 * const nomeDaFuncao = (param1, param2) => param1 + param2;
 * isso torna o código mais limpo e fácil de ler
 * se a função tiver apenas um parâmetro, os parênteses também podem ser omitidos:
 * 
 * const nomeDaFuncao = param => param * 2;
 * arrow functions são especialmente úteis para funções de callback e métodos de array, como map, filter e reduce
 * exemplo usando arrow function com map:
 * 
 * const numeros = [1, 2, 3, 4, 5];
 * const numerosDobrados = numeros.map(numero => numero * 2);
 * console.log(numerosDobrados); // [2, 4, 6, 8, 10]
 */

const potencia = (base, expoente) => base ** expoente;
let resultadoPotencia = potencia(2, 3);
console.log(`O resultado da potência é: ${resultadoPotencia}`);

const listaNomes = ["ana", "bia", "carlos", "danielle", "eduardo"];
const maiorNome = listaNomes.reduce((maior, nomeAtual) => 
    nomeAtual.length > maior.length ? nomeAtual : maior, "");
console.log(`O maior nome da lista é: ${maiorNome}`);

/**
 * explicando o Reduce em JavaScript
 * o método reduce() em JavaScript é uma função de array que permite reduzir um array a um único valor
 * ele executa uma função callback para cada elemento do array, acumulando um resultado
 * a sintaxe básica do reduce é a seguinte:
 * 
 * array.reduce((acumulador, valorAtual) => { 
 *  // corpo da função
 * }, valorInicial);
 * o 'acumulador' é o valor que é retornado após cada iteração e é passado para a próxima iteração
 * o 'valorAtual' é o elemento atual do array sendo processado
 * o 'valorInicial' é opcional e define o valor inicial do acumulador
 */

/** 
 * fim da explicação sobre funções, arrow functions e reduce em JavaScript
 * com base até a aula 31 da seção 2 do curso:
 * https://www.udemy.com/share/1026xa3@7YhU0ePL66gnw33LPAFQtPzHa2b46YiGY-fIhg5xFzvK6dVfWs1ackL_yUABw8Q4lw==/
 */

