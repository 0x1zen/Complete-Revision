const arr=[1,1,3,3,4,5,6];

const visited=new Array(arr.length).fill(false);

for(let i=0;i<arr.length;i++){
    if(visited[i]==true){
        continue;
    }
    var count=1;
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            visited[j]=true;
            count++;
        }
    }
    console.log(arr[i],count);
}

