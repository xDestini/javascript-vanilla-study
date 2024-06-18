## Big O

También conocida como notación asintótica, la notación Big O se utiliza para calificar el rendimiento de los algoritmos según crece la cantidad de elementos a procesar.

| # de operaciones | Big O  |
|------------------|--------|
| n + 1            | O(1)   |
| 543              | O(1)   |
| 3n + 1           | O(n)   |
| 21 n^2           | O(n^2) |

- Solo nos preocupamos por los términos mayores. En 2n^3 + 3n^2 + n + 89, solo nos interesa el término con el orden mayor, 2n^3. Por lo tanto, el Big O sería O(n^3).

Complejidades
En la siguiente tabla podrás ver diferentes complejidades y como se califican.

| Calificaciones | Big O      | Tiempo/Complejidad |
| -------------- | ---------- | ------------------ |
| Excelente      | O(1)       | Constante          |
| Bueno          | O(log n)   | Logarítmico        |
| Ok             | O(n)       | Lineal             |
| Malo           | O(n log n) | Logarítmico        |
| Terrible       | O(n^2)     | Cuadrático         |
| Terrible       | O(2^n)     | Exponencial        |

Ejemplos --> 01-*.ts - 06-*.ts

## Rendimiento de los Objetos
Los objetos son un tipo de lista en el que los elementos tienen una clave y un valor.
No mantienen ningún orden particular, pero proveen acceso rápido a elementos específicos. También remueven y añaden elementos tiempo constante.

| Acción              | Big O |
| ------------------- | ----- |
| Insertar            | O(1)  |
| Remover             | O(1)  |
| Acceder (con clave) | O(1)  |
| Buscar              | O(n)  |

ejemplo --> 07-*.js

donde: 

| Método           | Big O |
| ---------------- | ----- |
| Object.keys()    | O(n)  |
| Object.entries() | O(n)  |
| Object.values()  | O(n)  |
| hasOwnProperty() | O(1)  |
| delete           | O(1)  |

## Rendimiento de los Arreglos y sus Métodos
Otro tipo de listas es el arreglo. A diferencia de los objetos, los arreglos sí mantienen orden.

| Método   | Big O |
| -------- | ----- |
| push     | O(1)  |
| pop      | O(1)  |
| shift    | O(n)  |
| unshift  | O(n)  |
| concat   | O(n)  |
| slice    | O(n)  |
| splice   | O(n)  |
| ciclos*  | O(n)  |

* Algunos métodos de ciclos para arreglos: forEach, map, filter, reduce.

## Recursión o Recursividad
Otro ejemplo es una función que calcula el factorial. Factorial se define como el producto de un entero y todos los enteros menores que él.

## Algoritmos de Búsqueda
Los algoritmos de búsqueda te permiten encontrar algún elemento en una lista.

Por ejemplo, todas las canciones disponibles en Spotify, encontrar el elemento que buscas puede tomar mucho tiempo.
En esta sección, la lista siempre será representada por un arreglo.

# Búsqueda Lineal
La búsqueda lineal se trata de cuando buscamos un elemento visitando cada elemento uno a uno hasta encontrar el que queremos.

En una lista gigante puede costarnos mucho en términos de tiempo y recursos. Mira la siguiente lista, por ejemplo. Son palabras en inglés sin ningún orden particular.

Ejemplo --> 09-*.js

# Búsqueda Binaria
La búsqueda binaria es un algoritmo tipo “divide y conquista”. Siempre se empieza con una lista ordenada de alguna manera (alfabética, numérica, etc.). 

Empezamos buscando el elemento en el centro de la lista. Si el elemento es mayor que el valor del centro, entonces limitamos la búsqueda a la segunda mitad de la lista. Si es menor, a la primera. Con cada iteración, reducimos el tamaño de la lista por la mitad.

Ejemplo -- 10-*.js Buscar página específica en un libro impreso.

Conclusión

Big O es una manera de describir el rendimiento de un algoritmo basado en el tamaño de la entrada.
Utiliza el peor caso posible para estimarlo. Solo toma en consideración la magnitud de las operaciones.

| Calificaciones | Big O      | Tiempo/Complejidad |
| -------------- | ---------- | ------------------ |
| Excelente      | O(1)       | Constante          |
| Bueno          | O(log n)   | Logarítmico        |
| Ok             | O(n)       | Lineal             |
| Malo           | O(n log n) | Logarítmico        |
| Terrible       | O(n^2)     | Cuadrático         |
| Terrible       | O(2^n)     | Exponencial        |

recursos --> [escuela frontend](https://www.escuelafrontend.com/rendimiento-de-algoritmos-busqueda)
