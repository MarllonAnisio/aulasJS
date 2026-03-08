//primeira parte

//relembrando antiga atividade
let a = 'A';
let b = 'B';
let c = 'C';
console.log(a, b, c); // A B C
// com a atribuição via desestruturação podemos fazer o mesmo de forma mais simples
const letras = ['B', 'C', 'A'];
[a, b, c] = letras;

console.log(a, b, c); // A B C

//segunda parte

const numeros = [142, 264, 363, 4000, 1234, 24, 12, 9869, 987];
let  um, dois, tres;
[um, dois, tres] = numeros;

console.log(um, dois, tres); // 1 2 3

//porem posso pegar o resto dos elementos que não quero atribuir
[um,dois, ...resto] = numeros;
console.log(um, dois); // 1 2
console.log(resto); // [3, 4, 5, 6, 7, 8, 9]

//terceira parte

// quando usamos um array dentro de outro array
const numeros2 = [ [1,2,3], [4,5,6], [7,8,9] ];
let primeiro, segundo, terceiro;
[primeiro, segundo, terceiro] = numeros2;
console.log(primeiro, segundo, terceiro); // [1,2,3] [4,5,6] [7,8,9]

//porem se eu quiser pegar um elemento interno
const numeros3 = [ [10,20,30], [40,50,60], [70,80,90] ];
let dez, cinquenta, noventa;
console.log(numeros3);
[ [dez], [,cinquenta], [, ,noventa] ] = numeros3;
console.log(dez, cinquenta, noventa); // 10 50 90
// ou

/**
 * eu estou buscando o 40 que está no segundo array na primeira posição
 * e o 80 que está no terceiro array na segunda posição
 */
let quatro = numeros3[1][0];
let oito = numeros3[2][1];
console.log(quatro, oito); // 40 80

/**
 * dá pra entender mais sobre matrizes e arrays multidimensionais
 * na aula sobre loops que vem a seguir
 */