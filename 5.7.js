//5.7.js - shortest words:
//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

const ShortestWord= (words)=>{
    let  mila = [words];
    let shortestword = mila[0];
    for(let word of mila){
        if( shortestword.length > word.length){
            shortestword = word;
        }
    }
    return shortestword.length;
    
};
console.log(ShortestWord("hi my name is haim Acoca!"));

