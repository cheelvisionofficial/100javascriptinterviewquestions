/**
 *  Detect and remove cycle from linkedlist...
 * 
 * Floyds Tortoise and Hare algorithm
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function detectAndRemoveCylce(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            break;
        }
    }

    if (fast === null || fast.next === null) {
        return false;
    }

    slow = head;

    while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    fast.next = null;

    return true;
}


const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = head;
console.log(detectAndRemoveCylce(head));
console.log(head);














