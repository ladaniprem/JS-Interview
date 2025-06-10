// ep -15 Namaste JavaScript - Event Loop, Callback Queue & Microtask Queue

// Example 1: Basic setTimeout
console.log("Example 1: Basic setTimeout");
console.log("Start");
setTimeout(function cb() {
    console.log("Timer callback after 5 seconds");
}, 5000);
console.log("End");

// Example 2: Event Listener
console.log("\nExample 2: Event Listener");
console.log("Start");
// Uncomment this in browser environment
// document.getElementById("btn").addEventListener("click", function cb() {
//     console.log("Button clicked callback");
// });
console.log("End");

// Example 3: Microtask Queue vs Callback Queue
console.log("\nExample 3: Microtask Queue vs Callback Queue");
console.log("Start");
setTimeout(function cbTimeout() {
    console.log("Callback Queue: setTimeout callback");
}, 0);

// Promise goes to Microtask Queue
Promise.resolve()
    .then(function cbPromise() {
        console.log("Microtask Queue: Promise callback");
    });

console.log("End");

// Example 4: Multiple callbacks and queue priority
console.log("\nExample 4: Multiple callbacks and queue priority");
console.log("Start");

setTimeout(function() {
    console.log("Callback Queue 1: setTimeout 0ms");
}, 0);

setTimeout(function() {
    console.log("Callback Queue 2: setTimeout 0ms");
}, 0);

Promise.resolve()
    .then(function() {
        console.log("Microtask Queue 1: First Promise");
        
        // This creates another microtask
        Promise.resolve().then(function() {
            console.log("Microtask Queue 2: Nested Promise");
        });
    });

Promise.resolve()
    .then(function() {
        console.log("Microtask Queue 3: Second Promise");
    });

console.log("End");

/*
Expected output:
Example 1: Basic setTimeout
Start
End
(after 5 seconds) Timer callback after 5 seconds

Example 2: Event Listener
Start
End
(only when button is clicked) Button clicked callback

Example 3: Microtask Queue vs Callback Queue
Start
End
Microtask Queue: Promise callback
Callback Queue: setTimeout callback

Example 4: Multiple callbacks and queue priority
Start
End
Microtask Queue 1: First Promise
Microtask Queue 3: Second Promise
Microtask Queue 2: Nested Promise
Callback Queue 1: setTimeout 0ms
Callback Queue 2: setTimeout 0ms
*/
