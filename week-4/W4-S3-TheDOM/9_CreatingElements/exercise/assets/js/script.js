// TODO: Add 2 new items to the sidebar called "Register" and "Help".
var sideBarEl = document.querySelector(".sidebar ul");

// create a new div element
var newLi = document.createElement("li");
newLi.textContent = "Register";

// create a new div element
var newLi2 = document.createElement("li");
newLi2.textContent = "Help";

//var newLi2 = document.createElement("li");
//newLi2.textContent = "Help";

// append the new elements to the new
sideBarEl.appendChild(newLi);
sideBarEl.appendChild(newLi2);

