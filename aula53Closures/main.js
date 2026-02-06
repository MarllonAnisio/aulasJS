
/**
 * clusures nada mais é que a capacidade da função de indentificar seus vizinhos 
 * nesse caso toda vez que for chamado ele vai retornar luiz
 * mas se tivesse o nome como parametro ele retornaria por padrao o nome do parametro
 * tirando claro a declaraçao da variavel de dentro da funçao
 */
function retornaFuncao(){
    const nome = "luiz";
    return function(){
        return nome
    }
}