/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

// Multi-Function Approach!
//
// function fizz(number){
//   if (number % 3 === 0)
//     return 'Fizz'
//   else return number
// }
//
// function buzz(number){
//   if (number % 5 === 0)
//     return 'Buzz'
//   else return number
// }
//
// function fizzy(number){
//   if (fizz(number) === 'Fizz' && buzz(number) === 'Buzz')
//     return 'FizzBuzz'
//   if (fizz(number) === 'Fizz')
//     return 'Fizz'
//   if (buzz(number) === 'Buzz')
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


//Inverted/Siomplified Approach!
//
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
