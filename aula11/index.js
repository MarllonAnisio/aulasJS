//alert("Hello, world!");
//window.confirm("Are you sure?");
let nome = window.prompt("What is your name?");

console.log("Hello, " + nome + "!");

//document.write("Hello, " + nome + "!");


let valor1 = window.prompt("Enter the first value:");
let valor2 = window.prompt("Enter the second value:");

console.log(`o primeiro valor foi ${valor1} o segundo valor é ${valor2}`)
console.log(typeof(valor1, valor2));
valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);
console.log(typeof(valor1, valor2));
let soma = valor1 + valor2;
alert(`The sum of the values is ${soma}`);
console.log(`A soma dos valores é ${soma}`);
