## Introducción

Los algoritmos de ordenación te permiten organizar los elementos de una lista de alguna manera. Podría ser de manera alfabética, ascendente, descendente, etc.

En todos los ejemplos ordenaremos el arreglo nums de manera ascendente.

const nums = [1,34,3,22,55,43,101,454,4,6,54,33,44,21,87];

# Bubble Sort
La ordenación de burbuja es uno de los algoritmos mejor conocidos por su terrible rendimiento. Evalúa la lista por pares. Compara cada elemento con su sucesor y los intercambia si es necesario para que el par esté ordenado.

Ejemplo: bubble-sort.js

> [!NOTE]  
> Complejidad: O(n^2), siendo uno de los peores para ordenar. Si la data esta casi ordenada, la complejidad puede ser tan buena como O(n).

![Bubble sort](/structures/sorting/bubble-sort.png)

# Selection Sort

Selection Sort recorre todo el arreglo hasta seleccionar el elemento que cumple con los criterios de ordenación que hemos impuesto. Por ejemplo, si deseamos ordenar un arreglo compuesto de enteros de manera ascendente, estaríamos buscando el número más pequeño del arreglo. Luego, lo intercambiamos con el primer valor del arreglo que no haya sido ordenado. De esta manera, se van creando dos sub-listas, una ordenada y otra por ordenar.

Ejemplo: selection-sort.js

> [!NOTE]  
> Complejidad: O(n^2).

![Selection sort](/structures/sorting/selection-short.png)

# Insertion sort

Al igual que Selection Sort, el algoritmo de ordenación por inserción envuelve tomar un valor y compararlo con los demás en el arreglo. En este caso, empezamos con el segundo valor en el arreglo y lo comparamos con el primero. Si este es mayor que el primero, lo insertamos a la izquierda de este y nos movemos al próximo valor en el arreglo. Comparamos este valor con los valores anteriores hasta encontrar su lugar en la ordenación. Obtiene un valor y lo pone en el lugar correspondiente; por eso es útil para ordenar elementos que van entrando poco a poco. No es necesario tener la lista completa al inicio.



# Referencias
[Algoritmos de Ordenación (Sorting) en JavaScript](https://www.escuelafrontend.com/algoritmos-de-ordenacion-javascript)
[Links](https://www.w3resource.com/csharp-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-11.php)

