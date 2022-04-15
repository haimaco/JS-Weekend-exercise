//6.2.js Counting Duplicates:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

const countofDuplicates = string => {
    const obj = {};
    let temp;
    let count = 0;
    let returnStatment = ' # ';

    for(let i = 0; i < string.length ; i++){
        temp = string[i].toLowerCase();
        obj[temp] ? obj[temp] += 1 : obj[temp] = 1;
        
    }

    
    for( j in object){
        if(obj[j] > 1){
            count += 1;
            returnStatment += `${j} (occurs ${obj[j]} times)` 
            returnStatment += ' and '
        }

    }
    return count + returnStatment.slice(0,-4);
}

console.log(countofDuplicates("abcde"));
