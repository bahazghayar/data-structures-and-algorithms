'use strict';

const hashTable = require('../../../Data-Structures/hashtable/hashtable.js');
const leftJoin = require('../left-join.js');

describe('Left Join Test', () => {
    it('Should return the left join ', () => {
        let leftTable = new hashTable(1024);
        let rightTable = new hashTable(1024);

        leftTable.add('fond', 'enamored');
        leftTable.add('wrath', 'anger');
        leftTable.add('diligent', 'employed');
        leftTable.add('outfit', 'garb');
        leftTable.add('guide', 'usher');
        
        rightTable.add('fond', 'averse');
        rightTable.add('wrath', 'delight');
        rightTable.add('diligent', 'idle');
        rightTable.add('guide', 'follow');
        rightTable.add('flow', 'jam');

        expect(leftJoin(leftTable, rightTable)).toStrictEqual([["outfit", "garb", null], ["fond", "enamored", "averse"], ["wrath", "anger", "delight"], ["diligent", "employed", "idle"], ["guide", "usher", "follow"]]);

    });
});


