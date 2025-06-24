var firstName = "John";
var surName = "Smith";

const surName1 = "Doe";
const surName2 = "Doe";

var age = 25;
var retirementAge = 67;

console.log("you" + " " + "can" + " add" + " " + "strings" + " " + "together");

console.log("Ok" + " " + "let" + " me" + " " + "add" + " " + "some strings together");

console.log(`or use template literals to output details for Mr. ${firstName + " " + surName} `);

// TODO: log out the full name "John Smith" by concatenating the variables firstName and surName
console.log(`I am Mr. ${firstName + " " + surName} `);

// TODO: log out "John Smith and I amd 25 years old"
console.log(`I am  Mr. ${firstName + " " + surName + " and I am " + age + "yrs old" }`);

// TODO: Create a variable to store the number of years until retirement
var yearsLeft = retirementAge - age;

// TODO: log out "I have 42 years until retirement"
console.log(`I have ${yearsLeft + " until I retire"}`);

string1="I am Mr.";
string2=", I am ";
string3="yrs old ";
string4= "and I have ";
string5="until I retire";

console.log(`${string1 + " " + firstName + " " + surName + string2 + " " + age + string3 + string4 + yearsLeft + "yrs " + string5}`);




