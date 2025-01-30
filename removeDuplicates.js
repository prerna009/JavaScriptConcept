var removeDuplicates = function (nums) {
    let index = 0,unique=[];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            unique[index] = nums[i];
            index++;
        }
    }
    return unique;
};
const number = [2,1,1,2,2,6,7];
console.log(removeDuplicates(number));