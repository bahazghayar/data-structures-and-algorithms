'use strict';

const quickSort = require('../quickSort.js');

describe('Quick Sort Test', () => {

    it('Should Sort an array', () => {
        let arr = [8,4,23,12,10,42,16,15];

        expect(quickSort(arr , 0 ,7)).toEqual([4, 8,10, 12, 15, 16, 23, 42]);
    })

})