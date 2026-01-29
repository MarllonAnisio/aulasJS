/**
 * entendendo Try, Catch e Finally no JavaScript
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
    /**
     * o bloco finally é opcional e sempre será executado após o try e o catch,
     * independentemente de um erro ter ocorrido ou não.
     * Ele é útil para executar código de limpeza ou liberar recursos,
     * garantindo que certas ações sejam realizadas, como fechar conexões
     * ou liberar memória.
     */
    finally {
            console.log("Operação de divisão finalizada.");
    }
}

dividirNumeros(10, 2);
dividirNumeros(10, 0);
dividirNumeros(0, 5);
dividirNumeros(0, 0); 

/**
 * vamos fazer usando date
 */

function mostrarDataAtual() {
    try {
        const dataAtual = new Date();
        console.log(`Data e hora atual: ${dataAtual.toString()}`);

    } catch (error) {
        console.error(`Erro ao obter a data atual: ${error.message}`);
    } finally {
        console.log("Operação de obtenção da data finalizada.");
    }
}

console.log("----------------- Testando com parâmetro inválido: -------------------");
mostrarDataAtual();


function mostrarData(date) {
    try {
        if (!(date instanceof Date)) {
            throw new Error("O parâmetro fornecido não é uma data válida.");
        }
        console.log(`Data e hora atual: ${date.toString()}`);
    } catch (error) {
        console.error(`Erro ao obter a data atual: ${error.message}`);
    } finally {
        console.log("Operação de obtenção da data finalizada.");
    }

}
console.log("----------------- Testando com parâmetro inválido: -------------------");

const dataInvalida = "2024-06-01";
mostrarData(dataInvalida);

console.log("----------------- Testando com parâmetro válido: -------------------");
const dataValida = new Date();
mostrarData(dataValida);
