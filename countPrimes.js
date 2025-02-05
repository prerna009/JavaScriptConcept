
function countPrimeNumbers(input) {
    if (input <=0) return 0;
    let num=2,count=0;
    while(num<=input){
        let isPrime=true;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0) {
                isPrime=false;
                break;
            }
        }
        if(isPrime) count++;
        num++;
    }
    return count;
}
console.log(countPrimeNumbers(430348));