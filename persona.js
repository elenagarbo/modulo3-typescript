"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(_nombre, _apellidos, _edad, _dni, _sexo, _direccion, _mail, _telefono, _notas) {
        this.nombre = _nombre;
        this.apellidos = _apellidos;
        this.edad = _edad;
        this.dni = _dni;
        this.sexo = _sexo;
        this.direccion = _direccion;
        this.mail = _mail;
        this.telefono = _telefono;
        this.notas = _notas;
    }
    mostrarDatosPersona() {
        return this.nombre + ' ' + this.apellidos + '\n' + this.direccion.mostrarDatosDireccion() + '\n' + this.telefono.mostrarDatosTelefono() + '\n' + this.mail.mostrarDatosMail();
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellidos() {
        return this.apellidos;
    }
    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getDni() {
        return this.dni;
    }
    setDni(dni) {
        this.dni = dni;
    }
    getSexo() {
        return this.sexo;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    getDireccion() {
        return this.direccion;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
    getMail() {
        return this.mail;
    }
    setMail(mail) {
        this.mail = mail;
    }
    getTelefono() {
        return this.telefono;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
    getNotas() {
        return this.notas;
    }
    setNotas(notas) {
        this.notas = notas;
    }
}
exports.Persona = Persona;
//# sourceMappingURL=persona.js.map