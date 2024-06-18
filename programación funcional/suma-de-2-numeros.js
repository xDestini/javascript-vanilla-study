// Encontrar la suma de 2 numero dentro de un array que den como resultado el numero deseado

const input = [9, 4, 8, 3, 39, 12, 1, 4, 6]

const twoSum = (array, target) => {
  const differences = new Map()
  for (let i in array) {
    const n = array[i]
    if (differences[target-n]) {
      return [differences[target-n].index, i]
    }
    differences[n] = {
      value: target-n,
      index: i
    }
    // console.log(n, differences, '\n\r')
  }
  
  return -1
}

console.log(twoSum(input, 10))