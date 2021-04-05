'use strict';

const Node = require('../node.js');
const LinkedList = require('../linked-list.js');
const { expect } = require('@jest/globals');

describe('Linked List', () => {
  let ll = new LinkedList();

  it('Can successfully instantiate an empty linked list', () => {
    expect(ll.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    expect(ll.insert(10).value).toEqual(10);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    expect(ll.head.value).toEqual(10);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    ll.insert(5);
    expect(ll.head.value).toEqual(5);
    ll.insert(8);
    expect(ll.head.value).toEqual(8);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    expect(ll.includes(10)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(ll.includes(3)).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    // "{ a } -> { b } -> { c } -> NULL"
    expect(ll.toString()).toEqual("{ 8 } -> { 5 } -> { 10 } -> NULL");
  }); 

  it('Can successfully add a node to the end of the linked list',()=>{
    expect(ll.append(15).toString()).toEqual("{ 8 } -> { 5 } -> { 10 } -> { 15 } -> NULL"); 
 });

 it('Can successfully add multiple nodes to the end of a linked list',()=>{
    ll.append(18);
    ll.append(20);
    expect(ll.toString()).toEqual("{ 8 } -> { 5 } -> { 10 } -> { 15 } -> { 18 } -> { 20 } -> NULL");
});

it ('Can successfully insert a node before a node located i the middle of a linked list',()=>{
  expect(ll.insertBefore(10,9).toString()).toBe("{ 8 } -> { 5 } -> { 9 } -> { 10 } -> { 15 } -> { 18 } -> { 20 } -> NULL")
});

it('Can successfully insert a node before the first node of a linked list',()=>{
    expect(ll.insertBefore(8,6).toString()).toBe("{ 6 } -> { 8 } -> { 5 } -> { 9 } -> { 10 } -> { 15 } -> { 18 } -> { 20 } -> NULL") 
});

it ('Can successfully insert after a node in the middle of the linked list',()=>{
    expect(ll.insertAfter(10,12).toString()).toBe("{ 6 } -> { 8 } -> { 5 } -> { 9 } -> { 10 } -> { 12 } -> { 15 } -> { 18 } -> { 20 } -> NULL")
});

it ('Can successfully insert a node after the last node of the linked list',()=>{
    expect(ll.insertAfter(20,22).toString()).toBe("{ 6 } -> { 8 } -> { 5 } -> { 9 } -> { 10 } -> { 12 } -> { 15 } -> { 18 } -> { 20 } -> { 22 } -> NULL") 
});

it ('Should return an error where k is greater than the length of the linked list',()=>{
  expect(ll.kthFromEnd(20)).toBe('Exception') 
});

it ('Should return the head where k and the length of the list are the same',()=>{
  expect(ll.kthFromEnd(9)).toBe(6) 
});

it ('Should return an error where k is not a positive integer',()=>{
  expect(ll.kthFromEnd(-10)).toBe('Please send a valid value');
});

it ('Should return an error where the linked list is of a size 1',()=>{
  let ll2 = new LinkedList();
  ll2.insert(3);
  expect(ll2.kthFromEnd(3)).toBe('This linked list is size of one: 3');
});

it ('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list',()=>{
  expect(ll.kthFromEnd(4)).toBe(12) 
});

})

