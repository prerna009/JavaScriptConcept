// 1
console.log(0.1 * 3 == 0.3); //false


// 2
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
} //10 times 10 return


// 3
function outer() {
    var b = 2;
    function inner() {
        b++;
        console.log(b);
        var b = 3;
    }
    inner();
}
outer(); // NaN


// 4
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})(); // 1,undefined,2

// 5
console.log(true + 1); //2

// 6
Promise.resolve(3)
    .then((res) => {
        console.log(res)
    })
    .catch()
    .then()
    .then(res => res)
    .then()
    .catch()
    .then((res) => {
        console.log(res)
    }); //3 undefined

 // 7
console.log([2] === [2]); // false

// 8
test();
function test() {
    return true
} // nothing

// 9
console.log(3 > 2 > 1); //false
console.log([] + []); //nothing
console.log([] + {});//[object Object]
console.log({ } + {}); //[object Object][object Object]
console.log({ } +[]); //[object Object]
console.log(true == '1'); //true
console.log(true === '1'); //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(NaN === NaN); //false
console.log(typeof null); //object
console.log("b" + "a" + +"a" + "a"); //baNaNa
