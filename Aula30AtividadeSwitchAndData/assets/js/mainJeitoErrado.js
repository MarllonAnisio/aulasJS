const h1 = document.querySelector('.conteiner h1');

const data = new Date();

function getNomeMes(numeroMes){
    let nomeMes;
    switch (numeroMes) {
        case 0:
            nomeMes = "Janeiro";
            break;
        case 1:
            nomeMes = "Fevereiro";
            break;
        case 2:
            nomeMes = "Março";
            break;
        case 3:
            nomeMes = "Abril";
            break;
        case 4:
            nomeMes = "Maio";
            break;
        case 5:
            nomeMes = "Junho";
            break;

        case 6:
            nomeMes = "Julho";
            break;
        case 7:
            nomeMes = "Agosto";
            break;
        case 8:
            nomeMes = "Setembro";
            break;
        case 9:
            nomeMes = "Outubro";
            break;
        case 10:
            nomeMes = "Novembro";
            break;  
        case 11:
            nomeMes = "Dezembro";
            break;
        default:
            nomeMes = "Mês inválido";
    }
    return nomeMes;
}
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

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMesMes = data.getMonth();

    const NomeMes = getNomeMes(numeroMesMes);
    const nomeDia = retornaDiaSemana(diaSemana);

    return `${nomeDia} ${data.getDate()} de ${NomeMes} de ${zeroAEsquerda(data.getFullYear())} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;
}

h1.innerHTML = criaData(data);