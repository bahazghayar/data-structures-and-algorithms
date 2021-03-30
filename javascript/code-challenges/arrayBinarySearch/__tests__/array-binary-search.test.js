'use strict' ;

const arrayBinarySearch = require('../array-binary-search.js');

describe('arrayBinarySearch', ()=>{
   it ('Should return the index of the key search', ()=>{
    expect(arrayBinarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
    expect(arrayBinarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
    expect(arrayBinarySearch([], 1 )).toStrictEqual('please insert valid array');
   })
})


