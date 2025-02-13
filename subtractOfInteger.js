function getSubtract(a,b){
    while(b!==0){
        let diff = (~a) & b;
        a = a ^ b;
        b = diff << 1;
    }
    return a;
}

const a=12;b=90;
console.log(getSubtract(a,b));