// create your coffee object array here


// creat your print order function here

/* function submitOrder(){

    var coffee = {
    type: "Latte",
    milk: "Yes",
    customer: "Tom Silk",
},

 var coffee = {
    type: "Flat White",
    milk: "Yes",
    customer: "Arnold Grundy",
},

 var coffee = {
    type: "Cortado",
    milk: "Yes",
    customer: "Iam Davies",
},

 var coffee = {
    type: "Mocha",
    milk: "no",
    customer: "Benny Fits",
},
 */

/* 
    type = document.getElementById("orderItem").innerHTML;
    milk = document.getElementById("milk").innerHTML
    customer = document.getElementById("customerName").innerHTML;
    
    console.log(type);
    console.log(milk);
    console.log(customer);

}
 */




//Coffee orders array
var theArray = [
{
    type: "Latte",
    milk: "Yes",
    customer: "Tom Silk",
},

 {
    type: "Flat White",
    milk: "Yes",
    customer: "Arnold Grundy",
},

 {
    type: "Cortado",
    milk: "Yes",
    customer: "Iam Davies",
},

 {
    type: "Mocha",
    milk: "no",
    customer: "Benny Fits",
},
];

printOrders(theArray); //Pass the coffee array into the function
//Function to accept and print out the array items
/* function printOrders(theArray){

    for (var i=0; i < theArray.length; index) {
        console.log(theArray[i].customer);
    }

}
 */
function printOrders(theArray){

    for (let i of theArray){
        console.log(`Customer: ${i.customer} Drink: ${i.type} Milk: ${i.milk}`);
    }
}


for (var i = 0; i < theArray.length; i++) {
  console.log(theArray[i]);
}
 /* theArray.forEach((element, index) => {
        console.log('Order number ${index} : $elements}');
    }) */

