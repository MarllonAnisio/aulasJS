

function funcao(){
    console.log(`hello`);
}
/**
 * no js não gera erro passar valores para a função sem que eles previamente tenham sido declarados 
 * nos parametros da função posso trabalhar com a função, passando argumentos mesmo sem declarar nada, 
 * considero uma faca de dois gumes, por um lado abresse um leque de oportunidades
 * por outro a possibilidade do caos absoluto, legibilidade zero
 */
funcao(1,2,3,4,5,6)


/**
 * caso eu queira trabalhar com esses argumentos que vem pelos parameteros da função
 * posso fazer dessa forma:
 */
function testandoArguments(){
    let total = 0;

    for(let argument of arguments){
        total += argument;
    }


    console.log(total);
}

const lista = [0,60,70,3654,66,7,8,9,3,334,56,["marllon"]];

testandoArguments(lista);
testandoArguments(0,60,70,3654,66,7,8,9,3,334,56);
