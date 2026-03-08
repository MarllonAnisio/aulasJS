
//array é valor por referencia

const nomes = ['eduardo', 'jonas', 'jeff', 'hector bonilha', 'Dr. House', 'wanderley Luchenburgo', 'fernando diniz'];
console.log(nomes);
let nome2 = [...nomes];
console.log(nome2);

// pop remove do fim shift é no inicio e desloca todos para esquerda

nomes.pop();
console.log(nomes);
nomes.shift();
console.log(nomes);

//push adiciona no fim unshift adiciona no inicio deslocando todos para direita

nomes.push('hellio');
console.log(nomes);

nomes.unshift('herbert richards');
console.log(nomes);

// podemos recortar o array com o slice ele faz um recorte do array podendo pegar um intervalo

const nomeSlice = nomes.slice(1, -2);
console.log(nomeSlice);

// para recortar uma string em array podemos usar o split dando uma referencia de como cortar

let frase = 'pablo emilio escobar gavillia'

const fraseCortada = frase.split(' ')
console.log(fraseCortada);

//podendo usar isso em csv aprimeira vista

let dados =  'marllon,anisio,25,1.83,90,branco'
const dadosExtraidos = dados.split(',')
console.log(dadosExtraidos);


// podemos tambem refazer uma string com o join, util pra quando tiver que construir talvez o nome do usuario se o mesmo vem fragmentado na tabela

const recebendoDados = dadosExtraidos.slice(0, -4)
console.log(recebendoDados);

let nomesjoin = recebendoDados.join(' ')
console.log(nomesjoin);
