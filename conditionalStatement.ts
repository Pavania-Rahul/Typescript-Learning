

// If else condition
function checkEligiblity(personAge:number){
if(personAge>=18){
  console.log("Eligible for vote");
}else{
    console.log("Not eligible for vote");
}
}

checkEligiblity(18); // --->> Eligible for vote



//muliple condition:
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