function meuEscopo(){
    
    const form = document.querySelector(`.form`);
    const resultado = document.querySelector(`.resultado`);
    form.addEventListener(`submit`, receberEventoForm);
    const listaPessoas = [];
   
    function receberEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector(`.nome`).value;
        const sobrenome = form.querySelector(`.sobrenome`).value;
        const peso = form.querySelector(`.peso`).value;
        const altura = form.querySelector(`.altura`).value;
        const pessoa = criarPessoa(nome,sobrenome,peso,altura);
        addPessoa(pessoa);
        //resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p>`;

    };

    function criarPessoa(nome, sobrenome, peso, altura){
       return{
        nome,
        sobrenome,
        peso,
        altura
       };
    };
    function addPessoa(pessoa){
        if(pessoa.name !== "" && pessoa.name !== undefined && pessoa.name !== null){
            if(pessoa.sobrenome !== "" && pessoa.sobrenome !== undefined && pessoa.sobrenome !== null);
                listaPessoas.push(pessoa);
        }
        else
            return false;
    };

};
meuEscopo();