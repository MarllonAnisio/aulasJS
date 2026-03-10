function rand(min, max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min)
}

function montarCarro(msg,tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE, TRY AGAIN WTIH TEXT, NEXT TIME!');
        setTimeout(() => {
            resolve(msg);
        }, tempo);

    });
}

class Carro{
    constructor(){

    }
    lataria;
    motor;
    tintura;
    rodas;
    bateria;
    volante;
}


montarCarro('Montando Lataria', rand(5,15))
    .then((resposta) =>{
        carro.lataria = 'aluminio'
        console.log(resposta, carro);
        return montarCarro('Adicionando Motor', rand(2, 3));
    })
    .then((resposta) =>{
        carro.motor = 'ap 1.8';
        console.log(resposta, carro);
        return montarCarro('Adicionando bateria', rand(3, 6));
    })
    .then((resposta) =>{
        carro.bateria = 'litio'
        console.log(resposta, carro);
        return montarCarro('Adicionando pintura', rand(1, 3));
    })
    .then((resposta) =>{
        carro.tintura = 'vermelho'
        console.log(resposta, carro);
        return montarCarro('Adicionando rodas', rand(2, 5));
    })
    .then((resposta) =>{
        carro.rodas = 'cromadas'
        console.log(resposta, carro);
        return montarCarro('Adicionando volante', rand(1, 3));
    })
    .then((resposta) =>{
       carro.volante = 'Um volante'
       console.log(resposta,carro);
    })
    .catch((e) =>{
        console.error(e)
    })
    .finally(() => {
        console.log('fluxo de construção finalizado')
    })

    





const carro = new Carro();




