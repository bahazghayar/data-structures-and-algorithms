'use strict';

const Node = require('./node.js');

class LinkedList {

    constructor() {
        this.head = null;
        // this.tail = null;
        // this.length = 0;
    }

    insert(value) {
        if (!value) {
            return "Please send a valid value";
        }

        let newNode = new Node(value);
        if (!this.head) { // empty ll
            this.head = newNode;
           
        } else {
            newNode.next = this.head;
            this.head = newNode;
           
        }
        return this.head;
    }

    includes(value) {
        let current = this.head;
        if (current.value === value) {
            return true;
        }
        while (current.next) {
            current = current.next;
            if (current.value === value) {
                return true;
            }
        }
        return false;
    }

    toString() {
        // "{ a } ->{ b } ->{ c } -> NULL"
        if (!this.head) {
            return "NULL";
        }

        let current = this.head;
        let str = "";
        while (current) {
            str += `{ ${current.value} } -> `;
            current = current.next
        }
        str += "NULL";
        return str;

    }

}

module.exports = LinkedList;


// const ll = new LinkedList();
// ll.insert(100);
// console.log(ll);