const _nome = Symbol('nome');
const _ligado = Symbol('ligado');
const _volume = Symbol('volume')
class Dispositivo {
    constructor(nome) {
        this[_nome] = nome;
        this[_ligado] = false;
        this[_volume] = 50;
    }
    get nome() {
        return this[_nome];
    }
    get ligado() {
        return this[_ligado];
    }
    get volume() {
        return this[_volume];
    }
    set nome(nome) {
        this[_nome] = nome;
    }
    set ligado(ligado) {
        this[_ligado] = ligado;
    }
    set volume(volume) {
        this[_volume] = volume;
    }

}

const _preco = Symbol('preco');
const _tipoTela = Symbol('Tipo da Tela');
class SmartPhone extends Dispositivo() {
    constructor(nome, preco, tipoTela) {
        super(nome);
        this[_preco] = preco;
        this[_tipoTela] = tipoTela
    }
    ligar(){ // isso é como se vosse um override estou usando aqui nessa classe o ligar do smartphone e não o ligar herdado
        console.log('estou ligando papai')
    }
}