export default class Cl_personal {
    constructor(c, t, s) {
        this._cedula = "";
        this._tipo = 0;
        this._sueldoBase = 0;
        this.cedula = c;
        this.tipo = t;
        this.sueldoBase = s;
    }
    set cedula(c) {
        this._cedula = c;
    }
    get cedula() {
        return this._cedula;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(t) {
        this._tipo = +t;
    }
    set sueldoBase(s) {
        this._sueldoBase = +s;
    }
    get sueldoBase() {
        return this._sueldoBase;
    }
    aumento() {
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
    nuevoSueldo() {
        return this.sueldoBase + this.aumento();
    }
}
