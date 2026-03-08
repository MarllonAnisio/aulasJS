/**
 * O escopo lecico no javaScript faz com que as funçoes consigam "Olhar" seus vizinhos
 * segue o exemplo abaixo:
 */

const nome = "Marllon";

function falaNome(){
    /**
     * // se a variavel for modificada dentro do metodo, a função sabe que é ESSA que ele vai usar,
     *  porem se não for mudada dentro ele vai buscar a variavel vizinha 
     */
    //const nome = "Anisio";
    console.log(nome);
}

function usaFalaNome(){
    /**
     * essa alteração nesse nivel do projeto de nada inpacta a função fala nome, pois ele se verifica no contexto de sua escrita, onde foi delcarada, esse const nome
     * dentro de usaFalaNome não tem efeito algum
     */
    const nome = "martins"
    falaNome();
}

usaFalaNome(); // resultado Marllon

