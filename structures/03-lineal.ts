// O(n) - Complejidad Lineal
// Un algoritmo tiene complejidad lineal cuando el tiempo de procesamiento
// es directamente proporcional al tamaño de la entrada.

// Por ejemplo
function visitandoLosElementos(arreglo) {
    // dependiendo el tamaño del arreglo es el tiempo de procesamiento, entre mas grande mas demorara en terminar de ejecutarse
    for (let i = 0; i < arreglo.length; i++) {
        console.log(`Visitando a ${arreglo[i]}`)
    }
    return '¡Terminamos!';
}

console.log(visitandoLosElementos([1,2,3,4,5,6,7,8,9])) // Terminamos!
