const h1 = document.querySelector('.conteiner h1');

const data = new Date();

function getNomeMes(numeroMes){
    const meses = [
        "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Junho",
        "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
    ];
    
    return meses[numeroMes];
}
function retornaDiaSemana(numeroDia) {
    const diasSemana = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
        "Quinta-feira", "Sexta-feira", "Sábado"
    ];
    return diasSemana[numeroDia];
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