function a(){
    let b=10;
    function x(){
        console.log(b); //  here b is just a identifier or a reference.This doesnt mean that b=10;
    }
     b=100;
    return x; // return complete clouse i.e function + its lexical environment bundled together
}

let z=a();
z(); // so if we call z here which contains the function x ,it could print 7, meaning not just the function was returned but the 
// complete closure was returned
// 100 will be printed

// data hidning and encapsulation using closures

function counter(){
    var count=0;
    function addOne(){
        count++;
    }
}
console.log(count);


