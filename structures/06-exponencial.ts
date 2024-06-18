// O(2^n) Complejidad Exponencial
// La complejidad exponencial es cuando un algoritmo cuyo tiempo de procesamiento se dobla con cada adición al tamaño de la entrada. 
// Por ejemplo, si le toma un 10 procesar un elemento, a un algoritmo con complejidad exponencial le tomaría 100 segundos procesar dos elementos.

console.time()

// Ejemplo - sucesión de Fibonacci. - recursividad
function fib(num) {
    if (num < 2) return num;
    return fib(num - 1) + fib(num - 2);
}

// sucesion: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 (posición 10), 89, 144, 233, 377, 610, 987, 1597, 2584, 4181
  
console.log(fib(190)) // 55
console.timeEnd()
