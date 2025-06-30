// This allows us to select multiple elements
var sidebarEls = document.querySelectorAll("li");

for (var i = 0; i < sidebarEls.length; i++) {
  sidebarEls[i].style.color = 'blue';
}

/* document.querySelectorAll('li').forEach(li => {
  li.style.color = 'blue';
});
 */

var sidebarEls = document.querySelectorAll("li");

for (var i = 0; i < sidebarEls.length; i++) {
  sidebarEls[i].style.background = 'white';
}

// Change the text of a list item
var listItem = document.querySelectorAll("li")[1]
listItem.textContent ="Jimmy"

var widgetP = document.querySelectorAll(".widget p")[2]
widgetP.textContent ="Optimise performance metrics here"

var widgetP = document.querySelectorAll(".widget p")[2]
widgetP.style ="color: pink; font-size: 20px"

