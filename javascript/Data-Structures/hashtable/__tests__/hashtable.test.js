'use strict';

const HashTable = require('../hashtable.js');

const hashTable = new HashTable(50);

// console.log(hashTable.getHash('baha'));
// console.log(hashTable.getHash('baha'));
// console.log(hashTable.getHash('abc'));
// console.log(hashTable.getHash('cba'));

describe('Hash Table Tests', () => {
    it('Should add a key/value to your hashtable results in the value being in the data structure', () => {
        let key = 'Baha' ;
        let value = '0775050505'
        hashTable.add( key , value);
        expect(hashTable.contains(key)).toBe(true);
        expect(hashTable.find(key)).toBe(value);
       
    });

    it('Should retrieve based on a key returns the value stored', () => {
        let key = 'Baha' ;
        let value = '0775050505'
        hashTable.add( key , value);
        expect(hashTable.contains(key)).toBe(true);
        expect(hashTable.find(key)).toBe(value);
    });

    it('Should successfully returns null for a key that does not exist in the hashtable', () => {
        let key = 'Baha1'
        expect(hashTable.find(key)).toBe(null);
    });

    it('Should successfully handle a collision within the hashtable', () => {
        let key1 = 'abc' ;
        let value1 = '0775050505'
        let key2 = 'cba' ;
        let value2 = '0776060606'

        hashTable.add(key1, value1);
        hashTable.add(key2, value2);
        
        expect(hashTable.contains(key1)).toBe(true);
        expect(hashTable.contains(key2)).toBe(true);
        expect(hashTable.find(key1)).toBe(value1);
        expect(hashTable.find(key2)).toBe(value2);
    });

    it('Should successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        let key1 = 'abc' ;
        let value1 = '0775050505'
        let key2 = 'cba' ;
        let value2 = '0776060606'

        hashTable.add(key1, value1);
        hashTable.add(key2, value2);

        expect(hashTable.find(key1)).toBe(value1);
        expect(hashTable.find(key2)).toBe(value2);
    });

    it('Should successfully hash a key to an in-range value', () => {
        let key = 'baha'

        expect(hashTable.getHash(key) < 50).toBe(true);
    });

});

