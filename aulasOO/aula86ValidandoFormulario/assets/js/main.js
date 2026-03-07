const _formulario = Symbol('formulario')

class ValidaFormulario {

    constructor() {
        this[_formulario] = document.querySelector('.form') 
        this.eventos();
    }

    eventos() {
        this[_formulario].addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        

        const camposValidos = this.checaCampos();
        const senhasValidas = this.validaSenha();

        if(camposValidos && senhasValidas){
            alert('Formulário enviado com sucesso, meu patrão! 🚀');
            this[_formulario].submit();
        }
    }

    checaCampos() {
        let valid = true;

        for(let errorText of this[_formulario].querySelectorAll('.error-text')){
            errorText.remove();
        }

        for (let campo of this[_formulario].querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText; 
            
            if (!campo.value) {
                this.criaErro(campo, `O campo "${label}" não pode estar vazio.`);
                valid = false;
                continue; 
            }

            // 2. Validações Específicas
            if(campo.classList.contains('cpf')){
                if(!this.validarCPF(campo)) valid = false;
            }

            if(campo.classList.contains('nome')){ 
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validarCPF(campo){
        if(!ValidaCPF.validarCPF(campo.value)){
            this.criaErro(campo, `Este CPF ${campo.value} é invalido.`);
            return false
        }
        return true;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;
        
        
        if(usuario.length < 3 || usuario.length > 15){
            this.criaErro(campo, `Usuário deve ter entre 3 e 15 caracteres.`);
            valid = false;
        }
                
        
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, `Usuário só pode conter letras e números.`);
            valid = false;
        }

        return valid;
    }

    validaSenha(){
        let valid = true;

        
        const senha = this[_formulario].querySelector('.senha'); 
        const repetirSenha = this[_formulario].querySelector('.senha');

        if(senha.value !== repetirSenha.value){
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.');
            valid = false;
        }


        if(senha.value.length < 6 || senha.value.length > 12){
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres.');
            valid = false;
        }

        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();