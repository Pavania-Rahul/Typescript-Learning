

// If else condition
function checkEligiblity(personAge:number){
if(personAge>=18){
  console.log("Eligible for vote");
}else{
    console.log("Not eligible for vote");
}
}

checkEligiblity(18); // --->> Eligible for vote



//Multiple condition:
var valueA:number = 10;
var valueB:number =20;
var valueC:number =30;

if(valueA>valueB && valueA>valueC){
    console.log("Value a is bigger");
}else if (valueB>valueA && valueB>valueC){
    console.log("Value B is bigger");
}else{
    console.log("Value C is bigger");   //-->> Value C is bigger
}



//Ternary Operator
var x:number = 100;
var y:number = 200;
x>y? console.log("x is largest number"): console.log("y is largest number"); //-->> y is largest number



//Nested If else condition
var weekNo:number =1;

  if(weekNo==1){
    console.log("Sunday");  //-->> Sunday
  }else if(weekNo==2){
    console.log("Monday");
  }else if(weekNo==3){
    console.log("Tuesday");
  }else if(weekNo==4){
    console.log("Wednesday");
  }else if(weekNo==5){
    console.log("Thursday");
  }else if(weekNo==6){
    console.log("Friday");
  }else if(weekNo==7){
    console.log("Saturday");
  }else{
    console.log("Invalid input");
  }


//Switch case
var weekNo:number = 3;
switch(weekNo){
 case 1: console.log("Sunday"); break;
 case 2: console.log("Monday"); break;
 case 3: console.log("Tuesday"); break; //---> Tuesday
 case 4: console.log("Wednesday"); break;
 case 5: console.log("Thursday"); break;
 case 6: console.log("Friday"); break;
 case 7: console.log("Saturdat"); break;
 default:console.log("Invalid output"); break;
}