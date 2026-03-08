
/**
 * Estrutura de repetição for
 * 
 * A estrutura de repetição for é utilizada quando sabemos
 * de antemão o número de repetições que queremos fazer.
 * 
 * A sintaxe do for é a seguinte:
 * for (inicialização; condição; incremento) {
 *     // código a ser executado em cada iteração
 * }
 * 
 * esse for classico é igual ao do java e de outras linguagens
 */



for(let i = 0; i < 15; i++){
    console.log(`Número ${i}`);
}

const frutas = ['Maçã', 'Banana', 'Pêra', 'Uva',
     'Melância','Abacaxi', 'Morango', 'Acerola', 
     'Caju', 'Goiaba', 'Kiwi', 'Laranja', 
     'Limão', 'Manga', 'Mamão'];


for(let i = 0; i < frutas.length; i++){
    console.log(`Fruta: ${frutas[i]}`);
}

