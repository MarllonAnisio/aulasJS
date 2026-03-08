const h1 = document.querySelector('.conteiner h1');

const data = new Date();
/**
 * Opções de formatação para data e hora
 * @type {Object}
 * usando Intl.DateTimeFormatOptions
 *  estudar lendo: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 */
const opcoes = {
   dateStyle: 'full',
   timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);