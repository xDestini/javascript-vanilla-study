// O(n^2) Complejidad Cuadrática
// Cuando tenemos un ciclo anidado dentro de otro,
// donde cada cual depende del tamaño de la entrada, suele ser de complejidad O(n^2).

// Ejemplo

// esta función cuenta las veces que la segunda string aparece en la primera
function busquedaCuadratica(s1, s2) {

    // el caso base verifica si los dos strings pasados a la función son iguales
    if (s1 === s2) return s1.length;

    // si son diferentes, verificamos cuantas veces la segunda aparece en la primera
    let count = 0;

    // por cada letra en la primera, tenemos que verificar las letras en la segunda
    // esto lo logramos con un `for loop` anidado dentro de otro
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            console.log('info -->',i, s1[i+j], j, s2[j], s2.length)
            if (s1[i+j] !== s2[j]) break;
            if (j === s2.length - 1) count++;
        }
    }
    return count;
}

console.log(busquedaCuadratica('escuelareactfrontendreactreact react', 'react')) // 4
