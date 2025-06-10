// Promise APIs in JavaScript

/*
 * Four major Promise APIs:
 * 1. Promise.all()
 * 2. Promise.allSettled()
 * 3. Promise.race()
 * 4. Promise.any()
 */

/*
 * Promise.all([p1, p2, p3, ...])
 * 
 * Purpose: Handles multiple promises in parallel, returning all results together.
 * 
 * Behavior:
 * - Waits for all promises to resolve
 * - Returns an array of all resolved values in the same order
 * - If ANY promise rejects, immediately rejects with that error
 * - "Fail-fast" approach - one failure causes entire operation to fail
 * 
 * Example: Making multiple API calls where all results are required
 */

/*
 * Promise.allSettled([p1, p2, p3, ...])
 * 
 * Purpose: Handles multiple promises, giving results of all regardless of success/failure.
 * 
 * Behavior:
 * - Waits for all promises to settle (either resolve or reject)
 * - Returns array of objects with status ('fulfilled' or 'rejected') and value/reason
 * - Never rejects - always resolves with complete results
 * - "Complete information" approach
 * 
 * Example: Operations where you need results from all attempts regardless of failures
 */

/*
 * Promise.race([p1, p2, p3, ...])
 * 
 * Purpose: Returns result of the first promise to settle (either resolve or reject).
 * 
 * Behavior:
 * - Resolves or rejects as soon as any promise settles
 * - Returns the value or error from the first settled promise
 * - "First to finish wins" approach
 * 
 * Example: Timeout scenarios or when any valid result is acceptable
 */

/*
 * Promise.any([p1, p2, p3, ...])
 * 
 * Purpose: Returns the first successfully resolved promise.
 * 
 * Behavior:
 * - Resolves with the value of first promise that fulfills
 * - Ignores rejected promises unless all reject
 * - If ALL promises reject, returns AggregateError containing all rejection reasons
 * - "First success wins" approach
 * 
 * Example: Trying multiple fallback options where any success is sufficient
 */

// code for the four APIs promises 

// const p1 = new Promise((reslove,reject)=>{
//     setTimeout(()=> reslove("p1 succesfully"),3000);
// });
// const p2 = new Promise((reslove,reject)=>{
//     setTimeout(()=> reslove("p2 succesfully"),1000);
// });
// const p3 = new Promise((reslove,reject)=>{
//     setTimeout(()=> reslove("p3 succesfully"),2000);
// });
// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// });

// const p1 = new Promise((reslove,reject)=>{
//     setTimeout(()=> reslove("p1 succesfully"),3000);
// });
// const p2 = new Promise((reslove,reject)=>{
//     // setTimeout(()=> reject("p2 fail"),1000);
//     setTimeout(()=> reslove("p2 succesfully"),1000);
// }); 
// const p3 = new Promise((reslove,reject)=>{
//    // setTimeout(()=> reject("p3 fail"),2000);
//     setTimeout(()=> reslove("p3 succesfully"),2000);
// });
// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
//    })
// .catch((err)=>{
//     console.log("error:",err);
// });

// safested option to preomiseallsetted all APIs   
// const p1 = new Promise((reslove,reject)=>{
//     setTimeout(()=> reslove("p1 succesfully"),3000);
// });
// const p2 = new Promise((reslove,reject)=>{
//     // setTimeout(()=> reject("p2 fail"),1000);
//     setTimeout(()=> reslove("p2 succesfully"),1000);
// }); 
// const p3 = new Promise((reslove,reject)=>{
//     setTimeout(()=> reject("p3 fail"),2000);
//    // setTimeout(()=> reslove("p3 succesfully"),2000);
// });
// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res);
//    })
// .catch((err)=>{
//     console.log("error:",err);
// });

// minimum setTimeout to choice it for race promise API condtion either resolve or reject
// const p1 = new Promise((reslove,reject)=>{
//     setTimeout(()=> reslove("p1 succesfully"),3000);
// });
// const p2 = new Promise((reslove,reject)=>{
//     // setTimeout(()=> reject("p2 fail"),1000);
//     setTimeout(()=> reslove("p2 succesfully"),5000);
// }); 
// const p3 = new Promise((reslove,reject)=>{
//     setTimeout(()=> reject("p3 fail"),2000);
//    // setTimeout(()=> reslove("p3 succesfully"),2000);
// });
// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res);
//    })
// .catch((err)=>{
//     console.log("error:",err);
// });

const p1 = new Promise((reslove,reject)=>{
    // setTimeout(()=> reslove("p1 succesfully"),3000);
    setTimeout(()=> reject("p1 fail"),3000);
});
const p2 = new Promise((reslove,reject)=>{
     setTimeout(()=> reject("p2 fail"),1000);
    //setTimeout(()=> reslove("p2 succesfully"),5000);
}); 
const p3 = new Promise((reslove,reject)=>{
    setTimeout(()=> reject("p3 fail"),2000);
   // setTimeout(()=> reslove("p3 succesfully"),2000);
});
Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
   })
.catch((err)=>{
    console.log("error:",err);
    console.log(err.errors); // This will log the AggregateError with all rejection reasons
});

// AggregateError: If all promises reject, it will return an AggregateError containing all rejection reasons
// AggregateError meaning An AggregateError in JavaScript is a special type of error that represents multiple errors wrapped into a single error object.
//  It is commonly encountered when using Promise.any(), which returns the first fulfilled promise but throws an AggregateError if all promises are rejected.

