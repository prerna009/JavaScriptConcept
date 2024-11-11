//WAP to find missing elements from the array?

function missingElements(arr){
    let max=arr[0],min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
        else if(min>arr[i]){
            min=arr[i];
        }
    }
    
    let missingNumbers=[];
    for(let i=min;i<=max;i++){
        let found=false;
        for(let j=0;j<arr.length;j++){
            if(arr[j]==i){
                found=true;
                break;
            }
        }
        if(!found){
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}
const arr=[1,4,5];
console.log("Missing Elements in an array : "+missingElements(arr));