/**
 * Exercício 1: Utilizando o loop "for...of", percorra um array de números e imprima cada número no console.
 *  ELE É PERFEITO PARA ARRAYS
 */
const numeros = [10, 20, 30, 40, 50];
const listaDeValores = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [true, false]
]
for (let numero of numeros) {
    console.log(numero);
}
console.log('--- outro exemplo ---');


const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const listaCheck =[];
/**
 * Usando o loop "for...of" para percorrer uma matriz (array de arrays)
 * A variável linha irá representar cada array interno em cada iteração
 * estou criando uma lista com os números pares da matriz
 */
for (let linha of matriz) {
    for (let elemento of linha) {
        if(elemento % 2 === 0){
            listaCheck.push(elemento);
        }
        console.log(listaCheck);
    }
}

console.log('--- outro exemplo ---');
for (let lista of listaDeValores) {
    for (let valor of lista) {
        console.log(valor);
    }
} 
