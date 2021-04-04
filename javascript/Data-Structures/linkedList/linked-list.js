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
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    let newNode = new Node(value);
    currentNode.next = newNode;

    return this;
  }

  // insertBefore(value, newVal){

  // }

  // insertAfter(value, newVal){

  // }
}

module.exports = LinkedList;


