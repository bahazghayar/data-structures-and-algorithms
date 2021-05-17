'use strict';

function tree_intersection(tree1, tree2) {

    let arr1 = tree1.preOrder();
    let arr2 = tree2.preOrder();

    let commonValues = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            commonValues.push(arr1[i]);
        }
    }

    return commonValues;
}

module.exports = tree_intersection;
