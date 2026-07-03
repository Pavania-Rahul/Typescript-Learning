//Typescript DataType has two types Built-in and User-define

//Buil-in type are:--> Number , String , Boolean, Null, Void

// User define are:-->> Array , Touple , Enum, Function, class ,Interface


 //Number Type:--->>
  var first:number = 12.0;
  var second:number= 11;
  var third:number = 0X832;
  console.log(first);
  console.log(second);
  console.log(third);


 //String Type:--->>
 var empName:string = "John";
 var empDept:string = "IT";
 console.log(empName);
 console.log(empDept);


 //Boolean Type:--->>
 var a:boolean = true;
 console.log(a);

 //void type -->> It is represent return type:

 function test():void{
    console.log("This function is not return anything");
 }

 test();

 //any type -->> we can store any data types:
 var val:any = "Hello"
 val = 10;
 console.log(val);
 


