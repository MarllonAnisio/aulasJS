function Produto(nome, preco, estoque){

    Object.defineProperty(this, "estoque", { // gerencia uma variavel
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // se posso alterar o valor ou não, não afeta o configurable
        configurable: true // se posso configurar, apagar etc 
    });
    Object.defineProperties(this, { // gerencia varias variaveis
        nome: {        
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // se posso alterar o valor ou não, não afeta o configurable
            configurable: true // se posso configurar, apagar etc 
        },
        preco: {        
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: true 
        }
    })
}