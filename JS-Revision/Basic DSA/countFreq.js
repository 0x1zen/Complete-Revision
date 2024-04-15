const arr=[1,1,3,3,4,5,6];

const output=arr.reduce((acc,curr)=>{
    if(curr){
        acc[curr]++;
    }
    else if(acc[curr]===undefined){
        acc[curr]=1;
    }
    return acc;
},{}).map((x)=>x);

console.log(output);