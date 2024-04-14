
// // // Callback Hell

const cart=["shoes","shrit"];

// // api.createOrder(cart,function(orderId){
// //     api.paymentPage(orderId,function(paymentInfo){
// //         api.redirectOrderSummary(paymentInfo,function(){
// //             updateWalletBalance();
// //         })
// //     })
// // })

// // // Promise to fix above inervsion of control and callbackHell

// // const promise=createOrder(cart).then((orderId)=>{
// //     return paymentPage(orderId);
// // }).then((paymentInfo)=>{
// //     return orderSUmmary(paymentInfo);
// // }).then(()=>{
// //     updateWalletBalance();
// // })




// // // Real world Promise Use
// // const git_api="https://api.github.com/users/0x1zen";

// // const data=fetch(git_api).then(function(response){
// //     return response.json();
// // }).then(function(answer){
// //     console.log(answer)
// // })

// // Proper Promise SYntax


// const promise=createOrder(cart);
// promise.then((orderId)=>{
//     return orderId;
// })
// .then((orderId)=>{
//     return paymentInfo(orderId);
// })
// .then((paymentSummary)=>{
//     console.log(paymentSummary);
// })
// .catch((err)=>{
//     console.log("Carty is not valid");
// })
// .then(()=>{
//     console.log("Even if there is a error  i will still run");
// })

// function createOrder(){
//         const pr=new Promise((resolve,reject)=>{
//             if(!validateCart(cart)){
//                 const err=new Error("Cart is not valid");
//                 reject(err);
//             }
//             // Logic for create order
//             const orderId="23589647"
//             if(orderId){
//                 resolve(orderId);
//             }
//     })
//     return pr;
// }
// function validateCart(cart){
//     return true;
// }
// function paymentInfo(orderId){
//     return new Promise((resolve,reject)=>{
//         resolve("Payment Successfull");
//     })
// }

// Promise assignment

// createOrder,proceedToPayment,showOrderSummary,updateWallet

const promise=createOrder(cart);

promise.then((orderId)=>{
    return proceedToPayment(orderId);
}).then((paymentInfo)=>{
    return showOrderSummary(paymentInfo);
}).then(()=>{
    console.log(updateWallet());
})
.catch((err)=>{
    console.log(err);
})

function createOrder(cart){
    return new Promise((resolve,reject)=>{
        var cart=true;
        if(!cart){
            const err=new Error("Order cannot be created");
            reject(err);
        }
        resolve("Order Created");
    })
}
function proceedToPayment(orderId){
       return new Promise((resolve,reject)=>{
        var orderId="348957";
        if(!orderId){
            const err=new Error("Order Id Not FOund");
            reject(err);
        }
        resolve("Proceeded To Payment");
    })

}
function showOrderSummary(paymentInfo){
    return new Promise((resolve,reject)=>{
        var paymentInfo="aujkhf";
        if(!paymentInfo){
            const err=new Error("Payment Info Not found");
            reject(err);
        }
        resolve("Order Summary");
    })

}
function updateWallet(){
   return new Promise((resolve,reject)=>{
        resolve("Wallet Updated");
    })
    
}

