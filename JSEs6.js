//Template Literals
let word1 = "Kayla";
let word2 = "Emily";
let num1 = 2;
let num2 =3;
//const fullName = `${word1} ${word2}`
let example = 'hello\n' + 'world'
//console.log (fullName)
console.log(example)

//Destructing Objects
const personalInformation ={
    firstName: "Harry",
    lastName: "Styles",
    city: "yorkshire",
    country: "London",
    zipcode: "12345"
};
const {firstName, lastName} = personalInformation
console.log (`${firstName} ${lastName}`);

// destructing Arrays
//let (firstName , middleName) = ["kayla", "emily", "princess"];
//lastName= "styles"
//console.log(lastName)
//

//object literals
function addressMaker (city, state){
    const newAddress = {newCity: city, newState: state};
    console.log (newAddress)
 } 
 addressMaker('Austin', "Texas");
 ///
 //Spread operator
 let example1 = [1,2,3,4,5,6];
 let example2 = [... example1];
 example2.push(true);
 console.log(example)

//Arrow
//function add(...nums) {
  //  let total = nums.reduce(function (x,y) =>  x+y);

   // console.log(total);

//}
//add(4,5,7,8,12)

//Includes ()
// let and const
// Import and export
import { data } from ',/JSEs6.js';
let updatedData = data;
data.push(5)
console.log(data);

// padStart and padEnd 
//classes 
