/**
 * usando setInterval e setTimeout 
 * fazendo um relogio contador
 */

const iniciarBtn = document.getElementById("iniciar");
const pararBtn = document.getElementById("parar");
const contadorDisplay = document.getElementById("contador");

const box = document.querySelector(".box");
const conteiner = document.querySelector(".conteiner");

let horaAtual;
let horaComeco;
let intervaloId = null;

iniciarBtn.addEventListener("click", () => {

    if (intervaloId === null) {
        horaComeco = new Date();

        intervaloId = setInterval(() => {

            horaAtual = new Date();
            contadorDisplay.textContent = horaAtual.toLocaleTimeString();
            mudarCorFundo();

        }, 1000);
    }
});
pararBtn.addEventListener("click", () => {

        try{
            if(intervaloId === null)
                throw new Error("O contador não está em execução.");

        }catch(error){
                window.alert(error.message);
                return;
            }
        pararContador();
        const horaFim = new Date();

        const elementoTexto = criarElementoTexto();
        // CORREÇÃO: Tratamento caso o usuário pare muito rápido
        if (horaComeco) {
            elementoTexto.textContent = `Tempo trabalhado: ${calcularTempoTrabalhado(horaComeco, horaFim)}`;
            box.appendChild(elementoTexto);
        }
});
function mudarCorFundo(){
    if(!horaAtual) return;

    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();

    let estadoCorAtual = document.body.style.backgroundColor;
    let corDesejada = "";

    if(horas >= 22)   
        corDesejada = "darkblue";

    else if(horas < 22) 
        corDesejada = "";

    if(estadoCorAtual !== corDesejada){
        console.log("Mudando cor de fundo para:", corDesejada || "padrão");
        document.body.style.backgroundColor = corDesejada;

        estadoCorAtual = corDesejada;
    }
}
function pararContador(){
    clearInterval(intervaloId);
    intervaloId = null;
} 
function criarElementoTexto(){
    const p = document.createElement("p");
    return p;
}
function calcularTempoTrabalhado(horaComeco, horaFim) {
    let diferencaEmMs = horaFim - horaComeco;
    try{
        if(isNaN(diferencaEmMs)){
            throw new Error("Valor inválido para cálculo de tempo trabalhado.");
        }
    }catch(error){
        console.error(error.message);
        return "Cálculo de tempo trabalhado indisponível.";
    }
    let diferencaEmHoras = Math.floor(diferencaEmMs / (1000 * 60 * 60));
    let diferencaEmMinutos = Math.floor((diferencaEmMs % (1000 * 60 * 60)) / (1000 * 60));
    let diferencaEmSegundos = Math.floor((diferencaEmMs % (1000 * 60)) / 1000);
    
    return `${diferencaEmHoras}h ${diferencaEmMinutos}m ${diferencaEmSegundos}s`;
}
