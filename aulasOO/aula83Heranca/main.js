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

class SmartPhone extends Dispositivo() {
    constructor(nome, preco, tipoTela) {
        super(nome);
        this[_preco] = preco;
        this[_tipoTela] = tipoTela
    }
}