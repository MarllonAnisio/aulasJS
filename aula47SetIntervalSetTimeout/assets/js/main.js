/**
 * usando setInterval e setTimeout 
 * fazendo um relogio contador
 */

const iniciarBtn = document.getElementById("iniciar");
const pararBtn = document.getElementById("parar");
const contadorDisplay = document.getElementById("contador");
const box = document.querySelector(".box");
const conteiner = document.querySelector(".conteiner");

let hora;
let horaComeco;
let intervaloId = null;

iniciarBtn.addEventListener("click", () => {
    iniciandoTrabalho();
    if (intervaloId === null) {
        intervaloId = setInterval(() => {           
            hora = new Date();
            contadorDisplay.textContent = hora.toLocaleTimeString();
        }, 1000);
    }
    mudarCorFundo();
});

pararBtn.addEventListener("click", () => {
        pararContador();
        const horaFim = new Date();

        let elementoTexto = criarElementoTexto();
        elementoTexto.innerText = `tempo trabalhado: ${calcularTempoTrabalhado(horaComeco, horaFim)}`;
        box.appendChild(elementoTexto);

        horaFim = null;
        horaComeco = null;
});

function mudarCorFundo(){
    if(hora.getHours() <= 20){
        document.body.style.backgroundColor = "";
    }
    if(hora.getHours() >= 8  &  hora.getMinutes() >= 25){
        document.body.style.backgroundColor = "white";
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
    return `${diferencaEmHoras} horas, ${diferencaEmMinutos} minutos e ${diferencaEmSegundos} segundos`;
}
function iniciandoTrabalho(){
    hora = new Date();
    horaComeco = hora;
}