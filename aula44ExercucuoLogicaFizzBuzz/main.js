/**
 * exercicio FizzBuzz
 */

/**
 * Função que retorna Fizz, Buzz, FizzBuzz ou o próprio número
 * dependendo se o número é divisível por 3, 5 ou ambos.
 * Se o valor fornecido não for um número, retorna uma mensagem de erro.
 * @param {number} num - O número a ser verificado
 * @returns {string|number} - 'Fizz' se divisível por 3, 'Buzz' se divisível por 5,
 * 'FizzBuzz' se divisível por ambos, ou o próprio número se não for divisível por nenhum, ou se for algum
 * tipo diferente de número retorna uma mensagem de erro.
 */
function fizzBuzz(num) {
    if (typeof num !== 'number')
        return 'Não é um número válido :  ' + num;
    if (num % 3 === 0 && num % 5 === 0) 
        return 'FizzBuzz';

    /**
     * usando operador ternário para simplificar o código
     * é equivalente a:
     * if (num % 3 === 0)
     *    return 'Fizz';
     * else if (num % 5 === 0)
     *    return 'Buzz';
     * else
     *    return num;
     * 
     * primeira condição é verificada, se for verdadeira retorna 'Fizz'
     * se for falsa, verifica a segunda condição, se for verdadeira retorna 'Buzz'
     * se ambas forem falsas, retorna o próprio número.
     */
    return num % 3 === 0 ? 'Fizz' : num % 5 === 0 ? 'Buzz' : num;
}


console.log(fizzBuzz(15));
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(7));
console.log(fizzBuzz('a'));
console.log(fizzBuzz(true));



for (let i = 1; i <= 100; i++) {
    console.log(i + ': ' + fizzBuzz(i));
}