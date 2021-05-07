'use strict';

const LinkedList = require('../linkedList/linked-list.js');

class HashTable {
    constructor(size) {
        this.table = new Array(size)
    }

    add(key, value) {
        let hash = this.getHash(key);

        //if contains a key, do nothing
        if (!this.table[hash]) {
            this.table[hash] = new LinkedList();
        }

        this.table[hash].append({ [key]: value });
    }

    getHash(key) {
        let hash = 353;
        for (let i = 0; i < key.length; i++) {
            // console.log(hash);
            hash = hash * 599 * key.charCodeAt(i) % this.table.length;
        }

        return hash;
    }

    find(key) {
        let hash = this.getHash(key);

        if (this.contains(key)) {

            if (this.table[hash].head) {
                let current = this.table[hash].head;
                if (Object.keys(current.value)[0] === key) {
                    return current.value[key];
                }
                while (current.next) {
                    current = current.next;
                    if (Object.keys(current.value)[0] === key) {
                        return current.value[key];
                    }
                }
            }
        }
        return null;
    }


    contains(key) {
        let hash = this.getHash(key);

        if (this.table[hash]) {
            return true;
        } else {
            return false;
        }
    }
}


module.exports = HashTable;