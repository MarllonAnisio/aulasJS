class Pessoa{
    constructor(nome,salario,empresa){
        nome = nome;
        salario = salario;
        empresa = empresa;
    }
    seParesentar(){
        console.log(`Meu nome é ${nome}, trabalho na empresa: ${empresa} e meu salario é: ${salario}`);
    }
}