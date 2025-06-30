console.log("Hello from script.js");

// What is this?
console.log(window); // Highest level is the browser window that contains the DOM (object of the browser)

// What is the difference between window and document?
console.log(document); //The html document object loaded into the window (object of the window property)

// What is the difference between document and document.documentElement?
console.log(window.document);  //The document shos the parent and the elements, the documentElemnet just shows the children of the document)
console.log(document.documentElement);

// what are the children of the body element?
console.log(document.body.children); // The child elements that are found in the body element of the page (div). 
