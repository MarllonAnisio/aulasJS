/**
 * escreva uma função que recebe dois numeros e retorne o maior deles.
 * Caso os numeros sejam iguais, retorne uma mensagem dizendo que eles são iguais.
 */

function maiorNumero(num1, num2) {
    if(num1 === num2)
        return 'Os números são iguais.';
    return num1 > num2 ? num1 : num2;
}

console.log(maiorNumero(10, 5));
console.log(maiorNumero(3, 8));
console.log(maiorNumero(7, 7));

console.log('-----------------------');
// com arrow function
const maiorNumeroArrow = (num1, num2) => num1 === num2 ? "são iguais, urubu" : num1 > num2 ? num1 : num2;

console.log(maiorNumeroArrow(12934, 345));
console.log(maiorNumeroArrow(3432343, 834234));
console.log(maiorNumeroArrow(7, 7));