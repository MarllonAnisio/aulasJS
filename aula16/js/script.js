let x = true;
const array = ["melissa", "joão", "pedro", "ana"];
const resultado1 = document.getElementById('resultado');
resultado1.innerHTML += `<p>Os nomes são: ${array}</p>`
while(x == true){
    let nome = prompt("digite os nomes: ");

    if(nome === null || nome === ""){
        alert("nome inválido, tente novamente");
        continue;
    }
    if(nome != null || nome != ""){
        array.push(nome);
        resultado1.innerHTML += `<p>Os nomes agora são: ${array}</p>`;
    }

    x = confirm("deseja adicionar mais nomes?");


}
   

resultado1.innerHTML += `<p>todos os nomes que foram adicionados: ${array}</p>`;
    
    

