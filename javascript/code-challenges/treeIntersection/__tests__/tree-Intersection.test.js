'use strict';

const tree_intersection = require('../tree-Intersection.js');
const { BinaryTree, Node } = require('../../../Data-Structures/tree/tree.js');

describe('Tree Intersection Word Test', () => {

    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(30);
    const node4 = new Node(40)

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;

    const tree1 = new BinaryTree(node1);
// ****************************************
    const node11 = new Node(50);
    const node22 = new Node(20);
    const node33 = new Node(60);
    const node44 = new Node(40);

    node11.left = node22;
    node11.right = node33;
    node22.left = node44;

    const tree2 = new BinaryTree(node11);
// *********************************************
    const node20 = new Node(10);
    const node21 = new Node(20);
    const node25 = new Node(30);
    const node23 = new Node(40)

    node20.left = node21;
    node20.right = node25;
    node25.left = node23;
    const tree3 = new BinaryTree(node20);
// *********************************************
    const node50 = new Node(50);
    const node51 = new Node(60);
    const node52 = new Node(70);
    const node53 = new Node(80)

    node50.left = node51;
    node50.right = node52;
    node52.left = node53;
     
    const tree4 = new BinaryTree(node50);

// *********************************************

    it('Should return a set of values found in both trees.', () => {
        expect(tree_intersection(tree1, tree2)).toEqual([20, 40]);
    })

    it('Should return there is no common values', () => {
        expect(tree_intersection(tree3, tree4)).toEqual('There is no common values');
    })

    it('Should return a set of values found in both trees.', () => {
        expect(tree_intersection(tree1, tree3)).toEqual([10 ,20,40,30]);
    })

});





