function rand(min, max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min)
}

function montarCarro(msg,tempo){
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('BAD VALUE, TRY AGAIN WTIH TEXT, NEXT TIME!');
                return;
            };
            resolve(msg.toUpperCase() + ' - passei na promise');
        }, tempo);

    });
}

const promises = [
    montarCarro('1 carro vermei', rand(2,3)),
    montarCarro('2 carro azuli', rand(2,12)),
    montarCarro('3 carro green', rand(1,1))
];
//retorna valores da promessa para um array
Promise.all(promises)
    .then(dados => {
        console.log(dados)
    })
    .catch(err => {
        console.log('aconteceu um erro ai', err)
    });

    
//retorna a primeira promessa resolvida
Promise.race(promises)
    .then(dados => {
        console.log(dados)
    })
    .catch(err => {
        console.log('aconteceu um erro ai', err)
    });

// simulando situação para resolve:
function baixarPagina(){
    const cache = false;

    if(cache){
        return Promise.resolve('pagina já em cache');
    }
    else{
        return montarCarro(' carro sendo montado/ baixando pagina', rand(5,8));
    }
}

baixarPagina().then(dados => {
    return console.log(dados)
}).catch(err =>{
    console.log(err);
})