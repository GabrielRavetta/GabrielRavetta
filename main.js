function precio() {
    let precioSim = parseInt(prompt("Ingrese el precio del articulo:"));
    return precioSim;
}

function banco() {
    let bancoEmisor = prompt("Ingrese el banco emisor de la tarjeta:");
    if ((bancoEmisor == "Nacion") || (bancoEmisor == "Santander") || (bancoEmisor == "Galicia") || (bancoEmisor == "BBVA")){
        return bancoEmisor;
    } else {
        alert("No aceptamos tarjetas emitidas por este banco");
    }
}

function tarjeta() {
    let nombreTarjeta = prompt("Ingrese la red de la tarjeta:");
    if ((nombreTarjeta == "Visa") || (nombreTarjeta == "Mastercard") || (nombreTarjeta == "Cabal")){
        return nombreTarjeta;
    } else {
        alert("No aceptamos tarjetas emitidas por esta red");
    }
}

function cuotas() {
    let numeroCuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
    if ((numeroCuotas == 1) || (numeroCuotas == 3) || (numeroCuotas == 6) || (numeroCuotas == 12)){
        return numeroCuotas;
    } else {
        alert("No disponemos de esa cantidad de cuotas");
    }
}

function costo() {
    if ((numeroCuotas == 1)){
        return numeroCuotas;
    } else {
        alert("No disponemos de esa cantidad de cuotas");
    }
}

let precioSimulado = precio();
let emisor;
let red;
let financiacion;
let resultado;
let cuota;

do {
    emisor = banco();
} while ((emisor != "Nacion") && (emisor != "Santander") && (emisor != "Galicia") && (emisor != "BBVA"));

do {
    red = tarjeta();
} while ((red != "Visa") && (red != "Mastercard") && (red != "Cabal"));

do {
    financiacion = cuotas();
} while ((financiacion != 1) && (financiacion != 3) && (financiacion != 6) && (financiacion != 12));

switch(financiacion){
    case 1:
        resultado = precioSimulado;
        cuota = resultado;  
        break;
    case 3:
        resultado = precioSimulado;
        cuota = resultado/3;
        break;
    case 6:
        if ((red == "Visa") || (red== "Mastercard")){
            resultado = precioSimulado;
        } else {
            resultado = precioSimulado + precioSimulado*0.25;
        }
        cuota = resultado/6;
        break;
    case 12:
        if ((red == "Visa") && (emisor == "Santander")){
            resultado = precioSimulado;
        } else {
            resultado = precioSimulado + precioSimulado*0.5;
        }
        cuota = resultado/12;
        break;
}

alert ("El precio total a pagar será: " + resultado);
alert ("El valor de la cuota mensual será: " + cuota);