// ep:-23 Namaste js async await  
// const p = new Promise((reslove,reject)=>{
//     reslove("promise reslove values");
// })

// async function getdata(){
//     return "message";
// }

// const datapromise = getdata();
// //console.log(datapromise);
// datapromise.then((res)=> console.log(res));

// using await with async function

// const p = new Promise((reslove,reject)=>{
//     reslove("promise reslove values");
// });

//await function(){};
//Note :- their not inside the async function their will be an error 


// Note :- await can only be the use inside an async function 
// async function handlepromise() {
//     const val = await p;
//     console.log(val);
//     console.log(handlepromise);
// }
// handlepromise();

// function getdata(){
//     p.then((res)=> console.log(res));
// }

// getdata();

// Diving Depp into async/await

// 

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 resolved value");
//     }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 resolved value");
//     }, 10000);
// });

// async function handlepromise() {
//     //Note:- Js Engine was waiting for promise to Reslove 
//     const val = await p;
//     console.log(val);
//     console.log("getdata function inside the handlepromise");
//     console.log(handlepromise);
// }
// handlepromise();

// Note :- JS Engine will not wait for the promise to resolve before execution code
// function getdata(){
//     p.then((res)=> console.log(res));
//     console.log("getdata function called");
// }
// getdata(); 

// async function handlepromise(){
//     console.log("hello prem !");

// const val = await p;

// console.log("value 1 js called ");
// console.log(val);


// const val2 = await p;

// console.log("value 2 js called it")
// console.log(val);
// }

// handlepromise();

/**
 * Handles multiple asynchronous promises sequentially.
 * 
 * This function demonstrates the use of async/await pattern to wait for promises to resolve
 * before continuing execution. When JavaScript encounters the 'await' keyword, it suspends 
 * the function execution until the promise settles, without blocking the main thread.
 * 
 * The function waits for p1 to resolve first, logs its value, then waits for p2 to resolve,
 * and logs that value. This sequential execution pattern is one of the key benefits of 
 * using async/await over Promise chaining.
 * 
 * @async
 * @function handlepromise
 * @returns {Promise<void>} A promise that resolves when all internal promises have been handled
 * @example
 * // Call the function
 * handlepromise()
 *   .then(() => console.log("All promises resolved"))
 *   .catch(err => console.error("Error:", err));
 */
// async function handlepromise(){
//     console.log("hello prem !");

//     const val = await p1;
//     console.log("Value 1 received after 5 seconds");
//     console.log(val);

//     const val2 = await p2;
//     console.log("Value 2 received after 10 seconds (or 5 seconds after value 1)");
//     console.log(val2); // Fixed: should log val2 not val
// }

// handlepromise();

// What happens behind the scenes in the call stack:

/*
1. Call Stack Execution Flow:
   - Initially, the call stack is empty
   - `handlepromise()` is pushed onto the stack
   - "hello prem!" is logged to console
   - JS engine encounters `await p1`
   - The function execution is suspended and moved to the microtask queue
   - Call stack is now free to execute other code

2. After 5 seconds:
   - p1 resolves
   - The suspended function is put back on the call stack
   - "Value 1 received after 5 seconds" is logged
   - p1's resolved value is logged
   - JS engine encounters `await p2`
   - Function is suspended again and moved to microtask queue
   - Call stack is free again

3. After 5 more seconds (10 seconds total):
   - p2 resolves
   - The suspended function is put back on the call stack
   - "Value 2 received after 10 seconds" is logged
   - p2's resolved value is logged
   - Function completes and is popped off the stack

Key Points:
- Async/await doesn't block the main thread
- Each await pauses the function execution without blocking other code
- The function resumes from where it left off when the promise resolves
- This creates a much more readable synchronous-looking code for asynchronous operations
*/

// Real world example of async/await 

// const API_URL = "https://jsonplaceholder.typicode.com/posts/1";
// Note: The following code will throw an error if run directly in a non-async context
// because `await` can only be used inside an async function.

// await can only be used inside an async function

// const data = await fetch(API_URL);

// const jsonData = await data.json();
// console.log(jsonData);

//fetch(API_URL).then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.log(err));

// Error Handling with try/catch - preferred way with async/await
// async function fetchData() {
//     try {
//         const API_URL = "https://jsonplaceholder.typicode.com/posts/1";
//         const response = await fetch(API_URL);
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         console.log("Data fetched successfully:", data);
//         return data;
//     } catch (error) {
//         console.log("Error fetching data:", error);
//         // You might want to handle different types of errors differently
//         if (error.name === 'TypeError') {
//             console.log("Network error or CORS issue");
//         }
//         throw error; // Re-throwing allows calling code to handle the error too
//     }
// }

// fetchData().then(data => {
//     // Do something with the data
// }).catch(err => {
//     // Additional error handling if needed
// });

// Interview Questions and Answers about async/await:

/*
1. What is async/await?
   - Async/await is a modern JavaScript syntax that makes working with promises more comfortable
   - 'async' keyword is used to declare an asynchronous function that implicitly returns a promise
   - 'await' keyword can only be used inside async functions and makes JavaScript wait until the promise settles
   - It doesn't block the main thread while waiting - the function is paused and other code can run

2. How does async/await differ from promises?
   - Async/await is syntactic sugar over promises - they're still promises underneath
   - Provides a more synchronous-looking code structure for asynchronous operations
   - Reduces the need for callback functions and .then() chains
   - Makes error handling more intuitive with try/catch blocks

3. Can you use try/catch with async/await?
   - Yes, that's one of its biggest advantages
   - try/catch blocks work for both synchronous and asynchronous errors in async functions

4. What happens if you forget the 'await' keyword?
   - The function won't wait for the promise to resolve
   - You'll get the promise object itself rather than its resolved value

5. What does an async function return?
   - Always returns a promise, even if you return a non-promise value
   - The promise resolves with the value you return from the function

6. Can you use await at the top level (outside an async function)?
   - In modern JavaScript (ES2022+), top-level await is supported in ES modules
   - In older JavaScript, await can only be used inside async functions

7. How do you handle multiple promises concurrently with async/await?
   - Use Promise.all(), Promise.race(), Promise.any(), or Promise.allSettled()
   - Example: const [result1, result2] = await Promise.all([promise1, promise2]);
*/