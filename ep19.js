/* Episode 19 : map, filter & reduce

--> map, filter & reducer are Higher Order Functions.\

--> Map function
--> It is basically used to transform a array. The map() method creates a new array with the results of calling a function for
every array element.

--> const output = arr.map(function) // this function tells map that what transformation I want on each element of arr a


 // case 1 double
// const arr = [1,2,3,4];

// function double(x){
//     return x * 2 ; 
// }
// Higher order function 
// const doublearr = arr.map(function double(x){
//     return x * 2 ; 
// })
// console.log(doublearr);

 // case 2 tripal

//  const arr = [1,2,3,4];

//  const tripalarr = arr.map(function tripal(y){
//     return y*3;
//  })
//  console.log(tripalarr);


 // case 3 binary 

// const arr = [1,2,3,4];
// //  const binaryarr = arr.map((z)=>{
//     return z.toString(2);
//  });

// const binaryarr = arr.map((z)=>
//         z.toString(2));

//  console.log(binaryarr);


--> Filter function :- 

--> Filter function is basically used to filter the value inside an array. 
The arr.filter() method is used to create a new array from a given array 
consisting of only those elements from the given array which satisfy a
condition set by the argument method.

*/
      
// const arr = [12,13,34,56];

// function isodd(x){
//     return x % 2;
// }

// const filterodd = arr.filter(isodd);
// console.log(filterodd);

// const filterodd = arr.filter(function isodd(x){
//     return x % 2;
// }) ;

// console.log(filterodd);

// const arr = [1,2,3,4,5,6];

// function iseven(x){
//   return  x % 2 === 0;
// }
// const filtereven = arr.filter(x => x % 2 === 0);    
// console.log(filtereven);

// const arr = [1,2,3,4,5,6];

// function greaterthan4(x){
//     return x>4;
// }
// const filtereven = arr.filter(greaterthan4);    
// console.log(filtereven);

 //const arr = [1,2,3,4,5,6];

// function findsum(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(findsum(arr));

// function findMax(arr){
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i]>max) {
//          max = arr[i];
//        }
//     }
//     return max;
// }
// console.log(findMax(arr));

// const output = arr.reduce((accumulator, currentvalue)=>{
//     accumulator = accumulator + currentvalue;
//     return accumulator;
// },0); why is zero because of the array should be the negative value and also provding the postive number 
// console.log(output);
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// const output = arr.reduce (function(max,currentvalue){
//     if (currentvalue>max) {
//         max = currentvalue;
//     }
//     return max;
// },0);//why is zero because of the array should be the negative value and also provding the postive number 
// console.log(output);

const users = [
    {name: "John", age: 25},
    {name: "Jane", age: 20},
    {name: "Jack", age: 20},
    {name: "Jill", age: 35},
];
// const map = users.map((x=> x.name+""+x.age));
// console.log(map);

// const output = users.reduce((accumulator,currentvalue)=>{
//     if (accumulator[currentvalue.age]) {
//         accumulator[currentvalue.age] = ++accumulator[currentvalue.age];
//     }
//     else{
//         accumulator[currentvalue.age] = 1;
//     }
//  return accumulator;
// }
// ,{});

// console.log(output);

// const output = users.filter((x)=> x.age>20); without use the map function to the [ { name: 'John', age: 25 }, { name: 'Jill', age: 35 } ]
// console.log(output);

const output = users.filter((x)=> x.age>20).map((x)=> x.name);
console.log(output); // [ 'John', 'Jill' ]

