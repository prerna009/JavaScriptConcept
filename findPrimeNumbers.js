//Find prime numbers from 1 ....n.

function findPrimeNumbers(n) {
    if (n < 2) return [];

    let primes = [2],index=1;
    for (let num = 3; num <= n; num += 2) {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                //break;
            }
        }
        if (isPrime) {
            primes[index]=num;
            index++;
        }
    }
    return primes;
}
console.log(findPrimeNumbers(100));