

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



// vamos pra sacanagem
/**
 * 
 * @param a  valor que deve vir para a função
 * @param b valor que ja tem pre definido
 * @param c valor que  deve vir para a função
 */
function funcaoTipoVariavelEmRecebimento(a, b, c){
    b = b || 2; // b se não for undefined ou null ele recebe o valor que vem do do parametro, se não ele recebe o valor pre definido
    return a + b*c
    
}
/**
 * caso perfeito, chegou os 3 parametros
 */
console.log(funcaoTipoVariavelEmRecebimento(14,10, 2));
/**
 * chegou um parametro quebrado, ele vai usar o 2 como padrão
 */
console.log(funcaoTipoVariavelEmRecebimento(10,"", 4));

/**
 * reconehce o undefined, vai usar o padrão
 */
console.log(funcaoTipoVariavelEmRecebimento(33,undefined, 6));

console.log(funcaoTipoVariavelEmRecebimento(33,null, 6));

console.log(funcaoTipoVariavelEmRecebimento(33,0, 6));

/**
 * pelo parametro não estar vazio, ele acaba tentando multiplicar usando uma string para multiplicar, nesse caso dá errado
 */
console.log(funcaoTipoVariavelEmRecebimento(33, "undefined" , 6));

console.log(funcaoTipoVariavelEmRecebimento(33, 30 , 5));

console.log(funcaoTipoVariavelEmRecebimento(33,true, 6));

console.log(funcaoTipoVariavelEmRecebimento(33,false, 6));

console.log(funcaoTipoVariavelEmRecebimento(33,33,333,333, 6));


//podemos fazer desestruturação:

function desestruturacao([a1, a2, a3]){
    return a1 + a2 + a3;
}
const listaDesestruturacao = [34, 44,69,77,89,11];
console.log(desestruturacao(listaDesestruturacao));



//outra maneira

/**
 * 
 * como trabalhado antes esses ... é pegando o resto, seria como passar varios valores porem a partir de um ponto é o resto,
 * nesse caso o ultimo valor é oacumulador, o resto que vier depois dele vai virar uma lista
 */
function funcao3(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === "+")  acumulador += numero;
        if(operador === "-")  acumulador -= numero;
        if(operador === "/")  acumulador /= numero;
        if(operador === "*")  acumulador *= numero;
    }
    console.log(`no array tinha ${numeros.length} e o retorno a partir do operador ${operador} é: ${acumulador}`);
    return acumulador;
}
console.log("---------------funcao3--------------");
funcao3("+", 0, 77,88,99,0.66,7.7,70);
funcao3("-", 0, 77,88,99,0.66,7.7,70);
funcao3("/", 1, 77,88,99,0.66,7.7,70);
funcao3("*", 1, 77,88,99,0.66,7.7,70);