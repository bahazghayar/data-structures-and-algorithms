'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        // this.value = new Node();
        this.top = null;
    }

    push(value) {
        if (!value)  return 'Please send a valid value'
    
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        return this.top;
    }

    pop() {
        let hold = this.isEmpty() ; 
        if (hold) {return 'exception'}

        let temp = this.top ;
        this.top = temp.next;
        temp.next = null ;
        return temp.value;
    }

    peek() {
        let hold = this.isEmpty() ; 
        if (hold) {return 'exception'}
        
        return this.top.value;
    }

    isEmpty(){
        if (this.top==null) return  true ;
       else return false ;
    }
}



class Queue {
    constructor() {
        this.front = this.rear = null ; 
    }

    enqueue(value) {
        if (!value)  return 'Please send a valid value' 
        let newNode = new Node(value);    
        if (this.isEmpty()){
            this.front = this.rear = newNode ;
        
        } else {
            this.rear.next = newNode ;
            this.rear = newNode ;
        }      
    }

    dequeue() {
        if (this.isEmpty()) return 'Exception' ;
        
        let temp = this.front ;
        this.front = temp.next ; 
        temp.next = null ; 

        return temp.value ;

    }

    peek() {
        if (this.isEmpty()) return 'Exception' ;
        return this.front.value ; 
    }

    isEmpty(){
        if (this.front==null) return  true ;
       else return false ;
    }

}

module.exports = {
    Stack, 
    Queue
  };