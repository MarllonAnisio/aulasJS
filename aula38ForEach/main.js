/**
 *  Utilizando o loop "forEach", O forEach é um método de array em JavaScript que executa uma função fornecida 
 * uma vez para cada elemento do array. Ele é usado para iterar sobre os elementos de um array de forma simples e concisa.
 *  ELE É PERFEITO PARA ARRAYS
 */
const numeros = [10, 20, 30, 40, 50];
const listaDeValores = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [true, false]
];
/**
 * Usando o método forEach para percorrer o array numeros
 * A função fornecida recebe cada elemento do array em cada iteração
 */
numeros.forEach(function(numero){
    console.log(numero);
});

console.log('--- outro exemplo ---');

/**
 * Usando o método forEach para percorrer uma matriz (array de arrays)
 * A função fornecida recebe cada array interno em cada iteração
 */
listaDeValores.forEach(function(lista, indice){
    console.log(`Lista ${indice}:`);
    lista.forEach(function(valor){
        console.log(valor);
    });
});

/**
 * podemos usar isso igual no java para percorrer um objeto?
 * Não, o método forEach é específico para arrays em JavaScript e não pode ser usado diretamente para percorrer objetos.
 * Para percorrer as propriedades de um objeto, você pode usar o loop "for...in" ou métodos como Object.keys(), 
 * Object.values() ou Object.entries() combinados com forEach.
 */