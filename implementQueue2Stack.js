// Implement queue using two stack

// Implement queue data structure using two different stacks instead of
// using an array or object as a linked list.

// List of operations performed on Priority Queue
// ● enqueue(val): Adds the element in the queue.
// ● dequeue(): Removes the element from the queue.
// ● peek(): Returns the top element.

class Stack {
    constructor() {
        this.items = [];
    }

    // Add element to the top of the stack...
    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return 'Underflow';
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return 'No elements in the stack';
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return 'Underflow';
        }
        return this.items.shift();
    }

    // Return the front element
    front() {
        if (this.isEmpty()) {
            return 'No elements in Queue';
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

class QueueUsingStack {
    constructor() {
        this.stack1 = new Stack(); // enque and deque
        this.stack2 = new Stack(); // reordering
    }

    enqueue(element) {
        while (this.stack1.size() !== 0) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.push(element);
        while (this.stack2.size() !== 0) {
            this.stack1.push(this.stack2.pop());
        }
    }

    dequeue() {
        if (this.stack1.length === 0) {
            return 'Underflow';
        }
        return this.stack1.pop();
    }

    front() {
        if (this.isEmpty()) {
            return 'No elements in Queue';
        }
        return this.stack1[this.stack1.length - 1];
    }

    isEmpty() {
        return this.stack1.size() === 0;
    }

    size() {
        return this.stack1.size();
    }

    printQueue() {
        return this.stack1.printStack();
    }
}


const queueUsingStack = new QueueUsingStack();

queueUsingStack.enqueue(1);
queueUsingStack.enqueue(2);
queueUsingStack.enqueue(3);
queueUsingStack.enqueue(4);
queueUsingStack.enqueue(5);

console.log(queueUsingStack.size());

queueUsingStack.dequeue();
queueUsingStack.dequeue();
console.log(queueUsingStack.printQueue());
console.log(queueUsingStack.size());
