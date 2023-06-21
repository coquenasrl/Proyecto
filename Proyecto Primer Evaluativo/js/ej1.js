var tempEnero = [30, 32, 29, 31, 33, 28, 27, 30, 32, 35, 34, 30, 28, 31, 33, 32, 29, 27, 28, 31, 33, 34, 32, 29, 30, 28, 26, 31, 30];

var primerElemento = tempEnero[0];
console.log("Primer elemento:", primerElemento);

var ultimoElemento = tempEnero[tempEnero.length - 1];
console.log("Último elemento:", ultimoElemento);

var longitudArreglo = tempEnero.length;
console.log("Longitud del arreglo:", longitudArreglo);

var promedioMensual = tempEnero.reduce(function(a, b) { return a + b; }) / tempEnero.length;
var diasCalidos = tempEnero.filter(function(temp) { return temp > promedioMensual; });
console.log("Días cálidos:", diasCalidos);

tempEnero.push(promedioMensual);
console.log("Arreglo tempEnero con promedio al final:", tempEnero);

diasCalidos.unshift(promedioMensual);
console.log("Arreglo diasCalidos con promedio al principio:", diasCalidos);
