/**
 * try catch no JavaScript
 */


/**
 * Função para dividir dois números com tratamento de erro para divisão por zero
 * @param {number} num1 - O dividendo
 * @param {number} num2 - O divisor
 * @returns {void}
 * 
 * o try catch é usado para capturar erros que podem ocorrer durante a execução do código dentro do bloco try.
 * Se um erro ocorrer, a execução é interrompida e o controle é passado para o bloco catch,
 * onde o erro pode ser tratado de forma adequada, como exibindo uma mensagem de erro.
 * mas porque marllon? 
 * Porque é importante tratar erros para evitar que o programa quebre inesperadamente,
 * proporcionando uma melhor experiência ao usuário e facilitando a depuração do código.
 * o usuario nunca pode ver o erro cru, sempre trate os erros!
 * e ele tambem não vai entender nada sobre erros de programação.
 * trate os erros de forma amigável.
 * try significa tentar, catch significa capturar.
 */
function dividirNumeros(num1, num2) {
    try{

        if(typeof num1 !== 'number' || typeof num2 !== 'number')
            throw new Error("Ambos os valores devem ser números.");
        
        if(num1 === 0 || num2 === 0)
            throw new Error("Divisão por zero não é permitida.");

        const resultado = num1 / num2;
        console.log(`O resultado da divisão é: ${resultado}`);
        
    } catch (error) {
        console.error(`Erro: ${error.message}`);
    }
}

dividirNumeros(10, 2); // Deve funcionar normalmente
dividirNumeros(10, 0); // Deve lançar um erro de divisão por zero
dividirNumeros(0, 5); // Deve lançar um erro de divisão por zero
dividirNumeros(0, 0); // Deve lançar um erro de divisão por zero