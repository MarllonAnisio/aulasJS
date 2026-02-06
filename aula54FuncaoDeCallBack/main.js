/**
 * usado para receber retorno apos a execução da funcao
 * 
 */

//explicando com timeout

function rand(min = 1000, max = 15000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
}
function funcao(){
    setTimeout( 
        function(){
            console.log("Dale Marcio");
        }, 
        rand()
    );
}
function funcao2(){
    setTimeout( 
        function(){
            console.log("Dale MARLLLLLONM");
        }, 
        rand()
    );
}
function funcao3(){
    setTimeout( 
        function(){
            console.log("Dale wanderleeey");
        }, 
        rand()
    );
}
function funcao4(){
    setTimeout( 
        function(){
            console.log("Dale erikson");
        }, 
        rand()
    );
}

funcao();
funcao2();
funcao3();
funcao4();