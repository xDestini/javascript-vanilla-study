// Pseudo Code
// Crea una variable para seguir el rastro del valor más pequeño en la lista. Será inicializada con el primer elemento del arrayeglo
// Compara el valor de este elemento con el próximo en la lista hasta encontrar un valor menor
// Si encuentras un valor menor, guárdalo.
// Continúa hasta el final del arreglo
// El valor menor es diferente al valor con el que comenzaste, intercámbialos
// Repite estos pasos hasta terminar de ordenar la lista
// Devuelve el arreglo ordenado

const nums = [1,34,3,22,55,43,101,454,4,6,54,33,44,21,87];

function selectionSort(array) {
     // si solo tiene un elemento, no hay que ordenar nada
  if(array.length < 2) return array;
  let min;
  let index;

  for (let i = 0; i < array.length; i++) {
    min = array[i]
    console.log('Min value -->', min, i, (array.length-i))
    for (let j = i+1; j < array.length; j++) {
      // compara el valor menor que tenemos con el próximo en la lista
      console.log('Comparing -->', min, 'Next value -->', array[j])
      if (min > array[j]) {
        min = array[j];
        index = j;
      }
    }
    // intercambia los valores, si encontraste uno menor
    if(index) {
      [array[i], array[index]] = [array[index], array[i]]
      index = undefined;
    }
  }
  return array;
}

console.log(selectionSort(nums))
