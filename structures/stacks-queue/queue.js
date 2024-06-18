// FIFO -- First In - First Out

class Queue {
    constructor() {
        this.first = null; 
        this.last = null;
        this.length = 0;
    }

    enqueue(val) {
        // Crea un nuevo nodo con el valor aceptado por la función
        const node = new Node(val);

        // Si el queue está vacío, asigna el nodo al primero y al último
        if (this.length === 0) {
            this.first = node;
            this.last = node;
        } else { 
            // si el queue tiene nodos, asigna el nodo al próximo valor del último nodo
            this.last.next = node;
            // Asigna el nodo al último elemento en la lista
            this.last = node;
        }

        this.length++;

        return this;
    }

    dequeue() {
        // Si el queue está vacío, devuelve null
        if (this.length === 0) {
            return null;
        }

        // Si tiene nodos, guarda el primero en una constante
        const first = this.first;

        // Si solo tiene un elemento, re-asigna el primero y el último a null
        if (this.length === 1) {    
            this.first = null;
            this.last = null; 
        } else {
            // Si tiene más de un nodo, re-asigna el primero al segundo elemento
            this.first = first.next;
        }

        // Reduce el tamaño del queue por 1
        this.length--;

        // Devuelve el nodo que guardaste en el segundo paso
        return first
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const q = new Queue();
console.log('Tamaño -->', q.length, 'Primer elemento -->', q.first, 'Último elemento -->', q.last); // 2
q.enqueue(1);
console.log('Tamaño -->', q.length, 'Primer elemento -->', q.first, 'Último elemento -->', q.last); // 2
q.enqueue(2);
console.log('Tamaño -->', q.length, 'Primer elemento -->', q.first, 'Último elemento -->', q.last); // 2
q.dequeue();
q.dequeue();
console.log('Tamaño -->', q.length, 'Primer elemento -->', q.first, 'Último elemento -->', q.last); // 2