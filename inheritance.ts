class Person{
 
name:string;

constructor(name:string){
 this.name = name;
}

}

class Employee extends Person{

    employeeNumber:number;
    constructor(employeeNumber:number, name:string){
        super(name);
        this.employeeNumber = employeeNumber;
    }

    displayData():void{
        console.log(this.employeeNumber);
        console.log(this.name);
    }

}

var emp = new Employee(10,"James");
emp.displayData();