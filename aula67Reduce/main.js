/**
 * o reduce tem um acumulador como primeiro parametro, o que pode ser usado para ir iterando como se fosse um for
 * 
 * int total
 * for(int i = 0; i < 100; i++){
 *    total += i; // total é o parametro acumulador
 * }
 * 
 */

const pessoas = [
    {nome: "HECTOR", idade:22, sexo: undefined},
    {nome: "VANDERLEIA", idade: 31, sexo: "FENIMINO"},
    {nome: "JONAS", idade: 33, sexo: "MASCULINO"},
    {nome: "WANDWERLEY", idade: 17, sexo: "MASCULINO"},
    {nome: "DEBORA KARLASHOVA", idade: 15, sexo: "FENIMINO"},
    {nome: "LEGASOV", idade: 13, sexo: "MASCULINO"},
    {nome: "YURIVITCH", idade: 55 , sexo: undefined},
    {nome: "IVAN", idade: 55 , sexo: undefined},
    {nome: "HELIO", idade: 55 , sexo: undefined},
    {nome: "JANADREY", idade: 55 , sexo: undefined},
    {nome: "ANATOLY", idade: 90, sexo: "MASCULINO"},
    {nome: "CABOBLO", idade: 83, sexo: "MASCULINO"},
    {nome: "ERIKA", idade: 22, sexo: "FENIMINO"},
    {nome: "ANA", idade: 21, sexo: "FENIMINO"},
    {nome: "RONALDO", idade: 23, sexo: "MASCULINO"},
    {nome: "VALDIRENE", idade: 42, sexo: "FENIMINO"},
    {nome: "ITALO", idade: 41, sexo: "MASCULINO"},
    {nome: "CARLOS", idade: 100, sexo: undefined},
    {nome: "DANIEL", idade:70, sexo: "MASCULINO"},
    {nome: "MARCOS" , idade: 68, sexo: "MASCULINO"},
    {nome: "LUCAS" , idade: 46 , sexo: "MASCULINO"},
    {nome: "EITOR", idade: 55, sexo: "MASCULINO"},
    {nome: "PIPIPI", idade: 26, sexo: "FENIMINO"},
    {nome: "POPOPO", idade: 16 , sexo: undefined},
    {nome: "URSO", idade: 57, sexo: undefined},
    {nome: "PANDA", idade: 34, sexo: "MASCULINO"},
    {nome: "PARDA", idade: 18, sexo: "FENIMINO"}
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    
   return acumulador.idade >= valor.idade ?  acumulador : valor;
    
 //   if(acumulador.idade >= valor.idade) return acumulador;
 //   return valor;
})
console.log(maisVelha)