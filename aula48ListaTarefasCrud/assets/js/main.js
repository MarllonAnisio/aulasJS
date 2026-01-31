const inputTarefa = document.querySelector('.inputTarefa');
const btnAddTarefa = document.querySelector('.btnAdicionar');
const tarefas = document.querySelector('.tarefas');

btnAddTarefa.addEventListener('click', () =>{
    adicionarTarefa();
});

inputTarefa.addEventListener('keypress', function(e){
    if(e.key === 'Enter') {
        adicionarTarefa();
    }
});
function adicionarTarefa(){
    const texto = inputTarefa.value.trim();

    if(!texto){
        alert("Por favor, insira uma tarefa válida.");
        return;
    }
    criarTarefa(texto);
    limpaInput();
}
document.addEventListener('click', function(e) {
    const el = e.target;

    // A lógica de APAGAR continua igual (remove tudo)
    if (el.classList.contains('apagar')) {
        el.parentElement.parentElement.remove();
    }

    // A lógica de EDITAR muda!
    if (el.classList.contains('editar')) {
        // 1. Achamos o LI (o avô do botão)
        const li = el.parentElement.parentElement;
        
        // 2. Agora procuramos o SPAN dentro desse LI específico
        // O querySelector procura só DENTRO desse li, não na página toda
        const spanTexto = li.querySelector('.texto-tarefa');
        
        // 3. Pedimos o novo texto
        // Dica: colocamos o texto atual como valor padrão no prompt
        const novoTexto = prompt("Edite sua tarefa:", spanTexto.innerText);
        
        // 4. Se o usuário digitou algo
        if (novoTexto) {
            // A MÁGICA: Mudamos só o texto do span.
            // Os botões continuam lá, intactos e funcionando!
            spanTexto.innerText = novoTexto;
        }
    }
});

function criarTarefa(textoInput){
    const li = criarLi();
    
    
    
    const span = adicionarSpan(textoInput);
    li.appendChild(span);
    
    const divBotoes = criarDiv();

    const btnEditar = adicionarBotaoEditar();
    divBotoes.appendChild(btnEditar);

    const bntApagar = adicionarBotaoApagar();
    divBotoes.appendChild(bntApagar);

    li.appendChild(divBotoes);
    tarefas.appendChild(li);

    salvarTarefas();
}


function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];  
    for(let tarefa of liTarefas){
        // CORREÇÃO: Salvamento Limpo
        const span = tarefa.querySelector('.texto-tarefa');
        if (span) {
            listaDeTarefas.push(span.innerText);
        }
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function criarDiv(){
    const div = document.createElement('div');
    return div;
}
function criarBotao(){
    const botao = document.createElement('button');
    return botao;
}
function criarLi(){
    const li = document.createElement('li');
    return li;
}
function criarSpan(){
    const span = document.createElement('span');
    return span;
}
function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}
function adicionarBotaoApagar(){
    const bntApagar = criarBotao();
    bntApagar.innerText = 'Apagar';
    bntApagar.setAttribute('class', 'bnt-acao apagar')
    return bntApagar;
}
function adicionarBotaoEditar(){
    const btnEditar = criarBotao();
    btnEditar.innerText = 'Editar';
    btnEditar.setAttribute('class', 'bnt-acao editar');
    return btnEditar;
}
function adicionarSpan(textoInput){
    const spanTexto = criarSpan();
    spanTexto.innerText = textoInput;
    spanTexto.setAttribute('class', 'texto-tarefa');
    return spanTexto;
}