
// callback Hell

const cart=["shoes","shrit"];

api.createOrder(cart,function(){
    api.paymentPage(cart,function(){
        api.redirectOrderSummary(function(){

        })
    })
})