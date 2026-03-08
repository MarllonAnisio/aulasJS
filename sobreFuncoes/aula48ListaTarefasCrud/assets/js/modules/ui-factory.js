/**
 * Funcoes criadas para respeitar o Princípio da Responsabilidade Única.
 */

// Funções que criam elementos puros
export function criarLi() {
    return document.createElement('li');
}
/**
 * cria um span
 */
export function criarSpan() {
    return document.createElement('span');
}
/**
 * cria uma div
 */
export function criarDiv() {
    return document.createElement('div');
}
/**
 * cria um botão
 */
export function criarBotao() {
    return document.createElement('button');
}

// Funções compostas

/**
 * @param textoInput texto que vem fornecido pelo usuario para criar a tarefa 
 * @constant spanTexto está recebendo o metodo que cria o elemento span crú
 * @returns retorna o Elemento span completo e pronto para ser adicionado
 */
export function adicionarSpan(textoInput) {
    const spanTexto = criarSpan();
    spanTexto.innerText = textoInput;
    spanTexto.setAttribute('class', 'texto-tarefa');
    return spanTexto;
}
/** 
 * @constant btn está recebendo o metodo que cria o elemento Button crú
 * @returns retorna o Elemento Button personalizado para consistir em um Botao de apagar, 
 * recebendo uma class caracteristica para ser reconhecido pelo css
 */
export function adicionarBotaoApagar() {
    const btn = criarBotao();
    btn.innerText = 'Apagar';
    btn.setAttribute('class', 'btn-acao apagar');
    return btn;
}
/** 
 * @constant btn está recebendo o metodo que cria o elemento Button crú
 * @returns retorna o Elemento Button personalizado para consistir em um Botao de Editar, 
 * recebendo uma class caracteristica para ser reconhecido pelo css
 */
export function adicionarBotaoEditar() {
    const btn = criarBotao();
    btn.innerText = 'Editar';
    btn.setAttribute('class', 'btn-acao editar');
    return btn;
}

/**
 * limpa o input caixa de texto da funcão apos finalizar
 */
export function limpaInput(input) {
    input.value = '';
    input.focus();
}