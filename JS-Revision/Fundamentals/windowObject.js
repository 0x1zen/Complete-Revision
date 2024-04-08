
// Along with Global execution context,global window object is created
// Anything which is not present in a function is in the global space
var a=10;
function printx(){
    var x=10;
    console.log(x);
}
console.log(window.a); // prints 10
console.log(this.a);  // prints 10
console.log(x); //reference error since it tries to find x in gloabl 
// space 