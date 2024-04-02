/* alert upon entering website asking user to enter a list of comma -sep froyo flavors
they type : vanilla,vanilla,vanilla,strawberry,coffee,coffee
*/
const userInput = prompt("Please enter a list of comma separated froyo flavors");

//array of flavors using split
const flavors = userInput.split(",");

//Object used to keep count of how many orders there are of each flavor
const flavorCount = {};

//Loop used to iterate the the array of flavors
for (let i = 0; i < )