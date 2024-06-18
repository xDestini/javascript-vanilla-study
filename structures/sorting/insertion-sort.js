// Pseudo Code
// Guarda el segundo valor del arreglo en alguna variable
// Compáralo con el valor del elemento anterior. Intercámbialos si este es mayor
// Muévete al próximo valor y compáralo con los anteriores hasta encontrar su lugar. Insértalo en su lugar correspondiente, de ser necesario
// Repite hasta ordenar todo el arreglo

const nums = [1,34,3,22,55,43,101,454,4,6,54,33,44,21,87];

function insertionSort(arr){
    let index
    let j

    // iteramos todo el array comenzando desde el segundo elemento del array
    for(let i = 1; i < arr.length; i++) {
        // se asigna un pivote en el segundo elemento del array inicial
        index = arr[i]
        console.log(`Posicion de i: ${i} `, 'Indece del array -->', index)
        // Iteramos otro array para comprobar si el pivote es mayor que el elemento anterior
        // si es así se intercambian los valores y se vuelve a iterar hasta encontrar el lugar correcto.
        for(j = i - 1; j >= 0 && arr[j] > index; j--) {
            console.log(`iterate ${j}`, 'Indice actual ->', arr[j], 'Debe ser mayor que -->', index, 'para continuar con la iteracion')
            arr[j+1] = arr[j]
        }
        console.log('Elemento insertado -->', index, 'Posicion a insertar: ', j+1)
        arr[j+1] = index;
    }

    return arr
}

console.log(insertionSort(nums))
