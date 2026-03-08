/**
 * break e contunue
 * O break é usado para sair completamente de um loop ou switch, enquanto o continue é usado para pular a iteração atual 
 * e continuar com a próxima iteração do loop.
 */

// Exemplo de uso do break
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break; // Sai do loop quando i é igual a 6
    }
    console.log(`Break Exemplo: ${i}`);
}

console.log('---');

/**
 * toda via não é sempre bom usar o break, pois pode tornar o código menos legível.
 * É importante usar o break com moderação e garantir que seu uso seja claro para quem lê o código.
 * 
 * do mesmo jeito o continue também pode tornar o código menos legível se usado em excesso.
 * 
 * vale salientar o uso por exemplo de loops aninhados, onde o break ou continue pode afetar apenas o loop mais interno.
 * 
 * Em geral, é recomendável usar break e continue com moderação e considerar alternativas, como o uso de funções ou 
 * estruturas de controle mais claras, para melhorar a legibilidade do código.
 * 
 * alem disso vale eu falar sobre o famoso caso do While(true) que é um loop infinito que só é interrompido 
 * por um break interno, como em servidores que ficam rodando até serem desligados, nessa situação o break é essencial.
 * porem não se pode sair usando while(true) em qualquer situação, pois pode travar o sistema.
 * se voce pode usar um loop com condição de parada, use.
 */

// Exemplo de uso do continue
const listaImpar = [];

for (let j = 1; j <= 11111; j++) {
    if (j % 2 === 0) {
        continue; // Pula a iteração quando j é par
    }
    listaImpar.push(j);
    console.log(`Continue Exemplo: ${listaImpar.length}`);
}