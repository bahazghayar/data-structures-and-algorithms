# Singly Linked List

## Methods implementation for singly linked lists.

## Challenge
* ### Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
* ### Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
* ### Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
* ### Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
* ### Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"

<br>

## Approach & Efficiency
- ### Insert : 
#### if the is invalid, will return "please send a valid value",
#### declare a variable for the newNode and create it and asign it,
#### if the linkedList is empty, the new value will be the head,
#### else the previous head will be the next node and the new value will be the new head. 
- ### Includes: 
#### if the value is in the linkedList will be returned,
#### else , return false.
- ### toString:
#### return all of the values in the linkedList as a string.


### Big O :
* #### Insert : 
   ##### time:O(1)
   ##### space:O(1)
* #### Includes : 
   ##### time:O(n)
   ##### space:O(n) 
* #### toString :
   ##### time:O(n)
   ##### space:O(n) 

## API

![LinkedList](../../assets/linked-list.png)

