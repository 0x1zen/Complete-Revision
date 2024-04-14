
// Promise syntax

const git_api="https://api.github.com/users/0x1zen";

fetch(git_api).then((res)=>{
    return res.json();
}).then((finalRes)=>{
    console.log(finalRes);
})

// Async await syntax

async function getData(){
    const value=await fetch(git_api);
    const finalValue= await value.json();
    console.log(finalValue);
}
getData();