//Code to find even numbers in a list.

function findEvenNumber(list){
    let even="";
    for(let i=0;i<list.length;i++){
        if(list[i]%2==0){
            even+=list[i]+" ";
        }
    }
    return even;
}
const list=[34,2,44,5,3,9,8];
console.log("Even numeber in a list : "+findEvenNumber(list));