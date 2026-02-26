function Produto(nome, preco, estoque){

    this.nome = nome
    this.preco = preco
    estoquePrivado = estoque

    Object.defineProperty(this, "estoque", { // gerencia uma variavel
        enumerable: true, // mostra a chave
        configurable: true,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log("digite os numero")
                return
            }
            estoquePrivado = valorestoquePrivado = valor
        }

    });

}
const p1 = new Produto("macarrão", 3.50, "quinheto")
p1.estoque = 150;

console.log(p1)
console.log(p1.estoque)