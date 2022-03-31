import {Mails} from './mail';
import {Direcciones} from './direccion';
import {Telefonos} from './telefono';

export class Persona  {
    private nombre:string;
    private apellidos:string;
    private edad:number;
    private dni:string;
    private sexo: string;
    private direccion:Direcciones;
    private mail: Mails;
    private telefono:Telefonos;
    private notas: string;

    constructor(_nombre:string, _apellidos: string, _edad:number, _dni:string, _sexo:string, _direccion:Direcciones, _mail:Mails, _telefono:Telefonos, _notas:string){
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

    mostrarDatosPersona(): string {
        return this.nombre + ' '+ this.apellidos + '\n' + this.direccion.mostrarDatosDireccion() + '\n' + this.telefono.mostrarDatosTelefono()+ '\n' + this.mail.mostrarDatosMail();
    }


    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellidos(): string {
        return this.apellidos;
    }

    public setApellidos(apellidos: string): void {
        this.apellidos = apellidos;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getDni(): string {
        return this.dni;
    }

    public setDni(dni: string): void {
        this.dni = dni;
    }

    public getSexo(): string {
        return this.sexo;
    }

    public setSexo(sexo: string): void {
        this.sexo = sexo;
    }

    public getDireccion(): Direcciones {
        return this.direccion;
    }

    public setDireccion(direccion: Direcciones): void {
        this.direccion = direccion;
    }

    public getMail(): Mails {
        return this.mail;
    }

    public setMail(mail: Mails): void {
        this.mail = mail;
    }

    public getTelefono(): Telefonos {
        return this.telefono;
    }

    public setTelefono(telefono: Telefonos): void {
        this.telefono = telefono;
    }

    public getNotas(): string {
        return this.notas;
    }

    public setNotas(notas: string): void {
        this.notas = notas;
    }


}