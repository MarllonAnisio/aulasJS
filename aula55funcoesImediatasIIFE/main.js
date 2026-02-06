/**
 * 
 * IIFE => Immediately Invoked Function Expression
 * 
 */
 /**
  * 
  * voce deve comecar tirando a funcção do escopo global, evitando contaminação do mesmo, 
  * voce declara sua função dentro de parenteses () e ao final dd função voce () abre e fecha os parenteses dnv, isso significa que voce ja está chamando
  * o metodo de forma imediata
  */
 (function calor(num1, num2, num3){
        console.log(num1 + num2 + num3);
 })(9,4,7); // chamada imediata da função