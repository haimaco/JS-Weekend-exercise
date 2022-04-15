//5.4 To Weird Case
//Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
//string with all even indexed characters in each word upper cased, and all odd indexed
//characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
//index is even, therefore that character should be upper cased.
//The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
//be present if there are multiple words. Words will be separated by a single space(' ').
//Examples:
//toWeirdCase( "String" );//=> returns "StRiNg"
//toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

const toWeirdCase= (string)=>{
    let word = string.split(" ");
    let weirdCase = '';
    for (let i = 0 ; i < i.length ; i++) {
        for (let j = 0 ; j < word[i].length ; j++){
            j % 2 === 0 ?  weirdCase +=  word[i][j].toUpperCase() :   weirdCase +=  word[i][j].toLowerCase() ;
        }
        wierdCase += " ";
    } 
    return weirdCase;
};
