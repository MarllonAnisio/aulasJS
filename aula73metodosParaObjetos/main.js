/**
 * alguns metodos para objetos, sua usabilidade no mercado
 */

// Object.keys(obj)
//   this.nome = nome;
 //   this.preco = valor;
 //   this.categoria = categoria;
 //   this.estoque = estoque;
function Objeto(nome, valor, categoria, estoque){
 
    Object.defineProperties(this, {
        nome: {        
            enumerable: true, // mostra a chave
            configurable: false,  // se posso configurar, apagar etc 
            get(){
                return nome;
            },
            set(nomeNovo){
                if(nomeNovo !== '' && nomeNovo !== undefined){
                    nome = nomeNovo;
                }
            }
        },
        preco: {        
            enumerable: true, 
            value: valor, 
            writable: true, 
            configurable: false 
        },
        categoria: {
            enumerable: true, 
            value: categoria, 
            writable: true, 
            configurable: false 
        },
        estoque: {
            enumerable: true, 
            value: estoque, 
            writable: true, 
            configurable: false 
        }
    });
    
}

const obj = new Objeto('lapis', 1.5, 'material escolar', 300);

/**
 * esse metodo retorna um array com as chaves (os nomes das propriedades)
 * usado pra saber quantas propriedas um objeto tem, podendo usar isso:
 * Object.keys(usuario).length
 */
console.log(Object.keys(obj))
console.log(Object.keys(obj).length) // quantas propriedades tem o projeto

/**
 * Retorna um array com os valores.
 * Útil quando você quer somar totais ou listar dados ignorando os IDs/chaves. 
 * Ex: Somar todos os salários de um objeto de folha de pagamento
 */
console.log(Object.values(obj)); 

/**
 * O que faz: Retorna um array de arrays no formato [chave, valor].
 * bom pra usar com loops modernos e desestruturação.
 */
Object.entries(obj)


/**
 * ... (Spread Operator):
 * O que faz: "Espalha" as propriedades de um objeto dentro de outro. É a sintaxe moderna e favorita da comunidade.
 *Mercado: Usado em 99% das atualizações de estado no React.
 */


/**
 * Object.assign(destino, origem1, origem2...): 
 * O que faz: Copia os valores das propriedades de um ou mais objetos de origem para um objeto de destino. 
 * Atenção: Ele muta o objeto de destino. Para clonar sem mutar o original, o destino deve ser um objeto vazio {}.
 */

const base = { config: 'dark mode', admin: false };
const atualizacao = { admin: true };

// Usando Spread (Moderno)
const novoUsuario1 = { ...base, ...atualizacao }; 

// Usando Assign (Clássico)
const novoUsuario2 = Object.assign({}, base, atualizacao);


/**
 * o freeze ele é usado para criar uma constante, que é imutavel, podendo ser usado por exemplo para criar enums em Js
 * 
 * Nota avançada: Ele é "raso" (shallow). Se tiver um objeto dentro do objeto congelado, 
 * o de dentro ainda pode ser alterado, a menos que você crie uma função para congelar profundamente (deep freeze).
 */

/**
 * Object.getOwnPropertyDescriptor(obj, 'prop'):
 * O que faz: Revela o "DNA" oculto da propriedade. Ele mostra se ela é writable (pode ser reescrita?), 
 * enumerable (aparece no Object.keys ou num loop for...in?) e configurable (pode ser deletada?).
 */
console.log(Object.getOwnPropertyDescriptor(obj, 'nome'))