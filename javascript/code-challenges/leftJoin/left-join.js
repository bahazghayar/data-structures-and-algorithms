'use strict';


function leftJoin(leftTable, rightTable) {

    let result = [];
    let table = leftTable.table;

    for (let i = 0; i < table.length; i++) {

        if (table[i] !== undefined) {

            let key = Object.keys(table[i].head.value)[0];
            let value1 = Object.values(table[i].head.value)[0]
            let value2 = rightTable.find(key);

            result.push([key, value1, value2]);

        }
    }

        return result;
}


module.exports = leftJoin;