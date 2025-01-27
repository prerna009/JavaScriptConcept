//Swap Values without using any variable a=10, b=12.

function swapTheNumbers(a,b){
    //first way
    // a=a+b;
    // b=a-b;
    // a=a-b;

    //destructuring assignment
    [a,b] = [b,a];
    console.log("After Swapping the numbers :");
    console.log("a = ",a," b = ",b);
}
swapTheNumbers(-89,-34);