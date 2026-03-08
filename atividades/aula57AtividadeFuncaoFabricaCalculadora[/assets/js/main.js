function criaCalculadora(){
    return{
        display: document.querySelector(".display"),
        

        inicia(){
            this.cliqueButton();
            this.pressionaBackSpace();
            this.pressionaEnter();
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizarConta(){
            let conta = this.display.value;
            try{
                conta = eval(conta);

                if(!conta){
                    alert("CONTA INVALIDA SEU MANIACO(A)!");
                    return;
                }

                this.display.value = conta;
            }catch(e){
                alert("CONTA INVALIDA SEU MANIACO(A)!");
            }
        },

        
        cliqueButton(){
            document.addEventListener('click', e => {
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnPararDisplay(el.innerText)
                }
                
                if(el.classList.contains("btn-clear")){
                    this.clearDisplay();
                }
                if(el.classList.contains("btn-del")){
                    this.btnApagarUmCaracter();
                }
                if(el.classList.contains("btn-eq")){
                    this.realizarConta();
                }

                this.display.focus();
            });
        },
        clearDisplay(){
            this.display.value = "";
        },
        
        btnPararDisplay(valor){
            this.display.value += valor;
        },
        btnApagarUmCaracter(){
            this.display.value  = this.display.value.slice(0, -1);
        }

    }

}

const calculadora = criaCalculadora();
calculadora.inicia();