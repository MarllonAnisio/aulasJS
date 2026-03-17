import ValidaCPF from "./ValidaCpf";

export default class GeraCPF {
    constructor(){

    }


    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.rand();
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        const novoCPF = cpfSemDigitos + digito1 + digito2;
        return novoCPF;
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.eSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }

    geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let StringNum of cpfSemDigitos) {
            total += reverso * Number(StringNum);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }
    criaCpf() {
        // Gera 9 números aleatórios (entre 0 e 9)
        const cpfSemDigitos = Array.from({ length: 9 }, () =>
            Math.floor(Math.random() * 9)
        ).join(''); // usado para garantir que vai comecar como string

        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);

        const novoCpf = cpfSemDigitos + digito1 + digito2;

        return ValidaCPF.formatar(novoCpf);
    }

   

}