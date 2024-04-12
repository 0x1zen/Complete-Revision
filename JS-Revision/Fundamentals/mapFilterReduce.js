// // Map Function
const arr=[1,2,3,4,5];
function area(radius){
    return Math.PI*radius*radius;
}
console.log(arr.map(area));

// Filter FUnction

const output=arr.filter((x)=>{
    if(x%2==0){
        return x;
    }
})
console.log(output);

// Reduce Function

const answer=arr.reduce((acc,curr)=>{
    if(curr>acc){
        acc=curr;
    }
    return acc;
},0);
console.log(answer);

// Map Real life example

const users=[
    {firstName:"Raj",lastName:"Dubal",age:21},
    {firstName:"chetan",lastName:"KEsare",age:21},
    {firstName:"Atul",lastName:"Patil",age:65},
    {firstName:"Rohan",lastName:"Mohite",age:71}

]

users.map((x)=>{
    console.log(x.firstName+x.lastName);
})
