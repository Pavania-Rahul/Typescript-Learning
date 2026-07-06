
//Arithmatic operator
var x:number = 20;
var y:number = 10;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(5**2);

//Assignment operator 
console.log(x+=1);
console.log(x-=1);
console.log(x*=2);

//Comparison operator

var x:number = 20;
var y:number =10;

console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);
console.log(x!=y);

if(x>y){
    console.log("X is big number "+x);
}

function age(value:number){
    if(value>=18){
        console.log("You are eligible for vote your age is::"+value);
    }else{
        console.log("you are not eligible for vote please wait until you have 18 years old::"+value);
    }
}

age(2);


//turnary operator
var firstDeclare:number = 10;
var secondDeclare:number = 20;
console.log(firstDeclare>secondDeclare?"first number is big":"second number is big");


//Logical Operator
var a:boolean = true;
var b:boolean=false;
console.log(a&&b);
console.log(a||b);
console.log(!a);
console.log(!b);
