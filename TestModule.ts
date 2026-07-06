import { MyClass, myfunction } from "./module";
var object = new MyClass(10,20);
console.log(object.add());

myfunction();

//tsc TestModule.ts module.ts --module commonjs