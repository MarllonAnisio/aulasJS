
/**
 * @param {*} ulTarefas  Que é uma lista de Tarefas criadas pelo usuario 
 * @constant liTarefas está recebendo atraves do querySelector todos (li) que estáo no Ul
 */
export function salvarTarefas(ulTarefas) {
    const liTarefas = ulTarefas.querySelectorAll('li');
    //lista para armazenar as tarefas
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        const span = tarefa.querySelector('.texto-tarefa');
        
        if (span) {
            listaDeTarefas.push(span.innerText);
        }
    }
    
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}
