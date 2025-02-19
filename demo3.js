function findPatternAndMissingNumber(arr){
    let n = arr.length;
    let pattern = (arr[n-1]-arr[0])/(n);
    let missingNumber=null;
    for(let i=1;i<n;i++){
        if(arr[i]-arr[i-1] !== pattern){
           missingNumber = (arr[i-1]+pattern);
        } 
    }
    return {pattern,missingNumber};
}

const arr = [3,6,12,15];
console.log(findPatternAndMissingNumber(arr));