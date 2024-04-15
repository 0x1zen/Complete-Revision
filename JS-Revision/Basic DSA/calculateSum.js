const arr=[1,2,8,5,3,5,3];

var output=arr.reduce((acc,curr)=>{
    acc+=curr;
    return acc;
})

console.log(output);