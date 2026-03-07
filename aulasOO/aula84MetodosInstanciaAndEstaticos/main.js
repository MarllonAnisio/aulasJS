class Livro {
    constructor(titulo, autor) {
        // Propriedades de Instância: cada livro tem o seu
        this.titulo = titulo;
        this.autor = autor;
        this.aberto = false;
    }

    // --- MÉTODO DE INSTÂNCIA ---
    // Faz sentido para UM livro específico.
    abrirOuFechar() {
        this.aberto = !this.aberto;
        const estado = this.aberto ? "aberto" : "fechado";
        console.log(`O livro '${this.titulo}' agora está ${estado}.`);
    }

    // --- MÉTODO ESTÁTICO ---
    // É uma utilidade geral da "categoria" Livro.
    // Não precisa saber qual livro é para validar um ISBN, por exemplo.
    static validarCodigo(codigo) {
        console.log("Validando formato do código no banco de dados geral...");
        return codigo.length === 13; 
    }
}

// Para usar o método de instância, PRECISO do 'new' (criar o objeto)
const meuLivro = new Livro("Dom Casmurro", "Machado de Assis");
meuLivro.abrirOuFechar(); // Funciona! O objeto 'meuLivro' sabe quem ele é.

// Para usar o método estático, chamo direto da CLASSE
const ehValido = Livro.validarCodigo("9788535914849"); // Funciona!
console.log(`O código é válido? ${ehValido}`);
