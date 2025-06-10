// ep -17 Namaste js 

// Example 1: setTimeout trust issues
console.log("Start");
setTimeout(function cb() {
    console.log("Callback");
}, 5000);
console.log("End");

// Simulating a million lines of code with a long-running operation
function simulateLongOperation() {
    console.log("Starting long operation...");
    const startTime = new Date().getTime();
    while (new Date().getTime() - startTime < 8000) {
        // Blocking the main thread for 8 seconds
    }
    console.log("Long operation finished");
}
simulateLongOperation();

// Example 2: setTimeout with 0ms delay
console.log("Example 2 - Start");
setTimeout(function cb2() {
    console.log("Callback with 0ms delay");
}, 0);
console.log("Example 2 - End");