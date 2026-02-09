/**
 * replicando calculadora porem usando uma funcao construtora, que é basicamnete um objeto kkkkkkk
 */
function Calculadora(){
    this.display = document.querySelector(".display");

    this.inicia = function(){
        this.cliqueButton();
        this.pressionaBackSpace();
        this.pressionaEnter();
    }

    this.pressionaBackSpace = function() {
        this.display.addEventListener('keydown', e => {
            if (e.keyCode === 8) {
                e.preventDefault();
                this.clearDisplay();
            }
        });
    }

    this.pressionaEnter = function() {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }

    this.realizarConta = function(){
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
    }

    this.cliqueButton = function(){
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
    }

    this.clearDisplay = function(){
        this.display.value = "";
    }
        
    this.btnPararDisplay = function(valor){
        this.display.value += valor;
    }

    this.btnApagarUmCaracter = function(){
        this.display.value  = this.display.value.slice(0, -1);
    }

}

const calculadora = new Calculadora();
calculadora.inicia();
