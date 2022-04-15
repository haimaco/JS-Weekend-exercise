//2.7 - Basic Math
//Your task is to create a function that does four basic .
//The function should take three arguments - operation(string/char), value1(number),
//value2(number).
//The function should return result of numbers after applying the chosen operation.
//Examples
//basicOp('+', 4, 7) // Output: 11

//basicOp('-', 15, 18) // Output: -3
//basicOp('*', 5, 5) // Output: 25
//basicOp('/', 49, 7) // Output: 7

const BasicOp=(string ,value1,value2)=>{
     switch (string){

    case "+":
        return value1 + value2;
    case "-":
        return value1 - value2;//there is not a pb if value1<value2
    case "*":
        return value1 * value2;
    case "/":
       return value1 / value2;

}
console.log(BasicOp("+",15,18));
};
