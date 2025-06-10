//ep -11 Namaste js 

// Example 1: Basic setTimeout with closure
function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 3000);
    console.log("Namaste Javascript");
}
x();
// Output:
// Namaste Javascript
// 1 (after 3 seconds)

// Example 2: Print 1 to 5 with delays (not working as expected with var)
function printWithVar() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste Javascript");
}
// printWithVar();
// Output:
// Namaste Javascript
// 6 (after 1 second)
// 6 (after 2 seconds)
// 6 (after 3 seconds)
// 6 (after 4 seconds)
// 6 (after 5 seconds)

// Example 3: Fix using let (block scope)
function printWithLet() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste Javascript");
}
// printWithLet();
// Output:
// Namaste Javascript
// 1 (after 1 second)
// 2 (after 2 seconds)
// 3 (after 3 seconds)
// 4 (after 4 seconds)
// 5 (after 5 seconds)

// Example 4: Fix using var with an additional closure
function printWithVarFixed() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
    console.log("Namaste Javascript");
}
printWithVarFixed();
// Output:
// Namaste Javascript
// 1 (after 1 second)
// 2 (after 2 seconds)
// 3 (after 3 seconds)
// 4 (after 4 seconds)
// 5 (after 5 seconds)