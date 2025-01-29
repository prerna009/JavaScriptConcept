//Rotate the Array and check it is sorted or not
function rotateArray(arr, k) {
    let n = arr.length;
    if(k==0) return arr;
    let lastElement = arr[n-1];
    for (let i=n-1;i>0;i--) {
       arr[i]=arr[i-1];
    }
    arr[0] = lastElement;
    return rotateArray(arr,k-1);
}

function isSorted(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]) return false;
    }
    return true;
}

function isSortedAndRotate(arr,k){
    console.log(rotateArray(arr,k));
    return isSorted(arr);
}

const arr = [6,8,9,2,4,5];
const k = 3;
console.log(isSortedAndRotate(arr, k));