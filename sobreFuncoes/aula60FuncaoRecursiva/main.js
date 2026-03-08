/**
 * as funcoes recursivas chamam a si proprias até a finalização de um caso esperado, 
 * tem que ter atenção pq, um caso errado voce pode entrar em um loop de recursao indo ao infinito
 */

function recursivaRegreciva(max){
    if(max === 0) return;
    
    max--;
    console.log(max);
    recursivaRegreciva(max);
}

function recursivaProgreciva(max){
    if(max >= 100) return

    max++
    console.log(max)
    recursivaProgreciva(max);
}
recursivaRegreciva(5);
recursivaProgreciva(50);
