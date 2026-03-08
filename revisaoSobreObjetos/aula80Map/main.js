const pessoas = [
    {id: 3, nome: "Enock"},
    {id: 2, nome: "benedito"},
    {id: 1, nome: "Robst"},
];
const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa})
}
console.log(novasPessoas);