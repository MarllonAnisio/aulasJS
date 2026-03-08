/**
 * a função geradora tem multiplos retornos que nao interrompem o metodo, acredito que seja interessante para cenarios de certos padroes
 * como o padrao build e o abstract function
 */
function* geradora1(){
    yield "dale";
    yield "dale1";
    yield "dale2";
    yield "dale3";
    yield* geradora2();
    yield* geradora3();
}

function* geradora2(){

    yield "daleOOP";
    yield "dale11";
    yield "dale22";
    yield "dale33";
}
function* geradora3(){

    yield "daleHOPHA";
    yield "dale112";
    yield "dale222";
    yield "dale332";
}
const gera = geradora1();
for(let x of gera){
    console.log(x)
}