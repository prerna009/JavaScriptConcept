var searchInsert = function(nums, target) {
    let n = nums.length;
    let min = 0, max = n-1 , result = n;
    while(min<=max){
        let mid = parseInt((min+max)/2);
        if(nums[mid]>=target){
            result = mid;
            max = mid-1;
        } else {
            min = mid + 1;
        }
    }
    return result;
};

const nums = [1,3,5,6], target = 7;
console.log(searchInsert(nums,target));