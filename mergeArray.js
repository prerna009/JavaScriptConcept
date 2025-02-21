var merge = function(nums1, m, nums2, n) {
   let index1 = m-1;
   let index2 = n-1;
   let mergeIndex = m+n-1;
   while(index1>=0 && index2>=0){
    if(nums1[index1]>nums2[index2]){
        nums1[mergeIndex]=nums1[index1];
        index1--;
    } else {
        nums1[mergeIndex] = nums2[index2];
        index2--;
    }
    mergeIndex--;
   }

   while(index2>=0){
    nums1[mergeIndex]=nums2[index2];
    index2--;
    mergeIndex--;
   }
   return nums1;
};

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(merge(nums1,m,nums2,n));