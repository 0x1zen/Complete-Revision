// function statement aka function declaration

function a(){
    console.log("a called")
}

// Function expression

var b=function(){
    console.log("b called");
}
a();
b();

// major difference between function statement and function declaration is hoisting
// function expresssion acts as a variable with undefined assigned to it

// ANonymous function
// function(){

// }

// named function expression

var f=function xyz(){

}

xyz(); // would throw an error reference error  because it is not in the global scope.It is defined as local variable

// first class functions
var abc=function(){
    return function pqr(){

    };
}

console.log(abc());

// the ability to pass functions as an aruguement to another function as a parameter is called as first class functions

// assign to a variable
var func1=function abc(param1){

}

// passing as an arguement
func1(function(){
    console.log("hello world");
})

// returned from another function

function returnFunc(){
    return function newFunc(){

    }
}

// storing a function in an data structure

let arr=[
    function abc(){console.log("Hello")},
    function xyz(){console.log("world");}
]
arr[1];


// arrow functions

var a=()=>{
    
}
