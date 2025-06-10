// Ep-14 Namaste js - Callback Functions in JS ft. Event Listeners

// Example 1: Callbacks with setTimeout
console.log("Start");

setTimeout(function () {
    console.log("Timer");
}, 1000); // Callback function with timer

// Example 2: Callback function
function x(y) {
    console.log("x");
    y();
}

x(function y() {
    console.log("y");
});

// Example 3: Printing strings in order using callbacks
function printStr(str, cb) {
    setTimeout(() => {
        console.log(str);
        cb();
    }, Math.floor(Math.random() * 100) + 1);
}

function printAll() {
    printStr("A", () => {
        printStr("B", () => {
            printStr("C", () => {});
        });
    });
}

printAll(); // A B C in order

// Example 4: Event Listeners
// (Note: This would work with HTML that has a button with id="clickMe")
// Using global variable (not recommended)
let count = 0;
document.addEventListener("DOMContentLoaded", function() {
    // Check if we're in a browser environment
    if (typeof document !== "undefined") {
        const button = document.getElementById("clickMe");
        if (button) {
            button.addEventListener("click", function xyz() {
                console.log("Button clicked", ++count);
            });
        }
    }
});

// Example 5: Using closures for data abstraction (better approach)
function attachEventList() {
    let count = 0;
    
    // Check if we're in a browser environment
    if (typeof document !== "undefined") {
        const button = document.getElementById("clickMe");
        if (button) {
            button.addEventListener("click", function xyz() {
                console.log("Button clicked", ++count);
            });
        }
    }
}

// Example 6: Removing event listeners to prevent memory leaks
function setupEventWithCleanup() {
    let count = 0;
    
    function clickHandler() {
        console.log("Button clicked", ++count);
        
        // Remove event listener after 5 clicks to demonstrate cleanup
        if (count >= 5) {
            console.log("Removing event listener after 5 clicks");
            button.removeEventListener("click", clickHandler);
        }
    }
    
    // Check if we're in a browser environment
    if (typeof document !== "undefined") {
        const button = document.getElementById("clickMe");
        if (button) {
            button.addEventListener("click", clickHandler);
            
            // This demonstrates how to properly remove listeners when no longer needed
            return function cleanup() {
                button.removeEventListener("click", clickHandler);
                console.log("Event listener removed");
            };
        }
    }
}

// Call the setup function
const cleanup = attachEventList();

// To clean up later (e.g., when component unmounts in React):
// cleanup();