function isPrime(num) {
    if(num<=1) return false;
    for(let i=2;i<=(num**(1/2) | 0);i++){
       if(num%i==0) return false;
    }
    return true;
}

const number = 9;
if(isPrime(number)) console.log('Is a prime number');
else console.log('Is not a prime number.');