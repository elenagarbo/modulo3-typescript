
export class Mails  {
    private tipo:string;
    private direccion:string;

    constructor(_tipo:string, _direccion: string){
        this.tipo = _tipo;
        this.direccion = _direccion;
    }

    mostrarDatosMail():string {
        return "Email de " + this.tipo + ' '+ this.direccion;
    } 

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

}