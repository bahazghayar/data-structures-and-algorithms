'use strict';

const Node = require('../node.js');
const { expect } = require('@jest/globals');

test('init node class', () => {
    //arrange
    let value = 10;
    //act
    let node = new Node(value);
    //assert
    expect(node.value).toEqual(10);
    expect(node.next).toEqual(null);
});


