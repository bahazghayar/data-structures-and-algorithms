'use strict';

const insertionSort = require('../insertionSort.js');

describe('Insertion Sort Test', () => {

    it('Should Sort an array', () => {
        let arr = [8, 4, 23, 42, 16, 15];

        expect(insertionSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
    })

})


