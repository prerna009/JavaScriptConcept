var merge = function(nums1, m, nums2, n) {
    debugger
   for(let j=0,i=m;j<n;j++){
    if(nums1[i]<nums2[j]){
        nums1[i]=nums2[j];
        i++;
    }
   }
   let result = nums1.sort((a,b)=>a-b);
   return nums1;
 };
 
 const nums1 = [0,0,3,0,0,0,0,0,0], m = 3, nums2 = [-1,1,1,1,2,3], n = 6;
 console.log(merge(nums1,m,nums2,n));