
// // Callback Hell

const cart=["shoes","shrit"];

// api.createOrder(cart,function(orderId){
//     api.paymentPage(orderId,function(paymentInfo){
//         api.redirectOrderSummary(paymentInfo,function(){
//             updateWalletBalance();
//         })
//     })
// })

// // Promise to fix above inervsion of control and callbackHell

// const promise=createOrder(cart).then((orderId)=>{
//     return paymentPage(orderId);
// }).then((paymentInfo)=>{
//     return orderSUmmary(paymentInfo);
// }).then(()=>{
//     updateWalletBalance();
// })




// // Real world Promise Use
// const git_api="https://api.github.com/users/0x1zen";

// const data=fetch(git_api).then(function(response){
//     return response.json();
// }).then(function(answer){
//     console.log(answer)
// })

// Proper Promise SYntax


const promise=createOrder(cart);
promise.then((orderId)=>{
    return orderId;
})
.then((orderId)=>{
    return paymentInfo(orderId);
})
.then((paymentSummary)=>{
    console.log(paymentSummary);
})
.catch((err)=>{
    console.log("Carty is not valid");
})
.then(()=>{
    console.log("Even if there is a error  i will still run");
})

function createOrder(){
        const pr=new Promise((resolve,reject)=>{
            if(!validateCart(cart)){
                const err=new Error("Cart is not valid");
                reject(err);
            }
            // Logic for create order
            const orderId="23589647"
            if(orderId){
                resolve(orderId);
            }
    })
    return pr;
}
function validateCart(cart){
    return true;
}
function paymentInfo(orderId){
    return new Promise((resolve,reject)=>{
        resolve("Payment Successfull");
    })
}
