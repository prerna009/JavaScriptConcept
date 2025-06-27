function firstAndLastOccurrenceArray(arr, digit) {
    let firstIndex = -1, lastIndex = -1;
    let left = 0, right = arr.length-1;
    while(arr.length){
        if(arr[left]===digit && firstIndex===-1){
            firstIndex=left;
        }
        if(arr[right]===digit && lastIndex===-1){
            lastIndex=right;
        }
        if(firstIndex!==-1 && lastIndex!==-1) break;
        left++;
        right--;
    }
   return {firstIndex,lastIndex};
}

const arr = [2, 1, 3, 5, 3, 4, 2, 3], digit = 3;
console.log(firstAndLastOccurrenceArray(arr, digit));