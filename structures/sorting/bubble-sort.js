// Pseudo Code
// Empieza un ciclo que recorra el arreglo desde el final hasta el principio. Utiliza una variable para saber en qué punto del arreglo estás. Utilizaré la i para este ciclo.
// Dentro del primer ciclo, inicializa otro que recorra el arreglo desde el principio hasta uno menos que la variable del ciclo anterior. Para este ciclo, utilizaré la j
// Si arreglo[j] es mayor que arreglo[j+1] intercambia los valores
// No olvides devolver el arreglo ordenado

const nums = [1,34,3,22,55,43,101,454,4,6,54,33,44,21,87];

// solución con iteración
function bubbleSort (array) {
    // El arreglo no esta ordenado por ende swapped estara inicializada en false
    let swapped = false

    // console.log(array.length)

    // Se iniciliza en un tamaño máximo de 15 iteraciones el cual va disminuyendo uno a uno.
    for(let i = array.length; i > 0; i--) {
        // cambiamos el valor de swapp suponiendo que el arreglo esta ordenado este cambiara a false si se cambio un valor de posición
        swapped = true
        console.log(`Posicion i ${i}`)
        // Se inicializa un ciclo desde el principio hasta uno menos que la posicion anterior ya que contamos la primera posicion como no iterativa.
        for(let j = 0; j < i-1; j++) {
            console.log(`iteración ${j}: `, array[j], `posicion ${j+1}: `, array[j+1])
            // Si el arreglo el posicion j es mayor que la siguiente posicion del arreglo j+1 se intercambian los valores.
            if(array[j] > array[j+1]) {
                // ES6 con destructuración
                [array[j], array[j+1]] = [array[j+1], array[j]]
                swapped = false

                // imperativamente --> con ES5
                // let temp = array[j];
                // array[j] = array[j+1];
                // array[j+1] = temp;
            }
        }
        // rompe el ciclo si no se hizo ninguna intercambio de posición. Esto significa que el arreglo ya esta ordenado y no se necesita seguir iterando.
        if(swapped) break;
    }
    return array
}

// solución con recursividad
function bubbleSortR (nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i + 1]) {
            let j = nums[i + 1];
            nums[i + 1] = nums[i];
            nums[i] = j;
            bubbleSort(nums);
        }
    }
    return nums;
}

console.log(bubbleSort(nums));
console.log(bubbleSortR(nums));
