// Pseudo-Código para la Búsqueda Binaria
// La función acepta un arreglo ordenado y un valor
// La función devuelve el índice donde se encuentra el valor en el arreglo o -1 si el valor no se encuentra en el arreglo
// Crea un puntero al principio del arreglo y otro al final
// Mientras el puntero de la izquierda sea menor que el de la derecha
// Crea un puntero en el centro
// Si encuentras el valor, devuelve el índice
// Si el valor en ese puntero es mayor que el valor que buscas, mueve el puntero de la derecha a ese índice menos 1
// Si el valor en ese puntero es menor que el valor que buscas, mueve el puntero de la izquierda a ese índice más 1
// Si llegas al punto en que el puntero de la izquierda sobrepasa al puntero de la derecha, quiere decir que el valor no existe en el arreglo. Devuelve -1
const palabrasEnOrdenAlfabetico = [
    "abstracter", "adjunction", "announcers",
    "antliate", "barilla", "blashes",
    "calottes", "chicha", "corivalled",
    "corrivalship", "crap", "deciduate",
    "eery", "electorally", "escheator",
    "flamier", "folk", "forbears",
    "gauzier", "graduating", "heedless",
    "insatiable", "legendarily", "loggat",
    "maggies", "mamba", "microspecies",
    "modestly", "myelopathic", "noroviruses",
    "overclaim", "overteach", "patisserie",
    "pentamerous", "phytologies", "readvertizement",
    "repurchases", "scincoids", "sealers",
    "soberises", "syes","tetchinesses",
    "theoretician", "tibia", "torqued",
    "trackings", "undrawing", "unspide",
    "vitriolisation", "waragi",
];

function busquedaBinaria(arreglo, valor) {
    if (arreglo.length === 0) return -1;
    if (arreglo.length === 1) return arreglo[0] === valor ? 0 : -1;

    let punteroInicio = 0
    let punteroFinal = arreglo.length - 1

    console.log(punteroFinal, punteroInicio)

    let punteroCentro

    while (punteroInicio <= punteroFinal) {
        punteroCentro = punteroInicio + Math.floor((punteroFinal - punteroInicio) / 2)
        
        console.log('Console -->', punteroCentro, (arreglo[punteroCentro] < valor), arreglo[punteroCentro], valor)
        
        if (arreglo[punteroCentro] === valor) return punteroCentro;
        if (arreglo[punteroCentro] < valor) punteroInicio = punteroCentro + 1;
        if (arreglo[punteroCentro] > valor) punteroFinal = punteroCentro - 1;
    }
    return -1;
}

console.log(busquedaBinaria(palabrasEnOrdenAlfabetico, 'vitriolisation'))