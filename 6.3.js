//6.3.js - organize strings:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz

const Organisation = (string1,string2)=>{
    let string3;
    for(let letter of (string1+string2)){
        !string3.includes(letter) && (string3 += letter);
    }
    return [...string3].sort().join("")
};
console.log(Organisation('xyaabbbccccdefww','xxxxyyyyabklmopq'));
