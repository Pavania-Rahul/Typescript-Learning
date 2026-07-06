//single Dimensional Array
var fruits1:string[] = ["apple","mango","banana"];
console.log(fruits1); //--->> [ 'apple', 'mango', 'banana' ]

var fruits2:Array<string> = ["apple","mango","banana"];
console.log(fruits2); //--->> [ 'apple', 'mango', 'banana' ]


//single dimentional Multitype Array
var values:(string | number)[] = ["apple","mango",10,20,"banana"];
console.log(values); //--->> [ 'apple', 'mango', 10, 20, 'banana' ]

var values:Array<string|number> = ["orange", "kiwi",30]
console.log(values); //---->> [ 'orange', 'kiwi', 30 ]


//access element
var fruits1:string[] = ["apple","mango","banana"];

for(var i:number=0;i<fruits1.length;i++){
     console.log(fruits1[i]); //--->> apple mango banana
}

for(var j in fruits1){
    console.log(fruits1[j]);   //---> apple mango banana
}

//Multi Dimensional Array
var myArray:number[][] = [[10,20],[30,40],[50,60]];
console.log(myArray); //--->> [ [ 10, 20 ], [ 30, 40 ], [ 50, 60 ] ]

var myArray2:(string|number)[][] = [[10,20,"Hello"],["World",30,40]]
console.log(myArray2); //--->> [ [ 10, 20, 'Hello' ], [ 'World', 30, 40 ] ]

//access multidimensional array using for loop

var myArray:number[][] = [[10,20],[30,40],[50,60]];
   for(var i:number=0;i<myArray.length;i++){

    for(var k:number=0;k<myArray[i].length;k++){
       console.log(myArray[i][k]); //102030405060
    }
   
}
 
for(var value in myArray){
    for(var newValue in myArray[value]){
         console.log(myArray[value][newValue]); //--->>102030405060
    }
}