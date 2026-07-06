import { MyClass } from "./module";
var object = new MyClass(10,20);
console.log(object.add());

//tsc TestModule.ts module.ts --module commonjs
