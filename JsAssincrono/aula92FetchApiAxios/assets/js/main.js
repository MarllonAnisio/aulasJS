/*
fetch('pessoas.json') 
  .then(resposta => {
    console.log('Status da Resposta:', resposta.status);
    return resposta.json();
  })
  .then(json => {
    carregarElementosDaPagina(json);
  })
  .catch(e => {
    console.error('ERRO FATAL:', e);
  });
**/
axios('pessoas.json').then(resposta => carregarElementosDaPagina(resposta.data));



function carregarElementosDaPagina(json){
  const table = document.createElement('table');
  for(let pessoa of json){
    const tr = document.createElement('tr');
    
    let td = document.createElement('td');
    td.innerText = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = pessoa.empresa;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = pessoa.salario;
    tr.appendChild(td);
    table.appendChild(tr)
  }
  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}