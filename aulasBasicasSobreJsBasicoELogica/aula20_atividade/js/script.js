function meuEscopo() {
    
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    form.addEventListener('submit', receberEventoForm);
    const pessoas = [];
    
    function receberEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = Number(form.querySelector('.peso').value);
        const altura = Number(form.querySelector('.altura').value);
        const pessoa = criarPessoa(nome, sobrenome, peso, altura);
        addPessoa(pessoa);
    };
    
    function addPessoa(pessoa){
        if(pessoa.nome !== "" && pessoa.sobrenome !== "" && pessoa.peso > 0 && pessoa.altura > 0){
            pessoas.push(pessoa);
            console.log(pessoas);
            resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p>`;
        };
        
        
    }
    
    function criarPessoa(nome, sobrenome, peso, altura) {
        return {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        };
    }
    
};
meuEscopo();