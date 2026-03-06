class Pessoa{
    constructor(nome, sobren){
        this.nome = nome;
        this.sobrenome = this.sobrenome;
    }
    
    falar(){
        console.log(`O meu nome é ${this.nome} ${this.sobrenome}`);
    }

    beber(){
        console.log(`I like water, because is very good`);
    }

    comer(){
        console.log(`GOSTOSO VISSE`);
    }
}

const p1 = new Pessoa("marllon", "anisio")
const p2 = new Pessoa("anisio", "filho")
const p3 = new Pessoa("son", "Gohan")
const p4 = new Pessoa("gustavo", "Guanabara")

p1.falar();
p2.falar();
p3.falar();
p4.falar();