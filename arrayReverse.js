function array(arr){
    let temp=[],index=0;
    for(let i=arr.length-1;i>=0;i--){
        temp[index] = arr[i];
        index++;
    }
    return temp;
}

const arr = ['h','e','l','l','o'];
console.log(array(arr));