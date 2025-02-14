function duplicateNumbers(nums) {
    let duplicate = [],index=0,result = 0;
    for(let i=0;i<nums.length;i++){
      if(duplicate.includes(nums[i])){
        return result = nums[i];
      }
      duplicate[index] = nums[i];
      index++;
    }
}
const arr = [23, 4, 5, 1, 2, 7, 6,9,1,2,43,3];
console.log(duplicateNumbers(arr));