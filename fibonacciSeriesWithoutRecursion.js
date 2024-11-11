//WAP to print Fibonacci series without recursion.

function fibonacciSeries(n){
    let fibo=[];
    for(let i=0;i<n;i++){
        if(i===0){
            fibo[i]=0;
        }
        else if(i===1){
            fibo[i]=1;
        }
        else{
            fibo[i]=fibo[i-1]+fibo[i-2];
        }
    }
    return fibo;
}
const number=6;
console.log("Fibonacci Series : "+fibonacciSeries(number));