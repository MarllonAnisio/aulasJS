/**
 * função que retorna o nome do dia da semana baseado no número fornecido
 * @param {number} numeroDia - Número do dia da semana (1-7)
 * @returns {string} - Nome do dia da semana
 */
function retornaDiaSemana(numeroDia) {
    let diaSemana;
    switch (numeroDia) {
        case 1:
            diaSemana = "Domingo";
            break;
        case 2:
            diaSemana = "Segunda-feira";
            break;
        case 3:
            diaSemana = "Terça-feira";
            break;
        case 4:
            diaSemana = "Quarta-feira";
            break;
        case 5:
            diaSemana = "Quinta-feira";
            break;
        case 6:
            diaSemana = "Sexta-feira";
            break;
        case 7:
            diaSemana = "Sábado";
            break;
        default:
            diaSemana = "Número inválido";
    }
    return diaSemana;
}
/**
 * obtem o dia da semana atual e exibe no console
 */
const dia = new Date();

// so pra testar a função
const diaSemana = retornaDiaSemana(dia.getDay() + 1); // getDay() retorna 0 (Domingo) a 6 (Sábado)

// exibindo o resultado no console
console.log(`Hoje é: ${diaSemana}`);