//4.2 Tribonacci:
// you need to create a fibonacci function
// that given a signature array/list, returns the first n elements - signature included of the so
// seeded sequence.
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then
// return an empty array (except in C return NULL) and be ready for anything else which is not
// clearly specified ;)


const Tribonacci= (number, fibonacci) => {
    
    for (let i = 3; i < number ; i++) {
        if (typeof fibonacci[i-3] !== "number")
            return 'Error'
        fibonachi.push(fibonacci[i -1] + fibonacci[i - 2] + fibonacci[i - 3])
    }
    return (number === 0) ? [] : fibonacci;
  };

console.log(fib(10,[0, 1,1 ] ));
  
 
