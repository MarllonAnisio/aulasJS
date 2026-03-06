function criarPessoa(nome,sobrenome){
    const pessoaPrototyoe = {   
        nome,
        sobrenome,
        falar(){
            console.log(`O meu nome é ${this.nome} ${this.sobrenome}`);
        },
        beber(){
            console.log(`I like water, because is very good`);
        },
        comer(){
            console.log(`GOSTOSO VISSE`);
        },
    };

    return Object.create(pessoaPrototyoe, {
        nome :{value: nome},
        sobrenome :{value: sobrenome},

    });
}
const pessoa = criarPessoa("mailon", "anizo")
pessoa.falar();


//forma menos acoplada:

const falar = {
    falar(){
        console.log(`O meu nome é ${this.nome} ${this.sobrenome}`);
    }
}
const beber = {
    beber(){
        console.log(`I like water, because is very good`);
    }
}
const comer = {
    comer(){
        console.log(`GOSTOSO VISSE`);
    }
}
const pessoaPrototyoeRefatorado = Object.assign({}, falar,comer,beber);

function criarPessoaRefatorado(nome, sobrenome){
    return Object.create(pessoaPrototyoeRefatorado, 
        {
        nome :{value: nome},
        sobrenome :{value: sobrenome},
    });
}
const p1 = criarPessoaRefatorado("emily", "Neves ");
p1.beber();
p1.comer();
p1.falar();