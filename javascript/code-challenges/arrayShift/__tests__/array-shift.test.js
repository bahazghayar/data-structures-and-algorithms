'use strict';

const arrayShift = require('../array-shift.js');

describe('arrayShift', ()=>{
   it ('Should return an array with the new value added at the middle index.', ()=>{
    expect(arrayShift([2,4,6,8],5)).toStrictEqual([2,4,5,6,8]);
    expect(arrayShift([4,8,15,23,42],16)).toStrictEqual([4,8,15,16,23,42]);
    expect(arrayShift([],1)).toStrictEqual([]);
   })
})

