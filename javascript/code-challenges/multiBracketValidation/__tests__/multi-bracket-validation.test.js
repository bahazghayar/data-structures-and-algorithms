'use strict' ;

const multiBracketValidation = require('../multi-bracket-validation.js');

describe('Multi-bracket validation tests' , () => {
   
    it('should be true if the brackets are balanced', () => {
        expect(multiBracketValidation('{}')).toBeTruthy();
        expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
    });

    it('should be false if the brackets are not balanced', () => {
        expect(multiBracketValidation('[({}]')).toBeFalsy();
        expect(multiBracketValidation('(](')).toBeFalsy();

    });
});

