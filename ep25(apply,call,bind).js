// ep :-25 call,apply and bind 

let name = {
    firstName:"prem",
    lastName:" patel",
//     printFullName: function(){
//         console.log(this.firstName+this.lastName);
//     }
 }
//   let printFullName = function(){
//         console.log(this.firstName+this.lastName);
//     }

let printFullName = function(Hometown,state){
        console.log(this.firstName+this.lastName + " from" +Hometown + " in" +state);
    }

// name.printFullName();
// printFullName.call(name," surat"," Gujarat"); // call method

let name2 ={
    firstName:"Jeel",
    lastName:" patel",
}
 // function borrowing 

//  name.printFullName.call(name2); // call method
// printFullName.call(name2," junagath"," Gujarat"); // call method
// call method is used to call a function with a given this value and arguments.
// call method takes arguments spratly
// call method is used to borrow a function from one object to another object

// apply method 

// printFullName.apply(name2,[" junagath", " Gujarat "]); // apply method
// printFullName.apply(name,[" surat ", " Gujarat "]);
// apply method is same as call method but it takes array as second argument

// bind method
 let printMyName = printFullName.bind(name, " surat ", " Gujarat ");
 console.log(printMyName); // bind method returns a new function with the this value set to the first argument
     printMyName(); // the function to invock it.
 let printMyName2 = printFullName.bind(name2, " junagath ", " Gujarat ");
    console.log(printMyName2); 
    printMyName2(); // the function to invock it.

    // DIFFERENCES BETWEEN CALL, APPLY, AND BIND METHODS

    /* 
    1. CALL:
        - Executes the function immediately
        - Arguments are passed individually (comma separated)
        - Syntax: func.call(thisArg, arg1, arg2, ...)
    */

    /* 
    2. APPLY:
        - Executes the function immediately
        - Arguments are passed as an array
        - Syntax: func.apply(thisArg, [arg1, arg2, ...])
    */

    /* 
    3. BIND:
        - Returns a new function with 'this' bound
        - Does not execute the function immediately
        - Arguments can be partially applied
        - Syntax: const newFunc = func.bind(thisArg, arg1, arg2, ...)
    */