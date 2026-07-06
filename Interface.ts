interface EmployeeDetails{
employeeName:string;
employeeId:number;
employeeSalary:number;
display():void;

}

var empData:EmployeeDetails = {
 
    employeeName: "Rahul",
    employeeId: 1001 ,
    employeeSalary: 22000,

 display():void{
        console.log(this.employeeName);
        console.log(this.employeeId);
        console.log(this.employeeSalary);
     }

};

console.log(empData.employeeName);
console.log(empData.employeeId);
console.log(empData.employeeSalary);
empData.display();


////////-------->> Interface second Example

interface a{
   x:number;
   y:number;
   sum():number;
}


interface b extends a{
    a:number;
    b:number;
    sub():number;
}


class C implements b {
     x:number;
     y:number;
     a:number;
     b:number;

     constructor(x:number, y:number,a:number,b:number){
        this.x=x;
        this.y=y;
        this.a=a;
        this.b=b;
     }
     
     sum():number{
        return this.x+this.y;
     }

    sub():number{
        return this.a-this.b;
    }



}

var testClass = new C(200,100,200,300);
console.log(testClass.sum());
console.log(testClass.sub());
