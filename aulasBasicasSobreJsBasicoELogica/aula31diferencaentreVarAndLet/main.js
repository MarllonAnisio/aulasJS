
/**
 * Diferença entre Var e Let
 * 
 * Var foi a forma tradicional de declarar variáveis em JavaScript
 * Let foi introduzido no ES6 (ECMAScript 2015) como uma forma mais moderna
 * de declarar variáveis, oferecendo algumas vantagens em relação ao Var.
 * 
 * Aqui estão as principais diferenças entre Var e Let:
 * 
 * 1. Escopo:
 *    - Var tem escopo de função, ou seja, é acessível em toda a função onde foi declarada.
 *   - Let tem escopo de bloco, ou seja, é acessível apenas dentro do bloco onde foi declarada (por exemplo, dentro de um loop ou uma condicional).
 * 
 * 2. Redeclaração:
 *   - Var pode ser redeclarado dentro do mesmo escopo sem gerar erro.
 *   - Let não pode ser redeclarado no mesmo escopo; tentar fazer isso resultará em um erro.
 * 
 * 3. Hoisting:
 *  - Var sofre hoisting, o que significa que a declaração da variável é "içada" para o topo do seu escopo, mas não a sua atribuição.
 * - Let também sofre hoisting, mas não pode ser acessado antes da sua declaração (isso resulta em um erro de referência).
 * 
 * 4. Uso recomendado:
 * - Devido às suas características, o uso de Let é geralmente recomendado para evitar problemas relacionados ao escopo e redeclaração.
 * Em geral, é uma boa prática usar Let (ou Const, para variáveis que não serão reatribuídas) em vez de Var na maioria dos casos.
 */
let nome1 = "João";

/**
 * var tem escopo global ou de função
 * o var pode ser redeclarado e atualizado
 * ocorre um caso engraçado no Js o "hoisting" que é quando a variável é "içada"
 * para o topo do escopo, ou seja, você pode usar a variável
 * antes mesmo de declará-la
 * exemplo:
 * 
 * console.log(nome2) // undefined
 * coisa estranha né? mas é assim que o Js funciona
 * para evitar esse tipo de confusão e parecer mais com outras linguagens de programação 
 * é melhor o uso  do let e const que não sofrem com esse problema.
 * 
 * aqui o Js "içou" a variável para o topo do escopo
 * var nome2 = "Maria" 
 * 
 */
var nome2 = "Maria";


console.log(nome1)
console.log(nome2)

if(true){
    let nome1 = "Pedro"; // escopo de bloco
    var nome2 = "Ana"; // escopo de função ou global   
    console.log(nome1)
    console.log(nome2)
   
     // atualização da variável vai ser içada para o topo do escopo
}

console.log(nome1)
console.log(nome2)
