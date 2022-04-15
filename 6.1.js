//6.1.js - Mumbling:
//This time no story, no theory. The examples below show you how to write function
//accum:
//Examples:
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"
//The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum =(string)=>{
    let word;
    const val = string.split("");
        for(let i = 0 ; i < val.length ; i++){
            for(let j = 0 ; j <= i ; j++){   
                j === 0 ? word += val[i].toUpperCase() : word += val[i].toLowerCase(); 
            }
            i < val.length - 1 ? word += '-' : word += ''; 
        }
        return word;
    }
    console.log(accum(cwAt));
    console.log(accum(abcd));
