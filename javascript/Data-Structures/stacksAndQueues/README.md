# Stacks and Queues

## Methods implementation for Stack and Queues.

## Challenge
### Creating node class, stack class, queue class, and thier methods for adding and deleting data.

#### Stack methods: 
* ##### Push 
* ##### Pop 
* ##### Peek 
* ##### IsEmpty

#### Queue methods: 
* ##### Enqueue 
* ##### Dequeue
* ##### Peek 
* ##### IsEmpty 

## Approach & Efficiency

### Stack methods: 
- ### Push : 
* #### check if the value is invalid, will return "please send a valid value",
* #### make a new node ,
* #### check if the stack is empty , the new node will be the top.
* #### else the next value to the new node will be the original top, and the top will be the new node

- ### Pop: 
* #### check if the stack is empty , return exception
* #### declare a temp variable , asign the top to temp
* #### the original top will be the next value to the top.
* #### the next value to temp will be null
* #### return the popped value

- ### Peek:
* #### check if the stack is empty, return exception
* #### return the top value
 
- ### isEmpty: 
* #### check if the top is null , then the stack is empty , else it's not empty


### Queue methods: 
- ### Enqueue : 
* #### if the value is invalid, will return "please send a valid value",
* #### make a new node
* #### check if the queue is empty, the front and the rear will be the new node
* #### else, the rear will be the new node.

- ### Dequeue:
* #### check if the queue is empty , return exception
* #### declare a temp variable , asign the front to temp
* #### the original front will be the next value to the front.
* #### the next value to temp will be null
* #### return the dequeued value 

- ### Peek:
* #### check if the queue is empty, return exception
* #### return the front value

- ### isEmpty: 
* #### check if the front is null , then the queue is empty , else it's not empty

### Big O:
#### Stack methods: 
* #### Push : 
   ##### time:O(1)
   ##### space:O(1)
* #### Pop : 
   ##### time:O(1)
   ##### space:O(1) 
* #### Peek :
   ##### time:O(1)
   ##### space:O(1) 
* #### isEmpty : 
  ##### time:O(1)
  ##### space:O(1)

#### Queue methods:
* #### Enqueue : 
   ##### time:O(1)
   ##### space:O(1)
* #### Dequeue : 
   ##### time:O(1)
   ##### space:O(1) 
* #### Peek :
   ##### time:O(1)
   ##### space:O(1) 
* #### isEmpty : 
  ##### time:O(1)
  ##### space:O(1) 


## API

#### Stack methods: 
* ##### Push: takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
* ##### Pop: does not take any argument, removes the node from the top of the stack, and returns the node’s value.
* ##### Peek:  does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
* ##### IsEmpty: takes no argument, and returns a boolean indicating whether or not the stack is empty.

#### Queue methods: 
* ##### Enqueue: takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
* ##### Dequeue: does not take any argument, removes the node from the front of the queue, and returns the node’s value.
* ##### Peek: does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
* ##### IsEmpty: takes no argument, and returns a boolean indicating whether or not the queue is empty.
