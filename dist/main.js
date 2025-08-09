/** CALZADOS MILDRED
 * Calzados “Mildred” establece las siguientes políticas para sus vendedores:
 * un sueldo base y cada vendedor tendrá una comisión del 25% sobre el monto
 * vendido. De cada empleado se sabe: su código y monto vendido. Se requiere
 * un programa que muestre por Vendedor: Sueldo Obtenido y por la Zapatería:
 * b) Promedio de Ventas y la mayor venta realizada.
 * Ejemplo:
 * Sean los siguientes datos del vendedor (código del vendedor, sueldo base y monto vendido)
 * (V001,150, 4000) (V002,130,2000) (V003,140,4750) (V004,155,3850)
 * Sueldo obtenido por el V001 es 1150
 * Sueldo obtenido por el V002 es 630
 * Sueldo obtenido por el V003 es 1327.50
 * Sueldo obtenido por el V003 es 1117.50
 * Promedio de ventas 3650
 * Mayor venta realizada 4750
 */
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
