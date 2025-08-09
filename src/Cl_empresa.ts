import Cl_personal from "./Cl_personal";

export default class Cl_empresa {
  private acAumentos: number = 0;
  private cntTrabajadores: number = 0;
  private cntObreros: number = 0;
  constructor() {}
  procesarPesonal(p: Cl_personal) {
    this.cntTrabajadores ++;
    this.acAumentos += p.aumento();
   
    if (p.tipo == 1) this.cntObreros ++;
  }
  montoSueldos(): number {
    return this.acAumentos;}

  porcentajeObreros(): number {
    return this.cntObreros / this.cntTrabajadores * 100;
  }
}
