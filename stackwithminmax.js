// Implement stack with max and min function

class StackWithMinMax {
    constructor() {
        this.items = [];
    }

    // Add element to the top of the stack...
    push(element) {
        if (this.size() === 0) {
            this.items.push({
                current: element,
                min: element,
                max: element
            });
        }
        else {
            const peekObj = this.peek();
            const min = peekObj.min < element ? peekObj.min : element;
            const max = peekObj.max > element ? peekObj.max : element;
            this.items.push({
                current: element,
                min,
                max
            });
        }
    }

    max() {
        const { max } = this.peek();
        return max;
    }

    min() {
        const { min } = this.peek();
        return min;
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

const ele = new StackWithMinMax();

ele.push(1);
ele.push(0);
ele.push(-1);
ele.push(10);
ele.push(11);
ele.push(11);

console.log(ele.max())
