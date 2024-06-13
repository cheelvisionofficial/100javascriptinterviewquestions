function PriorityQueue() {
    let items = [];

    // Container
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    // Add a new element in a queue
    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);

        let added = false;

        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority > items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (added === false) {
            items.push(queueElement);
        }
    }

    this.dequeue = () => {
        return items.shift();
    }

    this.print = () => {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`);
        }
    }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(10, 1);
priorityQueue.enqueue(20, 2);
priorityQueue.enqueue(30, 3);
priorityQueue.enqueue(40, 0);

priorityQueue.print();

priorityQueue.dequeue();
console.log("------------------------");
priorityQueue.print();
