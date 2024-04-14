// Manually implementing map filter reduce
const radiusArr=[1,2,3,4,5];

function area(radius){
    return Math.PI*radius*radius;
}
function calculate(){
    var output=[];
    for(let i=0;i<radiusArr.length;i++){
        output.push(area(radiusArr[i]));
    }
    console.log(output);
}
calculate();
    

// Map Function
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
// console.log(answer);

// Map Real life example

const users=[
    {firstName:"Raj",lastName:"Dubal",age:21},
    {firstName:"chetan",lastName:"KEsare",age:21},
    {firstName:"Atul",lastName:"Patil",age:65},
    {firstName:"Rohan",lastName:"Mohite",age:71}

]

const output=users.reduce((acc,curr)=>{
    if(curr.age<30){
        acc.push(curr.firstName);
    }
        return acc;
},[])
console.log(output);

users.map((x)=>{
    console.log(x.firstName+x.lastName);
})

const output=users.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]++;
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});
console.log(output);

const answer=users.filter((x)=>x.age<30).map(x=>x.firstName);
console.log(answer);