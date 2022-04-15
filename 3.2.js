//3.2:People on the Bus
// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples).
// Each integer array has two items which represent number of people get into bus (The first item) and number of people get
// off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after
// the last array). Even though it is the last bus stop, the bus is not empty and some people are still
// in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always
// >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop

//! second value in the first integer array is 0
//! people get off the bus cant be higher than people in buss (number in bus allwayes > 0)
//! last station no one should get in bus.

const IntheBus = (number) => {
    let people = 0;
    for (let i = 0; i < arr.length; i++) {
     
      if (number[0][1] !== 0 || people < 0 ) {
                return "Error";
            }
      people +=  number[i][0] - number[i][1];
    }
    return people;
  };
  console.log (IntheBus([[2,7],[8,9],[3,8],[5,7]]));
     
