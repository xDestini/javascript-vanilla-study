// LIFO -- Last In - Last Out

class Stack {
	constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
	}

    push(val) {
        // crea un nodo con el valor aceptado por el método
        const node = new Node(val);

        if (this.length === 0) {
            // si es el primer nodo, asígnalo como primero
            this.first = node;
        } else {
            // si no es el primer nodo, asigna el último nodo como el anterior de este nuevo nodo
            const last = this.last;
            node.prev = last;
        }

        this.last = node;
        this.length++;
        return this
    }

    pop() {
        // Verifica si hay nodos en el stack, si no hay devuelve null
        if (this.length === 0) return null;

        // Si hay, guarda el último nodo en una constante
        const last = this.last

        // Si el stack solo tiene un nodo, re-asigna el primero y el último a null
        if (last === this.first) {
            this.first = null;
            this.last = null;
        } else { // Si tiene más de un nodo, re-asigna el último al anterior al penúlitmo
            this.last = last.prev;
        }

        // Reduce el tamaño del stack por 1
        this.length--;

        // Devuelve el nodo que guardaste en el segundo paso
        return last
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.length, stack.first, stack.last); // 3
stack.pop(); // 3
console.log(stack.length); // 2
