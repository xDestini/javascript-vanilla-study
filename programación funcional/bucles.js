for (const value of array) {
    console.log(value)
}

for (let index in array) {
    console.log(array[index]);
}

array.forEach((value, index) => console.log(value, index));

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

array.map((value, index) => {
    console.log(value, index)
})