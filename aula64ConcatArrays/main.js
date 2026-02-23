//temos dois jeitos de juntar os arrays de maneira menos grosseira

// com concat
const a1 = [1,2,3]
const a2 = [4,5,6]
console.log(a1,a2)
const a3 = a1.concat(a2)
console.log(a3)

// com spread para espalhar um array dentro do outro

const a4 = [...a1, ...a2, ...[7,8,9,10], "Getulio Vargas"]
console.log(a4)
