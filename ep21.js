// Nameste js ep :-21 promise chaining ep :-01

const cart = ["shoes","cargo","T-shirt"];

const promise = createOrder(cart); 
//console.log(promise); // promise is pending 
// promise.then(function(orderId){
promise.then(function(orderId){
    // processToPayment(orderId);
   return console.log("order id is:",orderId);
})
.catch(function(err){
    console.log("Error:",err.message);
}) 

.then(function(orderId){
  return processToPayment(orderId);
})

.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log("Error:",err.message);
}) 
promise.then (function(orderId){{
    return showsummury(orderId);
}})
.then(function(summary){
    console.log(summary);
})
.catch(function(err){
    console.log("error",err.message);
})

promise.then (function(orderId){
    return updateWallet(orderId);
})
.then(function(walletUpdate){
    console.log(walletUpdate);
})

promise.then(function (orderId){
    console.log("Order ID received:", orderId);
})
.catch(function(_){
    console.log("No matter what happens, I will definatly be called");
}) 

function createOrder(cart){
  
    const pr = new Promise(function(resolve, reject){
    //createorder
    //validcart
    //orderId
    if(!validCart(cart)){
        const err = new Error("cart is not valid");
        reject(err);
    }
      
    const orderId = "12345";
    if (orderId) {
        setTimeout(function(){
            resolve(orderId);
        },5000);
    }
    // Removed duplicate resolve to avoid "Promise resolved multiple times" issue

    });
   return pr;
}
function validCart(cart){
 console.log("Validating cart:", cart);
 return true;
 //return false; // Simulating an invalid cart for demonstration
}

// function processToPayment(orderId){
//   console.log("Payment processing for order:", orderId);
//   Add payment processing logic here
// }
function processToPayment(orderId){
    return new Promise(function(resolve, _reject){
        console.log("Processing payment for order:", orderId);
        resolve("payment is successfully");
    })
} 

// HomeWork for that createorder,processedToPayment,showsummury,updateWallet

function showsummury(orderId){
    console.log("showing the summury of the order:",orderId);
}
function updateWallet(orderId){
// Removed duplicate function declarations and affkept the Promise versions
function showsummury(orderId){
    return new Promise(function(resolve, _reject){
        console.log("Showing summary for order:", orderId);
        resolve("Summary shown successfully");
    });
}
function updateWallet(orderId){
    return new Promise(function(resolve, _reject){
        console.log("Updating wallet for order:", orderId);
        resolve("Wallet updated successfully");
    });
}
}