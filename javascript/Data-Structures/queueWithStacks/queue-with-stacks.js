'use strict';

const { Stack } = require('../stacksAndQueues/stacks-and-queues');

class PseudoQueue {
    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();
    }

    enqueue(value) {
        if (!value) return 'Please send a valid value'

        this.pushStack.push(value);
    }

    dequeue() {

        if (this.pushStack.isEmpty() && this.popStack.isEmpty()) return 'Exception';

        if (this.popStack.isEmpty()) {
            while (!this.pushStack.isEmpty()) {
                let hold = this.pushStack.pop();
                this.popStack.push(hold);
            }
        }

        return this.popStack.pop();
    }
}

module.exports = PseudoQueue;