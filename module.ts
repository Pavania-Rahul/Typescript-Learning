var x:string ="Welcome";

function myfunction():void{
    console.log("Typescript writing");
}

export class MyClass{
 a:number;
 b:number;

 constructor(a:number,b:number){
    this.a =a;
    this.b =b;
 }
  

   add():number{
      return this.a+this.b;
  }

}
