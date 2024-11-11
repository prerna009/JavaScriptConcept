//WAP to print Fibonacci series with recursion.

function fibonacciSeries(n){
    if(n<=1){
        return n;
    }
    return fibonacciSeries(n-1)+fibonacciSeries(n-2);
}
const number=6;
for(let i=0;i<number;i++){
    console.log(fibonacciSeries(i));
}