//Find prime numbers from 1 ....n.

function findPrimeNumbers(n) {
    if (n < 2) return [];

    const primes = [2];
    for (let num = 3; num <= n; num += 2) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
}
console.log(findPrimeNumbers(5));