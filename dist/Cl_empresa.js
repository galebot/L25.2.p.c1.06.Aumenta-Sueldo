export default class Cl_empresa {
    constructor() {
        this.acAumentos = 0;
        this.cntTrabajadores = 0;
        this.cntObreros = 0;
    }
    procesarPesonal(p) {
        this.cntTrabajadores++;
        this.acAumentos += p.aumento();
        if (p.tipo == 1)
            this.cntObreros++;
    }
    montoSueldos() {
        return this.acAumentos;
    }
    porcentajeObreros() {
        return this.cntObreros / this.cntTrabajadores * 100;
    }
}
