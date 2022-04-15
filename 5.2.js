//5.2 
//Write a function called repeat_str which repeats the given string src exactly count times.
//repeatStr(6, "I") // "IIIIII"
//repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
const repeat_str = (number, string) => {
    let word = string;
    for (let i = 1; i < number; i++) {
      string += word;
    }
    return string;
  };
  
  console.log(repeat_str(5, "Happy"));
