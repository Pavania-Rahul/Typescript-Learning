"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
var object = new module_1.MyClass(10, 20);
console.log(object.add());
(0, module_1.myfunction)();
//tsc TestModule.ts module.ts --module commonjs
