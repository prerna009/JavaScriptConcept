//Sum of squares of first n prime numbers.

function sumOfSquaresOfPrimeNumbers(input) {
    if (input <=0) return 0;
    let sum=0,num=2;
    while(num<=input){
        let isPrime=true;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            sum+=num*num;
        }
        num++;
    }
    return sum;
}
console.log(sumOfSquaresOfPrimeNumbers(5));