/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/


// Multi-Function Approach!
//
// function fizz(number){
//   return (number % 3 === 0)
// }
//
// function buzz(number){
//   return (number % 5 === 0)
// }
//
// function fizzy(number){
//   if (fizz(number) && buzz(number))
//     return 'FizzBuzz'
//   if (fizz(number))
//     return 'Fizz'
//   if (buzz(number))
//     return 'Buzz'
//   else return number
// }


//Verbose/Literal Approach!
//
// function fizzy(number){
//   if (number % 3 === 0 && number % 5 !== 0)
//     return 'Fizz'
//   if (number % 5 === 0 && number % 3 !== 0)
//   return 'Buzz'
//   if (number % 3 === 0 && number % 5 === 0)
//     return 'FizzBuzz'
//   else return number
// }


// Inverted/Simplified Approach!

function fizzy(number){
  if (number % 3 === 0 && number % 5 === 0)
    return 'FizzBuzz'
  if (number % 5 === 0)
    return 'Buzz'
  if (number % 3 === 0)
    return 'Fizz'
  else return number
}







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
