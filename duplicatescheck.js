function duplicateNumbers(nums) {
    let set = new Set();
    for(let num of nums){
      if(set.has(num)) return true;
      set.add(num);
    }
    return false;
}
const arr = [23, 4, 5, 1, 2, 7, 6,9,1,2,43,3];
console.log(duplicateNumbers(arr));