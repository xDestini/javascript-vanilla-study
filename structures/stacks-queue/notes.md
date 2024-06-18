## Stacks
La complejidad de un stack es: ver ejemplo en stack.js

| Acción    | Big O |
| --------- | ----- |
| Inserción |  O(1) |
| Remoción  |  O(1) |
| Búsqueda  |  O(n) |

Como sólo tenemos información sobre los nodos al principio y al final, para buscar un nodo con un valor particular debemos ir nodo por nodo. Hay diferentes maneras de modelar un stack en Javascript. No importa la que escojas, asegúrate que escribirlo para que la complejidad constante para añadir y remover elementos ya que esto es una de las partes más importantes de un stack.

## Queue

La complejidad de un queue es: ver ejemplo en queue.js

|  Acción   | Complejidad |
| --------- | ----------- | 
| Inserción |     O(1)    | 
| Remoción  |     O(1)    | 
| Búsqueda  |     O(n)    | 
| Acceso    |     O(n)    |

Como el queue sabe qué nodo está al principio y qué nodo está al final, inserción y remoción son constantes. Sólo hay que cambiar los punteros correspondientes y añadir el nuevo nodo. De igual manera, al tener sólo esta información, para recorrer o encontrar un valor particular, tenemos que visitar cada nodo hasta dar con el que buscamos.

# Conclusión
A la hora de escoger una estructura de datos es importante considerar los requerimientos para escoger la mejor opción. Las estructuras discutidas en este artículo son excelentes cuando necesitas mantener un orden particular, pero solo necesitas acceso en algún extremo. En JavaScript, podrías imitarlas usando un arreglo y sus métodos push(val), pop(), unshift(val), shift(), pero en las últimas dos perderías el beneficio del rendimiento constante que caracteriza a estas estructuras.