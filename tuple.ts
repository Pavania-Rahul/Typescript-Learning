//Tuple is new data type which includes multiple set of value of diffrent data types

var employee:[number,string,number] = [101,"John",102];
console.log(employee); //-->> [ 101, 'John', 102 ]

//accessing element
console.log(employee[1]); //John
console.log(employee[3]); // undefined

//Add element in to tuple ---->> push()
var employee:[number, string, number] = [100,"Kevin",200];
employee.push(300,"James",400);
console.log(employee); //--->> [ 100, 'Kevin', 200, 300, 'James', 400 ]

//remove element from tupel ---->>pop()
console.log(employee.pop());  //--> its return remove element --->> 400
console.log(employee); //new tuple is  [ 100, 'Kevin', 200, 300, 'James' ]


//update element in Tuple
var student:[number,string] = [101,"Smith"];
student[1] = "James";
console.log(student); //--->> [ 101, 'James' ]