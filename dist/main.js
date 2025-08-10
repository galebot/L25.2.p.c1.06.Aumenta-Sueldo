import Cl_personal from "./Cl_personal.js";
import Cl_empresa from "./Cl_empresa.js";
const trabajador1 = new Cl_personal("V555", 1, 50);
const trabajador2 = new Cl_personal("V678", 2, 80);
const trabajador3 = new Cl_personal("V475", 1, 50);
const trabajador4 = new Cl_personal("V634", 2, 85);
const trabajador5 = new Cl_personal("V786", 1, 50);
const empresa = new Cl_empresa();
empresa.procesarPesonal(trabajador1);
empresa.procesarPesonal(trabajador2);
empresa.procesarPesonal(trabajador3);
empresa.procesarPesonal(trabajador4);
empresa.procesarPesonal(trabajador5);
let salida = document.getElementById("salida");
if (salida !== null) {
    salida.innerHTML = `Total a pagar sólo por aumento de sueldo:  Bs.${empresa.montoSueldos()}`
        + `<br>Porcentaje de personal obrero:${empresa.porcentajeObreros()}%`;
    ;
}
else
    console.error("No se pudo encontrar el elemento con el id 'salida'.");
