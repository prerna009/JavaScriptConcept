function outer() {
    let a = 10;
    function inner() {
        let b =5;
        console.log(a+b);
    }
    inner();
}
outer();


function a() {
    console.log('a');
}

function b(d){
    console.log('b');
    d();
}

b(a);