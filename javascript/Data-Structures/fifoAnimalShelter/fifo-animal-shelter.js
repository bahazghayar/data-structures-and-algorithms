'use strict';

const { Queue } = require('../stacksAndQueues/stacks-and-queues.js');

class AnimalShelter {
    constructor() {
        this.cat = new Queue();
        this.dog = new Queue();
    }

    enqueue(animal){
        if (animal == 'dog' || animal == 'cat'){
            if (animal == 'dog') {
               this.dog.enqueue(animal) ; 
            } 

            if (animal == 'cat'){
                this.cat.enqueue(animal) ; 
            }
        } else {
            return 'This shelter only contains dogs and cats' ; 
        }
    }

    dequeue(pref){
        if (pref !== 'cat' && pref !== 'dog') return null ;

        if (pref == 'cat'){
           return this.cat.dequeue() ;
        }

        if (pref == 'dog'){
           return  this.dog.dequeue() ;
        }
    }
}


module.exports = AnimalShelter;

