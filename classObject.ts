class Employee1 {

      employeeID:number;
      emolyeeName:string;
      departMentId:number;

      constructor(empId:number,empName:string,deptId:number){
             this.employeeID =empId;
            this.emolyeeName = empName;
            this.departMentId = deptId;
      }


display():void{
    console.log(this.employeeID);
    console.log(this.emolyeeName);
    console.log(this.departMentId);
    
}

}

var emp1 = new Employee1(100,"William",10);
emp1.display(); 