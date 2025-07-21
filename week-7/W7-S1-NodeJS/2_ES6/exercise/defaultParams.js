// traditional
function greeting(name) {
  var name = name || "Guest"; // Fallback if no argument is passed
  return "Hello Greeting, " + name;
}
console.log(greeting()); // "Hello, Guest"

const greet = (name = "Guest") => `Hello Greet, ${name}`;
console.log(greet()); // "Hello, Guest"
