{
    let a=10;
}
console.log(a); // would throw an error since it is block scoped

{
    const a=10;
}
console.log(a); // would throw an error since it is block scoped

{
    var a=10;
}
// console.log(a);  would not throw an error since it is function scoped