//[80, 60, 10, 50, 30, 100, 0, 50]
//Find pairs whose sum = 100;
//Logic for above problem?
//What will be the complexity for it?
//Any better solution for the above problem?

function sumOfPairs(arr){
    const newSet= new Set();
    let pairs=[],index=0;
    for(let num of arr){
        const sum=100-num;
        if(newSet.has(sum)){
            if(pairs!==([sum,num])){
                pairs[index]=[sum,num];
                index++;
            }
        }
        newSet.add(num);
    }
    return pairs;
}
const arr=[90, 60, 10, 50, 30, 100, 0, 50];
console.log(sumOfPairs(arr));

//Time Complexity is O(n).