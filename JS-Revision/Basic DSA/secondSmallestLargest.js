

var arr = [2,5,1,7,5,9,14];


function findLargestSecondLargest(){
    let largest = arr[0];
    let secondLargest = Number.MIN_SAFE_INTEGER;
    
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]> largest){
            secondLargest=largest;
            largest=arr[i];
        }
        else if(arr[i]<largest && arr[i]>secondLargest){
            secondLargest=arr[i];
        }
    }
    return {largest,secondLargest};
}
let answer=findLargestSecondLargest();
console.log(answer);

function findSmallestSecondSmallest(){
    let smallest = arr[0];
    let secondSmallest = Number.MAX_SAFE_INTEGER;

    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] < smallest){
            secondSmallest = smallest;
            smallest = arr[i];
        }
        else if(arr[i] < secondSmallest && arr[i] != smallest){
            secondSmallest = arr[i];
        }
    }
    return {smallest,secondSmallest};
}
let output = findSmallestSecondSmallest();
console.log(output);




