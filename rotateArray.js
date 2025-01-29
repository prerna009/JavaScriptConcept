function rotateArray(nums, k) {
    let n = nums.length;
    k = k % n;  
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]; 
            start++;
            end--;
        }
    }
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
    return nums;
}
const arr = [2,4,5,6,8,9];
console.log(rotateArray(arr));