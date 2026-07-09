**📘 WHAT IS TYPESCRIPT?**

TypeScript is an open-source programming language developed by Microsoft.

It is a superset of JavaScript, which means:

Since web browsers understand only JavaScript, TypeScript code must first be
compiled (or transpiled) into JavaScript before it can run in a browser or in
Node.js.

**📌 FLOW**

                    TypeScript (.ts)
                           │
                           ▼
              TypeScript Compiler (tsc)
                           │
                           ▼
                   JavaScript (.js)
                           │
                           ▼
                   Browser / Node.js
                   

**🎯 WHY WAS TYPESCRIPT CREATED?**

JavaScript is a dynamically typed language.

This means a variable can store different data types during runtime.

**💻 JavaScript Example**

let age = 25;

age = "Twenty Five";

age = true;

console.log(age);
Output:
true

**⚠ Problem**

There is no compile-time error.

The variable age changes from:

• Number → String → Boolean

This flexibility can lead to:

• Runtime bugs
• Difficult debugging
• Less maintainable code
• Unexpected behavior in large applications

**✅ TYPESCRIPT SOLUTION: STATIC TYPING**

TypeScript allows you to specify the type of a variable.
💻 TypeScript Example

let age: number = 25;
age = "Twenty Five";

**Compile-Time Error:**
Type 'string' is not assignable to type 'number'.

**TYPESCRIPT COURSE – LESSON 2 : VARIABLES**      
TypeScript provides three ways to declare variables.

        1. var
        2. let
        3. const


**🔹 1. var**

💻 Example
var name = "Rahul";

console.log(name);

You can change the value.


var name = "Rahul";

name = "Amit";
console.log(name);


**⚠ Problem with var**

It can be redeclared.

var name = "Rahul";

var name = "Amit";

console.log(name);


**It is function scoped.**

function demo() {

    if (true) {
        var age = 25;
    }

    console.log(age);

}

demo();


Although age is declared inside the if block, it is still accessible outside it
because var is function scoped.

**🔹 2. let**

💻 Example
let city = "Ahmedabad";

console.log(city);


You can change the value.

let city = "Ahmedabad";

city = "Surat";

console.log(city);


**But you cannot redeclare it.**

let city = "Ahmedabad";

let city = "Surat";

**Compiler Error:**
Cannot redeclare block-scoped variable 'city'.


let is block scoped.

if (true) {

   let age = 25;

}

console.log(age);

**Compiler Error**
Cannot find name 'age'.

**🔹 3. const**

💻 Example
With const, the same variable cannot point to a new object/array

const company = "OpenAI";

console.log(company);


**You cannot change its value.**

const company = "OpenAI";

company = "Microsoft";


**Compiler Error ::**

Cannot assign to 'company' because it is a constant.


**Lesson 3 - Data Types**

A data type tells TypeScript what kind of value a variable can store.
1)number
2)string
3)boolean
4)bigint
5)void
6)any 
7)undefined
8)null

**1. number**
The number data type is used to store numeric values such as integers and decimal numbers.

let age: number = 25;

let price: number = 199.99;

console.log(age);
console.log(price);
------------------
**2. string**

The string data type is used to store text.

let name: string = "Rahul";

let city: string = 'Ahmedabad';

console.log(name);
console.log(city);

-----------------------
**3. boolean**

The boolean data type stores only two values:

true
false

let isLoggedIn: boolean = true;

let isStudent: boolean = false;

console.log(isLoggedIn);
console.log(isStudent);

-----------------------------------------
**4. bigint**

The bigint data type is used to store very large integer values that are beyond the range of the number type.

let population: bigint = 9876543210123456789n;
console.log(population);
----------------------------------------------
**5. void**

The void data type is mainly used for functions that do not return any value.

function displayMessage(): void {

    console.log("Welcome to TypeScript");

}

displayMessage();

---------------------------------------------
**6. any**

The any data type allows a variable to store any type of value.

You can assign a number, string, boolean, object, or array to the same variable.

let value: any = 100;

console.log(value);

value = "Hello";

console.log(value);

value = true;

console.log(value);
-------------------------------------------------------------
**7. undefined**

The undefined data type represents a variable that has been declared but has not been assigned a value.

let value: undefined = undefined;

console.log(value);
--------------------------------------------------------------
**8. null**

The null data type represents an intentional empty value.

let data: null = null;

console.log(data);

