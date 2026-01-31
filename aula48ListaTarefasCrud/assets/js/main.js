// IMPORTANDO AS FERRAMENTAS
import { 
    criarLi, 
    criarDiv, 
    adicionarSpan, 
    adicionarBotaoApagar, 
    adicionarBotaoEditar, 
    limpaInput 
} from './modules/ui-factory.js';

import { salvarTarefas } from './modules/storage.js';

// SELETORES
const inputTarefa = document.querySelector('.inputTarefa');
const btnAddTarefa = document.querySelector('.btnAdicionar');
const tarefas = document.querySelector('.tarefas');

/**
 * evento de clique no botão em adicionar tarefa
 */
btnAddTarefa.addEventListener('click', () => adicionarTarefa());

/**
 * evento de clicar enter para enviar a tarefa
 */
inputTarefa.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') adicionarTarefa();
});

/**
 * evento central para o funcionamento dos botoes deletores e editores
 */
document.addEventListener('click', function(e) {
    //recebe qqual botao foi clicado
    const el = e.target;

    //checa se o botao clicado foi o de apagar
    if (el.classList.contains('apagar')) {
        //apagando a tarefa clicada
        el.parentElement.parentElement.remove();
        salvarTarefas(tarefas); // Salvando a lista pos apagar
    }
    
    //checando se o botao clicado foi o de editar
    if (el.classList.contains('editar')) {
        /**
         * li está recebendo por meio de uma instrução de subida, como assim marllon?
         * simples, o el que nesse caso é o botáo, olha pra cima(.parentelement) para ver quem está o segurando, ao olhar pra cima ele percebe que:
         * está sendo segurado pela div, porem não é ela quem queremos, então olhamos denovo pra cima(.parentElement) e encontramos a Li
         * a Li nesse caso possui o Span o elemento que queremos mudar o texto que nele existe
         */
        const li = el.parentElement.parentElement;
        const spanTexto = li.querySelector('.texto-tarefa');
        
        // vai abrir uma caixa de dialogo para edição da tarefa
        const novoTexto = prompt("Edite sua tarefa:", spanTexto.innerText);
        
        if (novoTexto) {
            spanTexto.innerText = novoTexto;
            salvarTarefas(tarefas); // Salvando a lista pos editar
        }
    }
});

/**
 * logica central para saber se é valido o input
 */
function adicionarTarefa() {
    const texto = inputTarefa.value.trim();
    if (!texto) {
        alert("Por favor, insira uma tarefa válida.");
        return;
    }
    criarTarefaDOM(texto);
    limpaInput(inputTarefa);
}
/**
 * montando o quebra cabeça com as funcoes importadas
 * 
 */
function criarTarefaDOM(textoInput) {
    const li = criarLi();
    
    const span = adicionarSpan(textoInput);
    li.appendChild(span);
    
    const divBotoes = criarDiv();
    divBotoes.appendChild(adicionarBotaoEditar());
    divBotoes.appendChild(adicionarBotaoApagar());

    li.appendChild(divBotoes);
    tarefas.appendChild(li);

    salvarTarefas(tarefas);
}