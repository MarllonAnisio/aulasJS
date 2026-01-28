const section = document.querySelector(`.conteiner`);
const div = document.createElement('div');

const elementos =[
    {tag: 'p', texto: 'frase 1'}, // 0
    {tag: 'div', texto: 'frase 2'}, // 1
    {tag: 'footer', texto: 'frase 3'}, // 2
    {tag: 'section', texto: 'frase 4'}, // 3
];

function criaElemento(lista){


    for(let i = 0; i < lista.length; i++){

        /**
         * desestruturação de objeto, eu estou pegando as propriedades tag e texto
         * do objeto que está na posição i do array lista
         */
        let {tag, texto} = lista[i];

        /**
         * cria o elemento HTML com a tag especificada
         * atribui o texto ao elemento
         * adiciona o elemento criado na div do HTML
         */
        let elemento = document.createElement(tag);

        /**
         * atribui o texto ao elemento
         * usando innerText para evitar que códigos HTML sejam interpretados
         */
        elemento.innerText = texto;

        /**
         * adiciona o elemento criado na section do HTML
         * usando appendChild para adicionar como filho da div criada
         */
        div.appendChild(elemento);
    }
}
criaElemento(elementos);

/**
 * adiciona a div criada na section do HTML
 * usando appendChild para adicionar como filho da section
 */
section.appendChild(div);