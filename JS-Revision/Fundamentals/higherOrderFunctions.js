const radius=[1,2,3,4];
function area(radius){
    return Math.PI*radius*radius;
}
function diameter(r){
    return r*r;
}


Array.prototype.calculate=(logic)=>{
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.calculate(area));

// Map function

console.log(radius.map(area));


// Higehr order function

function x(y){ // x is the higer order function
    console.log("Hi i am X");
    y();
}
x(function y(){ // y is the callback function
    console.log("Hello i am y");
})