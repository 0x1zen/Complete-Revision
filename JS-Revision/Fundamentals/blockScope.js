var a=10;
let b=99;
{
    var a=100; // shadows line 1
    let b=100;
    const c=100;
}

console.log(a); //prints 100
console.log(b); // reference error since let declarations are stored in different memory space 
console.log(c); // reference error since const declarations are stored in different memory space 

console.log(b); // prints 99 because no shadowing happens since both are in different blocks.Let and const declarations are block scoped

// illegal shadowing

// case 1:in the below code Since var is not block scoped the declaration of variable a outside of block and inside of block is same
// so we would get syntax error

// invalid
let a=10;
{
    var a=100; 
}

// valid 
let a=10;
function a(){
    var a=100; 
}
// The above code is valid because Var in function scoped.So both variable "a" are different.

// Case 2: since Let and Const declaration are block scoped,the variable a outside of block and inside of block is completely different

// valid
var a = 10;
{
    let a = 100;
}


