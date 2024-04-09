function a(){
    for(var i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}
a(); // prints 6, 5 times as  var declarations are function scoped.SO the value of i is same in entire function a().and no new closure 
// is formed for every new value of i

function b(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}
b();
// prints values from 1 to 5 since let declarations are block scoped and it forms new closure for every value of i.

function c(){
    for(var i=1;i<=5;i++){
        function closure(i){
            setTimeout(function(){
                console.log(i);
            },i*1000);
        }
        closure(i);
    }
}
c(); // prints values from 1 to 5