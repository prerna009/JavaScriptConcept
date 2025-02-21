var getPermutation = function(n, k) {
    let fact = [1];
    let nums = [] , result = "";
    for(let i=1;i<=n;i++){
        fact[i]=fact[i-1]*i;
        nums.push(i);
    }
    k--;
    for(let i=n;i>0;i--){
        let index = Math.floor(k/fact[i-1]);
        result+=nums[index];
        nums.splice(index,1);
        k%=fact[i-1];
    }
    return result;
};

const n=4,k=9;
console.log(getPermutation(n,k));