/**
 * Função que verifica se a resolução é paisagem retornando true ou false
 */

function ePaisagem(autura, largura) {
    if (largura === autura)
         return 'A imagem é quadrada';
    return largura > autura;
};

console.log(ePaisagem(1080, 1920));
console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1080));

// com arrow function
const ePaisagemArrow = (altura, largura) => largura === altura ? "é um quadrado" : largura > altura;

console.log(ePaisagemArrow(1080, 1920));
console.log(ePaisagemArrow(1920, 1080));
console.log(ePaisagemArrow(1080, 1080));

