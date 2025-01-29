function sortedRotatedArray(arr){
    let count = 0;
    let n = arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]>arr[(i+1)%n]){
            count++;
        }
    }
    return count<=1;
}
const arr = [6,8,9,2,4,5];
if(sortedRotatedArray(arr)){
    console.log(true);
}
else{
    console.log(false);
}