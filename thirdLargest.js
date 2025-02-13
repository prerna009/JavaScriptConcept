function thirdLargest(arr){
    let max = -Infinity ,
    sec= -Infinity,
    third= -Infinity;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            third = sec;
            sec = max;
            max = arr[i];
        }
        else if(sec<arr[i] && max!=arr[i]){
            third = sec;
            sec = arr[i];
        }
        else if(third<arr[i] && sec!=arr[i] && max!=arr[i]){
            third = arr[i];
        }
    }
    return third!==-Infinity ? third : max;
}

const arr =[1,2];
console.log(thirdLargest(arr));