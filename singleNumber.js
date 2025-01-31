var singleNumber = function (arr) {
    let freq=[];
    for(let i=0;i<arr.length;i++){
        (freq[arr[i]]) ? freq[arr[i]]++ : freq[arr[i]]=1;
    }
    for(let j=0;j<arr.length;j++){
        if(freq[arr[j]]===1) return arr[j];
    }
};
const arr = [12,4,3,12,2,4,2,1];
console.log(singleNumber(arr));