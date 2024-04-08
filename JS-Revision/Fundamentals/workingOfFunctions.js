var x=1;

printx(); //prints 10 because in access x from local memory space
// (from the execution context which was newly created when the 
// printx functrion was invoked)
printy(); // print 100 similarly for printy
console.log(x); //prints 1 from global memory space(global 
// execution context)

function printx(){
    var x=10;
    console.log(10);
}
function printy(){
    var x=100;
    console.log(10);
}
