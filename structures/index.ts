const array = new Array(10).fill(1)
console.time()

const result = array.map((item, index) => {
  return item * index
})

console.log(result)
console.timeEnd()
