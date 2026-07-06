var myString:string = "Learning Typescript";
// charAt()
console.log(myString.charAt(0)); //Output will be --> L
console.log(myString.charAt(2)); // Output will be --> a


//concat()
var firstString:string = "Hello world";
var secondString:string = " In Typescript";
console.log(firstString.concat(secondString)); //Output will be -->> Hello world In Typescript


//replace()
var newString:string = "Welcome";
console.log(newString.replace("W","Y")); //Output will be -->>Yelcome


//split()
var fruit:string = "Apple Banana Orange";
console.log(fruit.split(' ')); // Output will be ['Apple', 'Banana', 'Orange']
console.log(fruit.split(' ',2)); //Output will be ['Apple', 'Banana']


//substring()
//For substring index First start from 0 and For second value index Start from 1......
var value:string = "Welcome";
console.log(value.substring(0,4)); //Output will be ----->>Welc
console.log(value.substring(2,5)); //Output will be ----->> lco


//toUpperCase() and toLowerCase()
console.log(value.toLowerCase()); //output will be --->> welcome
console.log(value.toUpperCase()); //output will be -->> WELCOME

//trim()

var spaceRemove:string = " Welcome   ";
console.log(spaceRemove.trim());