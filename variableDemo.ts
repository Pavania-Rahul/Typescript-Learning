// Defined Diffrent Types of Varibale 
 
//string type--->>>
var userName:string = "Test";
console.log(userName);    //-----> Test


//number type it is accepted decimal and int number value-->>
var numberValue:number= 12;
console.log(numberValue);  //----> 12


//booleanType--->>
var isTrue:boolean =true;
console.log(isTrue); //-----> true


//undefined type--->>
var userData:undefined;
console.log(userData); //---->>undefined

//If var keyword is defind inside function then its accessible whole function

function varTest(){
      
      if(true){
        var x =100;
        console.log(x);
      }
      console.log(x);
}

varTest(); // ---->100
            //----> 100


//If let keyword is defind inside block then its accessible only that specific block only.
function letTest(){

    if(true){
    let y =1000;
      console.log(y);    //------>> 1000
    }

    // console.log(x);
}

letTest();


//for var keyword we can update and Redefine variable for let and const it's not supported.

var x:number = 200;
var x:number =300;
console.log(x);  //--->300