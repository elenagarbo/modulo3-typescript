export class Direcciones {
  private calle: string;
  private numero: string;
  private piso: string;
  private letra: string;
  private cp: string;
  private poblacion: string;
  private provincia: string;

  constructor(
    _calle: string,
    _numero: string,
    _piso: string,
    _letra: string,
    _cp: string,
    _poblacion: string,
    _provincia: string
  ) {
    this.calle = _calle;
    this.numero = _numero;
    this.piso = _piso;
    this.letra = _letra;
    this.cp = _cp;
    this.poblacion = _poblacion;
    this.provincia = _provincia;
  }

  mostrarDatosDireccion():string {
    return "Vive en la Calle " + this.calle + ' '+ this.numero + ' ' + this.piso +  this.letra + ' con CP: '+this.cp + ' en '+ this.poblacion+ ' '+this.provincia;
  } 

  public getCalle(): string {
    return this.calle;
  }

  public setCalle(calle: string): void {
    this.calle = calle;
  }

  public getNumero(): string {
    return this.numero;
  }

  public setNumero(numero: string): void {
    this.numero = numero;
  }

  public getPiso(): string {
    return this.piso;
  }

  public setPiso(piso: string): void {
    this.piso = piso;
  }

  public getLetra(): string {
    return this.letra;
  }

  public setLetra(letra: string): void {
    this.letra = letra;
  }

  public getCp(): string {
    return this.cp;
  }

  public setCp(cp: string): void {
    this.cp = cp;
  }

  public getPoblacion(): string {
    return this.poblacion;
  }

  public setPoblacion(poblacion: string): void {
    this.poblacion = poblacion;
  }

  public getProvincia(): string {
    return this.provincia;
  }

  public setProvincia(provincia: string): void {
    this.provincia = provincia;
  }

}
