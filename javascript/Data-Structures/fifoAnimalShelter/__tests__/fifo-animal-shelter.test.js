
const AnimalShelter = require('../fifo-animal-shelter.js');

describe('AnimalShelter tests', () => {

    it('Should enqueue a cat', () => {
        //arange
        let animalShelter = new AnimalShelter();
        let animal = 'cat';
        //act
        animalShelter.enqueue(animal);
        //assert
        expect(animalShelter.cat.front.value).toBe(animal);
    });

    it('Should dequeue a cat', () => {
        let animalShelter = new AnimalShelter();
        let animal = 'cat';
        animalShelter.enqueue(animal);
        //act
        animalShelter.dequeue(animal);
        //assert
        expect(animalShelter.cat.front).toBeNull();
    });

    it('Should enqueue a dog', () => {
        //arange
        let animalShelter = new AnimalShelter();
        let animal = 'dog';
        //act
        animalShelter.enqueue(animal);
        //assert
        expect(animalShelter.dog.front.value).toBe(animal);
    });

    it('Should dequeue a dog', () => {
        let animalShelter = new AnimalShelter();
        let animal = 'dog';
        animalShelter.enqueue(animal);
        //act
        animalShelter.dequeue(animal);
        //assert
        expect(animalShelter.dog.front).toBeNull();
    });

    it('Should not enqueue any animal other than cats or dogs', () => {
        //arange
        let animalShelter = new AnimalShelter();
        let animal = 'mouse';
        //act
        // animalShelter.enqueue(animal);
        //assert
        expect(animalShelter.enqueue(animal)).toBe('This shelter only contains dogs and cats');
    });

    it('Should not dequeue any animal other than cats or dogs', () => {
        //arange
        let animalShelter = new AnimalShelter();
        let animal = 'mouse';
        //act
        // animalShelter.enqueue(animal);
        //assert
        expect(animalShelter.dequeue(animal)).toBeNull();
    });
});
