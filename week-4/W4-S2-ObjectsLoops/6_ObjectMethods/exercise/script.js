// 1. Object.keys() - TODO: WHat does this method do? What is the output?
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};
console.log("Keys:", Object.keys(person));

// 2. Object.values() - TODO: WHat does this method do? What is the output?
console.log("Values:", Object.values(person));

// 3. Array.push() - TODO: WHat does this method do? What is the output? * Moves Orange into the array
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log("After push:", fruits); // ["apple", "banana", "orange"]

// 4. Array.pop() - TODO: WHat does this method do? What is the output? * Removes Last element and places into another variable
let poppedFruit = fruits.pop();
console.log("After pop:", fruits); // ["apple", "banana"]
console.log("Popped fruit:", poppedFruit); // "orange"

// 5. Array.shift() - TODO: WHat does this method do? What is the output? * Removes First element from the array and write into a new variable
let shiftedFruit = fruits.shift();
console.log("After shift:", fruits); // ["banana"]
console.log("Shifted fruit:", shiftedFruit); // "apple"

// 6. Array.concat() - TODO: WHat does this method do? What is the output? * Joins two arrays, fruits and Veg
let vegetables = ["carrot", "potato"];
let food = fruits.concat(vegetables);
console.log("After concat:", food); // [ "banana", "carrot", "potato"]

// 7. Array.indexOf() - TODO: WHat does this method do? What is the output? * Get the index value of banana
let index = food.indexOf("banana");
console.log("Index of banana:", index); // 0

// 8. Array.includes() - TODO: WHat does this method do? What is the output? * Check is Banana is in the array
let hasBanana = food.includes("banana");
console.log("Array contains banana:", hasBanana); // true

// 9. Array.filter() - Creates a new array with all elements that pass a test * take the list of array items that have 
let longFoods = food.filter((item) => item.length > 5);
console.log("Foods with more than 5 letters:", longFoods); // ["banana", "carrot", "potato"]
