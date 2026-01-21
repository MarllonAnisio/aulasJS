const form = document.querySelector(`#form`);


form.addEventListener(`submit`, function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector(`#peso`)
    const inputAltura = e.target.querySelector(`#altura`)
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso || !altura){
        setResultado(`peso ou altura invalidos, digite novamente`, false);
        return;
    }

    const imc = calculaIMC(peso, altura);
    const msg = `Seu IMC é ${imc} ${nivelIMC(imc)}`;

    setResultado(msg, true);
});

function criaP() {
    const p = document.createElement('p');
    return p;
}
function setResultado (msg, isValid){
    const resultado = document.querySelector(`#resultado`);
    resultado.innerHTML = '';
    const p = criaP();

    if(isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad-result');
    }


    p.innerHTML = 'seu IMC é: ' + msg;
    resultado.appendChild(p);
}
function calculaIMC (peso, altura){
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}
function nivelIMC (imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if(imc >= 39.9) 
        return nivel[5];

    if(imc >= 34.9) 
        return nivel[4];

    if(imc >= 29.9) 
        return nivel[3];

    if(imc >= 24.9) 
        return nivel[2];

    if(imc >= 18.5) 
        return nivel[1];

    if(imc < 18.5) 
        return nivel[0];
}