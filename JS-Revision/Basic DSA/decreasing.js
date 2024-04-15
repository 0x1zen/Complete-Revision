const arr=[1,2,8,5,3,5,3];

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]>arr[i]){
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
}

console.log(arr);