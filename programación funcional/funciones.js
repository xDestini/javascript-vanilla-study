Math.floor() // redondea al numero de abajo

Math.ceil() // redondea al numero de arriba

Math.round() // redondea al numero que tenga mas cerca

Array.from({ length: n }, (value, index) => index) // crea un arreglo con un tamaño en especifico

const n = 5;
Array(n).fill(0) // crea un arreglo de n tamaño con 0s

const arraySample = [1, 2, 3, 4, 5];
arraySample.filter((x) => x % 2 === 0) // filtra los elementos pares
arraySample.map((x) => x * 2) // multiplica cada elemento por 2
arraySample.reduce((acc, x) => acc + x, 0) // suma todos los elementos
arraySample.some((x) => x % 2 === 0) // verifica si hay al menos un elemento par
arraySample.every((x) => x % 2 === 0) // verifica si todos los elementos son pares
arraySample.includes(3) // verifica si incluye el elemento 3
arraySample.indexOf(3) // devuelve el indice del elemento 3
arraySample.find((x) => x % 2 === 0) // devuelve el primer elemento par
arraySample.findIndex((x) => x % 2 === 0) // devuelve el indice del primer elemento par
arraySample.join(", ") // convierte el arreglo a string separado por comas
arraySample.sort((a, b) => a - b) // ordena el arreglo de menor a mayor 
let objects = [
    { name: "nop", value: 3 },
    { name: "NOP", value: 2 },
    { name: "ñop", value: 1 },
    { name: "abc", value: 3 },
    { name: "abc", value: 2 },
    { name: "äbc", value: 1 },
];
objects.sort((a, b) => a.name.localeCompare(b.name)); // with letters
arraySample.reverse() // invierte el orden del arreglo
arraySample.splice(2, 1) // elimina el elemento en la posicion 2
arraySample.slice(2, 4) // devuelve un nuevo arreglo con los elementos desde la posicion 2 hasta la 4
arraySample.push(6) // agrega un elemento al final del arreglo
arraySample.pop() // elimina el ultimo elemento del arreglo
arraySample.shift() // elimina el primer elemento del arreglo

