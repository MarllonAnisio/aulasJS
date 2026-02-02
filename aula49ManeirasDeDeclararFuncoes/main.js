
/**
 * na declaração concreta da função, igual o var, ela sofre hoisting, ou seja
 * ela sempre é carregada para o topo do arquivo
 */
function oi(){
    console.log("oi")
}
//funcoes são fist-class object (objetos de primeira classe)

const souUmDado = function(){
    console.log("sou um dado.");
}
/**
 *  podemos nesse caso chamar souUmDado como fuma função porque é uma variavel que recebe uma função!?
 * estranho mas pode!
 */
//souUmDado();

//vamos piorar a situação:

/**
 * podemos piorar, uma função, pode receber como parametro outra função, isso mesmo!
 */
function falarOiESouUmDado(funcao){
    funcao();
 
}
falarOiESouUmDado(souUmDado);

const arrow = (a, b) =>  a + b;

console.log(arrow(15,15));


//tambem podemos criar funcoes dentro de objetos


const pessoa = {
    nome: "marllon",
    idade: 22,
    falar() {
        console.log(`oi eu sou o ${this.nome} tenho ${this.idade}`);
    }
}
pessoa.falar();