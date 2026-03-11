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

async function executa(){
    try{
        const fase1 = await montarCarro('fase 1', rand(1,3));
        console.log(fase1);
        const fase2 = await montarCarro('fase 2', rand(1,3));
        console.log(fase2);
        const fase3 = await montarCarro('fase 3', rand(1,3));
        console.log(fase3);
    }
    catch(err){
        console.log()

    }
}
executa();

/**
 * Pending    -> Pendente
 * Fullfilled -> Resolvida
 * Rejected   -> Rejeitada
 */