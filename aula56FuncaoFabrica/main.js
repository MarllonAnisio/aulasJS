function criarPessoa(nome, sobrenome, cpf, idade, peso){
    return {
        _nome: nome,
        _sobrenome: sobrenome, 
        _idade: idade, 
        _peso: peso,
        _CPF: cpf, 

        get nome(){
            return this._nome;
        },

        get sobrenome(){
            return this._sobrenome;
        },

        get peso(){
            return this._peso;
        },

        get idade(){
            return this._idade;
        },

        get CPF(){
            return this._CPF;
        },

        set nome(nome){
            this._nome = nome;
        },

        set sobrenome(sobrenome){
            this._sobrenome = sobrenome;
        },

        set idade(idade){
            this._idade = idade;
        },

        set peso(peso){
            this._peso = peso;
        },

        set CPF(cpf){
            this._CPF = cpf
        },
        falar(){
            console.log(`olá, meu nome é ${this.nome}  eu tenho ${this.idade} e peso ${this.peso} kg`)
        }

    };

    
    
}
const pessoa1 = criarPessoa("marllon", "Camelo", 425693465, 22, 50);
pessoa1.falar();
const pessoa2 = criarPessoa("Emily", "Neves",  1454514, 21, 47);
pessoa2.falar();
console.log("=====================================================")
pessoa1.setIdade = 80;
pessoa2.setSobrenome = pessoa1.getSobrenome;
pessoa1.falar();
pessoa2.falar();