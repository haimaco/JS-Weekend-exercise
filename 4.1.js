//4.1 Fibonacci
// “Write a function to return an n element in Fibonacci sequence” is one of the most common
// questions you can hear during the coding challenge interview part. In this blogpost I’m going to
// walk through the two of the most typical solutions for this problem and also cover a dreadful (for
// most of novice developers) topic of time complexity.
// So what is a Fibonacci sequence? According to Wikipedia:
// “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence,
// called the Fibonacci sequence, and characterized by the fact that every number after the first
// two is the sum of the two preceding ones.”
// Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like
// this:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
// or this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

const Fibonacci=(number)=>{
    let val1 = 1;
    let val2 = 1;
    let suite;
    let fibonacci = [1,1];
    for (let i = 2; i < numbers ; i++) {
      suite = val1 + val2;
      val1 = val2;//switch
      val2 = suite//switch
      fibonacci.push(val2)
    }
    return fibonacci.join(", ") + "...";
  };
console.log(Fibonacci(8));

  
