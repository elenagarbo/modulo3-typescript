"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mails = void 0;
class Mails {
    constructor(_tipo, _direccion) {
        this.tipo = _tipo;
        this.direccion = _direccion;
    }
    mostrarDatosMail() {
        return "Email de " + this.tipo + ' ' + this.direccion;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getDireccion() {
        return this.direccion;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
}
exports.Mails = Mails;
//# sourceMappingURL=mail.js.map