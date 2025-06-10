// ep-12 namaste js - Closures

/*
 * CLOSURE THEORY:
 * A closure is a function that has access to variables from its outer (enclosing) scope,
 * even after the outer function has finished executing. In other words, a closure is a
 * combination of a function and the lexical environment within which that function was declared.
 * 
 * Key points about closures:
 * 1. They have access to variables in their own scope, outer function's scope, and global scope
 * 2. They retain references to their outer variables, not copies of values
 * 3. They are a powerful tool for data encapsulation and creating private variables
 */

// Example 1: Basic Closure
function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
}
console.log("Example 1 - Basic Closure:");
outer()(); // 10
// The inner function forms a closure over variable 'a' from its outer scope

// Example 2: Closure with different declaration order
function outer2() {
    function inner() {
        console.log(a);
    }
    var a = 10;
    return inner;
}
console.log("\nExample 2 - Closure with different declaration order:");
outer2()(); // 10
// Closure still works regardless of where variables are declared in the outer function

// Example 3: Closure with let instead of var
function outer3() {
    let a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
}
console.log("\nExample 3 - Closure with let:");
outer3()(); // 10
// Closures work with all variable declaration types (var, let, const)

// Example 4: Closure with function arguments
function outer4(str) {
    let a = 10;
    function inner() {
        console.log(a, str);
    }
    return inner;
}
console.log("\nExample 4 - Closure with function arguments:");
outer4("Hello There")(); // 10 "Hello There"
// Closures also capture function parameters from their outer scope

// Example 5: Nested closures
function outest() {
    var c = 20;
    function outer(str) {
        let a = 10;
        function inner() {
            console.log(a, c, str);
        }
        return inner;
    }
    return outer;
}
console.log("\nExample 5 - Nested closures:");
outest()("Hello There")(); // 10 20 "Hello There"
// Closures can be nested and have access to variables from multiple outer scopes

// Example 6: Closure with conflicting variable names
function outest2() {
    var c = 20;
    function outer(str) {
        let a = 10;
        function inner() {
            console.log(a, c, str);
        }
        return inner;
    }
    return outer;
}
let a = 100;
console.log("\nExample 6 - Closure with conflicting variable names:");
outest2()("Hello There")(); // 10 20 "Hello There"
// Closures use the closest variable in scope chain, here inner function uses a=10, not a=100

/*
 * APPLICATIONS OF CLOSURES:
 * 1. Data privacy/encapsulation
 * 2. Function factories
 * 3. Module pattern
 * 4. Maintaining state in async operations
 * 5. Currying and function composition
 */

// Example 7: Data hiding and encapsulation
function counter() {
    var count = 0; // Private variable
    return function increment() {
        count++;
        console.log(count);
    };
}
console.log("\nExample 7 - Data hiding with closure:");
var counter1 = counter();
counter1(); // 1
counter1(); // 2
var counter2 = counter();
counter2(); // 1 (new instance)
// Each closure has its own private 'count' variable

// Example 8: Constructor function with closures
function Counter() {
    var count = 0; // Private variable
    this.incrementCounter = function() {
        count++;
        console.log(count);
    };
    this.decrementCounter = function() {
        count--;
        console.log(count);
    };
}
console.log("\nExample 8 - Constructor with closures:");
var counter3 = new Counter();
counter3.incrementCounter(); // 1
counter3.incrementCounter(); // 2
counter3.decrementCounter(); // 1
// Both methods share access to the same private 'count' variable

/*
 * DISADVANTAGES OF CLOSURES:
 * 1. Memory consumption - closed over variables aren't garbage collected until all references are gone
 * 2. Can lead to memory leaks if not managed properly
 * 3. Can make code harder to understand if overused
 */
