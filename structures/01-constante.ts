// O(1) - Complejidad Constante
// un algoritmo tiene complejidad constante cuando el tiempo de procesamiento
// es el mismo sin importar el tamaño de entrada o de salida.

function getLength(array) {
    // este es lineal ya que la longitud de un arreglo no es una propiedad calculada
    // es una propiedad que se actualiza automaticamente mientras crece el arreglo
    return array.length;
}
  
console.log(getLength([1,2,3,4,5,6,7,88,4,5,77,8,88,3,5,66])) // 16
