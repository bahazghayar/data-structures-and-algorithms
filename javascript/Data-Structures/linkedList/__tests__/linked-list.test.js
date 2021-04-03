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

})

