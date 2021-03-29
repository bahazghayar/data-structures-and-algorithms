'use strict';

module.exports = function insertShiftArray(arr, val) {

    let shiftedArr = [];
    let index;

    if (arr.length == 0) {
        return [];
    } else if (arr.length % 2) {
        index = arr.length / 2 + 0.5;
    } else {
        index = arr.length / 2;
    }

    for (let i = 0; i < arr.length + 1; i++) {
        if (i == index) {
            shiftedArr[i] = val;
        }
        else if (i > index) {
            shiftedArr[i] = arr[i - 1];
        }
        else {
            shiftedArr[i] = arr[i];
        }
    }
    return shiftedArr;
}



