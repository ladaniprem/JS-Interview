//namaste js ep :-3

/*
--> It should have been an outright error in many other languages, 
as it is not possible to even access something which is not even created
(defined) yet But in JS, We know that in memory creation phase it 
assigns undefined and puts the content of function to function's memory. 

--> And in execution, it then executes whatever is asked. Here, as
execution goes line by line and not after compiling, 
it could only print undefined and nothing else. 

--> This phenomenon, is not an error. However, if we remove var x = 7; 
then it gives error.

--> Uncaught ReferenceError: x is not defined Hoisting is a concept 
which enables us to extract values of variables and functions even before
initialising/assigning value without getting error and this is happening
due to the 1st phase (memory creation phase) of the Execution Context.

--> So in previous lecture, we learnt that execution context gets created 
in two phase, so even before code execution,memory is created so 
in case of variable,it will be initialized as undefined while in 
case of function the whole function code is placed in the memory. */

// program 

/*var x=10
function getname(){
    console.log("ladani prem")
}
console.log(x)
getname()
console.log(getname) */

/*--> output of program using diifernt change the position 

PS C:\Users\king> node "c:\Prem\coding\code with javascript\js ep3.js"
ladani prem
undefined
[Function: getname]

PS C:\Users\king> node "c:\Prem\coding\code with javascript\js ep3.js"
[Function: getname]
ladani prem
10

PS C:\Users\king> node "c:\Prem\coding\code with javascript\js ep3.js"
undefined
[Function: getname]
ladani prem

PS C:\Users\king> node "c:\Prem\coding\code with javascript\js ep3.js"
ladani prem
[Function: getname]
10

PS C:\Users\king> node "c:\Prem\coding\code with javascript\js ep3.js"
10
ladani prem*/

//--> var x =20 only when they are not defined it that time show the error at Object.<anonymous> (c:\Prem\coding\code with javascript\js ep3.js:10:13)
/*at Module._compile (node:internal/modules/cjs/loader:1369:14)
at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)
at Module.load (node:internal/modules/cjs/loader:1206:32)
at Module._load (node:internal/modules/cjs/loader:1022:12)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
at node:internal/main/run_main_module:28:49*/

/*--> getName(); // Namaste JavaScript 
console.log(x); // Uncaught Reference: x is not defined. 
console.log(getName); // f getName(){ console.log("Namaste JavaScript); } 
function getName() { 
console.log("Namaste JavaScript"); 
} */
