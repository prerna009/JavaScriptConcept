let threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } 
            else if (sum < 0) left++;
            else right--;
        }
    }

    return result;
};
const number = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(number));  
