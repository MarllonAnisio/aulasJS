function fabricaPizza(tipo){
    switch(tipo){
        case "peperoni":
            function peperoni(){
                const pizza = {
                    tipo: "peperoni",
                    recheio: "peperoni",
                    massa: "grossa"
                }
                return pizza;
            }
            return peperoni();
        case "portuguesa":
            function portuguesa(){
                const pizza = {
                    tipo: tipo,
                    recheio: "molho tomate, queijo e repolho",
                    massa: "grossa"
                }
                return pizza;
            }
            return portuguesa();
        case "quartroQueijos":
            function quatroQueijos(){
                const pizza = {
                    tipo: "peperoni",
                    recheio: "peperoni",
                    massa: "grossa"
                }
            return pizza;
        }
        return quatroQueijos();

    }

}
const pizza = {
    tipo: null,
    recheio: null,
    massa: null
};


const recebe = fabricaPizza("portuguesa");
console.log(recebe.tipo + ": " + recebe.recheio);