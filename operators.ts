
//Arithmatic operator
var x:number = 20;
var y:number = 10;

console.log(x+y); //--->> 30
console.log(x-y); //--->> 10
console.log(x*y); //--->> 200
console.log(x/y); //--->> 2
console.log(x%y); //--->> 0 
console.log(5**2); //--->> 25

//Assignment operator 
console.log(x+=1); //--->> 21
console.log(x-=1); //--->> 20 
console.log(x*=2); //--->> 40

//Comparison operator

var x:number = 20;
var y:number =10;

console.log(x>y); //--->> true
console.log(x<y); //--->> false
console.log(x>=y); //--->> true
console.log(x<=y); //--->> false
console.log(x!=y); //--->> true

if(x>y){
    console.log("X is big number "+x); //--->> x is big number 20
}

function age(value:number){
    if(value>=18){
        console.log("You are eligible for vote your age is::"+value);
    }else{
        console.log("you are not eligible for vote please wait until you have 18 years old::"+value);
    }
}

age(2); // -->> you are not eligible for vote please wait until you have 18 years old::2


//turnary operator
var firstDeclare:number = 10;
var secondDeclare:number = 20;
console.log(firstDeclare>secondDeclare?"first number is big":"second number is big"); //--> second number is big


//Logical Operator
var a:boolean = true;
var b:boolean=false;
console.log(a&&b); //-->> false
console.log(a||b); //-->> true
console.log(!a); //-->> false
console.log(!b); //-->> true
