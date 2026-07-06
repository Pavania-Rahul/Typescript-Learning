"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = void 0;
exports.myfunction = myfunction;
var x = "Welcome";
function myfunction() {
    console.log("Typescript writing");
}
class MyClass {
    a;
    b;
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
}
exports.MyClass = MyClass;
