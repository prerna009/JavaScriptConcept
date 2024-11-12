console.log(0.1 * 3 == 0.3); //output: false

for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
} //output: 10 ten times because of var is a global function.so, we can use let instead of var variable.

function outer() {
    var b = 2
    function inner() {
        b++;
        console.log(b);
        var b = 3; //NaN but we remove var then it gives 3
    }
    inner();
}
outer();

(function () {
    try {
        throw new Error();
    }
    catch (x) {
        var x = 1, y = 2;
        console.log(x); //1
    }
    console.log(x); //undefined
    console.log(y); //2
})();

console.log(true + 1); //2

Promise.resolve(3).then((res) => {
    console.log(res) //3
}).catch().then().then(res => res).then().catch().then((res) => {
    console.log(res)//undefined
})

console.log([2]==[2]); //false

console.log(test()); //true
function test() {
    return true
}