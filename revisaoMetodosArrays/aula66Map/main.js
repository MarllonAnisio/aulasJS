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
console.log(pessoas)
const sexoRedefinido = pessoas.filter((obj) => obj.sexo === undefined)
    .map((obj) => {
       obj.sexo = "não declarado"
       return obj;
});
console.log(sexoRedefinido)

//const redefinidoSemSexo = pessoas.map((obj) => {
//    delete(obj.sexo)
//    return obj;
//});

//console.log(redefinidoSemSexo)


//const pessoasComID = pessoas.map((obj, indice) => {
    //    obj.id = indice +1;
    //    return obj
    //});
    //console.log(pessoasComID)
    
    
/**
* nos podemos fazer diversas mudancas e alteraçoes nos arrays porem devemos ter cuidado, pois ao alterar o obj com o map ele altera o Obj base,
* diferente do filter que apenas retorna o objeto com base na condição da filtragem, como contornar isso?
simples só não fazer essas alteraçoes usando o obj original
*/

const pessoas2 = pessoas.map((pessoa, indice) => {
    const person = {...pessoa}
    person.id = ++indice
    return person
})
console.log(pessoas)
console.log(pessoas2)