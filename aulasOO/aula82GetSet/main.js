const _velocidade = Symbol('velocidade');
const _limite = Symbol('limite')

class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
        this[_limite] = 130;
    }

    acelerar(){
        if(this[_velocidade] >= this[_limite]) return "velocidade Maxima atingida"
            this[_velocidade++];
    }
    freiar(){
        if(this[_velocidade] <= 0) return "carro ja parou"
        this[_velocidade--];
    }

    get velocidade(){
        return this[_velocidade]
    }
    set velocidade(value){
        if(typeof value !== 'number' || value <= 0 || value > this[_limite]) return "valor incorreto"

        this[_velocidade] = value;
    }
    
}