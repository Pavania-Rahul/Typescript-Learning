// Two Types Functions Named Function and Anonymous function

//named function
function display(){
    console.log("Welcome to typescript");
}

display(); //-->> Welcome to typescript


//named function with parameter type
function sumOfTwoElement(x:number, y:number):number{
    return x+y;
}

var result = sumOfTwoElement(10,20);
console.log(result); //--->>30


//Anonymous type function
var typeOfFunction = function(){
    console.log("Anonymous function");
}

typeOfFunction(); //--->> Anonymous function


//Anonymus type function with parameter
var sum = function(a:number, b:number):number{
    return a+b;
}

console.log(sum(1,2)); //--->> 3


//Optional Parameter Type Function
function greet(greeting:string, name:string):string{
    return greeting+"  "+name;
}
 console.log(greet("Welcome", "john")); //-->> return value as Welcome john
//  console.log(greet("Welcome")); // -->> getting compilation error as:-->> Expected 2 arguments buy got only 1.

 // Optional Parameter Example (?)
 function greet1(greeting:string, name?:string):string{
           return greeting+" "+name;
 }

 console.log(greet1("Hello"));   //--->> Hello undefined 



 //Default parameter Type function
 function greet3(name:string, greeting:string="Hello"):string{
   return greeting+" "+name;
 }

 console.log(greet3("John"));//--->> Hello John

 //Override Default value
 console.log(greet3("Kevin","How are you?")); //-->> How are you? kevin



 //Arrow Type Parameter Function --->> 
 var sum = (x:number, y:number):number =>{
    return x+y;
 }

 console.log(sum(2,5)); //--->> 7

 //Parameterless Arrow function

 var testFunction = () =>{
    console.log("Welcome to typescript");
 }

 testFunction();  //--->> Welcome to typescript

 // If the Function body consists of only one statement 
 // then no need for the  curly brackets and the return keyword

 var arrowFunction = () => console.log("Arrow Function test");
 arrowFunction(); //--->> Arrow Function test

 var sum = (x:number, y:number):number=>{
     return x+y;
 }

 //same above method we can write as
 var sum = (x:number,y:number): number => x+y;
 console.log(sum(10,20)); //---->> 30


 //Rest Parameter:-->> Rest Parameters allow a function to accept any number of arguments 
 // and store them as an array.
 function greet4(greetingMessage:String,...name:string[]):string{
    console.log(name);
    return greetingMessage+" "+name;
 }

 console.log(greet4("hello","How are you","Nice to meet you","You are good Guy"));