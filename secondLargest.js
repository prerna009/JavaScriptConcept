// WAP to find Second largest element in an array : arr[] = [12, 35, 1, 10, 34, 1, 35], without
// sorting, without using any built-in methods and without deleting duplicate elements. What will be
// the time complexity?

function secondLargestNumber(arr){
    let max=arr[0],sec=arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            sec=max;
            max=arr[i];
        }
        else if(sec<arr[i] && max!==arr[i]){
            sec=arr[i];
        }
    }
    return sec;
}
const originalArray=[12, 35, 1, 10, 34, 1, 35];
console.log("Second largest number : ",secondLargestNumber(originalArray));