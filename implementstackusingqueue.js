class Queue {
    constructor() {
        this.items = [];
    }

    size() {
        return this.items.length;
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

/** Implement Stack Using Queue */

class StackUsingQueue {
    constructor() {
        this.queue = new Queue();
    }

    // Push
    push(element) {
        const size = this.queue.size();
        this.queue.enqueue(element);
        for (let i = 0; i < size; i++) {
            this.queue.enqueue(this.queue.dequeue());
        }
    }

    // Pop
    pop() {
        return this.queue.dequeue();
    }

    // isEmpty
    isEmpty() {
        return this.queue.isEmpty();
    }

    // Size
    size() {
        return this.queue.size();
    }
}

// LIFO

