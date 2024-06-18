function factorial(num) {
    // este es nuestro caso base. Si el numero de entrada cumple con algunos de estos casos, devolvemos la respuesta sin tener que calcular el factorial
    if (num === 0) return 1;
    if (num <= 2) return num;

    let result = 1;

    // empieza con 2 ya que `result` está inicializado con 1, luego visita cada número, de uno en uno, hasta llegar al número de entrada
    for (let i = 2; i <= num; i++) {
        // multiplica el número actual por el producto de todos los que vinieron antes
        result *= i;
    }
    return result;
}

function recursiveFactorial(num) {
    // este es nuestro caso base. Cuando la recursión se tome con el valor de entrada igual a 2, parará el ciclo
    // no es necesario obtener el factorial de 0 y 1 ya que es 1 por lo que no afectaría el valor
    if (num === 0) return 1;
    if (num <= 2) return num;

    // cambiamos el ciclo for por recursión, en este caso empezamos por el número de entrada y bajamos uno a uno hasta llegar a 2
    return num * recursiveFactorial(num - 1);
}

console.log(factorial(0))
console.log(recursiveFactorial(0))