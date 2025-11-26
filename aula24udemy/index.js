// entendendo funceoes de string
let nome = "   Lucas   ";
console.log(nome.length);

let aString = "O rato roeu a roupa do rei de Roma";
console.log(aString.replace(/r/g, "@")); // substitui todas as letras r por @
console.log(aString.toUpperCase());
console.log(aString.toLowerCase());
console.log(nome.trim()); // remove espaços em branco no início e no fim da string
console.log(aString.replace(/ /g, "#")); // substitui todos os espaços por #
console.log(nome.length);

let rato = aString.slice(2, 6); // fatiamento de string
console.log(rato);