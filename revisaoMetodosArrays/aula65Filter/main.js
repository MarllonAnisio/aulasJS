/**
 * O metodo Filter é usado para filtrar valores de um array, ele é uma funcão apenas disponivel para arrays
 * ele comba com o map e o reduce
 */

// vale ressaltar que o filter não altera o array base, então tem que ter um array para receber os valores filtrados
const numeros = [1,55,61,123,34,55,83,3,5,8,88,45,67,2,21,22,31,100,102]

//function callbackFilter(valor,indice, array){
//    return valor > 10;
//}

const numerosFiltrados = numeros.filter((valor) => valor > 10 && valor < 80);
console.log(numerosFiltrados);

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

// a maior arma usando o filter é em arrays de objetos, já pensando em OO, tendo em vista um array de pessoas
// vamos dizer que queremos filtrar e receber apenas as pessoas maiores de idade, as com sexo feminino, masculino

const homens = pessoas.filter((obj) => obj.sexo === "MASCULINO");
console.log(homens);

const mulheres = pessoas.filter((obj) => obj.sexo === "FENIMINO");
console.log(mulheres);

const maiorDeIdade = pessoas.filter((obj) => obj.idade > 17);
console.log(maiorDeIdade);

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 7);
console.log(pessoasComNomeGrande);

const nomesComFinalA =  pessoas.filter((obj) => obj.nome.endsWith("A"));
console.log(nomesComFinalA);

const nomesComFinalO =  pessoas.filter((obj) => obj.nome.endsWith("O"));
console.log(nomesComFinalO);