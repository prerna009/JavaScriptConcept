function firstAndLastOccurrenceNumber(num,digit){
   let numStr = num.toString(),newArr = [];
   for(let i=0;i<numStr.length;i++){
    if(numStr[i]===digit.toString()){
        newArr.push(i);
    }
   }
   return {firstIndex: newArr[0],lastIndex: newArr[newArr.length-1]};
}

const num = 2343335637, digit = 3;
console.log(firstAndLastOccurrenceNumber(num,digit));