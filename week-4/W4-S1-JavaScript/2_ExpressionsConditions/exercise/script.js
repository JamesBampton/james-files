// JavaScript Expressions and Conditions Exercise

// 1. Variable Declaration and Assignment
let num1 = 10; // A number
let num2 = "10"; // A string with a numeric value
let isTrue = true; // A boolean
let myNum = 4;
let jamesNum = 15;

// 2. Using Comparison Operators

// Comparison using '>'
let isGreater = num1 > 5; // Checks if num1 is greater than 5
console.log("Is num1 greater than 5?", isGreater); // true

// TODO: Comparison using '<='
let isLessThanEq = num1 <= 5;
console.log("Is num1 less than or equal to 5?", isLessThanEq); // false

// TODO: Comparison using '<='
let jameseval = myNum >= 5;
console.log("Is jameseval less than or equal to 5?", jameseval); // false

// 3. Strict vs. Value Comparison
// TODO: Value comparison using '=='
let comparejb = num1 === num2;
console.log("It is " + comparejb + " that both numbers are the same");


// TODO: Strict comparison using '==='
// 4. Conditional Statements

// Example of an if/else condition using a comparison
if (num1 === 10) {
  console.log("num1 is exactly equal to 10 (strict comparison)."); // This block will run
} else {
  console.log("num1 is not exactly equal to 10.");
}

// Another conditional statement to check if num1 is greater than 15

if(jamesNum > 15) {
  console.log("James' number is greater than 15");
} else {
console.log("James' number is less than 15");

}


// 5. TODO - Conditional Statements with Logical Operators
if (num2 === "10" && num1 === "10") {
  console.log("num1 is less than 15 and num2 is exactly equal to '10'.");
}

if (num1 < 15 && (num2 === "10" || num1 === 10)) {
  console.log("num1 is less than 15 and num2 is exactly equal to '10'.");
}

// TODO: what's the difference between the && and || operators?

// Both values are considered for evaluation for &&. While || is 'or' meaning at least one value has to evaluate as true.

/// TODO: Add a conditional statement to check if num1 is less than 15 and num2 is exactly equal to '10'.

if(num1 < 15 && (num2 === '10')){
  console.log("It's a match.");
} else {
    console.log(" Its not a match")}

//
