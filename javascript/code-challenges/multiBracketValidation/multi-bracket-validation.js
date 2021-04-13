'use strict';

function multiBracketValidation(str) {

    let roundBrackets = 0 ;
    let squareBrackets = 0 ;
    let curlyBrackets = 0 ;

    // console.log(roundBrackets, squareBrackets, curlyBrackets)
    for (let i = 0; i < str.length; i++) {
        
        if ("(" === str[i] || ")" === str[i] ) {
            roundBrackets++;
        } else if ("[" === str[i] || "]" === str[i]) {
            squareBrackets++;
        } else if ("{" === str[i] || "}" === str[i] ) {
            curlyBrackets++;
        }
    }
    // console.log(roundBrackets + squareBrackets + curlyBrackets) ;

    if ((roundBrackets + squareBrackets + curlyBrackets) % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(multiBracketValidation('{}'));

module.exports = multiBracketValidation;