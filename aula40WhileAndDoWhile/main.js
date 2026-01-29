/**
 * entenda a diferença entre while e do while
 * o while verifica a condição antes de executar o bloco de código
 * já o do while executa o bloco de código pelo menos uma vez antes de verificar a condição
 * isso é útil quando você quer garantir que o código seja executado pelo menos uma vez, independentemente da condição
 * 
 */

let contador = 0;

console.log('--- Exemplo de while ---');    
// Exemplo de while
while (contador < 5) {
    console.log(`Contador (while): ${contador}`);
    contador++;
}
console.log('--- Exemplo de do...while ---');
contador = 0; // resetando o contador para o exemplo do do...while
// Exemplo de do...while
do {
    console.log(`Contador (do...while): ${contador}`);
    contador++;
} while (contador < 5);

/**
 * diferença prática entre while e do while
 * no exemplo acima, o while não executa o bloco de código se a condição inicial for falsa
 * já o do while executa o bloco de código uma vez antes de verificar a condição
 */

// fazer um numero, random entre 0 e 10

function random(min, max) {
    return Math.random() * (max - min) + min;
}

console.log('--- Exemplo prático de while ---');
let numero = Math.floor(random(0, 100));
console.log(`Número gerado (while): ${numero}`);