"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direcciones = void 0;
class Direcciones {
    constructor(_calle, _numero, _piso, _letra, _cp, _poblacion, _provincia) {
        this.calle = _calle;
        this.numero = _numero;
        this.piso = _piso;
        this.letra = _letra;
        this.cp = _cp;
        this.poblacion = _poblacion;
        this.provincia = _provincia;
    }
    mostrarDatosDireccion() {
        return "Vive en la Calle " + this.calle + ' ' + this.numero + ' ' + this.piso + this.letra + ' con CP: ' + this.cp + ' en ' + this.poblacion + ' ' + this.provincia;
    }
    getCalle() {
        return this.calle;
    }
    setCalle(calle) {
        this.calle = calle;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getPiso() {
        return this.piso;
    }
    setPiso(piso) {
        this.piso = piso;
    }
    getLetra() {
        return this.letra;
    }
    setLetra(letra) {
        this.letra = letra;
    }
    getCp() {
        return this.cp;
    }
    setCp(cp) {
        this.cp = cp;
    }
    getPoblacion() {
        return this.poblacion;
    }
    setPoblacion(poblacion) {
        this.poblacion = poblacion;
    }
    getProvincia() {
        return this.provincia;
    }
    setProvincia(provincia) {
        this.provincia = provincia;
    }
}
exports.Direcciones = Direcciones;
//# sourceMappingURL=direccion.js.map