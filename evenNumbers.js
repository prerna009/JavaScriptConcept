// Code to find even numbers in a list.

function evenNumbers(list){
    let even=[],index=0;
    for(let i=0;i<list.length;i++){
        if(list[i]%2===0){
            even[index]=list[i];
            index++;
        }
    }
    return even;
}
const originalList=[3,2,97,4,55,36,22,7,3,40,33];
console.log("Even numbers in a list : ",evenNumbers(originalList));