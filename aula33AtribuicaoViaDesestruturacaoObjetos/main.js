const pessoa = {
    nome: 'Ana',
    idade: 25,
    profissao: 'Engenheira',
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP',
        rua: 'Av. Paulista',
        numero: 1000
    }
};
const nomePessoa = pessoa.nome;
console.log(nomePessoa); // Ana


/**
 * Atribuição via desestruturação de objetos
 */
const { nome, idade, profissao } = pessoa;
console.log(nome, idade, profissao); // Ana 25 Engenheira
/**
 * No caso de objetos, a desestruturação é feita com chaves {}
 * e as variáveis devem ter o mesmo nome das propriedades do objeto
 * para que a atribuição funcione corretamente
 * 
 * Se eu quiser atribuir a uma variável com nome diferente
 * eu posso fazer
 * const { nome: nomeCompleto, idade: anos } = pessoa;
 * console.log(nomeCompleto, anos); // Ana 25
 * 
 * posso tambem começar as variaveis com valores padrão
 * const { nome, idade, profissao, salario = 0 } = pessoa;
 * 
 * assim, se a propriedade não existir no objeto, a variável salario
 * receberá o valor padrão 0
 */

/**
 * Atribuição via desestruturação de objetos aninhados
 * No caso de objetos aninhados, posso desestruturar
 * também as propriedades internas
 * 
 */
const { endereco: { cidade, estado } } = pessoa;
console.log(cidade, estado); // São Paulo SP

// de uma forma mais completa
const { 
    nome: nomeDaPessoa, 
    endereco: {
    cidade: cidadePessoa, 
    estado: estadoPessoa, 
    rua: ruaPessoa, 
    numero: numeroPessoa 
    }, 
    endereco } = pessoa;

console.log(`meu nome é ${nomeDaPessoa}, moro em ${cidadePessoa} ${estadoPessoa}, na rua ${ruaPessoa}, nº ${numeroPessoa}`);