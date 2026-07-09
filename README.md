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


**Lesson 4: Type Inference vs Type Annotation**
---->>
**What is Type Annotation?**
When you tell TypeScript the data type.

let name: string = "Rahul";
let age: number = 25;
let isActive: boolean = true;

---->
**What is Type Inference?**
TypeScript automatically detects the type.

let name = "Rahul";
let age = 25;
let isActive = true;


let age = 25;
age = "Thirty";

compilation error :
Type 'string' is not assignable to type 'number'

**📘 TypeScript Course – Lesson 5 Operators in TypeScript**

**What is an Operator?**

An Operator is a symbol that performs an operation on one or more operands (values or variables) 
and returns a result.

Types of Operators in TypeScript

**TypeScript provides the following operators:**

Arithmetic Operators
Assignment Operators
Comparison (Relational) Operators
Logical Operators
Increment & Decrement Operators
Ternary Operator
Type Operators

------------------------------>
**1. Arithmetic Operators**

These operators perform mathematical calculations.

Operator	Description	Example
+	Addition	10 + 5
-	Subtraction	10 - 5
*	Multiplication	10 * 5
/	Division	10 / 5
%	Modulus (Remainder)	10 % 3
**	Exponent (Power)	2 ** 3

let a = 20;
let b = 5;

console.log(a + b); // 25
console.log(a - b); // 15
console.log(a * b); // 100
console.log(a / b); // 4
console.log(a % b); // 0
console.log(2 ** 3); // 8

------------------------------------>
**2. Assignment Operators**

These operators assign values to variables.

Operator	Meaning
=	Assign
+=	Add and assign
-=	Subtract and assign
*=	Multiply and assign
/=	Divide and assign
%=	Modulus and assign

let x = 10;

x += 5;

console.log(x);
15

-------------------------------------------------->>
**3. Comparison (Relational) Operators**

These operators compare two values and return true or false.

Operator	Description
==	Equal value
===	Strict equality (value and type)
!=	Not equal
!==	Strict not equal
>	Greater than
<	Less than
>=	Greater than or equal
<=	Less than or equal

let a = 10;
let b = 20;

console.log(a < b);
console.log(a > b);
console.log(a == b);

Difference Between == and ===

console.log(10 == "10");

Output:
true

== compares only the value after type conversion.

console.log(10 === "10");

output:
false

=== compares both the value and the data type.

-----------------------------------------------------
**4. Logical Operators**

Logical operators combine multiple conditions.

&&	Logical AND
||  Logical OR	
!	Logical NOT

let age = 25;
let citizen = true;

------------------------------------------------------
Logical AND
console.log(age >= 18 && citizen);
Output:
true

------------------------
Logical OR

let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {
    console.log("Access Granted");
}

output:
Access Granted
---------------------------------
Logical Not(!)

Meaning

It reverses a boolean value.

true becomes false
false becomes true


let isLoggedIn = true;

console.log(!isLoggedIn);

Output:
false
-----------------------
diffrence between Logical NOT(!) with Not Equal(!=) and Strict Not Equal(!==)


console.log(!true);       // false
console.log(5 != 10);     // true
console.log(5 !== "5");   // true

------------------------------------------
**5. Increment & Decrement Operators** 

Increment (++)
Increases a value by 1.

let count = 5;

count++;

console.log(count);

Output:
6
----------------------
Decrement (--)
Decreases a value by 1.

let count = 5;

count--;

console.log(count);

output:
4
-------------------------------------------
**6. Ternary Operator**

The ternary operator is a short form of an if...else statement.

Syntax:
condition ? valueIfTrue : valueIfFalse;

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

Output:
Adult
-----------------------------------------------
**7. Type Operators**

typeof

Returns the type of a value.

let age = 25;

console.log(typeof age);

Output:
number

**TypeScript Course – Lesson 6 : Functions**

What is a Function?

A function is a block of code that performs a specific task.

Function Syntax:---->>

function functionName(parameters): returnType {

    // code

}

function greet() {

    console.log("Welcome");

}

Calling the function

greet();

------------->>
Function with Parameters

A parameter is an input to a function.

function greet(name: string) {

    console.log("Welcome " + name);

}

greet("Rahul");

------------->>
function add(a: number, b: number) {

    console.log(a + b);

}

add(10, 20);

----------------------->>
Function Returning a Value

Instead of printing the result, we return it.

function add(a: number, b: number): number {

    return a + b;

}

const result = add(10, 20);

console.log(result);


------------------->>
String Return type example

function getCompany(): string {

    return "OpenAI";

}

---------------->>
boolean Return type

function isAdult(age: number): boolean {

    return age >= 18;

}

**TypeScript Course - Lesson 7  Arrow Functions (=>)**

Syntax:

const functionName = () => {

};
--------->>
const display = () => {
    console.log("Hello");
};

display();

--------->>
Arrow Function with One Parameter

const greet = (name: string) => {
    console.log(name);
};

greet("Rahul");

------------------>>

Arrow Function Returning a Value

normal Function 

function add(a: number, b: number): number {
    return a + b;
}

const add = (a: number, b: number): number => {
    return a + b;
};

console.log(add(10, 20));

**Lesson 7 - Arrays**
What is an Array?

An array is a collection of multiple values of the same type.

const users = ["Rahul", "Amit", "John"];

Array Syntax:
Method 1:
const numbers: number[] = [10, 20, 30];

Method 2: 
const numbers: Array<number> = [10, 20, 30];

Array Methods:---->>>

**1. push()**
------------------------------
Adds an element at the end of the array.
-------------------------------

const employees = ["Alex", "Kevin"];

employees.push("James"); ----- >> If print return as 3

console.log(employees);

["Alex", "Kevin", "James"]

-----------------------------------
**2. pop()**

Removes the last element.

const employees = ["Alex", "Kevin", "James"];

employees.pop();     //---->> return as Remove element : James

console.log(employees);

["Alex", "Kevin"]

---------------------------------------------

**3. unshift()**

Adds an element at the beginning.

const employees = ["Kevin", "James"];

employees.unshift("Alex");  --->> return length as 3 

console.log(employees);

["Alex", "Kevin", "James"]

---------------------------------------------------
**4. shift()**

Removes the first element.

const employees = ["Alex", "Kevin", "James"];

employees.shift();

console.log(employees);

["Kevin", "James"]

-------------------------------------------------
**5. length**

Returns the number of elements.

const employees = [
    "Alex",
    "Kevin",
    "James",
    "Ketan"
];

console.log(employees.length);
output :
4

**TypeScript Course - Lesson 8 Loops (for Loop)**

Welcome
Welcome
Welcome
Welcome
Welcome

console.log("Welcome");
console.log("Welcome");
console.log("Welcome");
console.log("Welcome");
console.log("Welcome");

Syntax 

for (initialization; condition; increment/decrement) {

    // Code

}


for (let i = 1; i <= 5; i++) {
    console.log(i);
}

output:

1
2
3
4
5

-------------------
**Print Even Numbers**

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

output:
2
4
6
8
10
----------------------------
**Print Reverse:**

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

output:

5
4
3
2
1

------------------------------
**Loop Through an Array**

const fruits = [
    "Apple",
    "Banana",
    "Orange"
];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

Output:

Apple
Banana
Orange

--------------------------------------
**for ----of **

const cities = ["Ahmedabad", "Surat", "Rajkot"];

for (const city of cities) {
    console.log(city);
}

output:
Ahmedabad
Surat
Rajkot
-----------------------------------------------------

**TypeScript Course - Lesson 10 Objects**
What is an Object?

An object is a collection of related data stored as key-value pairs. 
It is used to represent a real-world entity by grouping its properties 
and values into a single variable.

In TypeScript, an object can also have a defined type, 
allowing the compiler to check that each property has the correct data type.

Example:

let name = "Rahul";
let age = 25;
let city = "Ahmedabad";

We can group all the related information into a single object:

let employee = {
    name: "Rahul",
    age: 25,
    city: "Ahmedabad"
};

console.log(employee);

Output:

{
  name: "Rahul",
  age: 25,
  city: "Ahmedabad"
}

Accessing Properties We use dot notation.

const employee = {
    name: "Rahul",
    age: 25,
    salary: 50000
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.salary);

output:
Rahul
25
50000

**Updating a Property**

const employee = {
    name: "Rahul",
    age: 25
};

employee.age = 26;

console.log(employee.age);


**Nested Object**

Objects can contain other objects.

const employee = {
    name: "Rahul",

    address: {
        city: "Ahmedabad",
        state: "Gujarat"
    }
};

console.log(employee.address.city);

output:
Ahmedabad

Array of Objects

const employees = [
    {
        name: "Rahul",
        age: 25
    },
    {
        name: "Amit",
        age: 30
    }
];

for (const employee of employees) {
    console.log(employee.name);
}

output:
Rahul
Amit
