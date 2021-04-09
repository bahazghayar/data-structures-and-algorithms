// const { expect } = require('@jest/globals');

const {Stack} = require('../stacks-and-queues.js');
const {Queue} = require('../stacks-and-queues.js');

describe('Stack tests', () => {
    it('Should push to the stack successfully', () => {//LIFO
        //arange
        let stack = new Stack();
        let value = 1;
        //act
        stack.push(value);
        //assert
        expect(stack.top.value).toBe(value) ; 
    });
    
    it('Should successfully push multiple values onto a stack', () => {//LIFO
        //arange
        let stack = new Stack();
        let value1 = 1;
        let value2 = 2;
        let value3 = 3; 
        //act
        stack.push(value1);
        stack.push(value2);
        stack.push(value3);
        //assert
        expect(stack.top.value).toBe(value3);
        expect(stack.top.next.value).toBe(value2);

    });

    it('Should successfully pop off the stack', () => {
        //arange
        let stack = new Stack();
        let value = 4;
        stack.push(value);
        //act
        // stack.pop();
        //assert
        expect(stack.pop()).toBe(value);
        expect(stack.top).toBeNull();
      
    });

    it('Should successfully empty a stack after multiple pops', () => {
        //arange
        let stack = new Stack();
        let value = 4;
        let value1 = 3;
        let value2 = 2;
        let value3 = 1; 
        stack.push(value);
        stack.push(value1);
        stack.push(value2);
        stack.push(value3);
    
        //act
        // stack.pop();
        //assert
        expect(stack.pop()).toBe(value3);
        expect(stack.pop()).toBe(value2);
        expect(stack.pop()).toBe(value1);
        expect(stack.pop()).toBe(value);

        expect(stack.top).toBeNull();
      
    });
    
    it('Should successfully peek the next item on the stack', () => {
        //arange
        let stack = new Stack();
        let value = 4;
        stack.push(value);
        //act
        let item = stack.peek();
        //assert
        expect(item).toBe(value) ;
    });
    
    it('Should successfully instantiate an empty stack', () => {
        //arange
        let stack = new Stack(); 
        //act
        
        //assert
        expect(stack.top).toBeNull() ;
    });
    
    it('Calling pop or peek on empty stack raises exception ', () => {
        //arange
        let stack = new Stack();
        //act
        let item = stack.peek();
        let item2 = stack.pop();
        //assert
        expect(item).toBe('exception');
        expect(item2).toBe('exception');
    });

});


describe('Queue tests', () => {
   
    it('Should successfully enqueue into a queue', () => {
        //arrange
        let queue = new Queue();//FIFO
        let value = 1;
        //act
        queue.enqueue(value);
        //assert 
        expect(queue.front.value).toBe(value);
    });

    
    it('Should successfully enqueue multiple values into a queue', () => {
        //arrange
        let queue = new Queue();//FIFO
        let value = 1;
        let value2 = 2;
        //act
        queue.enqueue(value);
        queue.enqueue(value2);
        //assert
        
        expect(queue.front.value).toBe(value);
        expect(queue.rear.value).toBe(value2);

    });
    
    it('Should successfully dequeue out of a queue the expected value', () => {
        //arrange
        let queue = new Queue();
        let value = 1;
        queue.enqueue(value);
        //act
        queue.dequeue();
        //assert
        expect(queue.front).toBeNull();
        expect(queue.isEmpty()).toBe(true);

        // expect(queue.rear).toBeNull();
    });
    

    it('Should successfully peek into a queue, seeing the expected value', () => {
        //arrange
        let queue = new Queue();
        let value = 1;
        queue.enqueue(value);
        //act
        let item = queue.peek();
        //assert
        expect(item).toBe(value);
    });

    it('Should successfully empty a queue after multiple dequeues', () => {
        //arange
        let queue = new Queue();
        let value = 1;
        let value1 = 2;
        let value2 = 3;
        let value3 = 4; 
        queue.enqueue(value);
        queue.enqueue(value1);
        queue.enqueue(value2);
        queue.enqueue(value3);
        //act  
        //assert
        expect(queue.dequeue()).toBe(value);
        expect(queue.dequeue()).toBe(value1);
        expect(queue.dequeue()).toBe(value2);
        expect(queue.dequeue()).toBe(value3);
        expect(queue.front).toBeNull();
    });
    
    it('Should successfully instantiate an empty queue', () => {
        //arange
        let queue = new Queue(); 
        //act  
        //assert
        expect(queue.front).toBeNull() ;
        expect(queue.isEmpty()).toBe(true);
    });

    
    it('Calling dequeue or peek on empty queue raises exception', () => {
        //arrange
        let queue = new Queue();
        //act
        let item1 = queue.peek();
        let item2 = queue.dequeue();
        //assert
        expect(item1).toBe('Exception');
        expect(item2).toBe('Exception');
    });
});