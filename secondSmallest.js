// WAP to find Second smallest element in an array.

function secondSmallestNumber(arr){
    let min=arr[0],sec=arr[0];
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            sec=min;
            min=arr[i];
        }
        else if(sec>arr[i] && min!==arr[i]){
            sec=arr[i];
        }
    }
    return sec;
}
const originalArray=[12, 35, 1, 10, 34, 1, 35];
console.log("Second smallest number : ",secondSmallestNumber(originalArray));