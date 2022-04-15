//5.3 To Camel Case:
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing.
//  The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

const toCamelCase = string => {
    let array = [];
    let error = false;
    str.includes("-") ? array = string.split("-") : (string.includes("_") ? array = string.split("_") : error = true);
    if(error) return array

    for (let i = 1; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }
    return array.join("");
}


console.log(toCamelCase("theStealthWarrior",toCamelCase("the-stealth-warrior")));//underline case to cameCase
