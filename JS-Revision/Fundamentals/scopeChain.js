function a(){ // scope chain of lexical environments
    // x=100;
    b(); // a's lexical environment =local memory of a +
    //  parents lesical environment 
    function b(){
     c(); // b's lexical environment =local memory of b + 
    //  parents lesical environment 
     function c(){
        console.log(x); // c's lexical env=local memory of c + 
        // parents lesical environment 
     }
    }
}

var x=10;
a();