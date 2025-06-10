// // Episode 25: this keyword in JavaScript

// // 1. "this" in global space
// console.log("1. 'this' in global space:");
// console.log(this); // global object (window in browser, global in Node.js)

// // 2. "this" inside aa function
// console.log("\n2. 'this' inside a function:");

// function normalFunction() {
//     console.log("In normal function:", this);
// }

// // Uncomment to see behavior in strict mode
// // "use strict";
// normalFunction(); // undefined in strict mode, window in non-strict mode
// // window.normalFunction(); // window object (explicit binding to window)

// // 3. "this" inside an object's method
// console.log("\n3. 'this' inside an object's method:");

// const obj = {
//     a: 10,
//     x: function() {
//         console.log("In object method:", this); // refers to obj
//         console.log("this.a:", this.a); // 10
//     }
// };
// obj.x();

// // 4. call, apply & bind methods
// console.log("\n4. call, apply & bind methods:");

// const student = {
//     name: "Prem",
//     printName: function() {
//         console.log("Student name:", this.name);
//     }
// };

// student.printName(); // Prem

// const student2 = {
//     name: "Jeel"
// };

// // Re-using printName method with call
// student.printName.call(student2); // Jeel

// // 5. "this" inside arrow function
// console.log("\n5. 'this' inside arrow function:");

// const arrowObj = {
//     a: 10,
//     x: () => {
//         console.log("In arrow function:", this); // window object (from enclosing lexical context)
//     }
// };
// arrowObj.x();

// const nestedObj = {
//     a: 10,
//     x: function() {
//         console.log("In regular method:", this); // nestedObj
        
//         const y = () => {
//             console.log("In arrow function inside method:", this); // nestedObj (inherited from enclosing function)
//         };
        
//         y();
//     }
// };
// nestedObj.x();

// // 6. "this" inside DOM elements (add this when working with HTML)
// // document.querySelector('button').addEventListener('click', function() {
// //   console.log(this); // refers to the button element
// // });

// // 7. "this" inside a class/constructor
// console.log("\n7. 'this' inside a class/constructor:");

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
    
//     getName() {
//         console.log("Person name:", this.name);
//     }
// }

// const person = new Person("Prem");
// person.getName(); // Prem