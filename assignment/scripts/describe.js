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


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and assign it the string value 'Dane'
// Then we create a conditional, checking to see if the variable 'name' is 'Mary'
// If 'name' does equal 'Mary' we console log 'Hi, Mary!'
// If 'name' does not equal 'Mary' we console log 'How do you do?'

// In this case the end result would be console logging 'How do you do?'

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
// First we create a variable, 'secret', without assigning it a value
// Then we create a variable, 'code', with a valur of 123
// Then we create a conditional statement that checks to see if the value of 'code' is equal to 123. If it is then the value of 'secret' becomes 'super' and the value of 'code' gets multiplied by 2.
// Then we create another conditional statement that checks if 'code' is greater than 250. If it is then the value of 'secret' becomes 'duper'
// Lastly we console log 'secret', which will result in logging the 'super' to the console, since the value of 'code' is 246, which is less than 250 and doesn't meet the requirement to switch 'secret' to 'duper'

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
// First we create a variable called 'isStudent' and set it's value to 'true'
// Then we create a variable called 'age' and assign it a value of 34
// Then we create a variable called 'zip' and assign it a value of 55407
// Then we create a conditional statement that first checks to see if 'isStudent' is true, and if 'zip' is greater than 80000. If both of those are true then we console log 'You're a student on the West Coast!'
// If one of those statements is false we check our next if statement, which checks if either 'isStudent' is false or if 'age' is less than 30. If either of those is true we console log 'What are your hobbies?'
// If both of those statements are false we check a third if statement, which checks to see if 'isStudent' is true. If it is we console log 'Welcome to Prime!'
// And lastly if none of the first three if statements evaluate to true we console log 'How about the weather?'
// With the values we assigned our variables we would console log 'Welcome to Prime!'

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
FIX - colorOne and colorTwo are set to the wrong colors. colorOne should = 'blue' and colorTwo should = 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
FIX - colorTwo should also become 'purple', so we need to add a line of code: colorTwo = 'purple'
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

FIX - We are trying to check if both conditions are true, instead of || we should use &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

FIX - The two console.logs here should be switched, logging 'enter' after the if statement and 'no entry' after the else statement.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

