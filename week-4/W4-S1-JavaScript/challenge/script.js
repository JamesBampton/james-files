// TODO: Add the code here
var num1=0;
var num2=30;
var operator = "/";

function calculator(num1, num2, operator) {
  let answer;

  switch (operator) {

    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    case "/":
    if( num1 == 0 || num2 == 0){

      console.log("You numbers must be greater than zero")
      break;
    }
    else {
      answer = num1 / num2;
  }
      break;    
}
return answer;
}

let result = calculator(num1, num2, operator);
console.log("The result is: " + result);



