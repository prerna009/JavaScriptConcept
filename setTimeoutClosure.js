function x() {
    var i = 1;
    setTimeout(() => { //form a closure
        console.log(i);
    }, 200);
    console.log("Namaste Javascript");
}
x();

function a() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i); //give 6 in 5 times
        }, i * 1000);
    }
}
a();

function s() {
    for (var i = 1; i <= 5; i++) {
        function close(i){
            setTimeout(() => {
                console.log(i); //give proper sequence 1,2,3,4,5
            }, i * 1000);
        }
        close(i);
    }
}
s();

function b() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i); //give 1,2,3,4,5
        }, i * 1000);
    }
}
b();