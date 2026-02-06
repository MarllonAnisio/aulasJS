/**
 * usado para receber retorno apos a execução da funcao
 * 
 */

//explicando com timeout

function rand(min = 1000, max = 5000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
}
const carro = {
    lataria: false,
    rodas: false,
    motor: false,
    pintura: false,
    situacao(){
        console.log(` sutuação do carro: lataria feita: ${this.lataria} rodas implantadas: ${this.rodas} motor implantado: ${this.motor} pintura feita: ${this.pintura}`)
    }
}
function funcaoLataria(callback){
    setTimeout( 
        function(){
           carro.lataria = true;
           carro.situacao();
           if(callback) 
                callback();
        }, 
        rand()
    );
}
function funcaoRodas(callback){
    setTimeout( 
        function(){
            carro.rodas = true;
            carro.situacao();
            if(callback) 
                callback();
        }, 
        rand()
    );
}
function funcaoMotor(callback){
    setTimeout( 
        function(){
            carro.motor = true;
            carro.situacao();
            if(callback) 
                callback();
        }, 
        rand()
    );
}
function funcaoPintura(callback){
    setTimeout( 
        function(){
            carro.pintura = true;
            carro.situacao();
            if(callback) 
                callback();
        }, 
        rand()
    );
}

funcaoLataria(
    function(){
        funcaoMotor(
            function(){
                funcaoRodas(
                    function(){
                        funcaoPintura(
                            function(){
                                console.log("-----------------------------ACABOOOU---------------------------------");
                            }
                        );
                        
                    }
                );
            }
        );
    }
);


    
