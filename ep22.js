//ep :-22 Namaste js  promise chaning ep :-02

 const cart = ["shows","parker","paints"];

 const promise = createOrder(cart);

 createOrder(cart,function (orderId){
    processToPayment(orderId,function(paymentInfo){
        showOrderSummury(paymentInfo,function(){
            updateWalletBalance();
    });
    });
   });
    

// promise.then(function() {
//     proceedToPayment(orderId);
// })


// const PUBLIC_API = "https://api.publicapis.org/entries";

// const User = fetch(PUBLIC_API);

// console.log(User);

createOrder(cart)
.then(function(orderId){
  return  processToPayment(orderId);
})

.then((paymentInfo)=>{
   showOrderSummury(paymentInfo);
})

.then(function(orderId){
    updateWalletBalance(orderId);
})



 
