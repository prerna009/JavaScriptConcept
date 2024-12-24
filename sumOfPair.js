//[80, 60, 10, 50, 30, 100, 0, 50]
//Find pairs whose sum = 100;
//Logic for above problem?
//What will be the complexity for it?
//Any better solution for the above problem?

function sumOfPairs(arr){
    let pairs=[],index=0,num=60;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===num){
                pairs[index]=[arr[i],arr[j]];
                index++;
            }
        }
    }
    return pairs;
}
const arr=[90, 60, 10, 50, 30, 100, 0, 50];
console.log(sumOfPairs(arr));

//Time Complexity is O(n).