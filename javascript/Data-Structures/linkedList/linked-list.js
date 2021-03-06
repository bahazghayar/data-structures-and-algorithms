"use strict";

const Node = require("./node.js");

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
        if (!this.head) {
            // empty ll
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
            current = current.next;
        }
        str += "NULL";
        return str;
    }

    append(value) {
        if (!value) {
            return "Please send a valid value";
        }
        if (!this.head) {
            return this.insert(value);
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        let newNode = new Node(value);
        current.next = newNode;

        return this;
    }

    insertBefore(value, newValue) {
        if (!value || !newValue) {
            return "Please send a valid values";
        };
        if (!this.head) {
            return "There is no values in the linked list";
        };

        if (this.includes(value)) {
            let current = this.head;
            let before = null;
            while (current) {
                if (current.value === value) {
                    let newNode = new Node(newValue);
                    if (!before) {
                        this.head = newNode
                    }
                    else {
                        before.next = newNode;
                    }
                    newNode.next = current;
                    return this;
                }
                else {
                    before = current;
                    current = current.next;
                }
            }
        } else {
            return "This value is not in the list"
        };
    }

    insertAfter(value, newValue) {
        if (!value || !newValue) {
            return "Please send a valid values";
        };
        if (!this.head) {
            return "Please send a valid values";
        };

        if (this.includes(value)) {
            let current = this.head;
            while (current) {
                if (current.value === value) {
                    let newNode = new Node(newValue);
                    newNode.next = current.next;
                    current.next = newNode;
                    return this;
                }
                current = current.next;
            }
        } else {
            return "This value is not in the list"
        };
    }

    kthFromEnd(value) {
        if (typeof (value) !== 'number' || value < 0) {
            return "Please send a valid value";
        };
        if (!this.head) {
            return "There is no values in the linked list";
        };

        let current = this.head;
        let length = -1;
        while (current) {
            current = current.next;
            length++;
        }
        if (length == 0) {
            return `This linked list is size of one: ${this.head.value}`
        }
        if (length < value) {
            return 'Exception'
        } else if (length >= value) {
            current = this.head;
            let counter = 0;
            while (current) {
                let position = length - counter;
                if (position == value) {
                    return current.value;
                }
                counter++;
                current = current.next
            }
        }

    }
}

function reverseList(list) {
    let current = list.head;
    let newLl = new LinkedList();
    while (current) {
        newLl.insert(current.value);
        current = current.next;
    }
    return newLl;

    // console.log(list)
    // let head = list.head;

    // let newHead = null;
    // let tmp = null;
    // while (head) {
    //     tmp = head.next;
    //     head.next = newHead;
    //     newHead = head;
    //     head = tmp;
    //     // console.log(newHead)
    // }
    // return newHead;
}

module.exports =
{
    LinkedList,
    reverseList,
    
}