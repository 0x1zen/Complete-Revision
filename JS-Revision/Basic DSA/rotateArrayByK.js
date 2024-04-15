const arr=[1,2,3,4,5];
let k=2;

function reverseFromPosition(arr,startIndex,endIndex){
    let left=startIndex;
    let right=endIndex;

    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
}

 reverseFromPosition(arr,0,k-1);
 reverseFromPosition(arr,k,arr.length-1);
 reverseFromPosition(arr,0,arr.length-1);

 console.log(arr);
