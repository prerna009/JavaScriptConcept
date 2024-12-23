//WAP to find missing elements from the array?

function missingElement(arr){
    let min=arr[0],max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]) max=arr[i];
        if(min>arr[i]) min=arr[i];
    }

    let missingElements=[],index=0;
    for(let i=min;i<=max;i++){
        let found=false;
        for(let j=0;j<arr.length;j++){
            if(arr[j]===i) found=true;
        }
        if(!found){
            missingElements[index]=i;
            index++;
        }
    }
    return missingElements;
}
const originalArray=[-1,-7];
console.log("Missing elements in an array : ",missingElement(originalArray));