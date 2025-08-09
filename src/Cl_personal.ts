export default class Cl_personal {
  private _cedula: string = "";
  private _tipo: number = 0;
  private _sueldoBase: number = 0;

  constructor(c: string, t: number, s: number ) {
    this.cedula = c;
    this.tipo = t;
    this.sueldoBase = s;
    
  }
  set cedula(c: string) {
    this._cedula = c;
  }
  get cedula(): string {
    return this._cedula;
  } 
 
  get tipo(): number {
    return this._tipo;
  }
  set tipo(t: number) {
    this._tipo = +t;
  }
   set sueldoBase(s: number) {
    this._sueldoBase = +s;
  }
  get sueldoBase(): number {
    return this._sueldoBase;
  }

  aumento(): number {
    if (this._tipo == 1) {
      return this._sueldoBase * 0.20;
    }
    else if (this._tipo == 2) {
      return this._sueldoBase * 0.10;
    }
    else {
      return 0;
    }
  }
nuevoSueldo(): number {
    return this.sueldoBase + this.aumento();
}  

}
