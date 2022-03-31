export class Telefonos {
    private tipo:string;
    private numero:string;
    
    constructor(_tipo:string, _numero: string){
        this.tipo = _tipo;
        this.numero = _numero;
    }

    mostrarDatosTelefono():string {
        return "Telefono " + this.tipo + ': '+ this.numero;
    } 

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getNumero(): string {
        return this.numero;
    }

    public setNumero(numero: string): void {
        this.numero = numero;
    }

}
