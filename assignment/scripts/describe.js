// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. we declare / create the variable 'name' and set the value of name equal to the string name 'Dane'.
// We check if name is equal to Mary, if Mary we console log 'Hi, Mary!'
// if name is not Mary, then we console log 'How do you do?'
// Name is not equal to Mary so we console.log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//we create the variable 'secret'
//we create the variable 'code' and we set code's value equal to the number 123.
//we check if code is equal to the number 123, if so then the value of the variable secret will equal the string name 'super' AND the code variables value will change to being the code's original value of number 123 multiplied by 2
//the code variable does equal 123 so secret variable's value is now the string 'super' and the code variable's value is now 246 (because 123x2)
//next we check if the value of the variable 'code' is greater than 250. If yes, then the value of the variable 'secret' changes to 'duper'.
//the value of the variable 'code' is the number 246 , so it is not greater than 250, therefore the code block does not run and the value of the variable 'secret' does not change to 'duper'
//we console log the variable secret which would output the string 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//we make the variable isStudent and set it's value equal to the boolean true
//we make the variable age and set its value equal to the number 34
//we make the variable zip and set its value equal to the number 55407
//we check if the value of the variable isStudent is equal to true AND if the value of the variable zip is greater than 80000
//if BOTH of these statements are true then the console will log 'You're a student on the West Coast!' and will not run the rest of code block.
//Since both statements are not true (only the first) we check to see if the value of isStudent is equal to false OR if the value of the variable age is less than 30.
//if EITHER statement is true, the console will log 'What are your hobbies?' and will not run the rest of the code block.
//Since neither statements are true we check to see if the value of the variable isStudent equals true. If yes, the console will log 'Welcome to Prime!'
//Since this statement is true the console will log 'Welcome to Prime!' and it will not run the rest of the code block.
//If this statement ran false then the last code block would run and the console would log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - colorOne and colorTwo have wrong values, instructions have the colors switched
//Should be colorOne = 'blue'; colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
//FIX - need to add syntax for colorTwo changing to purple in the codeblock since mix is true:
//colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//FIX - time is not a constant variable , time changes so needs a declaration that allows change.
//Should be : let time = 4
const time = 4;

//FIX - not sure if I'm just being picking here. But the instructions say AND for checking the temperature and time. It's showing now that its checking if temp OR time.
//Should be: if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- they are, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX - currently checking if minAge is less than or equal to age. Instructions says checking if age is greater than or equal to minAge.
//Should be: if (age >= minAge)
if(minAge <= age) {
//FIX - console log should say enter because instructions say the code block is true therefore enter.
//Should be : console.log('enter');
  console.log('no entry');
} else {
//FIX - this log is already above with the if block , so it should not be stated again for the else. console logging the 'no entry' could go in its place to make sense.
//Could be: console.log('no entry')
  console.log('enter');
}
*/
