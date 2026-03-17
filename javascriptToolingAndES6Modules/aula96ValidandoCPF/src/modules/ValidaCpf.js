export default class ValidaCPF {

    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    // deixar formato cpf
    static formatar(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    static validarCPF(cpf) {

        let cpfLimpo = cpf.replace(/\D+/g, ''); // regex para limpar o cpf deixando apenas os numeros, retirando as impurezas


        if (cpfLimpo.length !== 11) return false; //se o cpf não tiver 11 digitos ele cai aqui
        if (cpfLimpo[0].repeat(11) === cpfLimpo) return false; // se for repetido cai aqui

        // preparando o cpf parcial para ser calculado, ele recebe o cpf sem os ultimos 2 digitos
        const cpfParcial = cpfLimpo.slice(0, -2);

        // calculamos os digitos finais do cpf
        const digito1 = this.calcularDigito(cpfParcial, 10);
        const digito2 = this.calcularDigito(cpfParcial + digito1, 11);

        // 5. Verificação Final
        const novoCPF = cpfParcial + digito1 + digito2;
        return novoCPF === cpfLimpo;
    }

    /**
     * calcula os ultimos digitos para validar o cpf
     * @param {string} cpfParcial 
     * @param {number} fatorInicial 
     * @returns {string} O dígito calculado
     */
    static calcularDigito(cpfParcial, fatorInicial) {
        // transforma a string em um array (continua sendo String so que agora é ['4','6'...])
        const total = Array.from(cpfParcial)
            .reduce((acumulador, valorAtual) => {

                acumulador += (fatorInicial * Number(valorAtual));
                fatorInicial--; // Decrementa o peso (10, 9, 8...)
                return acumulador;
            }, 0);

        const resto = 11 - (total % 11);
        return resto > 9 ? '0' : String(resto);
    }
}
