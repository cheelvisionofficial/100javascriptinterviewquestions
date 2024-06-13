/**
 *  Implement 2 stack with an array
 *  Create a data structure called twoStacks which will be using only
 *  a single array to store the data but will act as two different stacks.

 *  The twoStacks data structure will perform following operations.
 *  push1(elm): This will add data in the first stack.
 *  push2(elm): This will add data in the second stack.
 *  pop1(): This will remove the data from the first stack.
 *  pop2(): This will remove the data from the second stack. 

 * Example
 * Input:
 * let stack = new TwoStack(10);
 * 
 * // Push data in first stack
 * stack.push1('stack1);
 * 
 * // Push data in second stack
 * stack.push2('stack2);
 * 
 * // Pop data from first stack
 * console.log(stack.pop1());
 * 
 * // Pop data from second stack
 * console.log(stack.pop2());
 * 
 * Output:
 * "stack1"
 * "stack2"
 * 
 * Method: A space efficient method
 * This method is very space efficient and it does not overflow if there
 * is a space available in the array or any of the stack.
 * 
 * The concept we use here is we store the data on the 2 different ends
 * in the array (from start and from end).
 * 
 * The first stack stores the data from the front that is at the index 0
 * and the second stack stores the data from the end that is the index size-1.
 * 
 * Both stack push and pop data from opposite ends and to prevent the overflow
 * we just need to check if there is space in the array.
 */

// [1,2,-,-,-,-,21]

// top1 = 2,
// top2 = 3
// 2 < 2
// [10,11,4,2,3]
class TwoStacks {
    constructor(n) {
        this.size = n;
        this.top1 = -1;
        this.top2 = n;
        this.arr = [];
    }

    // Push in stack1
    push1(element) {
        // Check if there is space in array
        // Push at the start of the array
        if (this.top1 < this.top2 - 1) {
            this.arr[++this.top1] = element;
        } else {
            console.log('stack overflow');
            return false;
        }
    }

    // Push in stack2
    push2(element) {
        // Check if there is space in array
        // Push at the start of the array
        if (this.top1 < this.top2 - 1) {
            this.arr[--this.top2] = element;
        } else {
            console.log('stack overflow');
            return false;
        }
    }

    // Pop from the stack1
    pop1() {
        if (this.top1 >= 0) {
            let elm = this.arr[this.top1]; // 8
            this.top1--;
            return elm;
        } else {
            console.log('under flow');
            return false;
        }
    }

    // Pop from the stack1
    pop2() {
        if (this.top2 < this.size) {
            let elm = this.arr[this.top2]; // 8
            this.top2++;
            return elm;
        } else {
            console.log('under flow');
            return false;
        }
    }

    print() {
        console.log(this.arr);
    }
}

const twoStacks = new TwoStacks(5);

twoStacks.push1(1);
twoStacks.push1(2);


twoStacks.push2(3);
twoStacks.push2(4);

twoStacks.push2(5);
twoStacks.pop1();
twoStacks.pop1();


twoStacks.push2(6);
twoStacks.push2(7);

twoStacks.push2(8);

twoStacks.pop2();
twoStacks.pop2();
twoStacks.pop2();
twoStacks.pop2();

twoStacks.push1(1);
twoStacks.push1(2);
twoStacks.push1(3);
twoStacks.push1(4);
twoStacks.push1(5);


twoStacks.print();

// twoStacks.pop1();

twoStacks.print();

