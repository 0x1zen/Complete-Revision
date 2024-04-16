const arr=[1,2,3];
const brr=[4,5,6];

const newArr=[...arr,...brr];
console.log(newArr);

function sum(a,b,c){
    return a+b+c;
}

const numbers=[1,2,3];

console.log(sum(...numbers));

// It is used  to expand iterable objects like arrays or strings into single values
