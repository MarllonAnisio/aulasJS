fetch('pessoas.json') 
  .then(resposta => {
    console.log('Status da Resposta:', resposta.status);
    return resposta.json();
  })
  .then(json => {
    console.log(json);
  })
  .catch(e => {
    console.error('ERRO FATAL:', e);
  });