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

})

