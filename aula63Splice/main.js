// o metodo splice pode eliminar varios indices em um intervalo


const nomes = ["marllon", "Emily", "hector belerim", "hector bonilha", "chespirito", "Chapolin Colorado"]
console.log(nomes)

// nomes.splice(Indice, delete, elemento1,elemento2,elemento3)

const removidos = nomes.splice(2, 2);
console.log(removidos)
console.log(nomes)

// podemos adicionar elementos a partir de um indice x, usando o splice, veja:

nomes.splice(2, 0, "Super Mario", "yoshi")
console.log(nomes)
nomes.unshift("teste")
console.log(nomes)
// podendo ser shift eliminando o primeiro elemento

nomes.splice(0,1)
console.log(nomes)

// push

nomes.splice(nomes.length, 0, "Jesus de Nazaré")
console.log(nomes)

//unshift

nomes.splice(0,0,'Gohan', 'Gothen')
console.log(nomes)
