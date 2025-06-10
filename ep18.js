/* Episode 18 : Higher-Order Functions ft. Functional Programming

--> Q: What is Higher Order Function?

--> Ans: A Higher-order functions are regular functions that take other functions as arguments or return functions as their
 results. 
  
 */

//  function x(){
//     console.log("hi");
//  };
//  function y(x){
//     x();
//  };
//  y(x);  PS C:\Prem\coding\code with javascript\Namaste Javascript> node "c:\Prem\coding\code with javascript\Namaste Javascript\ep18.js: "hi"

// y is a higher order function 
// x is a callback function 

// Let's try to understand how we should approach solution in interview. 
// for example I have an array of radius and I have to calculate
// area using these radius and store in an array

// const r = [2,3,4,5];
// const calculatearea = function(r){
//     const output = [];
// for(i=0;i<r.length;i++){
//     output.push(Math.PI*r[i]*r[i]);
// }
// return output;
// }
// console.log(calculatearea(r));

// const r = [2,3,4,5];
// const calculatecirfrence = function(r){

//     const output = [];
// for(i=0;i<r.length;i++){
//     output.push(2*Math.PI*r[i]);
// }
// return output;
// }
// console.log(calculatecirfrence(r));

// const r = [1, 2, 3, 4];

// const area = function(radius) {
//     return Math.PI * radius * radius;
// }

// const circumference = function(radius) {
//     return 2 * Math.PI * radius;
// }

// const calculate = function(radiusArr, operation) {
//     const output = [];
//     for(let i = 0; i < radiusArr.length; i++) {
//         output.push(operation(radiusArr[i]));
//     }
//     return output;
// }
// console.log(calculate(r, area));
// console.log(calculate(r, circumference));
// Over here calculate is HOF 
// Over here we have extracted logic into separate functions. This is the beauty of 

/*functional programming. 
Polyfill of map 
// Over here calculate is nothing but polyfill of map function 
// console.log(radiusArr.map(area)) == console.log(calculate(radiusArr, area)); 
*************************************************** 
Lets convert above calculate function as map function and try to use. So,
*/

// Array.prototype.calculate = function(operation){
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//         output.push(operation(this[i]));  
//         }
//         return output;
// }
// console.log(r.calculate(area))

