let x = true;
const array = ["melissa", "joão", "pedro", "ana"];
const resultado1 = document.getElementById('resultado');
resultado1.innerHTML += `<p>Os nomes são: ${array}</p>`
while(x == true){
    let nome = prompt("digite os nomes: ");

    if(nome === null || nome === ""){
        alert("nome inválido, tente novamente");
        continue;
    }
    if(nome != null || nome != ""){
        array.push(nome);
        resultado1.innerHTML += `<p>Os nomes agora são: ${array}</p>`;
    }

    x = confirm("deseja adicionar mais nomes?");


}

resultado1.innerHTML += `<p>todos os nomes que foram adicionados: ${array}</p>`;
    
    
/**
 * Entendendo o uso do const em JavaScript
 * diferente do let, o const não permite que o valor da variável seja reatribuído
 * porém, quando o valor é um array ou um objeto, é possível modificar os elementos internos
 * do array ou as propriedades do objeto, mesmo que a variável em si seja constante
 * exemplo:
 * 
 * const meuArray = [1, 2, 3];
 * meuArray.push(4); // isso é permitido
 * meuArray = [5, 6, 7]; // isso não é permitido e causará um erro
 * ou seja, o const protege a referência da variável, mas não o conteúdo interno do array ou objeto
 * os valores internos podem ser alterados, adicionados ou removidos conforme necessário
 * todas as modificações internas são permitidas, desde que a referência original permaneça a mesma
 * o const é útil para garantir que a variável sempre aponte para o mesmo array ou objeto
 * isso ajuda a evitar erros acidentais de reatribuição
 * a diferença principal entre let e const é que o let permite reatribuição
 * enquanto o const não permite
 * essa característica torna o const ideal para valores que não devem ser reatribuídos
 * como arrays ou objetos que serão modificados internamente
 * em resumo, o const em JavaScript protege a referência da variável
 * mas permite modificações internas em arrays e objetos
 * isso é importante para entender ao trabalhar com estruturas de dados em JavaScript
 * essa distinção ajuda a evitar confusões sobre o comportamento das variáveis em diferentes contextos
 * é fundamental compreender essas diferenças para escrever código JavaScript eficaz e livre de erros
 * essa explicação detalhada visa esclarecer o uso do const em JavaScript
 */
const entendendo_const_em_JS =[];
entendendo_const_em_JS.push("é possível modificar o conteúdo interno de arrays e objetos mesmo quando declarados com const");
entendendo_const_em_JS.push("const protege a referência da variável, mas não o conteúdo interno");
entendendo_const_em_JS.push("let permite reatribuição, enquanto const não permite");
entendendo_const_em_JS.push("const é ideal para valores que não devem ser reatribuídos");
/** 
 * o const é parecido com o Java final, que também protege a referência da variável
 * mas permite modificações internas em arrays e objetos
 * fim da explicação sobre o const em JavaScript com base até a aula 30 da seção 2 do curso: 
 * https://www.udemy.com/share/1026xa3@7YhU0ePL66gnw33LPAFQtPzHa2b46YiGY-fIhg5xFzvK6dVfWs1ackL_yUABw8Q4lw==/
*/