function validarCPF(cpf){
    
    let cpfLimpo= cpf.replace(/\D+/g, '')
    
    if(cpfLimpo.length != 11) return false;
    if(cpfLimpo[0].repeat(11) === cpfLimpo) return false;

    const calcularDigito = (cpfparcial, fatorInicial) => {
        const total = Array.from(cpfparcial)
            .reduce((acumulador, valorAtual) => {
                acumulador += (fatorInicial * Number(valorAtual));
                fatorInicial--;
                return acumulador;
        }, 0);

        const resto = 11 - (total % 11)
        return resto > 9 ? '0' : String(resto)
    };

    const cpfParcial = cpfLimpo.slice(0,-2);

    const digito1 = calcularDigito(cpfParcial, 10);
    const digito2 = calcularDigito(cpfParcial + digito1, 11)
    
    const novoCPF = cpfParcial + digito1 + digito2;

    return novoCPF === cpfLimpo;
}

console.log(validarCPF("158.704.474-96"))

