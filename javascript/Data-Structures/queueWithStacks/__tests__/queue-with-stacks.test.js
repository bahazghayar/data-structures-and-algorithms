
const PseudoQueue = require('../queue-with-stacks') ;

describe('PseudoQueue tests', () => {

    it('Should successfully enqueue into a queue', () => {
        //arrange
        let pseudoQueue = new PseudoQueue();
        let value = 1;
        //act
        pseudoQueue.enqueue(value);
        //assert 
        expect(pseudoQueue.pushStack.top.value).toBe(value);
    });

    it('Should successfully dequeue out of a queue the expected value', () => {
        //arrange
        let pseudoQueue = new PseudoQueue();
        let value = 1;
        pseudoQueue.enqueue(value);
        //act
        // pseudoQueue.dequeue();
        //assert
        expect(pseudoQueue.dequeue()).toBe(value);
        expect(pseudoQueue.popStack.isEmpty()).toBe(true);
        expect(pseudoQueue.pushStack.isEmpty()).toBe(true);
    });
    
    it('Should successfully instantiate an empty queue', () => {
        //arange
        let pseudoQueue = new PseudoQueue(); 
        //act  
        //assert
        expect(pseudoQueue.pushStack.top).toBeNull();
    });

    it('Calling dequeue on empty queue raises exception', () => {
        //arrange
        let pseudoQueue = new PseudoQueue();
        //act
        let item = pseudoQueue.dequeue();
        //assert
        expect(item).toBe('Exception');
        
    });


}) 