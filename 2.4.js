//2.4 Unique
//There is an array with some numbers. All numbers are equal except for one. Try to find it!
//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//It’s guaranteed that array contains at least 3 numbers.

const findUniq= (val)=>
{ for (let i=1; i<val.lenght;i++){
    if(val[i]!= val[i+1] && val[i]!=val[i-1])
    return val[i];

    if ( i === val.length - 1 && val[i] !== val[i-1]){
      
        return val[i];
    }
    
}
 return val[0];
}
console.log(findUniq([1,1,2,1,1,1,]));
