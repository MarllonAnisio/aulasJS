//const dataAtual = new Date(2000, 0, 4, 15, 23, 30, 45);
//console.log("Data e hora atuais:", dataAtual.toString());

// Criando uma data específica: 25 de dezembro de 2022, às 10:30
//const dataEspecifica = new Date('2022-12-25T10:30:00');
//console.log("Data específica:", dataEspecifica.toString());

//const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milissegundos
//const umDia = 60 * 60 * 24 * 1000; // 1 dia em milissegundos
//console.log("Três horas em milissegundos:", tresHoras);
//console.log("Um dia em milissegundos:", umDia);

//const dataMaisTresHoras = new Date(dataAtual.getTime() + tresHoras);
//console.log("Data atual mais 3 horas:", dataMaisTresHoras.toString());

//const dataMaisUmDia = new Date(dataAtual.getTime() + umDia);
//console.log("Data atual mais 1 dia:", dataMaisUmDia.toString());

const dataAtual = new Date("2019-4-20 20:15:59.100");

console.log("Dia:", dataAtual.getDate());
console.log("Mês:", dataAtual.getMonth() + 1); // Adiciona 1 porque os meses são indexados a partir de 0
console.log("Ano:", dataAtual.getFullYear());
console.log("Hora:", dataAtual.getHours());
console.log("Minutos:", dataAtual.getMinutes());
console.log("Segundos:", dataAtual.getSeconds());
console.log("Milissegundos:", dataAtual.getMilliseconds());
console.log("Dia da semana:", dataAtual.getDay());
