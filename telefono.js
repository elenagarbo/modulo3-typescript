"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefonos = void 0;
class Telefonos {
    constructor(_tipo, _numero) {
        this.tipo = _tipo;
        this.numero = _numero;
    }
    mostrarDatosTelefono() {
        return "Telefono " + this.tipo + ': ' + this.numero;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
}
exports.Telefonos = Telefonos;
//# sourceMappingURL=telefono.js.map