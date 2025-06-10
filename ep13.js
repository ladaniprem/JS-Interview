// ep -13 Namaste js: First Class Functions ft. Anonymous Functions

// Function Statement (Function Declaration)
function a() {
    console.log("Hello from Function Statement");
}
a();

// Function Expression
var b = function() {
    console.log("Hello from Function Expression");
};
b();

// Difference in hoisting
console.log("Demonstrating hoisting differences:");
try {
    functionA(); // Works due to hoisting
    functionB(); // Will throw TypeError
} catch(e) {
    console.log("Error caught:", e.message);
}
function functionA() {
    console.log("Function Statement is hoisted");
}
var functionB = function() {
    console.log("Function Expression is not fully hoisted");
};

// Named Function Expression
var c = function xyz() {
    console.log("Named Function Expression called");
    console.log(xyz); // xyz is accessible within its own scope
};
c();
// Uncomment to see error: xyz(); // ReferenceError

// Parameters vs Arguments
var d = function(param1, param2) {
    console.log("Parameters received:", param1, param2);
};
d("arg1", "arg2");

// First Class Functions
// 1. Passing function as argument
var e = function(fn) {
    console.log("Function passed as argument:");
    console.log(fn);
    fn();
};
e(function() { console.log("I'm a function passed as an argument"); });

// 2. Returning a function
var f = function() {
    return function() {
        console.log("I'm a function returned from another function");
    };
};
var returnedFunction = f();
returnedFunction();

// Alternative way to call
f()();
