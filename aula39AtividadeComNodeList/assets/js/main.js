// selecionando todos os parágrafos dentro do elemento com a classe 'paragrafos'
const paragrafos = document.querySelectorAll('.paragrafos p');

// selecionando os parágrafos individuais
const p = document.querySelector(`p`);

// obtendo os estilos computados do body
const estilosBody = getComputedStyle(document.body);

// obtendo a cor de fundo do body
const backgroundColorBody = estilosBody.backgroundColor;

/**
 * usando uma funcao arrow function para aplicar estilos a cada parágrafo selecionado
 * a variavel p representa cada parágrafo na iteração atual
 * o estilo de fundo dos parágrafos será igual ao do body
 * o texto dos parágrafos será branco
 */
paragrafos.forEach((p) => {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
});