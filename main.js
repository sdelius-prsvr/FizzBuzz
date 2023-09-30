/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/


// Nested Function Approach!
//

// function fizzy(num){
//   function fizz(num){
//     return (num % 3 === 0) ? 'Fizz' : ''
//   }
//   function buzz(num){
//     return (num % 5 === 0) ? 'Buzz' : ''
//   }
//   if(fizz(num) + buzz(num) === ''){
//     return num
//   }else{
//     return fizz(num) + buzz(num)
//   }
// }


//Nested Conditional Approach!

function fizzy(num){
  return (num % 3 === 0)
  ? (num % 5 === 0)
    ? 'FizzBuzz' : 'Fizz'
    : (num % 5 === 0)
      ? 'Buzz' : num
}


//Verbose/Literal Approach!
//
// function fizzy(num){
//   if (num % 3 === 0 && num % 5 !== 0)
//     return 'Fizz'
//   if (num % 5 === 0 && num % 3 !== 0)
//   return 'Buzz'
//   if (num % 3 === 0 && num % 5 === 0)
//     return 'FizzBuzz'
//   else return num
// }


// Inverted/Simplified Approach!

// function fizzy(num){
//   if (num % 3 === 0 && num % 5 === 0)
//     return 'FizzBuzz'
//   if (num % 5 === 0)
//     return 'Buzz'
//   if (num % 3 === 0)
//     return 'Fizz'
//   else return num
// }







/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
