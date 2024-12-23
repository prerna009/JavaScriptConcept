//Swap Values without using any variable a=10, b=12.

function swapTheNumbers(a,b){
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("After Swapping the numbers :");
    console.log("a = ",a," b = ",b);
}
swapTheNumbers(-89,-34);