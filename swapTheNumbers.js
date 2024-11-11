//Swap Values without using any variable a=10, b=12.

function swapNumber(a,b){
    console.log("Before swapping the numbers");
    console.log("a="+a);
    console.log("b="+b);
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("After swapping the numbers");
    console.log("a="+a);
    console.log("b="+b);
}
swapNumber(4,7);